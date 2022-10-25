System.register(["./react-use-legacy.7a8b73b2.js"],(function(t,n){"use strict";var r,e,i,o,u,c,s,a,l;return{setters:[t=>{r=t._,e=t.a,i=t.b,o=t.c,u=t.d,c=t.e,s=t.f,a=t.g,l=t.h}],execute:function(){function n(t){return"function"==typeof t}t({a:function(t,r,e){var i=n(t)||r||e?{next:t,error:r,complete:e}:t;return i?U((function(t,n){var r;null===(r=i.subscribe)||void 0===r||r.call(i);var e=!0;t.subscribe(D(n,(function(t){var r;null===(r=i.next)||void 0===r||r.call(i,t),n.next(t)}),(function(){var t;e=!1,null===(t=i.complete)||void 0===t||t.call(i),n.complete()}),(function(t){var r;e=!1,null===(r=i.error)||void 0===r||r.call(i,t),n.error(t)}),(function(){var t,n;e&&(null===(t=i.unsubscribe)||void 0===t||t.call(i)),null===(n=i.finalize)||void 0===n||n.call(i)})))})):L},b:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=G(t);return U((function(n,e){(r?dt(t,n,r):dt(t,n)).subscribe(e)}))},c:ht,d:function(t,n){return U(mt(t,n,arguments.length>=2,!0))},e:function(t,n){return void 0===n&&(n=!1),U((function(r,e){var i=0;r.subscribe(D(e,(function(r){var o=t(r,i++);(o||n)&&e.next(r),!o&&e.complete()})))}))},f:function t(r,o,u,c){if(n(u)&&(c=u,u=void 0),c)return t(r,o,u).pipe((s=c,at((function(t){return function(t,n){return lt(n)?t.apply(void 0,e([],i(n))):t(n)}(s,t)}))));var s,a=i(function(t){return n(t.addEventListener)&&n(t.removeEventListener)}(r)?vt.map((function(t){return function(n){return r[t](o,n,u)}})):function(t){return n(t.addListener)&&n(t.removeListener)}(r)?pt.map(yt(r,o)):function(t){return n(t.on)&&n(t.off)}(r)?bt.map(yt(r,o)):[],2),l=a[0],f=a[1];if(!l&&J(r))return ft((function(n){return t(n,o,u)}))(nt(r));if(!l)throw new TypeError("Invalid event target");return new k((function(t){var n=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.next(1<n.length?n:n[0])};return l(n),function(){return f(n)}}))},g:function(t,n){return U((function(r,e){var i=0;r.subscribe(D(e,(function(r){return t.call(n,r,i++)&&e.next(r)})))}))},i:function(t,n){return void 0===t&&(t=0),void 0===n&&(n=M),t<0&&(t=0),function(t,n,r){void 0===t&&(t=0),void 0===r&&(r=H);var e=-1;return null!=n&&(B(n)?r=n:e=n),new k((function(n){var i,o=(i=t)instanceof Date&&!isNaN(i)?+t-r.now():t;o<0&&(o=0);var u=0;return r.schedule((function(){n.closed||(n.next(u++),0<=e?this.schedule(void 0,e):n.complete())}),o)}))}(t,t,n)},m:at,s:function(t,n){return U((function(r,e){var i=null,o=0,u=!1,c=function(){return u&&!i&&e.complete()};r.subscribe(D(e,(function(r){null==i||i.unsubscribe();var u=0,s=o++;nt(t(r,s)).subscribe(i=D(e,(function(t){return e.next(n?n(r,t,s,u++):t)}),(function(){i=null,c()})))}),(function(){u=!0,c()})))}))},t:function(t){return U((function(n,r){nt(t).subscribe(D(r,(function(){return r.complete()}),g)),!r.closed&&n.subscribe(r)}))}});var f,h,d=(f=function(t){return function(n){t(this),this.message=n?n.length+" errors occurred during unsubscription:\n"+n.map((function(t,n){return n+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=n}},(h=f((function(t){Error.call(t),t.stack=(new Error).stack}))).prototype=Object.create(Error.prototype),h.prototype.constructor=h,h);function p(t,n){if(t){var r=t.indexOf(n);0<=r&&t.splice(r,1)}}var v=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var o;return t.prototype.unsubscribe=function(){var t,o,u,c,s;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var l=r(a),f=l.next();!f.done;f=l.next())f.value.remove(this)}catch(w){t={error:w}}finally{try{f&&!f.done&&(o=l.return)&&o.call(l)}finally{if(t)throw t.error}}else a.remove(this);var h=this.initialTeardown;if(n(h))try{h()}catch(x){s=x instanceof d?x.errors:[x]}var p=this._finalizers;if(p){this._finalizers=null;try{for(var v=r(p),b=v.next();!b.done;b=v.next()){var m=b.value;try{y(m)}catch(g){s=null!=s?s:[],g instanceof d?s=e(e([],i(s)),i(g.errors)):s.push(g)}}}catch(_){u={error:_}}finally{try{b&&!b.done&&(c=v.return)&&c.call(v)}finally{if(u)throw u.error}}}if(s)throw new d(s)}},t.prototype.add=function(n){var r;if(n&&n!==this)if(this.closed)y(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(n)}},t.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},t.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},t.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&p(n,t)},t.prototype.remove=function(n){var r=this._finalizers;r&&p(r,n),n instanceof t&&n._removeParent(this)},t.EMPTY=((o=new t).closed=!0,o),t}();function b(t){return t instanceof v||t&&"closed"in t&&n(t.remove)&&n(t.add)&&n(t.unsubscribe)}function y(t){n(t)?t():t.unsubscribe()}v.EMPTY;var m={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},w={setTimeout:function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];var u=w.delegate;return(null==u?void 0:u.setTimeout)?u.setTimeout.apply(u,e([t,n],i(r))):setTimeout.apply(void 0,e([t,n],i(r)))},clearTimeout:function(t){var n=w.delegate;return((null==n?void 0:n.clearTimeout)||clearTimeout)(t)},delegate:void 0};function x(t){w.setTimeout((function(){throw t}))}function g(){}var _=function(t){function n(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,b(n)&&n.add(r)):r.destination=P,r}return o(n,t),n.create=function(t,n,r){return new E(t,n,r)},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(v),S=Function.prototype.bind;function I(t,n){return S.call(t,n)}var A=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){T(r)}},t.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){T(r)}else T(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){T(n)}},t}(),E=function(t){function r(r,e,i){var o,u,c=t.call(this)||this;return n(r)||!r?o={next:null!=r?r:void 0,error:null!=e?e:void 0,complete:null!=i?i:void 0}:c&&m.useDeprecatedNextContext?((u=Object.create(r)).unsubscribe=function(){return c.unsubscribe()},o={next:r.next&&I(r.next,u),error:r.error&&I(r.error,u),complete:r.complete&&I(r.complete,u)}):o=r,c.destination=new A(o),c}return o(r,t),r}(_);function T(t){x(t)}var P={closed:!0,next:g,error:function(t){throw t},complete:g},z="function"==typeof Symbol&&Symbol.observable||"@@observable";function L(t){return t}function O(t){return 0===t.length?L:1===t.length?t[0]:function(n){return t.reduce((function(t,n){return n(t)}),n)}}var k=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(n){var r=new t;return r.source=this,r.operator=n,r},t.prototype.subscribe=function(t,r,e){var i,o,u,c,s=this,a=(i=t)&&i instanceof _||function(t){return t&&n(t.next)&&n(t.error)&&n(t.complete)}(i)&&b(i)?t:new E(t,r,e);return u=(o=s).operator,c=o.source,a.add(u?u.call(a,c):c?s._subscribe(a):s._trySubscribe(a)),a},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},t.prototype.forEach=function(t,n){var r=this;return new(n=j(n))((function(n,e){var i=new E({next:function(n){try{t(n)}catch(r){e(r),i.unsubscribe()}},error:e,complete:n});r.subscribe(i)}))},t.prototype._subscribe=function(t){var n;return null===(n=this.source)||void 0===n?void 0:n.subscribe(t)},t.prototype[z]=function(){return this},t.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return O(t)(this)},t.prototype.toPromise=function(t){var n=this;return new(t=j(t))((function(t,r){var e;n.subscribe((function(t){return e=t}),(function(t){return r(t)}),(function(){return t(e)}))}))},t.create=function(n){return new t(n)},t}();function j(t){var n;return null!==(n=null!=t?t:m.Promise)&&void 0!==n?n:Promise}function U(t){return function(r){if(function(t){return n(null==t?void 0:t.lift)}(r))return r.lift((function(n){try{return t(n,this)}catch(r){this.error(r)}}));throw new TypeError("Unable to lift unknown Observable type")}}function D(t,n,r,e,i){return new N(t,n,r,e,i)}var N=function(t){function n(n,r,e,i,o,u){var c=t.call(this,n)||this;return c.onFinalize=o,c.shouldUnsubscribe=u,c._next=r?function(t){try{r(t)}catch(e){n.error(e)}}:t.prototype._next,c._error=i?function(t){try{i(t)}catch(t){n.error(t)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=e?function(){try{e()}catch(t){n.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,c}return o(n,t),n.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&(null===(n=this.onFinalize)||void 0===n||n.call(this))}},n}(_),C={now:function(){return(C.delegate||Date).now()},delegate:void 0},Y=function(t){function n(n,r){return t.call(this)||this}return o(n,t),n.prototype.schedule=function(t,n){return this},n}(v),F={setInterval:function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];var u=F.delegate;return(null==u?void 0:u.setInterval)?u.setInterval.apply(u,e([t,n],i(r))):setInterval.apply(void 0,e([t,n],i(r)))},clearInterval:function(t){var n=F.delegate;return((null==n?void 0:n.clearInterval)||clearInterval)(t)},delegate:void 0},R=function(t){function n(n,r){var e=t.call(this,n,r)||this;return e.scheduler=n,e.work=r,e.pending=!1,e}return o(n,t),n.prototype.schedule=function(t,n){var r;if(void 0===n&&(n=0),this.closed)return this;this.state=t;var e=this.id,i=this.scheduler;return null!=e&&(this.id=this.recycleAsyncId(i,e,n)),this.pending=!0,this.delay=n,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(i,this.id,n),this},n.prototype.requestAsyncId=function(t,n,r){return void 0===r&&(r=0),F.setInterval(t.flush.bind(t,this),r)},n.prototype.recycleAsyncId=function(t,n,r){if(void 0===r&&(r=0),null!=r&&this.delay===r&&!1===this.pending)return n;null!=n&&F.clearInterval(n)},n.prototype.execute=function(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,n){var r,e=!1;try{this.work(t)}catch(i){e=!0,r=i||new Error("Scheduled action threw falsy error")}if(e)return this.unsubscribe(),r},n.prototype.unsubscribe=function(){if(!this.closed){var n=this.id,r=this.scheduler,e=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,p(e,this),null!=n&&(this.id=this.recycleAsyncId(r,n,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},n}(Y),q=function(){function t(n,r){void 0===r&&(r=t.now),this.schedulerActionCtor=n,this.now=r}return t.prototype.schedule=function(t,n,r){return void 0===n&&(n=0),new this.schedulerActionCtor(this,t).schedule(r,n)},t.now=C.now,t}(),M=new(function(t){function n(n,r){void 0===r&&(r=q.now);var e=t.call(this,n,r)||this;return e.actions=[],e._active=!1,e}return o(n,t),n.prototype.flush=function(t){var n=this.actions;if(this._active)n.push(t);else{var r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}},n}(q))(R),H=M;function B(t){return t&&n(t.schedule)}function G(t){return B((n=t)[n.length-1])?t.pop():void 0;var n}var J=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function K(t){return n(null==t?void 0:t.then)}function Q(t){return n(t[z])}function V(t){return Symbol.asyncIterator&&n(null==t?void 0:t[Symbol.asyncIterator])}function W(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var X="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function Z(t){return n(null==t?void 0:t[X])}function $(t){return u(this,arguments,(function(){var n,r,e;return c(this,(function(i){switch(i.label){case 0:n=t.getReader(),i.label=1;case 1:i.trys.push([1,,9,10]),i.label=2;case 2:return[4,s(n.read())];case 3:return r=i.sent(),e=r.value,r.done?[4,s(void 0)]:[3,5];case 4:return[2,i.sent()];case 5:return[4,s(e)];case 6:return[4,i.sent()];case 7:return i.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}}))}))}function tt(t){return n(null==t?void 0:t.getReader)}function nt(t){if(t instanceof k)return t;if(null!=t){if(Q(t))return u=t,new k((function(t){var r=u[z]();if(n(r.subscribe))return r.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(J(t))return o=t,new k((function(t){for(var n=0;n<o.length&&!t.closed;n++)t.next(o[n]);t.complete()}));if(K(t))return i=t,new k((function(t){i.then((function(n){t.closed||(t.next(n),t.complete())}),(function(n){return t.error(n)})).then(null,x)}));if(V(t))return rt(t);if(Z(t))return e=t,new k((function(t){var n,i;try{for(var o=r(e),u=o.next();!u.done;u=o.next()){var c=u.value;if(t.next(c),t.closed)return}}catch(s){n={error:s}}finally{try{u&&!u.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}t.complete()}));if(tt(t))return rt($(t))}var e,i,o,u;throw W(t)}function rt(t){return new k((function(n){(function(t,n){var r,e,i,o;return a(this,void 0,void 0,(function(){var u,s;return c(this,(function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),r=l(t),c.label=1;case 1:return[4,r.next()];case 2:if((e=c.sent()).done)return[3,4];if(u=e.value,n.next(u),n.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=c.sent(),i={error:s},[3,11];case 6:return c.trys.push([6,,9,10]),e&&!e.done&&(o=r.return)?[4,o.call(r)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}}))}))})(t,n).catch((function(t){return n.error(t)}))}))}function et(t,n,r,e,i){void 0===e&&(e=0),void 0===i&&(i=!1);var o=n.schedule((function(){r(),i?t.add(this.schedule(null,e)):this.unsubscribe()}),e);if(t.add(o),!i)return o}function it(t,n){return void 0===n&&(n=0),U((function(r,e){r.subscribe(D(e,(function(r){return et(e,t,(function(){return e.next(r)}),n)}),(function(){return et(e,t,(function(){return e.complete()}),n)}),(function(r){return et(e,t,(function(){return e.error(r)}),n)})))}))}function ot(t,n){return void 0===n&&(n=0),U((function(r,e){e.add(t.schedule((function(){return r.subscribe(e)}),n))}))}function ut(t,n){if(!t)throw new Error("Iterable cannot be null");return new k((function(r){et(r,n,(function(){var e=t[Symbol.asyncIterator]();et(r,n,(function(){e.next().then((function(t){t.done?r.complete():r.next(t.value)}))}),0,!0)}))}))}function ct(t,r){if(null!=t){if(Q(t))return function(t,n){return nt(t).pipe(ot(n),it(n))}(t,r);if(J(t))return function(t,n){return new k((function(r){var e=0;return n.schedule((function(){e===t.length?r.complete():(r.next(t[e++]),r.closed||this.schedule())}))}))}(t,r);if(K(t))return function(t,n){return nt(t).pipe(ot(n),it(n))}(t,r);if(V(t))return ut(t,r);if(Z(t))return function(t,r){return new k((function(e){var i;return et(e,r,(function(){i=t[X](),et(e,r,(function(){var t,n,r;try{n=(t=i.next()).value,r=t.done}catch(o){return void e.error(o)}r?e.complete():e.next(n)}),0,!0)})),function(){return n(null==i?void 0:i.return)&&i.return()}}))}(t,r);if(tt(t))return function(t,n){return ut($(t),n)}(t,r)}throw W(t)}function st(t,n){return n?ct(t,n):nt(t)}function at(t,n){return U((function(r,e){var i=0;r.subscribe(D(e,(function(r){e.next(t.call(n,r,i++))})))}))}var lt=Array.isArray;function ft(t,r,e){return void 0===e&&(e=1/0),n(r)?ft((function(n,e){return at((function(t,i){return r(n,t,e,i)}))(nt(t(n,e)))}),e):("number"==typeof r&&(e=r),U((function(n,r){return function(t,n,r,e,i,o,u,c){var s=[],a=0,l=0,f=!1,h=function(){!f||s.length||a||n.complete()},d=function(t){return a<e?p(t):s.push(t)},p=function(t){o&&n.next(t),a++;var c=!1;nt(r(t,l++)).subscribe(D(n,(function(t){null==i||i(t),o?d(t):n.next(t)}),(function(){c=!0}),void 0,(function(){if(c)try{a--;for(var t=function(){var t=s.shift();u?et(n,u,(function(){return p(t)})):p(t)};s.length&&a<e;)t();h()}catch(r){n.error(r)}})))};return t.subscribe(D(n,d,(function(){f=!0,h()}))),function(){null==c||c()}}(n,r,t,e)})))}function ht(){return void 0===(t=1)&&(t=1/0),ft(L,t);var t}function dt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return ht()(st(t,G(t)))}var pt=["addListener","removeListener"],vt=["addEventListener","removeEventListener"],bt=["on","off"];function yt(t,n){return function(r){return function(e){return t[r](n,e)}}}function mt(t,n,r,e,i){return function(o,u){var c=r,s=n,a=0;o.subscribe(D(u,(function(n){var r=a++;s=c?t(s,n,r):(c=!0,n),e&&u.next(s)}),i&&function(){c&&u.next(s),u.complete()}))}}}}}));