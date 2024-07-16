(self["webpackChunkace_linters_root"] = self["webpackChunkace_linters_root"] || []).push([[3153],{

/***/ 63153:
/***/ ((module) => {

module.exports = `snippet lang
	{-# LANGUAGE \${1:OverloadedStrings} #-}
snippet info
	-- |
	-- Module      :  \${1:Module.Namespace}
	-- Copyright   :  \${2:Author} \${3:2011-2012}
	-- License     :  \${4:BSD3}
	--
	-- Maintainer  :  \${5:email@something.com}
	-- Stability   :  \${6:experimental}
	-- Portability :  \${7:unknown}
	--
	-- \${8:Description}
	--
snippet import
	import           \${1:Data.Text}
snippet import2
	import           \${1:Data.Text} (\${2:head})
snippet importq
	import qualified \${1:Data.Text} as \${2:T}
snippet inst
	instance \${1:Monoid} \${2:Type} where
		\${3}
snippet type
	type \${1:Type} = \${2:Type}
snippet data
	data \${1:Type} = \${2:\$1} \${3:Int}
snippet newtype
	newtype \${1:Type} = \${2:\$1} \${3:Int}
snippet class
	class \${1:Class} a where
		\${2}
snippet module
	module \`substitute(substitute(expand('%:r'), '[/\\\\]','.','g'),'^\\%(\\l*\\.\\)\\?','','')\` (
	)	where
	\`expand('%') =~ 'Main' ? "\\n\\nmain = do\\n  print \\"hello world\\"" : ""\`

snippet const
	\${1:name} :: \${2:a}
	\$1 = \${3:undefined}
snippet fn
	\${1:fn} :: \${2:a} -> \${3:a}
	\$1 \${4} = \${5:undefined}
snippet fn2
	\${1:fn} :: \${2:a} -> \${3:a} -> \${4:a}
	\$1 \${5} = \${6:undefined}
snippet ap
	\${1:map} \${2:fn} \${3:list}
snippet do
	do
		
snippet λ
	\\\${1:x} -> \${2}
snippet \\
	\\\${1:x} -> \${2}
snippet <-
	\${1:a} <- \${2:m a}
snippet ←
	\${1:a} <- \${2:m a}
snippet ->
	\${1:m a} -> \${2:a}
snippet →
	\${1:m a} -> \${2:a}
snippet tup
	(\${1:a}, \${2:b})
snippet tup2
	(\${1:a}, \${2:b}, \${3:c})
snippet tup3
	(\${1:a}, \${2:b}, \${3:c}, \${4:d})
snippet rec
	\${1:Record} { \${2:recFieldA} = \${3:undefined}
				, \${4:recFieldB} = \${5:undefined}
				}
snippet case
	case \${1:something} of
		\${2} -> \${3}
snippet let
	let \${1} = \${2}
	in \${3}
snippet where
	where
		\${1:fn} = \${2:undefined}
`;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjMxNTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLEVBQUUsZUFBZSxxQkFBcUI7QUFDdEM7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixzQkFBc0IsVUFBVSxHQUFHO0FBQ25DLHNCQUFzQjtBQUN0QjtBQUNBLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxxQkFBcUIsYUFBYSxJQUFJLE9BQU87QUFDN0M7QUFDQSxxQkFBcUIsYUFBYSxNQUFNO0FBQ3hDO0FBQ0EsYUFBYSxVQUFVLEdBQUcsUUFBUTtBQUNsQyxLQUFLO0FBQ0w7QUFDQSxTQUFTLFFBQVEsS0FBSztBQUN0QjtBQUNBLFNBQVMsUUFBUSxLQUFLLE9BQU8sR0FBRztBQUNoQztBQUNBLFlBQVksUUFBUSxLQUFLLE9BQU8sR0FBRztBQUNuQztBQUNBLFVBQVUsU0FBUztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLFFBQVEsTUFBTTtBQUNsQixVQUFVO0FBQ1Y7QUFDQSxJQUFJLE1BQU0sTUFBTSxLQUFLLE1BQU07QUFDM0IsUUFBUSxHQUFHLEtBQUs7QUFDaEI7QUFDQSxJQUFJLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNO0FBQ3RDLFFBQVEsR0FBRyxLQUFLO0FBQ2hCO0FBQ0EsSUFBSSxPQUFPLEdBQUcsTUFBTSxHQUFHO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFLLE1BQU07QUFDakI7QUFDQSxNQUFNLEtBQUssTUFBTTtBQUNqQjtBQUNBLElBQUksS0FBSyxNQUFNO0FBQ2Y7QUFDQSxJQUFJLEtBQUssTUFBTTtBQUNmO0FBQ0EsSUFBSSxPQUFPLE1BQU07QUFDakI7QUFDQSxJQUFJLE9BQU8sTUFBTTtBQUNqQjtBQUNBLEtBQUssSUFBSSxLQUFLLElBQUk7QUFDbEI7QUFDQSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSTtBQUMzQjtBQUNBLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSTtBQUNwQztBQUNBLElBQUksWUFBWSxHQUFHLGFBQWEsS0FBSztBQUNyQyxTQUFTLGFBQWEsS0FBSztBQUMzQjtBQUNBO0FBQ0EsU0FBUyxhQUFhO0FBQ3RCLEtBQUssR0FBRyxNQUFNO0FBQ2Q7QUFDQSxRQUFRLEdBQUcsS0FBSztBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUssTUFBTSxLQUFLO0FBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNlLWxpbnRlcnMtcm9vdC8uL25vZGVfbW9kdWxlcy9hY2UtY29kZS9zcmMvc25pcHBldHMvaGFza2VsbC5zbmlwcGV0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGBzbmlwcGV0IGxhbmdcblx0ey0jIExBTkdVQUdFIFxcJHsxOk92ZXJsb2FkZWRTdHJpbmdzfSAjLX1cbnNuaXBwZXQgaW5mb1xuXHQtLSB8XG5cdC0tIE1vZHVsZSAgICAgIDogIFxcJHsxOk1vZHVsZS5OYW1lc3BhY2V9XG5cdC0tIENvcHlyaWdodCAgIDogIFxcJHsyOkF1dGhvcn0gXFwkezM6MjAxMS0yMDEyfVxuXHQtLSBMaWNlbnNlICAgICA6ICBcXCR7NDpCU0QzfVxuXHQtLVxuXHQtLSBNYWludGFpbmVyICA6ICBcXCR7NTplbWFpbEBzb21ldGhpbmcuY29tfVxuXHQtLSBTdGFiaWxpdHkgICA6ICBcXCR7NjpleHBlcmltZW50YWx9XG5cdC0tIFBvcnRhYmlsaXR5IDogIFxcJHs3OnVua25vd259XG5cdC0tXG5cdC0tIFxcJHs4OkRlc2NyaXB0aW9ufVxuXHQtLVxuc25pcHBldCBpbXBvcnRcblx0aW1wb3J0ICAgICAgICAgICBcXCR7MTpEYXRhLlRleHR9XG5zbmlwcGV0IGltcG9ydDJcblx0aW1wb3J0ICAgICAgICAgICBcXCR7MTpEYXRhLlRleHR9IChcXCR7MjpoZWFkfSlcbnNuaXBwZXQgaW1wb3J0cVxuXHRpbXBvcnQgcXVhbGlmaWVkIFxcJHsxOkRhdGEuVGV4dH0gYXMgXFwkezI6VH1cbnNuaXBwZXQgaW5zdFxuXHRpbnN0YW5jZSBcXCR7MTpNb25vaWR9IFxcJHsyOlR5cGV9IHdoZXJlXG5cdFx0XFwkezN9XG5zbmlwcGV0IHR5cGVcblx0dHlwZSBcXCR7MTpUeXBlfSA9IFxcJHsyOlR5cGV9XG5zbmlwcGV0IGRhdGFcblx0ZGF0YSBcXCR7MTpUeXBlfSA9IFxcJHsyOlxcJDF9IFxcJHszOkludH1cbnNuaXBwZXQgbmV3dHlwZVxuXHRuZXd0eXBlIFxcJHsxOlR5cGV9ID0gXFwkezI6XFwkMX0gXFwkezM6SW50fVxuc25pcHBldCBjbGFzc1xuXHRjbGFzcyBcXCR7MTpDbGFzc30gYSB3aGVyZVxuXHRcdFxcJHsyfVxuc25pcHBldCBtb2R1bGVcblx0bW9kdWxlIFxcYHN1YnN0aXR1dGUoc3Vic3RpdHV0ZShleHBhbmQoJyU6cicpLCAnWy9cXFxcXFxcXF0nLCcuJywnZycpLCdeXFxcXCUoXFxcXGwqXFxcXC5cXFxcKVxcXFw/JywnJywnJylcXGAgKFxuXHQpXHR3aGVyZVxuXHRcXGBleHBhbmQoJyUnKSA9fiAnTWFpbicgPyBcIlxcXFxuXFxcXG5tYWluID0gZG9cXFxcbiAgcHJpbnQgXFxcXFwiaGVsbG8gd29ybGRcXFxcXCJcIiA6IFwiXCJcXGBcblxuc25pcHBldCBjb25zdFxuXHRcXCR7MTpuYW1lfSA6OiBcXCR7MjphfVxuXHRcXCQxID0gXFwkezM6dW5kZWZpbmVkfVxuc25pcHBldCBmblxuXHRcXCR7MTpmbn0gOjogXFwkezI6YX0gLT4gXFwkezM6YX1cblx0XFwkMSBcXCR7NH0gPSBcXCR7NTp1bmRlZmluZWR9XG5zbmlwcGV0IGZuMlxuXHRcXCR7MTpmbn0gOjogXFwkezI6YX0gLT4gXFwkezM6YX0gLT4gXFwkezQ6YX1cblx0XFwkMSBcXCR7NX0gPSBcXCR7Njp1bmRlZmluZWR9XG5zbmlwcGV0IGFwXG5cdFxcJHsxOm1hcH0gXFwkezI6Zm59IFxcJHszOmxpc3R9XG5zbmlwcGV0IGRvXG5cdGRvXG5cdFx0XG5zbmlwcGV0IM67XG5cdFxcXFxcXCR7MTp4fSAtPiBcXCR7Mn1cbnNuaXBwZXQgXFxcXFxuXHRcXFxcXFwkezE6eH0gLT4gXFwkezJ9XG5zbmlwcGV0IDwtXG5cdFxcJHsxOmF9IDwtIFxcJHsyOm0gYX1cbnNuaXBwZXQg4oaQXG5cdFxcJHsxOmF9IDwtIFxcJHsyOm0gYX1cbnNuaXBwZXQgLT5cblx0XFwkezE6bSBhfSAtPiBcXCR7MjphfVxuc25pcHBldCDihpJcblx0XFwkezE6bSBhfSAtPiBcXCR7MjphfVxuc25pcHBldCB0dXBcblx0KFxcJHsxOmF9LCBcXCR7MjpifSlcbnNuaXBwZXQgdHVwMlxuXHQoXFwkezE6YX0sIFxcJHsyOmJ9LCBcXCR7MzpjfSlcbnNuaXBwZXQgdHVwM1xuXHQoXFwkezE6YX0sIFxcJHsyOmJ9LCBcXCR7MzpjfSwgXFwkezQ6ZH0pXG5zbmlwcGV0IHJlY1xuXHRcXCR7MTpSZWNvcmR9IHsgXFwkezI6cmVjRmllbGRBfSA9IFxcJHszOnVuZGVmaW5lZH1cblx0XHRcdFx0LCBcXCR7NDpyZWNGaWVsZEJ9ID0gXFwkezU6dW5kZWZpbmVkfVxuXHRcdFx0XHR9XG5zbmlwcGV0IGNhc2Vcblx0Y2FzZSBcXCR7MTpzb21ldGhpbmd9IG9mXG5cdFx0XFwkezJ9IC0+IFxcJHszfVxuc25pcHBldCBsZXRcblx0bGV0IFxcJHsxfSA9IFxcJHsyfVxuXHRpbiBcXCR7M31cbnNuaXBwZXQgd2hlcmVcblx0d2hlcmVcblx0XHRcXCR7MTpmbn0gPSBcXCR7Mjp1bmRlZmluZWR9XG5gO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9