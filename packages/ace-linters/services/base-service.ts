import * as lsp from "vscode-languageserver-protocol";
import {AceLinters} from "../types";
import {mergeObjects} from "../utils";
import {TextDocument} from "vscode-languageserver-textdocument";
import {TextDocumentItem} from "vscode-languageserver-protocol";

export abstract class BaseService<OptionsType extends AceLinters.ServiceOptions = AceLinters.ServiceOptions> implements AceLinters.LanguageService {
    abstract $service;
    mode: string;
    documents: { [sessionID: string]: TextDocument } = {};
    options: { [sessionID: string]: OptionsType } = {};
    globalOptions: OptionsType = {} as OptionsType;

    protected constructor(mode: string) {
        this.mode = mode;
    }

    addDocument(document: TextDocument | TextDocumentItem) {
        if (typeof document["getText"] == "function") {
            this.documents[document.uri] = document as TextDocument;
        } else {
            this.documents[document.uri] = TextDocument.create(document.uri, document.languageId, document.version, (document as TextDocumentItem).text)
        }
        //TODO:
        /*if (options)
            this.setOptions(sessionID, options);*/
    }

    getDocument(uri: string): TextDocument {
        return this.documents[uri];
    }

    removeDocument(document: TextDocument) {
        delete this.documents[document.uri];
        if (this.options[document.uri]) {
            delete this.options[document.uri];
        }
    }

    getDocumentValue(uri: string): string {
        return this.getDocument(uri).getText();
    }

    setValue(uri: string, value: string) {
        let document = this.getDocument(uri);
        document = TextDocument.create(document.uri, document.languageId, document.version + 1, value);
        this.documents[document.uri] = document;
    }

    setGlobalOptions(options: OptionsType) {
        this.globalOptions = options ?? {} as OptionsType;
    }

    setOptions(sessionID: string, options: OptionsType, merge = false) {
        this.options[sessionID] = merge ? mergeObjects(options, this.options[sessionID]) : options;
    }

    getOption<T extends keyof OptionsType>(sessionID: string, optionName: T): OptionsType[T] {
        if (this.options[sessionID] && this.options[sessionID][optionName]) {
            return this.options[sessionID][optionName];
        } else {
            return this.globalOptions[optionName];
        }
    }

    /*applyDeltas(sessionID: string, deltas: Ace.Delta[]) { //TODO:
        let data = deltas;
        let document = this.getDocument(sessionID);

        this.$setVersion(document);
        if (data[0].start) {
            document.applyDeltas(data);
        } else {
            for (let i = 0; i < data.length; i += 2) {
                let d, err;
                if (Array.isArray(data[i + 1])) {
                    d = {action: "insert", start: data[i], lines: data[i + 1]};
                } else {
                    d = {action: "remove", start: data[i], end: data[i + 1]};
                }

                let linesLength = document["$lines"].length;
                if ((d.action == "insert" ? d.start : d.end).row >= linesLength) {
                    err = new Error("Invalid delta");
                    err.data = {
                        linesLength: linesLength,
                        start: d.start,
                        end: d.end
                    };
                    throw err;
                }

                document.applyDelta(d, true);
            }
        }
    }*/

    doComplete(document, position: lsp.Position): Promise<lsp.CompletionItem[] | lsp.CompletionList | null> {
        return Promise.resolve(undefined);
    }

    doHover(document, position: lsp.Position): Promise<lsp.Hover | null> {
        return Promise.resolve(undefined);
    }

    doResolve(item: lsp.CompletionItem): Promise<lsp.CompletionItem> {
        return Promise.resolve(undefined);
    }

    doValidation(document): Promise<lsp.Diagnostic[]> {
        return Promise.resolve([]);
    }

    format(document, range: lsp.Range, options: lsp.FormattingOptions): lsp.TextEdit[] | null {
        return undefined;
    }

}
