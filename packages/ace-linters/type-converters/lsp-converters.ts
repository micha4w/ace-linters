import {
    Range,
    Position,
    Diagnostic,
    InsertTextFormat,
    CompletionList,
    CompletionItem,
    CompletionItemKind,
    Hover,
    MarkupContent,
    MarkedString,
    MarkupKind,
    TextEdit,
    InsertReplaceEdit,
    TextDocumentContentChangeEvent
} from "vscode-languageserver-protocol";
import type {Ace} from "ace-code";
import {Range as AceRange} from "ace-code/src/range";
import {RangeList} from "ace-code/src/range_list";
import {AceLinters} from "../types";
import Tooltip = AceLinters.Tooltip;
import TooltipContent = AceLinters.TooltipContent;
import {CommonConverter} from "./common-converters";


export function fromRange(range: Ace.Range): Range {
    return {
        start: {
            line: range.start.row,
            character: range.start.column
        },
        end: {line: range.end.row, character: range.end.column}
    };
}

export function rangeFromPositions(start: Position, end: Position): Range {
    return {
        start: start,
        end: end
    }
}

export function toRange(range: Range): Ace.Range {
    return new AceRange(range.start.line, range.start.character, range.end.line, range.end.character);
}

export function fromPoint(point: Ace.Point): Position {
    return {line: point.row, character: point.column}
}

export function toPoint(position: Position): Ace.Point {
    return {row: position.line, column: position.character}
}

export function toAnnotations(diagnostics: Diagnostic[]): Ace.Annotation[] {
    return diagnostics.map((el) => {
        return {
            row: el.range.start.line,
            column: el.range.start.character,
            text: el.message,
            type: el.severity === 1 ? "error" : el.severity === 2 ? "warning" : "info"
        };
    });
}

export function toCompletion(item: CompletionItem): Ace.Completion {
    let itemKind = item.kind;
    let kind = itemKind ? Object.keys(CompletionItemKind)[Object.values(CompletionItemKind).indexOf(itemKind)] : undefined;
    let text = item.textEdit?.newText ?? item.insertText ?? item.label;
    let command = (item.command?.command == "editor.action.triggerSuggest") ? "startAutocomplete" : undefined;
    let range = item.textEdit ? getTextEditRange(item.textEdit) : null;
    let completion = {
        meta: kind,
        caption: item.label,
        command: command,
        range: range,
        value: "",
        score: undefined,
        item: item
    };

    if (item.insertTextFormat == InsertTextFormat.Snippet) {
        completion["snippet"] = text;
    } else {
        completion["value"] = text;
    }
    completion["documentation"] = item.documentation; //TODO: this is workaround for services with instant completion
    completion["position"] = item["position"];
    return completion;
}

export function toCompletions(completionList: CompletionList | CompletionItem[]): Ace.Completion[] {
    if (!Array.isArray(completionList))
        completionList = completionList.items;
    return completionList && completionList.map((item) => toCompletion(item));
}

export function toResolvedCompletion(completion: Ace.Completion, item: CompletionItem): Ace.Completion {
    let doc = fromMarkupContent(item.documentation);
    if (doc) {
        if (doc.type === CommonConverter.TooltipType.markdown) {
            completion["docMarkdown"] = doc.text;
        } else {
            completion["docText"] = doc.text;
        }
    }
    return completion;
}

export function toCompletionItem(completion: Ace.Completion): CompletionItem {
    let command;
    if (completion["command"]) {
        command = {
            title: "triggerSuggest",
            command: completion["command"]
        }
    }
    let completionItem: CompletionItem = {
        label: completion.caption ?? "",
        kind: CommonConverter.convertKind(completion.meta),
        command: command,
        insertTextFormat: (completion.snippet) ? InsertTextFormat.Snippet : InsertTextFormat.PlainText,
        documentation: completion["documentation"],
    };
    if (completion["range"]) {
        completionItem.textEdit = {
            range: fromRange(completion["range"]),
            newText: (completion.snippet ?? completion.value)!
        }
    } else {
        completionItem.insertText = (completion.snippet ?? completion.value)!
    }
    completionItem["fileName"] = completion["fileName"];
    completionItem["position"] = completion["position"];
    completionItem["item"] = completion["item"];

    return completionItem;
}

export function getTextEditRange(textEdit: TextEdit | InsertReplaceEdit): Ace.Range {
    if (textEdit.hasOwnProperty("insert") && textEdit.hasOwnProperty("replace")) {
        textEdit = textEdit as InsertReplaceEdit;
        let rangeList = new RangeList();
        rangeList.ranges = [toRange(textEdit.insert), toRange(textEdit.replace)];
        rangeList.merge();
        return rangeList[0];
    } else {
        textEdit = textEdit as TextEdit;
        return toRange(textEdit.range);
    }
}

export function toTooltip(hover: Hover | undefined): Tooltip | undefined {
    let content;
    if (!hover)
        return;
    if (MarkupContent.is(hover.contents)) {
        content = fromMarkupContent(hover.contents);
    } else if (MarkedString.is(hover.contents)) {
        content = {type: CommonConverter.TooltipType.markdown, text: "```" + (hover.contents as any).value + "```"};
    } else {
        let contents = hover.contents.map((el) => {
            if (typeof el !== "string") {
                return `\`\`\`${el.value}\`\`\``;
            } else {
                return el;
            }
        });
        content = {type: CommonConverter.TooltipType.markdown, text: contents.join("\n\n")};
    }
    return {content: content, range: hover.range && toRange(hover.range)};
}

export function fromMarkupContent(content?: string | MarkupContent): TooltipContent | undefined {
    if (!content)
        return;

    if (typeof content === "string") {
        return {type: CommonConverter.TooltipType.plainText, text: content};
    } else if (content.kind === MarkupKind.Markdown) {
        return {type: CommonConverter.TooltipType.markdown, text: content.value};
    } else {
        return {type: CommonConverter.TooltipType.plainText, text: content.value};
    }
}

export function fromAceDelta(delta: Ace.Delta, eol: string): TextDocumentContentChangeEvent {
    const text = delta.lines.length > 1 ? delta.lines.join(eol) : delta.lines[0];
    return {
        range:
            delta.action === "insert"
                ? rangeFromPositions(fromPoint(delta.start), fromPoint(delta.start))
                : rangeFromPositions(fromPoint(delta.start), fromPoint(delta.end)),
        text: delta.action === "insert" ? text : "",
    };
}
