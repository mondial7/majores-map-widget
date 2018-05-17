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

var KnopfyDope=function(){"use strict";!function(){function n(n){this.value=n}function t(t){var e,r;function o(e,r){try{var i=t[e](r),c=i.value;c instanceof n?Promise.resolve(c.value).then(function(n){o("next",n)},function(n){o("throw",n)}):u(i.done?"return":"normal",i.value)}catch(n){u("throw",n)}}function u(n,t){switch(n){case"return":e.resolve({value:t,done:!0});break;case"throw":e.reject(t);break;default:e.resolve({value:t,done:!1})}(e=e.next)?o(e.key,e.arg):r=null}this._invoke=function(n,t){return new Promise(function(u,i){var c={key:n,arg:t,resolve:u,reject:i,next:null};r?r=r.next=c:(e=r=c,o(n,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(n){return this._invoke("next",n)},t.prototype.throw=function(n){return this._invoke("throw",n)},t.prototype.return=function(n){return this._invoke("return",n)}}();var n=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")},t=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}();return new(function(){function e(){n(this,e),this._hello="Do I know you?"}return t(e,[{key:"hello",get:function(){return this._hello}}]),e}())}();
//# sourceMappingURL=knopfy-dope.js.map
