// Copyright (c) 2013 Keith Perhac @ DelfiNet (http://delfi-net.com)
//
// Based on the AutoRuby library created by:
// Copyright (c) 2005-2008 spinelz.org (http://script.spinelz.org/)
// 
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
(function(a){a.fn.autoKana=function(C,B,m){var e=a.extend({katakana:false},m);var t=new RegExp("[^ 　ぁあ-んー]","g");var s=new RegExp("[ぁぃぅぇぉっゃゅょ]","g");var h,f,k=false,q=null,A=true,r;h=a(C);f=a(B);k=true;z();h.blur(l);h.focus(o);h.keydown(j);function i(){k=true}function w(){k=false}function v(G){var F=G||window.event;if(G){var E=Event.element(G);if(E.checked){k=true}else{k=false}}else{k=!k}}function x(E){if(!A){if(Math.abs(values.length-E.length)>1){var F=E.join("").replace(s,"").split("");if(Math.abs(values.length-F.length)>1){u()}}else{if(values.length==r.length&&values.join("")!=r){u()}}}}function p(){var F,E;F=h.val();if(F==""){z();c()}else{F=g(F);if(r==F){return}else{r=F;if(!A){E=F.replace(t,"").split("");x(E);c(E)}}}}function d(){clearInterval(q)}function l(E){d()}function o(E){y();n()}function j(E){if(A){y()}}function b(E){return((E>=12353&&E<=12435)||E==12445||E==12446)}function g(H){if(H.match(ignoreString)){return H.replace(ignoreString,"")}else{var F,G,E;G=ignoreString.split("");E=H.split("");for(F=0;F<G.length;F++){if(G[F]==E[F]){E[F]=""}}return E.join("")}}function n(){var E=this;q=setInterval(p,30)}function c(E){if(!A){if(E){values=E}if(k){var F=D(baseKana+values.join(""));f.val(F)}}}function z(){baseKana="";A=false;ignoreString="";r="";values=[]}function y(){baseKana=f.val();A=false;ignoreString=h.val()}function u(){baseKana=baseKana+values.join("");A=true;values=[]}function D(G){if(e.katakana){var H,E,F;F=new String;for(E=0;E<G.length;E++){H=G.charCodeAt(E);if(b(H)){F+=String.fromCharCode(H+96)}else{F+=G.charAt(E)}}return F}else{return G}}}})(jQuery);