import { Range, Position, Diagnostic, CompletionItem, Hover, MarkupContent, TextEdit, InsertReplaceEdit, TextDocumentContentChangeEvent, SignatureHelp, DocumentHighlight } from "vscode-languageserver-protocol";
import type { Ace } from "ace-code";
import { AceRangeData, CompletionService, FilterDiagnosticsOptions, Tooltip } from "../../types/language-service";
export declare function fromRange(range: AceRangeData): Range;
export declare function rangeFromPositions(start: Position, end: Position): Range;
export declare function toRange(range: Range): AceRangeData;
export declare function fromPoint(point: Ace.Point): Position;
export declare function toPoint(position: Position): Ace.Point;
export declare function toAnnotations(diagnostics: Diagnostic[]): Ace.Annotation[];
export declare function toCompletion(item: CompletionItem): {
    meta: string | undefined;
    caption: string;
    score: undefined;
};
export declare function toCompletions(completions: CompletionService[]): Ace.Completion[];
export declare function toResolvedCompletion(completion: Ace.Completion, item: CompletionItem): Ace.Completion;
export declare function toCompletionItem(completion: Ace.Completion): CompletionItem;
export declare function getTextEditRange(textEdit: TextEdit | InsertReplaceEdit): AceRangeData;
export declare function toTooltip(hover: Hover[] | undefined): Tooltip | undefined;
export declare function fromSignatureHelp(signatureHelp: SignatureHelp[] | undefined): Tooltip | undefined;
export declare function fromMarkupContent(content?: string | MarkupContent): string | undefined;
export declare function fromAceDelta(delta: Ace.Delta, eol: string): TextDocumentContentChangeEvent;
export declare function filterDiagnostics(diagnostics: Diagnostic[], filterErrors: FilterDiagnosticsOptions): Diagnostic[];
export declare function fromDocumentHighlights(documentHighlights: DocumentHighlight[]): Ace.MarkerGroupItem[];
export declare function toMarkerGroupItem(range: any, className: any, tooltipText?: any): Ace.MarkerGroupItem;
