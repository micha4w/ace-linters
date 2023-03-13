import {LanguageProvider} from "../language-provider";
import {Ace} from "ace-code";
import event from "ace-code/src/lib/event";
import {BaseTooltip} from "./base-tooltip";

export class DescriptionTooltip extends BaseTooltip {
    
    constructor(provider: LanguageProvider) {
        super(provider);
        event.addListener(this.getElement(), "mouseout", this.onMouseOut);
    }

    registerEditor(editor: Ace.Editor) {
        editor.on("mousemove", this.onMouseMove);
    }

    $activateEditor(editor: Ace.Editor) {
        super.$activateEditor(editor);
        this.$activeEditor.container.addEventListener("mouseout", this.onMouseOut);
    }

    $inactivateEditor() {
        if (!this.$activeEditor)
            return;
        this.$activeEditor.container.removeEventListener("mouseout", this.onMouseOut);

        this._activeEditor = undefined;
    }

    private $registerEditorEvents() {
        this.$activeEditor.on("change", this.$hide);
        this.$activeEditor.on("mousewheel", this.$hide);
        //@ts-ignore
        this.$activeEditor.on("mousedown", this.$hide);
    }

    private $removeEditorEvents() {
        this.$activeEditor.off("change", this.$hide);
        this.$activeEditor.off("mousewheel", this.$hide);
        //@ts-ignore
        this.$activeEditor.off("mousedown", this.$hide);

        this.$activeEditor.container.removeEventListener("mouseout", this.onMouseOut);
        this._activeEditor = undefined;
    }

    update(editor: Ace.Editor) {
        clearTimeout(this.$mouseMoveTimer);
        clearTimeout(this.$showTimer);
        if (this.isOpen) {
            this.doHover();
        } else {
            this.$mouseMoveTimer = setTimeout(() => {
                this.$inactivateEditor();
                this.$activateEditor(editor);
                this.doHover();
                this.$mouseMoveTimer = undefined;
            }, 500);

        }
    };

    doHover = () => {
        let renderer = this.$activeEditor.renderer;
        let screenCoordinates = renderer.pixelToScreenCoordinates(this.x, this.y);

        let session = this.$activeEditor.session;
        let docPos = session.screenToDocumentPosition(screenCoordinates.row, screenCoordinates.column);

        this.provider.doHover(session, docPos, (hover) => {
            let descriptionText = hover ? this.provider.getTooltipText(hover) : null;
            if (!hover || !descriptionText) {
                this.hide();
                return;
            }

            let token = session.getTokenAt(docPos.row, docPos.column + 1);

            let row = hover.range?.start.row ?? docPos.row;
            let column = hover.range?.start.column ?? token?.start ?? 0;

            if (this.descriptionText != descriptionText) {
                this.hide();
                this.setHtml(descriptionText);
                this.descriptionText = descriptionText;
            } else if (this.row == row && this.column == column && this.isOpen) {
                return;
            }

            this.row = row;
            this.column = column;

            if (this.$mouseMoveTimer) {
                this.$show();
            } else {
                this.$showTimer = setTimeout(() => {
                    this.$show();
                    this.$showTimer = undefined;
                }, 500);
            }
        });
    }

    $show() {
        super.$show();
        this.$registerEditorEvents();
    }

    onMouseMove = (e: MouseEvent) => {
        this.x = e.clientX;
        this.y = e.clientY;
        this.update(e["editor"]);
    };

    onMouseOut = (e: MouseEvent) => {
        clearTimeout(this.$mouseMoveTimer);
        clearTimeout(this.$showTimer);
        if (!e.relatedTarget || e.relatedTarget == this.getElement())
            return;

        //@ts-ignore
        if (e && e.currentTarget.contains(e.relatedTarget))
            return;
        //@ts-ignore
        if (!e.relatedTarget.classList.contains("ace_content"))
            this.$hide();
    }

    $hide = () => {
        clearTimeout(this.$mouseMoveTimer);
        clearTimeout(this.$showTimer);
        this.$removeEditorEvents();
        this.hide();
    }

    destroy() {
        this.$hide();
        event.removeListener(this.getElement(), "mouseout", this.onMouseOut);
    };
}
