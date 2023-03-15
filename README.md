# Ace Linters (Ace Language Client)

Ace linters is lsp client for Ace editor. It comes with large number of preconfigured easy to use in browser servers.

Example client with pre-defined services:
```javascript
import * as ace from "ace-code";
import {Mode as TypescriptMode} from "ace-code/src/mode/typescript";
import {LanguageProvider} from "ace-linters/build/ace-linters";

// Create a web worker
let worker = new Worker(new URL('./webworker.js', import.meta.url));

// Create an Ace editor
let editor = ace.edit("container", {
    mode: new TypescriptMode() // Set the mode of the editor to Typescript
});

// Create a language provider for web worker (
let languageProvider = LanguageProvider.create(worker);

// Register the editor with the language provider
languageProvider.registerEditor(editor);

``` 

[Example webworker.js with all services](https://github.com/mkslanc/ace-linters/blob/main/packages/demo/webworker-lsp/webworker.ts)

## Example using script tag from CDN
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.15.3/ace.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.15.3/ext-language_tools.min.js"></script>
<script src="https://www.unpkg.com/ace-linters@0.6.0/build/ace-linters.js"></script>
<div id="editor" style="height: 100px">some text</div>

<script>
    ace.require("ace/ext/language_tools"); //To allow autocompletion
    var CssMode = ace.require("ace/mode/css").Mode;
    var editor = ace.edit("editor", {
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        mode: new CssMode()
    });

    var provider = LanguageProvider.fromCdn("https://www.unpkg.com/ace-linters@0.6.0/build/");
    provider.registerEditor(editor);
</script>
```


Ace linters works in two modes: **WebSockets** and **WebWorkers**.

## Usage with WebSocket (JSON-RPC)

In WebSockets mode, you need to start a language server on any port and connect to it.

Here's an example client:

```javascript
import * as ace from "ace-code";
import {Mode as JSONMode} from "ace-code/src/mode/json"; //any mode you want
import {AceLanguageClient} from "ace-linters/build/ace-language-client";

// Create a web socket
const webSocket = new WebSocket("ws://localhost:3000/exampleServer"); // address of your websocket server

// Create an Ace editor
let editor = ace.edit("container", {
    mode: new JSONMode() // Set the mode of the editor to JSON
});

// Create a language provider for web socket
let languageProvider = AceLanguageClient.for(webSocket);

// Register the editor with the language provider
languageProvider.registerEditor(editor);
```

[Full Example client](https://github.com/mkslanc/ace-linters/blob/main/packages/demo/websockets-lsp/client.ts)

[Full Example server](https://github.com/mkslanc/ace-linters/tree/main/packages/demo/websockets-lsp/server)

## Usage with WebWorker (JSON-RPC)

*client.js*:

```javascript
import * as ace from "ace-code";
import {Mode as TypescriptMode} from "ace-code/src/mode/typescript";
import {AceLanguageClient} from "ace-linters/build/ace-language-client";

// Create a web worker
let worker = new Worker(new URL('./webworker.js', import.meta.url));

// Create an Ace editor
let editor = ace.edit("container", {
    mode: new TypescriptMode() // Set the mode of the editor to Typescript
});

// Create a language provider for web worker (
let languageProvider = AceLanguageClient.for(worker);

// Register the editor with the language provider
languageProvider.registerEditor(editor);

```

[Example client](https://github.com/mkslanc/ace-linters/blob/main/packages/demo/webworker-json-rpc/demo.ts)

**[!]** You need to describe server similar to that example:
[Example server](https://github.com/mkslanc/ace-linters/blob/main/packages/demo/webworker-json-rpc/webworker.ts)

## Supported LSP capabilities:
- Text Document Synchronization (with incremental changes)
- Hover
- Diagnostics
- Formatting
- Completions
- Signature Help

[Full list of capabilities](https://github.com/mkslanc/ace-linters/blob/main/Capabilities.md)

## Supported languages
Ace linters supports the following languages by default with webworkers approach:

- JSON, JSON5 *powered by* [vscode-json-languageservice](https://github.com/Microsoft/vscode-json-languageservice)
- HTML *powered by* [vscode-html-languageservice](https://github.com/Microsoft/vscode-html-languageservice)
- CSS, SCSS, LESS *powered by* [vscode-css-languageservice](https://github.com/Microsoft/vscode-css-languageservice)
- Typescript, Javascript, JSX, TSX *powered by* [Typescript](https://github.com/Microsoft/TypeScript)
- Lua *powered by* [luaparse](https://github.com/fstirlitz/luaparse)
- YAML *powered by* [Yaml Language Server](https://github.com/redhat-developer/yaml-language-server)
- XML *powered by* [XML-Tools](https://github.com/SAP/xml-tools)
- Javascript, JSX *powered by* [Eslint](https://github.com/eslint/eslint)

## Installation

To install Ace linters, you can use the following command:

```bash
npm install ace-linters
```

## License

Ace linters is released under the [MIT License](https://opensource.org/licenses/MIT).
