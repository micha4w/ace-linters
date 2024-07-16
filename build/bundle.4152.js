"use strict";
(self["webpackChunkace_linters_root"] = self["webpackChunkace_linters_root"] || []).push([[4152],{

/***/ 12764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var Range = (__webpack_require__(59082)/* .Range */ .e);
var BaseFoldMode = (__webpack_require__(15369).FoldMode);

var FoldMode = exports.Z = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    
    //prevent naming conflict with any modes that inherit from cstyle and override this (like csharp)
    this._getFoldWidgetBase = this.getFoldWidget;
    
    /**
     * Gets fold widget with some non-standard extras:
     *
     * @example lineCommentRegionStart
     *      //#region [optional description]
     *
     * @example blockCommentRegionStart
     *      /*#region [optional description] *[/]
     *
     * @example tripleStarFoldingSection
     *      /*** this folds even though 1 line because it has 3 stars ***[/]
     * 
     * @note the pound symbol for region tags is optional
     */
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
    
        if (this.singleLineBlockCommentRe.test(line)) {
            // No widget for single line block comment unless region or triple star
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
    
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
    
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
    
        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
                
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }
            
            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };
    
    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    
    /**
     * gets comment region block with end region assumed to be start of comment in any cstyle mode or SQL mode (--) which inherits from this.
     * There may optionally be a pound symbol before the region/endregion statement
     */
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);


/***/ }),

/***/ 94152:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
  THIS FILE WAS AUTOGENERATED BY mode.tmpl.js
*/



var oop = __webpack_require__(89359);
var TextMode = (__webpack_require__(98030).Mode);
var Tokenizer = (__webpack_require__(60760).Tokenizer);
var LogtalkHighlightRules = (__webpack_require__(43414)/* .LogtalkHighlightRules */ .B);
// TODO: pick appropriate fold mode
var FoldMode = (__webpack_require__(12764)/* .FoldMode */ .Z);

var Mode = function() {
    this.HighlightRules = LogtalkHighlightRules;
    this.foldingRules = new FoldMode();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "%";
    this.blockComment = {start: "/*", end: "*/"};
    this.$id = "ace/mode/logtalk";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 43414:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* THIS FILE WAS AUTOGENERATED FROM Logtalk.tmLanguage (UUID: C11FA1F2-6EDB-11D9-8798-000A95DAA580) */
/****************************************************************
 * IT MIGHT NOT BE PERFECT, PARTICULARLY:                       *
 * IN DECIDING STATES TO TRANSITION TO,                         *
 * IGNORING WHITESPACE,                                         *
 * IGNORING GROUPS WITH ?:,                                     *
 * EXTENDING EXISTING MODES,                                    *
 * GATHERING KEYWORDS, OR                                       *
 * DECIDING WHEN TO USE PUSH.                                   *
 * ...But it's a good start from an existing *.tmlanguage file. *
 ****************************************************************/



var oop = __webpack_require__(89359);
var TextHighlightRules = (__webpack_require__(28053)/* .TextHighlightRules */ .K);

var LogtalkHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = { start: 
       [ { token: 'punctuation.definition.comment.logtalk',
           regex: '/\\*',
           push: 
            [ { token: 'punctuation.definition.comment.logtalk',
                regex: '\\*/',
                next: 'pop' },
              { defaultToken: 'comment.block.logtalk' } ] },
         { todo: 'fix grouping',
           token: 
            [ 'comment.line.percentage.logtalk',
              'punctuation.definition.comment.logtalk' ],
           regex: '%.*$\\n?' },
         { todo: 'fix grouping',
           token: 
            [ 'storage.type.opening.logtalk',
              'punctuation.definition.storage.type.logtalk' ],
           regex: ':-\\s(?:object|protocol|category|module)(?=[(])' },
         { todo: 'fix grouping',
           token: 
            [ 'storage.type.closing.logtalk',
              'punctuation.definition.storage.type.logtalk' ],
           regex: ':-\\send_(?:object|protocol|category)(?=[.])' },
         { caseInsensitive: false,
           token: 'storage.type.relations.logtalk',
           regex: '\\b(?:complements|extends|i(?:nstantiates|mp(?:orts|lements))|specializes)(?=[(])' },
         { caseInsensitive: false,
           todo: 'fix grouping',
           token: 
            [ 'storage.modifier.others.logtalk',
              'punctuation.definition.storage.modifier.logtalk' ],
           regex: ':-\\s(?:e(?:lse|ndif)|built_in|dynamic|synchronized|threaded)(?=[.])' },
         { caseInsensitive: false,
           todo: 'fix grouping',
           token: 
            [ 'storage.modifier.others.logtalk',
              'punctuation.definition.storage.modifier.logtalk' ],
           regex: ':-\\s(?:c(?:alls|oinductive)|e(?:lif|n(?:coding|sure_loaded)|xport)|i(?:f|n(?:clude|itialization|fo))|reexport|set_(?:logtalk|prolog)_flag|uses)(?=[(])' },
         { caseInsensitive: false,
           todo: 'fix grouping',
           token: 
            [ 'storage.modifier.others.logtalk',
              'punctuation.definition.storage.modifier.logtalk' ],
           regex: ':-\\s(?:alias|info|d(?:ynamic|iscontiguous)|m(?:eta_(?:non_terminal|predicate)|ode|ultifile)|p(?:ublic|r(?:otected|ivate))|op|use(?:s|_module)|synchronized)(?=[(])' },
         { token: 'keyword.operator.message-sending.logtalk',
           regex: '(:|::|\\^\\^)' },
         { token: 'keyword.operator.external-call.logtalk',
           regex: '([{}])' },
         { token: 'keyword.operator.mode.logtalk', regex: '(\\?|@)' },
         { token: 'keyword.operator.comparison.term.logtalk',
           regex: '(@=<|@<|@>|@>=|==|\\\\==)' },
         { token: 'keyword.operator.comparison.arithmetic.logtalk',
           regex: '(=<|<|>|>=|=:=|=\\\\=)' },
         { token: 'keyword.operator.bitwise.logtalk',
           regex: '(<<|>>|/\\\\|\\\\/|\\\\)' },
         { token: 'keyword.operator.evaluable.logtalk',
           regex: '\\b(?:e|pi|div|mod|rem)\\b(?![-!(^~])' },
         { token: 'keyword.operator.evaluable.logtalk',
           regex: '(\\*\\*|\\+|-|\\*|/|//)' },
         { token: 'keyword.operator.misc.logtalk',
           regex: '(:-|!|\\\\+|,|;|-->|->|=|\\=|\\.|=\\.\\.|\\^|\\bas\\b|\\bis\\b)' },
         { caseInsensitive: false,
           token: 'support.function.evaluable.logtalk',
           regex: '\\b(a(bs|cos|sin|tan|tan2)|c(eiling|os)|div|exp|flo(at(_(integer|fractional)_part)?|or)|log|m(ax|in|od)|r(em|ound)|s(i(n|gn)|qrt)|t(an|runcate)|xor)(?=[(])' },
         { token: 'support.function.control.logtalk',
           regex: '\\b(?:true|fa(?:il|lse)|repeat|(?:instantiation|system)_error)\\b(?![-!(^~])' },
         { token: 'support.function.control.logtalk',
           regex: '\\b((?:type|domain|existence|permission|representation|evaluation|resource|syntax)_error)(?=[(])' },
         { token: 'support.function.control.logtalk',
           regex: '\\b(?:ca(?:ll|tch)|ignore|throw|once)(?=[(])' },
         { token: 'support.function.chars-and-bytes-io.logtalk',
           regex: '\\b(?:(?:get|p(?:eek|ut))_(c(?:har|ode)|byte)|nl)(?=[(])' },
         { token: 'support.function.chars-and-bytes-io.logtalk',
           regex: '\\bnl\\b' },
         { token: 'support.function.atom-term-processing.logtalk',
           regex: '\\b(?:atom_(?:length|c(?:hars|o(?:ncat|des)))|sub_atom|char_code|number_c(?:har|ode)s)(?=[(])' },
         { caseInsensitive: false,
           token: 'support.function.term-testing.logtalk',
           regex: '\\b(?:var|atom(ic)?|integer|float|c(?:allable|ompound)|n(?:onvar|umber)|ground|acyclic_term)(?=[(])' },
         { token: 'support.function.term-comparison.logtalk',
           regex: '\\b(compare)(?=[(])' },
         { token: 'support.function.term-io.logtalk',
           regex: '\\b(?:read(_term)?|write(?:q|_(?:canonical|term))?|(current_)?(?:char_conversion|op))(?=[(])' },
         { caseInsensitive: false,
           token: 'support.function.term-creation-and-decomposition.logtalk',
           regex: '\\b(arg|copy_term|functor|numbervars|term_variables)(?=[(])' },
         { caseInsensitive: false,
           token: 'support.function.term-unification.logtalk',
           regex: '\\b(subsumes_term|unify_with_occurs_check)(?=[(])' },
         { caseInsensitive: false,
           token: 'support.function.stream-selection-and-control.logtalk',
           regex: '\\b(?:(?:se|curren)t_(?:in|out)put|open|close|flush_output|stream_property|at_end_of_stream|set_stream_position)(?=[(])' },
         { token: 'support.function.stream-selection-and-control.logtalk',
           regex: '\\b(?:flush_output|at_end_of_stream)\\b' },
         { token: 'support.function.prolog-flags.logtalk',
           regex: '\\b((?:se|curren)t_prolog_flag)(?=[(])' },
         { token: 'support.function.compiling-and-loading.logtalk',
           regex: '\\b(logtalk_(?:compile|l(?:ibrary_path|oad|oad_context)|make(_target_action)?))(?=[(])' },
         { token: 'support.function.compiling-and-loading.logtalk',
           regex: '\\b(logtalk_make)\\b' },
         { caseInsensitive: false,
           token: 'support.function.event-handling.logtalk',
           regex: '\\b(?:(?:abolish|define)_events|current_event)(?=[(])' },
         { token: 'support.function.implementation-defined-hooks.logtalk',
           regex: '\\b(?:(?:create|current|set)_logtalk_flag|halt)(?=[(])' },
         { token: 'support.function.implementation-defined-hooks.logtalk',
           regex: '\\b(halt)\\b' },
         { token: 'support.function.sorting.logtalk',
           regex: '\\b((key)?(sort))(?=[(])' },
         { caseInsensitive: false,
           token: 'support.function.entity-creation-and-abolishing.logtalk',
           regex: '\\b((c(?:reate|urrent)|abolish)_(?:object|protocol|category))(?=[(])' },
         { caseInsensitive: false,
           token: 'support.function.reflection.logtalk',
           regex: '\\b((object|protocol|category)_property|co(mplements_object|nforms_to_protocol)|extends_(object|protocol|category)|imp(orts_category|lements_protocol)|(instantiat|specializ)es_class)(?=[(])' },
         { token: 'support.function.logtalk',
           regex: '\\b((?:for|retract)all)(?=[(])' },
         { caseInsensitive: false,
           token: 'support.function.execution-context.logtalk',
           regex: '\\b(?:context|parameter|se(?:lf|nder)|this)(?=[(])' },
         { token: 'support.function.database.logtalk',
           regex: '\\b(?:a(?:bolish|ssert(?:a|z))|clause|retract(all)?)(?=[(])' },
         { token: 'support.function.all-solutions.logtalk',
           regex: '\\b((?:bag|set)of|f(?:ind|or)all)(?=[(])' },
         { caseInsensitive: false,
           token: 'support.function.multi-threading.logtalk',
           regex: '\\b(threaded(_(call|once|ignore|exit|peek|wait|notify))?)(?=[(])' },
         { caseInsensitive: false,
           token: 'support.function.engines.logtalk',
           regex: '\\b(threaded_engine(_(create|destroy|self|next(?:_reified)?|yield|post|fetch))?)(?=[(])' },
         { caseInsensitive: false,
           token: 'support.function.reflection.logtalk',
           regex: '\\b(?:current_predicate|predicate_property)(?=[(])' },
         { token: 'support.function.event-handler.logtalk',
           regex: '\\b(?:before|after)(?=[(])' },
         { token: 'support.function.message-forwarding-handler.logtalk',
           regex: '\\b(forward)(?=[(])' },
         { token: 'support.function.grammar-rule.logtalk',
           regex: '\\b(?:expand_(?:goal|term)|(?:goal|term)_expansion|phrase)(?=[(])' },
         { token: 'punctuation.definition.string.begin.logtalk',
           regex: '\'',
           push: 
            [ { token: 'constant.character.escape.logtalk',
                regex: '\\\\([\\\\abfnrtv"\']|(x[a-fA-F0-9]+|[0-7]+)\\\\)' },
              { token: 'punctuation.definition.string.end.logtalk',
                regex: '\'',
                next: 'pop' },
              { defaultToken: 'string.quoted.single.logtalk' } ] },
         { token: 'punctuation.definition.string.begin.logtalk',
           regex: '"',
           push: 
            [ { token: 'constant.character.escape.logtalk', regex: '\\\\.' },
              { token: 'punctuation.definition.string.end.logtalk',
                regex: '"',
                next: 'pop' },
              { defaultToken: 'string.quoted.double.logtalk' } ] },
         { token: 'constant.numeric.logtalk',
           regex: '\\b(0b[0-1]+|0o[0-7]+|0x[0-9a-fA-F]+)\\b' },
         { token: 'constant.numeric.logtalk',
           regex: '\\b(0\'\\\\.|0\'.|0\'\'|0\'")' },
         { token: 'constant.numeric.logtalk',
           regex: '\\b(\\d+\\.?\\d*((e|E)(\\+|-)?\\d+)?)\\b' },
         { token: 'variable.other.logtalk',
           regex: '\\b([A-Z_][A-Za-z0-9_]*)\\b' } ] };
    
    this.normalizeRules();
};

oop.inherits(LogtalkHighlightRules, TextHighlightRules);

exports.B = LogtalkHighlightRules;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQjtBQUNoQiw0RUFBNEU7QUFDNUUsZ0JBQWdCO0FBQ2hCO0FBQ0EsNkJBQTZCO0FBQzdCLGdCQUFnQiwrQ0FBK0MsR0FBRztBQUNsRSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGdCQUFnQiw0REFBNEQ7QUFDNUUsZ0JBQWdCO0FBQ2hCO0FBQ0EsNkJBQTZCO0FBQzdCLGdCQUFnQiwrQ0FBK0MsR0FBRztBQUNsRSxXQUFXO0FBQ1gsOERBQThEO0FBQzlELFdBQVc7QUFDWCxtREFBbUQ7QUFDbkQsV0FBVztBQUNYLDhEQUE4RDtBQUM5RCxXQUFXO0FBQ1gsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUE2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2FjZS1saW50ZXJzLXJvb3QvLi9ub2RlX21vZHVsZXMvYWNlLWNvZGUvc3JjL21vZGUvZm9sZGluZy9jc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYWNlLWxpbnRlcnMtcm9vdC8uL25vZGVfbW9kdWxlcy9hY2UtY29kZS9zcmMvbW9kZS9sb2d0YWxrLmpzIiwid2VicGFjazovL2FjZS1saW50ZXJzLXJvb3QvLi9ub2RlX21vZHVsZXMvYWNlLWNvZGUvc3JjL21vZGUvbG9ndGFsa19oaWdobGlnaHRfcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBvb3AgPSByZXF1aXJlKFwiLi4vLi4vbGliL29vcFwiKTtcbnZhciBSYW5nZSA9IHJlcXVpcmUoXCIuLi8uLi9yYW5nZVwiKS5SYW5nZTtcbnZhciBCYXNlRm9sZE1vZGUgPSByZXF1aXJlKFwiLi9mb2xkX21vZGVcIikuRm9sZE1vZGU7XG5cbnZhciBGb2xkTW9kZSA9IGV4cG9ydHMuRm9sZE1vZGUgPSBmdW5jdGlvbihjb21tZW50UmVnZXgpIHtcbiAgICBpZiAoY29tbWVudFJlZ2V4KSB7XG4gICAgICAgIHRoaXMuZm9sZGluZ1N0YXJ0TWFya2VyID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgIHRoaXMuZm9sZGluZ1N0YXJ0TWFya2VyLnNvdXJjZS5yZXBsYWNlKC9cXHxbXnxdKj8kLywgXCJ8XCIgKyBjb21tZW50UmVnZXguc3RhcnQpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZm9sZGluZ1N0b3BNYXJrZXIgPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgdGhpcy5mb2xkaW5nU3RvcE1hcmtlci5zb3VyY2UucmVwbGFjZSgvXFx8W158XSo/JC8sIFwifFwiICsgY29tbWVudFJlZ2V4LmVuZClcbiAgICAgICAgKTtcbiAgICB9XG59O1xub29wLmluaGVyaXRzKEZvbGRNb2RlLCBCYXNlRm9sZE1vZGUpO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgdGhpcy5mb2xkaW5nU3RhcnRNYXJrZXIgPSAvKFtcXHtcXFtcXChdKVteXFx9XFxdXFwpXSokfF5cXHMqKFxcL1xcKikvO1xuICAgIHRoaXMuZm9sZGluZ1N0b3BNYXJrZXIgPSAvXlteXFxbXFx7XFwoXSooW1xcfVxcXVxcKV0pfF5bXFxzXFwqXSooXFwqXFwvKS87XG4gICAgdGhpcy5zaW5nbGVMaW5lQmxvY2tDb21tZW50UmU9IC9eXFxzKihcXC9cXCopLipcXCpcXC9cXHMqJC87XG4gICAgdGhpcy50cmlwbGVTdGFyQmxvY2tDb21tZW50UmUgPSAvXlxccyooXFwvXFwqXFwqXFwqKS4qXFwqXFwvXFxzKiQvO1xuICAgIHRoaXMuc3RhcnRSZWdpb25SZSA9IC9eXFxzKihcXC9cXCp8XFwvXFwvKSM/cmVnaW9uXFxiLztcbiAgICBcbiAgICAvL3ByZXZlbnQgbmFtaW5nIGNvbmZsaWN0IHdpdGggYW55IG1vZGVzIHRoYXQgaW5oZXJpdCBmcm9tIGNzdHlsZSBhbmQgb3ZlcnJpZGUgdGhpcyAobGlrZSBjc2hhcnApXG4gICAgdGhpcy5fZ2V0Rm9sZFdpZGdldEJhc2UgPSB0aGlzLmdldEZvbGRXaWRnZXQ7XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0cyBmb2xkIHdpZGdldCB3aXRoIHNvbWUgbm9uLXN0YW5kYXJkIGV4dHJhczpcbiAgICAgKlxuICAgICAqIEBleGFtcGxlIGxpbmVDb21tZW50UmVnaW9uU3RhcnRcbiAgICAgKiAgICAgIC8vI3JlZ2lvbiBbb3B0aW9uYWwgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSBibG9ja0NvbW1lbnRSZWdpb25TdGFydFxuICAgICAqICAgICAgLyojcmVnaW9uIFtvcHRpb25hbCBkZXNjcmlwdGlvbl0gKlsvXVxuICAgICAqXG4gICAgICogQGV4YW1wbGUgdHJpcGxlU3RhckZvbGRpbmdTZWN0aW9uXG4gICAgICogICAgICAvKioqIHRoaXMgZm9sZHMgZXZlbiB0aG91Z2ggMSBsaW5lIGJlY2F1c2UgaXQgaGFzIDMgc3RhcnMgKioqWy9dXG4gICAgICogXG4gICAgICogQG5vdGUgdGhlIHBvdW5kIHN5bWJvbCBmb3IgcmVnaW9uIHRhZ3MgaXMgb3B0aW9uYWxcbiAgICAgKi9cbiAgICB0aGlzLmdldEZvbGRXaWRnZXQgPSBmdW5jdGlvbihzZXNzaW9uLCBmb2xkU3R5bGUsIHJvdykge1xuICAgICAgICB2YXIgbGluZSA9IHNlc3Npb24uZ2V0TGluZShyb3cpO1xuICAgIFxuICAgICAgICBpZiAodGhpcy5zaW5nbGVMaW5lQmxvY2tDb21tZW50UmUudGVzdChsaW5lKSkge1xuICAgICAgICAgICAgLy8gTm8gd2lkZ2V0IGZvciBzaW5nbGUgbGluZSBibG9jayBjb21tZW50IHVubGVzcyByZWdpb24gb3IgdHJpcGxlIHN0YXJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGFydFJlZ2lvblJlLnRlc3QobGluZSkgJiYgIXRoaXMudHJpcGxlU3RhckJsb2NrQ29tbWVudFJlLnRlc3QobGluZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgdmFyIGZ3ID0gdGhpcy5fZ2V0Rm9sZFdpZGdldEJhc2Uoc2Vzc2lvbiwgZm9sZFN0eWxlLCByb3cpO1xuICAgIFxuICAgICAgICBpZiAoIWZ3ICYmIHRoaXMuc3RhcnRSZWdpb25SZS50ZXN0KGxpbmUpKVxuICAgICAgICAgICAgcmV0dXJuIFwic3RhcnRcIjsgLy8gbGluZUNvbW1lbnRSZWdpb25TdGFydFxuICAgIFxuICAgICAgICByZXR1cm4gZnc7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Rm9sZFdpZGdldFJhbmdlID0gZnVuY3Rpb24oc2Vzc2lvbiwgZm9sZFN0eWxlLCByb3csIGZvcmNlTXVsdGlsaW5lKSB7XG4gICAgICAgIHZhciBsaW5lID0gc2Vzc2lvbi5nZXRMaW5lKHJvdyk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5zdGFydFJlZ2lvblJlLnRlc3QobGluZSkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb21tZW50UmVnaW9uQmxvY2soc2Vzc2lvbiwgbGluZSwgcm93KTtcbiAgICAgICAgXG4gICAgICAgIHZhciBtYXRjaCA9IGxpbmUubWF0Y2godGhpcy5mb2xkaW5nU3RhcnRNYXJrZXIpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHZhciBpID0gbWF0Y2guaW5kZXg7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaFsxXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuaW5nQnJhY2tldEJsb2NrKHNlc3Npb24sIG1hdGNoWzFdLCByb3csIGkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHJhbmdlID0gc2Vzc2lvbi5nZXRDb21tZW50Rm9sZFJhbmdlKHJvdywgaSArIG1hdGNoWzBdLmxlbmd0aCwgMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyYW5nZSAmJiAhcmFuZ2UuaXNNdWx0aUxpbmUoKSkge1xuICAgICAgICAgICAgICAgIGlmIChmb3JjZU11bHRpbGluZSkge1xuICAgICAgICAgICAgICAgICAgICByYW5nZSA9IHRoaXMuZ2V0U2VjdGlvblJhbmdlKHNlc3Npb24sIHJvdyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmb2xkU3R5bGUgIT0gXCJhbGxcIilcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcmFuZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9sZFN0eWxlID09PSBcIm1hcmtiZWdpblwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHZhciBtYXRjaCA9IGxpbmUubWF0Y2godGhpcy5mb2xkaW5nU3RvcE1hcmtlcik7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgdmFyIGkgPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKG1hdGNoWzFdKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb3NpbmdCcmFja2V0QmxvY2soc2Vzc2lvbiwgbWF0Y2hbMV0sIHJvdywgaSk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uLmdldENvbW1lbnRGb2xkUmFuZ2Uocm93LCBpLCAtMSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHRoaXMuZ2V0U2VjdGlvblJhbmdlID0gZnVuY3Rpb24oc2Vzc2lvbiwgcm93KSB7XG4gICAgICAgIHZhciBsaW5lID0gc2Vzc2lvbi5nZXRMaW5lKHJvdyk7XG4gICAgICAgIHZhciBzdGFydEluZGVudCA9IGxpbmUuc2VhcmNoKC9cXFMvKTtcbiAgICAgICAgdmFyIHN0YXJ0Um93ID0gcm93O1xuICAgICAgICB2YXIgc3RhcnRDb2x1bW4gPSBsaW5lLmxlbmd0aDtcbiAgICAgICAgcm93ID0gcm93ICsgMTtcbiAgICAgICAgdmFyIGVuZFJvdyA9IHJvdztcbiAgICAgICAgdmFyIG1heFJvdyA9IHNlc3Npb24uZ2V0TGVuZ3RoKCk7XG4gICAgICAgIHdoaWxlICgrK3JvdyA8IG1heFJvdykge1xuICAgICAgICAgICAgbGluZSA9IHNlc3Npb24uZ2V0TGluZShyb3cpO1xuICAgICAgICAgICAgdmFyIGluZGVudCA9IGxpbmUuc2VhcmNoKC9cXFMvKTtcbiAgICAgICAgICAgIGlmIChpbmRlbnQgPT09IC0xKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgIChzdGFydEluZGVudCA+IGluZGVudClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIHZhciBzdWJSYW5nZSA9IHRoaXMuZ2V0Rm9sZFdpZGdldFJhbmdlKHNlc3Npb24sIFwiYWxsXCIsIHJvdyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzdWJSYW5nZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdWJSYW5nZS5zdGFydC5yb3cgPD0gc3RhcnRSb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdWJSYW5nZS5pc011bHRpTGluZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IHN1YlJhbmdlLmVuZC5yb3c7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFydEluZGVudCA9PSBpbmRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW5kUm93ID0gcm93O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHN0YXJ0Um93LCBzdGFydENvbHVtbiwgZW5kUm93LCBzZXNzaW9uLmdldExpbmUoZW5kUm93KS5sZW5ndGgpO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0cyBjb21tZW50IHJlZ2lvbiBibG9jayB3aXRoIGVuZCByZWdpb24gYXNzdW1lZCB0byBiZSBzdGFydCBvZiBjb21tZW50IGluIGFueSBjc3R5bGUgbW9kZSBvciBTUUwgbW9kZSAoLS0pIHdoaWNoIGluaGVyaXRzIGZyb20gdGhpcy5cbiAgICAgKiBUaGVyZSBtYXkgb3B0aW9uYWxseSBiZSBhIHBvdW5kIHN5bWJvbCBiZWZvcmUgdGhlIHJlZ2lvbi9lbmRyZWdpb24gc3RhdGVtZW50XG4gICAgICovXG4gICAgdGhpcy5nZXRDb21tZW50UmVnaW9uQmxvY2sgPSBmdW5jdGlvbihzZXNzaW9uLCBsaW5lLCByb3cpIHtcbiAgICAgICAgdmFyIHN0YXJ0Q29sdW1uID0gbGluZS5zZWFyY2goL1xccyokLyk7XG4gICAgICAgIHZhciBtYXhSb3cgPSBzZXNzaW9uLmdldExlbmd0aCgpO1xuICAgICAgICB2YXIgc3RhcnRSb3cgPSByb3c7XG4gICAgICAgIFxuICAgICAgICB2YXIgcmUgPSAvXlxccyooPzpcXC9cXCp8XFwvXFwvfC0tKSM/KGVuZCk/cmVnaW9uXFxiLztcbiAgICAgICAgdmFyIGRlcHRoID0gMTtcbiAgICAgICAgd2hpbGUgKCsrcm93IDwgbWF4Um93KSB7XG4gICAgICAgICAgICBsaW5lID0gc2Vzc2lvbi5nZXRMaW5lKHJvdyk7XG4gICAgICAgICAgICB2YXIgbSA9IHJlLmV4ZWMobGluZSk7XG4gICAgICAgICAgICBpZiAoIW0pIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKG1bMV0pIGRlcHRoLS07XG4gICAgICAgICAgICBlbHNlIGRlcHRoKys7XG5cbiAgICAgICAgICAgIGlmICghZGVwdGgpIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVuZFJvdyA9IHJvdztcbiAgICAgICAgaWYgKGVuZFJvdyA+IHN0YXJ0Um93KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHN0YXJ0Um93LCBzdGFydENvbHVtbiwgZW5kUm93LCBsaW5lLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG59KS5jYWxsKEZvbGRNb2RlLnByb3RvdHlwZSk7XG4iLCIvKlxuICBUSElTIEZJTEUgV0FTIEFVVE9HRU5FUkFURUQgQlkgbW9kZS50bXBsLmpzXG4qL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG9vcCA9IHJlcXVpcmUoXCIuLi9saWIvb29wXCIpO1xudmFyIFRleHRNb2RlID0gcmVxdWlyZShcIi4vdGV4dFwiKS5Nb2RlO1xudmFyIFRva2VuaXplciA9IHJlcXVpcmUoXCIuLi90b2tlbml6ZXJcIikuVG9rZW5pemVyO1xudmFyIExvZ3RhbGtIaWdobGlnaHRSdWxlcyA9IHJlcXVpcmUoXCIuL2xvZ3RhbGtfaGlnaGxpZ2h0X3J1bGVzXCIpLkxvZ3RhbGtIaWdobGlnaHRSdWxlcztcbi8vIFRPRE86IHBpY2sgYXBwcm9wcmlhdGUgZm9sZCBtb2RlXG52YXIgRm9sZE1vZGUgPSByZXF1aXJlKFwiLi9mb2xkaW5nL2NzdHlsZVwiKS5Gb2xkTW9kZTtcblxudmFyIE1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLkhpZ2hsaWdodFJ1bGVzID0gTG9ndGFsa0hpZ2hsaWdodFJ1bGVzO1xuICAgIHRoaXMuZm9sZGluZ1J1bGVzID0gbmV3IEZvbGRNb2RlKCk7XG4gICAgdGhpcy4kYmVoYXZpb3VyID0gdGhpcy4kZGVmYXVsdEJlaGF2aW91cjtcbn07XG5vb3AuaW5oZXJpdHMoTW9kZSwgVGV4dE1vZGUpO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5saW5lQ29tbWVudFN0YXJ0ID0gXCIlXCI7XG4gICAgdGhpcy5ibG9ja0NvbW1lbnQgPSB7c3RhcnQ6IFwiLypcIiwgZW5kOiBcIiovXCJ9O1xuICAgIHRoaXMuJGlkID0gXCJhY2UvbW9kZS9sb2d0YWxrXCI7XG59KS5jYWxsKE1vZGUucHJvdG90eXBlKTtcblxuZXhwb3J0cy5Nb2RlID0gTW9kZTtcbiIsIi8qIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRCBGUk9NIExvZ3RhbGsudG1MYW5ndWFnZSAoVVVJRDogQzExRkExRjItNkVEQi0xMUQ5LTg3OTgtMDAwQTk1REFBNTgwKSAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIElUIE1JR0hUIE5PVCBCRSBQRVJGRUNULCBQQVJUSUNVTEFSTFk6ICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiBJTiBERUNJRElORyBTVEFURVMgVE8gVFJBTlNJVElPTiBUTywgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogSUdOT1JJTkcgV0hJVEVTUEFDRSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqIElHTk9SSU5HIEdST1VQUyBXSVRIID86LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiBFWFRFTkRJTkcgRVhJU1RJTkcgTU9ERVMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogR0FUSEVSSU5HIEtFWVdPUkRTLCBPUiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqIERFQ0lESU5HIFdIRU4gVE8gVVNFIFBVU0guICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAuLi5CdXQgaXQncyBhIGdvb2Qgc3RhcnQgZnJvbSBhbiBleGlzdGluZyAqLnRtbGFuZ3VhZ2UgZmlsZS4gKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgb29wID0gcmVxdWlyZShcIi4uL2xpYi9vb3BcIik7XG52YXIgVGV4dEhpZ2hsaWdodFJ1bGVzID0gcmVxdWlyZShcIi4vdGV4dF9oaWdobGlnaHRfcnVsZXNcIikuVGV4dEhpZ2hsaWdodFJ1bGVzO1xuXG52YXIgTG9ndGFsa0hpZ2hsaWdodFJ1bGVzID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gcmVnZXhwIG11c3Qgbm90IGhhdmUgY2FwdHVyaW5nIHBhcmVudGhlc2VzLiBVc2UgKD86KSBpbnN0ZWFkLlxuICAgIC8vIHJlZ2V4cHMgYXJlIG9yZGVyZWQgLT4gdGhlIGZpcnN0IG1hdGNoIGlzIHVzZWRcblxuICAgIHRoaXMuJHJ1bGVzID0geyBzdGFydDogXG4gICAgICAgWyB7IHRva2VuOiAncHVuY3R1YXRpb24uZGVmaW5pdGlvbi5jb21tZW50LmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJy9cXFxcKicsXG4gICAgICAgICAgIHB1c2g6IFxuICAgICAgICAgICAgWyB7IHRva2VuOiAncHVuY3R1YXRpb24uZGVmaW5pdGlvbi5jb21tZW50LmxvZ3RhbGsnLFxuICAgICAgICAgICAgICAgIHJlZ2V4OiAnXFxcXCovJyxcbiAgICAgICAgICAgICAgICBuZXh0OiAncG9wJyB9LFxuICAgICAgICAgICAgICB7IGRlZmF1bHRUb2tlbjogJ2NvbW1lbnQuYmxvY2subG9ndGFsaycgfSBdIH0sXG4gICAgICAgICB7IHRvZG86ICdmaXggZ3JvdXBpbmcnLFxuICAgICAgICAgICB0b2tlbjogXG4gICAgICAgICAgICBbICdjb21tZW50LmxpbmUucGVyY2VudGFnZS5sb2d0YWxrJyxcbiAgICAgICAgICAgICAgJ3B1bmN0dWF0aW9uLmRlZmluaXRpb24uY29tbWVudC5sb2d0YWxrJyBdLFxuICAgICAgICAgICByZWdleDogJyUuKiRcXFxcbj8nIH0sXG4gICAgICAgICB7IHRvZG86ICdmaXggZ3JvdXBpbmcnLFxuICAgICAgICAgICB0b2tlbjogXG4gICAgICAgICAgICBbICdzdG9yYWdlLnR5cGUub3BlbmluZy5sb2d0YWxrJyxcbiAgICAgICAgICAgICAgJ3B1bmN0dWF0aW9uLmRlZmluaXRpb24uc3RvcmFnZS50eXBlLmxvZ3RhbGsnIF0sXG4gICAgICAgICAgIHJlZ2V4OiAnOi1cXFxccyg/Om9iamVjdHxwcm90b2NvbHxjYXRlZ29yeXxtb2R1bGUpKD89WyhdKScgfSxcbiAgICAgICAgIHsgdG9kbzogJ2ZpeCBncm91cGluZycsXG4gICAgICAgICAgIHRva2VuOiBcbiAgICAgICAgICAgIFsgJ3N0b3JhZ2UudHlwZS5jbG9zaW5nLmxvZ3RhbGsnLFxuICAgICAgICAgICAgICAncHVuY3R1YXRpb24uZGVmaW5pdGlvbi5zdG9yYWdlLnR5cGUubG9ndGFsaycgXSxcbiAgICAgICAgICAgcmVnZXg6ICc6LVxcXFxzZW5kXyg/Om9iamVjdHxwcm90b2NvbHxjYXRlZ29yeSkoPz1bLl0pJyB9LFxuICAgICAgICAgeyBjYXNlSW5zZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgICAgICB0b2tlbjogJ3N0b3JhZ2UudHlwZS5yZWxhdGlvbnMubG9ndGFsaycsXG4gICAgICAgICAgIHJlZ2V4OiAnXFxcXGIoPzpjb21wbGVtZW50c3xleHRlbmRzfGkoPzpuc3RhbnRpYXRlc3xtcCg/Om9ydHN8bGVtZW50cykpfHNwZWNpYWxpemVzKSg/PVsoXSknIH0sXG4gICAgICAgICB7IGNhc2VJbnNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICAgICAgIHRvZG86ICdmaXggZ3JvdXBpbmcnLFxuICAgICAgICAgICB0b2tlbjogXG4gICAgICAgICAgICBbICdzdG9yYWdlLm1vZGlmaWVyLm90aGVycy5sb2d0YWxrJyxcbiAgICAgICAgICAgICAgJ3B1bmN0dWF0aW9uLmRlZmluaXRpb24uc3RvcmFnZS5tb2RpZmllci5sb2d0YWxrJyBdLFxuICAgICAgICAgICByZWdleDogJzotXFxcXHMoPzplKD86bHNlfG5kaWYpfGJ1aWx0X2lufGR5bmFtaWN8c3luY2hyb25pemVkfHRocmVhZGVkKSg/PVsuXSknIH0sXG4gICAgICAgICB7IGNhc2VJbnNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICAgICAgIHRvZG86ICdmaXggZ3JvdXBpbmcnLFxuICAgICAgICAgICB0b2tlbjogXG4gICAgICAgICAgICBbICdzdG9yYWdlLm1vZGlmaWVyLm90aGVycy5sb2d0YWxrJyxcbiAgICAgICAgICAgICAgJ3B1bmN0dWF0aW9uLmRlZmluaXRpb24uc3RvcmFnZS5tb2RpZmllci5sb2d0YWxrJyBdLFxuICAgICAgICAgICByZWdleDogJzotXFxcXHMoPzpjKD86YWxsc3xvaW5kdWN0aXZlKXxlKD86bGlmfG4oPzpjb2Rpbmd8c3VyZV9sb2FkZWQpfHhwb3J0KXxpKD86ZnxuKD86Y2x1ZGV8aXRpYWxpemF0aW9ufGZvKSl8cmVleHBvcnR8c2V0Xyg/OmxvZ3RhbGt8cHJvbG9nKV9mbGFnfHVzZXMpKD89WyhdKScgfSxcbiAgICAgICAgIHsgY2FzZUluc2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgdG9kbzogJ2ZpeCBncm91cGluZycsXG4gICAgICAgICAgIHRva2VuOiBcbiAgICAgICAgICAgIFsgJ3N0b3JhZ2UubW9kaWZpZXIub3RoZXJzLmxvZ3RhbGsnLFxuICAgICAgICAgICAgICAncHVuY3R1YXRpb24uZGVmaW5pdGlvbi5zdG9yYWdlLm1vZGlmaWVyLmxvZ3RhbGsnIF0sXG4gICAgICAgICAgIHJlZ2V4OiAnOi1cXFxccyg/OmFsaWFzfGluZm98ZCg/OnluYW1pY3xpc2NvbnRpZ3VvdXMpfG0oPzpldGFfKD86bm9uX3Rlcm1pbmFsfHByZWRpY2F0ZSl8b2RlfHVsdGlmaWxlKXxwKD86dWJsaWN8cig/Om90ZWN0ZWR8aXZhdGUpKXxvcHx1c2UoPzpzfF9tb2R1bGUpfHN5bmNocm9uaXplZCkoPz1bKF0pJyB9LFxuICAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQub3BlcmF0b3IubWVzc2FnZS1zZW5kaW5nLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJyg6fDo6fFxcXFxeXFxcXF4pJyB9LFxuICAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQub3BlcmF0b3IuZXh0ZXJuYWwtY2FsbC5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICcoW3t9XSknIH0sXG4gICAgICAgICB7IHRva2VuOiAna2V5d29yZC5vcGVyYXRvci5tb2RlLmxvZ3RhbGsnLCByZWdleDogJyhcXFxcP3xAKScgfSxcbiAgICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLm9wZXJhdG9yLmNvbXBhcmlzb24udGVybS5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICcoQD08fEA8fEA+fEA+PXw9PXxcXFxcXFxcXD09KScgfSxcbiAgICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLm9wZXJhdG9yLmNvbXBhcmlzb24uYXJpdGhtZXRpYy5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICcoPTx8PHw+fD49fD06PXw9XFxcXFxcXFw9KScgfSxcbiAgICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLm9wZXJhdG9yLmJpdHdpc2UubG9ndGFsaycsXG4gICAgICAgICAgIHJlZ2V4OiAnKDw8fD4+fC9cXFxcXFxcXHxcXFxcXFxcXC98XFxcXFxcXFwpJyB9LFxuICAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQub3BlcmF0b3IuZXZhbHVhYmxlLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1xcXFxiKD86ZXxwaXxkaXZ8bW9kfHJlbSlcXFxcYig/IVstIShefl0pJyB9LFxuICAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQub3BlcmF0b3IuZXZhbHVhYmxlLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJyhcXFxcKlxcXFwqfFxcXFwrfC18XFxcXCp8L3wvLyknIH0sXG4gICAgICAgICB7IHRva2VuOiAna2V5d29yZC5vcGVyYXRvci5taXNjLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJyg6LXwhfFxcXFxcXFxcK3wsfDt8LS0+fC0+fD18XFxcXD18XFxcXC58PVxcXFwuXFxcXC58XFxcXF58XFxcXGJhc1xcXFxifFxcXFxiaXNcXFxcYiknIH0sXG4gICAgICAgICB7IGNhc2VJbnNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICAgICAgIHRva2VuOiAnc3VwcG9ydC5mdW5jdGlvbi5ldmFsdWFibGUubG9ndGFsaycsXG4gICAgICAgICAgIHJlZ2V4OiAnXFxcXGIoYShic3xjb3N8c2lufHRhbnx0YW4yKXxjKGVpbGluZ3xvcyl8ZGl2fGV4cHxmbG8oYXQoXyhpbnRlZ2VyfGZyYWN0aW9uYWwpX3BhcnQpP3xvcil8bG9nfG0oYXh8aW58b2QpfHIoZW18b3VuZCl8cyhpKG58Z24pfHFydCl8dChhbnxydW5jYXRlKXx4b3IpKD89WyhdKScgfSxcbiAgICAgICAgIHsgdG9rZW46ICdzdXBwb3J0LmZ1bmN0aW9uLmNvbnRyb2wubG9ndGFsaycsXG4gICAgICAgICAgIHJlZ2V4OiAnXFxcXGIoPzp0cnVlfGZhKD86aWx8bHNlKXxyZXBlYXR8KD86aW5zdGFudGlhdGlvbnxzeXN0ZW0pX2Vycm9yKVxcXFxiKD8hWy0hKF5+XSknIH0sXG4gICAgICAgICB7IHRva2VuOiAnc3VwcG9ydC5mdW5jdGlvbi5jb250cm9sLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1xcXFxiKCg/OnR5cGV8ZG9tYWlufGV4aXN0ZW5jZXxwZXJtaXNzaW9ufHJlcHJlc2VudGF0aW9ufGV2YWx1YXRpb258cmVzb3VyY2V8c3ludGF4KV9lcnJvcikoPz1bKF0pJyB9LFxuICAgICAgICAgeyB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24uY29udHJvbC5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICdcXFxcYig/OmNhKD86bGx8dGNoKXxpZ25vcmV8dGhyb3d8b25jZSkoPz1bKF0pJyB9LFxuICAgICAgICAgeyB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24uY2hhcnMtYW5kLWJ5dGVzLWlvLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1xcXFxiKD86KD86Z2V0fHAoPzplZWt8dXQpKV8oYyg/OmhhcnxvZGUpfGJ5dGUpfG5sKSg/PVsoXSknIH0sXG4gICAgICAgICB7IHRva2VuOiAnc3VwcG9ydC5mdW5jdGlvbi5jaGFycy1hbmQtYnl0ZXMtaW8ubG9ndGFsaycsXG4gICAgICAgICAgIHJlZ2V4OiAnXFxcXGJubFxcXFxiJyB9LFxuICAgICAgICAgeyB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24uYXRvbS10ZXJtLXByb2Nlc3NpbmcubG9ndGFsaycsXG4gICAgICAgICAgIHJlZ2V4OiAnXFxcXGIoPzphdG9tXyg/Omxlbmd0aHxjKD86aGFyc3xvKD86bmNhdHxkZXMpKSl8c3ViX2F0b218Y2hhcl9jb2RlfG51bWJlcl9jKD86aGFyfG9kZSlzKSg/PVsoXSknIH0sXG4gICAgICAgICB7IGNhc2VJbnNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICAgICAgIHRva2VuOiAnc3VwcG9ydC5mdW5jdGlvbi50ZXJtLXRlc3RpbmcubG9ndGFsaycsXG4gICAgICAgICAgIHJlZ2V4OiAnXFxcXGIoPzp2YXJ8YXRvbShpYyk/fGludGVnZXJ8ZmxvYXR8Yyg/OmFsbGFibGV8b21wb3VuZCl8big/Om9udmFyfHVtYmVyKXxncm91bmR8YWN5Y2xpY190ZXJtKSg/PVsoXSknIH0sXG4gICAgICAgICB7IHRva2VuOiAnc3VwcG9ydC5mdW5jdGlvbi50ZXJtLWNvbXBhcmlzb24ubG9ndGFsaycsXG4gICAgICAgICAgIHJlZ2V4OiAnXFxcXGIoY29tcGFyZSkoPz1bKF0pJyB9LFxuICAgICAgICAgeyB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24udGVybS1pby5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICdcXFxcYig/OnJlYWQoX3Rlcm0pP3x3cml0ZSg/OnF8Xyg/OmNhbm9uaWNhbHx0ZXJtKSk/fChjdXJyZW50Xyk/KD86Y2hhcl9jb252ZXJzaW9ufG9wKSkoPz1bKF0pJyB9LFxuICAgICAgICAgeyBjYXNlSW5zZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgICAgICB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24udGVybS1jcmVhdGlvbi1hbmQtZGVjb21wb3NpdGlvbi5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICdcXFxcYihhcmd8Y29weV90ZXJtfGZ1bmN0b3J8bnVtYmVydmFyc3x0ZXJtX3ZhcmlhYmxlcykoPz1bKF0pJyB9LFxuICAgICAgICAgeyBjYXNlSW5zZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgICAgICB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24udGVybS11bmlmaWNhdGlvbi5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICdcXFxcYihzdWJzdW1lc190ZXJtfHVuaWZ5X3dpdGhfb2NjdXJzX2NoZWNrKSg/PVsoXSknIH0sXG4gICAgICAgICB7IGNhc2VJbnNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICAgICAgIHRva2VuOiAnc3VwcG9ydC5mdW5jdGlvbi5zdHJlYW0tc2VsZWN0aW9uLWFuZC1jb250cm9sLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1xcXFxiKD86KD86c2V8Y3VycmVuKXRfKD86aW58b3V0KXB1dHxvcGVufGNsb3NlfGZsdXNoX291dHB1dHxzdHJlYW1fcHJvcGVydHl8YXRfZW5kX29mX3N0cmVhbXxzZXRfc3RyZWFtX3Bvc2l0aW9uKSg/PVsoXSknIH0sXG4gICAgICAgICB7IHRva2VuOiAnc3VwcG9ydC5mdW5jdGlvbi5zdHJlYW0tc2VsZWN0aW9uLWFuZC1jb250cm9sLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1xcXFxiKD86Zmx1c2hfb3V0cHV0fGF0X2VuZF9vZl9zdHJlYW0pXFxcXGInIH0sXG4gICAgICAgICB7IHRva2VuOiAnc3VwcG9ydC5mdW5jdGlvbi5wcm9sb2ctZmxhZ3MubG9ndGFsaycsXG4gICAgICAgICAgIHJlZ2V4OiAnXFxcXGIoKD86c2V8Y3VycmVuKXRfcHJvbG9nX2ZsYWcpKD89WyhdKScgfSxcbiAgICAgICAgIHsgdG9rZW46ICdzdXBwb3J0LmZ1bmN0aW9uLmNvbXBpbGluZy1hbmQtbG9hZGluZy5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICdcXFxcYihsb2d0YWxrXyg/OmNvbXBpbGV8bCg/OmlicmFyeV9wYXRofG9hZHxvYWRfY29udGV4dCl8bWFrZShfdGFyZ2V0X2FjdGlvbik/KSkoPz1bKF0pJyB9LFxuICAgICAgICAgeyB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24uY29tcGlsaW5nLWFuZC1sb2FkaW5nLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1xcXFxiKGxvZ3RhbGtfbWFrZSlcXFxcYicgfSxcbiAgICAgICAgIHsgY2FzZUluc2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgdG9rZW46ICdzdXBwb3J0LmZ1bmN0aW9uLmV2ZW50LWhhbmRsaW5nLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1xcXFxiKD86KD86YWJvbGlzaHxkZWZpbmUpX2V2ZW50c3xjdXJyZW50X2V2ZW50KSg/PVsoXSknIH0sXG4gICAgICAgICB7IHRva2VuOiAnc3VwcG9ydC5mdW5jdGlvbi5pbXBsZW1lbnRhdGlvbi1kZWZpbmVkLWhvb2tzLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1xcXFxiKD86KD86Y3JlYXRlfGN1cnJlbnR8c2V0KV9sb2d0YWxrX2ZsYWd8aGFsdCkoPz1bKF0pJyB9LFxuICAgICAgICAgeyB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24uaW1wbGVtZW50YXRpb24tZGVmaW5lZC1ob29rcy5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICdcXFxcYihoYWx0KVxcXFxiJyB9LFxuICAgICAgICAgeyB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24uc29ydGluZy5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICdcXFxcYigoa2V5KT8oc29ydCkpKD89WyhdKScgfSxcbiAgICAgICAgIHsgY2FzZUluc2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgdG9rZW46ICdzdXBwb3J0LmZ1bmN0aW9uLmVudGl0eS1jcmVhdGlvbi1hbmQtYWJvbGlzaGluZy5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICdcXFxcYigoYyg/OnJlYXRlfHVycmVudCl8YWJvbGlzaClfKD86b2JqZWN0fHByb3RvY29sfGNhdGVnb3J5KSkoPz1bKF0pJyB9LFxuICAgICAgICAgeyBjYXNlSW5zZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgICAgICB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24ucmVmbGVjdGlvbi5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICdcXFxcYigob2JqZWN0fHByb3RvY29sfGNhdGVnb3J5KV9wcm9wZXJ0eXxjbyhtcGxlbWVudHNfb2JqZWN0fG5mb3Jtc190b19wcm90b2NvbCl8ZXh0ZW5kc18ob2JqZWN0fHByb3RvY29sfGNhdGVnb3J5KXxpbXAob3J0c19jYXRlZ29yeXxsZW1lbnRzX3Byb3RvY29sKXwoaW5zdGFudGlhdHxzcGVjaWFsaXopZXNfY2xhc3MpKD89WyhdKScgfSxcbiAgICAgICAgIHsgdG9rZW46ICdzdXBwb3J0LmZ1bmN0aW9uLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1xcXFxiKCg/OmZvcnxyZXRyYWN0KWFsbCkoPz1bKF0pJyB9LFxuICAgICAgICAgeyBjYXNlSW5zZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgICAgICB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24uZXhlY3V0aW9uLWNvbnRleHQubG9ndGFsaycsXG4gICAgICAgICAgIHJlZ2V4OiAnXFxcXGIoPzpjb250ZXh0fHBhcmFtZXRlcnxzZSg/OmxmfG5kZXIpfHRoaXMpKD89WyhdKScgfSxcbiAgICAgICAgIHsgdG9rZW46ICdzdXBwb3J0LmZ1bmN0aW9uLmRhdGFiYXNlLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1xcXFxiKD86YSg/OmJvbGlzaHxzc2VydCg/OmF8eikpfGNsYXVzZXxyZXRyYWN0KGFsbCk/KSg/PVsoXSknIH0sXG4gICAgICAgICB7IHRva2VuOiAnc3VwcG9ydC5mdW5jdGlvbi5hbGwtc29sdXRpb25zLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1xcXFxiKCg/OmJhZ3xzZXQpb2Z8Zig/OmluZHxvcilhbGwpKD89WyhdKScgfSxcbiAgICAgICAgIHsgY2FzZUluc2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgdG9rZW46ICdzdXBwb3J0LmZ1bmN0aW9uLm11bHRpLXRocmVhZGluZy5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICdcXFxcYih0aHJlYWRlZChfKGNhbGx8b25jZXxpZ25vcmV8ZXhpdHxwZWVrfHdhaXR8bm90aWZ5KSk/KSg/PVsoXSknIH0sXG4gICAgICAgICB7IGNhc2VJbnNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICAgICAgIHRva2VuOiAnc3VwcG9ydC5mdW5jdGlvbi5lbmdpbmVzLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1xcXFxiKHRocmVhZGVkX2VuZ2luZShfKGNyZWF0ZXxkZXN0cm95fHNlbGZ8bmV4dCg/Ol9yZWlmaWVkKT98eWllbGR8cG9zdHxmZXRjaCkpPykoPz1bKF0pJyB9LFxuICAgICAgICAgeyBjYXNlSW5zZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgICAgICB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24ucmVmbGVjdGlvbi5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICdcXFxcYig/OmN1cnJlbnRfcHJlZGljYXRlfHByZWRpY2F0ZV9wcm9wZXJ0eSkoPz1bKF0pJyB9LFxuICAgICAgICAgeyB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24uZXZlbnQtaGFuZGxlci5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICdcXFxcYig/OmJlZm9yZXxhZnRlcikoPz1bKF0pJyB9LFxuICAgICAgICAgeyB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24ubWVzc2FnZS1mb3J3YXJkaW5nLWhhbmRsZXIubG9ndGFsaycsXG4gICAgICAgICAgIHJlZ2V4OiAnXFxcXGIoZm9yd2FyZCkoPz1bKF0pJyB9LFxuICAgICAgICAgeyB0b2tlbjogJ3N1cHBvcnQuZnVuY3Rpb24uZ3JhbW1hci1ydWxlLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1xcXFxiKD86ZXhwYW5kXyg/OmdvYWx8dGVybSl8KD86Z29hbHx0ZXJtKV9leHBhbnNpb258cGhyYXNlKSg/PVsoXSknIH0sXG4gICAgICAgICB7IHRva2VuOiAncHVuY3R1YXRpb24uZGVmaW5pdGlvbi5zdHJpbmcuYmVnaW4ubG9ndGFsaycsXG4gICAgICAgICAgIHJlZ2V4OiAnXFwnJyxcbiAgICAgICAgICAgcHVzaDogXG4gICAgICAgICAgICBbIHsgdG9rZW46ICdjb25zdGFudC5jaGFyYWN0ZXIuZXNjYXBlLmxvZ3RhbGsnLFxuICAgICAgICAgICAgICAgIHJlZ2V4OiAnXFxcXFxcXFwoW1xcXFxcXFxcYWJmbnJ0dlwiXFwnXXwoeFthLWZBLUYwLTldK3xbMC03XSspXFxcXFxcXFwpJyB9LFxuICAgICAgICAgICAgICB7IHRva2VuOiAncHVuY3R1YXRpb24uZGVmaW5pdGlvbi5zdHJpbmcuZW5kLmxvZ3RhbGsnLFxuICAgICAgICAgICAgICAgIHJlZ2V4OiAnXFwnJyxcbiAgICAgICAgICAgICAgICBuZXh0OiAncG9wJyB9LFxuICAgICAgICAgICAgICB7IGRlZmF1bHRUb2tlbjogJ3N0cmluZy5xdW90ZWQuc2luZ2xlLmxvZ3RhbGsnIH0gXSB9LFxuICAgICAgICAgeyB0b2tlbjogJ3B1bmN0dWF0aW9uLmRlZmluaXRpb24uc3RyaW5nLmJlZ2luLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1wiJyxcbiAgICAgICAgICAgcHVzaDogXG4gICAgICAgICAgICBbIHsgdG9rZW46ICdjb25zdGFudC5jaGFyYWN0ZXIuZXNjYXBlLmxvZ3RhbGsnLCByZWdleDogJ1xcXFxcXFxcLicgfSxcbiAgICAgICAgICAgICAgeyB0b2tlbjogJ3B1bmN0dWF0aW9uLmRlZmluaXRpb24uc3RyaW5nLmVuZC5sb2d0YWxrJyxcbiAgICAgICAgICAgICAgICByZWdleDogJ1wiJyxcbiAgICAgICAgICAgICAgICBuZXh0OiAncG9wJyB9LFxuICAgICAgICAgICAgICB7IGRlZmF1bHRUb2tlbjogJ3N0cmluZy5xdW90ZWQuZG91YmxlLmxvZ3RhbGsnIH0gXSB9LFxuICAgICAgICAgeyB0b2tlbjogJ2NvbnN0YW50Lm51bWVyaWMubG9ndGFsaycsXG4gICAgICAgICAgIHJlZ2V4OiAnXFxcXGIoMGJbMC0xXSt8MG9bMC03XSt8MHhbMC05YS1mQS1GXSspXFxcXGInIH0sXG4gICAgICAgICB7IHRva2VuOiAnY29uc3RhbnQubnVtZXJpYy5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICdcXFxcYigwXFwnXFxcXFxcXFwufDBcXCcufDBcXCdcXCd8MFxcJ1wiKScgfSxcbiAgICAgICAgIHsgdG9rZW46ICdjb25zdGFudC5udW1lcmljLmxvZ3RhbGsnLFxuICAgICAgICAgICByZWdleDogJ1xcXFxiKFxcXFxkK1xcXFwuP1xcXFxkKigoZXxFKShcXFxcK3wtKT9cXFxcZCspPylcXFxcYicgfSxcbiAgICAgICAgIHsgdG9rZW46ICd2YXJpYWJsZS5vdGhlci5sb2d0YWxrJyxcbiAgICAgICAgICAgcmVnZXg6ICdcXFxcYihbQS1aX11bQS1aYS16MC05X10qKVxcXFxiJyB9IF0gfTtcbiAgICBcbiAgICB0aGlzLm5vcm1hbGl6ZVJ1bGVzKCk7XG59O1xuXG5vb3AuaW5oZXJpdHMoTG9ndGFsa0hpZ2hsaWdodFJ1bGVzLCBUZXh0SGlnaGxpZ2h0UnVsZXMpO1xuXG5leHBvcnRzLkxvZ3RhbGtIaWdobGlnaHRSdWxlcyA9IExvZ3RhbGtIaWdobGlnaHRSdWxlcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==