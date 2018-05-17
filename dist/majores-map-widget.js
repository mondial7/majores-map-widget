/**
 * Copyright (c) 2018 Marco Mondini <mmondini@mondspace.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var MajoresMapWidget=function(){"use strict";var e=[{university:"Free University of Bolzano Bozen",latitude:"",longitude:"",logo:"https://upload.wikimedia.org/wikipedia/commons/6/6d/UniBZ-Logo.svg",description:"aodoaskd aosd kmasdkmaskd msakmdoadamod asodkoasmdkomasokd",students:[{name:"Matteo Redaelli",diploma:"",degree:"",enrollment:"",graduation:null,socials:[{name:"facebook",link:"https://www.facebook.com/matteo.redaelli.54"}]}]}],n=(function(){function e(e){this.value=e}function n(n){var t,o;function r(t,o){try{var a=n[t](o),u=a.value;u instanceof e?Promise.resolve(u.value).then(function(e){r("next",e)},function(e){r("throw",e)}):i(a.done?"return":"normal",a.value)}catch(e){i("throw",e)}}function i(e,n){switch(e){case"return":t.resolve({value:n,done:!0});break;case"throw":t.reject(n);break;default:t.resolve({value:n,done:!1})}(t=t.next)?r(t.key,t.arg):o=null}this._invoke=function(e,n){return new Promise(function(i,a){var u={key:e,arg:n,resolve:i,reject:a,next:null};o?o=o.next=u:(t=o=u,r(e,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(e){return this._invoke("next",e)},n.prototype.throw=function(e){return this._invoke("throw",e)},n.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}),t=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();return function(){function o(e,t){n(this,o);if(e&&t&&e.querySelector(t)){e.querySelector("info__container--student"),e.querySelector("info__container--list");var r=e.querySelector(t);r.innerHTML="",r.insertAdjacentHTML("beforeend","")}else console.warn("Missing parameters or anchor not found")}return t(o,[{key:"exploreUni",value:function(n){if(n>=0&&n<e.length){var t=void 0,o=void 0;if(1===e[n].students.length){var r=e[n].students[0];t=STUDENT_CARD,o=o.studentBox(r)}else t=LIST_CARD,o="\n          \x3c!-- TODO --\x3e\n        ";t.innerHTML="",t.insertAdjacentHTML("beforeend",o)}}},{key:"styles",get:function(){return"\n\nbody {\n  background: #f2f2f2;\n  margin: 0;\n}\n\n.majores-map__wrapper {\n  width: 80%;\n  margin: auto;\n}\n\n"}}]),o}()}();
//# sourceMappingURL=majores-map-widget.js.map
