import type {FormattingOptions} from "vscode-languageserver-types";
import type {Ace} from "ace-code/ace";
import {CommonConverter} from "./type-converters/common-converters";
import {TextDocument} from "vscode-json-languageservice";
import * as ts from "./services/typescript/lib/typescriptServices";

export namespace AceLinters {
    export interface LanguageService {
        documents: { [sessionID: string]: Ace.Document };
        $service;
        mode: string;

        $getDocument(sessionID: string): TextDocument;

        format(sessionID: string, range: Ace.Range, format: FormattingOptions): TextEdit[];

        doHover(sessionID: string, position: Ace.Point): Promise<Tooltip>;

        doValidation(sessionID: string): Promise<Ace.Annotation[]>;

        doComplete(sessionID: string, position: Ace.Point): Promise<Ace.Completion[]>;

        setValue(sessionID: string, value: string);

        applyDeltas(sessionID: string, delta: Ace.Delta[]);

        addDocument(sessionID: string, document: Ace.Document, options: ServiceOptions);

        setOptions(sessionID: string, options: ServiceOptions);

        setGlobalOptions(options: ServiceOptions);

        getDocument(sessionID: string): Ace.Document;

        removeDocument(sessionID: string);

        getDocumentValue(sessionID: string): string;
    }

    interface TooltipContent {
        type: CommonConverter.TooltipType,
        text: string
    }

    export interface Tooltip {
        content: TooltipContent
        range?: Ace.Range
    }

    export interface TextEdit {
        range: Ace.Range;
        newText: string;
    }

    export interface ServiceOptions {
        [name: string]: any
    }

    export interface JsonServiceOptions {
        jsonSchema?: string,
        allowComments?: boolean,
        trailingCommas?: boolean
    }

    export interface TsServiceOptions {
        compilerOptions?: ts.CompilerOptions
    }

    export interface ServicesAvailableOptions {
        json: JsonServiceOptions,
        typescript: TsServiceOptions
    }
}