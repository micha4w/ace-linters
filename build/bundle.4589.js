"use strict";
(self["webpackChunkace_linters_root"] = self["webpackChunkace_linters_root"] || []).push([[4589],{

/***/ 24589:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var XmlMode = (__webpack_require__(94268).Mode);
var JavaScriptMode = (__webpack_require__(88057).Mode);
var SvgHighlightRules = (__webpack_require__(94255)/* .SvgHighlightRules */ .Y);
var MixedFoldMode = (__webpack_require__(92974)/* .FoldMode */ .Z);
var XmlFoldMode = (__webpack_require__(64631)/* .FoldMode */ .Z);
var CStyleFoldMode = (__webpack_require__(12764)/* .FoldMode */ .Z);

var Mode = function() {
    XmlMode.call(this);
    
    this.HighlightRules = SvgHighlightRules;
    
    this.createModeDelegates({
        "js-": JavaScriptMode
    });
    
    this.foldingRules = new MixedFoldMode(new XmlFoldMode(), {
        "js-": new CStyleFoldMode()
    });
};

oop.inherits(Mode, XmlMode);

(function() {

    this.getNextLineIndent = function(state, line, tab) {
        return this.$getIndent(line);
    };
    

    this.$id = "ace/mode/svg";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 94255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var JavaScriptHighlightRules = (__webpack_require__(33801)/* .JavaScriptHighlightRules */ ._);
var XmlHighlightRules = (__webpack_require__(75239)/* .XmlHighlightRules */ .U);

var SvgHighlightRules = function() {
    XmlHighlightRules.call(this);

    this.embedTagRules(JavaScriptHighlightRules, "js-", "script");

    this.normalizeRules();
};

oop.inherits(SvgHighlightRules, XmlHighlightRules);

exports.Y = SvgHighlightRules;


/***/ }),

/***/ 94268:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var lang = __webpack_require__(20124);
var TextMode = (__webpack_require__(98030).Mode);
var XmlHighlightRules = (__webpack_require__(75239)/* .XmlHighlightRules */ .U);
var XmlBehaviour = (__webpack_require__(67809)/* .XmlBehaviour */ .D);
var XmlFoldMode = (__webpack_require__(64631)/* .FoldMode */ .Z);
var WorkerClient = (__webpack_require__(91451).WorkerClient);

var Mode = function() {
   this.HighlightRules = XmlHighlightRules;
   this.$behaviour = new XmlBehaviour();
   this.foldingRules = new XmlFoldMode();
};

oop.inherits(Mode, TextMode);

(function() {

    this.voidElements = lang.arrayToMap([]);

    this.blockComment = {start: "<!--", end: "-->"};

    this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], "ace/mode/xml_worker", "Worker");
        worker.attachToDocument(session.getDocument());

        worker.on("error", function(e) {
            session.setAnnotations(e.data);
        });

        worker.on("terminate", function() {
            session.clearAnnotations();
        });

        return worker;
    };
    
    this.$id = "ace/mode/xml";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 75239:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var TextHighlightRules = (__webpack_require__(28053)/* .TextHighlightRules */ .K);

var XmlHighlightRules = function(normalize) {
    // http://www.w3.org/TR/REC-xml/#NT-NameChar
    // NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
    // NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
    var tagRegex = "[_:a-zA-Z\xc0-\uffff][-_:.a-zA-Z0-9\xc0-\uffff]*";

    this.$rules = {
        start : [
            {token : "string.cdata.xml", regex : "<\\!\\[CDATA\\[", next : "cdata"},
            {
                token : ["punctuation.instruction.xml", "keyword.instruction.xml"],
                regex : "(<\\?)(" + tagRegex + ")", next : "processing_instruction"
            },
            {token : "comment.start.xml", regex : "<\\!--", next : "comment"},
            {
                token : ["xml-pe.doctype.xml", "xml-pe.doctype.xml"],
                regex : "(<\\!)(DOCTYPE)(?=[\\s])", next : "doctype", caseInsensitive: true
            },
            {include : "tag"},
            {token : "text.end-tag-open.xml", regex: "</"},
            {token : "text.tag-open.xml", regex: "<"},
            {include : "reference"},
            {defaultToken : "text.xml"}
        ],

        processing_instruction : [{
            token : "entity.other.attribute-name.decl-attribute-name.xml",
            regex : tagRegex
        }, {
            token : "keyword.operator.decl-attribute-equals.xml",
            regex : "="
        }, {
            include: "whitespace"
        }, {
            include: "string"
        }, {
            token : "punctuation.xml-decl.xml",
            regex : "\\?>",
            next : "start"
        }],

        doctype : [
            {include : "whitespace"},
            {include : "string"},
            {token : "xml-pe.doctype.xml", regex : ">", next : "start"},
            {token : "xml-pe.xml", regex : "[-_a-zA-Z0-9:]+"},
            {token : "punctuation.int-subset", regex : "\\[", push : "int_subset"}
        ],

        int_subset : [{
            token : "text.xml",
            regex : "\\s+"
        }, {
            token: "punctuation.int-subset.xml",
            regex: "]",
            next: "pop"
        }, {
            token : ["punctuation.markup-decl.xml", "keyword.markup-decl.xml"],
            regex : "(<\\!)(" + tagRegex + ")",
            push : [{
                token : "text",
                regex : "\\s+"
            },
            {
                token : "punctuation.markup-decl.xml",
                regex : ">",
                next : "pop"
            },
            {include : "string"}]
        }],

        cdata : [
            {token : "string.cdata.xml", regex : "\\]\\]>", next : "start"},
            {token : "text.xml", regex : "\\s+"},
            {token : "text.xml", regex : "(?:[^\\]]|\\](?!\\]>))+"}
        ],

        comment : [
            {token : "comment.end.xml", regex : "-->", next : "start"},
            {defaultToken : "comment.xml"}
        ],

        reference : [{
            token : "constant.language.escape.reference.xml",
            regex : "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
        }],

        attr_reference : [{
            token : "constant.language.escape.reference.attribute-value.xml",
            regex : "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
        }],

        tag : [{
            token : ["meta.tag.punctuation.tag-open.xml", "meta.tag.punctuation.end-tag-open.xml", "meta.tag.tag-name.xml"],
            regex : "(?:(<)|(</))((?:" + tagRegex + ":)?" + tagRegex + ")",
            next: [
                {include : "attributes"},
                {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>", next : "start"}
            ]
        }],

        tag_whitespace : [
            {token : "text.tag-whitespace.xml", regex : "\\s+"}
        ],
        // for doctype and processing instructions
        whitespace : [
            {token : "text.whitespace.xml", regex : "\\s+"}
        ],

        // for doctype and processing instructions
        string: [{
            token : "string.xml",
            regex : "'",
            push : [
                {token : "string.xml", regex: "'", next: "pop"},
                {defaultToken : "string.xml"}
            ]
        }, {
            token : "string.xml",
            regex : '"',
            push : [
                {token : "string.xml", regex: '"', next: "pop"},
                {defaultToken : "string.xml"}
            ]
        }],

        attributes: [{
            token : "entity.other.attribute-name.xml",
            regex : tagRegex
        }, {
            token : "keyword.operator.attribute-equals.xml",
            regex : "="
        }, {
            include: "tag_whitespace"
        }, {
            include: "attribute_value"
        }],

        attribute_value: [{
            token : "string.attribute-value.xml",
            regex : "'",
            push : [
                {token : "string.attribute-value.xml", regex: "'", next: "pop"},
                {include : "attr_reference"},
                {defaultToken : "string.attribute-value.xml"}
            ]
        }, {
            token : "string.attribute-value.xml",
            regex : '"',
            push : [
                {token : "string.attribute-value.xml", regex: '"', next: "pop"},
                {include : "attr_reference"},
                {defaultToken : "string.attribute-value.xml"}
            ]
        }]
    };

    if (this.constructor === XmlHighlightRules)
        this.normalizeRules();
};


(function() {

    this.embedTagRules = function(HighlightRules, prefix, tag){
        this.$rules.tag.unshift({
            token : ["meta.tag.punctuation.tag-open.xml", "meta.tag." + tag + ".tag-name.xml"],
            regex : "(<)(" + tag + "(?=\\s|>|$))",
            next: [
                {include : "attributes"},
                {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>", next : prefix + "start"}
            ]
        });

        this.$rules[tag + "-end"] = [
            {include : "attributes"},
            {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>",  next: "start",
                onMatch : function(value, currentState, stack) {
                    stack.splice(0);
                    return this.token;
            }}
        ];

        this.embedRules(HighlightRules, prefix, [{
            token: ["meta.tag.punctuation.end-tag-open.xml", "meta.tag." + tag + ".tag-name.xml"],
            regex : "(</)(" + tag + "(?=\\s|>|$))",
            next: tag + "-end"
        }, {
            token: "string.cdata.xml",
            regex : "<\\!\\[CDATA\\["
        }, {
            token: "string.cdata.xml",
            regex : "\\]\\]>"
        }]);
    };

}).call(TextHighlightRules.prototype);

oop.inherits(XmlHighlightRules, TextHighlightRules);

exports.U = XmlHighlightRules;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsaUJBQWlCLDhDQUE4QztBQUMvRCxpQkFBaUI7QUFDakI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4REFBOEQ7QUFDL0UsaUJBQWlCLDJCQUEyQjtBQUM1QyxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhEQUE4RDtBQUMvRSxpQkFBaUIsMkJBQTJCO0FBQzVDLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQSxTQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2FjZS1saW50ZXJzLXJvb3QvLi9ub2RlX21vZHVsZXMvYWNlLWNvZGUvc3JjL21vZGUvc3ZnLmpzIiwid2VicGFjazovL2FjZS1saW50ZXJzLXJvb3QvLi9ub2RlX21vZHVsZXMvYWNlLWNvZGUvc3JjL21vZGUvc3ZnX2hpZ2hsaWdodF9ydWxlcy5qcyIsIndlYnBhY2s6Ly9hY2UtbGludGVycy1yb290Ly4vbm9kZV9tb2R1bGVzL2FjZS1jb2RlL3NyYy9tb2RlL3htbC5qcyIsIndlYnBhY2s6Ly9hY2UtbGludGVycy1yb290Ly4vbm9kZV9tb2R1bGVzL2FjZS1jb2RlL3NyYy9tb2RlL3htbF9oaWdobGlnaHRfcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBvb3AgPSByZXF1aXJlKFwiLi4vbGliL29vcFwiKTtcbnZhciBYbWxNb2RlID0gcmVxdWlyZShcIi4veG1sXCIpLk1vZGU7XG52YXIgSmF2YVNjcmlwdE1vZGUgPSByZXF1aXJlKFwiLi9qYXZhc2NyaXB0XCIpLk1vZGU7XG52YXIgU3ZnSGlnaGxpZ2h0UnVsZXMgPSByZXF1aXJlKFwiLi9zdmdfaGlnaGxpZ2h0X3J1bGVzXCIpLlN2Z0hpZ2hsaWdodFJ1bGVzO1xudmFyIE1peGVkRm9sZE1vZGUgPSByZXF1aXJlKFwiLi9mb2xkaW5nL21peGVkXCIpLkZvbGRNb2RlO1xudmFyIFhtbEZvbGRNb2RlID0gcmVxdWlyZShcIi4vZm9sZGluZy94bWxcIikuRm9sZE1vZGU7XG52YXIgQ1N0eWxlRm9sZE1vZGUgPSByZXF1aXJlKFwiLi9mb2xkaW5nL2NzdHlsZVwiKS5Gb2xkTW9kZTtcblxudmFyIE1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICBYbWxNb2RlLmNhbGwodGhpcyk7XG4gICAgXG4gICAgdGhpcy5IaWdobGlnaHRSdWxlcyA9IFN2Z0hpZ2hsaWdodFJ1bGVzO1xuICAgIFxuICAgIHRoaXMuY3JlYXRlTW9kZURlbGVnYXRlcyh7XG4gICAgICAgIFwianMtXCI6IEphdmFTY3JpcHRNb2RlXG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5mb2xkaW5nUnVsZXMgPSBuZXcgTWl4ZWRGb2xkTW9kZShuZXcgWG1sRm9sZE1vZGUoKSwge1xuICAgICAgICBcImpzLVwiOiBuZXcgQ1N0eWxlRm9sZE1vZGUoKVxuICAgIH0pO1xufTtcblxub29wLmluaGVyaXRzKE1vZGUsIFhtbE1vZGUpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmdldE5leHRMaW5lSW5kZW50ID0gZnVuY3Rpb24oc3RhdGUsIGxpbmUsIHRhYikge1xuICAgICAgICByZXR1cm4gdGhpcy4kZ2V0SW5kZW50KGxpbmUpO1xuICAgIH07XG4gICAgXG5cbiAgICB0aGlzLiRpZCA9IFwiYWNlL21vZGUvc3ZnXCI7XG59KS5jYWxsKE1vZGUucHJvdG90eXBlKTtcblxuZXhwb3J0cy5Nb2RlID0gTW9kZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgb29wID0gcmVxdWlyZShcIi4uL2xpYi9vb3BcIik7XG52YXIgSmF2YVNjcmlwdEhpZ2hsaWdodFJ1bGVzID0gcmVxdWlyZShcIi4vamF2YXNjcmlwdF9oaWdobGlnaHRfcnVsZXNcIikuSmF2YVNjcmlwdEhpZ2hsaWdodFJ1bGVzO1xudmFyIFhtbEhpZ2hsaWdodFJ1bGVzID0gcmVxdWlyZShcIi4veG1sX2hpZ2hsaWdodF9ydWxlc1wiKS5YbWxIaWdobGlnaHRSdWxlcztcblxudmFyIFN2Z0hpZ2hsaWdodFJ1bGVzID0gZnVuY3Rpb24oKSB7XG4gICAgWG1sSGlnaGxpZ2h0UnVsZXMuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuZW1iZWRUYWdSdWxlcyhKYXZhU2NyaXB0SGlnaGxpZ2h0UnVsZXMsIFwianMtXCIsIFwic2NyaXB0XCIpO1xuXG4gICAgdGhpcy5ub3JtYWxpemVSdWxlcygpO1xufTtcblxub29wLmluaGVyaXRzKFN2Z0hpZ2hsaWdodFJ1bGVzLCBYbWxIaWdobGlnaHRSdWxlcyk7XG5cbmV4cG9ydHMuU3ZnSGlnaGxpZ2h0UnVsZXMgPSBTdmdIaWdobGlnaHRSdWxlcztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgb29wID0gcmVxdWlyZShcIi4uL2xpYi9vb3BcIik7XG52YXIgbGFuZyA9IHJlcXVpcmUoXCIuLi9saWIvbGFuZ1wiKTtcbnZhciBUZXh0TW9kZSA9IHJlcXVpcmUoXCIuL3RleHRcIikuTW9kZTtcbnZhciBYbWxIaWdobGlnaHRSdWxlcyA9IHJlcXVpcmUoXCIuL3htbF9oaWdobGlnaHRfcnVsZXNcIikuWG1sSGlnaGxpZ2h0UnVsZXM7XG52YXIgWG1sQmVoYXZpb3VyID0gcmVxdWlyZShcIi4vYmVoYXZpb3VyL3htbFwiKS5YbWxCZWhhdmlvdXI7XG52YXIgWG1sRm9sZE1vZGUgPSByZXF1aXJlKFwiLi9mb2xkaW5nL3htbFwiKS5Gb2xkTW9kZTtcbnZhciBXb3JrZXJDbGllbnQgPSByZXF1aXJlKFwiLi4vd29ya2VyL3dvcmtlcl9jbGllbnRcIikuV29ya2VyQ2xpZW50O1xuXG52YXIgTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgdGhpcy5IaWdobGlnaHRSdWxlcyA9IFhtbEhpZ2hsaWdodFJ1bGVzO1xuICAgdGhpcy4kYmVoYXZpb3VyID0gbmV3IFhtbEJlaGF2aW91cigpO1xuICAgdGhpcy5mb2xkaW5nUnVsZXMgPSBuZXcgWG1sRm9sZE1vZGUoKTtcbn07XG5cbm9vcC5pbmhlcml0cyhNb2RlLCBUZXh0TW9kZSk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIHRoaXMudm9pZEVsZW1lbnRzID0gbGFuZy5hcnJheVRvTWFwKFtdKTtcblxuICAgIHRoaXMuYmxvY2tDb21tZW50ID0ge3N0YXJ0OiBcIjwhLS1cIiwgZW5kOiBcIi0tPlwifTtcblxuICAgIHRoaXMuY3JlYXRlV29ya2VyID0gZnVuY3Rpb24oc2Vzc2lvbikge1xuICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlckNsaWVudChbXCJhY2VcIl0sIFwiYWNlL21vZGUveG1sX3dvcmtlclwiLCBcIldvcmtlclwiKTtcbiAgICAgICAgd29ya2VyLmF0dGFjaFRvRG9jdW1lbnQoc2Vzc2lvbi5nZXREb2N1bWVudCgpKTtcblxuICAgICAgICB3b3JrZXIub24oXCJlcnJvclwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBzZXNzaW9uLnNldEFubm90YXRpb25zKGUuZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdvcmtlci5vbihcInRlcm1pbmF0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlc3Npb24uY2xlYXJBbm5vdGF0aW9ucygpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gd29ya2VyO1xuICAgIH07XG4gICAgXG4gICAgdGhpcy4kaWQgPSBcImFjZS9tb2RlL3htbFwiO1xufSkuY2FsbChNb2RlLnByb3RvdHlwZSk7XG5cbmV4cG9ydHMuTW9kZSA9IE1vZGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG9vcCA9IHJlcXVpcmUoXCIuLi9saWIvb29wXCIpO1xudmFyIFRleHRIaWdobGlnaHRSdWxlcyA9IHJlcXVpcmUoXCIuL3RleHRfaGlnaGxpZ2h0X3J1bGVzXCIpLlRleHRIaWdobGlnaHRSdWxlcztcblxudmFyIFhtbEhpZ2hsaWdodFJ1bGVzID0gZnVuY3Rpb24obm9ybWFsaXplKSB7XG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvUkVDLXhtbC8jTlQtTmFtZUNoYXJcbiAgICAvLyBOYW1lU3RhcnRDaGFyXHQgICA6Oj0gICBcdFwiOlwiIHwgW0EtWl0gfCBcIl9cIiB8IFthLXpdIHwgWyN4QzAtI3hENl0gfCBbI3hEOC0jeEY2XSB8IFsjeEY4LSN4MkZGXSB8IFsjeDM3MC0jeDM3RF0gfCBbI3gzN0YtI3gxRkZGXSB8IFsjeDIwMEMtI3gyMDBEXSB8IFsjeDIwNzAtI3gyMThGXSB8IFsjeDJDMDAtI3gyRkVGXSB8IFsjeDMwMDEtI3hEN0ZGXSB8IFsjeEY5MDAtI3hGRENGXSB8IFsjeEZERjAtI3hGRkZEXSB8IFsjeDEwMDAwLSN4RUZGRkZdXG4gICAgLy8gTmFtZUNoYXJcdCAgIDo6PSAgIFx0TmFtZVN0YXJ0Q2hhciB8IFwiLVwiIHwgXCIuXCIgfCBbMC05XSB8ICN4QjcgfCBbI3gwMzAwLSN4MDM2Rl0gfCBbI3gyMDNGLSN4MjA0MF1cbiAgICB2YXIgdGFnUmVnZXggPSBcIltfOmEtekEtWlxceGMwLVxcdWZmZmZdWy1fOi5hLXpBLVowLTlcXHhjMC1cXHVmZmZmXSpcIjtcblxuICAgIHRoaXMuJHJ1bGVzID0ge1xuICAgICAgICBzdGFydCA6IFtcbiAgICAgICAgICAgIHt0b2tlbiA6IFwic3RyaW5nLmNkYXRhLnhtbFwiLCByZWdleCA6IFwiPFxcXFwhXFxcXFtDREFUQVxcXFxbXCIsIG5leHQgOiBcImNkYXRhXCJ9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRva2VuIDogW1wicHVuY3R1YXRpb24uaW5zdHJ1Y3Rpb24ueG1sXCIsIFwia2V5d29yZC5pbnN0cnVjdGlvbi54bWxcIl0sXG4gICAgICAgICAgICAgICAgcmVnZXggOiBcIig8XFxcXD8pKFwiICsgdGFnUmVnZXggKyBcIilcIiwgbmV4dCA6IFwicHJvY2Vzc2luZ19pbnN0cnVjdGlvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge3Rva2VuIDogXCJjb21tZW50LnN0YXJ0LnhtbFwiLCByZWdleCA6IFwiPFxcXFwhLS1cIiwgbmV4dCA6IFwiY29tbWVudFwifSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0b2tlbiA6IFtcInhtbC1wZS5kb2N0eXBlLnhtbFwiLCBcInhtbC1wZS5kb2N0eXBlLnhtbFwiXSxcbiAgICAgICAgICAgICAgICByZWdleCA6IFwiKDxcXFxcISkoRE9DVFlQRSkoPz1bXFxcXHNdKVwiLCBuZXh0IDogXCJkb2N0eXBlXCIsIGNhc2VJbnNlbnNpdGl2ZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtpbmNsdWRlIDogXCJ0YWdcIn0sXG4gICAgICAgICAgICB7dG9rZW4gOiBcInRleHQuZW5kLXRhZy1vcGVuLnhtbFwiLCByZWdleDogXCI8L1wifSxcbiAgICAgICAgICAgIHt0b2tlbiA6IFwidGV4dC50YWctb3Blbi54bWxcIiwgcmVnZXg6IFwiPFwifSxcbiAgICAgICAgICAgIHtpbmNsdWRlIDogXCJyZWZlcmVuY2VcIn0sXG4gICAgICAgICAgICB7ZGVmYXVsdFRva2VuIDogXCJ0ZXh0LnhtbFwifVxuICAgICAgICBdLFxuXG4gICAgICAgIHByb2Nlc3NpbmdfaW5zdHJ1Y3Rpb24gOiBbe1xuICAgICAgICAgICAgdG9rZW4gOiBcImVudGl0eS5vdGhlci5hdHRyaWJ1dGUtbmFtZS5kZWNsLWF0dHJpYnV0ZS1uYW1lLnhtbFwiLFxuICAgICAgICAgICAgcmVnZXggOiB0YWdSZWdleFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0b2tlbiA6IFwia2V5d29yZC5vcGVyYXRvci5kZWNsLWF0dHJpYnV0ZS1lcXVhbHMueG1sXCIsXG4gICAgICAgICAgICByZWdleCA6IFwiPVwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGluY2x1ZGU6IFwid2hpdGVzcGFjZVwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGluY2x1ZGU6IFwic3RyaW5nXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdG9rZW4gOiBcInB1bmN0dWF0aW9uLnhtbC1kZWNsLnhtbFwiLFxuICAgICAgICAgICAgcmVnZXggOiBcIlxcXFw/PlwiLFxuICAgICAgICAgICAgbmV4dCA6IFwic3RhcnRcIlxuICAgICAgICB9XSxcblxuICAgICAgICBkb2N0eXBlIDogW1xuICAgICAgICAgICAge2luY2x1ZGUgOiBcIndoaXRlc3BhY2VcIn0sXG4gICAgICAgICAgICB7aW5jbHVkZSA6IFwic3RyaW5nXCJ9LFxuICAgICAgICAgICAge3Rva2VuIDogXCJ4bWwtcGUuZG9jdHlwZS54bWxcIiwgcmVnZXggOiBcIj5cIiwgbmV4dCA6IFwic3RhcnRcIn0sXG4gICAgICAgICAgICB7dG9rZW4gOiBcInhtbC1wZS54bWxcIiwgcmVnZXggOiBcIlstX2EtekEtWjAtOTpdK1wifSxcbiAgICAgICAgICAgIHt0b2tlbiA6IFwicHVuY3R1YXRpb24uaW50LXN1YnNldFwiLCByZWdleCA6IFwiXFxcXFtcIiwgcHVzaCA6IFwiaW50X3N1YnNldFwifVxuICAgICAgICBdLFxuXG4gICAgICAgIGludF9zdWJzZXQgOiBbe1xuICAgICAgICAgICAgdG9rZW4gOiBcInRleHQueG1sXCIsXG4gICAgICAgICAgICByZWdleCA6IFwiXFxcXHMrXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdG9rZW46IFwicHVuY3R1YXRpb24uaW50LXN1YnNldC54bWxcIixcbiAgICAgICAgICAgIHJlZ2V4OiBcIl1cIixcbiAgICAgICAgICAgIG5leHQ6IFwicG9wXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdG9rZW4gOiBbXCJwdW5jdHVhdGlvbi5tYXJrdXAtZGVjbC54bWxcIiwgXCJrZXl3b3JkLm1hcmt1cC1kZWNsLnhtbFwiXSxcbiAgICAgICAgICAgIHJlZ2V4IDogXCIoPFxcXFwhKShcIiArIHRhZ1JlZ2V4ICsgXCIpXCIsXG4gICAgICAgICAgICBwdXNoIDogW3tcbiAgICAgICAgICAgICAgICB0b2tlbiA6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIHJlZ2V4IDogXCJcXFxccytcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0b2tlbiA6IFwicHVuY3R1YXRpb24ubWFya3VwLWRlY2wueG1sXCIsXG4gICAgICAgICAgICAgICAgcmVnZXggOiBcIj5cIixcbiAgICAgICAgICAgICAgICBuZXh0IDogXCJwb3BcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtpbmNsdWRlIDogXCJzdHJpbmdcIn1dXG4gICAgICAgIH1dLFxuXG4gICAgICAgIGNkYXRhIDogW1xuICAgICAgICAgICAge3Rva2VuIDogXCJzdHJpbmcuY2RhdGEueG1sXCIsIHJlZ2V4IDogXCJcXFxcXVxcXFxdPlwiLCBuZXh0IDogXCJzdGFydFwifSxcbiAgICAgICAgICAgIHt0b2tlbiA6IFwidGV4dC54bWxcIiwgcmVnZXggOiBcIlxcXFxzK1wifSxcbiAgICAgICAgICAgIHt0b2tlbiA6IFwidGV4dC54bWxcIiwgcmVnZXggOiBcIig/OlteXFxcXF1dfFxcXFxdKD8hXFxcXF0+KSkrXCJ9XG4gICAgICAgIF0sXG5cbiAgICAgICAgY29tbWVudCA6IFtcbiAgICAgICAgICAgIHt0b2tlbiA6IFwiY29tbWVudC5lbmQueG1sXCIsIHJlZ2V4IDogXCItLT5cIiwgbmV4dCA6IFwic3RhcnRcIn0sXG4gICAgICAgICAgICB7ZGVmYXVsdFRva2VuIDogXCJjb21tZW50LnhtbFwifVxuICAgICAgICBdLFxuXG4gICAgICAgIHJlZmVyZW5jZSA6IFt7XG4gICAgICAgICAgICB0b2tlbiA6IFwiY29uc3RhbnQubGFuZ3VhZ2UuZXNjYXBlLnJlZmVyZW5jZS54bWxcIixcbiAgICAgICAgICAgIHJlZ2V4IDogXCIoPzomI1swLTldKzspfCg/OiYjeFswLTlhLWZBLUZdKzspfCg/OiZbYS16QS1aMC05XzpcXFxcLi1dKzspXCJcbiAgICAgICAgfV0sXG5cbiAgICAgICAgYXR0cl9yZWZlcmVuY2UgOiBbe1xuICAgICAgICAgICAgdG9rZW4gOiBcImNvbnN0YW50Lmxhbmd1YWdlLmVzY2FwZS5yZWZlcmVuY2UuYXR0cmlidXRlLXZhbHVlLnhtbFwiLFxuICAgICAgICAgICAgcmVnZXggOiBcIig/OiYjWzAtOV0rOyl8KD86JiN4WzAtOWEtZkEtRl0rOyl8KD86JlthLXpBLVowLTlfOlxcXFwuLV0rOylcIlxuICAgICAgICB9XSxcblxuICAgICAgICB0YWcgOiBbe1xuICAgICAgICAgICAgdG9rZW4gOiBbXCJtZXRhLnRhZy5wdW5jdHVhdGlvbi50YWctb3Blbi54bWxcIiwgXCJtZXRhLnRhZy5wdW5jdHVhdGlvbi5lbmQtdGFnLW9wZW4ueG1sXCIsIFwibWV0YS50YWcudGFnLW5hbWUueG1sXCJdLFxuICAgICAgICAgICAgcmVnZXggOiBcIig/Oig8KXwoPC8pKSgoPzpcIiArIHRhZ1JlZ2V4ICsgXCI6KT9cIiArIHRhZ1JlZ2V4ICsgXCIpXCIsXG4gICAgICAgICAgICBuZXh0OiBbXG4gICAgICAgICAgICAgICAge2luY2x1ZGUgOiBcImF0dHJpYnV0ZXNcIn0sXG4gICAgICAgICAgICAgICAge3Rva2VuIDogXCJtZXRhLnRhZy5wdW5jdHVhdGlvbi50YWctY2xvc2UueG1sXCIsIHJlZ2V4IDogXCIvPz5cIiwgbmV4dCA6IFwic3RhcnRcIn1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfV0sXG5cbiAgICAgICAgdGFnX3doaXRlc3BhY2UgOiBbXG4gICAgICAgICAgICB7dG9rZW4gOiBcInRleHQudGFnLXdoaXRlc3BhY2UueG1sXCIsIHJlZ2V4IDogXCJcXFxccytcIn1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gZm9yIGRvY3R5cGUgYW5kIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb25zXG4gICAgICAgIHdoaXRlc3BhY2UgOiBbXG4gICAgICAgICAgICB7dG9rZW4gOiBcInRleHQud2hpdGVzcGFjZS54bWxcIiwgcmVnZXggOiBcIlxcXFxzK1wifVxuICAgICAgICBdLFxuXG4gICAgICAgIC8vIGZvciBkb2N0eXBlIGFuZCBwcm9jZXNzaW5nIGluc3RydWN0aW9uc1xuICAgICAgICBzdHJpbmc6IFt7XG4gICAgICAgICAgICB0b2tlbiA6IFwic3RyaW5nLnhtbFwiLFxuICAgICAgICAgICAgcmVnZXggOiBcIidcIixcbiAgICAgICAgICAgIHB1c2ggOiBbXG4gICAgICAgICAgICAgICAge3Rva2VuIDogXCJzdHJpbmcueG1sXCIsIHJlZ2V4OiBcIidcIiwgbmV4dDogXCJwb3BcIn0sXG4gICAgICAgICAgICAgICAge2RlZmF1bHRUb2tlbiA6IFwic3RyaW5nLnhtbFwifVxuICAgICAgICAgICAgXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0b2tlbiA6IFwic3RyaW5nLnhtbFwiLFxuICAgICAgICAgICAgcmVnZXggOiAnXCInLFxuICAgICAgICAgICAgcHVzaCA6IFtcbiAgICAgICAgICAgICAgICB7dG9rZW4gOiBcInN0cmluZy54bWxcIiwgcmVnZXg6ICdcIicsIG5leHQ6IFwicG9wXCJ9LFxuICAgICAgICAgICAgICAgIHtkZWZhdWx0VG9rZW4gOiBcInN0cmluZy54bWxcIn1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfV0sXG5cbiAgICAgICAgYXR0cmlidXRlczogW3tcbiAgICAgICAgICAgIHRva2VuIDogXCJlbnRpdHkub3RoZXIuYXR0cmlidXRlLW5hbWUueG1sXCIsXG4gICAgICAgICAgICByZWdleCA6IHRhZ1JlZ2V4XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRva2VuIDogXCJrZXl3b3JkLm9wZXJhdG9yLmF0dHJpYnV0ZS1lcXVhbHMueG1sXCIsXG4gICAgICAgICAgICByZWdleCA6IFwiPVwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGluY2x1ZGU6IFwidGFnX3doaXRlc3BhY2VcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBpbmNsdWRlOiBcImF0dHJpYnV0ZV92YWx1ZVwiXG4gICAgICAgIH1dLFxuXG4gICAgICAgIGF0dHJpYnV0ZV92YWx1ZTogW3tcbiAgICAgICAgICAgIHRva2VuIDogXCJzdHJpbmcuYXR0cmlidXRlLXZhbHVlLnhtbFwiLFxuICAgICAgICAgICAgcmVnZXggOiBcIidcIixcbiAgICAgICAgICAgIHB1c2ggOiBbXG4gICAgICAgICAgICAgICAge3Rva2VuIDogXCJzdHJpbmcuYXR0cmlidXRlLXZhbHVlLnhtbFwiLCByZWdleDogXCInXCIsIG5leHQ6IFwicG9wXCJ9LFxuICAgICAgICAgICAgICAgIHtpbmNsdWRlIDogXCJhdHRyX3JlZmVyZW5jZVwifSxcbiAgICAgICAgICAgICAgICB7ZGVmYXVsdFRva2VuIDogXCJzdHJpbmcuYXR0cmlidXRlLXZhbHVlLnhtbFwifVxuICAgICAgICAgICAgXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0b2tlbiA6IFwic3RyaW5nLmF0dHJpYnV0ZS12YWx1ZS54bWxcIixcbiAgICAgICAgICAgIHJlZ2V4IDogJ1wiJyxcbiAgICAgICAgICAgIHB1c2ggOiBbXG4gICAgICAgICAgICAgICAge3Rva2VuIDogXCJzdHJpbmcuYXR0cmlidXRlLXZhbHVlLnhtbFwiLCByZWdleDogJ1wiJywgbmV4dDogXCJwb3BcIn0sXG4gICAgICAgICAgICAgICAge2luY2x1ZGUgOiBcImF0dHJfcmVmZXJlbmNlXCJ9LFxuICAgICAgICAgICAgICAgIHtkZWZhdWx0VG9rZW4gOiBcInN0cmluZy5hdHRyaWJ1dGUtdmFsdWUueG1sXCJ9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1dXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yID09PSBYbWxIaWdobGlnaHRSdWxlcylcbiAgICAgICAgdGhpcy5ub3JtYWxpemVSdWxlcygpO1xufTtcblxuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmVtYmVkVGFnUnVsZXMgPSBmdW5jdGlvbihIaWdobGlnaHRSdWxlcywgcHJlZml4LCB0YWcpe1xuICAgICAgICB0aGlzLiRydWxlcy50YWcudW5zaGlmdCh7XG4gICAgICAgICAgICB0b2tlbiA6IFtcIm1ldGEudGFnLnB1bmN0dWF0aW9uLnRhZy1vcGVuLnhtbFwiLCBcIm1ldGEudGFnLlwiICsgdGFnICsgXCIudGFnLW5hbWUueG1sXCJdLFxuICAgICAgICAgICAgcmVnZXggOiBcIig8KShcIiArIHRhZyArIFwiKD89XFxcXHN8PnwkKSlcIixcbiAgICAgICAgICAgIG5leHQ6IFtcbiAgICAgICAgICAgICAgICB7aW5jbHVkZSA6IFwiYXR0cmlidXRlc1wifSxcbiAgICAgICAgICAgICAgICB7dG9rZW4gOiBcIm1ldGEudGFnLnB1bmN0dWF0aW9uLnRhZy1jbG9zZS54bWxcIiwgcmVnZXggOiBcIi8/PlwiLCBuZXh0IDogcHJlZml4ICsgXCJzdGFydFwifVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRydWxlc1t0YWcgKyBcIi1lbmRcIl0gPSBbXG4gICAgICAgICAgICB7aW5jbHVkZSA6IFwiYXR0cmlidXRlc1wifSxcbiAgICAgICAgICAgIHt0b2tlbiA6IFwibWV0YS50YWcucHVuY3R1YXRpb24udGFnLWNsb3NlLnhtbFwiLCByZWdleCA6IFwiLz8+XCIsICBuZXh0OiBcInN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgb25NYXRjaCA6IGZ1bmN0aW9uKHZhbHVlLCBjdXJyZW50U3RhdGUsIHN0YWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnNwbGljZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9rZW47XG4gICAgICAgICAgICB9fVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuZW1iZWRSdWxlcyhIaWdobGlnaHRSdWxlcywgcHJlZml4LCBbe1xuICAgICAgICAgICAgdG9rZW46IFtcIm1ldGEudGFnLnB1bmN0dWF0aW9uLmVuZC10YWctb3Blbi54bWxcIiwgXCJtZXRhLnRhZy5cIiArIHRhZyArIFwiLnRhZy1uYW1lLnhtbFwiXSxcbiAgICAgICAgICAgIHJlZ2V4IDogXCIoPC8pKFwiICsgdGFnICsgXCIoPz1cXFxcc3w+fCQpKVwiLFxuICAgICAgICAgICAgbmV4dDogdGFnICsgXCItZW5kXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdG9rZW46IFwic3RyaW5nLmNkYXRhLnhtbFwiLFxuICAgICAgICAgICAgcmVnZXggOiBcIjxcXFxcIVxcXFxbQ0RBVEFcXFxcW1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRva2VuOiBcInN0cmluZy5jZGF0YS54bWxcIixcbiAgICAgICAgICAgIHJlZ2V4IDogXCJcXFxcXVxcXFxdPlwiXG4gICAgICAgIH1dKTtcbiAgICB9O1xuXG59KS5jYWxsKFRleHRIaWdobGlnaHRSdWxlcy5wcm90b3R5cGUpO1xuXG5vb3AuaW5oZXJpdHMoWG1sSGlnaGxpZ2h0UnVsZXMsIFRleHRIaWdobGlnaHRSdWxlcyk7XG5cbmV4cG9ydHMuWG1sSGlnaGxpZ2h0UnVsZXMgPSBYbWxIaWdobGlnaHRSdWxlcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==