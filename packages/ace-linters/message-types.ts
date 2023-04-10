import {Ace} from "ace-code";
import {FormattingOptions} from "vscode-languageserver-protocol";
import {AceLinters} from "./types";
import ServiceOptions = AceLinters.ServiceOptions;
import * as lsp from "vscode-languageserver-protocol";

export abstract class BaseMessage {
    abstract type: MessageType;
    sessionId: string;

    protected constructor(sessionId) {
        this.sessionId = sessionId;
    }
}

export class InitMessage extends BaseMessage {
    type: MessageType = MessageType.init;
    mode: string;
    options?: { [key: string]: any };
    value: string;
    version: number;

    constructor(sessionId: string, value: string, version: number, mode: string, options?: { [p: string]: any }) {
        super(sessionId);
        this.version = version;
        this.options = options;
        this.mode = mode;
        this.value = value;
    }
}

export class FormatMessage extends BaseMessage {
    type: MessageType = MessageType.format;
    value: lsp.Range;
    format: FormattingOptions;

    constructor(sessionId: string, value: lsp.Range, format) {
        super(sessionId);
        this.value = value;
        this.format = format;
    }
}

export class CompleteMessage extends BaseMessage {
    type: MessageType = MessageType.complete;
    value: lsp.Position;

    constructor(sessionId: string, value: lsp.Position) {
        super(sessionId);
        this.value = value;
    }
}

export class ResolveCompletionMessage extends BaseMessage {
    type: MessageType = MessageType.resolveCompletion;
    value: lsp.CompletionItem;

    constructor(sessionId: string, value: lsp.CompletionItem) {
        super(sessionId);
        this.value = value;
    }
}

export class HoverMessage extends BaseMessage {
    type: MessageType = MessageType.hover;
    value: lsp.Position;

    constructor(sessionId: string, value: lsp.Position) {
        super(sessionId);
        this.value = value;
    }
}

export class ValidateMessage extends BaseMessage {
    type: MessageType = MessageType.validate;

    constructor(sessionId: string) {
        super(sessionId);
    }
}

export class ChangeMessage extends BaseMessage {
    type: MessageType = MessageType.change;
    value: string;
    version: number

    constructor(sessionId: string, value: string, version: number) {
        super(sessionId);
        this.value = value;
        this.version = version;
    }
}

export class DeltasMessage extends BaseMessage {
    type: MessageType = MessageType.applyDelta;
    value: Ace.Delta[];
    version: number;

    constructor(sessionId: string, value: Ace.Delta[], version: number) {
        super(sessionId);
        this.value = value;
        this.version = version;
    }
}

export class ChangeModeMessage extends BaseMessage {
    type: MessageType = MessageType.changeMode;
    mode: string;
    value: string;

    constructor(sessionId: string, value: string, mode: string) {
        super(sessionId);
        this.value = value;
        this.mode = mode;
    }
}

export class ChangeOptionsMessage extends BaseMessage {
    type: MessageType = MessageType.changeOptions;
    options: ServiceOptions;
    merge: boolean;

    constructor(sessionId: string, options: ServiceOptions, merge: boolean = false) {
        super(sessionId);
        this.options = options;
        this.merge = merge;
    }
}

export class DisposeMessage extends BaseMessage {
    type: MessageType = MessageType.dispose;

    constructor(sessionId: string) {
        super(sessionId);
    }
}

export class GlobalOptionsMessage {
    type: MessageType = MessageType.globalOptions;
    serviceName: AceLinters.SupportedServices;
    options: ServiceOptions;
    merge: boolean;

    constructor(serviceName: AceLinters.SupportedServices, options: ServiceOptions, merge: boolean) {
        this.serviceName = serviceName;
        this.options = options;
        this.merge = merge;
    }
}

export class SetFeaturesStateMessage {
    type: MessageType = MessageType.setFeaturesState;
    serviceName: AceLinters.SupportedServices;
    options: AceLinters.ServiceFeatures;

    constructor(serviceName: AceLinters.SupportedServices, options: AceLinters.ServiceFeatures) {
        this.serviceName = serviceName;
        this.options = options;
    }
}

export enum MessageType {
    init,
    format,
    complete,
    resolveCompletion,
    change,
    hover,
    validate,
    applyDelta,
    changeMode,
    changeOptions,
    dispose,
    globalOptions,
    setFeaturesState
}
