!function(){function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}System.register(["./react-use-legacy.b7eb106c.js"],(function(n){"use strict";var r,e,i,o,u,c,s,a,l;return{setters:[function(t){r=t._,e=t.a,i=t.b,o=t.c,u=t.d,c=t.e,s=t.f,a=t.g,l=t.h}],execute:function(){function f(t){return"function"==typeof t}n({a:function(t,n){return N(pt(t,n,arguments.length>=2,!0))},i:function(t,n){void 0===t&&(t=0);void 0===n&&(n=L);t<0&&(t=0);return function(t,n,r){void 0===t&&(t=0);void 0===r&&(r=B);var e=-1;null!=n&&(G(n)?r=n:e=n);return new U((function(n){var i,o=(i=t)instanceof Date&&!isNaN(i)?+t-r.now():t;o<0&&(o=0);var u=0;return r.schedule((function(){n.closed||(n.next(u++),0<=e?this.schedule(void 0,e):n.complete())}),o)}))}(t,t,n)},s:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=J(t);return N((function(n,e){(r?ht(t,n,r):ht(t,n)).subscribe(e)}))},t:function(t,n){void 0===n&&(n=!1);return N((function(r,e){var i=0;r.subscribe(C(e,(function(r){var o=t(r,i++);(o||n)&&e.next(r),!o&&e.complete()})))}))}});var h,p,d=(h=function(t){return function(n){t(this),this.message=n?n.length+" errors occurred during unsubscription:\n"+n.map((function(t,n){return n+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=n}},(p=h((function(t){Error.call(t),t.stack=(new Error).stack}))).prototype=Object.create(Error.prototype),p.prototype.constructor=p,p);function v(t,n){if(t){var r=t.indexOf(n);0<=r&&t.splice(r,1)}}var y=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var n;return t.prototype.unsubscribe=function(){var t,n,o,u,c;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=r(s),l=a.next();!l.done;l=a.next()){l.value.remove(this)}}catch(w){t={error:w}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}else s.remove(this);var h=this.initialTeardown;if(f(h))try{h()}catch(g){c=g instanceof d?g.errors:[g]}var p=this._finalizers;if(p){this._finalizers=null;try{for(var v=r(p),y=v.next();!y.done;y=v.next()){var b=y.value;try{m(b)}catch(x){c=null!=c?c:[],x instanceof d?c=e(e([],i(c)),i(x.errors)):c.push(x)}}}catch(_){o={error:_}}finally{try{y&&!y.done&&(u=v.return)&&u.call(v)}finally{if(o)throw o.error}}}if(c)throw new d(c)}},t.prototype.add=function(n){var r;if(n&&n!==this)if(this.closed)m(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(n)}},t.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},t.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},t.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&v(n,t)},t.prototype.remove=function(n){var r=this._finalizers;r&&v(r,n),n instanceof t&&n._removeParent(this)},t.EMPTY=((n=new t).closed=!0,n),t}();function b(t){return t instanceof y||t&&"closed"in t&&f(t.remove)&&f(t.add)&&f(t.unsubscribe)}function m(t){f(t)?t():t.unsubscribe()}y.EMPTY;var w={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},g={setTimeout:function(t){function n(n,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];var u=g.delegate;return(null==u?void 0:u.setTimeout)?u.setTimeout.apply(u,e([t,n],i(r))):setTimeout.apply(void 0,e([t,n],i(r)))})),clearTimeout:function(t){function n(n){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t){var n=g.delegate;return((null==n?void 0:n.clearTimeout)||clearTimeout)(t)})),delegate:void 0};function x(t){g.setTimeout((function(){throw t}))}function _(){}var S=function(t){function n(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,b(n)&&n.add(r)):r.destination=O,r}return o(n,t),n.create=function(t,n,r){return new T(t,n,r)},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(y),I=Function.prototype.bind;function A(t,n){return I.call(t,n)}var E=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){P(r)}},t.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){P(r)}else P(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){P(n)}},t}(),T=function(t){function n(n,r,e){var i,o,u=t.call(this)||this;f(n)||!n?i={next:null!=n?n:void 0,error:null!=r?r:void 0,complete:null!=e?e:void 0}:u&&w.useDeprecatedNextContext?((o=Object.create(n)).unsubscribe=function(){return u.unsubscribe()},i={next:n.next&&A(n.next,o),error:n.error&&A(n.error,o),complete:n.complete&&A(n.complete,o)}):i=n;return u.destination=new E(i),u}return o(n,t),n}(S);function P(t){x(t)}var O={closed:!0,next:_,error:function(t){throw t},complete:_},k="function"==typeof Symbol&&Symbol.observable||"@@observable";function z(t){return t}function j(t){return 0===t.length?z:1===t.length?t[0]:function(n){return t.reduce((function(t,n){return n(t)}),n)}}var U=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(n){var r=new t;return r.source=this,r.operator=n,r},t.prototype.subscribe=function(t,n,r){var e,i=this,o=(e=t)&&e instanceof S||function(t){return t&&f(t.next)&&f(t.error)&&f(t.complete)}(e)&&b(e)?t:new T(t,n,r);return function(){var t=i,n=t.operator,r=t.source;o.add(n?n.call(o,r):r?i._subscribe(o):i._trySubscribe(o))}(),o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},t.prototype.forEach=function(t,n){var r=this;return new(n=D(n))((function(n,e){var i=new T({next:function(n){try{t(n)}catch(r){e(r),i.unsubscribe()}},error:e,complete:n});r.subscribe(i)}))},t.prototype._subscribe=function(t){var n;return null===(n=this.source)||void 0===n?void 0:n.subscribe(t)},t.prototype[k]=function(){return this},t.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return j(t)(this)},t.prototype.toPromise=function(t){var n=this;return new(t=D(t))((function(t,r){var e;n.subscribe((function(t){return e=t}),(function(t){return r(t)}),(function(){return t(e)}))}))},t.create=function(n){return new t(n)},t}();function D(t){var n;return null!==(n=null!=t?t:w.Promise)&&void 0!==n?n:Promise}function N(t){return function(n){if(function(t){return f(null==t?void 0:t.lift)}(n))return n.lift((function(n){try{return t(n,this)}catch(r){this.error(r)}}));throw new TypeError("Unable to lift unknown Observable type")}}function C(t,n,r,e,i){return new Y(t,n,r,e,i)}var Y=function(t){function n(n,r,e,i,o,u){var c=t.call(this,n)||this;return c.onFinalize=o,c.shouldUnsubscribe=u,c._next=r?function(t){try{r(t)}catch(e){n.error(e)}}:t.prototype._next,c._error=i?function(t){try{i(t)}catch(t){n.error(t)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=e?function(){try{e()}catch(t){n.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,c}return o(n,t),n.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&(null===(n=this.onFinalize)||void 0===n||n.call(this))}},n}(S),F={now:function(){return(F.delegate||Date).now()},delegate:void 0},R=function(t){function n(n,r){return t.call(this)||this}return o(n,t),n.prototype.schedule=function(t,n){return this},n}(y),q={setInterval:function(t){function n(n,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];var u=q.delegate;return(null==u?void 0:u.setInterval)?u.setInterval.apply(u,e([t,n],i(r))):setInterval.apply(void 0,e([t,n],i(r)))})),clearInterval:function(t){function n(n){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t){var n=q.delegate;return((null==n?void 0:n.clearInterval)||clearInterval)(t)})),delegate:void 0},M=function(t){function n(n,r){var e=t.call(this,n,r)||this;return e.scheduler=n,e.work=r,e.pending=!1,e}return o(n,t),n.prototype.schedule=function(t,n){if(void 0===n&&(n=0),this.closed)return this;this.state=t;var r=this.id,e=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(e,r,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(e,this.id,n),this},n.prototype.requestAsyncId=function(t,n,r){return void 0===r&&(r=0),q.setInterval(t.flush.bind(t,this),r)},n.prototype.recycleAsyncId=function(t,n,r){if(void 0===r&&(r=0),null!=r&&this.delay===r&&!1===this.pending)return n;q.clearInterval(n)},n.prototype.execute=function(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,n){var r,e=!1;try{this.work(t)}catch(i){e=!0,r=i||new Error("Scheduled action threw falsy error")}if(e)return this.unsubscribe(),r},n.prototype.unsubscribe=function(){if(!this.closed){var n=this.id,r=this.scheduler,e=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,v(e,this),null!=n&&(this.id=this.recycleAsyncId(r,n,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},n}(R),H=function(){function t(n,r){void 0===r&&(r=t.now),this.schedulerActionCtor=n,this.now=r}return t.prototype.schedule=function(t,n,r){return void 0===n&&(n=0),new this.schedulerActionCtor(this,t).schedule(r,n)},t.now=F.now,t}(),L=new(function(t){function n(n,r){void 0===r&&(r=H.now);var e=t.call(this,n,r)||this;return e.actions=[],e._active=!1,e._scheduled=void 0,e}return o(n,t),n.prototype.flush=function(t){var n=this.actions;if(this._active)n.push(t);else{var r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}},n}(H))(M),B=L;function G(t){return t&&f(t.schedule)}function J(t){return G((n=t)[n.length-1])?t.pop():void 0;var n}var K=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function Q(t){return f(null==t?void 0:t.then)}function V(t){return f(t[k])}function W(t){return Symbol.asyncIterator&&f(null==t?void 0:t[Symbol.asyncIterator])}function X(n){return new TypeError("You provided "+(null!==n&&"object"===t(n)?"an invalid object":"'"+n+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var Z="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function $(t){return f(null==t?void 0:t[Z])}function tt(t){return u(this,arguments,(function(){var n,r,e;return c(this,(function(i){switch(i.label){case 0:n=t.getReader(),i.label=1;case 1:i.trys.push([1,,9,10]),i.label=2;case 2:return[4,s(n.read())];case 3:return r=i.sent(),e=r.value,r.done?[4,s(void 0)]:[3,5];case 4:return[2,i.sent()];case 5:return[4,s(e)];case 6:return[4,i.sent()];case 7:return i.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}}))}))}function nt(t){return f(null==t?void 0:t.getReader)}function rt(t){if(t instanceof U)return t;if(null!=t){if(V(t))return o=t,new U((function(t){var n=o[k]();if(f(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(K(t))return i=t,new U((function(t){for(var n=0;n<i.length&&!t.closed;n++)t.next(i[n]);t.complete()}));if(Q(t))return e=t,new U((function(t){e.then((function(n){t.closed||(t.next(n),t.complete())}),(function(n){return t.error(n)})).then(null,x)}));if(W(t))return et(t);if($(t))return n=t,new U((function(t){var e,i;try{for(var o=r(n),u=o.next();!u.done;u=o.next()){var c=u.value;if(t.next(c),t.closed)return}}catch(s){e={error:s}}finally{try{u&&!u.done&&(i=o.return)&&i.call(o)}finally{if(e)throw e.error}}t.complete()}));if(nt(t))return et(tt(t))}var n,e,i,o;throw X(t)}function et(t){return new U((function(n){(function(t,n){var r,e,i,o;return a(this,void 0,void 0,(function(){var u,s;return c(this,(function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),r=l(t),c.label=1;case 1:return[4,r.next()];case 2:if((e=c.sent()).done)return[3,4];if(u=e.value,n.next(u),n.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=c.sent(),i={error:s},[3,11];case 6:return c.trys.push([6,,9,10]),e&&!e.done&&(o=r.return)?[4,o.call(r)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}}))}))})(t,n).catch((function(t){return n.error(t)}))}))}function it(t,n,r,e,i){void 0===e&&(e=0),void 0===i&&(i=!1);var o=n.schedule((function(){r(),i?t.add(this.schedule(null,e)):this.unsubscribe()}),e);if(t.add(o),!i)return o}function ot(t,n){return void 0===n&&(n=0),N((function(r,e){r.subscribe(C(e,(function(r){return it(e,t,(function(){return e.next(r)}),n)}),(function(){return it(e,t,(function(){return e.complete()}),n)}),(function(r){return it(e,t,(function(){return e.error(r)}),n)})))}))}function ut(t,n){return void 0===n&&(n=0),N((function(r,e){e.add(t.schedule((function(){return r.subscribe(e)}),n))}))}function ct(t,n){if(!t)throw new Error("Iterable cannot be null");return new U((function(r){it(r,n,(function(){var e=t[Symbol.asyncIterator]();it(r,n,(function(){e.next().then((function(t){t.done?r.complete():r.next(t.value)}))}),0,!0)}))}))}function st(t,n){if(null!=t){if(V(t))return function(t,n){return rt(t).pipe(ut(n),ot(n))}(t,n);if(K(t))return function(t,n){return new U((function(r){var e=0;return n.schedule((function(){e===t.length?r.complete():(r.next(t[e++]),r.closed||this.schedule())}))}))}(t,n);if(Q(t))return function(t,n){return rt(t).pipe(ut(n),ot(n))}(t,n);if(W(t))return ct(t,n);if($(t))return function(t,n){return new U((function(r){var e;return it(r,n,(function(){e=t[Z](),it(r,n,(function(){var t,n,i;try{n=(t=e.next()).value,i=t.done}catch(o){return void r.error(o)}i?r.complete():r.next(n)}),0,!0)})),function(){return f(null==e?void 0:e.return)&&e.return()}}))}(t,n);if(nt(t))return function(t,n){return ct(tt(t),n)}(t,n)}throw X(t)}function at(t,n){return n?st(t,n):rt(t)}function lt(t,n,r){return void 0===r&&(r=1/0),f(n)?lt((function(r,e){return function(t,n){return N((function(r,e){var i=0;r.subscribe(C(e,(function(r){e.next(t.call(n,r,i++))})))}))}((function(t,i){return n(r,t,e,i)}))(rt(t(r,e)))}),r):("number"==typeof n&&(r=n),N((function(n,e){return function(t,n,r,e,i,o,u,c){var s=[],a=0,l=0,f=!1,h=function(){!f||s.length||a||n.complete()},p=function(t){return a<e?d(t):s.push(t)},d=function t(c){o&&n.next(c),a++;var f=!1;rt(r(c,l++)).subscribe(C(n,(function(t){null==i||i(t),o?p(t):n.next(t)}),(function(){f=!0}),void 0,(function(){if(f)try{a--;for(var r=function(){var r=s.shift();u?it(n,u,(function(){return t(r)})):t(r)};s.length&&a<e;)r();h()}catch(i){n.error(i)}})))};return t.subscribe(C(n,p,(function(){f=!0,h()}))),function(){null==c||c()}}(n,e,t,r)})))}function ft(){return void 0===(t=1)&&(t=1/0),lt(z,t);var t}function ht(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return ft()(at(t,J(t)))}function pt(t,n,r,e,i){return function(o,u){var c=r,s=n,a=0;o.subscribe(C(u,(function(n){var r=a++;s=c?t(s,n,r):(c=!0,n),e&&u.next(s)}),i&&function(){c&&u.next(s),u.complete()}))}}}}}))}();