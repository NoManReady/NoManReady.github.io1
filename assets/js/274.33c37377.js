(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{368:function(n,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计模式","aria-hidden":"true"}},[n._v("#")]),n._v(" 设计模式")]),e("h2",{attrs:{id:"单例模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单例模式","aria-hidden":"true"}},[n._v("#")]),n._v(" 单例模式")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("/**\n * 保证一个类仅有一个实例，并提供一个访问它的全局访问点\n * @param {*} fn \n */\nconst getSingleton = function (fn) {\n  const result\n  return function () {\n    return result || (result = fn.apply(this, arguments))\n  }\n}\n\nexport default getSingleton\n")])]),e("h2",{attrs:{id:"发布订阅模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅模式","aria-hidden":"true"}},[n._v("#")]),n._v(" 发布订阅模式")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\n/**\n * 又称为观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象的状态发生\n * 改变的时，所有依赖于它的对象都将得到通知。一为时间上解耦，二为对象之间的解\n * 耦\n */\nconst pubsub = (function () {\n  const pools = [],\n    pub,\n    sub,\n    del\n  sub = (key, fn) => {\n    if (!pools[key]) {\n      pools[key] = []\n    }\n    pools[key].push(fn)\n  }\n  pub = () => {\n    let _key = Array.prototype.shift.call(arguments)\n    let _fns = pools[_key]\n    if (!_fns || _fns.length === 0) {\n      return false\n    }\n    for (let _fnl = _fns.length - 1; _fnl >= 0; _fnl--) {\n      _fns[_fnl].apply(this, Array.prototype.slice.call(arguments, 1))\n    }\n  }\n  del = (key, fn) => {\n    let _fns = pools[key]\n    if (!_fns || _fns.length === 0) {\n      return false\n    }\n    if (!fn || typeof (fn) !== 'function') {\n      _fns.length = 0\n    }\n    for (let _fnl = _fns.length - 1; _fnl >= 0; _fnl--) {\n      if (_fns[_fnl] === fn) {\n        _fns.splice(_fnl, 1)\n      }\n    }\n  }\n  return {\n    pub,\n    sub,\n    del\n  }\n})()\n\nexport default pubsub\n")])]),e("h2",{attrs:{id:"策略模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#策略模式","aria-hidden":"true"}},[n._v("#")]),n._v(" 策略模式")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("/**\n * 定义一系列的算法，把它们一个个的封装起来，并且使它们可以相互替换。目的就是算法的使用和算法的实现分离出来\n */\nconst strategy = {\n  A(value) {\n    return value.toString(8)\n  },\n  B(value) {\n    return value.toString(10)\n  }\n}\n\nexport default strategy\n")])])])}],!1,null,null,null);t.default=r.exports}}]);