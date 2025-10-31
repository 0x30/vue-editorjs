import { defineComponent as ns, ref as Un, onMounted as is, watch as rs, onBeforeUnmount as ss, createVNode as as } from "vue";
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".ce-hint--align-start{text-align:left}.ce-hint--align-center{text-align:center}.ce-hint__description{opacity:.6;margin-top:3px}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wt(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function ls(n) {
  if (n.__esModule)
    return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function o() {
      return this instanceof o ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(o) {
    var i = Object.getOwnPropertyDescriptor(n, o);
    Object.defineProperty(t, o, i.get ? i : {
      enumerable: !0,
      get: function() {
        return n[o];
      }
    });
  }), t;
}
function At() {
}
Object.assign(At, {
  default: At,
  register: At,
  revert: function() {
  },
  __esModule: !0
});
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(n) {
  const e = (this.document || this.ownerDocument).querySelectorAll(n);
  let t = e.length;
  for (; --t >= 0 && e.item(t) !== this; )
    ;
  return t > -1;
});
Element.prototype.closest || (Element.prototype.closest = function(n) {
  let e = this;
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (e.matches(n))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null);
  return null;
});
Element.prototype.prepend || (Element.prototype.prepend = function(n) {
  const e = document.createDocumentFragment();
  Array.isArray(n) || (n = [n]), n.forEach((t) => {
    const o = t instanceof Node;
    e.appendChild(o ? t : document.createTextNode(t));
  }), this.insertBefore(e, this.firstChild);
});
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(n) {
  n = arguments.length === 0 ? !0 : !!n;
  const e = this.parentNode, t = window.getComputedStyle(e, null), o = parseInt(t.getPropertyValue("border-top-width")), i = parseInt(t.getPropertyValue("border-left-width")), r = this.offsetTop - e.offsetTop < e.scrollTop, s = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight, a = this.offsetLeft - e.offsetLeft < e.scrollLeft, c = this.offsetLeft - e.offsetLeft + this.clientWidth - i > e.scrollLeft + e.clientWidth, l = r && !s;
  (r || s) && n && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), (a || c) && n && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i + this.clientWidth / 2), (r || s || a || c) && !n && this.scrollIntoView(l);
});
window.requestIdleCallback = window.requestIdleCallback || function(n) {
  const e = Date.now();
  return setTimeout(function() {
    n({
      didTimeout: !1,
      timeRemaining: function() {
        return Math.max(0, 50 - (Date.now() - e));
      }
    });
  }, 1);
};
window.cancelIdleCallback = window.cancelIdleCallback || function(n) {
  clearTimeout(n);
};
let cs = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var mi = /* @__PURE__ */ ((n) => (n.VERBOSE = "VERBOSE", n.INFO = "INFO", n.WARN = "WARN", n.ERROR = "ERROR", n))(mi || {});
const B = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  ESC: 27,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46
}, ds = {
  LEFT: 0
};
function Xe(n, e, t = "log", o, i = "color: inherit") {
  if (!("console" in window) || !window.console[t])
    return;
  const r = ["info", "log", "warn", "error"].includes(t), s = [];
  switch (Xe.logLevel) {
    case "ERROR":
      if (t !== "error")
        return;
      break;
    case "WARN":
      if (!["error", "warn"].includes(t))
        return;
      break;
    case "INFO":
      if (!r || n)
        return;
      break;
  }
  o && s.push(o);
  const a = "Editor.js 2.31.0";
  n && (r ? (s.unshift(`line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`, i), e = `%c${a}%c ${e}`) : e = `( ${a} )${e}`);
  try {
    r ? o ? console[t](`${e} %o`, ...s) : console[t](e, ...s) : console[t](e);
  } catch {
  }
}
Xe.logLevel = "VERBOSE";
function us(n) {
  Xe.logLevel = n;
}
const N = Xe.bind(window, !1), Z = Xe.bind(window, !0);
function ye(n) {
  return Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function D(n) {
  return ye(n) === "function" || ye(n) === "asyncfunction";
}
function U(n) {
  return ye(n) === "object";
}
function ce(n) {
  return ye(n) === "string";
}
function hs(n) {
  return ye(n) === "boolean";
}
function zn(n) {
  return ye(n) === "number";
}
function qn(n) {
  return ye(n) === "undefined";
}
function J(n) {
  return n ? Object.keys(n).length === 0 && n.constructor === Object : !0;
}
function bi(n) {
  return n > 47 && n < 58 || // number keys
  n === 32 || n === 13 || // Space bar & return key(s)
  n === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
  n > 64 && n < 91 || // letter keys
  n > 95 && n < 112 || // Numpad keys
  n > 185 && n < 193 || // ;=,-./` (in order)
  n > 218 && n < 223;
}
async function ps(n, e = () => {
}, t = () => {
}) {
  async function o(i, r, s) {
    try {
      await i.function(i.data), await r(qn(i.data) ? {} : i.data);
    } catch {
      s(qn(i.data) ? {} : i.data);
    }
  }
  return n.reduce(async (i, r) => (await i, o(r, e, t)), Promise.resolve());
}
function vi(n) {
  return Array.prototype.slice.call(n);
}
function dt(n, e) {
  return function() {
    const t = this, o = arguments;
    window.setTimeout(() => n.apply(t, o), e);
  };
}
function fs(n) {
  return n.name.split(".").pop();
}
function gs(n) {
  return /^[-\w]+\/([-+\w]+|\*)$/.test(n);
}
function Wn(n, e, t) {
  let o;
  return (...i) => {
    const r = this, s = () => {
      o = null, n.apply(r, i);
    };
    window.clearTimeout(o), o = window.setTimeout(s, e);
  };
}
function Wt(n, e, t = void 0) {
  let o, i, r, s = null, a = 0;
  t || (t = {});
  const c = function() {
    a = t.leading === !1 ? 0 : Date.now(), s = null, r = n.apply(o, i), s || (o = i = null);
  };
  return function() {
    const l = Date.now();
    !a && t.leading === !1 && (a = l);
    const u = e - (l - a);
    return o = this, i = arguments, u <= 0 || u > e ? (s && (clearTimeout(s), s = null), a = l, r = n.apply(o, i), s || (o = i = null)) : !s && t.trailing !== !1 && (s = setTimeout(c, u)), r;
  };
}
function ms() {
  const n = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(n).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e && (n[e] = !0), n;
}
function ut(n) {
  return n[0].toUpperCase() + n.slice(1);
}
function Vt(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  if (U(n) && U(t))
    for (const o in t)
      U(t[o]) ? (n[o] || Object.assign(n, { [o]: {} }), Vt(n[o], t[o])) : Object.assign(n, { [o]: t[o] });
  return Vt(n, ...e);
}
function ro(n) {
  const e = ms();
  return n = n.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), e.mac ? n = n.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : n = n.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n;
}
function bs(n) {
  try {
    return new URL(n).href;
  } catch {
  }
  return n.substring(0, 2) === "//" ? window.location.protocol + n : window.location.origin + n;
}
function vs() {
  return cs(10);
}
function ys(n) {
  window.open(n, "_blank");
}
function ws(n = "") {
  return `${n}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function Kt(n, e, t) {
  const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  n && Z(o, "warn");
}
function Pe(n, e, t) {
  const o = t.value ? "value" : "get", i = t[o], r = `#${e}Cache`;
  if (t[o] = function(...s) {
    return this[r] === void 0 && (this[r] = i.apply(this, ...s)), this[r];
  }, o === "get" && t.set) {
    const s = t.set;
    t.set = function(a) {
      delete n[r], s.apply(this, a);
    };
  }
  return t;
}
const yi = 650;
function Ae() {
  return window.matchMedia(`(max-width: ${yi}px)`).matches;
}
const Yt = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function ks(n, e) {
  const t = Array.isArray(n) || U(n), o = Array.isArray(e) || U(e);
  return t || o ? JSON.stringify(n) === JSON.stringify(e) : n === e;
}
let x = class q {
  /**
   * Check if passed tag has no closed tag
   *
   * @param {HTMLElement} tag - element to check
   * @returns {boolean}
   */
  static isSingleTag(e) {
    return e.tagName && [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Check if element is BR or WBR
   *
   * @param {HTMLElement} element - element to check
   * @returns {boolean}
   */
  static isLineBreakTag(e) {
    return e && e.tagName && [
      "BR",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Helper for making Elements with class name and attributes
   *
   * @param  {string} tagName - new Element tag name
   * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
   * @param  {object} [attributes] - any attributes
   * @returns {HTMLElement}
   */
  static make(e, t = null, o = {}) {
    const i = document.createElement(e);
    if (Array.isArray(t)) {
      const r = t.filter((s) => s !== void 0);
      i.classList.add(...r);
    } else
      t && i.classList.add(t);
    for (const r in o)
      Object.prototype.hasOwnProperty.call(o, r) && (i[r] = o[r]);
    return i;
  }
  /**
   * Creates Text Node with the passed content
   *
   * @param {string} content - text content
   * @returns {Text}
   */
  static text(e) {
    return document.createTextNode(e);
  }
  /**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent - where to append
   * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
   */
  static append(e, t) {
    Array.isArray(t) ? t.forEach((o) => e.appendChild(o)) : e.appendChild(t);
  }
  /**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */
  static prepend(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach((o) => e.prepend(o))) : e.prepend(t);
  }
  /**
   * Swap two elements in parent
   *
   * @param {HTMLElement} el1 - from
   * @param {HTMLElement} el2 - to
   * @deprecated
   */
  static swap(e, t) {
    const o = document.createElement("div"), i = e.parentNode;
    i.insertBefore(o, e), i.insertBefore(e, t), i.insertBefore(t, o), i.removeChild(o);
  }
  /**
   * Selector Decorator
   *
   * Returns first match
   *
   * @param {Element} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {Element}
   */
  static find(e = document, t) {
    return e.querySelector(t);
  }
  /**
   * Get Element by Id
   *
   * @param {string} id - id to find
   * @returns {HTMLElement | null}
   */
  static get(e) {
    return document.getElementById(e);
  }
  /**
   * Selector Decorator.
   *
   * Returns all matches
   *
   * @param {Element|Document} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {NodeList}
   */
  static findAll(e = document, t) {
    return e.querySelectorAll(t);
  }
  /**
   * Returns CSS selector for all text inputs
   */
  static get allInputsSelector() {
    return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((e) => `input[type="${e}"]`).join(", ");
  }
  /**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */
  static findAllInputs(e) {
    return vi(e.querySelectorAll(q.allInputsSelector)).reduce((t, o) => q.isNativeInput(o) || q.containsOnlyInlineElements(o) ? [...t, o] : [...t, ...q.getDeepestBlockElements(o)], []);
  }
  /**
   * Search for deepest node which is Leaf.
   * Leaf is the vertex that doesn't have any child nodes
   *
   * @description Method recursively goes throw the all Node until it finds the Leaf
   * @param {Node} node - root Node. From this vertex we start Deep-first search
   *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
   * @param {boolean} [atLast] - find last text node
   * @returns - it can be text Node or Element Node, so that caret will able to work with it
   *            Can return null if node is Document or DocumentFragment, or node is not attached to the DOM
   */
  static getDeepestNode(e, t = !1) {
    const o = t ? "lastChild" : "firstChild", i = t ? "previousSibling" : "nextSibling";
    if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
      let r = e[o];
      if (q.isSingleTag(r) && !q.isNativeInput(r) && !q.isLineBreakTag(r))
        if (r[i])
          r = r[i];
        else if (r.parentNode[i])
          r = r.parentNode[i];
        else
          return r.parentNode;
      return this.getDeepestNode(r, t);
    }
    return e;
  }
  /**
   * Check if object is DOM node
   *
   * @param {*} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isElement(e) {
    return zn(e) ? !1 : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  /**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isFragment(e) {
    return zn(e) ? !1 : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  /**
   * Check if passed element is contenteditable
   *
   * @param {HTMLElement} element - html element to check
   * @returns {boolean}
   */
  static isContentEditable(e) {
    return e.contentEditable === "true";
  }
  /**
   * Checks target if it is native input
   *
   * @param {*} target - HTML element or string
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isNativeInput(e) {
    const t = [
      "INPUT",
      "TEXTAREA"
    ];
    return e && e.tagName ? t.includes(e.tagName) : !1;
  }
  /**
   * Checks if we can set caret
   *
   * @param {HTMLElement} target - target to check
   * @returns {boolean}
   */
  static canSetCaret(e) {
    let t = !0;
    if (q.isNativeInput(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = !1;
          break;
      }
    else
      t = q.isContentEditable(e);
    return t;
  }
  /**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean} true if it is empty
   */
  static isNodeEmpty(e, t) {
    let o;
    return this.isSingleTag(e) && !this.isLineBreakTag(e) ? !1 : (this.isElement(e) && this.isNativeInput(e) ? o = e.value : o = e.textContent.replace("​", ""), t && (o = o.replace(new RegExp(t, "g"), "")), o.length === 0);
  }
  /**
   * checks node if it is doesn't have any child nodes
   *
   * @param {Node} node - node to check
   * @returns {boolean}
   */
  static isLeaf(e) {
    return e ? e.childNodes.length === 0 : !1;
  }
  /**
   * breadth-first search (BFS)
   * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
   *
   * @description Pushes to stack all DOM leafs and checks for emptiness
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean}
   */
  static isEmpty(e, t) {
    const o = [e];
    for (; o.length > 0; )
      if (e = o.shift(), !!e) {
        if (this.isLeaf(e) && !this.isNodeEmpty(e, t))
          return !1;
        e.childNodes && o.push(...Array.from(e.childNodes));
      }
    return !0;
  }
  /**
   * Check if string contains html elements
   *
   * @param {string} str - string to check
   * @returns {boolean}
   */
  static isHTMLString(e) {
    const t = q.make("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  /**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */
  static getContentLength(e) {
    return q.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
  }
  /**
   * Return array of names of block html elements
   *
   * @returns {string[]}
   */
  static get blockElements() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  /**
   * Check if passed content includes only inline elements
   *
   * @param {string|HTMLElement} data - element or html string
   * @returns {boolean}
   */
  static containsOnlyInlineElements(e) {
    let t;
    ce(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    const o = (i) => !q.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o);
    return Array.from(t.children).every(o);
  }
  /**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */
  static getDeepestBlockElements(e) {
    return q.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o) => [...t, ...q.getDeepestBlockElements(o)], []);
  }
  /**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */
  static getHolder(e) {
    return ce(e) ? document.getElementById(e) : e;
  }
  /**
   * Returns true if element is anchor (is A tag)
   *
   * @param {Element} element - element to check
   * @returns {boolean}
   */
  static isAnchor(e) {
    return e.tagName.toLowerCase() === "a";
  }
  /**
   * Return element's offset related to the document
   *
   * @todo handle case when editor initialized in scrollable popup
   * @param el - element to compute offset
   */
  static offset(e) {
    const t = e.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, r = t.top + i, s = t.left + o;
    return {
      top: r,
      left: s,
      bottom: r + t.height,
      right: s + t.width
    };
  }
  /**
   * Find text node and offset by total content offset
   *
   * @param {Node} root - root node to start search from
   * @param {number} totalOffset - offset relative to the root node content
   * @returns {{node: Node | null, offset: number}} - node and offset inside node
   */
  static getNodeByOffset(e, t) {
    let o = 0, i = null;
    const r = document.createTreeWalker(
      e,
      NodeFilter.SHOW_TEXT,
      null
    );
    let s = r.nextNode();
    for (; s; ) {
      const l = s.textContent, u = l === null ? 0 : l.length;
      if (i = s, o + u >= t)
        break;
      o += u, s = r.nextNode();
    }
    if (!i)
      return {
        node: null,
        offset: 0
      };
    const a = i.textContent;
    if (a === null || a.length === 0)
      return {
        node: null,
        offset: 0
      };
    const c = Math.min(t - o, a.length);
    return {
      node: i,
      offset: c
    };
  }
};
function xs(n) {
  return !/[^\t\n\r ]/.test(n);
}
function Cs(n) {
  const e = window.getComputedStyle(n), t = parseFloat(e.fontSize), o = parseFloat(e.lineHeight) || t * 1.2, i = parseFloat(e.paddingTop), r = parseFloat(e.borderTopWidth), s = parseFloat(e.marginTop), a = t * 0.8, c = (o - t) / 2;
  return s + r + i + c + a;
}
function wi(n) {
  n.dataset.empty = x.isEmpty(n) ? "true" : "false";
}
const Es = {
  blockTunes: {
    toggler: {
      "Click to tune": "",
      "or drag to move": ""
    }
  },
  inlineToolbar: {
    converter: {
      "Convert to": ""
    }
  },
  toolbar: {
    toolbox: {
      Add: ""
    }
  },
  popover: {
    Filter: "",
    "Nothing found": "",
    "Convert to": ""
  }
}, Ss = {
  Text: "",
  Link: "",
  Bold: "",
  Italic: ""
}, Ts = {
  link: {
    "Add a link": ""
  },
  stub: {
    "The block can not be displayed correctly.": ""
  }
}, _s = {
  delete: {
    Delete: "",
    "Click to delete": ""
  },
  moveUp: {
    "Move up": ""
  },
  moveDown: {
    "Move down": ""
  }
}, ki = {
  ui: Es,
  toolNames: Ss,
  tools: Ts,
  blockTunes: _s
}, xi = class Se {
  /**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static ui(e, t) {
    return Se._t(e, t);
  }
  /**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static t(e, t) {
    return Se._t(e, t);
  }
  /**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */
  static setDictionary(e) {
    Se.currentDictionary = e;
  }
  /**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static _t(e, t) {
    const o = Se.getNamespace(e);
    return !o || !o[t] ? t : o[t];
  }
  /**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */
  static getNamespace(e) {
    return e.split(".").reduce((t, o) => !t || !Object.keys(t).length ? {} : t[o], Se.currentDictionary);
  }
};
xi.currentDictionary = ki;
let W = xi;
class Ci extends Error {
}
class Ge {
  constructor() {
    this.subscribers = {};
  }
  /**
   * Subscribe any event on callback
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  on(e, t) {
    e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t);
  }
  /**
   * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  once(e, t) {
    e in this.subscribers || (this.subscribers[e] = []);
    const o = (i) => {
      const r = t(i), s = this.subscribers[e].indexOf(o);
      return s !== -1 && this.subscribers[e].splice(s, 1), r;
    };
    this.subscribers[e].push(o);
  }
  /**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data - subscribers get this data when they were fired
   */
  emit(e, t) {
    J(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o, i) => {
      const r = i(o);
      return r !== void 0 ? r : o;
    }, t);
  }
  /**
   * Unsubscribe callback from event
   *
   * @param eventName - event name
   * @param callback - event handler
   */
  off(e, t) {
    if (this.subscribers[e] === void 0) {
      console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
      return;
    }
    for (let o = 0; o < this.subscribers[e].length; o++)
      if (this.subscribers[e][o] === t) {
        delete this.subscribers[e][o];
        break;
      }
  }
  /**
   * Destroyer
   * clears subscribers list
   */
  destroy() {
    this.subscribers = {};
  }
}
function ie(n) {
  Object.setPrototypeOf(this, {
    /**
     * Block id
     *
     * @returns {string}
     */
    get id() {
      return n.id;
    },
    /**
     * Tool name
     *
     * @returns {string}
     */
    get name() {
      return n.name;
    },
    /**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */
    get config() {
      return n.config;
    },
    /**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */
    get holder() {
      return n.holder;
    },
    /**
     * True if Block content is empty
     *
     * @returns {boolean}
     */
    get isEmpty() {
      return n.isEmpty;
    },
    /**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */
    get selected() {
      return n.selected;
    },
    /**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */
    set stretched(e) {
      n.stretched = e;
    },
    /**
     * True if Block is stretched
     *
     * @returns {boolean}
     */
    get stretched() {
      return n.stretched;
    },
    /**
     * True if Block has inputs to be focused
     */
    get focusable() {
      return n.focusable;
    },
    /**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */
    call(e, t) {
      return n.call(e, t);
    },
    /**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */
    save() {
      return n.save();
    },
    /**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */
    validate(e) {
      return n.validate(e);
    },
    /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */
    dispatchChange() {
      n.dispatchChange();
    },
    /**
     * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
     * This method returns the entry that is related to the Block (depended on the Block data)
     */
    getActiveToolboxEntry() {
      return n.getActiveToolboxEntry();
    }
  });
}
let Ze = class {
  constructor() {
    this.allListeners = [];
  }
  /**
   * Assigns event listener on element and returns unique identifier
   *
   * @param {EventTarget} element - DOM element that needs to be listened
   * @param {string} eventType - event type
   * @param {Function} handler - method that will be fired on event
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  on(e, t, o, i = !1) {
    const r = ws("l"), s = {
      id: r,
      element: e,
      eventType: t,
      handler: o,
      options: i
    };
    if (!this.findOne(e, t, o))
      return this.allListeners.push(s), e.addEventListener(t, o, i), r;
  }
  /**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  off(e, t, o, i) {
    const r = this.findAll(e, t, o);
    r.forEach((s, a) => {
      const c = this.allListeners.indexOf(r[a]);
      c > -1 && (this.allListeners.splice(c, 1), s.element.removeEventListener(s.eventType, s.handler, s.options));
    });
  }
  /**
   * Removes listener by id
   *
   * @param {string} id - listener identifier
   */
  offById(e) {
    const t = this.findById(e);
    t && t.element.removeEventListener(t.eventType, t.handler, t.options);
  }
  /**
   * Finds and returns first listener by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} [eventType] - event type
   * @param {Function} [handler] - event handler
   * @returns {ListenerData|null}
   */
  findOne(e, t, o) {
    const i = this.findAll(e, t, o);
    return i.length > 0 ? i[0] : null;
  }
  /**
   * Return all stored listeners by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} eventType - event type
   * @param {Function} handler - event handler
   * @returns {ListenerData[]}
   */
  findAll(e, t, o) {
    let i;
    const r = e ? this.findByEventTarget(e) : [];
    return e && t && o ? i = r.filter((s) => s.eventType === t && s.handler === o) : e && t ? i = r.filter((s) => s.eventType === t) : i = r, i;
  }
  /**
   * Removes all listeners
   */
  removeAll() {
    this.allListeners.map((e) => {
      e.element.removeEventListener(e.eventType, e.handler, e.options);
    }), this.allListeners = [];
  }
  /**
   * Module cleanup on destruction
   */
  destroy() {
    this.removeAll();
  }
  /**
   * Search method: looks for listener by passed element
   *
   * @param {EventTarget} element - searching element
   * @returns {Array} listeners that found on element
   */
  findByEventTarget(e) {
    return this.allListeners.filter((t) => {
      if (t.element === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed event type
   *
   * @param {string} eventType - event type
   * @returns {ListenerData[]} listeners that found on element
   */
  findByType(e) {
    return this.allListeners.filter((t) => {
      if (t.eventType === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed handler
   *
   * @param {Function} handler - event handler
   * @returns {ListenerData[]} listeners that found on element
   */
  findByHandler(e) {
    return this.allListeners.filter((t) => {
      if (t.handler === e)
        return t;
    });
  }
  /**
   * Returns listener data found by id
   *
   * @param {string} id - listener identifier
   * @returns {ListenerData}
   */
  findById(e) {
    return this.allListeners.find((t) => t.id === e);
  }
}, M = class Ei {
  /**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    if (this.nodes = {}, this.listeners = new Ze(), this.readOnlyMutableListeners = {
      /**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */
      on: (o, i, r, s = !1) => {
        this.mutableListenerIds.push(
          this.listeners.on(o, i, r, s)
        );
      },
      /**
       * Clears all mutable listeners
       */
      clearAll: () => {
        for (const o of this.mutableListenerIds)
          this.listeners.offById(o);
        this.mutableListenerIds = [];
      }
    }, this.mutableListenerIds = [], new.target === Ei)
      throw new TypeError("Constructors for abstract class Module are not allowed.");
    this.config = e, this.eventsDispatcher = t;
  }
  /**
   * Editor modules setter
   *
   * @param {EditorModules} Editor - Editor's Modules
   */
  set state(e) {
    this.Editor = e;
  }
  /**
   * Remove memorized nodes
   */
  removeAllNodes() {
    for (const e in this.nodes) {
      const t = this.nodes[e];
      t instanceof HTMLElement && t.remove();
    }
  }
  /**
   * Returns true if current direction is RTL (Right-To-Left)
   */
  get isRtl() {
    return this.config.i18n.direction === "rtl";
  }
}, _ = class de {
  constructor() {
    this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
  }
  /**
   * Editor styles
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  static get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorZone: "codex-editor__redactor"
    };
  }
  /**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */
  static get anchorNode() {
    const e = window.getSelection();
    return e ? e.anchorNode : null;
  }
  /**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */
  static get anchorElement() {
    const e = window.getSelection();
    if (!e)
      return null;
    const t = e.anchorNode;
    return t ? x.isElement(t) ? t : t.parentElement : null;
  }
  /**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */
  static get anchorOffset() {
    const e = window.getSelection();
    return e ? e.anchorOffset : null;
  }
  /**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */
  static get isCollapsed() {
    const e = window.getSelection();
    return e ? e.isCollapsed : null;
  }
  /**
   * Check current selection if it is at Editor's zone
   *
   * @returns {boolean}
   */
  static get isAtEditor() {
    return this.isSelectionAtEditor(de.get());
  }
  /**
   * Check if passed selection is at Editor's zone
   *
   * @param selection - Selection object to check
   */
  static isSelectionAtEditor(e) {
    if (!e)
      return !1;
    let t = e.anchorNode || e.focusNode;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${de.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Check if passed range at Editor zone
   *
   * @param range - range to check
   */
  static isRangeAtEditor(e) {
    if (!e)
      return;
    let t = e.startContainer;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${de.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Methods return boolean that true if selection exists on the page
   */
  static get isSelectionExists() {
    return !!de.get().anchorNode;
  }
  /**
   * Return first range
   *
   * @returns {Range|null}
   */
  static get range() {
    return this.getRangeFromSelection(this.get());
  }
  /**
   * Returns range from passed Selection object
   *
   * @param selection - Selection object to get Range from
   */
  static getRangeFromSelection(e) {
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  /**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */
  static get rect() {
    let e = document.selection, t, o = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    if (e && e.type !== "Control")
      return e = e, t = e.createRange(), o.x = t.boundingLeft, o.y = t.boundingTop, o.width = t.boundingWidth, o.height = t.boundingHeight, o;
    if (!window.getSelection)
      return N("Method window.getSelection is not supported", "warn"), o;
    if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
      return N("Method SelectionUtils.rangeCount is not supported", "warn"), o;
    if (e.rangeCount === 0)
      return o;
    if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o = t.getBoundingClientRect()), o.x === 0 && o.y === 0) {
      const i = document.createElement("span");
      if (i.getBoundingClientRect) {
        i.appendChild(document.createTextNode("​")), t.insertNode(i), o = i.getBoundingClientRect();
        const r = i.parentNode;
        r.removeChild(i), r.normalize();
      }
    }
    return o;
  }
  /**
   * Returns selected text as String
   *
   * @returns {string}
   */
  static get text() {
    return window.getSelection ? window.getSelection().toString() : "";
  }
  /**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */
  static get() {
    return window.getSelection();
  }
  /**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   */
  static setCursor(e, t = 0) {
    const o = document.createRange(), i = window.getSelection();
    return x.isNativeInput(e) ? x.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o.setStart(e, t), o.setEnd(e, t), i.removeAllRanges(), i.addRange(o), o.getBoundingClientRect());
  }
  /**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */
  static isRangeInsideContainer(e) {
    const t = de.range;
    return t === null ? !1 : e.contains(t.startContainer);
  }
  /**
   * Adds fake cursor to the current range
   */
  static addFakeCursor() {
    const e = de.range;
    if (e === null)
      return;
    const t = x.make("span", "codex-editor__fake-cursor");
    t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
  }
  /**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */
  static isFakeCursorInsideContainer(e) {
    return x.find(e, ".codex-editor__fake-cursor") !== null;
  }
  /**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */
  static removeFakeCursor(e = document.body) {
    const t = x.find(e, ".codex-editor__fake-cursor");
    t && t.remove();
  }
  /**
   * Removes fake background
   */
  removeFakeBackground() {
    this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
  }
  /**
   * Sets fake background
   */
  setFakeBackground() {
    document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
  }
  /**
   * Save SelectionUtils's range
   */
  save() {
    this.savedSelectionRange = de.range;
  }
  /**
   * Restore saved SelectionUtils's range
   */
  restore() {
    if (!this.savedSelectionRange)
      return;
    const e = window.getSelection();
    e.removeAllRanges(), e.addRange(this.savedSelectionRange);
  }
  /**
   * Clears saved selection
   */
  clearSaved() {
    this.savedSelectionRange = null;
  }
  /**
   * Collapse current selection
   */
  collapseToEnd() {
    const e = window.getSelection(), t = document.createRange();
    t.selectNodeContents(e.focusNode), t.collapse(!1), e.removeAllRanges(), e.addRange(t);
  }
  /**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t, o = 10) {
    const i = window.getSelection();
    let r = null;
    return !i || !i.anchorNode || !i.focusNode ? null : ([
      /** the Node in which the selection begins */
      i.anchorNode,
      /** the Node in which the selection ends */
      i.focusNode
    ].forEach((s) => {
      let a = o;
      for (; a > 0 && s.parentNode && !(s.tagName === e && (r = s, t && s.classList && !s.classList.contains(t) && (r = null), r)); )
        s = s.parentNode, a--;
    }), r);
  }
  /**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selected
   */
  expandToTag(e) {
    const t = window.getSelection();
    t.removeAllRanges();
    const o = document.createRange();
    o.selectNodeContents(e), t.addRange(o);
  }
};
function Bs(n, e) {
  const { type: t, target: o, addedNodes: i, removedNodes: r } = n;
  return n.type === "attributes" && n.attributeName === "data-empty" ? !1 : !!(e.contains(o) || t === "childList" && (Array.from(i).some((s) => s === e) || Array.from(r).some((s) => s === e)));
}
const Xt = "redactor dom changed", Si = "block changed", Ti = "fake cursor is about to be toggled", _i = "fake cursor have been set", Ke = "editor mobile layout toggled";
function Gt(n, e) {
  if (!n.conversionConfig)
    return !1;
  const t = n.conversionConfig[e];
  return D(t) || ce(t);
}
function ht(n, e) {
  return Gt(n.tool, e);
}
function Bi(n, e) {
  return Object.entries(n).some(([t, o]) => e[t] && ks(e[t], o));
}
async function Oi(n, e) {
  const t = (await n.save()).data, o = e.find((i) => i.name === n.name);
  return o !== void 0 && !Gt(o, "export") ? [] : e.reduce((i, r) => {
    if (!Gt(r, "import") || r.toolbox === void 0)
      return i;
    const s = r.toolbox.filter((a) => {
      if (J(a) || a.icon === void 0)
        return !1;
      if (a.data !== void 0) {
        if (Bi(a.data, t))
          return !1;
      } else if (r.name === n.name)
        return !1;
      return !0;
    });
    return i.push({
      ...r,
      toolbox: s
    }), i;
  }, []);
}
function Vn(n, e) {
  return n.mergeable ? n.name === e.name ? !0 : ht(e, "export") && ht(n, "import") : !1;
}
function Os(n, e) {
  const t = e?.export;
  return D(t) ? t(n) : ce(t) ? n[t] : (t !== void 0 && N("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
}
function Kn(n, e, t) {
  const o = e?.import;
  return D(o) ? o(n, t) : ce(o) ? {
    [o]: n
  } : (o !== void 0 && N("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
}
var j = /* @__PURE__ */ ((n) => (n.Default = "default", n.Separator = "separator", n.Html = "html", n))(j || {}), se = /* @__PURE__ */ ((n) => (n.APPEND_CALLBACK = "appendCallback", n.RENDERED = "rendered", n.MOVED = "moved", n.UPDATED = "updated", n.REMOVED = "removed", n.ON_PASTE = "onPaste", n))(se || {});
let le = class ue extends Ge {
  /**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */
  constructor({
    id: e = vs(),
    data: t,
    tool: o,
    readOnly: i,
    tunesData: r
  }, s) {
    super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
      this.dropInputsCache(), this.updateCurrentInput();
    }, this.didMutated = (a = void 0) => {
      const c = a === void 0, l = a instanceof InputEvent;
      !c && !l && this.detectToolRootChange(a);
      let u;
      c || l ? u = !0 : u = !(a.length > 0 && a.every((d) => {
        const { addedNodes: g, removedNodes: v, target: f } = d;
        return [
          ...Array.from(g),
          ...Array.from(v),
          f
        ].some((h) => (x.isElement(h) || (h = h.parentElement), h && h.closest('[data-mutation-free="true"]') !== null));
      })), u && (this.dropInputsCache(), this.updateCurrentInput(), this.toggleInputsEmptyMark(), this.call(
        "updated"
        /* UPDATED */
      ), this.emit("didMutated", this));
    }, this.name = o.name, this.id = e, this.settings = o.settings, this.config = o.settings.config || {}, this.editorEventBus = s || null, this.blockAPI = new ie(this), this.tool = o, this.toolInstance = o.create(t, this.blockAPI, i), this.tunes = o.tunes, this.composeTunes(r), this.holder = this.compose(), window.requestIdleCallback(() => {
      this.watchBlockMutations(), this.addInputEvents(), this.toggleInputsEmptyMark();
    });
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      wrapper: "ce-block",
      wrapperStretched: "ce-block--stretched",
      content: "ce-block__content",
      selected: "ce-block--selected",
      dropTarget: "ce-block--drop-target"
    };
  }
  /**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   */
  get inputs() {
    if (this.cachedInputs.length !== 0)
      return this.cachedInputs;
    const e = x.findAllInputs(this.holder);
    return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
  }
  /**
   * Return current Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get currentInput() {
    return this.inputs[this.inputIndex];
  }
  /**
   * Set input index to the passed element
   *
   * @param element - HTML Element to set as current input
   */
  set currentInput(e) {
    const t = this.inputs.findIndex((o) => o === e || o.contains(e));
    t !== -1 && (this.inputIndex = t);
  }
  /**
   * Return first Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get firstInput() {
    return this.inputs[0];
  }
  /**
   * Return first Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get lastInput() {
    const e = this.inputs;
    return e[e.length - 1];
  }
  /**
   * Return next Tool`s input or undefined if it doesn't exist
   * If Block doesn't contain inputs, return undefined
   */
  get nextInput() {
    return this.inputs[this.inputIndex + 1];
  }
  /**
   * Return previous Tool`s input or undefined if it doesn't exist
   * If Block doesn't contain inputs, return undefined
   */
  get previousInput() {
    return this.inputs[this.inputIndex - 1];
  }
  /**
   * Get Block's JSON data
   *
   * @returns {object}
   */
  get data() {
    return this.save().then((e) => e && !J(e.data) ? e.data : {});
  }
  /**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */
  get sanitize() {
    return this.tool.sanitizeConfig;
  }
  /**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */
  get mergeable() {
    return D(this.toolInstance.merge);
  }
  /**
   * If Block contains inputs, it is focusable
   */
  get focusable() {
    return this.inputs.length !== 0;
  }
  /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */
  get isEmpty() {
    const e = x.isEmpty(this.pluginsContent, "/"), t = !this.hasMedia;
    return e && t;
  }
  /**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */
  get hasMedia() {
    const e = [
      "img",
      "iframe",
      "video",
      "audio",
      "source",
      "input",
      "textarea",
      "twitterwidget"
    ];
    return !!this.holder.querySelector(e.join(","));
  }
  /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set selected(e) {
    var t, o;
    this.holder.classList.toggle(ue.CSS.selected, e);
    const i = e === !0 && _.isRangeInsideContainer(this.holder), r = e === !1 && _.isFakeCursorInsideContainer(this.holder);
    (i || r) && ((t = this.editorEventBus) == null || t.emit(Ti, { state: e }), i ? _.addFakeCursor() : _.removeFakeCursor(this.holder), (o = this.editorEventBus) == null || o.emit(_i, { state: e }));
  }
  /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */
  get selected() {
    return this.holder.classList.contains(ue.CSS.selected);
  }
  /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */
  set stretched(e) {
    this.holder.classList.toggle(ue.CSS.wrapperStretched, e);
  }
  /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */
  get stretched() {
    return this.holder.classList.contains(ue.CSS.wrapperStretched);
  }
  /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */
  set dropTarget(e) {
    this.holder.classList.toggle(ue.CSS.dropTarget, e);
  }
  /**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */
  get pluginsContent() {
    return this.toolRenderedElement;
  }
  /**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */
  call(e, t) {
    if (D(this.toolInstance[e])) {
      e === "appendCallback" && N(
        "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
        "warn"
      );
      try {
        this.toolInstance[e].call(this.toolInstance, t);
      } catch (o) {
        N(`Error during '${e}' call: ${o.message}`, "error");
      }
    }
  }
  /**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */
  async mergeWith(e) {
    await this.toolInstance.merge(e);
  }
  /**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */
  async save() {
    const e = await this.toolInstance.save(this.pluginsContent), t = this.unavailableTunesData;
    [
      ...this.tunesInstances.entries(),
      ...this.defaultTunesInstances.entries()
    ].forEach(([r, s]) => {
      if (D(s.save))
        try {
          t[r] = s.save();
        } catch (a) {
          N(`Tune ${s.constructor.name} save method throws an Error %o`, "warn", a);
        }
    });
    const o = window.performance.now();
    let i;
    return Promise.resolve(e).then((r) => (i = window.performance.now(), {
      id: this.id,
      tool: this.name,
      data: r,
      tunes: t,
      time: i - o
    })).catch((r) => {
      N(`Saving process for ${this.name} tool failed due to the ${r}`, "log", "red");
    });
  }
  /**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */
  async validate(e) {
    let t = !0;
    return this.toolInstance.validate instanceof Function && (t = await this.toolInstance.validate(e)), t;
  }
  /**
   * Returns data to render in Block Tunes menu.
   * Splits block tunes into 2 groups: block specific tunes and common tunes
   */
  getTunes() {
    const e = [], t = [], o = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [];
    return x.isElement(o) ? e.push({
      type: j.Html,
      element: o
    }) : Array.isArray(o) ? e.push(...o) : e.push(o), [
      ...this.tunesInstances.values(),
      ...this.defaultTunesInstances.values()
    ].map((i) => i.render()).forEach((i) => {
      x.isElement(i) ? t.push({
        type: j.Html,
        element: i
      }) : Array.isArray(i) ? t.push(...i) : t.push(i);
    }), {
      toolTunes: e,
      commonTunes: t
    };
  }
  /**
   * Update current input index with selection anchor node
   */
  updateCurrentInput() {
    this.currentInput = x.isNativeInput(document.activeElement) || !_.anchorNode ? document.activeElement : _.anchorNode;
  }
  /**
   * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
   * Can be useful for block changes invisible for editor core.
   */
  dispatchChange() {
    this.didMutated();
  }
  /**
   * Call Tool instance destroy method
   */
  destroy() {
    this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), D(this.toolInstance.destroy) && this.toolInstance.destroy();
  }
  /**
   * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
   * This method returns the entry that is related to the Block (depended on the Block data)
   */
  async getActiveToolboxEntry() {
    const e = this.tool.toolbox;
    if (e.length === 1)
      return Promise.resolve(this.tool.toolbox[0]);
    const t = await this.data, o = e;
    return o?.find((i) => Bi(i.data, t));
  }
  /**
   * Exports Block data as string using conversion config
   */
  async exportDataAsString() {
    const e = await this.data;
    return Os(e, this.tool.conversionConfig);
  }
  /**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */
  compose() {
    const e = x.make("div", ue.CSS.wrapper), t = x.make("div", ue.CSS.content), o = this.toolInstance.render();
    e.dataset.id = this.id, this.toolRenderedElement = o, t.appendChild(this.toolRenderedElement);
    let i = t;
    return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach((r) => {
      if (D(r.wrap))
        try {
          i = r.wrap(i);
        } catch (s) {
          N(`Tune ${r.constructor.name} wrap method throws an Error %o`, "warn", s);
        }
    }), e.appendChild(i), e;
  }
  /**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */
  composeTunes(e) {
    Array.from(this.tunes.values()).forEach((t) => {
      (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t.name, t.create(e[t.name], this.blockAPI));
    }), Object.entries(e).forEach(([t, o]) => {
      this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o);
    });
  }
  /**
   * Adds focus event listeners to all inputs and contenteditable
   */
  addInputEvents() {
    this.inputs.forEach((e) => {
      e.addEventListener("focus", this.handleFocus), x.isNativeInput(e) && e.addEventListener("input", this.didMutated);
    });
  }
  /**
   * removes focus event listeners from all inputs and contenteditable
   */
  removeInputEvents() {
    this.inputs.forEach((e) => {
      e.removeEventListener("focus", this.handleFocus), x.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
    });
  }
  /**
   * Listen common editor Dom Changed event and detect mutations related to the  Block
   */
  watchBlockMutations() {
    var e;
    this.redactorDomChangedCallback = (t) => {
      const { mutations: o } = t;
      o.some((i) => Bs(i, this.toolRenderedElement)) && this.didMutated(o);
    }, (e = this.editorEventBus) == null || e.on(Xt, this.redactorDomChangedCallback);
  }
  /**
   * Remove redactor dom change event listener
   */
  unwatchBlockMutations() {
    var e;
    (e = this.editorEventBus) == null || e.off(Xt, this.redactorDomChangedCallback);
  }
  /**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */
  detectToolRootChange(e) {
    e.forEach((t) => {
      if (Array.from(t.removedNodes).includes(this.toolRenderedElement)) {
        const o = t.addedNodes[t.addedNodes.length - 1];
        this.toolRenderedElement = o;
      }
    });
  }
  /**
   * Clears inputs cached value
   */
  dropInputsCache() {
    this.cachedInputs = [];
  }
  /**
   * Mark inputs with 'data-empty' attribute with the empty state
   */
  toggleInputsEmptyMark() {
    this.inputs.forEach(wi);
  }
};
class Ls extends M {
  constructor() {
    super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o = {}, i, r, s, a) => {
      const c = this.Editor.BlockManager.insert({
        id: a,
        tool: e,
        data: t,
        index: i,
        needToFocus: r,
        replace: s
      });
      return new ie(c);
    }, this.composeBlockData = async (e) => {
      const t = this.Editor.Tools.blockTools.get(e);
      return new le({
        tool: t,
        api: this.Editor.API,
        readOnly: !0,
        data: {},
        tunesData: {}
      }).data;
    }, this.update = async (e, t, o) => {
      const { BlockManager: i } = this.Editor, r = i.getBlockById(e);
      if (r === void 0)
        throw new Error(`Block with id "${e}" not found`);
      const s = await i.update(r, t, o);
      return new ie(s);
    }, this.convert = async (e, t, o) => {
      var i, r;
      const { BlockManager: s, Tools: a } = this.Editor, c = s.getBlockById(e);
      if (!c)
        throw new Error(`Block with id "${e}" not found`);
      const l = a.blockTools.get(c.name), u = a.blockTools.get(t);
      if (!u)
        throw new Error(`Block Tool with type "${t}" not found`);
      const d = ((i = l?.conversionConfig) == null ? void 0 : i.export) !== void 0, g = ((r = u.conversionConfig) == null ? void 0 : r.import) !== void 0;
      if (d && g) {
        const v = await s.convert(c, t, o);
        return new ie(v);
      } else {
        const v = [
          d ? !1 : ut(c.name),
          g ? !1 : ut(t)
        ].filter(Boolean).join(" and ");
        throw new Error(`Conversion from "${c.name}" to "${t}" is not possible. ${v} tool(s) should provide a "conversionConfig"`);
      }
    }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
      this.validateIndex(t);
      const o = e.map(({ id: i, type: r, data: s }) => this.Editor.BlockManager.composeBlock({
        id: i,
        tool: r || this.config.defaultBlock,
        data: s
      }));
      return this.Editor.BlockManager.insertMany(o, t), o.map((i) => new ie(i));
    };
  }
  /**
   * Available methods
   *
   * @returns {Blocks}
   */
  get methods() {
    return {
      clear: () => this.clear(),
      render: (e) => this.render(e),
      renderFromHTML: (e) => this.renderFromHTML(e),
      delete: (e) => this.delete(e),
      swap: (e, t) => this.swap(e, t),
      move: (e, t) => this.move(e, t),
      getBlockByIndex: (e) => this.getBlockByIndex(e),
      getById: (e) => this.getById(e),
      getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
      getBlockIndex: (e) => this.getBlockIndex(e),
      getBlocksCount: () => this.getBlocksCount(),
      getBlockByElement: (e) => this.getBlockByElement(e),
      stretchBlock: (e, t = !0) => this.stretchBlock(e, t),
      insertNewBlock: () => this.insertNewBlock(),
      insert: this.insert,
      insertMany: this.insertMany,
      update: this.update,
      composeBlockData: this.composeBlockData,
      convert: this.convert
    };
  }
  /**
   * Returns Blocks count
   *
   * @returns {number}
   */
  getBlocksCount() {
    return this.Editor.BlockManager.blocks.length;
  }
  /**
   * Returns current block index
   *
   * @returns {number}
   */
  getCurrentBlockIndex() {
    return this.Editor.BlockManager.currentBlockIndex;
  }
  /**
   * Returns the index of Block by id;
   *
   * @param id - block id
   */
  getBlockIndex(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    if (!t) {
      Z("There is no block with id `" + e + "`", "warn");
      return;
    }
    return this.Editor.BlockManager.getBlockIndex(t);
  }
  /**
   * Returns BlockAPI object by Block index
   *
   * @param {number} index - index to get
   */
  getBlockByIndex(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(e);
    if (t === void 0) {
      Z("There is no block at index `" + e + "`", "warn");
      return;
    }
    return new ie(t);
  }
  /**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */
  getById(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    return t === void 0 ? (Z("There is no block with id `" + e + "`", "warn"), null) : new ie(t);
  }
  /**
   * Get Block API object by any child html element
   *
   * @param element - html element to get Block by
   */
  getBlockByElement(e) {
    const t = this.Editor.BlockManager.getBlock(e);
    if (t === void 0) {
      Z("There is no block corresponding to element `" + e + "`", "warn");
      return;
    }
    return new ie(t);
  }
  /**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    N(
      "`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead",
      "info"
    ), this.Editor.BlockManager.swap(e, t);
  }
  /**
   * Move block from one index to another
   *
   * @param {number} toIndex - index to move to
   * @param {number} fromIndex - index to move from
   */
  move(e, t) {
    this.Editor.BlockManager.move(e, t);
  }
  /**
   * Deletes Block
   *
   * @param {number} blockIndex - index of Block to delete
   */
  delete(e = this.Editor.BlockManager.currentBlockIndex) {
    try {
      const t = this.Editor.BlockManager.getBlockByIndex(e);
      this.Editor.BlockManager.removeBlock(t);
    } catch (t) {
      Z(t, "warn");
      return;
    }
    this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
  }
  /**
   * Clear Editor's area
   */
  async clear() {
    await this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
  }
  /**
   * Fills Editor with Blocks data
   *
   * @param {OutputData} data — Saved Editor data
   */
  async render(e) {
    if (e === void 0 || e.blocks === void 0)
      throw new Error("Incorrect data passed to the render() method");
    this.Editor.ModificationsObserver.disable(), await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(e.blocks), this.Editor.ModificationsObserver.enable();
  }
  /**
   * Render passed HTML string
   *
   * @param {string} data - HTML string to render
   * @returns {Promise<void>}
   */
  async renderFromHTML(e) {
    return await this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, !0);
  }
  /**
   * Stretch Block's content
   *
   * @param {number} index - index of Block to stretch
   * @param {boolean} status - true to enable, false to disable
   * @deprecated Use BlockAPI interface to stretch Blocks
   */
  stretchBlock(e, t = !0) {
    Kt(
      !0,
      "blocks.stretchBlock()",
      "BlockAPI"
    );
    const o = this.Editor.BlockManager.getBlockByIndex(e);
    o && (o.stretched = t);
  }
  /**
   * Insert new Block
   * After set caret to this Block
   *
   * @todo remove in 3.0.0
   * @deprecated with insert() method
   */
  insertNewBlock() {
    N("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
  }
  /**
   * Validated block index and throws an error if it's invalid
   *
   * @param index - index to validate
   */
  validateIndex(e) {
    if (typeof e != "number")
      throw new Error("Index should be a number");
    if (e < 0)
      throw new Error("Index should be greater than or equal to 0");
    if (e === null)
      throw new Error("Index should be greater than or equal to 0");
  }
}
function Ms(n, e) {
  return typeof n == "number" ? e.BlockManager.getBlockByIndex(n) : typeof n == "string" ? e.BlockManager.getBlockById(n) : e.BlockManager.getBlockById(n.id);
}
class Is extends M {
  constructor() {
    super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), !0) : !1, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), !0) : !1, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), !0) : !1, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), !0) : !1, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o = 0) => {
      const i = Ms(e, this.Editor);
      return i === void 0 ? !1 : (this.Editor.Caret.setToBlock(i, t, o), !0);
    }, this.focus = (e = !1) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
  }
  /**
   * Available methods
   *
   * @returns {Caret}
   */
  get methods() {
    return {
      setToFirstBlock: this.setToFirstBlock,
      setToLastBlock: this.setToLastBlock,
      setToPreviousBlock: this.setToPreviousBlock,
      setToNextBlock: this.setToNextBlock,
      setToBlock: this.setToBlock,
      focus: this.focus
    };
  }
}
class Ps extends M {
  /**
   * Available methods
   *
   * @returns {Events}
   */
  get methods() {
    return {
      emit: (e, t) => this.emit(e, t),
      off: (e, t) => this.off(e, t),
      on: (e, t) => this.on(e, t)
    };
  }
  /**
   * Subscribe on Events
   *
   * @param {string} eventName - event name to subscribe
   * @param {Function} callback - event handler
   */
  on(e, t) {
    this.eventsDispatcher.on(e, t);
  }
  /**
   * Emit event with data
   *
   * @param {string} eventName - event to emit
   * @param {object} data - event's data
   */
  emit(e, t) {
    this.eventsDispatcher.emit(e, t);
  }
  /**
   * Unsubscribe from Event
   *
   * @param {string} eventName - event to unsubscribe
   * @param {Function} callback - event handler
   */
  off(e, t) {
    this.eventsDispatcher.off(e, t);
  }
}
let As = class Li extends M {
  /**
   * Return namespace section for tool or block tune
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  static getNamespace(e, t) {
    return t ? `blockTunes.${e}` : `tools.${e}`;
  }
  /**
   * Return I18n API methods with global dictionary access
   */
  get methods() {
    return {
      t: () => {
        Z("I18n.t() method can be accessed only from Tools", "warn");
      }
    };
  }
  /**
   * Return I18n API methods with tool namespaced dictionary
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  getMethodsForTool(e, t) {
    return Object.assign(
      this.methods,
      {
        t: (o) => W.t(Li.getNamespace(e, t), o)
      }
    );
  }
};
class Ns extends M {
  /**
   * Editor.js Core API modules
   */
  get methods() {
    return {
      blocks: this.Editor.BlocksAPI.methods,
      caret: this.Editor.CaretAPI.methods,
      tools: this.Editor.ToolsAPI.methods,
      events: this.Editor.EventsAPI.methods,
      listeners: this.Editor.ListenersAPI.methods,
      notifier: this.Editor.NotifierAPI.methods,
      sanitizer: this.Editor.SanitizerAPI.methods,
      saver: this.Editor.SaverAPI.methods,
      selection: this.Editor.SelectionAPI.methods,
      styles: this.Editor.StylesAPI.classes,
      toolbar: this.Editor.ToolbarAPI.methods,
      inlineToolbar: this.Editor.InlineToolbarAPI.methods,
      tooltip: this.Editor.TooltipAPI.methods,
      i18n: this.Editor.I18nAPI.methods,
      readOnly: this.Editor.ReadOnlyAPI.methods,
      ui: this.Editor.UiAPI.methods
    };
  }
  /**
   * Returns Editor.js Core API methods for passed tool
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  getMethodsForTool(e, t) {
    return Object.assign(
      this.methods,
      {
        i18n: this.Editor.I18nAPI.getMethodsForTool(e, t)
      }
    );
  }
}
class Rs extends M {
  /**
   * Available methods
   *
   * @returns {InlineToolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open()
    };
  }
  /**
   * Open Inline Toolbar
   */
  open() {
    this.Editor.InlineToolbar.tryToShow();
  }
  /**
   * Close Inline Toolbar
   */
  close() {
    this.Editor.InlineToolbar.close();
  }
}
class js extends M {
  /**
   * Available methods
   *
   * @returns {Listeners}
   */
  get methods() {
    return {
      on: (e, t, o, i) => this.on(e, t, o, i),
      off: (e, t, o, i) => this.off(e, t, o, i),
      offById: (e) => this.offById(e)
    };
  }
  /**
   * Ads a DOM event listener. Return it's id.
   *
   * @param {HTMLElement} element - Element to set handler to
   * @param {string} eventType - event type
   * @param {() => void} handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  on(e, t, o, i) {
    return this.listeners.on(e, t, o, i);
  }
  /**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  off(e, t, o, i) {
    this.listeners.off(e, t, o, i);
  }
  /**
   * Removes DOM listener by the listener id
   *
   * @param id - id of the listener to remove
   */
  offById(e) {
    this.listeners.offById(e);
  }
}
var Mi = { exports: {} };
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return (function(t) {
      var o = {};
      function i(r) {
        if (o[r])
          return o[r].exports;
        var s = o[r] = { i: r, l: !1, exports: {} };
        return t[r].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
      }
      return i.m = t, i.c = o, i.d = function(r, s, a) {
        i.o(r, s) || Object.defineProperty(r, s, { enumerable: !0, get: a });
      }, i.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, i.t = function(r, s) {
        if (1 & s && (r = i(r)), 8 & s || 4 & s && typeof r == "object" && r && r.__esModule)
          return r;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: r }), 2 & s && typeof r != "string")
          for (var c in r)
            i.d(a, c, (function(l) {
              return r[l];
            }).bind(null, c));
        return a;
      }, i.n = function(r) {
        var s = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return i.d(s, "a", s), s;
      }, i.o = function(r, s) {
        return Object.prototype.hasOwnProperty.call(r, s);
      }, i.p = "/", i(i.s = 0);
    })([function(t, o, i) {
      i(1), /*!
      * Codex JavaScript Notification module
      * https://github.com/codex-team/js-notifier
      */
      t.exports = (function() {
        var r = i(6), s = "cdx-notify--bounce-in", a = null;
        return { show: function(c) {
          if (c.message) {
            (function() {
              if (a)
                return !0;
              a = r.getWrapper(), document.body.appendChild(a);
            })();
            var l = null, u = c.time || 8e3;
            switch (c.type) {
              case "confirm":
                l = r.confirm(c);
                break;
              case "prompt":
                l = r.prompt(c);
                break;
              default:
                l = r.alert(c), window.setTimeout(function() {
                  l.remove();
                }, u);
            }
            a.appendChild(l), l.classList.add(s);
          }
        } };
      })();
    }, function(t, o, i) {
      var r = i(2);
      typeof r == "string" && (r = [[t.i, r, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      i(4)(r, s), r.locals && (t.exports = r.locals);
    }, function(t, o, i) {
      (t.exports = i(3)(!1)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
    }, function(t, o) {
      t.exports = function(i) {
        var r = [];
        return r.toString = function() {
          return this.map(function(s) {
            var a = (function(c, l) {
              var u = c[1] || "", d = c[3];
              if (!d)
                return u;
              if (l && typeof btoa == "function") {
                var g = (f = d, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(f)))) + " */"), v = d.sources.map(function(h) {
                  return "/*# sourceURL=" + d.sourceRoot + h + " */";
                });
                return [u].concat(v).concat([g]).join(`
`);
              }
              var f;
              return [u].join(`
`);
            })(s, i);
            return s[2] ? "@media " + s[2] + "{" + a + "}" : a;
          }).join("");
        }, r.i = function(s, a) {
          typeof s == "string" && (s = [[null, s, ""]]);
          for (var c = {}, l = 0; l < this.length; l++) {
            var u = this[l][0];
            typeof u == "number" && (c[u] = !0);
          }
          for (l = 0; l < s.length; l++) {
            var d = s[l];
            typeof d[0] == "number" && c[d[0]] || (a && !d[2] ? d[2] = a : a && (d[2] = "(" + d[2] + ") and (" + a + ")"), r.push(d));
          }
        }, r;
      };
    }, function(t, o, i) {
      var r, s, a = {}, c = (r = function() {
        return window && document && document.all && !window.atob;
      }, function() {
        return s === void 0 && (s = r.apply(this, arguments)), s;
      }), l = /* @__PURE__ */ (function(E) {
        var C = {};
        return function(T) {
          if (typeof T == "function")
            return T();
          if (C[T] === void 0) {
            var I = (function(R) {
              return document.querySelector(R);
            }).call(this, T);
            if (window.HTMLIFrameElement && I instanceof window.HTMLIFrameElement)
              try {
                I = I.contentDocument.head;
              } catch {
                I = null;
              }
            C[T] = I;
          }
          return C[T];
        };
      })(), u = null, d = 0, g = [], v = i(5);
      function f(E, C) {
        for (var T = 0; T < E.length; T++) {
          var I = E[T], R = a[I.id];
          if (R) {
            R.refs++;
            for (var A = 0; A < R.parts.length; A++)
              R.parts[A](I.parts[A]);
            for (; A < I.parts.length; A++)
              R.parts.push(k(I.parts[A], C));
          } else {
            var $ = [];
            for (A = 0; A < I.parts.length; A++)
              $.push(k(I.parts[A], C));
            a[I.id] = { id: I.id, refs: 1, parts: $ };
          }
        }
      }
      function h(E, C) {
        for (var T = [], I = {}, R = 0; R < E.length; R++) {
          var A = E[R], $ = C.base ? A[0] + C.base : A[0], P = { css: A[1], media: A[2], sourceMap: A[3] };
          I[$] ? I[$].parts.push(P) : T.push(I[$] = { id: $, parts: [P] });
        }
        return T;
      }
      function p(E, C) {
        var T = l(E.insertInto);
        if (!T)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var I = g[g.length - 1];
        if (E.insertAt === "top")
          I ? I.nextSibling ? T.insertBefore(C, I.nextSibling) : T.appendChild(C) : T.insertBefore(C, T.firstChild), g.push(C);
        else if (E.insertAt === "bottom")
          T.appendChild(C);
        else {
          if (typeof E.insertAt != "object" || !E.insertAt.before)
            throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
          var R = l(E.insertInto + " " + E.insertAt.before);
          T.insertBefore(C, R);
        }
      }
      function m(E) {
        if (E.parentNode === null)
          return !1;
        E.parentNode.removeChild(E);
        var C = g.indexOf(E);
        C >= 0 && g.splice(C, 1);
      }
      function b(E) {
        var C = document.createElement("style");
        return E.attrs.type === void 0 && (E.attrs.type = "text/css"), w(C, E.attrs), p(E, C), C;
      }
      function w(E, C) {
        Object.keys(C).forEach(function(T) {
          E.setAttribute(T, C[T]);
        });
      }
      function k(E, C) {
        var T, I, R, A;
        if (C.transform && E.css) {
          if (!(A = C.transform(E.css)))
            return function() {
            };
          E.css = A;
        }
        if (C.singleton) {
          var $ = d++;
          T = u || (u = b(C)), I = O.bind(null, T, $, !1), R = O.bind(null, T, $, !0);
        } else
          E.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (T = (function(P) {
            var V = document.createElement("link");
            return P.attrs.type === void 0 && (P.attrs.type = "text/css"), P.attrs.rel = "stylesheet", w(V, P.attrs), p(P, V), V;
          })(C), I = (function(P, V, Ne) {
            var me = Ne.css, Pt = Ne.sourceMap, ts = V.convertToAbsoluteUrls === void 0 && Pt;
            (V.convertToAbsoluteUrls || ts) && (me = v(me)), Pt && (me += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(Pt)))) + " */");
            var os = new Blob([me], { type: "text/css" }), $n = P.href;
            P.href = URL.createObjectURL(os), $n && URL.revokeObjectURL($n);
          }).bind(null, T, C), R = function() {
            m(T), T.href && URL.revokeObjectURL(T.href);
          }) : (T = b(C), I = (function(P, V) {
            var Ne = V.css, me = V.media;
            if (me && P.setAttribute("media", me), P.styleSheet)
              P.styleSheet.cssText = Ne;
            else {
              for (; P.firstChild; )
                P.removeChild(P.firstChild);
              P.appendChild(document.createTextNode(Ne));
            }
          }).bind(null, T), R = function() {
            m(T);
          });
        return I(E), function(P) {
          if (P) {
            if (P.css === E.css && P.media === E.media && P.sourceMap === E.sourceMap)
              return;
            I(E = P);
          } else
            R();
        };
      }
      t.exports = function(E, C) {
        if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
          throw new Error("The style-loader cannot be used in a non-browser environment");
        (C = C || {}).attrs = typeof C.attrs == "object" ? C.attrs : {}, C.singleton || typeof C.singleton == "boolean" || (C.singleton = c()), C.insertInto || (C.insertInto = "head"), C.insertAt || (C.insertAt = "bottom");
        var T = h(E, C);
        return f(T, C), function(I) {
          for (var R = [], A = 0; A < T.length; A++) {
            var $ = T[A];
            (P = a[$.id]).refs--, R.push(P);
          }
          for (I && f(h(I, C), C), A = 0; A < R.length; A++) {
            var P;
            if ((P = R[A]).refs === 0) {
              for (var V = 0; V < P.parts.length; V++)
                P.parts[V]();
              delete a[P.id];
            }
          }
        };
      };
      var y, S = (y = [], function(E, C) {
        return y[E] = C, y.filter(Boolean).join(`
`);
      });
      function O(E, C, T, I) {
        var R = T ? "" : I.css;
        if (E.styleSheet)
          E.styleSheet.cssText = S(C, R);
        else {
          var A = document.createTextNode(R), $ = E.childNodes;
          $[C] && E.removeChild($[C]), $.length ? E.insertBefore(A, $[C]) : E.appendChild(A);
        }
      }
    }, function(t, o) {
      t.exports = function(i) {
        var r = typeof window < "u" && window.location;
        if (!r)
          throw new Error("fixUrls requires window.location");
        if (!i || typeof i != "string")
          return i;
        var s = r.protocol + "//" + r.host, a = s + r.pathname.replace(/\/[^\/]*$/, "/");
        return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(c, l) {
          var u, d = l.trim().replace(/^"(.*)"$/, function(g, v) {
            return v;
          }).replace(/^'(.*)'$/, function(g, v) {
            return v;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(d) ? c : (u = d.indexOf("//") === 0 ? d : d.indexOf("/") === 0 ? s + d : a + d.replace(/^\.\//, ""), "url(" + JSON.stringify(u) + ")");
        });
      };
    }, function(t, o, i) {
      var r, s, a, c, l, u, d, g, v;
      t.exports = (r = "cdx-notifies", s = "cdx-notify", a = "cdx-notify__cross", c = "cdx-notify__button--confirm", l = "cdx-notify__button--cancel", u = "cdx-notify__input", d = "cdx-notify__button", g = "cdx-notify__btns-wrapper", { alert: v = function(f) {
        var h = document.createElement("DIV"), p = document.createElement("DIV"), m = f.message, b = f.style;
        return h.classList.add(s), b && h.classList.add(s + "--" + b), h.innerHTML = m, p.classList.add(a), p.addEventListener("click", h.remove.bind(h)), h.appendChild(p), h;
      }, confirm: function(f) {
        var h = v(f), p = document.createElement("div"), m = document.createElement("button"), b = document.createElement("button"), w = h.querySelector("." + a), k = f.cancelHandler, y = f.okHandler;
        return p.classList.add(g), m.innerHTML = f.okText || "Confirm", b.innerHTML = f.cancelText || "Cancel", m.classList.add(d), b.classList.add(d), m.classList.add(c), b.classList.add(l), k && typeof k == "function" && (b.addEventListener("click", k), w.addEventListener("click", k)), y && typeof y == "function" && m.addEventListener("click", y), m.addEventListener("click", h.remove.bind(h)), b.addEventListener("click", h.remove.bind(h)), p.appendChild(m), p.appendChild(b), h.appendChild(p), h;
      }, prompt: function(f) {
        var h = v(f), p = document.createElement("div"), m = document.createElement("button"), b = document.createElement("input"), w = h.querySelector("." + a), k = f.cancelHandler, y = f.okHandler;
        return p.classList.add(g), m.innerHTML = f.okText || "Ok", m.classList.add(d), m.classList.add(c), b.classList.add(u), f.placeholder && b.setAttribute("placeholder", f.placeholder), f.default && (b.value = f.default), f.inputType && (b.type = f.inputType), k && typeof k == "function" && w.addEventListener("click", k), y && typeof y == "function" && m.addEventListener("click", function() {
          y(b.value);
        }), m.addEventListener("click", h.remove.bind(h)), p.appendChild(b), p.appendChild(m), h.appendChild(p), h;
      }, getWrapper: function() {
        var f = document.createElement("DIV");
        return f.classList.add(r), f;
      } });
    }]);
  });
})(Mi);
var Ds = Mi.exports;
const Fs = /* @__PURE__ */ wt(Ds);
class Hs {
  /**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */
  show(e) {
    Fs.show(e);
  }
}
class $s extends M {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.notifier = new Hs();
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e) => this.show(e)
    };
  }
  /**
   * Show notification
   *
   * @param {NotifierOptions} options - message option
   */
  show(e) {
    return this.notifier.show(e);
  }
}
class Us extends M {
  /**
   * Available methods
   */
  get methods() {
    const e = () => this.isEnabled;
    return {
      toggle: (t) => this.toggle(t),
      get isEnabled() {
        return e();
      }
    };
  }
  /**
   * Set or toggle read-only state
   *
   * @param {boolean|undefined} state - set or toggle state
   * @returns {boolean} current value
   */
  toggle(e) {
    return this.Editor.ReadOnly.toggle(e);
  }
  /**
   * Returns current read-only state
   */
  get isEnabled() {
    return this.Editor.ReadOnly.isEnabled;
  }
}
var Ii = { exports: {} };
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(Ve, function() {
    function t(d) {
      var g = d.tags, v = Object.keys(g), f = v.map(function(h) {
        return typeof g[h];
      }).every(function(h) {
        return h === "object" || h === "boolean" || h === "function";
      });
      if (!f)
        throw new Error("The configuration was invalid");
      this.config = d;
    }
    var o = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
    function i(d) {
      return o.indexOf(d.nodeName) !== -1;
    }
    var r = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
    function s(d) {
      return r.indexOf(d.nodeName) !== -1;
    }
    t.prototype.clean = function(d) {
      const g = document.implementation.createHTMLDocument(), v = g.createElement("div");
      return v.innerHTML = d, this._sanitize(g, v), v.innerHTML;
    }, t.prototype._sanitize = function(d, g) {
      var v = a(d, g), f = v.firstChild();
      if (f)
        do {
          if (f.nodeType === Node.TEXT_NODE)
            if (f.data.trim() === "" && (f.previousElementSibling && i(f.previousElementSibling) || f.nextElementSibling && i(f.nextElementSibling))) {
              g.removeChild(f), this._sanitize(d, g);
              break;
            } else
              continue;
          if (f.nodeType === Node.COMMENT_NODE) {
            g.removeChild(f), this._sanitize(d, g);
            break;
          }
          var h = s(f), p;
          h && (p = Array.prototype.some.call(f.childNodes, i));
          var m = !!g.parentNode, b = i(g) && i(f) && m, w = f.nodeName.toLowerCase(), k = c(this.config, w, f), y = h && p;
          if (y || l(f, k) || !this.config.keepNestedBlockElements && b) {
            if (!(f.nodeName === "SCRIPT" || f.nodeName === "STYLE"))
              for (; f.childNodes.length > 0; )
                g.insertBefore(f.childNodes[0], f);
            g.removeChild(f), this._sanitize(d, g);
            break;
          }
          for (var S = 0; S < f.attributes.length; S += 1) {
            var O = f.attributes[S];
            u(O, k, f) && (f.removeAttribute(O.name), S = S - 1);
          }
          this._sanitize(d, f);
        } while (f = v.nextSibling());
    };
    function a(d, g) {
      return d.createTreeWalker(
        g,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
        null,
        !1
      );
    }
    function c(d, g, v) {
      return typeof d.tags[g] == "function" ? d.tags[g](v) : d.tags[g];
    }
    function l(d, g) {
      return typeof g > "u" ? !0 : typeof g == "boolean" ? !g : !1;
    }
    function u(d, g, v) {
      var f = d.name.toLowerCase();
      return g === !0 ? !1 : typeof g[f] == "function" ? !g[f](d.value, v) : typeof g[f] > "u" || g[f] === !1 ? !0 : typeof g[f] == "string" ? g[f] !== d.value : !1;
    }
    return t;
  });
})(Ii);
var zs = Ii.exports;
const qs = /* @__PURE__ */ wt(zs);
function so(n, e) {
  return n.map((t) => {
    const o = D(e) ? e(t.tool) : e;
    return J(o) || (t.data = ao(t.data, o)), t;
  });
}
function oe(n, e = {}) {
  const t = {
    tags: e
  };
  return new qs(t).clean(n);
}
function ao(n, e) {
  return Array.isArray(n) ? Ws(n, e) : U(n) ? Vs(n, e) : ce(n) ? Ks(n, e) : n;
}
function Ws(n, e) {
  return n.map((t) => ao(t, e));
}
function Vs(n, e) {
  const t = {};
  for (const o in n) {
    if (!Object.prototype.hasOwnProperty.call(n, o))
      continue;
    const i = n[o], r = Ys(e[o]) ? e[o] : e;
    t[o] = ao(i, r);
  }
  return t;
}
function Ks(n, e) {
  return U(e) ? oe(n, e) : e === !1 ? oe(n, {}) : n;
}
function Ys(n) {
  return U(n) || hs(n) || D(n);
}
class Xs extends M {
  /**
   * Available methods
   *
   * @returns {SanitizerConfig}
   */
  get methods() {
    return {
      clean: (e, t) => this.clean(e, t)
    };
  }
  /**
   * Perform sanitizing of a string
   *
   * @param {string} taintString - what to sanitize
   * @param {SanitizerConfig} config - sanitizer config
   * @returns {string}
   */
  clean(e, t) {
    return oe(e, t);
  }
}
class Gs extends M {
  /**
   * Available methods
   *
   * @returns {Saver}
   */
  get methods() {
    return {
      save: () => this.save()
    };
  }
  /**
   * Return Editor's data
   *
   * @returns {OutputData}
   */
  save() {
    const e = "Editor's content can not be saved in read-only mode";
    return this.Editor.ReadOnly.isEnabled ? (Z(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
  }
}
class Zs extends M {
  constructor() {
    super(...arguments), this.selectionUtils = new _();
  }
  /**
   * Available methods
   *
   * @returns {SelectionAPIInterface}
   */
  get methods() {
    return {
      findParentTag: (e, t) => this.findParentTag(e, t),
      expandToTag: (e) => this.expandToTag(e),
      save: () => this.selectionUtils.save(),
      restore: () => this.selectionUtils.restore(),
      setFakeBackground: () => this.selectionUtils.setFakeBackground(),
      removeFakeBackground: () => this.selectionUtils.removeFakeBackground()
    };
  }
  /**
   * Looks ahead from selection and find passed tag with class name
   *
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t) {
    return this.selectionUtils.findParentTag(e, t);
  }
  /**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */
  expandToTag(e) {
    this.selectionUtils.expandToTag(e);
  }
}
class Js extends M {
  /**
   * Available methods
   */
  get methods() {
    return {
      getBlockTools: () => Array.from(this.Editor.Tools.blockTools.values())
    };
  }
}
class Qs extends M {
  /**
   * Exported classes
   */
  get classes() {
    return {
      /**
       * Base Block styles
       */
      block: "cdx-block",
      /**
       * Inline Tools styles
       */
      inlineToolButton: "ce-inline-tool",
      inlineToolButtonActive: "ce-inline-tool--active",
      /**
       * UI elements
       */
      input: "cdx-input",
      loader: "cdx-loader",
      button: "cdx-button",
      /**
       * Settings styles
       */
      settingsButton: "cdx-settings-button",
      settingsButtonActive: "cdx-settings-button--active"
    };
  }
}
class ea extends M {
  /**
   * Available methods
   *
   * @returns {Toolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open(),
      toggleBlockSettings: (e) => this.toggleBlockSettings(e),
      toggleToolbox: (e) => this.toggleToolbox(e)
    };
  }
  /**
   * Open toolbar
   */
  open() {
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * Close toolbar and all included elements
   */
  close() {
    this.Editor.Toolbar.close();
  }
  /**
   * Toggles Block Setting of the current block
   *
   * @param {boolean} openingState —  opening state of Block Setting
   */
  toggleBlockSettings(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      Z("Could't toggle the Toolbar because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
  }
  /**
   * Open toolbox
   *
   * @param {boolean} openingState - Opening state of toolbox
   */
  toggleToolbox(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      Z("Could't toggle the Toolbox because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
  }
}
var Pi = { exports: {} };
/*!
 * CodeX.Tooltips
 * 
 * @version 1.0.5
 * 
 * @licence MIT
 * @author CodeX <https://codex.so>
 * 
 * 
 */
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return (function(t) {
      var o = {};
      function i(r) {
        if (o[r])
          return o[r].exports;
        var s = o[r] = { i: r, l: !1, exports: {} };
        return t[r].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
      }
      return i.m = t, i.c = o, i.d = function(r, s, a) {
        i.o(r, s) || Object.defineProperty(r, s, { enumerable: !0, get: a });
      }, i.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, i.t = function(r, s) {
        if (1 & s && (r = i(r)), 8 & s || 4 & s && typeof r == "object" && r && r.__esModule)
          return r;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: r }), 2 & s && typeof r != "string")
          for (var c in r)
            i.d(a, c, (function(l) {
              return r[l];
            }).bind(null, c));
        return a;
      }, i.n = function(r) {
        var s = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return i.d(s, "a", s), s;
      }, i.o = function(r, s) {
        return Object.prototype.hasOwnProperty.call(r, s);
      }, i.p = "", i(i.s = 0);
    })([function(t, o, i) {
      t.exports = i(1);
    }, function(t, o, i) {
      i.r(o), i.d(o, "default", function() {
        return r;
      });
      class r {
        constructor() {
          this.nodes = { wrapper: null, content: null }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
            this.showed && this.hide(!0);
          }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: !0 });
        }
        get CSS() {
          return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
        }
        show(a, c, l) {
          this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
          const u = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, l);
          if (u.hidingDelay && (this.hidingDelay = u.hidingDelay), this.nodes.content.innerHTML = "", typeof c == "string")
            this.nodes.content.appendChild(document.createTextNode(c));
          else {
            if (!(c instanceof Node))
              throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof c + " given.");
            this.nodes.content.appendChild(c);
          }
          switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), u.placement) {
            case "top":
              this.placeTop(a, u);
              break;
            case "left":
              this.placeLeft(a, u);
              break;
            case "right":
              this.placeRight(a, u);
              break;
            case "bottom":
            default:
              this.placeBottom(a, u);
          }
          u && u.delay ? this.showingTimeout = setTimeout(() => {
            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
          }, u.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
        }
        hide(a = !1) {
          if (this.hidingDelay && !a)
            return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
              this.hide(!0);
            }, this.hidingDelay));
          this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
        }
        onHover(a, c, l) {
          a.addEventListener("mouseenter", () => {
            this.show(a, c, l);
          }), a.addEventListener("mouseleave", () => {
            this.hide();
          });
        }
        destroy() {
          this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
        }
        prepare() {
          this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
        }
        loadStyles() {
          const a = "codex-tooltips-style";
          if (document.getElementById(a))
            return;
          const c = i(2), l = this.make("style", null, { textContent: c.toString(), id: a });
          this.prepend(document.head, l);
        }
        placeBottom(a, c) {
          const l = a.getBoundingClientRect(), u = l.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, d = l.bottom + window.pageYOffset + this.offsetTop + c.marginTop;
          this.applyPlacement("bottom", u, d);
        }
        placeTop(a, c) {
          const l = a.getBoundingClientRect(), u = l.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, d = l.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
          this.applyPlacement("top", u, d);
        }
        placeLeft(a, c) {
          const l = a.getBoundingClientRect(), u = l.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - c.marginLeft, d = l.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("left", u, d);
        }
        placeRight(a, c) {
          const l = a.getBoundingClientRect(), u = l.right + this.offsetRight + c.marginRight, d = l.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("right", u, d);
        }
        applyPlacement(a, c, l) {
          this.nodes.wrapper.classList.add(this.CSS.placement[a]), this.nodes.wrapper.style.left = c + "px", this.nodes.wrapper.style.top = l + "px";
        }
        make(a, c = null, l = {}) {
          const u = document.createElement(a);
          Array.isArray(c) ? u.classList.add(...c) : c && u.classList.add(c);
          for (const d in l)
            l.hasOwnProperty(d) && (u[d] = l[d]);
          return u;
        }
        append(a, c) {
          Array.isArray(c) ? c.forEach((l) => a.appendChild(l)) : a.appendChild(c);
        }
        prepend(a, c) {
          Array.isArray(c) ? (c = c.reverse()).forEach((l) => a.prepend(l)) : a.prepend(c);
        }
      }
    }, function(t, o) {
      t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
    }]).default;
  });
})(Pi);
var ta = Pi.exports;
const oa = /* @__PURE__ */ wt(ta);
let Q = null;
function lo() {
  Q || (Q = new oa());
}
function na(n, e, t) {
  lo(), Q?.show(n, e, t);
}
function pt(n = !1) {
  lo(), Q?.hide(n);
}
function ft(n, e, t) {
  lo(), Q?.onHover(n, e, t);
}
function ia() {
  Q?.destroy(), Q = null;
}
class ra extends M {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    });
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e, t, o) => this.show(e, t, o),
      hide: () => this.hide(),
      onHover: (e, t, o) => this.onHover(e, t, o)
    };
  }
  /**
   * Method show tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  show(e, t, o) {
    na(e, t, o);
  }
  /**
   * Method hides tooltip on HTML page
   */
  hide() {
    pt();
  }
  /**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  onHover(e, t, o) {
    ft(e, t, o);
  }
}
class sa extends M {
  /**
   * Available methods / getters
   */
  get methods() {
    return {
      nodes: this.editorNodes
      /**
       * There can be added some UI methods, like toggleThinMode() etc
       */
    };
  }
  /**
   * Exported classes
   */
  get editorNodes() {
    return {
      /**
       * Top-level editor instance wrapper
       */
      wrapper: this.Editor.UI.nodes.wrapper,
      /**
       * Element that holds all the Blocks
       */
      redactor: this.Editor.UI.nodes.redactor
    };
  }
}
function Ai(n, e) {
  const t = {};
  return Object.entries(n).forEach(([o, i]) => {
    if (U(i)) {
      const r = e ? `${e}.${o}` : o;
      Object.values(i).every((s) => ce(s)) ? t[o] = r : t[o] = Ai(i, r);
      return;
    }
    t[o] = i;
  }), t;
}
const G = Ai(ki);
function aa(n, e) {
  const t = {};
  return Object.keys(n).forEach((o) => {
    const i = e[o];
    i !== void 0 ? t[i] = n[o] : t[o] = n[o];
  }), t;
}
const Ni = class He {
  /**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */
  constructor(e, t) {
    this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = t;
  }
  /**
   * Returns Focused button Node
   *
   * @returns {HTMLElement}
   */
  get currentItem() {
    return this.cursor === -1 ? null : this.items[this.cursor];
  }
  /**
   * Sets cursor to specified position
   *
   * @param cursorPosition - new cursor position
   */
  setCursor(e) {
    e < this.items.length && e >= -1 && (this.dropCursor(), this.cursor = e, this.items[this.cursor].classList.add(this.focusedCssClass));
  }
  /**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */
  setItems(e) {
    this.items = e;
  }
  /**
   * Sets cursor next to the current
   */
  next() {
    this.cursor = this.leafNodesAndReturnIndex(He.directions.RIGHT);
  }
  /**
   * Sets cursor before current
   */
  previous() {
    this.cursor = this.leafNodesAndReturnIndex(He.directions.LEFT);
  }
  /**
   * Sets cursor to the default position and removes CSS-class from previously focused item
   */
  dropCursor() {
    this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
  }
  /**
   * Leafs nodes inside the target list from active element
   *
   * @param {string} direction - leaf direction. Can be 'left' or 'right'
   * @returns {number} index of focused node
   */
  leafNodesAndReturnIndex(e) {
    if (this.items.length === 0)
      return this.cursor;
    let t = this.cursor;
    return t === -1 ? t = e === He.directions.RIGHT ? -1 : 0 : this.items[t].classList.remove(this.focusedCssClass), e === He.directions.RIGHT ? t = (t + 1) % this.items.length : t = (this.items.length + t - 1) % this.items.length, x.canSetCaret(this.items[t]) && dt(() => _.setCursor(this.items[t]), 50)(), this.items[t].classList.add(this.focusedCssClass), t;
  }
};
Ni.directions = {
  RIGHT: "right",
  LEFT: "left"
};
let Re = Ni, gt = class Zt {
  /**
   * @param options - different constructing settings
   */
  constructor(e) {
    this.iterator = null, this.activated = !1, this.flipCallbacks = [], this.onKeyDown = (t) => {
      if (!(!this.isEventReadyForHandling(t) || t.shiftKey === !0))
        switch (Zt.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
          case B.TAB:
            this.handleTabPress(t);
            break;
          case B.LEFT:
          case B.UP:
            this.flipLeft();
            break;
          case B.RIGHT:
          case B.DOWN:
            this.flipRight();
            break;
          case B.ENTER:
            this.handleEnterPress(t);
            break;
        }
    }, this.iterator = new Re(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || Zt.usedKeys;
  }
  /**
   * True if flipper is currently activated
   */
  get isActivated() {
    return this.activated;
  }
  /**
   * Array of keys (codes) that is handled by Flipper
   * Used to:
   *  - preventDefault only for this keys, not all keydowns (@see constructor)
   *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
   */
  static get usedKeys() {
    return [
      B.TAB,
      B.LEFT,
      B.RIGHT,
      B.ENTER,
      B.UP,
      B.DOWN
    ];
  }
  /**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */
  activate(e, t) {
    this.activated = !0, e && this.iterator.setItems(e), t !== void 0 && this.iterator.setCursor(t), document.addEventListener("keydown", this.onKeyDown, !0);
  }
  /**
   * Disable tab/arrows handling by flipper
   */
  deactivate() {
    this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
  }
  /**
   * Focus first item
   */
  focusFirst() {
    this.dropCursor(), this.flipRight();
  }
  /**
   * Focuses previous flipper iterator item
   */
  flipLeft() {
    this.iterator.previous(), this.flipCallback();
  }
  /**
   * Focuses next flipper iterator item
   */
  flipRight() {
    this.iterator.next(), this.flipCallback();
  }
  /**
   * Return true if some button is focused
   */
  hasFocus() {
    return !!this.iterator.currentItem;
  }
  /**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */
  onFlip(e) {
    this.flipCallbacks.push(e);
  }
  /**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */
  removeOnFlip(e) {
    this.flipCallbacks = this.flipCallbacks.filter((t) => t !== e);
  }
  /**
   * Drops flipper's iterator cursor
   *
   * @see DomIterator#dropCursor
   */
  dropCursor() {
    this.iterator.dropCursor();
  }
  /**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */
  isEventReadyForHandling(e) {
    return this.activated && this.allowedKeys.includes(e.keyCode);
  }
  /**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */
  handleTabPress(e) {
    switch (e.shiftKey ? Re.directions.LEFT : Re.directions.RIGHT) {
      case Re.directions.RIGHT:
        this.flipRight();
        break;
      case Re.directions.LEFT:
        this.flipLeft();
        break;
    }
  }
  /**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  handleEnterPress(e) {
    this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), D(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
  }
  /**
   * Fired after flipping in any direction
   */
  flipCallback() {
    this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
  }
};
const la = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>', ca = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', da = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>', ua = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>', ha = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', pa = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', fa = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', ga = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>', Yn = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', ma = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>', ba = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', Ri = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>', va = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', ya = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', wa = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>', ka = "__", xa = "--";
function ge(n) {
  return (e, t) => [[n, e].filter((o) => !!o).join(ka), t].filter((o) => !!o).join(xa);
}
const je = ge("ce-hint"), De = {
  root: je(),
  alignedStart: je(null, "align-left"),
  alignedCenter: je(null, "align-center"),
  title: je("title"),
  description: je("description")
};
class Ca {
  /**
   * Constructs the hint content instance
   *
   * @param params - hint content parameters
   */
  constructor(e) {
    this.nodes = {
      root: x.make("div", [De.root, e.alignment === "center" ? De.alignedCenter : De.alignedStart]),
      title: x.make("div", De.title, { textContent: e.title })
    }, this.nodes.root.appendChild(this.nodes.title), e.description !== void 0 && (this.nodes.description = x.make("div", De.description, { textContent: e.description }), this.nodes.root.appendChild(this.nodes.description));
  }
  /**
   * Returns the root element of the hint content
   */
  getElement() {
    return this.nodes.root;
  }
}
let co = class {
  /**
   * Constructs the instance
   *
   * @param params - instance parameters
   */
  constructor(e) {
    this.params = e;
  }
  /**
   * Item name if exists
   */
  get name() {
    if (this.params !== void 0 && "name" in this.params)
      return this.params.name;
  }
  /**
   * Destroys the instance
   */
  destroy() {
    pt();
  }
  /**
   * Called when children popover is opened (if exists)
   */
  onChildrenOpen() {
    var e;
    this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onOpen) == "function" && this.params.children.onOpen();
  }
  /**
   * Called when children popover is closed (if exists)
   */
  onChildrenClose() {
    var e;
    this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onClose) == "function" && this.params.children.onClose();
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    var e, t;
    this.params !== void 0 && "onActivate" in this.params && ((t = (e = this.params).onActivate) == null || t.call(e, this.params));
  }
  /**
   * Adds hint to the item element if hint data is provided
   *
   * @param itemElement - popover item root element to add hint to
   * @param hintData - hint data
   */
  addHint(e, t) {
    const o = new Ca(t);
    ft(e, o.getElement(), {
      placement: t.position,
      hidingDelay: 100
    });
  }
  /**
   * Returns item children that are represented as popover items
   */
  get children() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.items) !== void 0 ? this.params.children.items : [];
  }
  /**
   * Returns true if item has any type of children
   */
  get hasChildren() {
    return this.children.length > 0;
  }
  /**
   * Returns true if item children should be open instantly after popover is opened and not on item click/hover
   */
  get isChildrenOpen() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.isOpen) === !0;
  }
  /**
   * True if item children items should be navigatable via keyboard
   */
  get isChildrenFlippable() {
    var e;
    return !(this.params === void 0 || !("children" in this.params) || ((e = this.params.children) == null ? void 0 : e.isFlippable) === !1);
  }
  /**
   * Returns true if item has children that should be searchable
   */
  get isChildrenSearchable() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.searchable) === !0;
  }
  /**
   * True if popover should close once item is activated
   */
  get closeOnActivate() {
    return this.params !== void 0 && "closeOnActivate" in this.params && this.params.closeOnActivate;
  }
  /**
   * True if item is active
   */
  get isActive() {
    return this.params === void 0 || !("isActive" in this.params) ? !1 : typeof this.params.isActive == "function" ? this.params.isActive() : this.params.isActive === !0;
  }
};
const K = ge("ce-popover-item"), F = {
  container: K(),
  active: K(null, "active"),
  disabled: K(null, "disabled"),
  focused: K(null, "focused"),
  hidden: K(null, "hidden"),
  confirmationState: K(null, "confirmation"),
  noHover: K(null, "no-hover"),
  noFocus: K(null, "no-focus"),
  title: K("title"),
  secondaryTitle: K("secondary-title"),
  icon: K("icon"),
  iconTool: K("icon", "tool"),
  iconChevronRight: K("icon", "chevron-right"),
  wobbleAnimation: ge("wobble")()
};
let be = class extends co {
  /**
   * Constructs popover item instance
   *
   * @param params - popover item construction params
   * @param renderParams - popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    super(e), this.params = e, this.nodes = {
      root: null,
      icon: null
    }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
      var o;
      (o = this.nodes.root) == null || o.classList.remove(F.noFocus);
    }, this.removeSpecialHoverBehavior = () => {
      var o;
      (o = this.nodes.root) == null || o.classList.remove(F.noHover);
    }, this.onErrorAnimationEnd = () => {
      var o, i;
      (o = this.nodes.icon) == null || o.classList.remove(F.wobbleAnimation), (i = this.nodes.icon) == null || i.removeEventListener("animationend", this.onErrorAnimationEnd);
    }, this.nodes.root = this.make(e, t);
  }
  /**
   * True if item is disabled and hence not clickable
   */
  get isDisabled() {
    return this.params.isDisabled === !0;
  }
  /**
   * Exposes popover item toggle parameter
   */
  get toggle() {
    return this.params.toggle;
  }
  /**
   * Item title
   */
  get title() {
    return this.params.title;
  }
  /**
   * True if confirmation state is enabled for popover item
   */
  get isConfirmationStateEnabled() {
    return this.confirmationState !== null;
  }
  /**
   * True if item is focused in keyboard navigation process
   */
  get isFocused() {
    return this.nodes.root === null ? !1 : this.nodes.root.classList.contains(F.focused);
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    if (this.isConfirmationStateEnabled && this.confirmationState !== null) {
      this.activateOrEnableConfirmationMode(this.confirmationState);
      return;
    }
    this.activateOrEnableConfirmationMode(this.params);
  }
  /**
   * Toggles item active state
   *
   * @param isActive - true if item should strictly should become active
   */
  toggleActive(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(F.active, e);
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(F.hidden, e);
  }
  /**
   * Resets popover item to its original state
   */
  reset() {
    this.isConfirmationStateEnabled && this.disableConfirmationMode();
  }
  /**
   * Method called once item becomes focused during keyboard navigation
   */
  onFocus() {
    this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Constructs HTML element corresponding to popover item params
   *
   * @param params - item construction params
   * @param renderParams - popover item render params
   */
  make(e, t) {
    var o, i;
    const r = t?.wrapperTag || "div", s = x.make(r, F.container, {
      type: r === "button" ? "button" : void 0
    });
    return e.name && (s.dataset.itemName = e.name), this.nodes.icon = x.make("div", [F.icon, F.iconTool], {
      innerHTML: e.icon || fa
    }), s.appendChild(this.nodes.icon), e.title !== void 0 && s.appendChild(x.make("div", F.title, {
      innerHTML: e.title || ""
    })), e.secondaryLabel && s.appendChild(x.make("div", F.secondaryTitle, {
      textContent: e.secondaryLabel
    })), this.hasChildren && s.appendChild(x.make("div", [F.icon, F.iconChevronRight], {
      innerHTML: ua
    })), this.isActive && s.classList.add(F.active), e.isDisabled && s.classList.add(F.disabled), e.hint !== void 0 && ((o = t?.hint) == null ? void 0 : o.enabled) !== !1 && this.addHint(s, {
      ...e.hint,
      position: ((i = t?.hint) == null ? void 0 : i.position) || "right"
    }), s;
  }
  /**
   * Activates confirmation mode for the item.
   *
   * @param newState - new popover item params that should be applied
   */
  enableConfirmationMode(e) {
    if (this.nodes.root === null)
      return;
    const t = {
      ...this.params,
      ...e,
      confirmation: "confirmation" in e ? e.confirmation : void 0
    }, o = this.make(t);
    this.nodes.root.innerHTML = o.innerHTML, this.nodes.root.classList.add(F.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
  }
  /**
   * Returns item to its original state
   */
  disableConfirmationMode() {
    if (this.nodes.root === null)
      return;
    const e = this.make(this.params);
    this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(F.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Enables special focus and hover behavior for item in confirmation state.
   * This is needed to prevent item from being highlighted as hovered/focused just after click.
   */
  enableSpecialHoverAndFocusBehavior() {
    var e, t, o;
    (e = this.nodes.root) == null || e.classList.add(F.noHover), (t = this.nodes.root) == null || t.classList.add(F.noFocus), (o = this.nodes.root) == null || o.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: !0 });
  }
  /**
   * Disables special focus and hover behavior
   */
  disableSpecialHoverAndFocusBehavior() {
    var e;
    this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), (e = this.nodes.root) == null || e.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
  }
  /**
   * Executes item's onActivate callback if the item has no confirmation configured
   *
   * @param item - item to activate or bring to confirmation mode
   */
  activateOrEnableConfirmationMode(e) {
    var t;
    if (!("confirmation" in e) || e.confirmation === void 0)
      try {
        (t = e.onActivate) == null || t.call(e, e), this.disableConfirmationMode();
      } catch {
        this.animateError();
      }
    else
      this.enableConfirmationMode(e.confirmation);
  }
  /**
   * Animates item which symbolizes that error occured while executing 'onActivate()' callback
   */
  animateError() {
    var e, t, o;
    (e = this.nodes.icon) != null && e.classList.contains(F.wobbleAnimation) || ((t = this.nodes.icon) == null || t.classList.add(F.wobbleAnimation), (o = this.nodes.icon) == null || o.addEventListener("animationend", this.onErrorAnimationEnd));
  }
};
const Nt = ge("ce-popover-item-separator"), Rt = {
  container: Nt(),
  line: Nt("line"),
  hidden: Nt(null, "hidden")
};
class ji extends co {
  /**
   * Constructs the instance
   */
  constructor() {
    super(), this.nodes = {
      root: x.make("div", Rt.container),
      line: x.make("div", Rt.line)
    }, this.nodes.root.appendChild(this.nodes.line);
  }
  /**
   * Returns popover separator root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(Rt.hidden, e);
  }
}
var ne = /* @__PURE__ */ ((n) => (n.Closed = "closed", n.ClosedOnActivate = "closed-on-activate", n))(ne || {});
const z = ge("ce-popover"), H = {
  popover: z(),
  popoverContainer: z("container"),
  popoverOpenTop: z(null, "open-top"),
  popoverOpenLeft: z(null, "open-left"),
  popoverOpened: z(null, "opened"),
  search: z("search"),
  nothingFoundMessage: z("nothing-found-message"),
  nothingFoundMessageDisplayed: z("nothing-found-message", "displayed"),
  items: z("items"),
  overlay: z("overlay"),
  overlayHidden: z("overlay", "hidden"),
  popoverNested: z(null, "nested"),
  getPopoverNestedClass: (n) => z(null, `nested-level-${n.toString()}`),
  popoverInline: z(null, "inline"),
  popoverHeader: z("header")
};
var Le = /* @__PURE__ */ ((n) => (n.NestingLevel = "--nesting-level", n.PopoverHeight = "--popover-height", n.InlinePopoverWidth = "--inline-popover-width", n.TriggerItemLeft = "--trigger-item-left", n.TriggerItemTop = "--trigger-item-top", n))(Le || {});
const Xn = ge("ce-popover-item-html"), Gn = {
  root: Xn(),
  hidden: Xn(null, "hidden")
};
class Ye extends co {
  /**
   * Constructs the instance
   *
   * @param params – instance parameters
   * @param renderParams – popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    var o, i;
    super(e), this.nodes = {
      root: x.make("div", Gn.root)
    }, this.nodes.root.appendChild(e.element), e.name && (this.nodes.root.dataset.itemName = e.name), e.hint !== void 0 && ((o = t?.hint) == null ? void 0 : o.enabled) !== !1 && this.addHint(this.nodes.root, {
      ...e.hint,
      position: ((i = t?.hint) == null ? void 0 : i.position) || "right"
    });
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(Gn.hidden, e);
  }
  /**
   * Returns list of buttons and inputs inside custom content
   */
  getControls() {
    const e = this.nodes.root.querySelectorAll(
      `button, ${x.allInputsSelector}`
    );
    return Array.from(e);
  }
}
class Di extends Ge {
  /**
   * Constructs the instance
   *
   * @param params - popover construction params
   * @param itemsRenderParams - popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t = {}) {
    super(), this.params = e, this.itemsRenderParams = t, this.listeners = new Ze(), this.messages = {
      nothingFound: "Nothing found",
      search: "Search"
    }, this.items = this.buildItems(e.items), e.messages && (this.messages = {
      ...this.messages,
      ...e.messages
    }), this.nodes = {}, this.nodes.popoverContainer = x.make("div", [H.popoverContainer]), this.nodes.nothingFoundMessage = x.make("div", [H.nothingFoundMessage], {
      textContent: this.messages.nothingFound
    }), this.nodes.popoverContainer.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = x.make("div", [H.items]), this.items.forEach((o) => {
      const i = o.getElement();
      i !== null && this.nodes.items.appendChild(i);
    }), this.nodes.popoverContainer.appendChild(this.nodes.items), this.listeners.on(this.nodes.popoverContainer, "click", (o) => this.handleClick(o)), this.nodes.popover = x.make("div", [
      H.popover,
      this.params.class
    ]), this.nodes.popover.appendChild(this.nodes.popoverContainer);
  }
  /**
   * List of default popover items that are searchable and may have confirmation state
   */
  get itemsDefault() {
    return this.items.filter((e) => e instanceof be);
  }
  /**
   * Returns HTML element corresponding to the popover
   */
  getElement() {
    return this.nodes.popover;
  }
  /**
   * Open popover
   */
  show() {
    this.nodes.popover.classList.add(H.popoverOpened), this.search !== void 0 && this.search.focus();
  }
  /**
   * Closes popover
   */
  hide() {
    this.nodes.popover.classList.remove(H.popoverOpened), this.nodes.popover.classList.remove(H.popoverOpenTop), this.itemsDefault.forEach((e) => e.reset()), this.search !== void 0 && this.search.clear(), this.emit(ne.Closed);
  }
  /**
   * Clears memory
   */
  destroy() {
    var e;
    this.items.forEach((t) => t.destroy()), this.nodes.popover.remove(), this.listeners.removeAll(), (e = this.search) == null || e.destroy();
  }
  /**
   * Looks for the item by name and imitates click on it
   *
   * @param name - name of the item to activate
   */
  activateItemByName(e) {
    const t = this.items.find((o) => o.name === e);
    this.handleItemClick(t);
  }
  /**
   * Factory method for creating popover items
   *
   * @param items - list of items params
   */
  buildItems(e) {
    return e.map((t) => {
      switch (t.type) {
        case j.Separator:
          return new ji();
        case j.Html:
          return new Ye(t, this.itemsRenderParams[j.Html]);
        default:
          return new be(t, this.itemsRenderParams[j.Default]);
      }
    });
  }
  /**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */
  getTargetItem(e) {
    return this.items.filter((t) => t instanceof be || t instanceof Ye).find((t) => {
      const o = t.getElement();
      return o === null ? !1 : e.composedPath().includes(o);
    });
  }
  /**
   * Handles popover item click
   *
   * @param item - item to handle click of
   */
  handleItemClick(e) {
    if (!("isDisabled" in e && e.isDisabled)) {
      if (e.hasChildren) {
        this.showNestedItems(e), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick();
        return;
      }
      this.itemsDefault.filter((t) => t !== e).forEach((t) => t.reset()), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick(), this.toggleItemActivenessIfNeeded(e), e.closeOnActivate && (this.hide(), this.emit(ne.ClosedOnActivate));
    }
  }
  /**
   * Handles clicks inside popover
   *
   * @param event - item to handle click of
   */
  handleClick(e) {
    const t = this.getTargetItem(e);
    t !== void 0 && this.handleItemClick(t);
  }
  /**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */
  toggleItemActivenessIfNeeded(e) {
    if (e instanceof be && (e.toggle === !0 && e.toggleActive(), typeof e.toggle == "string")) {
      const t = this.itemsDefault.filter((o) => o.toggle === e.toggle);
      if (t.length === 1) {
        e.toggleActive();
        return;
      }
      t.forEach((o) => {
        o.toggleActive(o === e);
      });
    }
  }
}
var mt = /* @__PURE__ */ ((n) => (n.Search = "search", n))(mt || {});
const jt = ge("cdx-search-field"), Dt = {
  wrapper: jt(),
  icon: jt("icon"),
  input: jt("input")
};
class Ea extends Ge {
  /**
   * @param options - available config
   * @param options.items - searchable items list
   * @param options.placeholder - input placeholder
   */
  constructor({ items: e, placeholder: t }) {
    super(), this.listeners = new Ze(), this.items = e, this.wrapper = x.make("div", Dt.wrapper);
    const o = x.make("div", Dt.icon, {
      innerHTML: va
    });
    this.input = x.make("input", Dt.input, {
      placeholder: t,
      /**
       * Used to prevent focusing on the input by Tab key
       * (Popover in the Toolbar lays below the blocks,
       * so Tab in the last block will focus this hidden input if this property is not set)
       */
      tabIndex: -1
    }), this.wrapper.appendChild(o), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", () => {
      this.searchQuery = this.input.value, this.emit(mt.Search, {
        query: this.searchQuery,
        items: this.foundItems
      });
    });
  }
  /**
   * Returns search field element
   */
  getElement() {
    return this.wrapper;
  }
  /**
   * Sets focus to the input
   */
  focus() {
    this.input.focus();
  }
  /**
   * Clears search query and results
   */
  clear() {
    this.input.value = "", this.searchQuery = "", this.emit(mt.Search, {
      query: "",
      items: this.foundItems
    });
  }
  /**
   * Clears memory
   */
  destroy() {
    this.listeners.removeAll();
  }
  /**
   * Returns list of found items for the current search query
   */
  get foundItems() {
    return this.items.filter((e) => this.checkItem(e));
  }
  /**
   * Contains logic for checking whether passed item conforms the search query
   *
   * @param item - item to be checked
   */
  checkItem(e) {
    var t, o;
    const i = ((t = e.title) == null ? void 0 : t.toLowerCase()) || "", r = (o = this.searchQuery) == null ? void 0 : o.toLowerCase();
    return r !== void 0 ? i.includes(r) : !1;
  }
}
var Sa = Object.defineProperty, Ta = Object.getOwnPropertyDescriptor, _a = (n, e, t, o) => {
  for (var i = Ta(e, t), r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (i = s(e, t, i) || i);
  return i && Sa(e, t, i), i;
};
const Fi = class Hi extends Di {
  /**
   * Construct the instance
   *
   * @param params - popover params
   * @param itemsRenderParams – popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    super(e, t), this.nestingLevel = 0, this.nestedPopoverTriggerItem = null, this.previouslyHoveredItem = null, this.scopeElement = document.body, this.hide = () => {
      var o;
      super.hide(), this.destroyNestedPopoverIfExists(), (o = this.flipper) == null || o.deactivate(), this.previouslyHoveredItem = null;
    }, this.onFlip = () => {
      const o = this.itemsDefault.find((i) => i.isFocused);
      o?.onFocus();
    }, this.onSearch = (o) => {
      var i;
      const r = o.query === "", s = o.items.length === 0;
      this.items.forEach((c) => {
        let l = !1;
        c instanceof be ? l = !o.items.includes(c) : (c instanceof ji || c instanceof Ye) && (l = s || !r), c.toggleHidden(l);
      }), this.toggleNothingFoundMessage(s);
      const a = o.query === "" ? this.flippableElements : o.items.map((c) => c.getElement());
      (i = this.flipper) != null && i.isActivated && (this.flipper.deactivate(), this.flipper.activate(a));
    }, e.nestingLevel !== void 0 && (this.nestingLevel = e.nestingLevel), this.nestingLevel > 0 && this.nodes.popover.classList.add(H.popoverNested), e.scopeElement !== void 0 && (this.scopeElement = e.scopeElement), this.nodes.popoverContainer !== null && this.listeners.on(this.nodes.popoverContainer, "mouseover", (o) => this.handleHover(o)), e.searchable && this.addSearch(), e.flippable !== !1 && (this.flipper = new gt({
      items: this.flippableElements,
      focusedItemClass: F.focused,
      allowedKeys: [
        B.TAB,
        B.UP,
        B.DOWN,
        B.ENTER
      ]
    }), this.flipper.onFlip(this.onFlip));
  }
  /**
   * Returns true if some item inside popover is focused
   */
  hasFocus() {
    return this.flipper === void 0 ? !1 : this.flipper.hasFocus();
  }
  /**
   * Scroll position inside items container of the popover
   */
  get scrollTop() {
    return this.nodes.items === null ? 0 : this.nodes.items.scrollTop;
  }
  /**
   * Returns visible element offset top
   */
  get offsetTop() {
    return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetTop;
  }
  /**
   * Open popover
   */
  show() {
    var e;
    this.nodes.popover.style.setProperty(Le.PopoverHeight, this.size.height + "px"), this.shouldOpenBottom || this.nodes.popover.classList.add(H.popoverOpenTop), this.shouldOpenRight || this.nodes.popover.classList.add(H.popoverOpenLeft), super.show(), (e = this.flipper) == null || e.activate(this.flippableElements);
  }
  /**
   * Clears memory
   */
  destroy() {
    this.hide(), super.destroy();
  }
  /**
   * Handles displaying nested items for the item.
   *
   * @param item – item to show nested popover for
   */
  showNestedItems(e) {
    this.nestedPopover !== null && this.nestedPopover !== void 0 || (this.nestedPopoverTriggerItem = e, this.showNestedPopoverForItem(e));
  }
  /**
   * Handles hover events inside popover items container
   *
   * @param event - hover event data
   */
  handleHover(e) {
    const t = this.getTargetItem(e);
    t !== void 0 && this.previouslyHoveredItem !== t && (this.destroyNestedPopoverIfExists(), this.previouslyHoveredItem = t, t.hasChildren && this.showNestedPopoverForItem(t));
  }
  /**
   * Sets CSS variable with position of item near which nested popover should be displayed.
   * Is used for correct positioning of the nested popover
   *
   * @param nestedPopoverEl - nested popover element
   * @param item – item near which nested popover should be displayed
   */
  setTriggerItemPosition(e, t) {
    const o = t.getElement(), i = (o ? o.offsetTop : 0) - this.scrollTop, r = this.offsetTop + i;
    e.style.setProperty(Le.TriggerItemTop, r + "px");
  }
  /**
   * Destroys existing nested popover
   */
  destroyNestedPopoverIfExists() {
    var e, t;
    this.nestedPopover === void 0 || this.nestedPopover === null || (this.nestedPopover.off(ne.ClosedOnActivate, this.hide), this.nestedPopover.hide(), this.nestedPopover.destroy(), this.nestedPopover.getElement().remove(), this.nestedPopover = null, (e = this.flipper) == null || e.activate(this.flippableElements), (t = this.nestedPopoverTriggerItem) == null || t.onChildrenClose());
  }
  /**
   * Creates and displays nested popover for specified item.
   * Is used only on desktop
   *
   * @param item - item to display nested popover by
   */
  showNestedPopoverForItem(e) {
    var t;
    this.nestedPopover = new Hi({
      searchable: e.isChildrenSearchable,
      items: e.children,
      nestingLevel: this.nestingLevel + 1,
      flippable: e.isChildrenFlippable,
      messages: this.messages
    }), e.onChildrenOpen(), this.nestedPopover.on(ne.ClosedOnActivate, this.hide);
    const o = this.nestedPopover.getElement();
    return this.nodes.popover.appendChild(o), this.setTriggerItemPosition(o, e), o.style.setProperty(Le.NestingLevel, this.nestedPopover.nestingLevel.toString()), this.nestedPopover.show(), (t = this.flipper) == null || t.deactivate(), this.nestedPopover;
  }
  /**
   * Checks if popover should be opened bottom.
   * It should happen when there is enough space below or not enough space above
   */
  get shouldOpenBottom() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null)
      return !1;
    const e = this.nodes.popoverContainer.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o = this.size.height, i = e.top + o, r = e.top - o, s = Math.min(window.innerHeight, t.bottom);
    return r < t.top || i <= s;
  }
  /**
   * Checks if popover should be opened left.
   * It should happen when there is enough space in the right or not enough space in the left
   */
  get shouldOpenRight() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null)
      return !1;
    const e = this.nodes.popover.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o = this.size.width, i = e.right + o, r = e.left - o, s = Math.min(window.innerWidth, t.right);
    return r < t.left || i <= s;
  }
  get size() {
    var e;
    const t = {
      height: 0,
      width: 0
    };
    if (this.nodes.popover === null)
      return t;
    const o = this.nodes.popover.cloneNode(!0);
    o.style.visibility = "hidden", o.style.position = "absolute", o.style.top = "-1000px", o.classList.add(H.popoverOpened), (e = o.querySelector("." + H.popoverNested)) == null || e.remove(), document.body.appendChild(o);
    const i = o.querySelector("." + H.popoverContainer);
    return t.height = i.offsetHeight, t.width = i.offsetWidth, o.remove(), t;
  }
  /**
   * Returns list of elements available for keyboard navigation.
   */
  get flippableElements() {
    return this.items.map((e) => {
      if (e instanceof be)
        return e.getElement();
      if (e instanceof Ye)
        return e.getControls();
    }).flat().filter((e) => e != null);
  }
  /**
   * Adds search to the popover
   */
  addSearch() {
    this.search = new Ea({
      items: this.itemsDefault,
      placeholder: this.messages.search
    }), this.search.on(mt.Search, this.onSearch);
    const e = this.search.getElement();
    e.classList.add(H.search), this.nodes.popoverContainer.insertBefore(e, this.nodes.popoverContainer.firstChild);
  }
  /**
   * Toggles nothing found message visibility
   *
   * @param isDisplayed - true if the message should be displayed
   */
  toggleNothingFoundMessage(e) {
    this.nodes.nothingFoundMessage.classList.toggle(H.nothingFoundMessageDisplayed, e);
  }
};
_a([
  Pe
], Fi.prototype, "size");
let uo = Fi;
class Ba extends uo {
  /**
   * Constructs the instance
   *
   * @param params - instance parameters
   */
  constructor(e) {
    const t = !Ae();
    super(
      {
        ...e,
        class: H.popoverInline
      },
      {
        [j.Default]: {
          /**
           * We use button instead of div here to fix bug associated with focus loss (which leads to selection change) on click in safari
           *
           * @todo figure out better way to solve the issue
           */
          wrapperTag: "button",
          hint: {
            position: "top",
            alignment: "center",
            enabled: t
          }
        },
        [j.Html]: {
          hint: {
            position: "top",
            alignment: "center",
            enabled: t
          }
        }
      }
    ), this.items.forEach((o) => {
      !(o instanceof be) && !(o instanceof Ye) || o.hasChildren && o.isChildrenOpen && this.showNestedItems(o);
    });
  }
  /**
   * Returns visible element offset top
   */
  get offsetLeft() {
    return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetLeft;
  }
  /**
   * Open popover
   */
  show() {
    this.nestingLevel === 0 && this.nodes.popover.style.setProperty(
      Le.InlinePopoverWidth,
      this.size.width + "px"
    ), super.show();
  }
  /**
   * Disable hover event handling.
   * Overrides parent's class behavior
   */
  handleHover() {
  }
  /**
   * Sets CSS variable with position of item near which nested popover should be displayed.
   * Is used to position nested popover right below clicked item
   *
   * @param nestedPopoverEl - nested popover element
   * @param item – item near which nested popover should be displayed
   */
  setTriggerItemPosition(e, t) {
    const o = t.getElement(), i = o ? o.offsetLeft : 0, r = this.offsetLeft + i;
    e.style.setProperty(
      Le.TriggerItemLeft,
      r + "px"
    );
  }
  /**
   * Handles displaying nested items for the item.
   * Overriding in order to add toggling behaviour
   *
   * @param item – item to toggle nested popover for
   */
  showNestedItems(e) {
    if (this.nestedPopoverTriggerItem === e) {
      this.destroyNestedPopoverIfExists(), this.nestedPopoverTriggerItem = null;
      return;
    }
    super.showNestedItems(e);
  }
  /**
   * Creates and displays nested popover for specified item.
   * Is used only on desktop
   *
   * @param item - item to display nested popover by
   */
  showNestedPopoverForItem(e) {
    const t = super.showNestedPopoverForItem(e);
    return t.getElement().classList.add(H.getPopoverNestedClass(t.nestingLevel)), t;
  }
  /**
   * Overrides default item click handling.
   * Helps to close nested popover once other item is clicked.
   *
   * @param item - clicked item
   */
  handleItemClick(e) {
    var t;
    e !== this.nestedPopoverTriggerItem && ((t = this.nestedPopoverTriggerItem) == null || t.handleClick(), super.destroyNestedPopoverIfExists()), super.handleItemClick(e);
  }
}
const $i = class $e {
  constructor() {
    this.scrollPosition = null;
  }
  /**
   * Locks body element scroll
   */
  lock() {
    Yt ? this.lockHard() : document.body.classList.add($e.CSS.scrollLocked);
  }
  /**
   * Unlocks body element scroll
   */
  unlock() {
    Yt ? this.unlockHard() : document.body.classList.remove($e.CSS.scrollLocked);
  }
  /**
   * Locks scroll in a hard way (via setting fixed position to body element)
   */
  lockHard() {
    this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
      "--window-scroll-offset",
      `${this.scrollPosition}px`
    ), document.body.classList.add($e.CSS.scrollLockedHard);
  }
  /**
   * Unlocks hard scroll lock
   */
  unlockHard() {
    document.body.classList.remove($e.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
  }
};
$i.CSS = {
  scrollLocked: "ce-scroll-locked",
  scrollLockedHard: "ce-scroll-locked--hard"
};
let Oa = $i;
const Ft = ge("ce-popover-header"), Ht = {
  root: Ft(),
  text: Ft("text"),
  backButton: Ft("back-button")
};
class La {
  /**
   * Constructs the instance
   *
   * @param params - popover header params
   */
  constructor({ text: e, onBackButtonClick: t }) {
    this.listeners = new Ze(), this.text = e, this.onBackButtonClick = t, this.nodes = {
      root: x.make("div", [Ht.root]),
      backButton: x.make("button", [Ht.backButton]),
      text: x.make("div", [Ht.text])
    }, this.nodes.backButton.innerHTML = da, this.nodes.root.appendChild(this.nodes.backButton), this.listeners.on(this.nodes.backButton, "click", this.onBackButtonClick), this.nodes.text.innerText = this.text, this.nodes.root.appendChild(this.nodes.text);
  }
  /**
   * Returns popover header root html element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Destroys the instance
   */
  destroy() {
    this.nodes.root.remove(), this.listeners.destroy();
  }
}
class Ma {
  constructor() {
    this.history = [];
  }
  /**
   * Push new popover state
   *
   * @param state - new state
   */
  push(e) {
    this.history.push(e);
  }
  /**
   * Pop last popover state
   */
  pop() {
    return this.history.pop();
  }
  /**
   * Title retrieved from the current state
   */
  get currentTitle() {
    return this.history.length === 0 ? "" : this.history[this.history.length - 1].title;
  }
  /**
   * Items list retrieved from the current state
   */
  get currentItems() {
    return this.history.length === 0 ? [] : this.history[this.history.length - 1].items;
  }
  /**
   * Returns history to initial popover state
   */
  reset() {
    for (; this.history.length > 1; )
      this.pop();
  }
}
class Ui extends Di {
  /**
   * Construct the instance
   *
   * @param params - popover params
   */
  constructor(e) {
    super(e, {
      [j.Default]: {
        hint: {
          enabled: !1
        }
      },
      [j.Html]: {
        hint: {
          enabled: !1
        }
      }
    }), this.scrollLocker = new Oa(), this.history = new Ma(), this.isHidden = !0, this.nodes.overlay = x.make("div", [H.overlay, H.overlayHidden]), this.nodes.popover.insertBefore(this.nodes.overlay, this.nodes.popover.firstChild), this.listeners.on(this.nodes.overlay, "click", () => {
      this.hide();
    }), this.history.push({ items: e.items });
  }
  /**
   * Open popover
   */
  show() {
    this.nodes.overlay.classList.remove(H.overlayHidden), super.show(), this.scrollLocker.lock(), this.isHidden = !1;
  }
  /**
   * Closes popover
   */
  hide() {
    this.isHidden || (super.hide(), this.nodes.overlay.classList.add(H.overlayHidden), this.scrollLocker.unlock(), this.history.reset(), this.isHidden = !0);
  }
  /**
   * Clears memory
   */
  destroy() {
    super.destroy(), this.scrollLocker.unlock();
  }
  /**
   * Handles displaying nested items for the item
   *
   * @param item – item to show nested popover for
   */
  showNestedItems(e) {
    this.updateItemsAndHeader(e.children, e.title), this.history.push({
      title: e.title,
      items: e.children
    });
  }
  /**
   * Removes rendered popover items and header and displays new ones
   *
   * @param items - new popover items
   * @param title - new popover header text
   */
  updateItemsAndHeader(e, t) {
    if (this.header !== null && this.header !== void 0 && (this.header.destroy(), this.header = null), t !== void 0) {
      this.header = new La({
        text: t,
        onBackButtonClick: () => {
          this.history.pop(), this.updateItemsAndHeader(this.history.currentItems, this.history.currentTitle);
        }
      });
      const o = this.header.getElement();
      o !== null && this.nodes.popoverContainer.insertBefore(o, this.nodes.popoverContainer.firstChild);
    }
    this.items.forEach((o) => {
      var i;
      return (i = o.getElement()) == null ? void 0 : i.remove();
    }), this.items = this.buildItems(e), this.items.forEach((o) => {
      var i;
      const r = o.getElement();
      r !== null && ((i = this.nodes.items) == null || i.appendChild(r));
    });
  }
}
class Ia extends M {
  constructor() {
    super(...arguments), this.opened = !1, this.selection = new _(), this.popover = null, this.close = () => {
      this.opened && (this.opened = !1, _.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(ne.Closed, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null));
    }, this.onPopoverClose = () => {
      this.close();
    };
  }
  /**
   * Module Events
   */
  get events() {
    return {
      opened: "block-settings-opened",
      closed: "block-settings-closed"
    };
  }
  /**
   * Block Settings CSS
   */
  get CSS() {
    return {
      settings: "ce-settings"
    };
  }
  /**
   * Getter for inner popover's flipper instance
   *
   * @todo remove once BlockSettings becomes standalone non-module class
   */
  get flipper() {
    var e;
    if (this.popover !== null)
      return "flipper" in this.popover ? (e = this.popover) == null ? void 0 : e.flipper : void 0;
  }
  /**
   * Panel with block settings with 2 sections:
   *  - Tool's Settings
   *  - Default Settings [Move, Remove, etc]
   */
  make() {
    this.nodes.wrapper = x.make("div", [this.CSS.settings]), this.eventsDispatcher.on(Ke, this.close);
  }
  /**
   * Destroys module
   */
  destroy() {
    this.removeAllNodes(), this.listeners.destroy(), this.eventsDispatcher.off(Ke, this.close);
  }
  /**
   * Open Block Settings pane
   *
   * @param targetBlock - near which Block we should open BlockSettings
   */
  async open(e = this.Editor.BlockManager.currentBlock) {
    var t;
    this.opened = !0, this.selection.save(), this.Editor.BlockSelection.selectBlock(e), this.Editor.BlockSelection.clearCache();
    const { toolTunes: o, commonTunes: i } = e.getTunes();
    this.eventsDispatcher.emit(this.events.opened);
    const r = Ae() ? Ui : uo;
    this.popover = new r({
      searchable: !0,
      items: await this.getTunesItems(e, i, o),
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: W.ui(G.ui.popover, "Nothing found"),
        search: W.ui(G.ui.popover, "Filter")
      }
    }), this.popover.on(ne.Closed, this.onPopoverClose), (t = this.nodes.wrapper) == null || t.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.wrapper;
  }
  /**
   * Returns list of items to be displayed in block tunes menu.
   * Merges tool specific tunes, conversion menu and common tunes in one list in predefined order
   *
   * @param currentBlock –  block we are about to open block tunes for
   * @param commonTunes – common tunes
   * @param toolTunes - tool specific tunes
   */
  async getTunesItems(e, t, o) {
    const i = [];
    o !== void 0 && o.length > 0 && (i.push(...o), i.push({
      type: j.Separator
    }));
    const r = Array.from(this.Editor.Tools.blockTools.values()), s = (await Oi(e, r)).reduce((a, c) => (c.toolbox.forEach((l) => {
      a.push({
        icon: l.icon,
        title: W.t(G.toolNames, l.title),
        name: c.name,
        closeOnActivate: !0,
        onActivate: async () => {
          const { BlockManager: u, Caret: d, Toolbar: g } = this.Editor, v = await u.convert(e, c.name, l.data);
          g.close(), d.setToBlock(v, d.positions.END);
        }
      });
    }), a), []);
    return s.length > 0 && (i.push({
      icon: Ri,
      name: "convert-to",
      title: W.ui(G.ui.popover, "Convert to"),
      children: {
        searchable: !0,
        items: s
      }
    }), i.push({
      type: j.Separator
    })), i.push(...t), i.map((a) => this.resolveTuneAliases(a));
  }
  /**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */
  resolveTuneAliases(e) {
    if (e.type === j.Separator || e.type === j.Html)
      return e;
    const t = aa(e, { label: "title" });
    return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
  }
}
var zi = { exports: {} };
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return (function(t) {
      var o = {};
      function i(r) {
        if (o[r])
          return o[r].exports;
        var s = o[r] = { i: r, l: !1, exports: {} };
        return t[r].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
      }
      return i.m = t, i.c = o, i.d = function(r, s, a) {
        i.o(r, s) || Object.defineProperty(r, s, { enumerable: !0, get: a });
      }, i.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, i.t = function(r, s) {
        if (1 & s && (r = i(r)), 8 & s || 4 & s && typeof r == "object" && r && r.__esModule)
          return r;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: r }), 2 & s && typeof r != "string")
          for (var c in r)
            i.d(a, c, (function(l) {
              return r[l];
            }).bind(null, c));
        return a;
      }, i.n = function(r) {
        var s = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return i.d(s, "a", s), s;
      }, i.o = function(r, s) {
        return Object.prototype.hasOwnProperty.call(r, s);
      }, i.p = "", i(i.s = 0);
    })([function(t, o, i) {
      function r(c, l) {
        for (var u = 0; u < l.length; u++) {
          var d = l[u];
          d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(c, d.key, d);
        }
      }
      function s(c, l, u) {
        return l && r(c.prototype, l), u && r(c, u), c;
      }
      i.r(o);
      var a = (function() {
        function c(l) {
          var u = this;
          (function(d, g) {
            if (!(d instanceof g))
              throw new TypeError("Cannot call a class as a function");
          })(this, c), this.commands = {}, this.keys = {}, this.name = l.name, this.parseShortcutName(l.name), this.element = l.on, this.callback = l.callback, this.executeShortcut = function(d) {
            u.execute(d);
          }, this.element.addEventListener("keydown", this.executeShortcut, !1);
        }
        return s(c, null, [{ key: "supportedCommands", get: function() {
          return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
        } }, { key: "keyCodes", get: function() {
          return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
        } }]), s(c, [{ key: "parseShortcutName", value: function(l) {
          l = l.split("+");
          for (var u = 0; u < l.length; u++) {
            l[u] = l[u].toUpperCase();
            var d = !1;
            for (var g in c.supportedCommands)
              if (c.supportedCommands[g].includes(l[u])) {
                d = this.commands[g] = !0;
                break;
              }
            d || (this.keys[l[u]] = !0);
          }
          for (var v in c.supportedCommands)
            this.commands[v] || (this.commands[v] = !1);
        } }, { key: "execute", value: function(l) {
          var u, d = { CMD: l.ctrlKey || l.metaKey, SHIFT: l.shiftKey, ALT: l.altKey }, g = !0;
          for (u in this.commands)
            this.commands[u] !== d[u] && (g = !1);
          var v, f = !0;
          for (v in this.keys)
            f = f && l.keyCode === c.keyCodes[v];
          g && f && this.callback(l);
        } }, { key: "remove", value: function() {
          this.element.removeEventListener("keydown", this.executeShortcut);
        } }]), c;
      })();
      o.default = a;
    }]).default;
  });
})(zi);
var Pa = zi.exports;
const Aa = /* @__PURE__ */ wt(Pa);
class Na {
  constructor() {
    this.registeredShortcuts = /* @__PURE__ */ new Map();
  }
  /**
   * Register shortcut
   *
   * @param shortcut - shortcut options
   */
  add(e) {
    if (this.findShortcut(e.on, e.name))
      throw Error(
        `Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`
      );
    const t = new Aa({
      name: e.name,
      on: e.on,
      callback: e.handler
    }), o = this.registeredShortcuts.get(e.on) || [];
    this.registeredShortcuts.set(e.on, [...o, t]);
  }
  /**
   * Remove shortcut
   *
   * @param element - Element shortcut is set for
   * @param name - shortcut name
   */
  remove(e, t) {
    const o = this.findShortcut(e, t);
    if (!o)
      return;
    o.remove();
    const i = this.registeredShortcuts.get(e).filter((r) => r !== o);
    if (i.length === 0) {
      this.registeredShortcuts.delete(e);
      return;
    }
    this.registeredShortcuts.set(e, i);
  }
  /**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */
  findShortcut(e, t) {
    return (this.registeredShortcuts.get(e) || []).find(({ name: o }) => o === t);
  }
}
const Ie = new Na();
var Ra = Object.defineProperty, ja = Object.getOwnPropertyDescriptor, qi = (n, e, t, o) => {
  for (var i = ja(e, t), r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (i = s(e, t, i) || i);
  return i && Ra(e, t, i), i;
}, tt = /* @__PURE__ */ ((n) => (n.Opened = "toolbox-opened", n.Closed = "toolbox-closed", n.BlockAdded = "toolbox-block-added", n))(tt || {});
const ho = class Wi extends Ge {
  /**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */
  constructor({ api: e, tools: t, i18nLabels: o }) {
    super(), this.opened = !1, this.listeners = new Ze(), this.popover = null, this.handleMobileLayoutToggle = () => {
      this.destroyPopover(), this.initPopover();
    }, this.onPopoverClose = () => {
      this.opened = !1, this.emit(
        "toolbox-closed"
        /* Closed */
      );
    }, this.api = e, this.tools = t, this.i18nLabels = o, this.enableShortcuts(), this.nodes = {
      toolbox: x.make("div", Wi.CSS.toolbox)
    }, this.initPopover(), this.api.events.on(Ke, this.handleMobileLayoutToggle);
  }
  /**
   * Returns True if Toolbox is Empty and nothing to show
   *
   * @returns {boolean}
   */
  get isEmpty() {
    return this.toolsToBeDisplayed.length === 0;
  }
  /**
   * CSS styles
   */
  static get CSS() {
    return {
      toolbox: "ce-toolbox"
    };
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.toolbox;
  }
  /**
   * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
   */
  hasFocus() {
    if (this.popover !== null)
      return "hasFocus" in this.popover ? this.popover.hasFocus() : void 0;
  }
  /**
   * Destroy Module
   */
  destroy() {
    var e;
    super.destroy(), this.nodes && this.nodes.toolbox && this.nodes.toolbox.remove(), this.removeAllShortcuts(), (e = this.popover) == null || e.off(ne.Closed, this.onPopoverClose), this.listeners.destroy(), this.api.events.off(Ke, this.handleMobileLayoutToggle);
  }
  /**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */
  toolButtonActivated(e, t) {
    this.insertNewBlock(e, t);
  }
  /**
   * Open Toolbox with Tools
   */
  open() {
    var e;
    this.isEmpty || ((e = this.popover) == null || e.show(), this.opened = !0, this.emit(
      "toolbox-opened"
      /* Opened */
    ));
  }
  /**
   * Close Toolbox
   */
  close() {
    var e;
    (e = this.popover) == null || e.hide(), this.opened = !1, this.emit(
      "toolbox-closed"
      /* Closed */
    );
  }
  /**
   * Close Toolbox
   */
  toggle() {
    this.opened ? this.close() : this.open();
  }
  /**
   * Creates toolbox popover and appends it inside wrapper element
   */
  initPopover() {
    var e;
    const t = Ae() ? Ui : uo;
    this.popover = new t({
      scopeElement: this.api.ui.nodes.redactor,
      searchable: !0,
      messages: {
        nothingFound: this.i18nLabels.nothingFound,
        search: this.i18nLabels.filter
      },
      items: this.toolboxItemsToBeDisplayed
    }), this.popover.on(ne.Closed, this.onPopoverClose), (e = this.nodes.toolbox) == null || e.append(this.popover.getElement());
  }
  /**
   * Destroys popover instance and removes it from DOM
   */
  destroyPopover() {
    this.popover !== null && (this.popover.hide(), this.popover.off(ne.Closed, this.onPopoverClose), this.popover.destroy(), this.popover = null), this.nodes.toolbox !== null && (this.nodes.toolbox.innerHTML = "");
  }
  get toolsToBeDisplayed() {
    const e = [];
    return this.tools.forEach((t) => {
      t.toolbox && e.push(t);
    }), e;
  }
  get toolboxItemsToBeDisplayed() {
    const e = (t, o, i = !0) => ({
      icon: t.icon,
      title: W.t(G.toolNames, t.title || ut(o.name)),
      name: o.name,
      onActivate: () => {
        this.toolButtonActivated(o.name, t.data);
      },
      secondaryLabel: o.shortcut && i ? ro(o.shortcut) : ""
    });
    return this.toolsToBeDisplayed.reduce((t, o) => (Array.isArray(o.toolbox) ? o.toolbox.forEach((i, r) => {
      t.push(e(i, o, r === 0));
    }) : o.toolbox !== void 0 && t.push(e(o.toolbox, o)), t), []);
  }
  /**
   * Iterate all tools and enable theirs shortcuts if specified
   */
  enableShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const t = e.shortcut;
      t && this.enableShortcutForTool(e.name, t);
    });
  }
  /**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcutForTool(e, t) {
    Ie.add({
      name: t,
      on: this.api.ui.nodes.redactor,
      handler: async (o) => {
        o.preventDefault();
        const i = this.api.blocks.getCurrentBlockIndex(), r = this.api.blocks.getBlockByIndex(i);
        if (r)
          try {
            const s = await this.api.blocks.convert(r.id, e);
            this.api.caret.setToBlock(s, "end");
            return;
          } catch {
          }
        this.insertNewBlock(e);
      }
    });
  }
  /**
   * Removes all added shortcuts
   * Fired when the Read-Only mode is activated
   */
  removeAllShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const t = e.shortcut;
      t && Ie.remove(this.api.ui.nodes.redactor, t);
    });
  }
  /**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */
  async insertNewBlock(e, t) {
    const o = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(o);
    if (!i)
      return;
    const r = i.isEmpty ? o : o + 1;
    let s;
    if (t) {
      const c = await this.api.blocks.composeBlockData(e);
      s = Object.assign(c, t);
    }
    const a = this.api.blocks.insert(
      e,
      s,
      void 0,
      r,
      void 0,
      i.isEmpty
    );
    a.call(se.APPEND_CALLBACK), this.api.caret.setToBlock(r), this.emit("toolbox-block-added", {
      block: a
    }), this.api.toolbar.close();
  }
};
qi([
  Pe
], ho.prototype, "toolsToBeDisplayed");
qi([
  Pe
], ho.prototype, "toolboxItemsToBeDisplayed");
let Da = ho;
const Vi = "block hovered";
async function Fa(n, e) {
  const t = navigator.keyboard;
  if (!t)
    return e;
  try {
    return (await t.getLayoutMap()).get(n) || e;
  } catch (o) {
    return console.error(o), e;
  }
}
class Ha extends M {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.toolboxInstance = null;
  }
  /**
   * CSS styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      toolbar: "ce-toolbar",
      content: "ce-toolbar__content",
      actions: "ce-toolbar__actions",
      actionsOpened: "ce-toolbar__actions--opened",
      toolbarOpened: "ce-toolbar--opened",
      openedToolboxHolderModifier: "codex-editor--toolbox-opened",
      plusButton: "ce-toolbar__plus",
      plusButtonShortcut: "ce-toolbar__plus-shortcut",
      settingsToggler: "ce-toolbar__settings-btn",
      settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
    };
  }
  /**
   * Returns the Toolbar opening state
   *
   * @returns {boolean}
   */
  get opened() {
    return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
  }
  /**
   * Public interface for accessing the Toolbox
   */
  get toolbox() {
    var e;
    return {
      opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
      close: () => {
        var t;
        (t = this.toolboxInstance) == null || t.close();
      },
      open: () => {
        if (this.toolboxInstance === null) {
          N("toolbox.open() called before initialization is finished", "warn");
          return;
        }
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
      },
      toggle: () => {
        if (this.toolboxInstance === null) {
          N("toolbox.toggle() called before initialization is finished", "warn");
          return;
        }
        this.toolboxInstance.toggle();
      },
      hasFocus: () => {
        var t;
        return (t = this.toolboxInstance) == null ? void 0 : t.hasFocus();
      }
    };
  }
  /**
   * Block actions appearance manipulations
   */
  get blockActions() {
    return {
      hide: () => {
        this.nodes.actions.classList.remove(this.CSS.actionsOpened);
      },
      show: () => {
        this.nodes.actions.classList.add(this.CSS.actionsOpened);
      }
    };
  }
  /**
   * Methods for working with Block Tunes toggler
   */
  get blockTunesToggler() {
    return {
      hide: () => this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),
      show: () => this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)
    };
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback(() => {
      this.drawUI(), this.enableModuleBindings();
    }, { timeout: 2e3 });
  }
  /**
   * Move Toolbar to the passed (or current) Block
   *
   * @param block - block to move Toolbar near it
   */
  moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
    if (this.toolboxInstance === null) {
      N("Can't open Toolbar since Editor initialization is not finished yet", "warn");
      return;
    }
    if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
      return;
    this.hoveredBlock = e;
    const t = e.holder, { isMobile: o } = this.Editor.UI;
    let i;
    const r = 20, s = e.firstInput, a = t.getBoundingClientRect(), c = s !== void 0 ? s.getBoundingClientRect() : null, l = c !== null ? c.top - a.top : null, u = l !== null ? l > r : void 0;
    if (o)
      i = t.offsetTop + t.offsetHeight;
    else if (s === void 0 || u) {
      const d = parseInt(window.getComputedStyle(e.pluginsContent).paddingTop);
      i = t.offsetTop + d;
    } else {
      const d = Cs(s), g = parseInt(window.getComputedStyle(this.nodes.plusButton).height, 10);
      i = t.offsetTop + d - g + 8 + l;
    }
    this.nodes.wrapper.style.top = `${Math.floor(i)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
  }
  /**
   * Close the Toolbar
   */
  close() {
    var e, t;
    this.Editor.ReadOnly.isEnabled || ((e = this.nodes.wrapper) == null || e.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (t = this.toolboxInstance) == null || t.close(), this.Editor.BlockSettings.close(), this.reset());
  }
  /**
   * Reset the Toolbar position to prevent DOM height growth, for example after blocks deletion
   */
  reset() {
    this.nodes.wrapper.style.top = "unset";
  }
  /**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */
  open(e = !0) {
    this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
  }
  /**
   * Draws Toolbar elements
   */
  async make() {
    this.nodes.wrapper = x.make("div", this.CSS.toolbar), ["content", "actions"].forEach((r) => {
      this.nodes[r] = x.make("div", this.CSS[r]);
    }), x.append(this.nodes.wrapper, this.nodes.content), x.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = x.make("div", this.CSS.plusButton, {
      innerHTML: ba
    }), x.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", () => {
      pt(!0), this.plusButtonClicked();
    }, !1);
    const e = x.make("div");
    e.appendChild(document.createTextNode(W.ui(G.ui.toolbar.toolbox, "Add"))), e.appendChild(x.make("div", this.CSS.plusButtonShortcut, {
      textContent: "/"
    })), ft(this.nodes.plusButton, e, {
      hidingDelay: 400
    }), this.nodes.settingsToggler = x.make("span", this.CSS.settingsToggler, {
      innerHTML: ma
    }), x.append(this.nodes.actions, this.nodes.settingsToggler);
    const t = x.make("div"), o = x.text(W.ui(G.ui.blockTunes.toggler, "Click to tune")), i = await Fa("Slash", "/");
    t.appendChild(o), t.appendChild(x.make("div", this.CSS.plusButtonShortcut, {
      textContent: ro(`CMD + ${i}`)
    })), ft(this.nodes.settingsToggler, t, {
      hidingDelay: 400
    }), x.append(this.nodes.actions, this.makeToolbox()), x.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), x.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Creates the Toolbox instance and return it's rendered element
   */
  makeToolbox() {
    return this.toolboxInstance = new Da({
      api: this.Editor.API.methods,
      tools: this.Editor.Tools.blockTools,
      i18nLabels: {
        filter: W.ui(G.ui.popover, "Filter"),
        nothingFound: W.ui(G.ui.popover, "Nothing found")
      }
    }), this.toolboxInstance.on(tt.Opened, () => {
      this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(tt.Closed, () => {
      this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(tt.BlockAdded, ({ block: e }) => {
      const { BlockManager: t, Caret: o } = this.Editor, i = t.getBlockById(e.id);
      i.inputs.length === 0 && (i === t.lastBlock ? (t.insertAtEnd(), o.setToBlock(t.lastBlock)) : o.setToBlock(t.nextBlock));
    }), this.toolboxInstance.getElement();
  }
  /**
   * Handler for Plus Button
   */
  plusButtonClicked() {
    var e;
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, (e = this.toolboxInstance) == null || e.toggle();
  }
  /**
   * Enable bindings
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", (e) => {
      var t;
      e.stopPropagation(), this.settingsTogglerClicked(), (t = this.toolboxInstance) != null && t.opened && this.toolboxInstance.close(), pt(!0);
    }, !0), Ae() || this.eventsDispatcher.on(Vi, (e) => {
      var t;
      this.Editor.BlockSettings.opened || (t = this.toolboxInstance) != null && t.opened || this.moveAndOpen(e.block);
    });
  }
  /**
   * Disable bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Clicks on the Block Settings toggler
   */
  settingsTogglerClicked() {
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
  }
  /**
   * Draws Toolbar UI
   *
   * Toolbar contains BlockSettings and Toolbox.
   * That's why at first we draw its components and then Toolbar itself
   *
   * Steps:
   *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
   *  - Make itself and append dependent nodes to itself
   *
   */
  drawUI() {
    this.Editor.BlockSettings.make(), this.make();
  }
  /**
   * Removes all created and saved HTMLElements
   * It is used in Read-Only mode
   */
  destroy() {
    this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy();
  }
}
var ve = /* @__PURE__ */ ((n) => (n[n.Block = 0] = "Block", n[n.Inline = 1] = "Inline", n[n.Tune = 2] = "Tune", n))(ve || {}), ot = /* @__PURE__ */ ((n) => (n.Shortcut = "shortcut", n.Toolbox = "toolbox", n.EnabledInlineTools = "inlineToolbar", n.EnabledBlockTunes = "tunes", n.Config = "config", n))(ot || {}), Ki = /* @__PURE__ */ ((n) => (n.Shortcut = "shortcut", n.SanitizeConfig = "sanitize", n))(Ki || {}), Te = /* @__PURE__ */ ((n) => (n.IsEnabledLineBreaks = "enableLineBreaks", n.Toolbox = "toolbox", n.ConversionConfig = "conversionConfig", n.IsReadOnlySupported = "isReadOnlySupported", n.PasteConfig = "pasteConfig", n))(Te || {}), bt = /* @__PURE__ */ ((n) => (n.IsInline = "isInline", n.Title = "title", n.IsReadOnlySupported = "isReadOnlySupported", n))(bt || {}), Jt = /* @__PURE__ */ ((n) => (n.IsTune = "isTune", n))(Jt || {});
let po = class {
  /**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */
  constructor({
    name: e,
    constructable: t,
    config: o,
    api: i,
    isDefault: r,
    isInternal: s = !1,
    defaultPlaceholder: a
  }) {
    this.api = i, this.name = e, this.constructable = t, this.config = o, this.isDefault = r, this.isInternal = s, this.defaultPlaceholder = a;
  }
  /**
   * Returns Tool user configuration
   */
  get settings() {
    const e = this.config.config || {};
    return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
  }
  /**
   * Calls Tool's reset method
   */
  reset() {
    if (D(this.constructable.reset))
      return this.constructable.reset();
  }
  /**
   * Calls Tool's prepare method
   */
  prepare() {
    if (D(this.constructable.prepare))
      return this.constructable.prepare({
        toolName: this.name,
        config: this.settings
      });
  }
  /**
   * Returns shortcut for Tool (internal or specified by user)
   */
  get shortcut() {
    const e = this.constructable.shortcut;
    return this.config.shortcut || e;
  }
  /**
   * Returns Tool's sanitizer configuration
   */
  get sanitizeConfig() {
    return this.constructable.sanitize || {};
  }
  /**
   * Returns true if Tools is inline
   */
  isInline() {
    return this.type === ve.Inline;
  }
  /**
   * Returns true if Tools is block
   */
  isBlock() {
    return this.type === ve.Block;
  }
  /**
   * Returns true if Tools is tune
   */
  isTune() {
    return this.type === ve.Tune;
  }
};
class $a extends M {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.CSS = {
      inlineToolbar: "ce-inline-toolbar"
    }, this.opened = !1, this.popover = null, this.toolbarVerticalMargin = Ae() ? 20 : 6, this.tools = /* @__PURE__ */ new Map(), window.requestIdleCallback(() => {
      this.make();
    }, { timeout: 2e3 });
  }
  /**
   *  Moving / appearance
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Shows Inline Toolbar if something is selected
   *
   * @param [needToClose] - pass true to close toolbar if it is not allowed.
   *                                  Avoid to use it just for closing IT, better call .close() clearly.
   */
  async tryToShow(e = !1) {
    e && this.close(), this.allowedToShow() && (await this.open(), this.Editor.Toolbar.close());
  }
  /**
   * Hides Inline Toolbar
   */
  close() {
    var e, t;
    if (this.opened) {
      for (const [o, i] of this.tools) {
        const r = this.getToolShortcut(o.name);
        r !== void 0 && Ie.remove(this.Editor.UI.nodes.redactor, r), D(i.clear) && i.clear();
      }
      this.tools = /* @__PURE__ */ new Map(), this.reset(), this.opened = !1, (e = this.popover) == null || e.hide(), (t = this.popover) == null || t.destroy(), this.popover = null;
    }
  }
  /**
   * Check if node is contained by Inline Toolbar
   *
   * @param {Node} node — node to check
   */
  containsNode(e) {
    return this.nodes.wrapper === void 0 ? !1 : this.nodes.wrapper.contains(e);
  }
  /**
   * Removes UI and its components
   */
  destroy() {
    var e;
    this.removeAllNodes(), (e = this.popover) == null || e.destroy(), this.popover = null;
  }
  /**
   * Making DOM
   */
  make() {
    this.nodes.wrapper = x.make("div", [
      this.CSS.inlineToolbar,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), x.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Shows Inline Toolbar
   */
  async open() {
    var e;
    if (this.opened)
      return;
    this.opened = !0, this.popover !== null && this.popover.destroy(), this.createToolsInstances();
    const t = await this.getPopoverItems();
    this.popover = new Ba({
      items: t,
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: W.ui(G.ui.popover, "Nothing found"),
        search: W.ui(G.ui.popover, "Filter")
      }
    }), this.move(this.popover.size.width), (e = this.nodes.wrapper) == null || e.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Move Toolbar to the selected text
   *
   * @param popoverWidth - width of the toolbar popover
   */
  move(e) {
    const t = _.rect, o = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), i = {
      x: t.x - o.x,
      y: t.y + t.height - // + window.scrollY
      o.top + this.toolbarVerticalMargin
    };
    i.x + e + o.x > this.Editor.UI.contentRect.right && (i.x = this.Editor.UI.contentRect.right - e - o.x), this.nodes.wrapper.style.left = Math.floor(i.x) + "px", this.nodes.wrapper.style.top = Math.floor(i.y) + "px";
  }
  /**
   * Clear orientation classes and reset position
   */
  reset() {
    this.nodes.wrapper.style.left = "0", this.nodes.wrapper.style.top = "0";
  }
  /**
   * Need to show Inline Toolbar or not
   */
  allowedToShow() {
    const e = ["IMG", "INPUT"], t = _.get(), o = _.text;
    if (!t || !t.anchorNode || t.isCollapsed || o.length < 1)
      return !1;
    const i = x.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
    if (i === null || t !== null && e.includes(i.tagName))
      return !1;
    const r = this.Editor.BlockManager.getBlock(t.anchorNode);
    return !r || this.getTools().some((s) => r.tool.inlineTools.has(s.name)) === !1 ? !1 : i.closest("[contenteditable]") !== null;
  }
  /**
   *  Working with Tools
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Returns tools that are available for current block
   *
   * Used to check if Inline Toolbar could be shown
   * and to render tools in the Inline Toolbar
   */
  getTools() {
    const e = this.Editor.BlockManager.currentBlock;
    return e ? Array.from(e.tool.inlineTools.values()).filter((t) => !(this.Editor.ReadOnly.isEnabled && t.isReadOnlySupported !== !0)) : [];
  }
  /**
   * Constructs tools instances and saves them to this.tools
   */
  createToolsInstances() {
    this.tools = /* @__PURE__ */ new Map(), this.getTools().forEach((e) => {
      const t = e.create();
      this.tools.set(e, t);
    });
  }
  /**
   * Returns Popover Items for tools segregated by their appearance type: regular items and custom html elements.
   */
  async getPopoverItems() {
    const e = [];
    let t = 0;
    for (const [o, i] of this.tools) {
      const r = await i.render(), s = this.getToolShortcut(o.name);
      if (s !== void 0)
        try {
          this.enableShortcuts(o.name, s);
        } catch {
        }
      const a = s !== void 0 ? ro(s) : void 0, c = W.t(
        G.toolNames,
        o.title || ut(o.name)
      );
      [r].flat().forEach((l) => {
        var u, d;
        const g = {
          name: o.name,
          onActivate: () => {
            this.toolClicked(i);
          },
          hint: {
            title: c,
            description: a
          }
        };
        if (x.isElement(l)) {
          const v = {
            ...g,
            element: l,
            type: j.Html
          };
          if (D(i.renderActions)) {
            const f = i.renderActions();
            v.children = {
              isOpen: (u = i.checkState) == null ? void 0 : u.call(i, _.get()),
              /** Disable keyboard navigation in actions, as it might conflict with enter press handling */
              isFlippable: !1,
              items: [
                {
                  type: j.Html,
                  element: f
                }
              ]
            };
          } else
            (d = i.checkState) == null || d.call(i, _.get());
          e.push(v);
        } else if (l.type === j.Html)
          e.push({
            ...g,
            ...l,
            type: j.Html
          });
        else if (l.type === j.Separator)
          e.push({
            type: j.Separator
          });
        else {
          const v = {
            ...g,
            ...l,
            type: j.Default
          };
          "children" in v && t !== 0 && e.push({
            type: j.Separator
          }), e.push(v), "children" in v && t < this.tools.size - 1 && e.push({
            type: j.Separator
          });
        }
      }), t++;
    }
    return e;
  }
  /**
   * Get shortcut name for tool
   *
   * @param toolName — Tool name
   */
  getToolShortcut(e) {
    const { Tools: t } = this.Editor, o = t.inlineTools.get(e), i = t.internal.inlineTools;
    return Array.from(i.keys()).includes(e) ? this.inlineTools[e][Ki.Shortcut] : o?.shortcut;
  }
  /**
   * Enable Tool shortcut with Editor Shortcuts Module
   *
   * @param toolName - tool name
   * @param shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcuts(e, t) {
    Ie.add({
      name: t,
      handler: (o) => {
        var i;
        const { currentBlock: r } = this.Editor.BlockManager;
        r && r.tool.enabledInlineTools && (o.preventDefault(), (i = this.popover) == null || i.activateItemByName(e));
      },
      /**
       * We need to bind shortcut to the document to make it work in read-only mode
       */
      on: document
    });
  }
  /**
   * Inline Tool button clicks
   *
   * @param tool - Tool's instance
   */
  toolClicked(e) {
    var t;
    const o = _.range;
    (t = e.surround) == null || t.call(e, o), this.checkToolsState();
  }
  /**
   * Check Tools` state by selection
   */
  checkToolsState() {
    var e;
    (e = this.tools) == null || e.forEach((t) => {
      var o;
      (o = t.checkState) == null || o.call(t, _.get());
    });
  }
  /**
   * Get inline tools tools
   * Tools that has isInline is true
   */
  get inlineTools() {
    const e = {};
    return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t, o]) => {
      e[t] = o.create();
    }), e;
  }
}
function Yi() {
  const n = window.getSelection();
  if (n === null)
    return [null, 0];
  let e = n.focusNode, t = n.focusOffset;
  return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[t] ? (e = e.childNodes[t], t = 0) : (e = e.childNodes[t - 1], t = e.textContent.length)), [e, t]);
}
function Xi(n, e, t, o) {
  const i = document.createRange();
  o === "left" ? (i.setStart(n, 0), i.setEnd(e, t)) : (i.setStart(e, t), i.setEnd(n, n.childNodes.length));
  const r = i.cloneContents(), s = document.createElement("div");
  s.appendChild(r);
  const a = s.textContent || "";
  return xs(a);
}
function nt(n) {
  const e = x.getDeepestNode(n);
  if (e === null || x.isEmpty(n))
    return !0;
  if (x.isNativeInput(e))
    return e.selectionEnd === 0;
  if (x.isEmpty(n))
    return !0;
  const [t, o] = Yi();
  return t === null ? !1 : Xi(n, t, o, "left");
}
function it(n) {
  const e = x.getDeepestNode(n, !0);
  if (e === null)
    return !0;
  if (x.isNativeInput(e))
    return e.selectionEnd === e.value.length;
  const [t, o] = Yi();
  return t === null ? !1 : Xi(n, t, o, "right");
}
var Gi = {}, fo = {}, kt = {}, we = {}, go = {}, mo = {};
Object.defineProperty(mo, "__esModule", { value: !0 });
mo.allInputsSelector = Ua;
function Ua() {
  var n = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + n.map(function(e) {
    return 'input[type="'.concat(e, '"]');
  }).join(", ");
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.allInputsSelector = void 0;
  var e = mo;
  Object.defineProperty(n, "allInputsSelector", { enumerable: !0, get: function() {
    return e.allInputsSelector;
  } });
})(go);
var ke = {}, bo = {};
Object.defineProperty(bo, "__esModule", { value: !0 });
bo.isNativeInput = za;
function za(n) {
  var e = [
    "INPUT",
    "TEXTAREA"
  ];
  return n && n.tagName ? e.includes(n.tagName) : !1;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isNativeInput = void 0;
  var e = bo;
  Object.defineProperty(n, "isNativeInput", { enumerable: !0, get: function() {
    return e.isNativeInput;
  } });
})(ke);
var Zi = {}, vo = {};
Object.defineProperty(vo, "__esModule", { value: !0 });
vo.append = qa;
function qa(n, e) {
  Array.isArray(e) ? e.forEach(function(t) {
    n.appendChild(t);
  }) : n.appendChild(e);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.append = void 0;
  var e = vo;
  Object.defineProperty(n, "append", { enumerable: !0, get: function() {
    return e.append;
  } });
})(Zi);
var yo = {}, wo = {};
Object.defineProperty(wo, "__esModule", { value: !0 });
wo.blockElements = Wa;
function Wa() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.blockElements = void 0;
  var e = wo;
  Object.defineProperty(n, "blockElements", { enumerable: !0, get: function() {
    return e.blockElements;
  } });
})(yo);
var Ji = {}, ko = {};
Object.defineProperty(ko, "__esModule", { value: !0 });
ko.calculateBaseline = Va;
function Va(n) {
  var e = window.getComputedStyle(n), t = parseFloat(e.fontSize), o = parseFloat(e.lineHeight) || t * 1.2, i = parseFloat(e.paddingTop), r = parseFloat(e.borderTopWidth), s = parseFloat(e.marginTop), a = t * 0.8, c = (o - t) / 2, l = s + r + i + c + a;
  return l;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.calculateBaseline = void 0;
  var e = ko;
  Object.defineProperty(n, "calculateBaseline", { enumerable: !0, get: function() {
    return e.calculateBaseline;
  } });
})(Ji);
var Qi = {}, xo = {}, Co = {}, Eo = {};
Object.defineProperty(Eo, "__esModule", { value: !0 });
Eo.isContentEditable = Ka;
function Ka(n) {
  return n.contentEditable === "true";
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isContentEditable = void 0;
  var e = Eo;
  Object.defineProperty(n, "isContentEditable", { enumerable: !0, get: function() {
    return e.isContentEditable;
  } });
})(Co);
Object.defineProperty(xo, "__esModule", { value: !0 });
xo.canSetCaret = Ga;
var Ya = ke, Xa = Co;
function Ga(n) {
  var e = !0;
  if ((0, Ya.isNativeInput)(n))
    switch (n.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        e = !1;
        break;
    }
  else
    e = (0, Xa.isContentEditable)(n);
  return e;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.canSetCaret = void 0;
  var e = xo;
  Object.defineProperty(n, "canSetCaret", { enumerable: !0, get: function() {
    return e.canSetCaret;
  } });
})(Qi);
var xt = {}, So = {};
function Za(n, e, t) {
  const o = t.value !== void 0 ? "value" : "get", i = t[o], r = `#${e}Cache`;
  if (t[o] = function(...s) {
    return this[r] === void 0 && (this[r] = i.apply(this, s)), this[r];
  }, o === "get" && t.set) {
    const s = t.set;
    t.set = function(a) {
      delete n[r], s.apply(this, a);
    };
  }
  return t;
}
function er() {
  const n = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(n).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e !== void 0 && (n[e] = !0), n;
}
function To(n) {
  return n != null && n !== "" && (typeof n != "object" || Object.keys(n).length > 0);
}
function Ja(n) {
  return !To(n);
}
const Qa = () => typeof window < "u" && window.navigator !== null && To(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function el(n) {
  const e = er();
  return n = n.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), e.mac ? n = n.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : n = n.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n;
}
function tl(n) {
  return n[0].toUpperCase() + n.slice(1);
}
function ol(n) {
  const e = document.createElement("div");
  e.style.position = "absolute", e.style.left = "-999px", e.style.bottom = "-999px", e.innerHTML = n, document.body.appendChild(e);
  const t = window.getSelection(), o = document.createRange();
  if (o.selectNode(e), t === null)
    throw new Error("Cannot copy text to clipboard");
  t.removeAllRanges(), t.addRange(o), document.execCommand("copy"), document.body.removeChild(e);
}
function nl(n, e, t) {
  let o;
  return (...i) => {
    const r = this, s = () => {
      o = void 0, t !== !0 && n.apply(r, i);
    }, a = t === !0 && o !== void 0;
    window.clearTimeout(o), o = window.setTimeout(s, e), a && n.apply(r, i);
  };
}
function pe(n) {
  return Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function il(n) {
  return pe(n) === "boolean";
}
function tr(n) {
  return pe(n) === "function" || pe(n) === "asyncfunction";
}
function rl(n) {
  return tr(n) && /^\s*class\s+/.test(n.toString());
}
function sl(n) {
  return pe(n) === "number";
}
function rt(n) {
  return pe(n) === "object";
}
function al(n) {
  return Promise.resolve(n) === n;
}
function ll(n) {
  return pe(n) === "string";
}
function cl(n) {
  return pe(n) === "undefined";
}
function Qt(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  if (rt(n) && rt(t))
    for (const o in t)
      rt(t[o]) ? (n[o] === void 0 && Object.assign(n, { [o]: {} }), Qt(n[o], t[o])) : Object.assign(n, { [o]: t[o] });
  return Qt(n, ...e);
}
function dl(n, e, t) {
  const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  n && console.warn(o);
}
function ul(n) {
  try {
    return new URL(n).href;
  } catch {
  }
  return n.substring(0, 2) === "//" ? window.location.protocol + n : window.location.origin + n;
}
function hl(n) {
  return n > 47 && n < 58 || n === 32 || n === 13 || n === 229 || n > 64 && n < 91 || n > 95 && n < 112 || n > 185 && n < 193 || n > 218 && n < 223;
}
const pl = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, fl = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
let gl = class {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(n) {
    return new Promise((e, t) => {
      this.completed = this.completed.then(n).then(e).catch(t);
    });
  }
};
function ml(n, e, t = void 0) {
  let o, i, r, s = null, a = 0;
  t || (t = {});
  const c = function() {
    a = t.leading === !1 ? 0 : Date.now(), s = null, r = n.apply(o, i), s === null && (o = i = null);
  };
  return function() {
    const l = Date.now();
    !a && t.leading === !1 && (a = l);
    const u = e - (l - a);
    return o = this, i = arguments, u <= 0 || u > e ? (s && (clearTimeout(s), s = null), a = l, r = n.apply(o, i), s === null && (o = i = null)) : !s && t.trailing !== !1 && (s = setTimeout(c, u)), r;
  };
}
const bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: gl,
  beautifyShortcut: el,
  cacheable: Za,
  capitalize: tl,
  copyTextToClipboard: ol,
  debounce: nl,
  deepMerge: Qt,
  deprecationAssert: dl,
  getUserOS: er,
  getValidUrl: ul,
  isBoolean: il,
  isClass: rl,
  isEmpty: Ja,
  isFunction: tr,
  isIosDevice: Qa,
  isNumber: sl,
  isObject: rt,
  isPrintableKey: hl,
  isPromise: al,
  isString: ll,
  isUndefined: cl,
  keyCodes: pl,
  mouseButtons: fl,
  notEmpty: To,
  throttle: ml,
  typeOf: pe
}, Symbol.toStringTag, { value: "Module" })), _o = /* @__PURE__ */ ls(bl);
Object.defineProperty(So, "__esModule", { value: !0 });
So.containsOnlyInlineElements = wl;
var vl = _o, yl = yo;
function wl(n) {
  var e;
  (0, vl.isString)(n) ? (e = document.createElement("div"), e.innerHTML = n) : e = n;
  var t = function(o) {
    return !(0, yl.blockElements)().includes(o.tagName.toLowerCase()) && Array.from(o.children).every(t);
  };
  return Array.from(e.children).every(t);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.containsOnlyInlineElements = void 0;
  var e = So;
  Object.defineProperty(n, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return e.containsOnlyInlineElements;
  } });
})(xt);
var or = {}, Bo = {}, Ct = {}, Oo = {};
Object.defineProperty(Oo, "__esModule", { value: !0 });
Oo.make = kl;
function kl(n, e, t) {
  var o;
  e === void 0 && (e = null), t === void 0 && (t = {});
  var i = document.createElement(n);
  if (Array.isArray(e)) {
    var r = e.filter(function(a) {
      return a !== void 0;
    });
    (o = i.classList).add.apply(o, r);
  } else
    e !== null && i.classList.add(e);
  for (var s in t)
    Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s]);
  return i;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.make = void 0;
  var e = Oo;
  Object.defineProperty(n, "make", { enumerable: !0, get: function() {
    return e.make;
  } });
})(Ct);
Object.defineProperty(Bo, "__esModule", { value: !0 });
Bo.fragmentToString = Cl;
var xl = Ct;
function Cl(n) {
  var e = (0, xl.make)("div");
  return e.appendChild(n), e.innerHTML;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.fragmentToString = void 0;
  var e = Bo;
  Object.defineProperty(n, "fragmentToString", { enumerable: !0, get: function() {
    return e.fragmentToString;
  } });
})(or);
var nr = {}, Lo = {};
Object.defineProperty(Lo, "__esModule", { value: !0 });
Lo.getContentLength = Sl;
var El = ke;
function Sl(n) {
  var e, t;
  return (0, El.isNativeInput)(n) ? n.value.length : n.nodeType === Node.TEXT_NODE ? n.length : (t = (e = n.textContent) === null || e === void 0 ? void 0 : e.length) !== null && t !== void 0 ? t : 0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getContentLength = void 0;
  var e = Lo;
  Object.defineProperty(n, "getContentLength", { enumerable: !0, get: function() {
    return e.getContentLength;
  } });
})(nr);
var Mo = {}, Io = {}, Zn = Ve && Ve.__spreadArray || function(n, e, t) {
  if (t || arguments.length === 2)
    for (var o = 0, i = e.length, r; o < i; o++)
      (r || !(o in e)) && (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
  return n.concat(r || Array.prototype.slice.call(e));
};
Object.defineProperty(Io, "__esModule", { value: !0 });
Io.getDeepestBlockElements = ir;
var Tl = xt;
function ir(n) {
  return (0, Tl.containsOnlyInlineElements)(n) ? [n] : Array.from(n.children).reduce(function(e, t) {
    return Zn(Zn([], e, !0), ir(t), !0);
  }, []);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getDeepestBlockElements = void 0;
  var e = Io;
  Object.defineProperty(n, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return e.getDeepestBlockElements;
  } });
})(Mo);
var rr = {}, Po = {}, Et = {}, Ao = {};
Object.defineProperty(Ao, "__esModule", { value: !0 });
Ao.isLineBreakTag = _l;
function _l(n) {
  return [
    "BR",
    "WBR"
  ].includes(n.tagName);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isLineBreakTag = void 0;
  var e = Ao;
  Object.defineProperty(n, "isLineBreakTag", { enumerable: !0, get: function() {
    return e.isLineBreakTag;
  } });
})(Et);
var St = {}, No = {};
Object.defineProperty(No, "__esModule", { value: !0 });
No.isSingleTag = Bl;
function Bl(n) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(n.tagName);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isSingleTag = void 0;
  var e = No;
  Object.defineProperty(n, "isSingleTag", { enumerable: !0, get: function() {
    return e.isSingleTag;
  } });
})(St);
Object.defineProperty(Po, "__esModule", { value: !0 });
Po.getDeepestNode = sr;
var Ol = ke, Ll = Et, Ml = St;
function sr(n, e) {
  e === void 0 && (e = !1);
  var t = e ? "lastChild" : "firstChild", o = e ? "previousSibling" : "nextSibling";
  if (n.nodeType === Node.ELEMENT_NODE && n[t]) {
    var i = n[t];
    if ((0, Ml.isSingleTag)(i) && !(0, Ol.isNativeInput)(i) && !(0, Ll.isLineBreakTag)(i))
      if (i[o])
        i = i[o];
      else if (i.parentNode !== null && i.parentNode[o])
        i = i.parentNode[o];
      else
        return i.parentNode;
    return sr(i, e);
  }
  return n;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getDeepestNode = void 0;
  var e = Po;
  Object.defineProperty(n, "getDeepestNode", { enumerable: !0, get: function() {
    return e.getDeepestNode;
  } });
})(rr);
var ar = {}, Ro = {}, Je = Ve && Ve.__spreadArray || function(n, e, t) {
  if (t || arguments.length === 2)
    for (var o = 0, i = e.length, r; o < i; o++)
      (r || !(o in e)) && (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
  return n.concat(r || Array.prototype.slice.call(e));
};
Object.defineProperty(Ro, "__esModule", { value: !0 });
Ro.findAllInputs = Rl;
var Il = xt, Pl = Mo, Al = go, Nl = ke;
function Rl(n) {
  return Array.from(n.querySelectorAll((0, Al.allInputsSelector)())).reduce(function(e, t) {
    return (0, Nl.isNativeInput)(t) || (0, Il.containsOnlyInlineElements)(t) ? Je(Je([], e, !0), [t], !1) : Je(Je([], e, !0), (0, Pl.getDeepestBlockElements)(t), !0);
  }, []);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.findAllInputs = void 0;
  var e = Ro;
  Object.defineProperty(n, "findAllInputs", { enumerable: !0, get: function() {
    return e.findAllInputs;
  } });
})(ar);
var lr = {}, jo = {};
Object.defineProperty(jo, "__esModule", { value: !0 });
jo.isCollapsedWhitespaces = jl;
function jl(n) {
  return !/[^\t\n\r ]/.test(n);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isCollapsedWhitespaces = void 0;
  var e = jo;
  Object.defineProperty(n, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return e.isCollapsedWhitespaces;
  } });
})(lr);
var Do = {}, Fo = {};
Object.defineProperty(Fo, "__esModule", { value: !0 });
Fo.isElement = Fl;
var Dl = _o;
function Fl(n) {
  return (0, Dl.isNumber)(n) ? !1 : !!n && !!n.nodeType && n.nodeType === Node.ELEMENT_NODE;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isElement = void 0;
  var e = Fo;
  Object.defineProperty(n, "isElement", { enumerable: !0, get: function() {
    return e.isElement;
  } });
})(Do);
var cr = {}, Ho = {}, $o = {}, Uo = {};
Object.defineProperty(Uo, "__esModule", { value: !0 });
Uo.isLeaf = Hl;
function Hl(n) {
  return n === null ? !1 : n.childNodes.length === 0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isLeaf = void 0;
  var e = Uo;
  Object.defineProperty(n, "isLeaf", { enumerable: !0, get: function() {
    return e.isLeaf;
  } });
})($o);
var zo = {}, qo = {};
Object.defineProperty(qo, "__esModule", { value: !0 });
qo.isNodeEmpty = Wl;
var $l = Et, Ul = Do, zl = ke, ql = St;
function Wl(n, e) {
  var t = "";
  return (0, ql.isSingleTag)(n) && !(0, $l.isLineBreakTag)(n) ? !1 : ((0, Ul.isElement)(n) && (0, zl.isNativeInput)(n) ? t = n.value : n.textContent !== null && (t = n.textContent.replace("​", "")), e !== void 0 && (t = t.replace(new RegExp(e, "g"), "")), t.trim().length === 0);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isNodeEmpty = void 0;
  var e = qo;
  Object.defineProperty(n, "isNodeEmpty", { enumerable: !0, get: function() {
    return e.isNodeEmpty;
  } });
})(zo);
Object.defineProperty(Ho, "__esModule", { value: !0 });
Ho.isEmpty = Yl;
var Vl = $o, Kl = zo;
function Yl(n, e) {
  n.normalize();
  for (var t = [n]; t.length > 0; ) {
    var o = t.shift();
    if (o) {
      if (n = o, (0, Vl.isLeaf)(n) && !(0, Kl.isNodeEmpty)(n, e))
        return !1;
      t.push.apply(t, Array.from(n.childNodes));
    }
  }
  return !0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isEmpty = void 0;
  var e = Ho;
  Object.defineProperty(n, "isEmpty", { enumerable: !0, get: function() {
    return e.isEmpty;
  } });
})(cr);
var dr = {}, Wo = {};
Object.defineProperty(Wo, "__esModule", { value: !0 });
Wo.isFragment = Gl;
var Xl = _o;
function Gl(n) {
  return (0, Xl.isNumber)(n) ? !1 : !!n && !!n.nodeType && n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isFragment = void 0;
  var e = Wo;
  Object.defineProperty(n, "isFragment", { enumerable: !0, get: function() {
    return e.isFragment;
  } });
})(dr);
var ur = {}, Vo = {};
Object.defineProperty(Vo, "__esModule", { value: !0 });
Vo.isHTMLString = Jl;
var Zl = Ct;
function Jl(n) {
  var e = (0, Zl.make)("div");
  return e.innerHTML = n, e.childElementCount > 0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isHTMLString = void 0;
  var e = Vo;
  Object.defineProperty(n, "isHTMLString", { enumerable: !0, get: function() {
    return e.isHTMLString;
  } });
})(ur);
var hr = {}, Ko = {};
Object.defineProperty(Ko, "__esModule", { value: !0 });
Ko.offset = Ql;
function Ql(n) {
  var e = n.getBoundingClientRect(), t = window.pageXOffset || document.documentElement.scrollLeft, o = window.pageYOffset || document.documentElement.scrollTop, i = e.top + o, r = e.left + t;
  return {
    top: i,
    left: r,
    bottom: i + e.height,
    right: r + e.width
  };
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.offset = void 0;
  var e = Ko;
  Object.defineProperty(n, "offset", { enumerable: !0, get: function() {
    return e.offset;
  } });
})(hr);
var pr = {}, Yo = {};
Object.defineProperty(Yo, "__esModule", { value: !0 });
Yo.prepend = ec;
function ec(n, e) {
  Array.isArray(e) ? (e = e.reverse(), e.forEach(function(t) {
    return n.prepend(t);
  })) : n.prepend(e);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.prepend = void 0;
  var e = Yo;
  Object.defineProperty(n, "prepend", { enumerable: !0, get: function() {
    return e.prepend;
  } });
})(pr);
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.prepend = n.offset = n.make = n.isLineBreakTag = n.isSingleTag = n.isNodeEmpty = n.isLeaf = n.isHTMLString = n.isFragment = n.isEmpty = n.isElement = n.isContentEditable = n.isCollapsedWhitespaces = n.findAllInputs = n.isNativeInput = n.allInputsSelector = n.getDeepestNode = n.getDeepestBlockElements = n.getContentLength = n.fragmentToString = n.containsOnlyInlineElements = n.canSetCaret = n.calculateBaseline = n.blockElements = n.append = void 0;
  var e = go;
  Object.defineProperty(n, "allInputsSelector", { enumerable: !0, get: function() {
    return e.allInputsSelector;
  } });
  var t = ke;
  Object.defineProperty(n, "isNativeInput", { enumerable: !0, get: function() {
    return t.isNativeInput;
  } });
  var o = Zi;
  Object.defineProperty(n, "append", { enumerable: !0, get: function() {
    return o.append;
  } });
  var i = yo;
  Object.defineProperty(n, "blockElements", { enumerable: !0, get: function() {
    return i.blockElements;
  } });
  var r = Ji;
  Object.defineProperty(n, "calculateBaseline", { enumerable: !0, get: function() {
    return r.calculateBaseline;
  } });
  var s = Qi;
  Object.defineProperty(n, "canSetCaret", { enumerable: !0, get: function() {
    return s.canSetCaret;
  } });
  var a = xt;
  Object.defineProperty(n, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return a.containsOnlyInlineElements;
  } });
  var c = or;
  Object.defineProperty(n, "fragmentToString", { enumerable: !0, get: function() {
    return c.fragmentToString;
  } });
  var l = nr;
  Object.defineProperty(n, "getContentLength", { enumerable: !0, get: function() {
    return l.getContentLength;
  } });
  var u = Mo;
  Object.defineProperty(n, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return u.getDeepestBlockElements;
  } });
  var d = rr;
  Object.defineProperty(n, "getDeepestNode", { enumerable: !0, get: function() {
    return d.getDeepestNode;
  } });
  var g = ar;
  Object.defineProperty(n, "findAllInputs", { enumerable: !0, get: function() {
    return g.findAllInputs;
  } });
  var v = lr;
  Object.defineProperty(n, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return v.isCollapsedWhitespaces;
  } });
  var f = Co;
  Object.defineProperty(n, "isContentEditable", { enumerable: !0, get: function() {
    return f.isContentEditable;
  } });
  var h = Do;
  Object.defineProperty(n, "isElement", { enumerable: !0, get: function() {
    return h.isElement;
  } });
  var p = cr;
  Object.defineProperty(n, "isEmpty", { enumerable: !0, get: function() {
    return p.isEmpty;
  } });
  var m = dr;
  Object.defineProperty(n, "isFragment", { enumerable: !0, get: function() {
    return m.isFragment;
  } });
  var b = ur;
  Object.defineProperty(n, "isHTMLString", { enumerable: !0, get: function() {
    return b.isHTMLString;
  } });
  var w = $o;
  Object.defineProperty(n, "isLeaf", { enumerable: !0, get: function() {
    return w.isLeaf;
  } });
  var k = zo;
  Object.defineProperty(n, "isNodeEmpty", { enumerable: !0, get: function() {
    return k.isNodeEmpty;
  } });
  var y = Et;
  Object.defineProperty(n, "isLineBreakTag", { enumerable: !0, get: function() {
    return y.isLineBreakTag;
  } });
  var S = St;
  Object.defineProperty(n, "isSingleTag", { enumerable: !0, get: function() {
    return S.isSingleTag;
  } });
  var O = Ct;
  Object.defineProperty(n, "make", { enumerable: !0, get: function() {
    return O.make;
  } });
  var E = hr;
  Object.defineProperty(n, "offset", { enumerable: !0, get: function() {
    return E.offset;
  } });
  var C = pr;
  Object.defineProperty(n, "prepend", { enumerable: !0, get: function() {
    return C.prepend;
  } });
})(we);
var Tt = {};
Object.defineProperty(Tt, "__esModule", { value: !0 });
Tt.getContenteditableSlice = oc;
var tc = we;
function oc(n, e, t, o, i) {
  var r;
  i === void 0 && (i = !1);
  var s = document.createRange();
  if (o === "left" ? (s.setStart(n, 0), s.setEnd(e, t)) : (s.setStart(e, t), s.setEnd(n, n.childNodes.length)), i === !0) {
    var a = s.extractContents();
    return (0, tc.fragmentToString)(a);
  }
  var c = s.cloneContents(), l = document.createElement("div");
  l.appendChild(c);
  var u = (r = l.textContent) !== null && r !== void 0 ? r : "";
  return u;
}
Object.defineProperty(kt, "__esModule", { value: !0 });
kt.checkContenteditableSliceForEmptiness = rc;
var nc = we, ic = Tt;
function rc(n, e, t, o) {
  var i = (0, ic.getContenteditableSlice)(n, e, t, o);
  return (0, nc.isCollapsedWhitespaces)(i);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.checkContenteditableSliceForEmptiness = void 0;
  var e = kt;
  Object.defineProperty(n, "checkContenteditableSliceForEmptiness", { enumerable: !0, get: function() {
    return e.checkContenteditableSliceForEmptiness;
  } });
})(fo);
var fr = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getContenteditableSlice = void 0;
  var e = Tt;
  Object.defineProperty(n, "getContenteditableSlice", { enumerable: !0, get: function() {
    return e.getContenteditableSlice;
  } });
})(fr);
var gr = {}, Xo = {};
Object.defineProperty(Xo, "__esModule", { value: !0 });
Xo.focus = ac;
var sc = we;
function ac(n, e) {
  var t, o;
  if (e === void 0 && (e = !0), (0, sc.isNativeInput)(n)) {
    n.focus();
    var i = e ? 0 : n.value.length;
    n.setSelectionRange(i, i);
  } else {
    var r = document.createRange(), s = window.getSelection();
    if (!s)
      return;
    var a = function(g) {
      var v = document.createTextNode("");
      g.appendChild(v), r.setStart(v, 0), r.setEnd(v, 0);
    }, c = function(g) {
      return g != null;
    }, l = n.childNodes, u = e ? l[0] : l[l.length - 1];
    if (c(u)) {
      for (; c(u) && u.nodeType !== Node.TEXT_NODE; )
        u = e ? u.firstChild : u.lastChild;
      if (c(u) && u.nodeType === Node.TEXT_NODE) {
        var d = (o = (t = u.textContent) === null || t === void 0 ? void 0 : t.length) !== null && o !== void 0 ? o : 0, i = e ? 0 : d;
        r.setStart(u, i), r.setEnd(u, i);
      } else
        a(n);
    } else
      a(n);
    s.removeAllRanges(), s.addRange(r);
  }
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.focus = void 0;
  var e = Xo;
  Object.defineProperty(n, "focus", { enumerable: !0, get: function() {
    return e.focus;
  } });
})(gr);
var Go = {}, _t = {};
Object.defineProperty(_t, "__esModule", { value: !0 });
_t.getCaretNodeAndOffset = lc;
function lc() {
  var n = window.getSelection();
  if (n === null)
    return [null, 0];
  var e = n.focusNode, t = n.focusOffset;
  return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[t] !== void 0 ? (e = e.childNodes[t], t = 0) : (e = e.childNodes[t - 1], e.textContent !== null && (t = e.textContent.length))), [e, t]);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getCaretNodeAndOffset = void 0;
  var e = _t;
  Object.defineProperty(n, "getCaretNodeAndOffset", { enumerable: !0, get: function() {
    return e.getCaretNodeAndOffset;
  } });
})(Go);
var mr = {}, Bt = {};
Object.defineProperty(Bt, "__esModule", { value: !0 });
Bt.getRange = cc;
function cc() {
  var n = window.getSelection();
  return n && n.rangeCount ? n.getRangeAt(0) : null;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getRange = void 0;
  var e = Bt;
  Object.defineProperty(n, "getRange", { enumerable: !0, get: function() {
    return e.getRange;
  } });
})(mr);
var br = {}, Zo = {};
Object.defineProperty(Zo, "__esModule", { value: !0 });
Zo.isCaretAtEndOfInput = hc;
var Jn = we, dc = Go, uc = fo;
function hc(n) {
  var e = (0, Jn.getDeepestNode)(n, !0);
  if (e === null)
    return !0;
  if ((0, Jn.isNativeInput)(e))
    return e.selectionEnd === e.value.length;
  var t = (0, dc.getCaretNodeAndOffset)(), o = t[0], i = t[1];
  return o === null ? !1 : (0, uc.checkContenteditableSliceForEmptiness)(n, o, i, "right");
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isCaretAtEndOfInput = void 0;
  var e = Zo;
  Object.defineProperty(n, "isCaretAtEndOfInput", { enumerable: !0, get: function() {
    return e.isCaretAtEndOfInput;
  } });
})(br);
var vr = {}, Jo = {};
Object.defineProperty(Jo, "__esModule", { value: !0 });
Jo.isCaretAtStartOfInput = gc;
var Qe = we, pc = _t, fc = kt;
function gc(n) {
  var e = (0, Qe.getDeepestNode)(n);
  if (e === null || (0, Qe.isEmpty)(n))
    return !0;
  if ((0, Qe.isNativeInput)(e))
    return e.selectionEnd === 0;
  if ((0, Qe.isEmpty)(n))
    return !0;
  var t = (0, pc.getCaretNodeAndOffset)(), o = t[0], i = t[1];
  return o === null ? !1 : (0, fc.checkContenteditableSliceForEmptiness)(n, o, i, "left");
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isCaretAtStartOfInput = void 0;
  var e = Jo;
  Object.defineProperty(n, "isCaretAtStartOfInput", { enumerable: !0, get: function() {
    return e.isCaretAtStartOfInput;
  } });
})(vr);
var yr = {}, Qo = {};
Object.defineProperty(Qo, "__esModule", { value: !0 });
Qo.save = vc;
var mc = we, bc = Bt;
function vc() {
  var n = (0, bc.getRange)(), e = (0, mc.make)("span");
  if (e.id = "cursor", e.hidden = !0, !!n)
    return n.insertNode(e), function() {
      var t = window.getSelection();
      t && (n.setStartAfter(e), n.setEndAfter(e), t.removeAllRanges(), t.addRange(n), setTimeout(function() {
        e.remove();
      }, 150));
    };
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.save = void 0;
  var e = Qo;
  Object.defineProperty(n, "save", { enumerable: !0, get: function() {
    return e.save;
  } });
})(yr);
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.save = n.isCaretAtStartOfInput = n.isCaretAtEndOfInput = n.getRange = n.getCaretNodeAndOffset = n.focus = n.getContenteditableSlice = n.checkContenteditableSliceForEmptiness = void 0;
  var e = fo;
  Object.defineProperty(n, "checkContenteditableSliceForEmptiness", { enumerable: !0, get: function() {
    return e.checkContenteditableSliceForEmptiness;
  } });
  var t = fr;
  Object.defineProperty(n, "getContenteditableSlice", { enumerable: !0, get: function() {
    return t.getContenteditableSlice;
  } });
  var o = gr;
  Object.defineProperty(n, "focus", { enumerable: !0, get: function() {
    return o.focus;
  } });
  var i = Go;
  Object.defineProperty(n, "getCaretNodeAndOffset", { enumerable: !0, get: function() {
    return i.getCaretNodeAndOffset;
  } });
  var r = mr;
  Object.defineProperty(n, "getRange", { enumerable: !0, get: function() {
    return r.getRange;
  } });
  var s = br;
  Object.defineProperty(n, "isCaretAtEndOfInput", { enumerable: !0, get: function() {
    return s.isCaretAtEndOfInput;
  } });
  var a = vr;
  Object.defineProperty(n, "isCaretAtStartOfInput", { enumerable: !0, get: function() {
    return a.isCaretAtStartOfInput;
  } });
  var c = yr;
  Object.defineProperty(n, "save", { enumerable: !0, get: function() {
    return c.save;
  } });
})(Gi);
class yc extends M {
  /**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  keydown(e) {
    switch (this.beforeKeydownProcessing(e), e.keyCode) {
      case B.BACKSPACE:
        this.backspace(e);
        break;
      case B.DELETE:
        this.delete(e);
        break;
      case B.ENTER:
        this.enter(e);
        break;
      case B.DOWN:
      case B.RIGHT:
        this.arrowRightAndDown(e);
        break;
      case B.UP:
      case B.LEFT:
        this.arrowLeftAndUp(e);
        break;
      case B.TAB:
        this.tabPressed(e);
        break;
    }
    e.key === "/" && !e.ctrlKey && !e.metaKey && this.slashPressed(e), e.code === "Slash" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), this.commandSlashPressed());
  }
  /**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */
  beforeKeydownProcessing(e) {
    this.needToolbarClosing(e) && bi(e.keyCode) && (this.Editor.Toolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || this.Editor.BlockSelection.clearSelection(e));
  }
  /**
   * Key up on Block:
   * - shows Inline Toolbar if something selected
   * - shows conversion toolbar with 85% of block selection
   *
   * @param {KeyboardEvent} event - keyup event
   */
  keyup(e) {
    e.shiftKey || this.Editor.UI.checkEmptiness();
  }
  /**
   * Add drop target styles
   *
   * @param {DragEvent} event - drag over event
   */
  dragOver(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !0;
  }
  /**
   * Remove drop target style
   *
   * @param {DragEvent} event - drag leave event
   */
  dragLeave(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !1;
  }
  /**
   * Copying selected blocks
   * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandC(e) {
    const { BlockSelection: t } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e);
  }
  /**
   * Copy and Delete selected Blocks
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandX(e) {
    const { BlockSelection: t, BlockManager: o, Caret: i } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
      const r = o.removeSelectedBlocks(), s = o.insertDefaultBlockAtIndex(r, !0);
      i.setToBlock(s, i.positions.START), t.clearSelection(e);
    });
  }
  /**
   * Tab pressed inside a Block.
   *
   * @param {KeyboardEvent} event - keydown
   */
  tabPressed(e) {
    const { InlineToolbar: t, Caret: o } = this.Editor;
    t.opened || (e.shiftKey ? o.navigatePrevious(!0) : o.navigateNext(!0)) && e.preventDefault();
  }
  /**
   * '/' + 'command' keydown inside a Block
   */
  commandSlashPressed() {
    this.Editor.BlockSelection.selectedBlocks.length > 1 || this.activateBlockSettings();
  }
  /**
   * '/' keydown inside a Block
   *
   * @param event - keydown
   */
  slashPressed(e) {
    !this.Editor.UI.nodes.wrapper.contains(e.target) || !this.Editor.BlockManager.currentBlock.isEmpty || (e.preventDefault(), this.Editor.Caret.insertContentAtCaretPosition("/"), this.activateToolbox());
  }
  /**
   * ENTER pressed on block
   *
   * @param {KeyboardEvent} event - keydown
   */
  enter(e) {
    const { BlockManager: t, UI: o } = this.Editor, i = t.currentBlock;
    if (i === void 0 || i.tool.isLineBreaksEnabled || o.someToolbarOpened && o.someFlipperButtonFocused || e.shiftKey && !Yt)
      return;
    let r = i;
    i.currentInput !== void 0 && nt(i.currentInput) && !i.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : i.currentInput && it(i.currentInput) ? r = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : r = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(r), this.Editor.Toolbar.moveAndOpen(r), e.preventDefault();
  }
  /**
   * Handle backspace keydown on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  backspace(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: i, previousBlock: r } = t;
    if (!(i === void 0 || !_.isCollapsed || !i.currentInput || !nt(i.currentInput))) {
      if (e.preventDefault(), this.Editor.Toolbar.close(), i.currentInput !== i.firstInput) {
        o.navigatePrevious();
        return;
      }
      if (r !== null) {
        if (r.isEmpty) {
          t.removeBlock(r);
          return;
        }
        if (i.isEmpty) {
          t.removeBlock(i);
          const s = t.currentBlock;
          o.setToBlock(s, o.positions.END);
          return;
        }
        Vn(r, i) ? this.mergeBlocks(r, i) : o.setToBlock(r, o.positions.END);
      }
    }
  }
  /**
   * Handles delete keydown on Block
   * Removes char after the caret.
   * If caret is at the end of the block, merge next block with current
   *
   * @param {KeyboardEvent} event - keydown
   */
  delete(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: i, nextBlock: r } = t;
    if (!(!_.isCollapsed || !it(i.currentInput))) {
      if (e.preventDefault(), this.Editor.Toolbar.close(), i.currentInput !== i.lastInput) {
        o.navigateNext();
        return;
      }
      if (r !== null) {
        if (r.isEmpty) {
          t.removeBlock(r);
          return;
        }
        if (i.isEmpty) {
          t.removeBlock(i), o.setToBlock(r, o.positions.START);
          return;
        }
        Vn(i, r) ? this.mergeBlocks(i, r) : o.setToBlock(r, o.positions.START);
      }
    }
  }
  /**
   * Merge passed Blocks
   *
   * @param targetBlock - to which Block we want to merge
   * @param blockToMerge - what Block we want to merge
   */
  mergeBlocks(e, t) {
    const { BlockManager: o, Toolbar: i } = this.Editor;
    e.lastInput !== void 0 && (Gi.focus(e.lastInput, !1), o.mergeBlocks(e, t).then(() => {
      i.close();
    }));
  }
  /**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowRightAndDown(e) {
    const t = gt.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === B.TAB);
    if (this.Editor.UI.someToolbarOpened && t)
      return;
    this.Editor.Toolbar.close();
    const { currentBlock: o } = this.Editor.BlockManager, i = (o?.currentInput !== void 0 ? it(o.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === B.DOWN && i) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState();
      return;
    }
    if (e.keyCode === B.DOWN || e.keyCode === B.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) {
      e.preventDefault();
      return;
    }
    dt(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Handle left and up keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowLeftAndUp(e) {
    if (this.Editor.UI.someToolbarOpened) {
      if (gt.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === B.TAB))
        return;
      this.Editor.UI.closeAllToolbars();
    }
    this.Editor.Toolbar.close();
    const { currentBlock: t } = this.Editor.BlockManager, o = (t?.currentInput !== void 0 ? nt(t.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === B.UP && o) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1);
      return;
    }
    if (e.keyCode === B.UP || e.keyCode === B.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) {
      e.preventDefault();
      return;
    }
    dt(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  needToolbarClosing(e) {
    const t = e.keyCode === B.ENTER && this.Editor.Toolbar.toolbox.opened, o = e.keyCode === B.ENTER && this.Editor.BlockSettings.opened, i = e.keyCode === B.ENTER && this.Editor.InlineToolbar.opened, r = e.keyCode === B.TAB;
    return !(e.shiftKey || r || t || o || i);
  }
  /**
   * If Toolbox is not open, then just open it and show plus button
   */
  activateToolbox() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
  }
  /**
   * Open Toolbar and show BlockSettings before flipping Tools
   */
  activateBlockSettings() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
  }
}
let $t = class {
  /**
   * @class
   * @param {HTMLElement} workingArea — editor`s working node
   */
  constructor(e) {
    this.blocks = [], this.workingArea = e;
  }
  /**
   * Get length of Block instances array
   *
   * @returns {number}
   */
  get length() {
    return this.blocks.length;
  }
  /**
   * Get Block instances array
   *
   * @returns {Block[]}
   */
  get array() {
    return this.blocks;
  }
  /**
   * Get blocks html elements array
   *
   * @returns {HTMLElement[]}
   */
  get nodes() {
    return vi(this.workingArea.children);
  }
  /**
   * Proxy trap to implement array-like setter
   *
   * @example
   * blocks[0] = new Block(...)
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — block index or any Blocks class property key to set
   * @param {Block} value — value to set
   * @returns {boolean}
   */
  static set(e, t, o) {
    return isNaN(Number(t)) ? (Reflect.set(e, t, o), !0) : (e.insert(+t, o), !0);
  }
  /**
   * Proxy trap to implement array-like getter
   *
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — Blocks class property key
   * @returns {Block|*}
   */
  static get(e, t) {
    return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
  }
  /**
   * Push new Block to the blocks array and append it to working area
   *
   * @param {Block} block - Block to add
   */
  push(e) {
    this.blocks.push(e), this.insertToDOM(e);
  }
  /**
   * Swaps blocks with indexes first and second
   *
   * @param {number} first - first block index
   * @param {number} second - second block index
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    const o = this.blocks[t];
    x.swap(this.blocks[e].holder, o.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o;
  }
  /**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */
  move(e, t) {
    const o = this.blocks.splice(t, 1)[0], i = e - 1, r = Math.max(0, i), s = this.blocks[r];
    e > 0 ? this.insertToDOM(o, "afterend", s) : this.insertToDOM(o, "beforebegin", s), this.blocks.splice(e, 0, o);
    const a = this.composeBlockEvent("move", {
      fromIndex: t,
      toIndex: e
    });
    o.call(se.MOVED, a);
  }
  /**
   * Insert new Block at passed index
   *
   * @param {number} index — index to insert Block
   * @param {Block} block — Block to insert
   * @param {boolean} replace — it true, replace block on given index
   */
  insert(e, t, o = !1) {
    if (!this.length) {
      this.push(t);
      return;
    }
    e > this.length && (e = this.length), o && (this.blocks[e].holder.remove(), this.blocks[e].call(se.REMOVED));
    const i = o ? 1 : 0;
    if (this.blocks.splice(e, i, t), e > 0) {
      const r = this.blocks[e - 1];
      this.insertToDOM(t, "afterend", r);
    } else {
      const r = this.blocks[e + 1];
      r ? this.insertToDOM(t, "beforebegin", r) : this.insertToDOM(t);
    }
  }
  /**
   * Replaces block under passed index with passed block
   *
   * @param index - index of existed block
   * @param block - new block
   */
  replace(e, t) {
    if (this.blocks[e] === void 0)
      throw Error("Incorrect index");
    this.blocks[e].holder.replaceWith(t.holder), this.blocks[e] = t;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index to insert blocks at
   */
  insertMany(e, t) {
    const o = new DocumentFragment();
    for (const i of e)
      o.appendChild(i.holder);
    if (this.length > 0) {
      if (t > 0) {
        const i = Math.min(t - 1, this.length - 1);
        this.blocks[i].holder.after(o);
      } else
        t === 0 && this.workingArea.prepend(o);
      this.blocks.splice(t, 0, ...e);
    } else
      this.blocks.push(...e), this.workingArea.appendChild(o);
    e.forEach((i) => i.call(se.RENDERED));
  }
  /**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */
  remove(e) {
    isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(se.REMOVED), this.blocks.splice(e, 1);
  }
  /**
   * Remove all blocks
   */
  removeAll() {
    this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(se.REMOVED)), this.blocks.length = 0;
  }
  /**
   * Insert Block after passed target
   *
   * @todo decide if this method is necessary
   * @param {Block} targetBlock — target after which Block should be inserted
   * @param {Block} newBlock — Block to insert
   */
  insertAfter(e, t) {
    const o = this.blocks.indexOf(e);
    this.insert(o + 1, t);
  }
  /**
   * Get Block by index
   *
   * @param {number} index — Block index
   * @returns {Block}
   */
  get(e) {
    return this.blocks[e];
  }
  /**
   * Return index of passed Block
   *
   * @param {Block} block - Block to find
   * @returns {number}
   */
  indexOf(e) {
    return this.blocks.indexOf(e);
  }
  /**
   * Insert new Block into DOM
   *
   * @param {Block} block - Block to insert
   * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
   * @param {Block} target — Block related to position
   */
  insertToDOM(e, t, o) {
    t ? o.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(se.RENDERED);
  }
  /**
   * Composes Block event with passed type and details
   *
   * @param {string} type - event type
   * @param {object} detail - event detail
   */
  composeBlockEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
};
const Qn = "block-removed", ei = "block-added", wc = "block-moved", ti = "block-changed";
class kc {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   *
   * @param operation - promise should be added to queue
   */
  add(e) {
    return new Promise((t, o) => {
      this.completed = this.completed.then(e).then(t).catch(o);
    });
  }
}
class xc extends M {
  constructor() {
    super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
  }
  /**
   * Returns current Block index
   *
   * @returns {number}
   */
  get currentBlockIndex() {
    return this._currentBlockIndex;
  }
  /**
   * Set current Block index and fire Block lifecycle callbacks
   *
   * @param {number} newIndex - index of Block to set as current
   */
  set currentBlockIndex(e) {
    this._currentBlockIndex = e;
  }
  /**
   * returns first Block
   *
   * @returns {Block}
   */
  get firstBlock() {
    return this._blocks[0];
  }
  /**
   * returns last Block
   *
   * @returns {Block}
   */
  get lastBlock() {
    return this._blocks[this._blocks.length - 1];
  }
  /**
   * Get current Block instance
   *
   * @returns {Block}
   */
  get currentBlock() {
    return this._blocks[this.currentBlockIndex];
  }
  /**
   * Set passed Block as a current
   *
   * @param block - block to set as a current
   */
  set currentBlock(e) {
    this.currentBlockIndex = this.getBlockIndex(e);
  }
  /**
   * Returns next Block instance
   *
   * @returns {Block|null}
   */
  get nextBlock() {
    return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
  }
  /**
   * Return first Block with inputs after current Block
   *
   * @returns {Block | undefined}
   */
  get nextContentfulBlock() {
    return this.blocks.slice(this.currentBlockIndex + 1).find((e) => !!e.inputs.length);
  }
  /**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */
  get previousContentfulBlock() {
    return this.blocks.slice(0, this.currentBlockIndex).reverse().find((e) => !!e.inputs.length);
  }
  /**
   * Returns previous Block instance
   *
   * @returns {Block|null}
   */
  get previousBlock() {
    return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
  }
  /**
   * Get array of Block instances
   *
   * @returns {Block[]} {@link Blocks#array}
   */
  get blocks() {
    return this._blocks.array;
  }
  /**
   * Check if each Block is empty
   *
   * @returns {boolean}
   */
  get isEditorEmpty() {
    return this.blocks.every((e) => e.isEmpty);
  }
  /**
   * Should be called after Editor.UI preparation
   * Define this._blocks property
   */
  prepare() {
    const e = new $t(this.Editor.UI.nodes.redactor);
    this._blocks = new Proxy(e, {
      set: $t.set,
      get: $t.get
    }), this.listeners.on(
      document,
      "copy",
      (t) => this.Editor.BlockEvents.handleCommandC(t)
    );
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - Unbind event handlers from created Blocks
   *
   * if readOnly is false:
   *  - Bind event handlers to all existing Blocks
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Creates Block instance by tool name
   *
   * @param {object} options - block creation options
   * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
   * @param {string} [options.id] - unique id for this block
   * @param {BlockToolData} [options.data] - constructor params
   * @returns {Block}
   */
  composeBlock({
    tool: e,
    data: t = {},
    id: o = void 0,
    tunes: i = {}
  }) {
    const r = this.Editor.ReadOnly.isEnabled, s = this.Editor.Tools.blockTools.get(e), a = new le({
      id: o,
      data: t,
      tool: s,
      api: this.Editor.API,
      readOnly: r,
      tunesData: i
    }, this.eventsDispatcher);
    return r || window.requestIdleCallback(() => {
      this.bindBlockEvents(a);
    }, { timeout: 2e3 }), a;
  }
  /**
   * Insert new block into _blocks
   *
   * @param {object} options - insert options
   * @param {string} [options.id] - block's unique id
   * @param {string} [options.tool] - plugin name, by default method inserts the default block type
   * @param {object} [options.data] - plugin data
   * @param {number} [options.index] - index where to insert new Block
   * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
   * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
   * @returns {Block}
   */
  insert({
    id: e = void 0,
    tool: t = this.config.defaultBlock,
    data: o = {},
    index: i,
    needToFocus: r = !0,
    replace: s = !1,
    tunes: a = {}
  } = {}) {
    let c = i;
    c === void 0 && (c = this.currentBlockIndex + (s ? 0 : 1));
    const l = this.composeBlock({
      id: e,
      tool: t,
      data: o,
      tunes: a
    });
    return s && this.blockDidMutated(Qn, this.getBlockByIndex(c), {
      index: c
    }), this._blocks.insert(c, l, s), this.blockDidMutated(ei, l, {
      index: c
    }), r ? this.currentBlockIndex = c : c <= this.currentBlockIndex && this.currentBlockIndex++, l;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index where to insert
   */
  insertMany(e, t = 0) {
    this._blocks.insertMany(e, t);
  }
  /**
   * Update Block data.
   *
   * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
   * Should not trigger 'block-removed' or 'block-added' events.
   *
   * If neither data nor tunes is provided, return the provided block instead.
   *
   * @param block - block to update
   * @param data - (optional) new data
   * @param tunes - (optional) tune data
   */
  async update(e, t, o) {
    if (!t && !o)
      return e;
    const i = await e.data, r = this.composeBlock({
      id: e.id,
      tool: e.name,
      data: Object.assign({}, i, t ?? {}),
      tunes: o ?? e.tunes
    }), s = this.getBlockIndex(e);
    return this._blocks.replace(s, r), this.blockDidMutated(ti, r, {
      index: s
    }), r;
  }
  /**
   * Replace passed Block with the new one with specified Tool and data
   *
   * @param block - block to replace
   * @param newTool - new Tool name
   * @param data - new Tool data
   */
  replace(e, t, o) {
    const i = this.getBlockIndex(e);
    return this.insert({
      tool: t,
      data: o,
      index: i,
      replace: !0
    });
  }
  /**
   * Insert pasted content. Call onPaste callback after insert.
   *
   * @param {string} toolName - name of Tool to insert
   * @param {PasteEvent} pasteEvent - pasted data
   * @param {boolean} replace - should replace current block
   */
  paste(e, t, o = !1) {
    const i = this.insert({
      tool: e,
      replace: o
    });
    try {
      window.requestIdleCallback(() => {
        i.call(se.ON_PASTE, t);
      });
    } catch (r) {
      N(`${e}: onPaste callback call is failed`, "error", r);
    }
    return i;
  }
  /**
   * Insert new default block at passed index
   *
   * @param {number} index - index where Block should be inserted
   * @param {boolean} needToFocus - if true, updates current Block index
   *
   * TODO: Remove method and use insert() with index instead (?)
   * @returns {Block} inserted Block
   */
  insertDefaultBlockAtIndex(e, t = !1) {
    const o = this.composeBlock({ tool: this.config.defaultBlock });
    return this._blocks[e] = o, this.blockDidMutated(ei, o, {
      index: e
    }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o;
  }
  /**
   * Always inserts at the end
   *
   * @returns {Block}
   */
  insertAtEnd() {
    return this.currentBlockIndex = this.blocks.length - 1, this.insert();
  }
  /**
   * Merge two blocks
   *
   * @param {Block} targetBlock - previous block will be append to this block
   * @param {Block} blockToMerge - block that will be merged with target block
   * @returns {Promise} - the sequence that can be continued
   */
  async mergeBlocks(e, t) {
    let o;
    if (e.name === t.name && e.mergeable) {
      const i = await t.data;
      if (J(i)) {
        console.error("Could not merge Block. Failed to extract original Block data.");
        return;
      }
      const [r] = so([i], e.tool.sanitizeConfig);
      o = r;
    } else if (e.mergeable && ht(t, "export") && ht(e, "import")) {
      const i = await t.exportDataAsString(), r = oe(i, e.tool.sanitizeConfig);
      o = Kn(r, e.tool.conversionConfig);
    }
    o !== void 0 && (await e.mergeWith(o), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e));
  }
  /**
   * Remove passed Block
   *
   * @param block - Block to remove
   * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
   */
  removeBlock(e, t = !0) {
    return new Promise((o) => {
      const i = this._blocks.indexOf(e);
      if (!this.validateIndex(i))
        throw new Error("Can't find a Block to remove");
      this._blocks.remove(i), e.destroy(), this.blockDidMutated(Qn, e, {
        index: i
      }), this.currentBlockIndex >= i && this.currentBlockIndex--, this.blocks.length ? i === 0 && (this.currentBlockIndex = 0) : (this.unsetCurrentBlock(), t && this.insert()), o();
    });
  }
  /**
   * Remove only selected Blocks
   * and returns first Block index where started removing...
   *
   * @returns {number|undefined}
   */
  removeSelectedBlocks() {
    let e;
    for (let t = this.blocks.length - 1; t >= 0; t--)
      this.blocks[t].selected && (this.removeBlock(this.blocks[t]), e = t);
    return e;
  }
  /**
   * Attention!
   * After removing insert the new default typed Block and focus on it
   * Removes all blocks
   */
  removeAllBlocks() {
    for (let e = this.blocks.length - 1; e >= 0; e--)
      this._blocks.remove(e);
    this.unsetCurrentBlock(), this.insert(), this.currentBlock.firstInput.focus();
  }
  /**
   * Split current Block
   * 1. Extract content from Caret position to the Block`s end
   * 2. Insert a new Block below current one with extracted content
   *
   * @returns {Block}
   */
  split() {
    const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t = x.make("div");
    t.appendChild(e);
    const o = {
      text: x.isEmpty(t) ? "" : t.innerHTML
    };
    return this.insert({ data: o });
  }
  /**
   * Returns Block by passed index
   *
   * @param {number} index - index to get. -1 to get last
   * @returns {Block}
   */
  getBlockByIndex(e) {
    return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
  }
  /**
   * Returns an index for passed Block
   *
   * @param block - block to find index
   */
  getBlockIndex(e) {
    return this._blocks.indexOf(e);
  }
  /**
   * Returns the Block by passed id
   *
   * @param id - id of block to get
   * @returns {Block}
   */
  getBlockById(e) {
    return this._blocks.array.find((t) => t.id === e);
  }
  /**
   * Get Block instance by html element
   *
   * @param {Node} element - html element to get Block by
   */
  getBlock(e) {
    x.isElement(e) || (e = e.parentNode);
    const t = this._blocks.nodes, o = e.closest(`.${le.CSS.wrapper}`), i = t.indexOf(o);
    if (i >= 0)
      return this._blocks[i];
  }
  /**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */
  setCurrentBlockByChildNode(e) {
    x.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${le.CSS.wrapper}`);
    if (!t)
      return;
    const o = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
    if (o != null && o.isEqualNode(this.Editor.UI.nodes.wrapper))
      return this.currentBlockIndex = this._blocks.nodes.indexOf(t), this.currentBlock.updateCurrentInput(), this.currentBlock;
  }
  /**
   * Return block which contents passed node
   *
   * @param {Node} childNode - node to get Block by
   * @returns {Block}
   */
  getBlockByChildNode(e) {
    if (!e || !(e instanceof Node))
      return;
    x.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${le.CSS.wrapper}`);
    return this.blocks.find((o) => o.holder === t);
  }
  /**
   * Swap Blocks Position
   *
   * @param {number} fromIndex - index of first block
   * @param {number} toIndex - index of second block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    this._blocks.swap(e, t), this.currentBlockIndex = t;
  }
  /**
   * Move a block to a new index
   *
   * @param {number} toIndex - index where to move Block
   * @param {number} fromIndex - index of Block to move
   */
  move(e, t = this.currentBlockIndex) {
    if (isNaN(e) || isNaN(t)) {
      N("Warning during 'move' call: incorrect indices provided.", "warn");
      return;
    }
    if (!this.validateIndex(e) || !this.validateIndex(t)) {
      N("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
      return;
    }
    this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(wc, this.currentBlock, {
      fromIndex: t,
      toIndex: e
    });
  }
  /**
   * Converts passed Block to the new Tool
   * Uses Conversion Config
   *
   * @param blockToConvert - Block that should be converted
   * @param targetToolName - name of the Tool to convert to
   * @param blockDataOverrides - optional new Block data overrides
   */
  async convert(e, t, o) {
    if (!await e.save())
      throw new Error("Could not convert Block. Failed to extract original Block data.");
    const i = this.Editor.Tools.blockTools.get(t);
    if (!i)
      throw new Error(`Could not convert Block. Tool «${t}» not found.`);
    const r = await e.exportDataAsString(), s = oe(
      r,
      i.sanitizeConfig
    );
    let a = Kn(s, i.conversionConfig, i.settings);
    return o && (a = Object.assign(a, o)), this.replace(e, i.name, a);
  }
  /**
   * Sets current Block Index -1 which means unknown
   * and clear highlights
   */
  unsetCurrentBlock() {
    this.currentBlockIndex = -1;
  }
  /**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */
  async clear(e = !1) {
    const t = new kc();
    [...this.blocks].forEach((o) => {
      t.add(async () => {
        await this.removeBlock(o, !1);
      });
    }), await t.completed, this.unsetCurrentBlock(), e && this.insert(), this.Editor.UI.checkEmptiness();
  }
  /**
   * Cleans up all the block tools' resources
   * This is called when editor is destroyed
   */
  async destroy() {
    await Promise.all(this.blocks.map((e) => e.destroy()));
  }
  /**
   * Bind Block events
   *
   * @param {Block} block - Block to which event should be bound
   */
  bindBlockEvents(e) {
    const { BlockEvents: t } = this.Editor;
    this.readOnlyMutableListeners.on(e.holder, "keydown", (o) => {
      t.keydown(o);
    }), this.readOnlyMutableListeners.on(e.holder, "keyup", (o) => {
      t.keyup(o);
    }), this.readOnlyMutableListeners.on(e.holder, "dragover", (o) => {
      t.dragOver(o);
    }), this.readOnlyMutableListeners.on(e.holder, "dragleave", (o) => {
      t.dragLeave(o);
    }), e.on("didMutated", (o) => this.blockDidMutated(ti, o, {
      index: this.getBlockIndex(o)
    }));
  }
  /**
   * Disable mutable handlers and bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Enables all module handlers and bindings for all Blocks
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      document,
      "cut",
      (e) => this.Editor.BlockEvents.handleCommandX(e)
    ), this.blocks.forEach((e) => {
      this.bindBlockEvents(e);
    });
  }
  /**
   * Validates that the given index is not lower than 0 or higher than the amount of blocks
   *
   * @param {number} index - index of blocks array to validate
   * @returns {boolean}
   */
  validateIndex(e) {
    return !(e < 0 || e >= this._blocks.length);
  }
  /**
   * Block mutation callback
   *
   * @param mutationType - what happened with block
   * @param block - mutated block
   * @param detailData - additional data to pass with change event
   */
  blockDidMutated(e, t, o) {
    const i = new CustomEvent(e, {
      detail: {
        target: new ie(t),
        ...o
      }
    });
    return this.eventsDispatcher.emit(Si, {
      event: i
    }), t;
  }
}
class Cc extends M {
  constructor() {
    super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
  }
  /**
   * Sanitizer Config
   *
   * @returns {SanitizerConfig}
   */
  get sanitizerConfig() {
    return {
      p: {},
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      ol: {},
      ul: {},
      li: {},
      br: !0,
      img: {
        src: !0,
        width: !0,
        height: !0
      },
      a: {
        href: !0
      },
      b: {},
      i: {},
      u: {}
    };
  }
  /**
   * Flag that identifies all Blocks selection
   *
   * @returns {boolean}
   */
  get allBlocksSelected() {
    const { BlockManager: e } = this.Editor;
    return e.blocks.every((t) => t.selected === !0);
  }
  /**
   * Set selected all blocks
   *
   * @param {boolean} state - state to set
   */
  set allBlocksSelected(e) {
    const { BlockManager: t } = this.Editor;
    t.blocks.forEach((o) => {
      o.selected = e;
    }), this.clearCache();
  }
  /**
   * Flag that identifies any Block selection
   *
   * @returns {boolean}
   */
  get anyBlockSelected() {
    const { BlockManager: e } = this.Editor;
    return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((t) => t.selected === !0)), this.anyBlockSelectedCache;
  }
  /**
   * Return selected Blocks array
   *
   * @returns {Block[]}
   */
  get selectedBlocks() {
    return this.Editor.BlockManager.blocks.filter((e) => e.selected);
  }
  /**
   * Module Preparation
   * Registers Shortcuts CMD+A and CMD+C
   * to select all and copy them
   */
  prepare() {
    this.selection = new _(), Ie.add({
      name: "CMD+A",
      handler: (e) => {
        const { BlockManager: t, ReadOnly: o } = this.Editor;
        if (o.isEnabled) {
          e.preventDefault(), this.selectAllBlocks();
          return;
        }
        t.currentBlock && this.handleCommandA(e);
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Toggle read-only state
   *
   *  - Remove all ranges
   *  - Unselect all Blocks
   */
  toggleReadOnly() {
    _.get().removeAllRanges(), this.allBlocksSelected = !1;
  }
  /**
   * Remove selection of Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  unSelectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor;
    let o;
    isNaN(e) ? o = t.currentBlock : o = t.getBlockByIndex(e), o.selected = !1, this.clearCache();
  }
  /**
   * Clear selection from Blocks
   *
   * @param {Event} reason - event caused clear of selection
   * @param {boolean} restoreSelection - if true, restore saved selection
   */
  clearSelection(e, t = !1) {
    const { BlockManager: o, Caret: i, RectangleSelection: r } = this.Editor;
    this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
    const s = e && e instanceof KeyboardEvent, a = s && bi(e.keyCode);
    if (this.anyBlockSelected && s && a && !_.isSelectionExists) {
      const c = o.removeSelectedBlocks();
      o.insertDefaultBlockAtIndex(c, !0), i.setToBlock(o.currentBlock), dt(() => {
        const l = e.key;
        i.insertContentAtCaretPosition(l.length > 1 ? "" : l);
      }, 20)();
    }
    if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || r.isRectActivated()) {
      this.Editor.RectangleSelection.clearSelection();
      return;
    }
    t && this.selection.restore(), this.allBlocksSelected = !1;
  }
  /**
   * Reduce each Block and copy its content
   *
   * @param {ClipboardEvent} e - copy/cut event
   * @returns {Promise<void>}
   */
  copySelectedBlocks(e) {
    e.preventDefault();
    const t = x.make("div");
    this.selectedBlocks.forEach((r) => {
      const s = oe(r.holder.innerHTML, this.sanitizerConfig), a = x.make("p");
      a.innerHTML = s, t.appendChild(a);
    });
    const o = Array.from(t.childNodes).map((r) => r.textContent).join(`

`), i = t.innerHTML;
    return e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", i), Promise.all(this.selectedBlocks.map((r) => r.save())).then((r) => {
      try {
        e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(r));
      } catch {
      }
    });
  }
  /**
   * Select Block by its index
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  selectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor, o = t.getBlockByIndex(e);
    o !== void 0 && this.selectBlock(o);
  }
  /**
   * Select passed Block
   *
   * @param {Block} block - Block to select
   */
  selectBlock(e) {
    this.selection.save(), _.get().removeAllRanges(), e.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
  }
  /**
   * Remove selection from passed Block
   *
   * @param {Block} block - Block to unselect
   */
  unselectBlock(e) {
    e.selected = !1, this.clearCache();
  }
  /**
   * Clear anyBlockSelected cache
   */
  clearCache() {
    this.anyBlockSelectedCache = null;
  }
  /**
   * Module destruction
   * De-registers Shortcut CMD+A
   */
  destroy() {
    Ie.remove(this.Editor.UI.nodes.redactor, "CMD+A");
  }
  /**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  handleCommandA(e) {
    if (this.Editor.RectangleSelection.clearSelection(), x.isNativeInput(e.target) && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    const t = this.Editor.BlockManager.getBlock(e.target), o = t.inputs;
    if (o.length > 1 && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    if (o.length === 1 && !this.needToSelectAll) {
      this.needToSelectAll = !0;
      return;
    }
    this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlock(t), this.needToSelectAll = !0);
  }
  /**
   * Select All Blocks
   * Each Block has selected setter that makes Block copyable
   */
  selectAllBlocks() {
    this.selection.save(), _.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
  }
}
let Ec = class eo extends M {
  /**
   * Allowed caret positions in input
   *
   * @static
   * @returns {{START: string, END: string, DEFAULT: string}}
   */
  get positions() {
    return {
      START: "start",
      END: "end",
      DEFAULT: "default"
    };
  }
  /**
   * Elements styles that can be useful for Caret Module
   */
  static get CSS() {
    return {
      shadowCaret: "cdx-shadow-caret"
    };
  }
  /**
   * Method gets Block instance and puts caret to the text node with offset
   * There two ways that method applies caret position:
   *   - first found text node: sets at the beginning, but you can pass an offset
   *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
   *
   * @param {Block} block - Block class
   * @param {string} position - position where to set caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the block content
   */
  setToBlock(e, t = this.positions.DEFAULT, o = 0) {
    var i;
    const { BlockManager: r, BlockSelection: s } = this.Editor;
    if (s.clearSelection(), !e.focusable) {
      (i = window.getSelection()) == null || i.removeAllRanges(), s.selectBlock(e), r.currentBlock = e;
      return;
    }
    let a;
    switch (t) {
      case this.positions.START:
        a = e.firstInput;
        break;
      case this.positions.END:
        a = e.lastInput;
        break;
      default:
        a = e.currentInput;
    }
    if (!a)
      return;
    let c, l = o;
    if (t === this.positions.START)
      c = x.getDeepestNode(a, !1), l = 0;
    else if (t === this.positions.END)
      c = x.getDeepestNode(a, !0), l = x.getContentLength(c);
    else {
      const { node: u, offset: d } = x.getNodeByOffset(a, o);
      u ? (c = u, l = d) : (c = x.getDeepestNode(a, !1), l = 0);
    }
    this.set(c, l), r.setCurrentBlockByChildNode(e.holder), r.currentBlock.currentInput = a;
  }
  /**
   * Set caret to the current input of current Block.
   *
   * @param {HTMLElement} input - input where caret should be set
   * @param {string} position - position of the caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToInput(e, t = this.positions.DEFAULT, o = 0) {
    const { currentBlock: i } = this.Editor.BlockManager, r = x.getDeepestNode(e);
    switch (t) {
      case this.positions.START:
        this.set(r, 0);
        break;
      case this.positions.END:
        this.set(r, x.getContentLength(r));
        break;
      default:
        o && this.set(r, o);
    }
    i.currentInput = e;
  }
  /**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */
  set(e, t = 0) {
    const { top: o, bottom: i } = _.setCursor(e, t), { innerHeight: r } = window;
    o < 0 ? window.scrollBy(0, o - 30) : i > r && window.scrollBy(0, i - r + 30);
  }
  /**
   * Set Caret to the last Block
   * If last block is not empty, append another empty block
   */
  setToTheLastBlock() {
    const e = this.Editor.BlockManager.lastBlock;
    if (e)
      if (e.tool.isDefault && e.isEmpty)
        this.setToBlock(e);
      else {
        const t = this.Editor.BlockManager.insertAtEnd();
        this.setToBlock(t);
      }
  }
  /**
   * Extract content fragment of current Block from Caret position to the end of the Block
   */
  extractFragmentFromCaretPosition() {
    const e = _.get();
    if (e.rangeCount) {
      const t = e.getRangeAt(0), o = this.Editor.BlockManager.currentBlock.currentInput;
      if (t.deleteContents(), o)
        if (x.isNativeInput(o)) {
          const i = o, r = document.createDocumentFragment(), s = i.value.substring(0, i.selectionStart), a = i.value.substring(i.selectionStart);
          return r.textContent = a, i.value = s, r;
        } else {
          const i = t.cloneRange();
          return i.selectNodeContents(o), i.setStart(t.endContainer, t.endOffset), i.extractContents();
        }
    }
  }
  /**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigateNext(e = !1) {
    const { BlockManager: t } = this.Editor, { currentBlock: o, nextBlock: i } = t;
    if (o === void 0)
      return !1;
    const { nextInput: r, currentInput: s } = o, a = s !== void 0 ? it(s) : void 0;
    let c = i;
    const l = e || a || !o.focusable;
    if (r && l)
      return this.setToInput(r, this.positions.START), !0;
    if (c === null) {
      if (o.tool.isDefault || !l)
        return !1;
      c = t.insertAtEnd();
    }
    return l ? (this.setToBlock(c, this.positions.START), !0) : !1;
  }
  /**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigatePrevious(e = !1) {
    const { currentBlock: t, previousBlock: o } = this.Editor.BlockManager;
    if (!t)
      return !1;
    const { previousInput: i, currentInput: r } = t, s = r !== void 0 ? nt(r) : void 0, a = e || s || !t.focusable;
    return i && a ? (this.setToInput(i, this.positions.END), !0) : o !== null && a ? (this.setToBlock(o, this.positions.END), !0) : !1;
  }
  /**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */
  createShadow(e) {
    const t = document.createElement("span");
    t.classList.add(eo.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
  }
  /**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */
  restoreCaret(e) {
    const t = e.querySelector(`.${eo.CSS.shadowCaret}`);
    if (!t)
      return;
    new _().expandToTag(t);
    const o = document.createRange();
    o.selectNode(t), o.extractContents();
  }
  /**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */
  insertContentAtCaretPosition(e) {
    const t = document.createDocumentFragment(), o = document.createElement("div"), i = _.get(), r = _.range;
    o.innerHTML = e, Array.from(o.childNodes).forEach((l) => t.appendChild(l)), t.childNodes.length === 0 && t.appendChild(new Text());
    const s = t.lastChild;
    r.deleteContents(), r.insertNode(t);
    const a = document.createRange(), c = s.nodeType === Node.TEXT_NODE ? s : s.firstChild;
    c !== null && c.textContent !== null && a.setStart(c, c.textContent.length), i.removeAllRanges(), i.addRange(a);
  }
};
class Sc extends M {
  constructor() {
    super(...arguments), this.onMouseUp = () => {
      this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
    }, this.onMouseOver = (e) => {
      const { BlockManager: t, BlockSelection: o } = this.Editor;
      if (e.relatedTarget === null && e.target === null)
        return;
      const i = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, r = t.getBlockByChildNode(e.target);
      if (!(!i || !r) && r !== i) {
        if (i === this.firstSelectedBlock) {
          _.get().removeAllRanges(), i.selected = !0, r.selected = !0, o.clearCache();
          return;
        }
        if (r === this.firstSelectedBlock) {
          i.selected = !1, r.selected = !1, o.clearCache();
          return;
        }
        this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i, r), this.lastSelectedBlock = r;
      }
    };
  }
  /**
   * Module preparation
   *
   * @returns {Promise}
   */
  async prepare() {
    this.listeners.on(document, "mousedown", (e) => {
      this.enableCrossBlockSelection(e);
    });
  }
  /**
   * Sets up listeners
   *
   * @param {MouseEvent} event - mouse down event
   */
  watchSelection(e) {
    if (e.button !== ds.LEFT)
      return;
    const { BlockManager: t } = this.Editor;
    this.firstSelectedBlock = t.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
  }
  /**
   * Return boolean is cross block selection started:
   * there should be at least 2 selected blocks
   */
  get isCrossBlockSelectionStarted() {
    return !!this.firstSelectedBlock && !!this.lastSelectedBlock && this.firstSelectedBlock !== this.lastSelectedBlock;
  }
  /**
   * Change selection state of the next Block
   * Used for CBS via Shift + arrow keys
   *
   * @param {boolean} next - if true, toggle next block. Previous otherwise
   */
  toggleBlockSelectedState(e = !0) {
    const { BlockManager: t, BlockSelection: o } = this.Editor;
    this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), _.get().removeAllRanges());
    const i = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), r = t.blocks[i];
    r && (this.lastSelectedBlock.selected !== r.selected ? (r.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = r, this.Editor.InlineToolbar.close(), r.holder.scrollIntoView({
      block: "nearest"
    }));
  }
  /**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */
  clear(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor, r = t.blocks.indexOf(this.firstSelectedBlock), s = t.blocks.indexOf(this.lastSelectedBlock);
    if (o.anyBlockSelected && r > -1 && s > -1 && e && e instanceof KeyboardEvent)
      switch (e.keyCode) {
        case B.DOWN:
        case B.RIGHT:
          i.setToBlock(t.blocks[Math.max(r, s)], i.positions.END);
          break;
        case B.UP:
        case B.LEFT:
          i.setToBlock(t.blocks[Math.min(r, s)], i.positions.START);
          break;
        default:
          i.setToBlock(t.blocks[Math.max(r, s)], i.positions.END);
      }
    this.firstSelectedBlock = this.lastSelectedBlock = null;
  }
  /**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */
  enableCrossBlockSelection(e) {
    const { UI: t } = this.Editor;
    _.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */
  toggleBlocksSelectedState(e, t) {
    const { BlockManager: o, BlockSelection: i } = this.Editor, r = o.blocks.indexOf(e), s = o.blocks.indexOf(t), a = e.selected !== t.selected;
    for (let c = Math.min(r, s); c <= Math.max(r, s); c++) {
      const l = o.blocks[c];
      l !== this.firstSelectedBlock && l !== (a ? e : t) && (o.blocks[c].selected = !o.blocks[c].selected, i.clearCache());
    }
  }
}
class Tc extends M {
  constructor() {
    super(...arguments), this.isStartedAtEditor = !1;
  }
  /**
   * Toggle read-only state
   *
   * if state is true:
   *  - disable all drag-n-drop event handlers
   *
   * if state is false:
   *  - restore drag-n-drop event handlers
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Add drag events listeners to editor zone
   */
  enableModuleBindings() {
    const { UI: e } = this.Editor;
    this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (t) => {
      await this.processDrop(t);
    }, !0), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
      this.processDragStart();
    }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t) => {
      this.processDragOver(t);
    }, !0);
  }
  /**
   * Unbind drag-n-drop event handlers
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Handle drop event
   *
   * @param {DragEvent} dropEvent - drop event
   */
  async processDrop(e) {
    const {
      BlockManager: t,
      Paste: o,
      Caret: i
    } = this.Editor;
    e.preventDefault(), t.blocks.forEach((s) => {
      s.dropTarget = !1;
    }), _.isAtEditor && !_.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1;
    const r = t.setCurrentBlockByChildNode(e.target);
    if (r)
      this.Editor.Caret.setToBlock(r, i.positions.END);
    else {
      const s = t.setCurrentBlockByChildNode(t.lastBlock.holder);
      this.Editor.Caret.setToBlock(s, i.positions.END);
    }
    await o.processDataTransfer(e.dataTransfer, !0);
  }
  /**
   * Handle drag start event
   */
  processDragStart() {
    _.isAtEditor && !_.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
  }
  /**
   * @param {DragEvent} dragEvent - drag event
   */
  processDragOver(e) {
    e.preventDefault();
  }
}
const _c = 180, Bc = 400;
class Oc extends M {
  /**
   * Prepare the module
   *
   * @param options - options used by the modification observer module
   * @param options.config - Editor configuration object
   * @param options.eventsDispatcher - common Editor event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.disabled = !1, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = Bc, this.mutationObserver = new MutationObserver((o) => {
      this.redactorChanged(o);
    }), this.eventsDispatcher.on(Si, (o) => {
      this.particularBlockChanged(o.event);
    }), this.eventsDispatcher.on(Ti, () => {
      this.disable();
    }), this.eventsDispatcher.on(_i, () => {
      this.enable();
    });
  }
  /**
   * Enables onChange event
   */
  enable() {
    this.mutationObserver.observe(
      this.Editor.UI.nodes.redactor,
      {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !0
      }
    ), this.disabled = !1;
  }
  /**
   * Disables onChange event
   */
  disable() {
    this.mutationObserver.disconnect(), this.disabled = !0;
  }
  /**
   * Call onChange event passed to Editor.js configuration
   *
   * @param event - some of our custom change events
   */
  particularBlockChanged(e) {
    this.disabled || !D(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
      let t;
      this.batchingOnChangeQueue.size === 1 ? t = this.batchingOnChangeQueue.values().next().value : t = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t), this.batchingOnChangeQueue.clear();
    }, this.batchTime));
  }
  /**
   * Fired on every blocks wrapper dom change
   *
   * @param mutations - mutations happened
   */
  redactorChanged(e) {
    this.eventsDispatcher.emit(Xt, {
      mutations: e
    });
  }
}
const wr = class kr extends M {
  constructor() {
    super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (e) => {
      try {
        const t = e.create({}, {}, !1);
        if (e.pasteConfig === !1) {
          this.exceptionList.push(e.name);
          return;
        }
        if (!D(t.onPaste))
          return;
        this.getTagsConfig(e), this.getFilesConfig(e), this.getPatternsConfig(e);
      } catch (t) {
        N(
          `Paste handling for «${e.name}» Tool hasn't been set up because of the error`,
          "warn",
          t
        );
      }
    }, this.handlePasteEvent = async (e) => {
      const { BlockManager: t, Toolbar: o } = this.Editor, i = t.setCurrentBlockByChildNode(e.target);
      !i || this.isNativeBehaviour(e.target) && !e.clipboardData.types.includes("Files") || i && this.exceptionList.includes(i.name) || (e.preventDefault(), this.processDataTransfer(e.clipboardData), o.close());
    };
  }
  /**
   * Set onPaste callback and collect tools` paste configurations
   */
  async prepare() {
    this.processTools();
  }
  /**
   * Set read-only state
   *
   * @param {boolean} readOnlyEnabled - read only flag value
   */
  toggleReadOnly(e) {
    e ? this.unsetCallback() : this.setCallback();
  }
  /**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */
  async processDataTransfer(e, t = !1) {
    const { Tools: o } = this.Editor, i = e.types;
    if ((i.includes ? i.includes("Files") : i.contains("Files")) && !J(this.toolsFiles)) {
      await this.processFiles(e.files);
      return;
    }
    const r = e.getData(this.MIME_TYPE), s = e.getData("text/plain");
    let a = e.getData("text/html");
    if (r)
      try {
        this.insertEditorJSData(JSON.parse(r));
        return;
      } catch {
      }
    t && s.trim() && a.trim() && (a = "<p>" + (a.trim() ? a : s) + "</p>");
    const c = Object.keys(this.toolsTags).reduce((d, g) => (d[g.toLowerCase()] = this.toolsTags[g].sanitizationConfig ?? {}, d), {}), l = Object.assign({}, c, o.getAllInlineToolsSanitizeConfig(), { br: {} }), u = oe(a, l);
    !u.trim() || u.trim() === s || !x.isHTMLString(u) ? await this.processText(s) : await this.processText(u, !0);
  }
  /**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */
  async processText(e, t = !1) {
    const { Caret: o, BlockManager: i } = this.Editor, r = t ? this.processHTML(e) : this.processPlain(e);
    if (!r.length)
      return;
    if (r.length === 1) {
      r[0].isBlock ? this.processSingleBlock(r.pop()) : this.processInlinePaste(r.pop());
      return;
    }
    const s = i.currentBlock && i.currentBlock.tool.isDefault && i.currentBlock.isEmpty;
    r.map(
      async (a, c) => this.insertBlock(a, c === 0 && s)
    ), i.currentBlock && o.setToBlock(i.currentBlock, o.positions.END);
  }
  /**
   * Set onPaste callback handler
   */
  setCallback() {
    this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Unset onPaste callback handler
   */
  unsetCallback() {
    this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Get and process tool`s paste configs
   */
  processTools() {
    const e = this.Editor.Tools.blockTools;
    Array.from(e.values()).forEach(this.processTool);
  }
  /**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */
  collectTagNames(e) {
    return ce(e) ? [e] : U(e) ? Object.keys(e) : [];
  }
  /**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getTagsConfig(e) {
    if (e.pasteConfig === !1)
      return;
    const t = e.pasteConfig.tags || [], o = [];
    t.forEach((i) => {
      const r = this.collectTagNames(i);
      o.push(...r), r.forEach((s) => {
        if (Object.prototype.hasOwnProperty.call(this.toolsTags, s)) {
          N(
            `Paste handler for «${e.name}» Tool on «${s}» tag is skipped because it is already used by «${this.toolsTags[s].tool.name}» Tool.`,
            "warn"
          );
          return;
        }
        const a = U(i) ? i[s] : null;
        this.toolsTags[s.toUpperCase()] = {
          tool: e,
          sanitizationConfig: a
        };
      });
    }), this.tagsByTool[e.name] = o.map((i) => i.toUpperCase());
  }
  /**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getFilesConfig(e) {
    if (e.pasteConfig === !1)
      return;
    const { files: t = {} } = e.pasteConfig;
    let { extensions: o, mimeTypes: i } = t;
    !o && !i || (o && !Array.isArray(o) && (N(`«extensions» property of the onDrop config for «${e.name}» Tool should be an array`), o = []), i && !Array.isArray(i) && (N(`«mimeTypes» property of the onDrop config for «${e.name}» Tool should be an array`), i = []), i && (i = i.filter((r) => gs(r) ? !0 : (N(`MIME type value «${r}» for the «${e.name}» Tool is not a valid MIME type`, "warn"), !1))), this.toolsFiles[e.name] = {
      extensions: o || [],
      mimeTypes: i || []
    });
  }
  /**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getPatternsConfig(e) {
    e.pasteConfig === !1 || !e.pasteConfig.patterns || J(e.pasteConfig.patterns) || Object.entries(e.pasteConfig.patterns).forEach(([t, o]) => {
      o instanceof RegExp || N(
        `Pattern ${o} for «${e.name}» Tool is skipped because it should be a Regexp instance.`,
        "warn"
      ), this.toolsPatterns.push({
        key: t,
        pattern: o,
        tool: e
      });
    });
  }
  /**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */
  isNativeBehaviour(e) {
    return x.isNativeInput(e);
  }
  /**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */
  async processFiles(e) {
    const { BlockManager: t } = this.Editor;
    let o;
    o = await Promise.all(
      Array.from(e).map((r) => this.processFile(r))
    ), o = o.filter((r) => !!r);
    const i = t.currentBlock.tool.isDefault && t.currentBlock.isEmpty;
    o.forEach(
      (r, s) => {
        t.paste(r.type, r.event, s === 0 && i);
      }
    );
  }
  /**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */
  async processFile(e) {
    const t = fs(e), o = Object.entries(this.toolsFiles).find(([r, { mimeTypes: s, extensions: a }]) => {
      const [c, l] = e.type.split("/"), u = a.find((g) => g.toLowerCase() === t.toLowerCase()), d = s.find((g) => {
        const [v, f] = g.split("/");
        return v === c && (f === l || f === "*");
      });
      return !!u || !!d;
    });
    if (!o)
      return;
    const [i] = o;
    return {
      event: this.composePasteEvent("file", {
        file: e
      }),
      type: i
    };
  }
  /**
   * Split HTML string to blocks and return it as array of Block data
   *
   * @param {string} innerHTML - html string to process
   * @returns {PasteData[]}
   */
  processHTML(e) {
    const { Tools: t } = this.Editor, o = x.make("DIV");
    return o.innerHTML = e, this.getNodes(o).map((i) => {
      let r, s = t.defaultTool, a = !1;
      switch (i.nodeType) {
        case Node.DOCUMENT_FRAGMENT_NODE:
          r = x.make("div"), r.appendChild(i);
          break;
        case Node.ELEMENT_NODE:
          r = i, a = !0, this.toolsTags[r.tagName] && (s = this.toolsTags[r.tagName].tool);
          break;
      }
      const { tags: c } = s.pasteConfig || { tags: [] }, l = c.reduce((g, v) => (this.collectTagNames(v).forEach((f) => {
        const h = U(v) ? v[f] : null;
        g[f.toLowerCase()] = h || {};
      }), g), {}), u = Object.assign({}, l, s.baseSanitizeConfig);
      if (r.tagName.toLowerCase() === "table") {
        const g = oe(r.outerHTML, u);
        r = x.make("div", void 0, {
          innerHTML: g
        }).firstChild;
      } else
        r.innerHTML = oe(r.innerHTML, u);
      const d = this.composePasteEvent("tag", {
        data: r
      });
      return {
        content: r,
        isBlock: a,
        tool: s.name,
        event: d
      };
    }).filter((i) => {
      const r = x.isEmpty(i.content), s = x.isSingleTag(i.content);
      return !r || s;
    });
  }
  /**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */
  processPlain(e) {
    const { defaultBlock: t } = this.config;
    if (!e)
      return [];
    const o = t;
    return e.split(/\r?\n/).filter((i) => i.trim()).map((i) => {
      const r = x.make("div");
      r.textContent = i;
      const s = this.composePasteEvent("tag", {
        data: r
      });
      return {
        content: r,
        tool: o,
        isBlock: !1,
        event: s
      };
    });
  }
  /**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processSingleBlock(e) {
    const { Caret: t, BlockManager: o } = this.Editor, { currentBlock: i } = o;
    if (!i || e.tool !== i.name || !x.containsOnlyInlineElements(e.content.innerHTML)) {
      this.insertBlock(e, i?.tool.isDefault && i.isEmpty);
      return;
    }
    t.insertContentAtCaretPosition(e.content.innerHTML);
  }
  /**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processInlinePaste(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { content: i } = e;
    if (t.currentBlock && t.currentBlock.tool.isDefault && i.textContent.length < kr.PATTERN_PROCESSING_MAX_LENGTH) {
      const r = await this.processPattern(i.textContent);
      if (r) {
        const s = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty, a = t.paste(r.tool, r.event, s);
        o.setToBlock(a, o.positions.END);
        return;
      }
    }
    if (t.currentBlock && t.currentBlock.currentInput) {
      const r = t.currentBlock.tool.baseSanitizeConfig;
      document.execCommand(
        "insertHTML",
        !1,
        oe(i.innerHTML, r)
      );
    } else
      this.insertBlock(e);
  }
  /**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */
  async processPattern(e) {
    const t = this.toolsPatterns.find((o) => {
      const i = o.pattern.exec(e);
      return i ? e === i.shift() : !1;
    });
    return t ? {
      event: this.composePasteEvent("pattern", {
        key: t.key,
        data: e
      }),
      tool: t.tool.name
    } : void 0;
  }
  /**
   * Insert pasted Block content to Editor
   *
   * @param {PasteData} data - data to insert
   * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
   * @returns {void}
   */
  insertBlock(e, t = !1) {
    const { BlockManager: o, Caret: i } = this.Editor, { currentBlock: r } = o;
    let s;
    if (t && r && r.isEmpty) {
      s = o.paste(e.tool, e.event, !0), i.setToBlock(s, i.positions.END);
      return;
    }
    s = o.paste(e.tool, e.event), i.setToBlock(s, i.positions.END);
  }
  /**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */
  insertEditorJSData(e) {
    const { BlockManager: t, Caret: o, Tools: i } = this.Editor;
    so(
      e,
      (r) => i.blockTools.get(r).sanitizeConfig
    ).forEach(({ tool: r, data: s }, a) => {
      let c = !1;
      a === 0 && (c = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty);
      const l = t.insert({
        tool: r,
        data: s,
        replace: c
      });
      o.setToBlock(l, o.positions.END);
    });
  }
  /**
   * Fetch nodes from Element node
   *
   * @param {Node} node - current node
   * @param {Node[]} nodes - processed nodes
   * @param {Node} destNode - destination node
   */
  processElementNode(e, t, o) {
    const i = Object.keys(this.toolsTags), r = e, { tool: s } = this.toolsTags[r.tagName] || {}, a = this.tagsByTool[s?.name] || [], c = i.includes(r.tagName), l = x.blockElements.includes(r.tagName.toLowerCase()), u = Array.from(r.children).some(
      ({ tagName: g }) => i.includes(g) && !a.includes(g)
    ), d = Array.from(r.children).some(
      ({ tagName: g }) => x.blockElements.includes(g.toLowerCase())
    );
    if (!l && !c && !u)
      return o.appendChild(r), [...t, o];
    if (c && !u || l && !d && !u)
      return [...t, o, r];
  }
  /**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */
  getNodes(e) {
    const t = Array.from(e.childNodes);
    let o;
    const i = (r, s) => {
      if (x.isEmpty(s) && !x.isSingleTag(s))
        return r;
      const a = r[r.length - 1];
      let c = new DocumentFragment();
      switch (a && x.isFragment(a) && (c = r.pop()), s.nodeType) {
        case Node.ELEMENT_NODE:
          if (o = this.processElementNode(s, r, c), o)
            return o;
          break;
        case Node.TEXT_NODE:
          return c.appendChild(s), [...r, c];
        default:
          return [...r, c];
      }
      return [...r, ...Array.from(s.childNodes).reduce(i, [])];
    };
    return t.reduce(i, []);
  }
  /**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */
  composePasteEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
};
wr.PATTERN_PROCESSING_MAX_LENGTH = 450;
let Lc = wr;
class Mc extends M {
  constructor() {
    super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = !1;
  }
  /**
   * Returns state of read only mode
   */
  get isEnabled() {
    return this.readOnlyEnabled;
  }
  /**
   * Set initial state
   */
  async prepare() {
    const { Tools: e } = this.Editor, { blockTools: t } = e, o = [];
    Array.from(t.entries()).forEach(([i, r]) => {
      r.isReadOnlySupported || o.push(i);
    }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly, !0);
  }
  /**
   * Set read-only mode or toggle current state
   * Call all Modules `toggleReadOnly` method and re-render Editor
   *
   * @param state - (optional) read-only state or toggle
   * @param isInitial - (optional) true when editor is initializing
   */
  async toggle(e = !this.readOnlyEnabled, t = !1) {
    e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
    const o = this.readOnlyEnabled;
    this.readOnlyEnabled = e;
    for (const r in this.Editor)
      this.Editor[r].toggleReadOnly && this.Editor[r].toggleReadOnly(e);
    if (o === e)
      return this.readOnlyEnabled;
    if (t)
      return this.readOnlyEnabled;
    this.Editor.ModificationsObserver.disable();
    const i = await this.Editor.Saver.save();
    return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(i.blocks), this.Editor.ModificationsObserver.enable(), this.readOnlyEnabled;
  }
  /**
   * Throws an error about tools which don't support read-only mode
   */
  throwCriticalError() {
    throw new Ci(
      `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
    );
  }
}
class We extends M {
  constructor() {
    super(...arguments), this.isRectSelectionActivated = !1, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = !1, this.isScrolling = !1, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      overlay: "codex-editor-overlay",
      overlayContainer: "codex-editor-overlay__container",
      rect: "codex-editor-overlay__rectangle",
      topScrollZone: "codex-editor-overlay__scroll-zone--top",
      bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
    };
  }
  /**
   * Module Preparation
   * Creating rect and hang handlers
   */
  prepare() {
    this.enableModuleBindings();
  }
  /**
   * Init rect params
   *
   * @param {number} pageX - X coord of mouse
   * @param {number} pageY - Y coord of mouse
   */
  startSelection(e, t) {
    const o = document.elementFromPoint(e - window.pageXOffset, t - window.pageYOffset);
    o.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
    const i = [
      `.${le.CSS.content}`,
      `.${this.Editor.Toolbar.CSS.toolbar}`,
      `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
    ], r = o.closest("." + this.Editor.UI.CSS.editorWrapper), s = i.some((a) => !!o.closest(a));
    !r || s || (this.mousedown = !0, this.startX = e, this.startY = t);
  }
  /**
   * Clear all params to end selection
   */
  endSelection() {
    this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
  }
  /**
   * is RectSelection Activated
   */
  isRectActivated() {
    return this.isRectSelectionActivated;
  }
  /**
   * Mark that selection is end
   */
  clearSelection() {
    this.isRectSelectionActivated = !1;
  }
  /**
   * Sets Module necessary event handlers
   */
  enableModuleBindings() {
    const { container: e } = this.genHTML();
    this.listeners.on(e, "mousedown", (t) => {
      this.processMouseDown(t);
    }, !1), this.listeners.on(document.body, "mousemove", Wt((t) => {
      this.processMouseMove(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseleave", () => {
      this.processMouseLeave();
    }), this.listeners.on(window, "scroll", Wt((t) => {
      this.processScroll(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseup", () => {
      this.processMouseUp();
    }, !1);
  }
  /**
   * Handle mouse down events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseDown(e) {
    e.button === this.MAIN_MOUSE_BUTTON && (e.target.closest(x.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY));
  }
  /**
   * Handle mouse move events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseMove(e) {
    this.changingRectangle(e), this.scrollByZones(e.clientY);
  }
  /**
   * Handle mouse leave
   */
  processMouseLeave() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processScroll(e) {
    this.changingRectangle(e);
  }
  /**
   * Handle mouse up
   */
  processMouseUp() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * Scroll If mouse in scroll zone
   *
   * @param {number} clientY - Y coord of mouse
   */
  scrollByZones(e) {
    if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
      this.isScrolling = !1;
      return;
    }
    this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0);
  }
  /**
   * Generates required HTML elements
   *
   * @returns {Object<string, Element>}
   */
  genHTML() {
    const { UI: e } = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o = x.make("div", We.CSS.overlay, {}), i = x.make("div", We.CSS.overlayContainer, {}), r = x.make("div", We.CSS.rect, {});
    return i.appendChild(r), o.appendChild(i), t.appendChild(o), this.overlayRectangle = r, {
      container: t,
      overlay: o
    };
  }
  /**
   * Activates scrolling if blockSelection is active and mouse is in scroll zone
   *
   * @param {number} speed - speed of scrolling
   */
  scrollVertical(e) {
    if (!(this.inScrollZone && this.mousedown))
      return;
    const t = window.pageYOffset;
    window.scrollBy(0, e), this.mouseY += window.pageYOffset - t, setTimeout(() => {
      this.scrollVertical(e);
    }, 0);
  }
  /**
   * Handles the change in the rectangle and its effect
   *
   * @param {MouseEvent} event - mouse event
   */
  changingRectangle(e) {
    if (!this.mousedown)
      return;
    e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
    const { rightPos: t, leftPos: o, index: i } = this.genInfoForMouseSelection(), r = this.startX > t && this.mouseX > t, s = this.startX < o && this.mouseX < o;
    this.rectCrossesBlocks = !(r || s), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i !== void 0 && (this.trySelectNextBlock(i), this.inverseSelection(), _.get().removeAllRanges());
  }
  /**
   * Shrink rect to singular point
   */
  shrinkRectangleToPoint() {
    this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
  }
  /**
   * Select or unselect all of blocks in array if rect is out or in selectable area
   */
  inverseSelection() {
    const e = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
    if (this.rectCrossesBlocks && !e)
      for (const t of this.stackOfSelected)
        this.Editor.BlockSelection.selectBlockByIndex(t);
    if (!this.rectCrossesBlocks && e)
      for (const t of this.stackOfSelected)
        this.Editor.BlockSelection.unSelectBlockByIndex(t);
  }
  /**
   * Updates size of rectangle
   */
  updateRectangleSize() {
    this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
  }
  /**
   * Collects information needed to determine the behavior of the rectangle
   *
   * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
   */
  genInfoForMouseSelection() {
    const e = document.body.offsetWidth / 2, t = this.mouseY - window.pageYOffset, o = document.elementFromPoint(e, t), i = this.Editor.BlockManager.getBlockByChildNode(o);
    let r;
    i !== void 0 && (r = this.Editor.BlockManager.blocks.findIndex((u) => u.holder === i.holder));
    const s = this.Editor.BlockManager.lastBlock.holder.querySelector("." + le.CSS.content), a = Number.parseInt(window.getComputedStyle(s).width, 10) / 2, c = e - a, l = e + a;
    return {
      index: r,
      leftPos: c,
      rightPos: l
    };
  }
  /**
   * Select block with index index
   *
   * @param index - index of block in redactor
   */
  addBlockInSelection(e) {
    this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
  }
  /**
   * Adds a block to the selection and determines which blocks should be selected
   *
   * @param {object} index - index of new block in the reactor
   */
  trySelectNextBlock(e) {
    const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o = this.stackOfSelected.length, i = 1, r = -1, s = 0;
    if (t)
      return;
    const a = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0;
    let c = s;
    o > 1 && (c = a ? i : r);
    const l = e > this.stackOfSelected[o - 1] && c === i, u = e < this.stackOfSelected[o - 1] && c === r, d = !(l || u || c === s);
    if (!d && (e > this.stackOfSelected[o - 1] || this.stackOfSelected[o - 1] === void 0)) {
      let f = this.stackOfSelected[o - 1] + 1 || e;
      for (f; f <= e; f++)
        this.addBlockInSelection(f);
      return;
    }
    if (!d && e < this.stackOfSelected[o - 1]) {
      for (let f = this.stackOfSelected[o - 1] - 1; f >= e; f--)
        this.addBlockInSelection(f);
      return;
    }
    if (!d)
      return;
    let g = o - 1, v;
    for (e > this.stackOfSelected[o - 1] ? v = () => e > this.stackOfSelected[g] : v = () => e < this.stackOfSelected[g]; v(); )
      this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[g]), this.stackOfSelected.pop(), g--;
  }
}
class Ic extends M {
  /**
   * Renders passed blocks as one batch
   *
   * @param blocksData - blocks to render
   */
  async render(e) {
    return new Promise((t) => {
      const { Tools: o, BlockManager: i } = this.Editor;
      if (e.length === 0)
        i.insert();
      else {
        const r = e.map(({ type: s, data: a, tunes: c, id: l }) => {
          o.available.has(s) === !1 && (Z(`Tool «${s}» is not found. Check 'tools' property at the Editor.js config.`, "warn"), a = this.composeStubDataForTool(s, a, l), s = o.stubTool);
          let u;
          try {
            u = i.composeBlock({
              id: l,
              tool: s,
              data: a,
              tunes: c
            });
          } catch (d) {
            N(`Block «${s}» skipped because of plugins error`, "error", {
              data: a,
              error: d
            }), a = this.composeStubDataForTool(s, a, l), s = o.stubTool, u = i.composeBlock({
              id: l,
              tool: s,
              data: a,
              tunes: c
            });
          }
          return u;
        });
        i.insertMany(r);
      }
      window.requestIdleCallback(() => {
        t();
      }, { timeout: 2e3 });
    });
  }
  /**
   * Create data for the Stub Tool that will be used instead of unavailable tool
   *
   * @param tool - unavailable tool name to stub
   * @param data - data of unavailable block
   * @param [id] - id of unavailable block
   */
  composeStubDataForTool(e, t, o) {
    const { Tools: i } = this.Editor;
    let r = e;
    if (i.unavailable.has(e)) {
      const s = i.unavailable.get(e).toolbox;
      s !== void 0 && s[0].title !== void 0 && (r = s[0].title);
    }
    return {
      savedData: {
        id: o,
        type: e,
        data: t
      },
      title: r
    };
  }
}
class Pc extends M {
  /**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */
  async save() {
    const { BlockManager: e, Tools: t } = this.Editor, o = e.blocks, i = [];
    try {
      o.forEach((a) => {
        i.push(this.getSavedData(a));
      });
      const r = await Promise.all(i), s = await so(r, (a) => t.blockTools.get(a).sanitizeConfig);
      return this.makeOutput(s);
    } catch (r) {
      Z("Saving failed due to the Error %o", "error", r);
    }
  }
  /**
   * Saves and validates
   *
   * @param {Block} block - Editor's Tool
   * @returns {ValidatedData} - Tool's validated data
   */
  async getSavedData(e) {
    const t = await e.save(), o = t && await e.validate(t.data);
    return {
      ...t,
      isValid: o
    };
  }
  /**
   * Creates output object with saved data, time and version of editor
   *
   * @param {ValidatedData} allExtractedData - data extracted from Blocks
   * @returns {OutputData}
   */
  makeOutput(e) {
    const t = [];
    return e.forEach(({ id: o, tool: i, data: r, tunes: s, isValid: a }) => {
      if (!a) {
        N(`Block «${i}» skipped because saved data is invalid`);
        return;
      }
      if (i === this.Editor.Tools.stubTool) {
        t.push(r);
        return;
      }
      const c = {
        id: o,
        type: i,
        data: r,
        ...!J(s) && {
          tunes: s
        }
      };
      t.push(c);
    }), {
      time: +/* @__PURE__ */ new Date(),
      blocks: t,
      version: "2.31.0"
    };
  }
}
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const Ac = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function Nc(n) {
  const e = document.createElement("div");
  e.innerHTML = n.trim();
  const t = document.createDocumentFragment();
  return t.append(...Array.from(e.childNodes)), t;
}
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
class en {
  /**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph"
    }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : en.DEFAULT_PLACEHOLDER, this._data = e ?? {}, this._element = null, this._preserveBlank = t.preserveBlank ?? !1;
  }
  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (e.code !== "Backspace" && e.code !== "Delete" || !this._element)
      return;
    const { textContent: t } = this._element;
    t === "" && (this._element.innerHTML = "");
  }
  /**
   * Create Tool's view
   *
   * @returns {HTMLDivElement}
   * @private
   */
  drawView() {
    const e = document.createElement("DIV");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = "false", e.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = "true", e.addEventListener("keyup", this.onKeyUp)), e;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this._element = this.drawView(), this._element;
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */
  merge(e) {
    if (!this._element)
      return;
    this._data.text += e.text;
    const t = Nc(e.text);
    this._element.appendChild(t), this._element.normalize();
  }
  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !(e.text.trim() === "" && !this._preserveBlank);
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML
    };
  }
  /**
   * On paste callback fired from Editor.
   *
   * @param {HTMLPasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = {
      text: e.detail.data.innerHTML
    };
    this._data = t, window.requestAnimationFrame(() => {
      this._element && (this._element.innerHTML = this._data.text || "");
    });
  }
  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   * @returns {ConversionConfig}
   */
  static get conversionConfig() {
    return {
      export: "text",
      // to convert Paragraph to other block, use 'text' property of saved data
      import: "text"
      // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }
  /**
   * Sanitizer rules
   * @returns {SanitizerConfig} - Edtior.js sanitizer config
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      }
    };
  }
  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {PasteConfig} - Paragraph Paste Setting
   */
  static get pasteConfig() {
    return {
      tags: ["P"]
    };
  }
  /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {ToolboxConfig} - Paragraph Toolbox Setting
   */
  static get toolbox() {
    return {
      icon: Ac,
      title: "Text"
    };
  }
}
class tn {
  constructor() {
    this.commandName = "bold";
  }
  /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      b: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return {
      icon: la,
      name: "bold",
      onActivate: () => {
        document.execCommand(this.commandName);
      },
      isActive: () => document.queryCommandState(this.commandName)
    };
  }
  /**
   * Set a shortcut
   *
   * @returns {boolean}
   */
  get shortcut() {
    return "CMD+B";
  }
}
tn.isInline = !0;
tn.title = "Bold";
class on {
  constructor() {
    this.commandName = "italic", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--italic"
    }, this.nodes = {
      button: null
    };
  }
  /**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      i: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = ga, this.nodes.button;
  }
  /**
   * Wrap range with <i> tag
   */
  surround() {
    document.execCommand(this.commandName);
  }
  /**
   * Check selection and set activated state to button if there are <i> tag
   */
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+I";
  }
}
on.isInline = !0;
on.title = "Italic";
class nn {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--link",
      buttonUnlink: "ce-inline-tool--unlink",
      input: "ce-inline-tool-input",
      inputShowed: "ce-inline-tool-input--showed"
    }, this.nodes = {
      button: null,
      input: null
    }, this.inputOpened = !1, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new _();
  }
  /**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      a: {
        href: !0,
        target: "_blank",
        rel: "nofollow"
      }
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Yn, this.nodes.button;
  }
  /**
   * Input for the link
   */
  renderActions() {
    return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.enterKeyHint = "done", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e) => {
      e.keyCode === this.ENTER_KEY && this.enterPressed(e);
    }), this.nodes.input;
  }
  /**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */
  surround(e) {
    if (e) {
      this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
      const t = this.selection.findParentTag("A");
      if (t) {
        this.selection.expandToTag(t), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close();
        return;
      }
    }
    this.toggleActions();
  }
  /**
   * Check selection and set activated state to button if there are <a> tag
   */
  checkState() {
    const e = this.selection.findParentTag("A");
    if (e) {
      this.nodes.button.innerHTML = ya, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
      const t = e.getAttribute("href");
      this.nodes.input.value = t !== "null" ? t : "", this.selection.save();
    } else
      this.nodes.button.innerHTML = Yn, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
    return !!e;
  }
  /**
   * Function called with Inline Toolbar closing
   */
  clear() {
    this.closeActions();
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+K";
  }
  /**
   * Show/close link input
   */
  toggleActions() {
    this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
  }
  /**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */
  openActions(e = !1) {
    this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = !0;
  }
  /**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */
  closeActions(e = !0) {
    if (this.selection.isFakeBackgroundEnabled) {
      const t = new _();
      t.save(), this.selection.restore(), this.selection.removeFakeBackground(), t.restore();
    }
    this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = !1;
  }
  /**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  enterPressed(e) {
    let t = this.nodes.input.value || "";
    if (!t.trim()) {
      this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
      return;
    }
    if (!this.validateURL(t)) {
      this.notifier.show({
        message: "Pasted link is not valid.",
        style: "error"
      }), N("Incorrect Link pasted", "warn", t);
      return;
    }
    t = this.prepareLink(t), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
  }
  /**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */
  validateURL(e) {
    return !/\s/.test(e);
  }
  /**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */
  prepareLink(e) {
    return e = e.trim(), e = this.addProtocol(e), e;
  }
  /**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */
  addProtocol(e) {
    if (/^(\w+):(\/\/)?/.test(e))
      return e;
    const t = /^\/[^/\s]/.test(e), o = e.substring(0, 1) === "#", i = /^\/\/[^/\s]/.test(e);
    return !t && !o && !i && (e = "http://" + e), e;
  }
  /**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */
  insertLink(e) {
    const t = this.selection.findParentTag("A");
    t && this.selection.expandToTag(t), document.execCommand(this.commandLink, !1, e);
  }
  /**
   * Removes <a> tag
   */
  unlink() {
    document.execCommand(this.commandUnlink);
  }
}
nn.isInline = !0;
nn.title = "Link";
class xr {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.i18nAPI = e.i18n, this.blocksAPI = e.blocks, this.selectionAPI = e.selection, this.toolsAPI = e.tools, this.caretAPI = e.caret;
  }
  /**
   * Returns tool's UI config
   */
  async render() {
    const e = _.get(), t = this.blocksAPI.getBlockByElement(e.anchorNode);
    if (t === void 0)
      return [];
    const o = this.toolsAPI.getBlockTools(), i = await Oi(t, o);
    if (i.length === 0)
      return [];
    const r = i.reduce((l, u) => {
      var d;
      return (d = u.toolbox) == null || d.forEach((g) => {
        l.push({
          icon: g.icon,
          title: W.t(G.toolNames, g.title),
          name: u.name,
          closeOnActivate: !0,
          onActivate: async () => {
            const v = await this.blocksAPI.convert(t.id, u.name, g.data);
            this.caretAPI.setToBlock(v, "end");
          }
        });
      }), l;
    }, []), s = await t.getActiveToolboxEntry(), a = s !== void 0 ? s.icon : Ri, c = !Ae();
    return {
      icon: a,
      name: "convert-to",
      hint: {
        title: this.i18nAPI.t("Convert to")
      },
      children: {
        searchable: c,
        items: r,
        onOpen: () => {
          c && (this.selectionAPI.setFakeBackground(), this.selectionAPI.save());
        },
        onClose: () => {
          c && (this.selectionAPI.restore(), this.selectionAPI.removeFakeBackground());
        }
      }
    };
  }
}
xr.isInline = !0;
class Cr {
  /**
   * @param options - constructor options
   * @param options.data - stub tool data
   * @param options.api - Editor.js API
   */
  constructor({ data: e, api: t }) {
    this.CSS = {
      wrapper: "ce-stub",
      info: "ce-stub__info",
      title: "ce-stub__title",
      subtitle: "ce-stub__subtitle"
    }, this.api = t, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
  }
  /**
   * Returns stub holder
   *
   * @returns {HTMLElement}
   */
  render() {
    return this.wrapper;
  }
  /**
   * Return original Tool data
   *
   * @returns {BlockToolData}
   */
  save() {
    return this.savedData;
  }
  /**
   * Create Tool html markup
   *
   * @returns {HTMLElement}
   */
  make() {
    const e = x.make("div", this.CSS.wrapper), t = wa, o = x.make("div", this.CSS.info), i = x.make("div", this.CSS.title, {
      textContent: this.title
    }), r = x.make("div", this.CSS.subtitle, {
      textContent: this.subtitle
    });
    return e.innerHTML = t, o.appendChild(i), o.appendChild(r), e.appendChild(o), e;
  }
}
Cr.isReadOnlySupported = !0;
class Rc extends po {
  constructor() {
    super(...arguments), this.type = ve.Inline;
  }
  /**
   * Returns title for Inline Tool if specified by user
   */
  get title() {
    return this.constructable[bt.Title];
  }
  /**
   * Constructs new InlineTool instance from constructable
   */
  create() {
    return new this.constructable({
      api: this.api,
      config: this.settings
    });
  }
  /**
   * Allows inline tool to be available in read-only mode
   * Can be used, for example, by comments tool
   */
  get isReadOnlySupported() {
    return this.constructable[bt.IsReadOnlySupported] ?? !1;
  }
}
class jc extends po {
  constructor() {
    super(...arguments), this.type = ve.Tune;
  }
  /**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */
  create(e, t) {
    return new this.constructable({
      api: this.api,
      config: this.settings,
      block: t,
      data: e
    });
  }
}
let te = class _e extends Map {
  /**
   * Returns Block Tools collection
   */
  get blockTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
    return new _e(e);
  }
  /**
   * Returns Inline Tools collection
   */
  get inlineTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
    return new _e(e);
  }
  /**
   * Returns Block Tunes collection
   */
  get blockTunes() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
    return new _e(e);
  }
  /**
   * Returns internal Tools collection
   */
  get internalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
    return new _e(e);
  }
  /**
   * Returns Tools collection provided by user
   */
  get externalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
    return new _e(e);
  }
};
var Dc = Object.defineProperty, Fc = Object.getOwnPropertyDescriptor, Er = (n, e, t, o) => {
  for (var i = Fc(e, t), r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (i = s(e, t, i) || i);
  return i && Dc(e, t, i), i;
};
class rn extends po {
  constructor() {
    super(...arguments), this.type = ve.Block, this.inlineTools = new te(), this.tunes = new te();
  }
  /**
   * Creates new Tool instance
   *
   * @param data - Tool data
   * @param block - BlockAPI for current Block
   * @param readOnly - True if Editor is in read-only mode
   */
  create(e, t, o) {
    return new this.constructable({
      data: e,
      block: t,
      readOnly: o,
      api: this.api,
      config: this.settings
    });
  }
  /**
   * Returns true if read-only mode is supported by Tool
   */
  get isReadOnlySupported() {
    return this.constructable[Te.IsReadOnlySupported] === !0;
  }
  /**
   * Returns true if Tool supports linebreaks
   */
  get isLineBreaksEnabled() {
    return this.constructable[Te.IsEnabledLineBreaks];
  }
  /**
   * Returns Tool toolbox configuration (internal or user-specified).
   *
   * Merges internal and user-defined toolbox configs based on the following rules:
   *
   * - If both internal and user-defined toolbox configs are arrays their items are merged.
   * Length of the second one is kept.
   *
   * - If both are objects their properties are merged.
   *
   * - If one is an object and another is an array than internal config is replaced with user-defined
   * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
   */
  get toolbox() {
    const e = this.constructable[Te.Toolbox], t = this.config[ot.Toolbox];
    if (!J(e) && t !== !1)
      return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o, i) => {
        const r = e[i];
        return r ? {
          ...r,
          ...o
        } : o;
      }) : [t] : Array.isArray(t) ? t : [
        {
          ...e,
          ...t
        }
      ] : Array.isArray(e) ? e : [e];
  }
  /**
   * Returns Tool conversion configuration
   */
  get conversionConfig() {
    return this.constructable[Te.ConversionConfig];
  }
  /**
   * Returns enabled inline tools for Tool
   */
  get enabledInlineTools() {
    return this.config[ot.EnabledInlineTools] || !1;
  }
  /**
   * Returns enabled tunes for Tool
   */
  get enabledBlockTunes() {
    return this.config[ot.EnabledBlockTunes];
  }
  /**
   * Returns Tool paste configuration
   */
  get pasteConfig() {
    return this.constructable[Te.PasteConfig] ?? {};
  }
  get sanitizeConfig() {
    const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
    if (J(e))
      return t;
    const o = {};
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        const r = e[i];
        U(r) ? o[i] = Object.assign({}, t, r) : o[i] = r;
      }
    return o;
  }
  get baseSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), e;
  }
}
Er([
  Pe
], rn.prototype, "sanitizeConfig");
Er([
  Pe
], rn.prototype, "baseSanitizeConfig");
class Hc {
  /**
   * @class
   * @param config - tools config
   * @param editorConfig - EditorJS config
   * @param api - EditorJS API module
   */
  constructor(e, t, o) {
    this.api = o, this.config = e, this.editorConfig = t;
  }
  /**
   * Returns Tool object based on it's type
   *
   * @param name - tool name
   */
  get(e) {
    const { class: t, isInternal: o = !1, ...i } = this.config[e], r = this.getConstructor(t), s = t[Jt.IsTune];
    return new r({
      name: e,
      constructable: t,
      config: i,
      api: this.api.getMethodsForTool(e, s),
      isDefault: e === this.editorConfig.defaultBlock,
      defaultPlaceholder: this.editorConfig.placeholder,
      isInternal: o
    });
  }
  /**
   * Find appropriate Tool object constructor for Tool constructable
   *
   * @param constructable - Tools constructable
   */
  getConstructor(e) {
    switch (!0) {
      case e[bt.IsInline]:
        return Rc;
      case e[Jt.IsTune]:
        return jc;
      default:
        return rn;
    }
  }
}
class Sr {
  /**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: ca,
      title: this.api.i18n.t("Move down"),
      onActivate: () => this.handleClick(),
      name: "move-down"
    };
  }
  /**
   * Handle clicks on 'move down' button
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e + 1);
    if (!t)
      throw new Error("Unable to move Block down since it is already the last");
    const o = t.holder, i = o.getBoundingClientRect();
    let r = Math.abs(window.innerHeight - o.offsetHeight);
    i.top < window.innerHeight && (r = window.scrollY + o.offsetHeight), window.scrollTo(0, r), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
Sr.isTune = !0;
class Tr {
  /**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: pa,
      title: this.api.i18n.t("Delete"),
      name: "delete",
      confirmation: {
        title: this.api.i18n.t("Click to delete"),
        onActivate: () => this.handleClick()
      }
    };
  }
  /**
   * Delete block conditions passed
   */
  handleClick() {
    this.api.blocks.delete();
  }
}
Tr.isTune = !0;
class _r {
  /**
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: ha,
      title: this.api.i18n.t("Move up"),
      onActivate: () => this.handleClick(),
      name: "move-up"
    };
  }
  /**
   * Move current block up
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e), o = this.api.blocks.getBlockByIndex(e - 1);
    if (e === 0 || !t || !o)
      throw new Error("Unable to move Block up since it is already the first");
    const i = t.holder, r = o.holder, s = i.getBoundingClientRect(), a = r.getBoundingClientRect();
    let c;
    a.top > 0 ? c = Math.abs(s.top) - Math.abs(a.top) : c = Math.abs(s.top) + a.height, window.scrollBy(0, -1 * c), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
_r.isTune = !0;
var $c = Object.defineProperty, Uc = Object.getOwnPropertyDescriptor, zc = (n, e, t, o) => {
  for (var i = Uc(e, t), r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (i = s(e, t, i) || i);
  return i && $c(e, t, i), i;
};
class Br extends M {
  constructor() {
    super(...arguments), this.stubTool = "stub", this.toolsAvailable = new te(), this.toolsUnavailable = new te();
  }
  /**
   * Returns available Tools
   */
  get available() {
    return this.toolsAvailable;
  }
  /**
   * Returns unavailable Tools
   */
  get unavailable() {
    return this.toolsUnavailable;
  }
  /**
   * Return Tools for the Inline Toolbar
   */
  get inlineTools() {
    return this.available.inlineTools;
  }
  /**
   * Return editor block tools
   */
  get blockTools() {
    return this.available.blockTools;
  }
  /**
   * Return available Block Tunes
   *
   * @returns {object} - object of Inline Tool's classes
   */
  get blockTunes() {
    return this.available.blockTunes;
  }
  /**
   * Returns default Tool object
   */
  get defaultTool() {
    return this.blockTools.get(this.config.defaultBlock);
  }
  /**
   * Returns internal tools
   */
  get internal() {
    return this.available.internalTools;
  }
  /**
   * Creates instances via passed or default configuration
   *
   * @returns {Promise<void>}
   */
  async prepare() {
    if (this.validateTools(), this.config.tools = Vt({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
      throw Error("Can't start without tools");
    const e = this.prepareConfig();
    this.factory = new Hc(e, this.config, this.Editor.API);
    const t = this.getListOfPrepareFunctions(e);
    if (t.length === 0)
      return Promise.resolve();
    await ps(t, (o) => {
      this.toolPrepareMethodSuccess(o);
    }, (o) => {
      this.toolPrepareMethodFallback(o);
    }), this.prepareBlockTools();
  }
  getAllInlineToolsSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => {
      Object.assign(e, t.sanitizeConfig);
    }), e;
  }
  /**
   * Calls each Tool reset method to clean up anything set by Tool
   */
  destroy() {
    Object.values(this.available).forEach(async (e) => {
      D(e.reset) && await e.reset();
    });
  }
  /**
   * Returns internal tools
   * Includes Bold, Italic, Link and Paragraph
   */
  get internalTools() {
    return {
      convertTo: {
        class: xr,
        isInternal: !0
      },
      link: {
        class: nn,
        isInternal: !0
      },
      bold: {
        class: tn,
        isInternal: !0
      },
      italic: {
        class: on,
        isInternal: !0
      },
      paragraph: {
        class: en,
        inlineToolbar: !0,
        isInternal: !0
      },
      stub: {
        class: Cr,
        isInternal: !0
      },
      moveUp: {
        class: _r,
        isInternal: !0
      },
      delete: {
        class: Tr,
        isInternal: !0
      },
      moveDown: {
        class: Sr,
        isInternal: !0
      }
    };
  }
  /**
   * Tool prepare method success callback
   *
   * @param {object} data - append tool to available list
   */
  toolPrepareMethodSuccess(e) {
    const t = this.factory.get(e.toolName);
    if (t.isInline()) {
      const o = ["render"].filter((i) => !t.create()[i]);
      if (o.length) {
        N(
          `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
          "warn",
          o
        ), this.toolsUnavailable.set(t.name, t);
        return;
      }
    }
    this.toolsAvailable.set(t.name, t);
  }
  /**
   * Tool prepare method fail callback
   *
   * @param {object} data - append tool to unavailable list
   */
  toolPrepareMethodFallback(e) {
    this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
  }
  /**
   * Binds prepare function of plugins with user or default config
   *
   * @returns {Array} list of functions that needs to be fired sequentially
   * @param config - tools config
   */
  getListOfPrepareFunctions(e) {
    const t = [];
    return Object.entries(e).forEach(([o, i]) => {
      t.push({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        function: D(i.class.prepare) ? i.class.prepare : () => {
        },
        data: {
          toolName: o,
          config: i.config
        }
      });
    }), t;
  }
  /**
   * Assign enabled Inline Tools and Block Tunes for Block Tool
   */
  prepareBlockTools() {
    Array.from(this.blockTools.values()).forEach((e) => {
      this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
    });
  }
  /**
   * Assign enabled Inline Tools for Block Tool
   *
   * @param tool - Block Tool
   */
  assignInlineToolsToBlockTool(e) {
    if (this.config.inlineToolbar !== !1) {
      if (e.enabledInlineTools === !0) {
        e.inlineTools = new te(
          Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t) => [t, this.inlineTools.get(t)]) : Array.from(this.inlineTools.entries())
        );
        return;
      }
      Array.isArray(e.enabledInlineTools) && (e.inlineTools = new te(
        /** Prepend ConvertTo Inline Tool */
        ["convertTo", ...e.enabledInlineTools].map((t) => [t, this.inlineTools.get(t)])
      ));
    }
  }
  /**
   * Assign enabled Block Tunes for Block Tool
   *
   * @param tool — Block Tool
   */
  assignBlockTunesToBlockTool(e) {
    if (e.enabledBlockTunes !== !1) {
      if (Array.isArray(e.enabledBlockTunes)) {
        const t = new te(
          e.enabledBlockTunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new te([...t, ...this.blockTunes.internalTools]);
        return;
      }
      if (Array.isArray(this.config.tunes)) {
        const t = new te(
          this.config.tunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new te([...t, ...this.blockTunes.internalTools]);
        return;
      }
      e.tunes = this.blockTunes.internalTools;
    }
  }
  /**
   * Validate Tools configuration objects and throw Error for user if it is invalid
   */
  validateTools() {
    for (const e in this.config.tools)
      if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
        if (e in this.internalTools)
          return;
        const t = this.config.tools[e];
        if (!D(t) && !D(t.class))
          throw Error(
            `Tool «${e}» must be a constructor function or an object with function in the «class» property`
          );
      }
  }
  /**
   * Unify tools config
   */
  prepareConfig() {
    const e = {};
    for (const t in this.config.tools)
      U(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = { class: this.config.tools[t] };
    return e;
  }
}
zc([
  Pe
], Br.prototype, "getAllInlineToolsSanitizeConfig");
const qc = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;--color-background-icon-active: rgba(56, 138, 229, .1);--color-text-icon-active: #388AE5;--color-text-primary: black;position:absolute;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3;opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{color:var(--color-text-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;border-radius:4px;line-height:normal;height:100%;padding:0;width:28px;background-color:transparent;cursor:pointer}@media (max-width: 650px){.ce-inline-tool{width:36px;height:36px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#f8f8f8}}.ce-inline-tool svg{display:block;width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:4px 8px;font-size:14px;line-height:22px;outline:none;margin:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-inline-tool--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #EFF0F1;--color-shadow: rgba(13, 20, 33, .1);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #F8F8F8;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;--popover-top: calc(100% + var(--offset-from-target));--popover-left: 0;--nested-popover-overlap: 4px;--icon-size: 20px;--item-padding: 3px;--item-height: calc(var(--icon-size) + 2 * var(--item-padding))}.ce-popover__container{min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0px 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:var(--popover-left);top:var(--popover-top);background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened>.ce-popover__container{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened>.ce-popover__container{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover--open-top .ce-popover__container{--popover-top: calc(-1 * (var(--offset-from-target) + var(--popover-height)))}.ce-popover--open-left .ce-popover__container{--popover-left: calc(-1 * var(--width) + 100%)}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}@media (max-width: 650px){.ce-popover .ce-popover__container{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__search{margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover--nested .ce-popover__container{--popover-left: calc(var(--nesting-level) * (var(--width) - var(--nested-popover-overlap)));top:calc(var(--trigger-item-top) - var(--nested-popover-overlap));position:absolute}.ce-popover--open-top.ce-popover--nested .ce-popover__container{top:calc(var(--trigger-item-top) - var(--popover-height) + var(--item-height) + var(--offset-from-target) + var(--nested-popover-overlap))}.ce-popover--open-left .ce-popover--nested .ce-popover__container{--popover-left: calc(-1 * (var(--nesting-level) + 1) * var(--width) + 100%)}.ce-popover-item-separator{padding:4px 3px}.ce-popover-item-separator--hidden{display:none}.ce-popover-item-separator__line{height:1px;background:var(--color-border);width:100%}.ce-popover-item-html--hidden{display:none}.ce-popover-item{--border-radius: 6px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--item-padding);color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;background:transparent}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover-item__icon--tool{margin-right:4px}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:auto}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title,.ce-popover-item--confirmation .ce-popover-item__icon{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}.ce-popover-header{margin-bottom:8px;margin-top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover-header__text{font-size:18px;font-weight:600}.ce-popover-header__back-button{border:0;background:transparent;width:36px;height:36px;color:var(--color-text-primary)}.ce-popover-header__back-button svg{display:block;width:28px;height:28px}.ce-popover--inline{--height: 38px;--height-mobile: 46px;--container-padding: 4px;position:relative}.ce-popover--inline .ce-popover__custom-content{margin-bottom:0}.ce-popover--inline .ce-popover__items{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-popover--inline .ce-popover__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:var(--container-padding);height:var(--height);top:0;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-animation:none;animation:none}@media (max-width: 650px){.ce-popover--inline .ce-popover__container{height:var(--height-mobile);position:absolute}}.ce-popover--inline .ce-popover-item-separator{padding:0 4px}.ce-popover--inline .ce-popover-item-separator__line{height:100%;width:1px}.ce-popover--inline .ce-popover-item{border-radius:4px;padding:4px}.ce-popover--inline .ce-popover-item__icon--tool{-webkit-box-shadow:none;box-shadow:none;background:transparent;margin-right:0}.ce-popover--inline .ce-popover-item__icon{width:auto;width:initial;height:auto;height:initial}.ce-popover--inline .ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover--inline .ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover--inline .ce-popover-item:not(:last-of-type){margin-bottom:0;margin-bottom:initial}.ce-popover--inline .ce-popover-item-html{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover--inline .ce-popover-item__icon--chevron-right{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{--offset: 3px;left:0;top:calc(var(--height) + var(--offset))}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{top:calc(var(--height-mobile) + var(--offset))}}.ce-popover--inline .ce-popover--nested .ce-popover__container{min-width:var(--width);width:var(--width);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:6px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ce-popover--inline .ce-popover--nested .ce-popover__items{display:block;width:100%}.ce-popover--inline .ce-popover--nested .ce-popover-item{border-radius:6px;padding:3px}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested .ce-popover-item{padding:4px}}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon--tool{margin-right:4px}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon{width:26px;height:26px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator{padding:4px 3px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator__line{width:100%;height:1px}.codex-editor [data-placeholder]:empty:before,.codex-editor [data-placeholder][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text;content:attr(data-placeholder)}.codex-editor [data-placeholder-active]:empty:before,.codex-editor [data-placeholder-active][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text}.codex-editor [data-placeholder-active]:empty:focus:before,.codex-editor [data-placeholder-active][data-empty=true]:focus:before{content:attr(data-placeholder-active)}
`;
class Wc extends M {
  constructor() {
    super(...arguments), this.isMobile = !1, this.contentRectCache = null, this.resizeDebouncer = Wn(() => {
      this.windowResize();
    }, 200), this.selectionChangeDebounced = Wn(() => {
      this.selectionChanged();
    }, _c), this.documentTouchedListener = (e) => {
      this.documentTouched(e);
    };
  }
  /**
   * Editor.js UI CSS class names
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorWrapperNarrow: "codex-editor--narrow",
      editorZone: "codex-editor__redactor",
      editorZoneHidden: "codex-editor__redactor--hidden",
      editorEmpty: "codex-editor--empty",
      editorRtlFix: "codex-editor--rtl"
    };
  }
  /**
   * Return Width of center column of Editor
   *
   * @returns {DOMRect}
   */
  get contentRect() {
    if (this.contentRectCache !== null)
      return this.contentRectCache;
    const e = this.nodes.wrapper.querySelector(`.${le.CSS.content}`);
    return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
      width: 650,
      left: 0,
      right: 0
    };
  }
  /**
   * Making main interface
   */
  async prepare() {
    this.setIsMobile(), this.make(), this.loadStyles();
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - removes all listeners from main UI module elements
   *
   * if readOnly is false:
   *  - enables all listeners to UI module elements
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.unbindReadOnlySensitiveListeners() : window.requestIdleCallback(() => {
      this.bindReadOnlySensitiveListeners();
    }, {
      timeout: 2e3
    });
  }
  /**
   * Check if Editor is empty and set CSS class to wrapper
   */
  checkEmptiness() {
    const { BlockManager: e } = this.Editor;
    this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
  }
  /**
   * Check if one of Toolbar is opened
   * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
   *
   * @returns {boolean}
   */
  get someToolbarOpened() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o } = this.Editor;
    return !!(t.opened || o.opened || e.toolbox.opened);
  }
  /**
   * Check for some Flipper-buttons is under focus
   */
  get someFlipperButtonFocused() {
    return this.Editor.Toolbar.toolbox.hasFocus() ? !0 : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof gt).some(([e, t]) => t.flipper.hasFocus());
  }
  /**
   * Clean editor`s UI
   */
  destroy() {
    this.nodes.holder.innerHTML = "", this.unbindReadOnlyInsensitiveListeners();
  }
  /**
   * Close all Editor's toolbars
   */
  closeAllToolbars() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o } = this.Editor;
    t.close(), o.close(), e.toolbox.close();
  }
  /**
   * Check for mobile mode and save the result
   */
  setIsMobile() {
    const e = window.innerWidth < yi;
    e !== this.isMobile && this.eventsDispatcher.emit(Ke, {
      isEnabled: this.isMobile
    }), this.isMobile = e;
  }
  /**
   * Makes Editor.js interface
   */
  make() {
    this.nodes.holder = x.getHolder(this.config.holder), this.nodes.wrapper = x.make("div", [
      this.CSS.editorWrapper,
      ...this.isRtl ? [this.CSS.editorRtlFix] : []
    ]), this.nodes.redactor = x.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper), this.bindReadOnlyInsensitiveListeners();
  }
  /**
   * Appends CSS
   */
  loadStyles() {
    const e = "editor-js-styles";
    if (x.get(e))
      return;
    const t = x.make("style", null, {
      id: e,
      textContent: qc.toString()
    });
    this.config.style && !J(this.config.style) && this.config.style.nonce && t.setAttribute("nonce", this.config.style.nonce), x.prepend(document.head, t);
  }
  /**
   * Adds listeners that should work both in read-only and read-write modes
   */
  bindReadOnlyInsensitiveListeners() {
    this.listeners.on(document, "selectionchange", this.selectionChangeDebounced), this.listeners.on(window, "resize", this.resizeDebouncer, {
      passive: !0
    }), this.listeners.on(this.nodes.redactor, "mousedown", this.documentTouchedListener, {
      capture: !0,
      passive: !0
    }), this.listeners.on(this.nodes.redactor, "touchstart", this.documentTouchedListener, {
      capture: !0,
      passive: !0
    });
  }
  /**
   * Removes listeners that should work both in read-only and read-write modes
   */
  unbindReadOnlyInsensitiveListeners() {
    this.listeners.off(document, "selectionchange", this.selectionChangeDebounced), this.listeners.off(window, "resize", this.resizeDebouncer), this.listeners.off(this.nodes.redactor, "mousedown", this.documentTouchedListener), this.listeners.off(this.nodes.redactor, "touchstart", this.documentTouchedListener);
  }
  /**
   * Adds listeners that should work only in read-only mode
   */
  bindReadOnlySensitiveListeners() {
    this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (e) => {
      this.redactorClicked(e);
    }, !1), this.readOnlyMutableListeners.on(document, "keydown", (e) => {
      this.documentKeydown(e);
    }, !0), this.readOnlyMutableListeners.on(document, "mousedown", (e) => {
      this.documentClicked(e);
    }, !0), this.watchBlockHoveredEvents(), this.enableInputsEmptyMark();
  }
  /**
   * Listen redactor mousemove to emit 'block-hovered' event
   */
  watchBlockHoveredEvents() {
    let e;
    this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", Wt((t) => {
      const o = t.target.closest(".ce-block");
      this.Editor.BlockSelection.anyBlockSelected || o && e !== o && (e = o, this.eventsDispatcher.emit(Vi, {
        block: this.Editor.BlockManager.getBlockByChildNode(o)
      }));
    }, 20), {
      passive: !0
    });
  }
  /**
   * Unbind events that should work only in read-only mode
   */
  unbindReadOnlySensitiveListeners() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Resize window handler
   */
  windowResize() {
    this.contentRectCache = null, this.setIsMobile();
  }
  /**
   * All keydowns on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  documentKeydown(e) {
    switch (e.keyCode) {
      case B.ENTER:
        this.enterPressed(e);
        break;
      case B.BACKSPACE:
      case B.DELETE:
        this.backspacePressed(e);
        break;
      case B.ESC:
        this.escapePressed(e);
        break;
      default:
        this.defaultBehaviour(e);
        break;
    }
  }
  /**
   * Ignore all other document's keydown events
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  defaultBehaviour(e) {
    const { currentBlock: t } = this.Editor.BlockManager, o = e.target.closest(`.${this.CSS.editorWrapper}`), i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    if (t !== void 0 && o === null) {
      this.Editor.BlockEvents.keydown(e);
      return;
    }
    o || t && i || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
  }
  /**
   * @param {KeyboardEvent} event - keyboard event
   */
  backspacePressed(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor;
    if (o.anyBlockSelected && !_.isSelectionExists) {
      const r = t.removeSelectedBlocks(), s = t.insertDefaultBlockAtIndex(r, !0);
      i.setToBlock(s, i.positions.START), o.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
    }
  }
  /**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */
  escapePressed(e) {
    this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
  }
  /**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  enterPressed(e) {
    const { BlockManager: t, BlockSelection: o } = this.Editor;
    if (this.someToolbarOpened)
      return;
    const i = t.currentBlockIndex >= 0;
    if (o.anyBlockSelected && !_.isSelectionExists) {
      o.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
      return;
    }
    if (!this.someToolbarOpened && i && e.target.tagName === "BODY") {
      const r = this.Editor.BlockManager.insert();
      e.preventDefault(), this.Editor.Caret.setToBlock(r), this.Editor.Toolbar.moveAndOpen(r);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */
  documentClicked(e) {
    var t, o;
    if (!e.isTrusted)
      return;
    const i = e.target;
    this.nodes.holder.contains(i) || _.isAtEditor || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
    const r = (t = this.Editor.BlockSettings.nodes.wrapper) == null ? void 0 : t.contains(i), s = (o = this.Editor.Toolbar.nodes.settingsToggler) == null ? void 0 : o.contains(i), a = r || s;
    if (this.Editor.BlockSettings.opened && !a) {
      this.Editor.BlockSettings.close();
      const c = this.Editor.BlockManager.getBlockByChildNode(i);
      this.Editor.Toolbar.moveAndOpen(c);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * First touch on editor
   * Fired before click
   *
   * Used to change current block — we need to do it before 'selectionChange' event.
   * Also:
   * - Move and show the Toolbar
   * - Set a Caret
   *
   * @param event - touch or mouse event
   */
  documentTouched(e) {
    let t = e.target;
    if (t === this.nodes.redactor) {
      const o = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      t = document.elementFromPoint(o, i);
    }
    try {
      this.Editor.BlockManager.setCurrentBlockByChildNode(t);
    } catch {
      this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
    }
    this.Editor.ReadOnly.isEnabled || this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * All clicks on the redactor zone
   *
   * @param {MouseEvent} event - click event
   * @description
   * - By clicks on the Editor's bottom zone:
   *      - if last Block is empty, set a Caret to this
   *      - otherwise, add a new empty Block and set a Caret to that
   */
  redactorClicked(e) {
    if (!_.isCollapsed)
      return;
    const t = e.target, o = e.metaKey || e.ctrlKey;
    if (x.isAnchor(t) && o) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const i = t.getAttribute("href"), r = bs(i);
      ys(r);
      return;
    }
    this.processBottomZoneClick(e);
  }
  /**
   * Check if user clicks on the Editor's bottom zone:
   *  - set caret to the last block
   *  - or add new empty block
   *
   * @param event - click event
   */
  processBottomZoneClick(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(-1), o = x.offset(t.holder).bottom, i = e.pageY, { BlockSelection: r } = this.Editor;
    if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
    * If there is cross block selection started, target will be equal to redactor so we need additional check
    */
    !r.anyBlockSelected && /**
    * Prevent caret jumping (to last block) when clicking between blocks
    */
    o < i) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const { BlockManager: s, Caret: a, Toolbar: c } = this.Editor;
      (!s.lastBlock.tool.isDefault || !s.lastBlock.isEmpty) && s.insertAtEnd(), a.setToTheLastBlock(), c.moveAndOpen(s.lastBlock);
    }
  }
  /**
   * Handle selection changes on mobile devices
   * Uses for showing the Inline Toolbar
   */
  selectionChanged() {
    const { CrossBlockSelection: e, BlockSelection: t } = this.Editor, o = _.anchorElement;
    if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && _.get().removeAllRanges(), !o) {
      _.range || this.Editor.InlineToolbar.close();
      return;
    }
    const i = o.closest(`.${le.CSS.content}`);
    (i === null || i.closest(`.${_.CSS.editorWrapper}`) !== this.nodes.wrapper) && (this.Editor.InlineToolbar.containsNode(o) || this.Editor.InlineToolbar.close(), o.dataset.inlineToolbar !== "true") || (this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o), this.Editor.InlineToolbar.tryToShow(!0));
  }
  /**
   * Editor.js provides and ability to show placeholders for empty contenteditable elements
   *
   * This method watches for input and focus events and toggles 'data-empty' attribute
   * to workaroud the case, when inputs contains only <br>s and has no visible content
   * Then, CSS could rely on this attribute to show placeholders
   */
  enableInputsEmptyMark() {
    function e(t) {
      const o = t.target;
      wi(o);
    }
    this.readOnlyMutableListeners.on(this.nodes.wrapper, "input", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusin", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusout", e);
  }
}
const Vc = {
  // API Modules
  BlocksAPI: Ls,
  CaretAPI: Is,
  EventsAPI: Ps,
  I18nAPI: As,
  API: Ns,
  InlineToolbarAPI: Rs,
  ListenersAPI: js,
  NotifierAPI: $s,
  ReadOnlyAPI: Us,
  SanitizerAPI: Xs,
  SaverAPI: Gs,
  SelectionAPI: Zs,
  ToolsAPI: Js,
  StylesAPI: Qs,
  ToolbarAPI: ea,
  TooltipAPI: ra,
  UiAPI: sa,
  // Toolbar Modules
  BlockSettings: Ia,
  Toolbar: Ha,
  InlineToolbar: $a,
  // Modules
  BlockEvents: yc,
  BlockManager: xc,
  BlockSelection: Cc,
  Caret: Ec,
  CrossBlockSelection: Sc,
  DragNDrop: Tc,
  ModificationsObserver: Oc,
  Paste: Lc,
  ReadOnly: Mc,
  RectangleSelection: We,
  Renderer: Ic,
  Saver: Pc,
  Tools: Br,
  UI: Wc
};
class Kc {
  /**
   * @param {EditorConfig} config - user configuration
   */
  constructor(e) {
    this.moduleInstances = {}, this.eventsDispatcher = new Ge();
    let t, o;
    this.isReady = new Promise((i, r) => {
      t = i, o = r;
    }), Promise.resolve().then(async () => {
      this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
      const { BlockManager: i, Caret: r, UI: s, ModificationsObserver: a } = this.moduleInstances;
      s.checkEmptiness(), a.enable(), this.configuration.autofocus === !0 && this.configuration.readOnly !== !0 && r.setToBlock(i.blocks[0], r.positions.START), t();
    }).catch((i) => {
      N(`Editor.js is not ready because of ${i}`, "error"), o(i);
    });
  }
  /**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */
  set configuration(e) {
    var t, o;
    U(e) ? this.config = {
      ...e
    } : this.config = {
      holder: e
    }, Kt(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = mi.VERBOSE), us(this.config.logLevel), Kt(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
    const i = {
      type: this.config.defaultBlock,
      data: {}
    };
    this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
      p: !0,
      b: !0,
      a: !0
    }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : !1, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || (() => {
    }), this.config.onChange = this.config.onChange || (() => {
    }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : !0, (J(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [i] }), this.config.readOnly = this.config.readOnly || !1, (t = this.config.i18n) != null && t.messages && W.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((o = this.config.i18n) == null ? void 0 : o.direction) || "ltr";
  }
  /**
   * Returns private property
   *
   * @returns {EditorConfig}
   */
  get configuration() {
    return this.config;
  }
  /**
   * Checks for required fields in Editor's config
   */
  validate() {
    const { holderId: e, holder: t } = this.config;
    if (e && t)
      throw Error("«holderId» and «holder» param can't assign at the same time.");
    if (ce(t) && !x.get(t))
      throw Error(`element with ID «${t}» is missing. Pass correct holder's ID.`);
    if (t && U(t) && !x.isElement(t))
      throw Error("«holder» value must be an Element node");
  }
  /**
   * Initializes modules:
   *  - make and save instances
   *  - configure
   */
  init() {
    this.constructModules(), this.configureModules();
  }
  /**
   * Start Editor!
   *
   * Get list of modules that needs to be prepared and return a sequence (Promise)
   *
   * @returns {Promise<void>}
   */
  async start() {
    await [
      "Tools",
      "UI",
      "BlockManager",
      "Paste",
      "BlockSelection",
      "RectangleSelection",
      "CrossBlockSelection",
      "ReadOnly"
    ].reduce(
      (e, t) => e.then(async () => {
        try {
          await this.moduleInstances[t].prepare();
        } catch (o) {
          if (o instanceof Ci)
            throw new Error(o.message);
          N(`Module ${t} was skipped because of %o`, "warn", o);
        }
      }),
      Promise.resolve()
    );
  }
  /**
   * Render initial data
   */
  render() {
    return this.moduleInstances.Renderer.render(this.config.data.blocks);
  }
  /**
   * Make modules instances and save it to the @property this.moduleInstances
   */
  constructModules() {
    Object.entries(Vc).forEach(([e, t]) => {
      try {
        this.moduleInstances[e] = new t({
          config: this.configuration,
          eventsDispatcher: this.eventsDispatcher
        });
      } catch (o) {
        N("[constructModules]", `Module ${e} skipped because`, "error", o);
      }
    });
  }
  /**
   * Modules instances configuration:
   *  - pass other modules to the 'state' property
   *  - ...
   */
  configureModules() {
    for (const e in this.moduleInstances)
      Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
  }
  /**
   * Return modules without passed name
   *
   * @param {string} name - module for witch modules difference should be calculated
   */
  getModulesDiff(e) {
    const t = {};
    for (const o in this.moduleInstances)
      o !== e && (t[o] = this.moduleInstances[o]);
    return t;
  }
}
/**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */
class Yc {
  /** Editor version */
  static get version() {
    return "2.31.0";
  }
  /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */
  constructor(e) {
    let t = () => {
    };
    U(e) && D(e.onReady) && (t = e.onReady);
    const o = new Kc(e);
    this.isReady = o.isReady.then(() => {
      this.exportAPI(o), t();
    });
  }
  /**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */
  exportAPI(e) {
    const t = ["configuration"], o = () => {
      Object.values(e.moduleInstances).forEach((i) => {
        D(i.destroy) && i.destroy(), i.listeners.removeAll();
      }), ia(), e = null;
      for (const i in this)
        Object.prototype.hasOwnProperty.call(this, i) && delete this[i];
      Object.setPrototypeOf(this, null);
    };
    t.forEach((i) => {
      this[i] = e[i];
    }), this.destroy = o, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
      blocks: {
        clear: "clear",
        render: "render"
      },
      caret: {
        focus: "focus"
      },
      events: {
        on: "on",
        off: "off",
        emit: "emit"
      },
      saver: {
        save: "save"
      }
    }).forEach(([i, r]) => {
      Object.entries(r).forEach(([s, a]) => {
        this[a] = e.moduleInstances.API.methods[i][s];
      });
    });
  }
}
const Xc = {
  messages: {
    ui: {
      blockTunes: {
        toggler: {
          "Click to tune": "点击调整",
          "or drag to move": "或拖动移动"
        }
      },
      inlineToolbar: {
        converter: {
          "Convert to": "转换为"
        }
      },
      toolbar: {
        toolbox: {
          Add: "添加",
          Filter: "筛选",
          "Nothing found": "未找到"
        }
      },
      popover: {
        Filter: "筛选",
        "Nothing found": "未找到"
      }
    },
    toolNames: {
      Text: "段落",
      Heading: "标题",
      List: "列表",
      Warning: "警告",
      Checklist: "清单",
      Quote: "引用",
      Code: "代码",
      Delimiter: "分隔符",
      "Raw HTML": "原始 HTML",
      Table: "表格",
      Link: "链接",
      Marker: "高亮",
      Bold: "粗体",
      Italic: "斜体",
      InlineCode: "行内代码",
      Image: "图片",
      Embed: "嵌入",
      Underline: "下划线",
      Attaches: "附件",
      Attachment: "附件"
    },
    tools: {
      warning: {
        Title: "标题",
        Message: "消息"
      },
      link: {
        "Add a link": "添加链接"
      },
      stub: {
        "The block can not be displayed correctly.": "该块无法正确显示"
      },
      image: {
        Caption: "图片说明",
        "Select an Image": "选择图片",
        "With border": "带边框",
        "Stretch image": "拉伸图片",
        "With background": "带背景"
      },
      code: {
        "Enter a code": "输入代码"
      },
      linkTool: {
        Link: "链接",
        "Couldn't fetch the link data": "无法获取链接数据",
        "Couldn't get this link data, try the other one": "无法获取此链接数据，请尝试其他链接",
        "Wrong response format from the server": "服务器响应格式错误"
      },
      header: {
        Header: "标题",
        "Heading 1": "标题 1",
        "Heading 2": "标题 2",
        "Heading 3": "标题 3",
        "Heading 4": "标题 4",
        "Heading 5": "标题 5",
        "Heading 6": "标题 6"
      },
      paragraph: {
        "Enter something": "输入内容"
      },
      list: {
        Ordered: "有序列表",
        Unordered: "无序列表"
      },
      table: {
        "Add column to left": "在左侧添加列",
        "Add column to right": "在右侧添加列",
        "Delete column": "删除列",
        "Add row above": "在上方添加行",
        "Add row below": "在下方添加行",
        "Delete row": "删除行",
        Heading: "标题",
        "With headings": "带标题",
        "Without headings": "不带标题"
      },
      quote: {
        "Enter a quote": "输入引用",
        "Enter caption": "输入标题"
      },
      checklist: {
        Checklist: "清单"
      },
      embed: {
        "Enter a caption": "输入说明"
      },
      attaches: {
        "Select file to upload": "选择要上传的文件",
        "File title": "文件标题",
        "File name": "文件名",
        "File size": "文件大小",
        Download: "下载",
        "Attach file": "附加文件"
      },
      attachment: {
        "Select file to upload": "选择要上传的文件",
        "File title": "文件标题",
        "File name": "文件名"
      },
      raw: {
        "Enter HTML code": "输入 HTML 代码"
      }
    },
    blockTunes: {
      delete: {
        Delete: "删除",
        "Click to delete": "点击删除"
      },
      moveUp: {
        "Move up": "上移"
      },
      moveDown: {
        "Move down": "下移"
      }
    }
  }
}, Rh = {
  messages: {
    // English is the default language, so we can leave this empty
    // or add custom translations if needed
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const Gc = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>', Zc = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>', Jc = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>', Qc = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>', ed = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>', td = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>', od = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>';
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */
let nd = class {
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this._settings = t, this._data = this.normalizeData(e), this._element = this.getTag();
  }
  /**
   * Styles
   */
  get _CSS() {
    return {
      block: this.api.styles.block,
      wrapper: "ce-header"
    };
  }
  /**
   * Check if data is valid
   * 
   * @param {any} data - data to check
   * @returns {data is HeaderData}
   * @private
   */
  isHeaderData(e) {
    return e.text !== void 0;
  }
  /**
   * Normalize input data
   *
   * @param {HeaderData} data - saved data to process
   *
   * @returns {HeaderData}
   * @private
   */
  normalizeData(e) {
    const t = { text: "", level: this.defaultLevel.number };
    return this.isHeaderData(e) && (t.text = e.text || "", e.level !== void 0 && !isNaN(parseInt(e.level.toString())) && (t.level = parseInt(e.level.toString()))), t;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLHeadingElement}
   * @public
   */
  render() {
    return this._element;
  }
  /**
   * Returns header block tunes config
   *
   * @returns {Array}
   */
  renderSettings() {
    return this.levels.map((e) => ({
      icon: e.svg,
      label: this.api.i18n.t(`Heading ${e.number}`),
      onActivate: () => this.setLevel(e.number),
      closeOnActivate: !0,
      isActive: this.currentLevel.number === e.number,
      render: () => document.createElement("div")
    }));
  }
  /**
   * Callback for Block's settings buttons
   *
   * @param {number} level - level to set
   */
  setLevel(e) {
    this.data = {
      level: e,
      text: this.data.text
    };
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {HeaderData} data - saved data to merger with current block
   * @public
   */
  merge(e) {
    this._element.insertAdjacentHTML("beforeend", e.text);
  }
  /**
   * Validate Text block data:
   * - check for emptiness
   *
   * @param {HeaderData} blockData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return e.text.trim() !== "";
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
   * @returns {HeaderData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML,
      level: this.currentLevel.number
    };
  }
  /**
   * Allow Header to be converted to/from other blocks
   */
  static get conversionConfig() {
    return {
      export: "text",
      // use 'text' property for other blocks
      import: "text"
      // fill 'text' property from other block's export string
    };
  }
  /**
   * Sanitizer Rules
   */
  static get sanitize() {
    return {
      level: !1,
      text: {}
    };
  }
  /**
   * Returns true to notify core that read-only is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get current Tools`s data
   *
   * @returns {HeaderData} Current data
   * @private
   */
  get data() {
    return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
  }
  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {HeaderData} data — data to set
   * @private
   */
  set data(e) {
    if (this._data = this.normalizeData(e), e.level !== void 0 && this._element.parentNode) {
      const t = this.getTag();
      t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
    }
    e.text !== void 0 && (this._element.innerHTML = this._data.text || "");
  }
  /**
   * Get tag for target level
   * By default returns second-leveled header
   *
   * @returns {HTMLElement}
   */
  getTag() {
    const e = document.createElement(this.currentLevel.tag);
    return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", e.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e;
  }
  /**
   * Get current level
   *
   * @returns {level}
   */
  get currentLevel() {
    let e = this.levels.find((t) => t.number === this._data.level);
    return e || (e = this.defaultLevel), e;
  }
  /**
   * Return default level
   *
   * @returns {level}
   */
  get defaultLevel() {
    if (this._settings.defaultLevel) {
      const e = this.levels.find((t) => t.number === this._settings.defaultLevel);
      if (e)
        return e;
      console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels");
    }
    return this.levels[1];
  }
  /**
   * @typedef {object} level
   * @property {number} number - level number
   * @property {string} tag - tag corresponds with level number
   * @property {string} svg - icon
   */
  /**
   * Available header levels
   *
   * @returns {level[]}
   */
  get levels() {
    const e = [
      {
        number: 1,
        tag: "H1",
        svg: Gc
      },
      {
        number: 2,
        tag: "H2",
        svg: Zc
      },
      {
        number: 3,
        tag: "H3",
        svg: Jc
      },
      {
        number: 4,
        tag: "H4",
        svg: Qc
      },
      {
        number: 5,
        tag: "H5",
        svg: ed
      },
      {
        number: 6,
        tag: "H6",
        svg: td
      }
    ];
    return this._settings.levels ? e.filter(
      (t) => this._settings.levels.includes(t.number)
    ) : e;
  }
  /**
   * Handle H1-H6 tags on paste to substitute it with header Tool
   *
   * @param {PasteEvent} event - event with pasted content
   */
  onPaste(e) {
    const t = e.detail;
    if ("data" in t) {
      const o = t.data;
      let i = this.defaultLevel.number;
      switch (o.tagName) {
        case "H1":
          i = 1;
          break;
        case "H2":
          i = 2;
          break;
        case "H3":
          i = 3;
          break;
        case "H4":
          i = 4;
          break;
        case "H5":
          i = 5;
          break;
        case "H6":
          i = 6;
          break;
      }
      this._settings.levels && (i = this._settings.levels.reduce((r, s) => Math.abs(s - i) < Math.abs(r - i) ? s : r)), this.data = {
        level: i,
        text: o.innerHTML
      };
    }
  }
  /**
   * Used by Editor.js paste handling API.
   * Provides configuration to handle H1-H6 tags.
   *
   * @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}
   */
  static get pasteConfig() {
    return {
      tags: ["H1", "H2", "H3", "H4", "H5", "H6"]
    };
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: od,
      title: "Heading"
    };
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode('.cdx-nested-list{margin:0;padding:0;outline:none;counter-reset:item;list-style:none}.cdx-nested-list__item{line-height:1.6em;display:flex;margin:2px 0}.cdx-nested-list__item [contenteditable]{outline:none}.cdx-nested-list__item-body{flex-grow:2}.cdx-nested-list__item-content,.cdx-nested-list__item-children{flex-basis:100%}.cdx-nested-list__item-content{word-break:break-word;white-space:pre-wrap}.cdx-nested-list__item:before{counter-increment:item;margin-right:5px;white-space:nowrap}.cdx-nested-list--ordered>.cdx-nested-list__item:before{content:counters(item,".") ". "}.cdx-nested-list--unordered>.cdx-nested-list__item:before{content:"•"}.cdx-nested-list__settings{display:flex}.cdx-nested-list__settings .cdx-settings-button{width:50%}')), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
function re(n) {
  return n.nodeType === Node.ELEMENT_NODE;
}
function Oe(n, e = null, t) {
  const o = document.createElement(n);
  Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);
  for (const i in t)
    o[i] = t[i];
  return o;
}
function oi(n) {
  const e = Oe("div");
  return e.appendChild(n), e.innerHTML;
}
function Or(n) {
  let e;
  return n.nodeType !== Node.ELEMENT_NODE ? e = n.textContent : (e = n.innerHTML, e = e.replaceAll("<br>", "")), e?.trim().length === 0;
}
class ae {
  /**
   * Store internal properties
   */
  constructor() {
    this.savedFakeCaret = void 0;
  }
  /**
   * Saves caret position using hidden <span>
   *
   * @returns {void}
   */
  save() {
    const e = ae.range, t = Oe("span");
    t.hidden = !0, e && (e.insertNode(t), this.savedFakeCaret = t);
  }
  /**
   * Restores the caret position saved by the save() method
   *
   * @returns {void}
   */
  restore() {
    if (!this.savedFakeCaret)
      return;
    const e = window.getSelection();
    if (!e)
      return;
    const t = new Range();
    t.setStartAfter(this.savedFakeCaret), t.setEndAfter(this.savedFakeCaret), e.removeAllRanges(), e.addRange(t), setTimeout(() => {
      var o;
      (o = this.savedFakeCaret) == null || o.remove();
    }, 150);
  }
  /**
   * Returns the first range
   *
   * @returns {Range|null}
   */
  static get range() {
    const e = window.getSelection();
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  /**
   * Extract content fragment from Caret position to the end of contenteditable element
   *
   * @returns {DocumentFragment|void}
   */
  static extractFragmentFromCaretPositionTillTheEnd() {
    const e = window.getSelection();
    if (!e || !e.rangeCount)
      return;
    const t = e.getRangeAt(0);
    let o = t.startContainer;
    if (o.nodeType !== Node.ELEMENT_NODE) {
      if (!o.parentNode)
        return;
      o = o.parentNode;
    }
    if (!re(o))
      return;
    const i = o.closest("[contenteditable]");
    if (!i)
      return;
    t.deleteContents();
    const r = t.cloneRange();
    return r.selectNodeContents(i), r.setStart(t.endContainer, t.endOffset), r.extractContents();
  }
  /**
   * Set focus to contenteditable or native input element
   *
   * @param {HTMLElement} element - element where to set focus
   * @param {boolean} atStart - where to set focus: at the start or at the end
   * @returns {void}
   */
  static focus(e, t = !0) {
    const o = document.createRange(), i = window.getSelection();
    i && (o.selectNodeContents(e), o.collapse(t), i.removeAllRanges(), i.addRange(o));
  }
  /**
   * Check if the caret placed at the start of the contenteditable element
   *
   * @returns {boolean}
   */
  static isAtStart() {
    const e = window.getSelection();
    if (!e || e.focusOffset > 0)
      return !1;
    const t = e.focusNode;
    return !t || !re(t) ? !1 : ae.getHigherLevelSiblings(t, "left").every((o) => Or(o));
  }
  /**
   * Get all first-level (first child of [contenteditabel]) siblings from passed node
   * Then you can check it for emptiness
   *
   * @example
   * <div contenteditable>
   * <p></p>                            |
   * <p></p>                            | left first-level siblings
   * <p></p>                            |
   * <blockquote><a><b>adaddad</b><a><blockquote>       <-- passed node for example <b>
   * <p></p>                            |
   * <p></p>                            | right first-level siblings
   * <p></p>                            |
   * </div>
   * @param {HTMLElement} from - element from which siblings should be searched
   * @param {'left' | 'right'} direction - direction of search
   * @returns {HTMLElement[]}
   */
  static getHigherLevelSiblings(e, t = "left") {
    let o = e;
    const i = [];
    for (; o.parentNode && o.parentNode.contentEditable !== "true"; )
      o = o.parentNode;
    const r = t === "left" ? "previousSibling" : "nextSibling";
    for (; o[r]; )
      o = o[r], i.push(o);
    return i;
  }
}
const id = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>', ni = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';
let rd = class to {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to use native Enter behaviour
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {ToolboxConfig}
   */
  static get toolbox() {
    return {
      icon: ni,
      title: "List"
    };
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - tool constructor options
   * @param {ListData} params.data - previously saved data
   * @param {object} params.config - user config for Tool
   * @param {object} params.api - Editor.js API
   * @param {boolean} params.readOnly - read-only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    var r;
    this.nodes = {
      wrapper: null
    }, this.api = o, this.readOnly = i, this.config = t, this.defaultListStyle = ((r = this.config) == null ? void 0 : r.defaultStyle) === "ordered" ? "ordered" : "unordered";
    const s = {
      style: this.defaultListStyle,
      items: []
    };
    this.data = e && Object.keys(e).length ? e : s, this.caret = new ae();
  }
  /**
   * Returns list tag with items
   *
   * @returns {Element}
   * @public
   */
  render() {
    return this.nodes.wrapper = this.makeListWrapper(this.data.style, [
      this.CSS.baseBlock
    ]), this.data.items.length ? this.appendItems(this.data.items, this.nodes.wrapper) : this.appendItems(
      [
        {
          content: "",
          items: []
        }
      ],
      this.nodes.wrapper
    ), this.readOnly || this.nodes.wrapper.addEventListener(
      "keydown",
      (e) => {
        switch (e.key) {
          case "Enter":
            this.enterPressed(e);
            break;
          case "Backspace":
            this.backspace(e);
            break;
          case "Tab":
            e.shiftKey ? this.shiftTab(e) : this.addTab(e);
            break;
        }
      },
      !1
    ), this.nodes.wrapper;
  }
  /**
   * Creates Block Tune allowing to change the list style
   *
   * @public
   * @returns {Array}
   */
  renderSettings() {
    return [
      {
        name: "unordered",
        label: this.api.i18n.t("Unordered"),
        icon: id
      },
      {
        name: "ordered",
        label: this.api.i18n.t("Ordered"),
        icon: ni
      }
    ].map((e) => ({
      name: e.name,
      icon: e.icon,
      label: e.label,
      isActive: this.data.style === e.name,
      closeOnActivate: !0,
      onActivate: () => {
        this.listStyle = e.name;
      }
    }));
  }
  /**
   * On paste sanitzation config. Allow only tags that are allowed in the Tool.
   *
   * @returns {PasteConfig} - paste config.
   */
  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"]
    };
  }
  /**
   * On paste callback that is fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = e.detail.data;
    this.data = this.pasteHandler(t);
    const o = this.nodes.wrapper;
    o && o.parentNode && o.parentNode.replaceChild(this.render(), o);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   *
   * @param {HTMLUListElement|HTMLOListElement|HTMLLIElement} element
   * @returns {ListData}
   */
  pasteHandler(e) {
    const { tagName: t } = e;
    let o = "unordered", i;
    switch (t) {
      case "OL":
        o = "ordered", i = "ol";
        break;
      case "UL":
      case "LI":
        o = "unordered", i = "ul";
    }
    const r = {
      style: o,
      items: []
    }, s = (a) => Array.from(a.querySelectorAll(":scope > li")).map((c) => {
      var l;
      const u = c.querySelector(`:scope > ${i}`), d = u ? s(u) : [];
      return {
        content: ((l = c?.firstChild) == null ? void 0 : l.textContent) || "",
        items: d
      };
    });
    return r.items = s(e), r;
  }
  /**
   * Renders children list
   *
   * @param {ListItem[]} items - items data to append
   * @param {Element} parentItem - where to append
   * @returns {void}
   */
  appendItems(e, t) {
    e.forEach((o) => {
      const i = this.createItem(o.content, o.items);
      t.appendChild(i);
    });
  }
  /**
   * Renders the single item
   *
   * @param {string} content - item content to render
   * @param {ListItem[]} [items] - children
   * @returns {Element}
   */
  createItem(e, t = []) {
    const o = Oe("li", this.CSS.item), i = Oe("div", this.CSS.itemBody), r = Oe("div", this.CSS.itemContent, {
      innerHTML: e,
      contentEditable: (!this.readOnly).toString()
    });
    return i.appendChild(r), o.appendChild(i), t && t.length > 0 && this.addChildrenList(o, t), o;
  }
  /**
   * Extracts tool's data from the DOM
   *
   * @returns {ListData}
   */
  save() {
    const e = (t) => Array.from(
      t.querySelectorAll(`:scope > .${this.CSS.item}`)
    ).map((o) => {
      const i = o.querySelector(`.${this.CSS.itemChildren}`), r = this.getItemContent(o), s = i ? e(i) : [];
      return {
        content: r,
        items: s
      };
    });
    return {
      style: this.data.style,
      items: this.nodes.wrapper ? e(this.nodes.wrapper) : []
    };
  }
  /**
   * Append children list to passed item
   *
   * @param {Element} parentItem - item that should contain passed sub-items
   * @param {ListItem[]} items - sub items to append
   */
  addChildrenList(e, t) {
    const o = e.querySelector(`.${this.CSS.itemBody}`), i = this.makeListWrapper(void 0, [
      this.CSS.itemChildren
    ]);
    this.appendItems(t, i), o && o.appendChild(i);
  }
  /**
   * Creates main <ul> or <ol> tag depended on style
   *
   * @param {string} [style] - 'ordered' or 'unordered'
   * @param {string[]} [classes] - additional classes to append
   * @returns {HTMLOListElement|HTMLUListElement}
   */
  makeListWrapper(e = this.listStyle, t = []) {
    const o = e === "ordered" ? "ol" : "ul", i = e === "ordered" ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered;
    return t.push(i), Oe(o, [this.CSS.wrapper, ...t]);
  }
  /**
   * Styles
   *
   * @returns {NestedListCssClasses} - CSS classes names by keys
   * @private
   */
  get CSS() {
    return {
      baseBlock: this.api.styles.block,
      wrapper: "cdx-nested-list",
      wrapperOrdered: "cdx-nested-list--ordered",
      wrapperUnordered: "cdx-nested-list--unordered",
      item: "cdx-nested-list__item",
      itemBody: "cdx-nested-list__item-body",
      itemContent: "cdx-nested-list__item-content",
      itemChildren: "cdx-nested-list__item-children",
      settingsWrapper: "cdx-nested-list__settings",
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive
    };
  }
  /**
   * Get list style name
   *
   * @returns {string}
   */
  get listStyle() {
    return this.data.style || this.defaultListStyle;
  }
  /**
   * Set list style
   *
   * @param {ListDataStyle} style - new style to set
   */
  set listStyle(e) {
    if (!this.nodes || !this.nodes.wrapper)
      return;
    const t = Array.from(
      this.nodes.wrapper.querySelectorAll(`.${this.CSS.wrapper}`)
    );
    t.push(this.nodes.wrapper), t.forEach((o) => {
      o.classList.toggle(this.CSS.wrapperUnordered, e === "unordered"), o.classList.toggle(this.CSS.wrapperOrdered, e === "ordered");
    }), this.data.style = e;
  }
  /**
   * Returns current List item by the caret position
   *
   * @returns {Element}
   */
  get currentItem() {
    const e = window.getSelection();
    if (!e)
      return null;
    let t = e.anchorNode;
    return !t || (re(t) || (t = t.parentNode), !t) || !re(t) ? null : t.closest(`.${this.CSS.item}`);
  }
  /**
   * Handles Enter keypress
   *
   * @param {KeyboardEvent} event - keydown
   * @returns {void}
   */
  enterPressed(e) {
    const t = this.currentItem;
    if (e.stopPropagation(), e.preventDefault(), e.isComposing)
      return;
    const o = t ? this.getItemContent(t).trim().length === 0 : !0, i = t?.parentNode === this.nodes.wrapper, r = t?.nextElementSibling === null;
    if (i && r && o) {
      this.getOutOfList();
      return;
    } else if (r && o) {
      this.unshiftItem();
      return;
    }
    const s = ae.extractFragmentFromCaretPositionTillTheEnd();
    if (!s)
      return;
    const a = oi(s), c = t?.querySelector(
      `.${this.CSS.itemChildren}`
    ), l = this.createItem(a, void 0);
    c && Array.from(c.querySelectorAll(`.${this.CSS.item}`)).length > 0 ? c.prepend(l) : t?.after(l), this.focusItem(l);
  }
  /**
   * Decrease indentation of the current item
   *
   * @returns {void}
   */
  unshiftItem() {
    const e = this.currentItem;
    if (!e || !e.parentNode || !re(e.parentNode))
      return;
    const t = e.parentNode.closest(`.${this.CSS.item}`);
    if (!t)
      return;
    this.caret.save(), t.after(e), this.caret.restore();
    const o = t.querySelector(
      `.${this.CSS.itemChildren}`
    );
    o && o.children.length === 0 && o.remove();
  }
  /**
   * Return the item content
   *
   * @param {Element} item - item wrapper (<li>)
   * @returns {string}
   */
  getItemContent(e) {
    const t = e.querySelector(`.${this.CSS.itemContent}`);
    return !t || Or(t) ? "" : t.innerHTML;
  }
  /**
   * Sets focus to the item's content
   *
   * @param {Element} item - item (<li>) to select
   * @param {boolean} atStart - where to set focus: at the start or at the end
   * @returns {void}
   */
  focusItem(e, t = !0) {
    const o = e.querySelector(
      `.${this.CSS.itemContent}`
    );
    o && ae.focus(o, t);
  }
  /**
   * Get out from List Tool by Enter on the empty last item
   *
   * @returns {void}
   */
  getOutOfList() {
    var e;
    (e = this.currentItem) == null || e.remove(), this.api.blocks.insert(), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());
  }
  /**
   * Handle backspace
   *
   * @param {KeyboardEvent} event - keydown
   */
  backspace(e) {
    if (!ae.isAtStart())
      return;
    e.preventDefault();
    const t = this.currentItem;
    if (!t)
      return;
    const o = t.previousSibling;
    if (!t.parentNode || !re(t.parentNode))
      return;
    const i = t.parentNode.closest(`.${this.CSS.item}`);
    if (!o && !i || o && !re(o))
      return;
    e.stopPropagation();
    let r;
    if (o) {
      const u = o.querySelectorAll(
        `.${this.CSS.item}`
      );
      r = Array.from(u).pop() || o;
    } else
      r = i;
    const s = ae.extractFragmentFromCaretPositionTillTheEnd();
    if (!s)
      return;
    const a = oi(s);
    if (!r)
      return;
    const c = r.querySelector(
      `.${this.CSS.itemContent}`
    );
    if (!c)
      return;
    ae.focus(c, !1), this.caret.save(), c.insertAdjacentHTML("beforeend", a);
    let l = t.querySelectorAll(
      `.${this.CSS.itemChildren} > .${this.CSS.item}`
    );
    l = Array.from(l), l = l.filter((u) => !u.parentNode || !re(u.parentNode) ? !1 : u.parentNode.closest(`.${this.CSS.item}`) === t), l.reverse().forEach((u) => {
      o ? r.after(u) : t.after(u);
    }), t.remove(), this.caret.restore();
  }
  /**
   * Add indentation to current item
   *
   * @param {KeyboardEvent} event - keydown
   */
  addTab(e) {
    e.stopPropagation(), e.preventDefault();
    const t = this.currentItem;
    if (!t)
      return;
    const o = t.previousSibling;
    if (!o || !re(o) || !o)
      return;
    const i = o.querySelector(
      `.${this.CSS.itemChildren}`
    );
    if (this.caret.save(), i)
      i.appendChild(t);
    else {
      const r = this.makeListWrapper(void 0, [
        this.CSS.itemChildren
      ]), s = o.querySelector(`.${this.CSS.itemBody}`);
      r.appendChild(t), s?.appendChild(r);
    }
    this.caret.restore();
  }
  /**
   * Reduce indentation for current item
   *
   * @param {KeyboardEvent} event - keydown
   * @returns {void}
   */
  shiftTab(e) {
    e.stopPropagation(), e.preventDefault(), this.unshiftItem();
  }
  /**
   * Convert from list to text for conversionConfig
   *
   * @param {ListData} data
   * @returns {string}
   */
  static joinRecursive(e) {
    return e.items.map((t) => `${t.content} ${to.joinRecursive(t)}`).join("");
  }
  /**
   * Convert from text to list with import and export list to text
   */
  static get conversionConfig() {
    return {
      export: (e) => to.joinRecursive(e),
      import: (e) => ({
        items: [
          {
            content: e,
            items: []
          }
        ],
        style: "unordered"
      })
    };
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const sd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function ad(n) {
  const e = document.createElement("div");
  e.innerHTML = n.trim();
  const t = document.createDocumentFragment();
  return t.append(...Array.from(e.childNodes)), t;
}
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
let ld = class Lr {
  /**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph"
    }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : Lr.DEFAULT_PLACEHOLDER, this._data = e ?? {}, this._element = null, this._preserveBlank = t.preserveBlank ?? !1;
  }
  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (e.code !== "Backspace" && e.code !== "Delete" || !this._element)
      return;
    const { textContent: t } = this._element;
    t === "" && (this._element.innerHTML = "");
  }
  /**
   * Create Tool's view
   *
   * @returns {HTMLDivElement}
   * @private
   */
  drawView() {
    const e = document.createElement("DIV");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = "false", e.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = "true", e.addEventListener("keyup", this.onKeyUp)), e;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this._element = this.drawView(), this._element;
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */
  merge(e) {
    if (!this._element)
      return;
    this._data.text += e.text;
    const t = ad(e.text);
    this._element.appendChild(t), this._element.normalize();
  }
  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !(e.text.trim() === "" && !this._preserveBlank);
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML
    };
  }
  /**
   * On paste callback fired from Editor.
   *
   * @param {HTMLPasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = {
      text: e.detail.data.innerHTML
    };
    this._data = t, window.requestAnimationFrame(() => {
      this._element && (this._element.innerHTML = this._data.text || "");
    });
  }
  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   * @returns {ConversionConfig}
   */
  static get conversionConfig() {
    return {
      export: "text",
      // to convert Paragraph to other block, use 'text' property of saved data
      import: "text"
      // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }
  /**
   * Sanitizer rules
   * @returns {SanitizerConfig} - Edtior.js sanitizer config
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      }
    };
  }
  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {PasteConfig} - Paragraph Paste Setting
   */
  static get pasteConfig() {
    return {
      tags: ["P"]
    };
  }
  /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {ToolboxConfig} - Paragraph Toolbox Setting
   */
  static get toolbox() {
    return {
      icon: sd,
      title: "Text"
    };
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px;padding-bottom:0}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption{visibility:hidden;position:absolute;bottom:0;left:0;margin-bottom:10px}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__image-preloader{display:none}.image-tool--empty .image-tool__caption,.image-tool--uploading .image-tool__caption{visibility:hidden!important}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--uploading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--uploading .image-tool__image-picture,.image-tool--uploading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}.image-tool--caption .image-tool__caption{visibility:visible}.image-tool--caption{padding-bottom:50px}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const cd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', dd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', Mr = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', ud = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>', hd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function Ce(n, e = null, t = {}) {
  const o = document.createElement(n);
  Array.isArray(e) ? o.classList.add(...e) : e !== null && o.classList.add(e);
  for (const i in t)
    t.hasOwnProperty(i) && (o[i] = t[i]);
  return o;
}
var st = /* @__PURE__ */ ((n) => (n.Empty = "empty", n.Uploading = "uploading", n.Filled = "filled", n))(st || {});
let pd = class {
  /**
   * @param ui - image tool Ui module
   * @param ui.api - Editor.js API
   * @param ui.config - user config
   * @param ui.onSelectFile - callback for clicks on Select file button
   * @param ui.readOnly - read-only mode flag
   */
  constructor({ api: e, config: t, onSelectFile: o, readOnly: i }) {
    this.api = e, this.config = t, this.onSelectFile = o, this.readOnly = i, this.nodes = {
      wrapper: Ce("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: Ce("div", [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: void 0,
      imagePreloader: Ce("div", this.CSS.imagePreloader),
      caption: Ce("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  /**
   * Apply visual representation of activated tune
   * @param tuneName - one of available tunes {@link Tunes.tunes}
   * @param status - true for enable, false for disable
   */
  applyTune(e, t) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${e}`, t);
  }
  /**
   * Renders tool UI
   */
  render() {
    return this.toggleStatus(
      "empty"
      /* Empty */
    ), this.nodes.wrapper;
  }
  /**
   * Shows uploading preloader
   * @param src - preview source
   */
  showPreloader(e) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${e})`, this.toggleStatus(
      "uploading"
      /* Uploading */
    );
  }
  /**
   * Hide uploading preloader
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(
      "empty"
      /* Empty */
    );
  }
  /**
   * Shows an image
   * @param url - image source
   */
  fillImage(e) {
    const t = /\.mp4$/.test(e) ? "VIDEO" : "IMG", o = {
      src: e
    };
    let i = "load";
    t === "VIDEO" && (o.autoplay = !0, o.loop = !0, o.muted = !0, o.playsinline = !0, i = "loadeddata"), this.nodes.imageEl = Ce(t, this.CSS.imageEl, o), this.nodes.imageEl.addEventListener(i, () => {
      this.toggleStatus(
        "filled"
        /* Filled */
      ), this.nodes.imagePreloader !== void 0 && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows caption input
   * @param text - caption content text
   */
  fillCaption(e) {
    this.nodes.caption !== void 0 && (this.nodes.caption.innerHTML = e);
  }
  /**
   * Changes UI status
   * @param status - see {@link Ui.status} constants
   */
  toggleStatus(e) {
    for (const t in st)
      if (Object.prototype.hasOwnProperty.call(st, t)) {
        const o = st[t];
        this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${o}`, o === e);
      }
  }
  /**
   * CSS classes
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "image-tool",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption"
    };
  }
  /**
   * Creates upload-file button
   */
  createFileButton() {
    const e = Ce("div", [this.CSS.button]);
    return e.innerHTML = this.config.buttonContent ?? `${Mr} ${this.api.i18n.t("Select an Image")}`, e.addEventListener("click", () => {
      this.onSelectFile();
    }), e;
  }
};
function fd(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ir = { exports: {} };
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return (function(t) {
      var o = {};
      function i(r) {
        if (o[r]) return o[r].exports;
        var s = o[r] = { i: r, l: !1, exports: {} };
        return t[r].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
      }
      return i.m = t, i.c = o, i.d = function(r, s, a) {
        i.o(r, s) || Object.defineProperty(r, s, { enumerable: !0, get: a });
      }, i.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, i.t = function(r, s) {
        if (1 & s && (r = i(r)), 8 & s || 4 & s && typeof r == "object" && r && r.__esModule) return r;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: r }), 2 & s && typeof r != "string") for (var c in r) i.d(a, c, (function(l) {
          return r[l];
        }).bind(null, c));
        return a;
      }, i.n = function(r) {
        var s = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return i.d(s, "a", s), s;
      }, i.o = function(r, s) {
        return Object.prototype.hasOwnProperty.call(r, s);
      }, i.p = "", i(i.s = 3);
    })([function(t, o) {
      var i;
      i = /* @__PURE__ */ (function() {
        return this;
      })();
      try {
        i = i || new Function("return this")();
      } catch {
        typeof window == "object" && (i = window);
      }
      t.exports = i;
    }, function(t, o, i) {
      (function(r) {
        var s = i(2), a = setTimeout;
        function c() {
        }
        function l(p) {
          if (!(this instanceof l)) throw new TypeError("Promises must be constructed via new");
          if (typeof p != "function") throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], h(p, this);
        }
        function u(p, m) {
          for (; p._state === 3; ) p = p._value;
          p._state !== 0 ? (p._handled = !0, l._immediateFn(function() {
            var b = p._state === 1 ? m.onFulfilled : m.onRejected;
            if (b !== null) {
              var w;
              try {
                w = b(p._value);
              } catch (k) {
                return void g(m.promise, k);
              }
              d(m.promise, w);
            } else (p._state === 1 ? d : g)(m.promise, p._value);
          })) : p._deferreds.push(m);
        }
        function d(p, m) {
          try {
            if (m === p) throw new TypeError("A promise cannot be resolved with itself.");
            if (m && (typeof m == "object" || typeof m == "function")) {
              var b = m.then;
              if (m instanceof l) return p._state = 3, p._value = m, void v(p);
              if (typeof b == "function") return void h((w = b, k = m, function() {
                w.apply(k, arguments);
              }), p);
            }
            p._state = 1, p._value = m, v(p);
          } catch (y) {
            g(p, y);
          }
          var w, k;
        }
        function g(p, m) {
          p._state = 2, p._value = m, v(p);
        }
        function v(p) {
          p._state === 2 && p._deferreds.length === 0 && l._immediateFn(function() {
            p._handled || l._unhandledRejectionFn(p._value);
          });
          for (var m = 0, b = p._deferreds.length; m < b; m++) u(p, p._deferreds[m]);
          p._deferreds = null;
        }
        function f(p, m, b) {
          this.onFulfilled = typeof p == "function" ? p : null, this.onRejected = typeof m == "function" ? m : null, this.promise = b;
        }
        function h(p, m) {
          var b = !1;
          try {
            p(function(w) {
              b || (b = !0, d(m, w));
            }, function(w) {
              b || (b = !0, g(m, w));
            });
          } catch (w) {
            if (b) return;
            b = !0, g(m, w);
          }
        }
        l.prototype.catch = function(p) {
          return this.then(null, p);
        }, l.prototype.then = function(p, m) {
          var b = new this.constructor(c);
          return u(this, new f(p, m, b)), b;
        }, l.prototype.finally = s.a, l.all = function(p) {
          return new l(function(m, b) {
            if (!p || p.length === void 0) throw new TypeError("Promise.all accepts an array");
            var w = Array.prototype.slice.call(p);
            if (w.length === 0) return m([]);
            var k = w.length;
            function y(O, E) {
              try {
                if (E && (typeof E == "object" || typeof E == "function")) {
                  var C = E.then;
                  if (typeof C == "function") return void C.call(E, function(T) {
                    y(O, T);
                  }, b);
                }
                w[O] = E, --k == 0 && m(w);
              } catch (T) {
                b(T);
              }
            }
            for (var S = 0; S < w.length; S++) y(S, w[S]);
          });
        }, l.resolve = function(p) {
          return p && typeof p == "object" && p.constructor === l ? p : new l(function(m) {
            m(p);
          });
        }, l.reject = function(p) {
          return new l(function(m, b) {
            b(p);
          });
        }, l.race = function(p) {
          return new l(function(m, b) {
            for (var w = 0, k = p.length; w < k; w++) p[w].then(m, b);
          });
        }, l._immediateFn = typeof r == "function" && function(p) {
          r(p);
        } || function(p) {
          a(p, 0);
        }, l._unhandledRejectionFn = function(p) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", p);
        }, o.a = l;
      }).call(this, i(5).setImmediate);
    }, function(t, o, i) {
      o.a = function(r) {
        var s = this.constructor;
        return this.then(function(a) {
          return s.resolve(r()).then(function() {
            return a;
          });
        }, function(a) {
          return s.resolve(r()).then(function() {
            return s.reject(a);
          });
        });
      };
    }, function(t, o, i) {
      function r(h) {
        return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
          return typeof p;
        } : function(p) {
          return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
        })(h);
      }
      i(4);
      var s, a, c, l, u, d, g, v = i(8), f = (a = function(h) {
        return new Promise(function(p, m) {
          h = l(h), (h = u(h)).beforeSend && h.beforeSend();
          var b = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          b.open(h.method, h.url), b.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(h.headers).forEach(function(k) {
            var y = h.headers[k];
            b.setRequestHeader(k, y);
          });
          var w = h.ratio;
          b.upload.addEventListener("progress", function(k) {
            var y = Math.round(k.loaded / k.total * 100), S = Math.ceil(y * w / 100);
            h.progress(Math.min(S, 100));
          }, !1), b.addEventListener("progress", function(k) {
            var y = Math.round(k.loaded / k.total * 100), S = Math.ceil(y * (100 - w) / 100) + w;
            h.progress(Math.min(S, 100));
          }, !1), b.onreadystatechange = function() {
            if (b.readyState === 4) {
              var k = b.response;
              try {
                k = JSON.parse(k);
              } catch {
              }
              var y = v.parseHeaders(b.getAllResponseHeaders()), S = { body: k, code: b.status, headers: y };
              g(b.status) ? p(S) : m(S);
            }
          }, b.send(h.data);
        });
      }, c = function(h) {
        return h.method = "POST", a(h);
      }, l = function() {
        var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (h.url && typeof h.url != "string") throw new Error("Url must be a string");
        if (h.url = h.url || "", h.method && typeof h.method != "string") throw new Error("`method` must be a string or null");
        if (h.method = h.method ? h.method.toUpperCase() : "GET", h.headers && r(h.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (h.headers = h.headers || {}, h.type && (typeof h.type != "string" || !Object.values(s).includes(h.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (h.progress && typeof h.progress != "function") throw new Error("`progress` must be a function or null");
        if (h.progress = h.progress || function(p) {
        }, h.beforeSend = h.beforeSend || function(p) {
        }, h.ratio && typeof h.ratio != "number") throw new Error("`ratio` must be a number");
        if (h.ratio < 0 || h.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (h.ratio = h.ratio || 90, h.accept && typeof h.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (h.accept = h.accept || "*/*", h.multiple && typeof h.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (h.multiple = h.multiple || !1, h.fieldName && typeof h.fieldName != "string") throw new Error("`fieldName` must be a string");
        return h.fieldName = h.fieldName || "files", h;
      }, u = function(h) {
        switch (h.method) {
          case "GET":
            var p = d(h.data, s.URLENCODED);
            delete h.data, h.url = /\?/.test(h.url) ? h.url + "&" + p : h.url + "?" + p;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var m = (function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || s.JSON;
            })(h);
            (v.isFormData(h.data) || v.isFormElement(h.data)) && (m = s.FORM), h.data = d(h.data, m), m !== f.contentType.FORM && (h.headers["content-type"] = m);
        }
        return h;
      }, d = function() {
        var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case s.URLENCODED:
            return v.urlEncode(h);
          case s.JSON:
            return v.jsonEncode(h);
          case s.FORM:
            return v.formEncode(h);
          default:
            return h;
        }
      }, g = function(h) {
        return h >= 200 && h < 300;
      }, { contentType: s = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: a, get: function(h) {
        return h.method = "GET", a(h);
      }, post: c, transport: function(h) {
        return h = l(h), v.selectFiles(h).then(function(p) {
          for (var m = new FormData(), b = 0; b < p.length; b++) m.append(h.fieldName, p[b], p[b].name);
          v.isObject(h.data) && Object.keys(h.data).forEach(function(k) {
            var y = h.data[k];
            m.append(k, y);
          });
          var w = h.beforeSend;
          return h.beforeSend = function() {
            return w(p);
          }, h.data = m, c(h);
        });
      }, selectFiles: function(h) {
        return delete (h = l(h)).beforeSend, v.selectFiles(h);
      } });
      t.exports = f;
    }, function(t, o, i) {
      i.r(o);
      var r = i(1);
      window.Promise = window.Promise || r.a;
    }, function(t, o, i) {
      (function(r) {
        var s = r !== void 0 && r || typeof self < "u" && self || window, a = Function.prototype.apply;
        function c(l, u) {
          this._id = l, this._clearFn = u;
        }
        o.setTimeout = function() {
          return new c(a.call(setTimeout, s, arguments), clearTimeout);
        }, o.setInterval = function() {
          return new c(a.call(setInterval, s, arguments), clearInterval);
        }, o.clearTimeout = o.clearInterval = function(l) {
          l && l.close();
        }, c.prototype.unref = c.prototype.ref = function() {
        }, c.prototype.close = function() {
          this._clearFn.call(s, this._id);
        }, o.enroll = function(l, u) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = u;
        }, o.unenroll = function(l) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
        }, o._unrefActive = o.active = function(l) {
          clearTimeout(l._idleTimeoutId);
          var u = l._idleTimeout;
          u >= 0 && (l._idleTimeoutId = setTimeout(function() {
            l._onTimeout && l._onTimeout();
          }, u));
        }, i(6), o.setImmediate = typeof self < "u" && self.setImmediate || r !== void 0 && r.setImmediate || this && this.setImmediate, o.clearImmediate = typeof self < "u" && self.clearImmediate || r !== void 0 && r.clearImmediate || this && this.clearImmediate;
      }).call(this, i(0));
    }, function(t, o, i) {
      (function(r, s) {
        (function(a, c) {
          if (!a.setImmediate) {
            var l, u, d, g, v, f = 1, h = {}, p = !1, m = a.document, b = Object.getPrototypeOf && Object.getPrototypeOf(a);
            b = b && b.setTimeout ? b : a, {}.toString.call(a.process) === "[object process]" ? l = function(y) {
              s.nextTick(function() {
                k(y);
              });
            } : (function() {
              if (a.postMessage && !a.importScripts) {
                var y = !0, S = a.onmessage;
                return a.onmessage = function() {
                  y = !1;
                }, a.postMessage("", "*"), a.onmessage = S, y;
              }
            })() ? (g = "setImmediate$" + Math.random() + "$", v = function(y) {
              y.source === a && typeof y.data == "string" && y.data.indexOf(g) === 0 && k(+y.data.slice(g.length));
            }, a.addEventListener ? a.addEventListener("message", v, !1) : a.attachEvent("onmessage", v), l = function(y) {
              a.postMessage(g + y, "*");
            }) : a.MessageChannel ? ((d = new MessageChannel()).port1.onmessage = function(y) {
              k(y.data);
            }, l = function(y) {
              d.port2.postMessage(y);
            }) : m && "onreadystatechange" in m.createElement("script") ? (u = m.documentElement, l = function(y) {
              var S = m.createElement("script");
              S.onreadystatechange = function() {
                k(y), S.onreadystatechange = null, u.removeChild(S), S = null;
              }, u.appendChild(S);
            }) : l = function(y) {
              setTimeout(k, 0, y);
            }, b.setImmediate = function(y) {
              typeof y != "function" && (y = new Function("" + y));
              for (var S = new Array(arguments.length - 1), O = 0; O < S.length; O++) S[O] = arguments[O + 1];
              var E = { callback: y, args: S };
              return h[f] = E, l(f), f++;
            }, b.clearImmediate = w;
          }
          function w(y) {
            delete h[y];
          }
          function k(y) {
            if (p) setTimeout(k, 0, y);
            else {
              var S = h[y];
              if (S) {
                p = !0;
                try {
                  (function(O) {
                    var E = O.callback, C = O.args;
                    switch (C.length) {
                      case 0:
                        E();
                        break;
                      case 1:
                        E(C[0]);
                        break;
                      case 2:
                        E(C[0], C[1]);
                        break;
                      case 3:
                        E(C[0], C[1], C[2]);
                        break;
                      default:
                        E.apply(c, C);
                    }
                  })(S);
                } finally {
                  w(y), p = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, i(0), i(7));
    }, function(t, o) {
      var i, r, s = t.exports = {};
      function a() {
        throw new Error("setTimeout has not been defined");
      }
      function c() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(b) {
        if (i === setTimeout) return setTimeout(b, 0);
        if ((i === a || !i) && setTimeout) return i = setTimeout, setTimeout(b, 0);
        try {
          return i(b, 0);
        } catch {
          try {
            return i.call(null, b, 0);
          } catch {
            return i.call(this, b, 0);
          }
        }
      }
      (function() {
        try {
          i = typeof setTimeout == "function" ? setTimeout : a;
        } catch {
          i = a;
        }
        try {
          r = typeof clearTimeout == "function" ? clearTimeout : c;
        } catch {
          r = c;
        }
      })();
      var u, d = [], g = !1, v = -1;
      function f() {
        g && u && (g = !1, u.length ? d = u.concat(d) : v = -1, d.length && h());
      }
      function h() {
        if (!g) {
          var b = l(f);
          g = !0;
          for (var w = d.length; w; ) {
            for (u = d, d = []; ++v < w; ) u && u[v].run();
            v = -1, w = d.length;
          }
          u = null, g = !1, (function(k) {
            if (r === clearTimeout) return clearTimeout(k);
            if ((r === c || !r) && clearTimeout) return r = clearTimeout, clearTimeout(k);
            try {
              r(k);
            } catch {
              try {
                return r.call(null, k);
              } catch {
                return r.call(this, k);
              }
            }
          })(b);
        }
      }
      function p(b, w) {
        this.fun = b, this.array = w;
      }
      function m() {
      }
      s.nextTick = function(b) {
        var w = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var k = 1; k < arguments.length; k++) w[k - 1] = arguments[k];
        d.push(new p(b, w)), d.length !== 1 || g || l(h);
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = m, s.addListener = m, s.once = m, s.off = m, s.removeListener = m, s.removeAllListeners = m, s.emit = m, s.prependListener = m, s.prependOnceListener = m, s.listeners = function(b) {
        return [];
      }, s.binding = function(b) {
        throw new Error("process.binding is not supported");
      }, s.cwd = function() {
        return "/";
      }, s.chdir = function(b) {
        throw new Error("process.chdir is not supported");
      }, s.umask = function() {
        return 0;
      };
    }, function(t, o, i) {
      function r(a, c) {
        for (var l = 0; l < c.length; l++) {
          var u = c[l];
          u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(a, u.key, u);
        }
      }
      var s = i(9);
      t.exports = (function() {
        function a() {
          (function(d, g) {
            if (!(d instanceof g)) throw new TypeError("Cannot call a class as a function");
          })(this, a);
        }
        var c, l, u;
        return c = a, u = [{ key: "urlEncode", value: function(d) {
          return s(d);
        } }, { key: "jsonEncode", value: function(d) {
          return JSON.stringify(d);
        } }, { key: "formEncode", value: function(d) {
          if (this.isFormData(d)) return d;
          if (this.isFormElement(d)) return new FormData(d);
          if (this.isObject(d)) {
            var g = new FormData();
            return Object.keys(d).forEach(function(v) {
              var f = d[v];
              g.append(v, f);
            }), g;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(d) {
          return Object.prototype.toString.call(d) === "[object Object]";
        } }, { key: "isFormData", value: function(d) {
          return d instanceof FormData;
        } }, { key: "isFormElement", value: function(d) {
          return d instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(g, v) {
            var f = document.createElement("INPUT");
            f.type = "file", d.multiple && f.setAttribute("multiple", "multiple"), d.accept && f.setAttribute("accept", d.accept), f.style.display = "none", document.body.appendChild(f), f.addEventListener("change", function(h) {
              var p = h.target.files;
              g(p), document.body.removeChild(f);
            }, !1), f.click();
          });
        } }, { key: "parseHeaders", value: function(d) {
          var g = d.trim().split(/[\r\n]+/), v = {};
          return g.forEach(function(f) {
            var h = f.split(": "), p = h.shift(), m = h.join(": ");
            p && (v[p] = m);
          }), v;
        } }], (l = null) && r(c.prototype, l), u && r(c, u), a;
      })();
    }, function(t, o) {
      var i = function(s) {
        return encodeURIComponent(s).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, r = function(s, a, c, l) {
        return a = a || null, c = c || "&", l = l || null, s ? (function(u) {
          for (var d = new Array(), g = 0; g < u.length; g++) u[g] && d.push(u[g]);
          return d;
        })(Object.keys(s).map(function(u) {
          var d, g, v = u;
          if (l && (v = l + "[" + v + "]"), typeof s[u] == "object" && s[u] !== null) d = r(s[u], null, c, v);
          else {
            a && (g = v, v = !isNaN(parseFloat(g)) && isFinite(g) ? a + Number(v) : v);
            var f = s[u];
            f = (f = (f = (f = f === !0 ? "1" : f) === !1 ? "0" : f) === 0 ? "0" : f) || "", d = i(v) + "=" + i(f);
          }
          return d;
        })).join(c).replace(/[!'()*]/g, "") : "";
      };
      t.exports = r;
    }]);
  });
})(Ir);
var gd = Ir.exports;
const Ee = /* @__PURE__ */ fd(gd);
function Ut(n) {
  return n !== void 0 && typeof n.then == "function";
}
let md = class {
  /**
   * @param params - uploader module params
   * @param params.config - image tool config
   * @param params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param params.onError - callback for uploading errors
   */
  constructor({ config: e, onUpload: t, onError: o }) {
    this.config = e, this.onUpload = t, this.onError = o;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   * @param onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: e }) {
    const t = function(i) {
      const r = new FileReader();
      r.readAsDataURL(i), r.onload = (s) => {
        e(s.target.result);
      };
    };
    let o;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
      const i = this.config.uploader.uploadByFile;
      o = Ee.selectFiles({ accept: this.config.types ?? "image/*" }).then((r) => {
        t(r[0]);
        const s = i(r[0]);
        return Ut(s) || console.warn("Custom uploader method uploadByFile should return a Promise"), s;
      });
    } else
      o = Ee.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types ?? "image/*",
        headers: this.config.additionalRequestHeaders,
        beforeSend: (i) => {
          t(i[0]);
        },
        fieldName: this.config.field ?? "image"
      }).then((i) => i.body);
    o.then((i) => {
      this.onUpload(i);
    }).catch((i) => {
      this.onError(i);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param url - image source url
   */
  uploadByUrl(e) {
    let t;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (t = this.config.uploader.uploadByUrl(e), Ut(t) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : t = Ee.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: e
      }, this.config.additionalRequestData),
      type: Ee.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((o) => o.body), t.then((o) => {
      this.onUpload(o);
    }).catch((o) => {
      this.onError(o);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param file - file pasted by drag-n-drop
   * @param onPreview - file pasted by drag-n-drop
   */
  uploadByFile(e, { onPreview: t }) {
    const o = new FileReader();
    o.readAsDataURL(e), o.onload = (r) => {
      t(r.target.result);
    };
    let i;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      i = this.config.uploader.uploadByFile(e), Ut(i) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const r = new FormData();
      r.append(this.config.field ?? "image", e), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([s, a]) => {
        r.append(s, a);
      }), i = Ee.post({
        url: this.config.endpoints.byFile,
        data: r,
        type: Ee.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((s) => s.body);
    }
    i.then((r) => {
      this.onUpload(r);
    }).catch((r) => {
      this.onError(r);
    });
  }
};
/**
 * Image Tool for the Editor.js
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.ts — main Tool's interface, public API and methods for working with data
 *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
let bd = class oo {
  /**
   * @param tool - tool properties got from editor.js
   * @param tool.data - previously saved data
   * @param tool.config - user config for Tool
   * @param tool.api - Editor.js API
   * @param tool.readOnly - read-only mode flag
   * @param tool.block - current Block API
   */
  constructor({ data: e, config: t, api: o, readOnly: i, block: r }) {
    this.isCaptionEnabled = null, this.api = o, this.block = r, this.config = {
      endpoints: t.endpoints,
      additionalRequestData: t.additionalRequestData,
      additionalRequestHeaders: t.additionalRequestHeaders,
      field: t.field,
      types: t.types,
      captionPlaceholder: this.api.i18n.t(t.captionPlaceholder ?? "Caption"),
      buttonContent: t.buttonContent,
      uploader: t.uploader,
      actions: t.actions,
      features: t.features || {}
    }, this.uploader = new md({
      config: this.config,
      onUpload: (s) => this.onUpload(s),
      onError: (s) => this.uploadingFailed(s)
    }), this.ui = new pd({
      api: o,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (s) => {
            this.ui.showPreloader(s);
          }
        });
      },
      readOnly: i
    }), this._data = {
      caption: "",
      withBorder: !1,
      withBackground: !1,
      stretched: !1,
      file: {
        url: ""
      }
    }, this.data = e;
  }
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return {
      icon: Mr,
      title: "Image"
    };
  }
  /**
   * Available image tools
   */
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: dd,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: ud,
        title: "Stretch image",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: cd,
        title: "With background",
        toggle: !0
      }
    ];
  }
  /**
   * Renders Block content
   */
  render() {
    var e, t, o;
    return (((e = this.config.features) == null ? void 0 : e.caption) === !0 || ((t = this.config.features) == null ? void 0 : t.caption) === void 0 || ((o = this.config.features) == null ? void 0 : o.caption) === "optional" && this.data.caption) && (this.isCaptionEnabled = !0, this.ui.applyTune("caption", !0)), this.ui.render();
  }
  /**
   * Validate data: check if Image exists
   * @param savedData — data received after saving
   * @returns false if saved data is not correct, otherwise true
   */
  validate(e) {
    return !!e.file.url;
  }
  /**
   * Return Block data
   */
  save() {
    const e = this.ui.nodes.caption;
    return this._data.caption = e.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   * @returns TunesMenuConfig
   */
  renderSettings() {
    var e;
    const t = oo.tunes.concat(this.config.actions || []), o = {
      border: "withBorder",
      background: "withBackground",
      stretch: "stretched",
      caption: "caption"
    };
    ((e = this.config.features) == null ? void 0 : e.caption) === "optional" && t.push({
      name: "caption",
      icon: hd,
      title: "With caption",
      toggle: !0
    });
    const i = t.filter((s) => {
      var a, c;
      const l = Object.keys(o).find((u) => o[u] === s.name);
      return l === "caption" ? ((a = this.config.features) == null ? void 0 : a.caption) !== !1 : l == null || ((c = this.config.features) == null ? void 0 : c[l]) !== !1;
    }), r = (s) => {
      let a = this.data[s.name];
      return s.name === "caption" && (a = this.isCaptionEnabled ?? a), a;
    };
    return i.map((s) => ({
      icon: s.icon,
      label: this.api.i18n.t(s.title),
      name: s.name,
      toggle: s.toggle,
      isActive: r(s),
      onActivate: () => {
        if (typeof s.action == "function") {
          s.action(s.name);
          return;
        }
        let a = !r(s);
        s.name === "caption" && (this.isCaptionEnabled = !(this.isCaptionEnabled ?? !1), a = this.isCaptionEnabled), this.tuneToggled(s.name, a);
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          img: { src: !0 }
        }
      ],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   */
  async onPaste(e) {
    switch (e.type) {
      case "tag": {
        const t = e.detail.data;
        if (/^blob:/.test(t.src)) {
          const o = await (await fetch(t.src)).blob();
          this.uploadFile(o);
          break;
        }
        this.uploadUrl(t.src);
        break;
      }
      case "pattern": {
        const t = e.detail.data;
        this.uploadUrl(t);
        break;
      }
      case "file": {
        const t = e.detail.file;
        this.uploadFile(t);
        break;
      }
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   * @param data - data in Image Tool format
   */
  set data(e) {
    var t;
    this.image = e.file, this._data.caption = e.caption || "", this.ui.fillCaption(this._data.caption), oo.tunes.forEach(({ name: o }) => {
      const i = typeof e[o] < "u" ? e[o] === !0 || e[o] === "true" : !1;
      this.setTune(o, i);
    }), e.caption ? this.setTune("caption", !0) : ((t = this.config.features) == null ? void 0 : t.caption) === !0 && this.setTune("caption", !0);
  }
  /**
   * Return Tool data
   */
  get data() {
    return this._data;
  }
  /**
   * Set new image file
   * @param file - uploaded file data
   */
  set image(e) {
    this._data.file = e || { url: "" }, e && e.url && this.ui.fillImage(e.url);
  }
  /**
   * File uploading callback
   * @param response - uploading server response
   */
  onUpload(e) {
    e.success && e.file ? this.image = e.file : this.uploadingFailed("incorrect response: " + JSON.stringify(e));
  }
  /**
   * Handle uploader errors
   * @param errorText - uploading error info
   */
  uploadingFailed(e) {
    console.log("Image Tool: uploading failed because of", e), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   * @param tuneName - tune that has been clicked
   * @param state - new state
   */
  tuneToggled(e, t) {
    e === "caption" ? (this.ui.applyTune(e, t), t == !1 && (this._data.caption = "", this.ui.fillCaption(""))) : this.setTune(e, t);
  }
  /**
   * Set one tune
   * @param tuneName - {@link Tunes.tunes}
   * @param value - tune state
   */
  setTune(e, t) {
    this._data[e] = t, this.ui.applyTune(e, t), e === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = t;
    }).catch((o) => {
      console.error(o);
    });
  }
  /**
   * Show preloader and upload image file
   * @param file - file that is currently uploading (from paste)
   */
  uploadFile(e) {
    this.uploader.uploadByFile(e, {
      onPreview: (t) => {
        this.ui.showPreloader(t);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   * @param url - url pasted
   */
  uploadUrl(e) {
    this.ui.showPreloader(e), this.uploader.uploadByUrl(e);
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".ce-code__textarea{min-height:200px;font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#41314e;line-height:1.6em;font-size:12px;background:#f8f7fa;border:1px solid #f1f1f4;box-shadow:none;white-space:pre;word-wrap:normal;overflow-x:auto;resize:vertical}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
function vd(n, e) {
  let t = "";
  for (; t !== `
` && e > 0; )
    e = e - 1, t = n.substr(e, 1);
  return t === `
` && (e += 1), e;
}
const yd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
/**
 * CodeTool for Editor.js
 * @version 2.0.0
 * @license MIT
 */
let wd = class Pr {
  /**
   * Notify core that read-only mode is supported
   * @returns true if read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allows pressing Enter key to create line breaks inside the CodeTool textarea
   * This enables multi-line input within the code editor.
   * @returns true if line breaks are allowed in the textarea
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   * @param options - tool constricting options
   * @param options.data — previously saved plugin code
   * @param options.config - user config for Tool
   * @param options.api - Editor.js API
   * @param options.readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this.placeholder = this.api.i18n.t(t.placeholder || Pr.DEFAULT_PLACEHOLDER), this.CSS = {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      wrapper: "ce-code",
      textarea: "ce-code__textarea"
    }, this.nodes = {
      holder: null,
      textarea: null
    }, this.data = {
      code: e.code ?? ""
    }, this.nodes.holder = this.drawView();
  }
  /**
   * Return Tool's view
   * @returns this.nodes.holder - Code's wrapper
   */
  render() {
    return this.nodes.holder;
  }
  /**
   * Extract Tool's data from the view
   * @param codeWrapper - CodeTool's wrapper, containing textarea with code
   * @returns - saved plugin code
   */
  save(e) {
    return {
      code: e.querySelector("textarea").value
    };
  }
  /**
   * onPaste callback fired from Editor`s core
   * @param event - event with pasted content
   */
  onPaste(e) {
    const t = e.detail;
    if ("data" in t) {
      const o = t.data;
      this.data = {
        code: o || ""
      };
    }
  }
  /**
   * Returns Tool`s data from private property
   * @returns
   */
  get data() {
    return this._data;
  }
  /**
   * Set Tool`s data to private property and update view
   * @param data - saved tool data
   */
  set data(e) {
    this._data = e, this.nodes.textarea && (this.nodes.textarea.value = e.code);
  }
  /**
   * Get Tool toolbox settings.
   * Provides the icon and title to display in the toolbox for the CodeTool.
   * @returns An object containing:
   * - icon: SVG representation of the Tool's icon
   * - title: Title to show in the toolbox
   */
  static get toolbox() {
    return {
      icon: yd,
      title: "Code"
    };
  }
  /**
   * Default placeholder for CodeTool's textarea
   * @returns
   */
  static get DEFAULT_PLACEHOLDER() {
    return "Enter a code";
  }
  /**
   *  Used by Editor.js paste handling API.
   *  Provides configuration to handle CODE tag.
   * @returns
   */
  static get pasteConfig() {
    return {
      tags: ["pre"]
    };
  }
  /**
   * Automatic sanitize config
   * @returns
   */
  static get sanitize() {
    return {
      code: !0
      // Allow HTML tags
    };
  }
  /**
   * Handles Tab key pressing (adds/removes indentations)
   * @param event - keydown
   */
  tabHandler(e) {
    e.stopPropagation(), e.preventDefault();
    const t = e.target, o = e.shiftKey, i = t.selectionStart, r = t.value, s = "  ";
    let a;
    if (!o)
      a = i + s.length, t.value = r.substring(0, i) + s + r.substring(i);
    else {
      const c = vd(r, i);
      if (r.substr(c, s.length) !== s)
        return;
      t.value = r.substring(0, c) + r.substring(c + s.length), a = i - s.length;
    }
    t.setSelectionRange(a, a);
  }
  /**
   * Create Tool's view
   * @returns
   */
  drawView() {
    const e = document.createElement("div"), t = document.createElement("textarea");
    return e.classList.add(this.CSS.baseClass, this.CSS.wrapper), t.classList.add(this.CSS.textarea, this.CSS.input), t.value = this.data.code, t.placeholder = this.placeholder, this.readOnly && (t.disabled = !0), e.appendChild(t), t.addEventListener("keydown", (o) => {
      switch (o.code) {
        case "Tab":
          this.tabHandler(o);
          break;
      }
    }), this.nodes.textarea = t, e;
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(`.link-tool{position:relative}.link-tool__input{padding-left:38px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:10px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.link-tool__input-holder{position:relative}.link-tool__input-holder--error .link-tool__input{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E");background-color:#fff3f6;border-color:#f3e0e0;color:#a95a5a;box-shadow:inset 0 1px 3px #923e3e0d}.link-tool__input[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.link-tool__input[contentEditable=true][data-placeholder]:empty:before{opacity:1}.link-tool__input[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.link-tool__progress{position:absolute;box-shadow:inset 0 1px 3px #66556b0a;height:100%;width:0;background-color:#f4f5f7;z-index:-1}.link-tool__progress--loading{-webkit-animation:progress .5s ease-in;-webkit-animation-fill-mode:forwards}.link-tool__progress--loaded{width:100%}.link-tool__content{display:block;padding:25px;border-radius:2px;box-shadow:0 0 0 2px #fff;color:initial!important;text-decoration:none!important}.link-tool__content:after{content:"";clear:both;display:table}.link-tool__content--rendered{background:#fff;border:1px solid rgba(201,201,204,.48);box-shadow:0 1px 3px #0000001a;border-radius:6px;will-change:filter;animation:link-in .45s 1 cubic-bezier(.215,.61,.355,1)}.link-tool__content--rendered:hover{box-shadow:0 0 3px #00000029}.link-tool__image{background-position:center center;background-repeat:no-repeat;background-size:cover;margin:0 0 0 30px;width:65px;height:65px;border-radius:3px;float:right}.link-tool__title{font-size:17px;font-weight:600;line-height:1.5em;margin:0 0 10px}.link-tool__title+.link-tool__anchor{margin-top:25px}.link-tool__description{margin:0 0 20px;font-size:15px;line-height:1.55em;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.link-tool__anchor{display:block;font-size:15px;line-height:1em;color:#888!important;border:0!important;padding:0!important}@keyframes link-in{0%{filter:blur(5px)}to{filter:none}}.codex-editor--narrow .link-tool__image{display:none}@-webkit-keyframes progress{0%{width:0}to{width:85%}}`)), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var Me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kd(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
(function(n) {
  var e = function() {
    try {
      return !!Symbol.iterator;
    } catch {
      return !1;
    }
  }, t = e(), o = function(l) {
    var u = {
      next: function() {
        var d = l.shift();
        return { done: d === void 0, value: d };
      }
    };
    return t && (u[Symbol.iterator] = function() {
      return u;
    }), u;
  }, i = function(l) {
    return encodeURIComponent(l).replace(/%20/g, "+");
  }, r = function(l) {
    return decodeURIComponent(String(l).replace(/\+/g, " "));
  }, s = function() {
    var l = function(d) {
      Object.defineProperty(this, "_entries", { writable: !0, value: {} });
      var g = typeof d;
      if (g !== "undefined")
        if (g === "string")
          d !== "" && this._fromString(d);
        else if (d instanceof l) {
          var v = this;
          d.forEach(function(m, b) {
            v.append(b, m);
          });
        } else if (d !== null && g === "object")
          if (Object.prototype.toString.call(d) === "[object Array]")
            for (var f = 0; f < d.length; f++) {
              var h = d[f];
              if (Object.prototype.toString.call(h) === "[object Array]" || h.length !== 2)
                this.append(h[0], h[1]);
              else
                throw new TypeError("Expected [string, any] as entry at index " + f + " of URLSearchParams's input");
            }
          else
            for (var p in d)
              d.hasOwnProperty(p) && this.append(p, d[p]);
        else
          throw new TypeError("Unsupported input's type for URLSearchParams");
    }, u = l.prototype;
    u.append = function(d, g) {
      d in this._entries ? this._entries[d].push(String(g)) : this._entries[d] = [String(g)];
    }, u.delete = function(d) {
      delete this._entries[d];
    }, u.get = function(d) {
      return d in this._entries ? this._entries[d][0] : null;
    }, u.getAll = function(d) {
      return d in this._entries ? this._entries[d].slice(0) : [];
    }, u.has = function(d) {
      return d in this._entries;
    }, u.set = function(d, g) {
      this._entries[d] = [String(g)];
    }, u.forEach = function(d, g) {
      var v;
      for (var f in this._entries)
        if (this._entries.hasOwnProperty(f)) {
          v = this._entries[f];
          for (var h = 0; h < v.length; h++)
            d.call(g, v[h], f, this);
        }
    }, u.keys = function() {
      var d = [];
      return this.forEach(function(g, v) {
        d.push(v);
      }), o(d);
    }, u.values = function() {
      var d = [];
      return this.forEach(function(g) {
        d.push(g);
      }), o(d);
    }, u.entries = function() {
      var d = [];
      return this.forEach(function(g, v) {
        d.push([v, g]);
      }), o(d);
    }, t && (u[Symbol.iterator] = u.entries), u.toString = function() {
      var d = [];
      return this.forEach(function(g, v) {
        d.push(i(v) + "=" + i(g));
      }), d.join("&");
    }, n.URLSearchParams = l;
  }, a = function() {
    try {
      var l = n.URLSearchParams;
      return new l("?a=1").toString() === "a=1" && typeof l.prototype.set == "function";
    } catch {
      return !1;
    }
  };
  a() || s();
  var c = n.URLSearchParams.prototype;
  typeof c.sort != "function" && (c.sort = function() {
    var l = this, u = [];
    this.forEach(function(g, v) {
      u.push([v, g]), l._entries || l.delete(v);
    }), u.sort(function(g, v) {
      return g[0] < v[0] ? -1 : g[0] > v[0] ? 1 : 0;
    }), l._entries && (l._entries = {});
    for (var d = 0; d < u.length; d++)
      this.append(u[d][0], u[d][1]);
  }), typeof c._fromString != "function" && Object.defineProperty(c, "_fromString", {
    enumerable: !1,
    configurable: !1,
    writable: !1,
    value: function(l) {
      if (this._entries)
        this._entries = {};
      else {
        var u = [];
        this.forEach(function(f, h) {
          u.push(h);
        });
        for (var d = 0; d < u.length; d++)
          this.delete(u[d]);
      }
      l = l.replace(/^\?/, "");
      for (var g = l.split("&"), v, d = 0; d < g.length; d++)
        v = g[d].split("="), this.append(
          r(v[0]),
          v.length > 1 ? r(v[1]) : ""
        );
    }
  });
})(
  typeof Me < "u" ? Me : typeof window < "u" ? window : typeof self < "u" ? self : Me
);
(function(n) {
  var e = function() {
    try {
      var i = new n.URL("b", "http://a");
      return i.pathname = "c d", i.href === "http://a/c%20d" && i.searchParams;
    } catch {
      return !1;
    }
  }, t = function() {
    var i = n.URL, r = function(c, l) {
      typeof c != "string" && (c = String(c));
      var u = document, d;
      if (l && (n.location === void 0 || l !== n.location.href)) {
        u = document.implementation.createHTMLDocument(""), d = u.createElement("base"), d.href = l, u.head.appendChild(d);
        try {
          if (d.href.indexOf(l) !== 0)
            throw new Error(d.href);
        } catch (w) {
          throw new Error("URL unable to set base " + l + " due to " + w);
        }
      }
      var g = u.createElement("a");
      g.href = c, d && (u.body.appendChild(g), g.href = g.href);
      var v = u.createElement("input");
      if (v.type = "url", v.value = c, g.protocol === ":" || !/:/.test(g.href) || !v.checkValidity() && !l)
        throw new TypeError("Invalid URL");
      Object.defineProperty(this, "_anchorElement", {
        value: g
      });
      var f = new n.URLSearchParams(this.search), h = !0, p = !0, m = this;
      ["append", "delete", "set"].forEach(function(w) {
        var k = f[w];
        f[w] = function() {
          k.apply(f, arguments), h && (p = !1, m.search = f.toString(), p = !0);
        };
      }), Object.defineProperty(this, "searchParams", {
        value: f,
        enumerable: !0
      });
      var b = void 0;
      Object.defineProperty(this, "_updateSearchParams", {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: function() {
          this.search !== b && (b = this.search, p && (h = !1, this.searchParams._fromString(this.search), h = !0));
        }
      });
    }, s = r.prototype, a = function(c) {
      Object.defineProperty(s, c, {
        get: function() {
          return this._anchorElement[c];
        },
        set: function(l) {
          this._anchorElement[c] = l;
        },
        enumerable: !0
      });
    };
    ["hash", "host", "hostname", "port", "protocol"].forEach(function(c) {
      a(c);
    }), Object.defineProperty(s, "search", {
      get: function() {
        return this._anchorElement.search;
      },
      set: function(c) {
        this._anchorElement.search = c, this._updateSearchParams();
      },
      enumerable: !0
    }), Object.defineProperties(s, {
      toString: {
        get: function() {
          var c = this;
          return function() {
            return c.href;
          };
        }
      },
      href: {
        get: function() {
          return this._anchorElement.href.replace(/\?$/, "");
        },
        set: function(c) {
          this._anchorElement.href = c, this._updateSearchParams();
        },
        enumerable: !0
      },
      pathname: {
        get: function() {
          return this._anchorElement.pathname.replace(/(^\/?)/, "/");
        },
        set: function(c) {
          this._anchorElement.pathname = c;
        },
        enumerable: !0
      },
      origin: {
        get: function() {
          var c = { "http:": 80, "https:": 443, "ftp:": 21 }[this._anchorElement.protocol], l = this._anchorElement.port != c && this._anchorElement.port !== "";
          return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (l ? ":" + this._anchorElement.port : "");
        },
        enumerable: !0
      },
      password: {
        // TODO
        get: function() {
          return "";
        },
        set: function(c) {
        },
        enumerable: !0
      },
      username: {
        // TODO
        get: function() {
          return "";
        },
        set: function(c) {
        },
        enumerable: !0
      }
    }), r.createObjectURL = function(c) {
      return i.createObjectURL.apply(i, arguments);
    }, r.revokeObjectURL = function(c) {
      return i.revokeObjectURL.apply(i, arguments);
    }, n.URL = r;
  };
  if (e() || t(), n.location !== void 0 && !("origin" in n.location)) {
    var o = function() {
      return n.location.protocol + "//" + n.location.hostname + (n.location.port ? ":" + n.location.port : "");
    };
    try {
      Object.defineProperty(n.location, "origin", {
        get: o,
        enumerable: !0
      });
    } catch {
      setInterval(function() {
        n.location.origin = o();
      }, 100);
    }
  }
})(
  typeof Me < "u" ? Me : typeof window < "u" ? window : typeof self < "u" ? self : Me
);
var Ar = { exports: {} };
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return (function(t) {
      var o = {};
      function i(r) {
        if (o[r])
          return o[r].exports;
        var s = o[r] = { i: r, l: !1, exports: {} };
        return t[r].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
      }
      return i.m = t, i.c = o, i.d = function(r, s, a) {
        i.o(r, s) || Object.defineProperty(r, s, { enumerable: !0, get: a });
      }, i.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, i.t = function(r, s) {
        if (1 & s && (r = i(r)), 8 & s || 4 & s && typeof r == "object" && r && r.__esModule)
          return r;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: r }), 2 & s && typeof r != "string")
          for (var c in r)
            i.d(a, c, (function(l) {
              return r[l];
            }).bind(null, c));
        return a;
      }, i.n = function(r) {
        var s = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return i.d(s, "a", s), s;
      }, i.o = function(r, s) {
        return Object.prototype.hasOwnProperty.call(r, s);
      }, i.p = "", i(i.s = 3);
    })([function(t, o) {
      var i;
      i = /* @__PURE__ */ (function() {
        return this;
      })();
      try {
        i = i || new Function("return this")();
      } catch {
        typeof window == "object" && (i = window);
      }
      t.exports = i;
    }, function(t, o, i) {
      (function(r) {
        var s = i(2), a = setTimeout;
        function c() {
        }
        function l(p) {
          if (!(this instanceof l))
            throw new TypeError("Promises must be constructed via new");
          if (typeof p != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], h(p, this);
        }
        function u(p, m) {
          for (; p._state === 3; )
            p = p._value;
          p._state !== 0 ? (p._handled = !0, l._immediateFn(function() {
            var b = p._state === 1 ? m.onFulfilled : m.onRejected;
            if (b !== null) {
              var w;
              try {
                w = b(p._value);
              } catch (k) {
                return void g(m.promise, k);
              }
              d(m.promise, w);
            } else
              (p._state === 1 ? d : g)(m.promise, p._value);
          })) : p._deferreds.push(m);
        }
        function d(p, m) {
          try {
            if (m === p)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (m && (typeof m == "object" || typeof m == "function")) {
              var b = m.then;
              if (m instanceof l)
                return p._state = 3, p._value = m, void v(p);
              if (typeof b == "function")
                return void h((w = b, k = m, function() {
                  w.apply(k, arguments);
                }), p);
            }
            p._state = 1, p._value = m, v(p);
          } catch (y) {
            g(p, y);
          }
          var w, k;
        }
        function g(p, m) {
          p._state = 2, p._value = m, v(p);
        }
        function v(p) {
          p._state === 2 && p._deferreds.length === 0 && l._immediateFn(function() {
            p._handled || l._unhandledRejectionFn(p._value);
          });
          for (var m = 0, b = p._deferreds.length; m < b; m++)
            u(p, p._deferreds[m]);
          p._deferreds = null;
        }
        function f(p, m, b) {
          this.onFulfilled = typeof p == "function" ? p : null, this.onRejected = typeof m == "function" ? m : null, this.promise = b;
        }
        function h(p, m) {
          var b = !1;
          try {
            p(function(w) {
              b || (b = !0, d(m, w));
            }, function(w) {
              b || (b = !0, g(m, w));
            });
          } catch (w) {
            if (b)
              return;
            b = !0, g(m, w);
          }
        }
        l.prototype.catch = function(p) {
          return this.then(null, p);
        }, l.prototype.then = function(p, m) {
          var b = new this.constructor(c);
          return u(this, new f(p, m, b)), b;
        }, l.prototype.finally = s.a, l.all = function(p) {
          return new l(function(m, b) {
            if (!p || p.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var w = Array.prototype.slice.call(p);
            if (w.length === 0)
              return m([]);
            var k = w.length;
            function y(O, E) {
              try {
                if (E && (typeof E == "object" || typeof E == "function")) {
                  var C = E.then;
                  if (typeof C == "function")
                    return void C.call(E, function(T) {
                      y(O, T);
                    }, b);
                }
                w[O] = E, --k == 0 && m(w);
              } catch (T) {
                b(T);
              }
            }
            for (var S = 0; S < w.length; S++)
              y(S, w[S]);
          });
        }, l.resolve = function(p) {
          return p && typeof p == "object" && p.constructor === l ? p : new l(function(m) {
            m(p);
          });
        }, l.reject = function(p) {
          return new l(function(m, b) {
            b(p);
          });
        }, l.race = function(p) {
          return new l(function(m, b) {
            for (var w = 0, k = p.length; w < k; w++)
              p[w].then(m, b);
          });
        }, l._immediateFn = typeof r == "function" && function(p) {
          r(p);
        } || function(p) {
          a(p, 0);
        }, l._unhandledRejectionFn = function(p) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", p);
        }, o.a = l;
      }).call(this, i(5).setImmediate);
    }, function(t, o, i) {
      o.a = function(r) {
        var s = this.constructor;
        return this.then(function(a) {
          return s.resolve(r()).then(function() {
            return a;
          });
        }, function(a) {
          return s.resolve(r()).then(function() {
            return s.reject(a);
          });
        });
      };
    }, function(t, o, i) {
      function r(f) {
        return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
          return typeof h;
        } : function(h) {
          return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
        })(f);
      }
      i(4);
      var s, a, c, l, u, d, g = i(8), v = (a = function(f) {
        return new Promise(function(h, p) {
          f = l(f), f = u(f);
          var m = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          m.open(f.method, f.url), m.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(f.headers).forEach(function(w) {
            var k = f.headers[w];
            m.setRequestHeader(w, k);
          });
          var b = f.ratio;
          m.upload.addEventListener("progress", function(w) {
            var k = Math.round(w.loaded / w.total * 100), y = Math.ceil(k * b / 100);
            f.progress(y);
          }, !1), m.addEventListener("progress", function(w) {
            var k = Math.round(w.loaded / w.total * 100), y = Math.ceil(k * (100 - b) / 100) + b;
            f.progress(y);
          }, !1), m.onreadystatechange = function() {
            if (m.readyState === 4) {
              var w = m.response;
              try {
                w = JSON.parse(w);
              } catch {
              }
              var k = g.parseHeaders(m.getAllResponseHeaders()), y = { body: w, code: m.status, headers: k };
              m.status === 200 ? h(y) : p(y);
            }
          }, m.send(f.data);
        });
      }, c = function(f) {
        return f.method = "POST", a(f);
      }, l = function() {
        var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (f.url && typeof f.url != "string")
          throw new Error("Url must be a string");
        if (f.url = f.url || "", f.method && typeof f.method != "string")
          throw new Error("`method` must be a string or null");
        if (f.method = f.method ? f.method.toUpperCase() : "GET", f.headers && r(f.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (f.headers = f.headers || {}, f.type && (typeof f.type != "string" || !Object.values(s).includes(f.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (f.progress && typeof f.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (f.progress = f.progress || function(h) {
        }, f.beforeSend = f.beforeSend || function(h) {
        }, f.ratio && typeof f.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (f.ratio < 0 || f.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (f.ratio = f.ratio || 90, f.accept && typeof f.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (f.accept = f.accept || "*/*", f.multiple && typeof f.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (f.multiple = f.multiple || !1, f.fieldName && typeof f.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return f.fieldName = f.fieldName || "files", f;
      }, u = function(f) {
        switch (f.method) {
          case "GET":
            var h = d(f.data, s.URLENCODED);
            delete f.data, f.url = /\?/.test(f.url) ? f.url + "&" + h : f.url + "?" + h;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var p = (function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || s.JSON;
            })(f);
            (g.isFormData(f.data) || g.isFormElement(f.data)) && (p = s.FORM), f.data = d(f.data, p), p !== v.contentType.FORM && (f.headers["content-type"] = p);
        }
        return f;
      }, d = function() {
        var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case s.URLENCODED:
            return g.urlEncode(f);
          case s.JSON:
            return g.jsonEncode(f);
          case s.FORM:
            return g.formEncode(f);
          default:
            return f;
        }
      }, { contentType: s = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: a, get: function(f) {
        return f.method = "GET", a(f);
      }, post: c, transport: function(f) {
        return f = l(f), g.selectFiles(f).then(function(h) {
          for (var p = new FormData(), m = 0; m < h.length; m++)
            p.append(f.fieldName, h[m], h[m].name);
          return g.isObject(f.data) && Object.keys(f.data).forEach(function(b) {
            var w = f.data[b];
            p.append(b, w);
          }), f.beforeSend && f.beforeSend(h), f.data = p, c(f);
        });
      }, selectFiles: function(f) {
        return delete (f = l(f)).beforeSend, g.selectFiles(f);
      } });
      t.exports = v;
    }, function(t, o, i) {
      i.r(o);
      var r = i(1);
      window.Promise = window.Promise || r.a;
    }, function(t, o, i) {
      (function(r) {
        var s = r !== void 0 && r || typeof self < "u" && self || window, a = Function.prototype.apply;
        function c(l, u) {
          this._id = l, this._clearFn = u;
        }
        o.setTimeout = function() {
          return new c(a.call(setTimeout, s, arguments), clearTimeout);
        }, o.setInterval = function() {
          return new c(a.call(setInterval, s, arguments), clearInterval);
        }, o.clearTimeout = o.clearInterval = function(l) {
          l && l.close();
        }, c.prototype.unref = c.prototype.ref = function() {
        }, c.prototype.close = function() {
          this._clearFn.call(s, this._id);
        }, o.enroll = function(l, u) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = u;
        }, o.unenroll = function(l) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
        }, o._unrefActive = o.active = function(l) {
          clearTimeout(l._idleTimeoutId);
          var u = l._idleTimeout;
          u >= 0 && (l._idleTimeoutId = setTimeout(function() {
            l._onTimeout && l._onTimeout();
          }, u));
        }, i(6), o.setImmediate = typeof self < "u" && self.setImmediate || r !== void 0 && r.setImmediate || this && this.setImmediate, o.clearImmediate = typeof self < "u" && self.clearImmediate || r !== void 0 && r.clearImmediate || this && this.clearImmediate;
      }).call(this, i(0));
    }, function(t, o, i) {
      (function(r, s) {
        (function(a, c) {
          if (!a.setImmediate) {
            var l, u, d, g, v, f = 1, h = {}, p = !1, m = a.document, b = Object.getPrototypeOf && Object.getPrototypeOf(a);
            b = b && b.setTimeout ? b : a, {}.toString.call(a.process) === "[object process]" ? l = function(y) {
              s.nextTick(function() {
                k(y);
              });
            } : (function() {
              if (a.postMessage && !a.importScripts) {
                var y = !0, S = a.onmessage;
                return a.onmessage = function() {
                  y = !1;
                }, a.postMessage("", "*"), a.onmessage = S, y;
              }
            })() ? (g = "setImmediate$" + Math.random() + "$", v = function(y) {
              y.source === a && typeof y.data == "string" && y.data.indexOf(g) === 0 && k(+y.data.slice(g.length));
            }, a.addEventListener ? a.addEventListener("message", v, !1) : a.attachEvent("onmessage", v), l = function(y) {
              a.postMessage(g + y, "*");
            }) : a.MessageChannel ? ((d = new MessageChannel()).port1.onmessage = function(y) {
              k(y.data);
            }, l = function(y) {
              d.port2.postMessage(y);
            }) : m && "onreadystatechange" in m.createElement("script") ? (u = m.documentElement, l = function(y) {
              var S = m.createElement("script");
              S.onreadystatechange = function() {
                k(y), S.onreadystatechange = null, u.removeChild(S), S = null;
              }, u.appendChild(S);
            }) : l = function(y) {
              setTimeout(k, 0, y);
            }, b.setImmediate = function(y) {
              typeof y != "function" && (y = new Function("" + y));
              for (var S = new Array(arguments.length - 1), O = 0; O < S.length; O++)
                S[O] = arguments[O + 1];
              var E = { callback: y, args: S };
              return h[f] = E, l(f), f++;
            }, b.clearImmediate = w;
          }
          function w(y) {
            delete h[y];
          }
          function k(y) {
            if (p)
              setTimeout(k, 0, y);
            else {
              var S = h[y];
              if (S) {
                p = !0;
                try {
                  (function(O) {
                    var E = O.callback, C = O.args;
                    switch (C.length) {
                      case 0:
                        E();
                        break;
                      case 1:
                        E(C[0]);
                        break;
                      case 2:
                        E(C[0], C[1]);
                        break;
                      case 3:
                        E(C[0], C[1], C[2]);
                        break;
                      default:
                        E.apply(c, C);
                    }
                  })(S);
                } finally {
                  w(y), p = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, i(0), i(7));
    }, function(t, o) {
      var i, r, s = t.exports = {};
      function a() {
        throw new Error("setTimeout has not been defined");
      }
      function c() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(b) {
        if (i === setTimeout)
          return setTimeout(b, 0);
        if ((i === a || !i) && setTimeout)
          return i = setTimeout, setTimeout(b, 0);
        try {
          return i(b, 0);
        } catch {
          try {
            return i.call(null, b, 0);
          } catch {
            return i.call(this, b, 0);
          }
        }
      }
      (function() {
        try {
          i = typeof setTimeout == "function" ? setTimeout : a;
        } catch {
          i = a;
        }
        try {
          r = typeof clearTimeout == "function" ? clearTimeout : c;
        } catch {
          r = c;
        }
      })();
      var u, d = [], g = !1, v = -1;
      function f() {
        g && u && (g = !1, u.length ? d = u.concat(d) : v = -1, d.length && h());
      }
      function h() {
        if (!g) {
          var b = l(f);
          g = !0;
          for (var w = d.length; w; ) {
            for (u = d, d = []; ++v < w; )
              u && u[v].run();
            v = -1, w = d.length;
          }
          u = null, g = !1, (function(k) {
            if (r === clearTimeout)
              return clearTimeout(k);
            if ((r === c || !r) && clearTimeout)
              return r = clearTimeout, clearTimeout(k);
            try {
              r(k);
            } catch {
              try {
                return r.call(null, k);
              } catch {
                return r.call(this, k);
              }
            }
          })(b);
        }
      }
      function p(b, w) {
        this.fun = b, this.array = w;
      }
      function m() {
      }
      s.nextTick = function(b) {
        var w = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var k = 1; k < arguments.length; k++)
            w[k - 1] = arguments[k];
        d.push(new p(b, w)), d.length !== 1 || g || l(h);
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = m, s.addListener = m, s.once = m, s.off = m, s.removeListener = m, s.removeAllListeners = m, s.emit = m, s.prependListener = m, s.prependOnceListener = m, s.listeners = function(b) {
        return [];
      }, s.binding = function(b) {
        throw new Error("process.binding is not supported");
      }, s.cwd = function() {
        return "/";
      }, s.chdir = function(b) {
        throw new Error("process.chdir is not supported");
      }, s.umask = function() {
        return 0;
      };
    }, function(t, o, i) {
      function r(a, c) {
        for (var l = 0; l < c.length; l++) {
          var u = c[l];
          u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(a, u.key, u);
        }
      }
      var s = i(9);
      t.exports = (function() {
        function a() {
          (function(d, g) {
            if (!(d instanceof g))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
        }
        var c, l, u;
        return c = a, u = [{ key: "urlEncode", value: function(d) {
          return s(d);
        } }, { key: "jsonEncode", value: function(d) {
          return JSON.stringify(d);
        } }, { key: "formEncode", value: function(d) {
          if (this.isFormData(d))
            return d;
          if (this.isFormElement(d))
            return new FormData(d);
          if (this.isObject(d)) {
            var g = new FormData();
            return Object.keys(d).forEach(function(v) {
              var f = d[v];
              g.append(v, f);
            }), g;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(d) {
          return Object.prototype.toString.call(d) === "[object Object]";
        } }, { key: "isFormData", value: function(d) {
          return d instanceof FormData;
        } }, { key: "isFormElement", value: function(d) {
          return d instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(g, v) {
            var f = document.createElement("INPUT");
            f.type = "file", d.multiple && f.setAttribute("multiple", "multiple"), d.accept && f.setAttribute("accept", d.accept), f.style.display = "none", document.body.appendChild(f), f.addEventListener("change", function(h) {
              var p = h.target.files;
              g(p), document.body.removeChild(f);
            }, !1), f.click();
          });
        } }, { key: "parseHeaders", value: function(d) {
          var g = d.trim().split(/[\r\n]+/), v = {};
          return g.forEach(function(f) {
            var h = f.split(": "), p = h.shift(), m = h.join(": ");
            p && (v[p] = m);
          }), v;
        } }], (l = null) && r(c.prototype, l), u && r(c, u), a;
      })();
    }, function(t, o) {
      var i = function(s) {
        return encodeURIComponent(s).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, r = function(s, a, c, l) {
        return a = a || null, c = c || "&", l = l || null, s ? (function(u) {
          for (var d = new Array(), g = 0; g < u.length; g++)
            u[g] && d.push(u[g]);
          return d;
        })(Object.keys(s).map(function(u) {
          var d, g, v = u;
          if (l && (v = l + "[" + v + "]"), typeof s[u] == "object" && s[u] !== null)
            d = r(s[u], null, c, v);
          else {
            a && (g = v, v = !isNaN(parseFloat(g)) && isFinite(g) ? a + Number(v) : v);
            var f = s[u];
            f = (f = (f = (f = f === !0 ? "1" : f) === !1 ? "0" : f) === 0 ? "0" : f) || "", d = i(v) + "=" + i(f);
          }
          return d;
        })).join(c).replace(/[!'()*]/g, "") : "";
      };
      t.exports = r;
    }]);
  });
})(Ar);
var xd = Ar.exports;
const Cd = /* @__PURE__ */ kd(xd), Ed = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.569 6.39509 13.9269 6.25143 12.8271 7.17675L11.39 8.38588C10.0935 9.47674 9.95704 11.4241 11.0887 12.6852L11.12 12.72"/></svg>';
let Sd = class {
  /**
   * Notify core that read-only mode supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: Ed,
      title: "Link"
    };
  }
  /**
   * Allow to press Enter inside the LinkTool input
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * @param {object} options - Tool constructor options fot from Editor.js
   * @param {LinkToolData} options.data - previously saved data
   * @param {LinkToolConfig} options.config - user config for Tool
   * @param {object} options.api - Editor.js API
   * @param {boolean} options.readOnly - read-only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this.config = {
      endpoint: t.endpoint || "",
      headers: t.headers || {}
    }, this.nodes = {
      wrapper: null,
      container: null,
      progress: null,
      input: null,
      inputHolder: null,
      linkContent: null,
      linkImage: null,
      linkTitle: null,
      linkDescription: null,
      linkText: null
    }, this._data = {
      link: "",
      meta: {}
    }, this.data = e;
  }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.nodes.wrapper = this.make("div", this.CSS.baseClass), this.nodes.container = this.make("div", this.CSS.container), this.nodes.inputHolder = this.makeInputHolder(), this.nodes.linkContent = this.prepareLinkPreview(), Object.keys(this.data.meta).length ? (this.nodes.container.appendChild(this.nodes.linkContent), this.showLinkPreview(this.data.meta)) : this.nodes.container.appendChild(this.nodes.inputHolder), this.nodes.wrapper.appendChild(this.nodes.container), this.nodes.wrapper;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {LinkToolData}
   */
  save() {
    return this.data;
  }
  /**
   * Validate Block data
   * - check if given link is an empty string or not.
   *
   * @public
   *
   * @returns {boolean} false if saved data is incorrect, otherwise true
   */
  validate() {
    return this.data.link.trim() !== "";
  }
  /**
   * Stores all Tool's data
   *
   * @param {LinkToolData} data - data to store
   */
  set data(e) {
    this._data = Object.assign({}, {
      link: e.link || this._data.link,
      meta: e.meta || this._data.meta
    });
  }
  /**
   * Return Tool data
   *
   * @returns {LinkToolData}
   */
  get data() {
    return this._data;
  }
  /**
   * @returns {object} - Link Tool styles
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      /**
       * Tool's classes
       */
      container: "link-tool",
      inputEl: "link-tool__input",
      inputHolder: "link-tool__input-holder",
      inputError: "link-tool__input-holder--error",
      linkContent: "link-tool__content",
      linkContentRendered: "link-tool__content--rendered",
      linkImage: "link-tool__image",
      linkTitle: "link-tool__title",
      linkDescription: "link-tool__description",
      linkText: "link-tool__anchor",
      progress: "link-tool__progress",
      progressLoading: "link-tool__progress--loading",
      progressLoaded: "link-tool__progress--loaded"
    };
  }
  /**
   * Prepare input holder
   *
   * @returns {HTMLElement}
   */
  makeInputHolder() {
    const e = this.make("div", this.CSS.inputHolder);
    return this.nodes.progress = this.make("label", this.CSS.progress), this.nodes.input = this.make("div", [this.CSS.input, this.CSS.inputEl], {
      contentEditable: !this.readOnly
    }), this.nodes.input.dataset.placeholder = this.api.i18n.t("Link"), this.readOnly || (this.nodes.input.addEventListener("paste", (t) => {
      this.startFetching(t);
    }), this.nodes.input.addEventListener("keydown", (t) => {
      const [o, i] = [13, 65], r = t.ctrlKey || t.metaKey;
      switch (t.keyCode) {
        case o:
          t.preventDefault(), t.stopPropagation(), this.startFetching(t);
          break;
        case i:
          r && this.selectLinkUrl(t);
          break;
      }
    })), e.appendChild(this.nodes.progress), e.appendChild(this.nodes.input), e;
  }
  /**
   * Activates link data fetching by url
   *
   * @param {PasteEvent|KeyboardEvent} event - fetching could be fired by a pase or keydown events
   */
  startFetching(e) {
    let t = this.nodes.input.textContent;
    e.type === "paste" && (t = (e.clipboardData || window.clipboardData).getData("text")), this.removeErrorStyle(), this.fetchLinkData(t);
  }
  /**
   * If previous link data fetching failed, remove error styles
   */
  removeErrorStyle() {
    this.nodes.inputHolder.classList.remove(this.CSS.inputError), this.nodes.inputHolder.insertBefore(this.nodes.progress, this.nodes.input);
  }
  /**
   * Select LinkTool input content by CMD+A
   *
   * @param {KeyboardEvent} event - keydown
   */
  selectLinkUrl(e) {
    e.preventDefault(), e.stopPropagation();
    const t = window.getSelection(), o = new Range(), i = t.anchorNode.parentNode.closest(`.${this.CSS.inputHolder}`).querySelector(`.${this.CSS.inputEl}`);
    o.selectNodeContents(i), t.removeAllRanges(), t.addRange(o);
  }
  /**
   * Prepare link preview holder
   *
   * @returns {HTMLElement}
   */
  prepareLinkPreview() {
    const e = this.make("a", this.CSS.linkContent, {
      target: "_blank",
      rel: "nofollow noindex noreferrer"
    });
    return this.nodes.linkImage = this.make("div", this.CSS.linkImage), this.nodes.linkTitle = this.make("div", this.CSS.linkTitle), this.nodes.linkDescription = this.make("p", this.CSS.linkDescription), this.nodes.linkText = this.make("span", this.CSS.linkText), e;
  }
  /**
   * Compose link preview from fetched data
   *
   * @param {metaData} meta - link meta data
   */
  showLinkPreview({ image: e, title: t, description: o }) {
    this.nodes.container.appendChild(this.nodes.linkContent), e && e.url && (this.nodes.linkImage.style.backgroundImage = "url(" + e.url + ")", this.nodes.linkContent.appendChild(this.nodes.linkImage)), t && (this.nodes.linkTitle.textContent = t, this.nodes.linkContent.appendChild(this.nodes.linkTitle)), o && (this.nodes.linkDescription.textContent = o, this.nodes.linkContent.appendChild(this.nodes.linkDescription)), this.nodes.linkContent.classList.add(this.CSS.linkContentRendered), this.nodes.linkContent.setAttribute("href", this.data.link), this.nodes.linkContent.appendChild(this.nodes.linkText);
    try {
      this.nodes.linkText.textContent = new URL(this.data.link).hostname;
    } catch {
      this.nodes.linkText.textContent = this.data.link;
    }
  }
  /**
   * Show loading progress bar
   */
  showProgress() {
    this.nodes.progress.classList.add(this.CSS.progressLoading);
  }
  /**
   * Hide loading progress bar
   *
   * @returns {Promise<void>}
   */
  hideProgress() {
    return new Promise((e) => {
      this.nodes.progress.classList.remove(this.CSS.progressLoading), this.nodes.progress.classList.add(this.CSS.progressLoaded), setTimeout(e, 500);
    });
  }
  /**
   * If data fetching failed, set input error style
   */
  applyErrorStyle() {
    this.nodes.inputHolder.classList.add(this.CSS.inputError), this.nodes.progress.remove();
  }
  /**
   * Sends to backend pasted url and receives link data
   *
   * @param {string} url - link source url
   */
  async fetchLinkData(e) {
    this.showProgress(), this.data = { link: e };
    try {
      const { body: t } = await Cd.get({
        url: this.config.endpoint,
        headers: this.config.headers,
        data: {
          url: e
        }
      });
      this.onFetch(t);
    } catch {
      this.fetchingFailed(this.api.i18n.t("Couldn't fetch the link data"));
    }
  }
  /**
   * Link data fetching callback
   *
   * @param {UploadResponseFormat} response - backend response
   */
  onFetch(e) {
    if (!e || !e.success) {
      this.fetchingFailed(this.api.i18n.t("Couldn't get this link data, try the other one"));
      return;
    }
    const t = e.meta, o = e.link || this.data.link;
    if (this.data = {
      meta: t,
      link: o
    }, !t) {
      this.fetchingFailed(this.api.i18n.t("Wrong response format from the server"));
      return;
    }
    this.hideProgress().then(() => {
      this.nodes.inputHolder.remove(), this.showLinkPreview(t);
    });
  }
  /**
   * Handle link fetching errors
   *
   * @private
   *
   * @param {string} errorMessage - message to explain user what he should do
   */
  fetchingFailed(e) {
    this.api.notifier.show({
      message: e,
      style: "error"
    }), this.applyErrorStyle();
  }
  /**
   * Helper method for elements creation
   *
   * @param {string} tagName - name of creating element
   * @param {string|string[]} [classNames] - list of CSS classes to add
   * @param {object} [attributes] - object with attributes to add
   * @returns {HTMLElement}
   */
  make(e, t = null, o = {}) {
    const i = document.createElement(e);
    Array.isArray(t) ? i.classList.add(...t) : t && i.classList.add(t);
    for (const r in o)
      i[r] = o[r];
    return i;
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const Td = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>', _d = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>', Bd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>';
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Od(n) {
  if (n.__esModule)
    return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function o() {
      return this instanceof o ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(o) {
    var i = Object.getOwnPropertyDescriptor(n, o);
    Object.defineProperty(t, o, i.get ? i : {
      enumerable: !0,
      get: function() {
        return n[o];
      }
    });
  }), t;
}
var at = {}, sn = {}, an = {};
Object.defineProperty(an, "__esModule", { value: !0 });
an.allInputsSelector = Ld;
function Ld() {
  var n = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + n.map(function(e) {
    return 'input[type="'.concat(e, '"]');
  }).join(", ");
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.allInputsSelector = void 0;
  var e = an;
  Object.defineProperty(n, "allInputsSelector", { enumerable: !0, get: function() {
    return e.allInputsSelector;
  } });
})(sn);
var xe = {}, ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.isNativeInput = Md;
function Md(n) {
  var e = [
    "INPUT",
    "TEXTAREA"
  ];
  return n && n.tagName ? e.includes(n.tagName) : !1;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isNativeInput = void 0;
  var e = ln;
  Object.defineProperty(n, "isNativeInput", { enumerable: !0, get: function() {
    return e.isNativeInput;
  } });
})(xe);
var Nr = {}, cn = {};
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.append = Id;
function Id(n, e) {
  Array.isArray(e) ? e.forEach(function(t) {
    n.appendChild(t);
  }) : n.appendChild(e);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.append = void 0;
  var e = cn;
  Object.defineProperty(n, "append", { enumerable: !0, get: function() {
    return e.append;
  } });
})(Nr);
var dn = {}, un = {};
Object.defineProperty(un, "__esModule", { value: !0 });
un.blockElements = Pd;
function Pd() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.blockElements = void 0;
  var e = un;
  Object.defineProperty(n, "blockElements", { enumerable: !0, get: function() {
    return e.blockElements;
  } });
})(dn);
var Rr = {}, hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.calculateBaseline = Ad;
function Ad(n) {
  var e = window.getComputedStyle(n), t = parseFloat(e.fontSize), o = parseFloat(e.lineHeight) || t * 1.2, i = parseFloat(e.paddingTop), r = parseFloat(e.borderTopWidth), s = parseFloat(e.marginTop), a = t * 0.8, c = (o - t) / 2, l = s + r + i + c + a;
  return l;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.calculateBaseline = void 0;
  var e = hn;
  Object.defineProperty(n, "calculateBaseline", { enumerable: !0, get: function() {
    return e.calculateBaseline;
  } });
})(Rr);
var jr = {}, pn = {}, fn = {}, gn = {};
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.isContentEditable = Nd;
function Nd(n) {
  return n.contentEditable === "true";
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isContentEditable = void 0;
  var e = gn;
  Object.defineProperty(n, "isContentEditable", { enumerable: !0, get: function() {
    return e.isContentEditable;
  } });
})(fn);
Object.defineProperty(pn, "__esModule", { value: !0 });
pn.canSetCaret = Dd;
var Rd = xe, jd = fn;
function Dd(n) {
  var e = !0;
  if ((0, Rd.isNativeInput)(n))
    switch (n.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        e = !1;
        break;
    }
  else
    e = (0, jd.isContentEditable)(n);
  return e;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.canSetCaret = void 0;
  var e = pn;
  Object.defineProperty(n, "canSetCaret", { enumerable: !0, get: function() {
    return e.canSetCaret;
  } });
})(jr);
var Ot = {}, mn = {};
function Fd(n, e, t) {
  const o = t.value !== void 0 ? "value" : "get", i = t[o], r = `#${e}Cache`;
  if (t[o] = function(...s) {
    return this[r] === void 0 && (this[r] = i.apply(this, s)), this[r];
  }, o === "get" && t.set) {
    const s = t.set;
    t.set = function(a) {
      delete n[r], s.apply(this, a);
    };
  }
  return t;
}
function Dr() {
  const n = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(n).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e !== void 0 && (n[e] = !0), n;
}
function bn(n) {
  return n != null && n !== "" && (typeof n != "object" || Object.keys(n).length > 0);
}
function Hd(n) {
  return !bn(n);
}
const $d = () => typeof window < "u" && window.navigator !== null && bn(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Ud(n) {
  const e = Dr();
  return n = n.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), e.mac ? n = n.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : n = n.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n;
}
function zd(n) {
  return n[0].toUpperCase() + n.slice(1);
}
function qd(n) {
  const e = document.createElement("div");
  e.style.position = "absolute", e.style.left = "-999px", e.style.bottom = "-999px", e.innerHTML = n, document.body.appendChild(e);
  const t = window.getSelection(), o = document.createRange();
  if (o.selectNode(e), t === null)
    throw new Error("Cannot copy text to clipboard");
  t.removeAllRanges(), t.addRange(o), document.execCommand("copy"), document.body.removeChild(e);
}
function Wd(n, e, t) {
  let o;
  return (...i) => {
    const r = this, s = () => {
      o = void 0, t !== !0 && n.apply(r, i);
    }, a = t === !0 && o !== void 0;
    window.clearTimeout(o), o = window.setTimeout(s, e), a && n.apply(r, i);
  };
}
function fe(n) {
  return Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function Vd(n) {
  return fe(n) === "boolean";
}
function Fr(n) {
  return fe(n) === "function" || fe(n) === "asyncfunction";
}
function Kd(n) {
  return Fr(n) && /^\s*class\s+/.test(n.toString());
}
function Yd(n) {
  return fe(n) === "number";
}
function lt(n) {
  return fe(n) === "object";
}
function Xd(n) {
  return Promise.resolve(n) === n;
}
function Gd(n) {
  return fe(n) === "string";
}
function Zd(n) {
  return fe(n) === "undefined";
}
function no(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  if (lt(n) && lt(t))
    for (const o in t)
      lt(t[o]) ? (n[o] === void 0 && Object.assign(n, { [o]: {} }), no(n[o], t[o])) : Object.assign(n, { [o]: t[o] });
  return no(n, ...e);
}
function Jd(n, e, t) {
  const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  n && console.warn(o);
}
function Qd(n) {
  try {
    return new URL(n).href;
  } catch {
  }
  return n.substring(0, 2) === "//" ? window.location.protocol + n : window.location.origin + n;
}
function eu(n) {
  return n > 47 && n < 58 || n === 32 || n === 13 || n === 229 || n > 64 && n < 91 || n > 95 && n < 112 || n > 185 && n < 193 || n > 218 && n < 223;
}
const tu = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, ou = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
class nu {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(e) {
    return new Promise((t, o) => {
      this.completed = this.completed.then(e).then(t).catch(o);
    });
  }
}
function iu(n, e, t = void 0) {
  let o, i, r, s = null, a = 0;
  t || (t = {});
  const c = function() {
    a = t.leading === !1 ? 0 : Date.now(), s = null, r = n.apply(o, i), s === null && (o = i = null);
  };
  return function() {
    const l = Date.now();
    !a && t.leading === !1 && (a = l);
    const u = e - (l - a);
    return o = this, i = arguments, u <= 0 || u > e ? (s && (clearTimeout(s), s = null), a = l, r = n.apply(o, i), s === null && (o = i = null)) : !s && t.trailing !== !1 && (s = setTimeout(c, u)), r;
  };
}
const ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: nu,
  beautifyShortcut: Ud,
  cacheable: Fd,
  capitalize: zd,
  copyTextToClipboard: qd,
  debounce: Wd,
  deepMerge: no,
  deprecationAssert: Jd,
  getUserOS: Dr,
  getValidUrl: Qd,
  isBoolean: Vd,
  isClass: Kd,
  isEmpty: Hd,
  isFunction: Fr,
  isIosDevice: $d,
  isNumber: Yd,
  isObject: lt,
  isPrintableKey: eu,
  isPromise: Xd,
  isString: Gd,
  isUndefined: Zd,
  keyCodes: tu,
  mouseButtons: ou,
  notEmpty: bn,
  throttle: iu,
  typeOf: fe
}, Symbol.toStringTag, { value: "Module" })), vn = /* @__PURE__ */ Od(ru);
Object.defineProperty(mn, "__esModule", { value: !0 });
mn.containsOnlyInlineElements = lu;
var su = vn, au = dn;
function lu(n) {
  var e;
  (0, su.isString)(n) ? (e = document.createElement("div"), e.innerHTML = n) : e = n;
  var t = function(o) {
    return !(0, au.blockElements)().includes(o.tagName.toLowerCase()) && Array.from(o.children).every(t);
  };
  return Array.from(e.children).every(t);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.containsOnlyInlineElements = void 0;
  var e = mn;
  Object.defineProperty(n, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return e.containsOnlyInlineElements;
  } });
})(Ot);
var Hr = {}, yn = {}, Lt = {}, wn = {};
Object.defineProperty(wn, "__esModule", { value: !0 });
wn.make = cu;
function cu(n, e, t) {
  var o;
  e === void 0 && (e = null), t === void 0 && (t = {});
  var i = document.createElement(n);
  if (Array.isArray(e)) {
    var r = e.filter(function(a) {
      return a !== void 0;
    });
    (o = i.classList).add.apply(o, r);
  } else
    e !== null && i.classList.add(e);
  for (var s in t)
    Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s]);
  return i;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.make = void 0;
  var e = wn;
  Object.defineProperty(n, "make", { enumerable: !0, get: function() {
    return e.make;
  } });
})(Lt);
Object.defineProperty(yn, "__esModule", { value: !0 });
yn.fragmentToString = uu;
var du = Lt;
function uu(n) {
  var e = (0, du.make)("div");
  return e.appendChild(n), e.innerHTML;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.fragmentToString = void 0;
  var e = yn;
  Object.defineProperty(n, "fragmentToString", { enumerable: !0, get: function() {
    return e.fragmentToString;
  } });
})(Hr);
var $r = {}, kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.getContentLength = pu;
var hu = xe;
function pu(n) {
  var e, t;
  return (0, hu.isNativeInput)(n) ? n.value.length : n.nodeType === Node.TEXT_NODE ? n.length : (t = (e = n.textContent) === null || e === void 0 ? void 0 : e.length) !== null && t !== void 0 ? t : 0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getContentLength = void 0;
  var e = kn;
  Object.defineProperty(n, "getContentLength", { enumerable: !0, get: function() {
    return e.getContentLength;
  } });
})($r);
var xn = {}, Cn = {}, ii = vt && vt.__spreadArray || function(n, e, t) {
  if (t || arguments.length === 2)
    for (var o = 0, i = e.length, r; o < i; o++)
      (r || !(o in e)) && (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
  return n.concat(r || Array.prototype.slice.call(e));
};
Object.defineProperty(Cn, "__esModule", { value: !0 });
Cn.getDeepestBlockElements = Ur;
var fu = Ot;
function Ur(n) {
  return (0, fu.containsOnlyInlineElements)(n) ? [n] : Array.from(n.children).reduce(function(e, t) {
    return ii(ii([], e, !0), Ur(t), !0);
  }, []);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getDeepestBlockElements = void 0;
  var e = Cn;
  Object.defineProperty(n, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return e.getDeepestBlockElements;
  } });
})(xn);
var zr = {}, En = {}, Mt = {}, Sn = {};
Object.defineProperty(Sn, "__esModule", { value: !0 });
Sn.isLineBreakTag = gu;
function gu(n) {
  return [
    "BR",
    "WBR"
  ].includes(n.tagName);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isLineBreakTag = void 0;
  var e = Sn;
  Object.defineProperty(n, "isLineBreakTag", { enumerable: !0, get: function() {
    return e.isLineBreakTag;
  } });
})(Mt);
var It = {}, Tn = {};
Object.defineProperty(Tn, "__esModule", { value: !0 });
Tn.isSingleTag = mu;
function mu(n) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(n.tagName);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isSingleTag = void 0;
  var e = Tn;
  Object.defineProperty(n, "isSingleTag", { enumerable: !0, get: function() {
    return e.isSingleTag;
  } });
})(It);
Object.defineProperty(En, "__esModule", { value: !0 });
En.getDeepestNode = qr;
var bu = xe, vu = Mt, yu = It;
function qr(n, e) {
  e === void 0 && (e = !1);
  var t = e ? "lastChild" : "firstChild", o = e ? "previousSibling" : "nextSibling";
  if (n.nodeType === Node.ELEMENT_NODE && n[t]) {
    var i = n[t];
    if ((0, yu.isSingleTag)(i) && !(0, bu.isNativeInput)(i) && !(0, vu.isLineBreakTag)(i))
      if (i[o])
        i = i[o];
      else if (i.parentNode !== null && i.parentNode[o])
        i = i.parentNode[o];
      else
        return i.parentNode;
    return qr(i, e);
  }
  return n;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getDeepestNode = void 0;
  var e = En;
  Object.defineProperty(n, "getDeepestNode", { enumerable: !0, get: function() {
    return e.getDeepestNode;
  } });
})(zr);
var Wr = {}, _n = {}, et = vt && vt.__spreadArray || function(n, e, t) {
  if (t || arguments.length === 2)
    for (var o = 0, i = e.length, r; o < i; o++)
      (r || !(o in e)) && (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
  return n.concat(r || Array.prototype.slice.call(e));
};
Object.defineProperty(_n, "__esModule", { value: !0 });
_n.findAllInputs = Eu;
var wu = Ot, ku = xn, xu = sn, Cu = xe;
function Eu(n) {
  return Array.from(n.querySelectorAll((0, xu.allInputsSelector)())).reduce(function(e, t) {
    return (0, Cu.isNativeInput)(t) || (0, wu.containsOnlyInlineElements)(t) ? et(et([], e, !0), [t], !1) : et(et([], e, !0), (0, ku.getDeepestBlockElements)(t), !0);
  }, []);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.findAllInputs = void 0;
  var e = _n;
  Object.defineProperty(n, "findAllInputs", { enumerable: !0, get: function() {
    return e.findAllInputs;
  } });
})(Wr);
var Vr = {}, Bn = {};
Object.defineProperty(Bn, "__esModule", { value: !0 });
Bn.isCollapsedWhitespaces = Su;
function Su(n) {
  return !/[^\t\n\r ]/.test(n);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isCollapsedWhitespaces = void 0;
  var e = Bn;
  Object.defineProperty(n, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return e.isCollapsedWhitespaces;
  } });
})(Vr);
var On = {}, Ln = {};
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.isElement = _u;
var Tu = vn;
function _u(n) {
  return (0, Tu.isNumber)(n) ? !1 : !!n && !!n.nodeType && n.nodeType === Node.ELEMENT_NODE;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isElement = void 0;
  var e = Ln;
  Object.defineProperty(n, "isElement", { enumerable: !0, get: function() {
    return e.isElement;
  } });
})(On);
var Kr = {}, Mn = {}, In = {}, Pn = {};
Object.defineProperty(Pn, "__esModule", { value: !0 });
Pn.isLeaf = Bu;
function Bu(n) {
  return n === null ? !1 : n.childNodes.length === 0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isLeaf = void 0;
  var e = Pn;
  Object.defineProperty(n, "isLeaf", { enumerable: !0, get: function() {
    return e.isLeaf;
  } });
})(In);
var An = {}, Nn = {};
Object.defineProperty(Nn, "__esModule", { value: !0 });
Nn.isNodeEmpty = Pu;
var Ou = Mt, Lu = On, Mu = xe, Iu = It;
function Pu(n, e) {
  var t = "";
  return (0, Iu.isSingleTag)(n) && !(0, Ou.isLineBreakTag)(n) ? !1 : ((0, Lu.isElement)(n) && (0, Mu.isNativeInput)(n) ? t = n.value : n.textContent !== null && (t = n.textContent.replace("​", "")), e !== void 0 && (t = t.replace(new RegExp(e, "g"), "")), t.trim().length === 0);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isNodeEmpty = void 0;
  var e = Nn;
  Object.defineProperty(n, "isNodeEmpty", { enumerable: !0, get: function() {
    return e.isNodeEmpty;
  } });
})(An);
Object.defineProperty(Mn, "__esModule", { value: !0 });
Mn.isEmpty = Ru;
var Au = In, Nu = An;
function Ru(n, e) {
  n.normalize();
  for (var t = [n]; t.length > 0; ) {
    var o = t.shift();
    if (o) {
      if (n = o, (0, Au.isLeaf)(n) && !(0, Nu.isNodeEmpty)(n, e))
        return !1;
      t.push.apply(t, Array.from(n.childNodes));
    }
  }
  return !0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isEmpty = void 0;
  var e = Mn;
  Object.defineProperty(n, "isEmpty", { enumerable: !0, get: function() {
    return e.isEmpty;
  } });
})(Kr);
var Yr = {}, Rn = {};
Object.defineProperty(Rn, "__esModule", { value: !0 });
Rn.isFragment = Du;
var ju = vn;
function Du(n) {
  return (0, ju.isNumber)(n) ? !1 : !!n && !!n.nodeType && n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isFragment = void 0;
  var e = Rn;
  Object.defineProperty(n, "isFragment", { enumerable: !0, get: function() {
    return e.isFragment;
  } });
})(Yr);
var Xr = {}, jn = {};
Object.defineProperty(jn, "__esModule", { value: !0 });
jn.isHTMLString = Hu;
var Fu = Lt;
function Hu(n) {
  var e = (0, Fu.make)("div");
  return e.innerHTML = n, e.childElementCount > 0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isHTMLString = void 0;
  var e = jn;
  Object.defineProperty(n, "isHTMLString", { enumerable: !0, get: function() {
    return e.isHTMLString;
  } });
})(Xr);
var Gr = {}, Dn = {};
Object.defineProperty(Dn, "__esModule", { value: !0 });
Dn.offset = $u;
function $u(n) {
  var e = n.getBoundingClientRect(), t = window.pageXOffset || document.documentElement.scrollLeft, o = window.pageYOffset || document.documentElement.scrollTop, i = e.top + o, r = e.left + t;
  return {
    top: i,
    left: r,
    bottom: i + e.height,
    right: r + e.width
  };
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.offset = void 0;
  var e = Dn;
  Object.defineProperty(n, "offset", { enumerable: !0, get: function() {
    return e.offset;
  } });
})(Gr);
var Zr = {}, Fn = {};
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.prepend = Uu;
function Uu(n, e) {
  Array.isArray(e) ? (e = e.reverse(), e.forEach(function(t) {
    return n.prepend(t);
  })) : n.prepend(e);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.prepend = void 0;
  var e = Fn;
  Object.defineProperty(n, "prepend", { enumerable: !0, get: function() {
    return e.prepend;
  } });
})(Zr);
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.prepend = n.offset = n.make = n.isLineBreakTag = n.isSingleTag = n.isNodeEmpty = n.isLeaf = n.isHTMLString = n.isFragment = n.isEmpty = n.isElement = n.isContentEditable = n.isCollapsedWhitespaces = n.findAllInputs = n.isNativeInput = n.allInputsSelector = n.getDeepestNode = n.getDeepestBlockElements = n.getContentLength = n.fragmentToString = n.containsOnlyInlineElements = n.canSetCaret = n.calculateBaseline = n.blockElements = n.append = void 0;
  var e = sn;
  Object.defineProperty(n, "allInputsSelector", { enumerable: !0, get: function() {
    return e.allInputsSelector;
  } });
  var t = xe;
  Object.defineProperty(n, "isNativeInput", { enumerable: !0, get: function() {
    return t.isNativeInput;
  } });
  var o = Nr;
  Object.defineProperty(n, "append", { enumerable: !0, get: function() {
    return o.append;
  } });
  var i = dn;
  Object.defineProperty(n, "blockElements", { enumerable: !0, get: function() {
    return i.blockElements;
  } });
  var r = Rr;
  Object.defineProperty(n, "calculateBaseline", { enumerable: !0, get: function() {
    return r.calculateBaseline;
  } });
  var s = jr;
  Object.defineProperty(n, "canSetCaret", { enumerable: !0, get: function() {
    return s.canSetCaret;
  } });
  var a = Ot;
  Object.defineProperty(n, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return a.containsOnlyInlineElements;
  } });
  var c = Hr;
  Object.defineProperty(n, "fragmentToString", { enumerable: !0, get: function() {
    return c.fragmentToString;
  } });
  var l = $r;
  Object.defineProperty(n, "getContentLength", { enumerable: !0, get: function() {
    return l.getContentLength;
  } });
  var u = xn;
  Object.defineProperty(n, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return u.getDeepestBlockElements;
  } });
  var d = zr;
  Object.defineProperty(n, "getDeepestNode", { enumerable: !0, get: function() {
    return d.getDeepestNode;
  } });
  var g = Wr;
  Object.defineProperty(n, "findAllInputs", { enumerable: !0, get: function() {
    return g.findAllInputs;
  } });
  var v = Vr;
  Object.defineProperty(n, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return v.isCollapsedWhitespaces;
  } });
  var f = fn;
  Object.defineProperty(n, "isContentEditable", { enumerable: !0, get: function() {
    return f.isContentEditable;
  } });
  var h = On;
  Object.defineProperty(n, "isElement", { enumerable: !0, get: function() {
    return h.isElement;
  } });
  var p = Kr;
  Object.defineProperty(n, "isEmpty", { enumerable: !0, get: function() {
    return p.isEmpty;
  } });
  var m = Yr;
  Object.defineProperty(n, "isFragment", { enumerable: !0, get: function() {
    return m.isFragment;
  } });
  var b = Xr;
  Object.defineProperty(n, "isHTMLString", { enumerable: !0, get: function() {
    return b.isHTMLString;
  } });
  var w = In;
  Object.defineProperty(n, "isLeaf", { enumerable: !0, get: function() {
    return w.isLeaf;
  } });
  var k = An;
  Object.defineProperty(n, "isNodeEmpty", { enumerable: !0, get: function() {
    return k.isNodeEmpty;
  } });
  var y = Mt;
  Object.defineProperty(n, "isLineBreakTag", { enumerable: !0, get: function() {
    return y.isLineBreakTag;
  } });
  var S = It;
  Object.defineProperty(n, "isSingleTag", { enumerable: !0, get: function() {
    return S.isSingleTag;
  } });
  var O = Lt;
  Object.defineProperty(n, "make", { enumerable: !0, get: function() {
    return O.make;
  } });
  var E = Gr;
  Object.defineProperty(n, "offset", { enumerable: !0, get: function() {
    return E.offset;
  } });
  var C = Zr;
  Object.defineProperty(n, "prepend", { enumerable: !0, get: function() {
    return C.prepend;
  } });
})(at);
var Jr = /* @__PURE__ */ ((n) => (n.Left = "left", n.Center = "center", n))(Jr || {});
let zu = class ct {
  /**
   * Render plugin`s main Element and fill it with saved data
   * @param params - Quote Tool constructor params
   * @param params.data - previously saved data
   * @param params.config - user config for Tool
   * @param params.api - editor.js api
   * @param params.readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i, block: r }) {
    const { DEFAULT_ALIGNMENT: s } = ct;
    this.api = o, this.readOnly = i, this.quotePlaceholder = o.i18n.t(t?.quotePlaceholder ?? ct.DEFAULT_QUOTE_PLACEHOLDER), this.captionPlaceholder = o.i18n.t(t?.captionPlaceholder ?? ct.DEFAULT_CAPTION_PLACEHOLDER), this.data = {
      text: e.text || "",
      caption: e.caption || "",
      alignment: Object.values(Jr).includes(e.alignment) ? e.alignment : t?.defaultAlignment ?? s
    }, this.css = {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption"
    }, this.block = r;
  }
  /**
   * Notify core that read-only mode is supported
   * @returns true
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   * @returns icon and title of the toolbox
   */
  static get toolbox() {
    return {
      icon: Bd,
      title: "Quote"
    };
  }
  /**
   * Empty Quote is not empty Block
   * @returns true
   */
  static get contentless() {
    return !0;
  }
  /**
   * Allow to press Enter inside the Quote
   * @returns true
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Default placeholder for quote text
   * @returns 'Enter a quote'
   */
  static get DEFAULT_QUOTE_PLACEHOLDER() {
    return "Enter a quote";
  }
  /**
   * Default placeholder for quote caption
   * @returns 'Enter a caption'
   */
  static get DEFAULT_CAPTION_PLACEHOLDER() {
    return "Enter a caption";
  }
  /**
   * Default quote alignment
   * @returns Alignment.Left
   */
  static get DEFAULT_ALIGNMENT() {
    return "left";
  }
  /**
   * Allow Quote to be converted to/from other blocks
   * @returns conversion config object
   */
  static get conversionConfig() {
    return {
      /**
       * To create Quote data from string, simple fill 'text' property
       */
      import: "text",
      /**
       * To create string from Quote data, concatenate text and caption
       * @param quoteData - Quote data object
       * @returns string
       */
      export: function(e) {
        return e.caption ? `${e.text} — ${e.caption}` : e.text;
      }
    };
  }
  /**
   * Tool`s styles
   * @returns CSS classes names
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption"
    };
  }
  /**
   * Tool`s settings properties
   * @returns settings properties
   */
  get settings() {
    return [
      {
        name: "left",
        icon: _d
      },
      {
        name: "center",
        icon: Td
      }
    ];
  }
  /**
   * Create Quote Tool container with inputs
   * @returns blockquote DOM element - Quote Tool container
   */
  render() {
    const e = at.make("blockquote", [
      this.css.baseClass,
      this.css.wrapper
    ]), t = at.make("div", [this.css.input, this.css.text], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.text
    }), o = at.make("div", [this.css.input, this.css.caption], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.caption
    });
    return t.dataset.placeholder = this.quotePlaceholder, o.dataset.placeholder = this.captionPlaceholder, e.appendChild(t), e.appendChild(o), e;
  }
  /**
   * Extract Quote data from Quote Tool element
   * @param quoteElement - Quote DOM element to save
   * @returns Quote data object
   */
  save(e) {
    const t = e.querySelector(`.${this.css.text}`), o = e.querySelector(`.${this.css.caption}`);
    return Object.assign(this.data, {
      text: t?.innerHTML ?? "",
      caption: o?.innerHTML ?? ""
    });
  }
  /**
   * Sanitizer rules
   * @returns sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      },
      caption: {
        br: !0
      },
      alignment: {}
    };
  }
  /**
   * Create wrapper for Tool`s settings buttons:
   * 1. Left alignment
   * 2. Center alignment
   * @returns settings menu
   */
  renderSettings() {
    const e = (t) => t && t[0].toUpperCase() + t.slice(1);
    return this.settings.map((t) => ({
      icon: t.icon,
      label: this.api.i18n.t(`Align ${e(t.name)}`),
      onActivate: () => this._toggleTune(t.name),
      isActive: this.data.alignment === t.name,
      closeOnActivate: !0
    }));
  }
  /**
   * Toggle quote`s alignment
   * @param tune - alignment
   */
  _toggleTune(e) {
    this.data.alignment = e, this.block.dispatchChange();
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode('.ce-delimiter{line-height:1.6em;width:100%;text-align:center}.ce-delimiter:before{display:inline-block;content:"***";font-size:30px;line-height:65px;height:30px;letter-spacing:.2em}')), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const qu = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="6" x2="10" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="14" x2="18" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
/**
 * Delimiter Block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */
class Wu {
  /**
   * Notify core that read-only mode is supported
   * @return {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow Tool to have no content
   * @return {boolean}
   */
  static get contentless() {
    return !0;
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: DelimiterData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({ data: e, config: t, api: o }) {
    this.api = o, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-delimiter"
    }, this._element = this.drawView(), this.data = e;
  }
  /**
   * Create Tool's view
   * @return {HTMLDivElement}
   * @private
   */
  drawView() {
    let e = document.createElement("div");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), e;
  }
  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    return this._element;
  }
  /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {DelimiterData} - saved data
   * @public
   */
  save(e) {
    return {};
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: qu,
      title: "Delimiter"
    };
  }
  /**
   * Delimiter onPaste configuration
   *
   * @public
   */
  static get pasteConfig() {
    return { tags: ["HR"] };
  }
  /**
   * On paste callback that is fired from Editor
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(e) {
    this.data = {};
  }
}
(function() {
  var n;
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.nonce = (n = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : n.content, e.appendChild(document.createTextNode('.tc-wrap{--color-background:#f9f9fb;--color-text-secondary:#7b7e89;--color-border:#e8e8eb;--cell-size:34px;--toolbox-icon-size:18px;--toolbox-padding:6px;--toolbox-aiming-field-size:calc(var(--toolbox-icon-size) + var(--toolbox-padding)*2);border-left:0;position:relative;height:100%;width:100%;margin-top:var(--toolbox-icon-size);box-sizing:border-box;display:grid;grid-template-columns:calc(100% - var(--cell-size)) var(--cell-size);z-index:0}.tc-wrap--readonly{grid-template-columns:100% var(--cell-size)}.tc-wrap svg{vertical-align:top}@media print{.tc-wrap{border-left-color:var(--color-border);border-left-style:solid;border-left-width:1px;grid-template-columns:100% var(--cell-size)}}@media print{.tc-wrap .tc-row:after{display:none}}.tc-table{position:relative;width:100%;height:100%;display:grid;font-size:14px;border-top:1px solid var(--color-border);line-height:1.4}.tc-table:after{width:calc(var(--cell-size));height:100%;left:calc(var(--cell-size)*-1);top:0}.tc-table:after,.tc-table:before{position:absolute;content:""}.tc-table:before{width:100%;height:var(--toolbox-aiming-field-size);top:calc(var(--toolbox-aiming-field-size)*-1);left:0}.tc-table--heading .tc-row:first-child{font-weight:600;border-bottom:2px solid var(--color-border);position:sticky;top:0;z-index:2;background:var(--color-background)}.tc-table--heading .tc-row:first-child [contenteditable]:empty:before{content:attr(heading);color:var(--color-text-secondary)}.tc-table--heading .tc-row:first-child:after{bottom:-2px;border-bottom:2px solid var(--color-border)}.tc-add-column,.tc-add-row{display:flex;color:var(--color-text-secondary)}@media print{.tc-add{display:none}}.tc-add-column{display:grid;border-top:1px solid var(--color-border);grid-template-columns:var(--cell-size);grid-auto-rows:var(--cell-size);place-items:center}.tc-add-column svg{padding:5px;position:sticky;top:0;background-color:var(--color-background)}.tc-add-column--disabled{visibility:hidden}@media print{.tc-add-column{display:none}}.tc-add-row{height:var(--cell-size);align-items:center;padding-left:4px;position:relative}.tc-add-row--disabled{display:none}.tc-add-row:before{content:"";position:absolute;right:calc(var(--cell-size)*-1);width:var(--cell-size);height:100%}@media print{.tc-add-row{display:none}}.tc-add-column,.tc-add-row{transition:0s;cursor:pointer;will-change:background-color}.tc-add-column:hover,.tc-add-row:hover{transition:background-color .1s ease;background-color:var(--color-background)}.tc-add-row{margin-top:1px}.tc-add-row:hover:before{transition:.1s;background-color:var(--color-background)}.tc-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(10px,1fr));position:relative;border-bottom:1px solid var(--color-border)}.tc-row:after{content:"";pointer-events:none;position:absolute;width:var(--cell-size);height:100%;bottom:-1px;right:calc(var(--cell-size)*-1);border-bottom:1px solid var(--color-border)}.tc-row--selected{background:var(--color-background)}.tc-row--selected:after{background:var(--color-background)}.tc-cell{border-right:1px solid var(--color-border);padding:6px 12px;overflow:hidden;outline:none;line-break:normal}.tc-cell--selected{background:var(--color-background)}.tc-wrap--readonly .tc-row:after{display:none}.tc-toolbox{--toolbox-padding:6px;--popover-margin:30px;--toggler-click-zone-size:30px;--toggler-dots-color:#7b7e89;--toggler-dots-color-hovered:#1d202b;position:absolute;cursor:pointer;z-index:1;opacity:0;transition:opacity .1s;will-change:left,opacity}.tc-toolbox--column{top:calc(var(--toggler-click-zone-size)*-1);transform:translate(calc(var(--toggler-click-zone-size)*-1/2));will-change:left,opacity}.tc-toolbox--row{left:calc(var(--popover-margin)*-1);transform:translateY(calc(var(--toggler-click-zone-size)*-1/2));margin-top:-1px;will-change:top,opacity}.tc-toolbox--showed{opacity:1}.tc-toolbox .tc-popover{position:absolute;top:0;left:var(--popover-margin)}.tc-toolbox__toggler{display:flex;align-items:center;justify-content:center;width:var(--toggler-click-zone-size);height:var(--toggler-click-zone-size);color:var(--toggler-dots-color);opacity:0;transition:opacity .15s ease;will-change:opacity}.tc-toolbox__toggler:hover{color:var(--toggler-dots-color-hovered)}.tc-toolbox__toggler svg{fill:currentColor}.tc-wrap:hover .tc-toolbox__toggler{opacity:1}.tc-settings .cdx-settings-button{width:50%;margin:0}.tc-popover{--color-border:#eaeaea;--color-background:#fff;--color-background-hover:rgba(232,232,235,.49);--color-background-confirm:#e24a4a;--color-background-confirm-hover:#d54040;--color-text-confirm:#fff;background:var(--color-background);border:1px solid var(--color-border);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;padding:6px;display:none;will-change:opacity,transform}.tc-popover--opened{display:block;animation:menuShowing .1s cubic-bezier(.215,.61,.355,1) forwards}.tc-popover__item{display:flex;align-items:center;padding:2px 14px 2px 2px;border-radius:5px;cursor:pointer;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tc-popover__item:hover{background:var(--color-background-hover)}.tc-popover__item:not(:last-of-type){margin-bottom:2px}.tc-popover__item-icon{display:inline-flex;width:26px;height:26px;align-items:center;justify-content:center;background:var(--color-background);border-radius:5px;border:1px solid var(--color-border);margin-right:8px}.tc-popover__item-label{line-height:22px;font-size:14px;font-weight:500}.tc-popover__item--confirm{background:var(--color-background-confirm);color:var(--color-text-confirm)}.tc-popover__item--confirm:hover{background-color:var(--color-background-confirm-hover)}.tc-popover__item--confirm .tc-popover__item-icon{background:var(--color-background-confirm);border-color:#0000001a}.tc-popover__item--confirm .tc-popover__item-icon svg{transition:transform .2s ease-in;transform:rotate(90deg) scale(1.2)}.tc-popover__item--hidden{display:none}@keyframes menuShowing{0%{opacity:0;transform:translateY(-8px) scale(.9)}70%{opacity:1;transform:translateY(2px)}to{transform:translateY(0)}}')), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
function X(n, e, t = {}) {
  const o = document.createElement(n);
  Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);
  for (const i in t)
    Object.prototype.hasOwnProperty.call(t, i) && (o[i] = t[i]);
  return o;
}
function ri(n) {
  const e = n.getBoundingClientRect();
  return {
    y1: Math.floor(e.top + window.pageYOffset),
    x1: Math.floor(e.left + window.pageXOffset),
    x2: Math.floor(e.right + window.pageXOffset),
    y2: Math.floor(e.bottom + window.pageYOffset)
  };
}
function si(n, e) {
  const t = ri(n), o = ri(e);
  return {
    fromTopBorder: o.y1 - t.y1,
    fromLeftBorder: o.x1 - t.x1,
    fromRightBorder: t.x2 - o.x2,
    fromBottomBorder: t.y2 - o.y2
  };
}
function Vu(n, e) {
  const t = n.getBoundingClientRect(), { width: o, height: i, x: r, y: s } = t, { clientX: a, clientY: c } = e;
  return {
    width: o,
    height: i,
    x: a - r,
    y: c - s
  };
}
function ai(n, e) {
  return e.parentNode.insertBefore(n, e);
}
function li(n, e = !0) {
  const t = document.createRange(), o = window.getSelection();
  t.selectNodeContents(n), t.collapse(e), o.removeAllRanges(), o.addRange(t);
}
let Ku = class Y {
  /**
   * @param {object} options - constructor options
   * @param {PopoverItem[]} options.items - constructor options
   */
  constructor({ items: e }) {
    this.items = e, this.wrapper = void 0, this.itemEls = [];
  }
  /**
   * Set of CSS classnames used in popover
   *
   * @returns {object}
   */
  static get CSS() {
    return {
      popover: "tc-popover",
      popoverOpened: "tc-popover--opened",
      item: "tc-popover__item",
      itemHidden: "tc-popover__item--hidden",
      itemConfirmState: "tc-popover__item--confirm",
      itemIcon: "tc-popover__item-icon",
      itemLabel: "tc-popover__item-label"
    };
  }
  /**
   * Returns the popover element
   *
   * @returns {Element}
   */
  render() {
    return this.wrapper = X("div", Y.CSS.popover), this.items.forEach((e, t) => {
      const o = X("div", Y.CSS.item), i = X("div", Y.CSS.itemIcon, {
        innerHTML: e.icon
      }), r = X("div", Y.CSS.itemLabel, {
        textContent: e.label
      });
      o.dataset.index = t, o.appendChild(i), o.appendChild(r), this.wrapper.appendChild(o), this.itemEls.push(o);
    }), this.wrapper.addEventListener("click", (e) => {
      this.popoverClicked(e);
    }), this.wrapper;
  }
  /**
   * Popover wrapper click listener
   * Used to delegate clicks in items
   *
   * @returns {void}
   */
  popoverClicked(e) {
    const t = e.target.closest(`.${Y.CSS.item}`);
    if (!t)
      return;
    const o = t.dataset.index, i = this.items[o];
    if (i.confirmationRequired && !this.hasConfirmationState(t)) {
      this.setConfirmationState(t);
      return;
    }
    i.onClick();
  }
  /**
   * Enable the confirmation state on passed item
   *
   * @returns {void}
   */
  setConfirmationState(e) {
    e.classList.add(Y.CSS.itemConfirmState);
  }
  /**
   * Disable the confirmation state on passed item
   *
   * @returns {void}
   */
  clearConfirmationState(e) {
    e.classList.remove(Y.CSS.itemConfirmState);
  }
  /**
   * Check if passed item has the confirmation state
   *
   * @returns {boolean}
   */
  hasConfirmationState(e) {
    return e.classList.contains(Y.CSS.itemConfirmState);
  }
  /**
   * Return an opening state
   *
   * @returns {boolean}
   */
  get opened() {
    return this.wrapper.classList.contains(Y.CSS.popoverOpened);
  }
  /**
   * Opens the popover
   *
   * @returns {void}
   */
  open() {
    this.items.forEach((e, t) => {
      typeof e.hideIf == "function" && this.itemEls[t].classList.toggle(Y.CSS.itemHidden, e.hideIf());
    }), this.wrapper.classList.add(Y.CSS.popoverOpened);
  }
  /**
   * Closes the popover
   *
   * @returns {void}
   */
  close() {
    this.wrapper.classList.remove(Y.CSS.popoverOpened), this.itemEls.forEach((e) => {
      this.clearConfirmationState(e);
    });
  }
};
const Yu = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L10 12M10 12L7 15M10 12H4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L14 12M14 12L17 15M14 12H20"/></svg>', ci = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', Xu = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 9.16666L18.2167 12.5M18.2167 12.5L14.8833 15.8333M18.2167 12.5H10.05C9.16594 12.5 8.31809 12.1488 7.69297 11.5237C7.06785 10.8986 6.71666 10.0507 6.71666 9.16666"/></svg>', Gu = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.9167 14.9167L11.5833 18.25M11.5833 18.25L8.25 14.9167M11.5833 18.25L11.5833 10.0833C11.5833 9.19928 11.9345 8.35143 12.5596 7.72631C13.1848 7.10119 14.0326 6.75 14.9167 6.75"/></svg>', Zu = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.13333 14.9167L12.4667 18.25M12.4667 18.25L15.8 14.9167M12.4667 18.25L12.4667 10.0833C12.4667 9.19928 12.1155 8.35143 11.4904 7.72631C10.8652 7.10119 10.0174 6.75 9.13333 6.75"/></svg>', Ju = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 15.8333L18.2167 12.5M18.2167 12.5L14.8833 9.16667M18.2167 12.5L10.05 12.5C9.16595 12.5 8.31811 12.8512 7.69299 13.4763C7.06787 14.1014 6.71667 14.9493 6.71667 15.8333"/></svg>', Qu = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 9.66H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 9.66H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.31 14.36H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 14.36H14.59"/></svg>', di = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', eh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>', th = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', oh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M14 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><path stroke="currentColor" stroke-width="2" d="M5 14H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', nh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
let ui = class Be {
  /**
   * Creates toolbox buttons and toolbox menus
   *
   * @param {Object} config
   * @param {any} config.api - Editor.js api
   * @param {PopoverItem[]} config.items - Editor.js api
   * @param {function} config.onOpen - callback fired when the Popover is opening
   * @param {function} config.onClose - callback fired when the Popover is closing
   * @param {string} config.cssModifier - the modifier for the Toolbox. Allows to add some specific styles.
   */
  constructor({ api: e, items: t, onOpen: o, onClose: i, cssModifier: r = "" }) {
    this.api = e, this.items = t, this.onOpen = o, this.onClose = i, this.cssModifier = r, this.popover = null, this.wrapper = this.createToolbox();
  }
  /**
   * Style classes
   */
  static get CSS() {
    return {
      toolbox: "tc-toolbox",
      toolboxShowed: "tc-toolbox--showed",
      toggler: "tc-toolbox__toggler"
    };
  }
  /**
   * Returns rendered Toolbox element
   */
  get element() {
    return this.wrapper;
  }
  /**
   * Creating a toolbox to open menu for a manipulating columns
   *
   * @returns {Element}
   */
  createToolbox() {
    const e = X("div", [
      Be.CSS.toolbox,
      this.cssModifier ? `${Be.CSS.toolbox}--${this.cssModifier}` : ""
    ]);
    e.dataset.mutationFree = "true";
    const t = this.createPopover(), o = this.createToggler();
    return e.appendChild(o), e.appendChild(t), e;
  }
  /**
   * Creates the Toggler
   *
   * @returns {Element}
   */
  createToggler() {
    const e = X("div", Be.CSS.toggler, {
      innerHTML: Qu
    });
    return e.addEventListener("click", () => {
      this.togglerClicked();
    }), e;
  }
  /**
   * Creates the Popover instance and render it
   *
   * @returns {Element}
   */
  createPopover() {
    return this.popover = new Ku({
      items: this.items
    }), this.popover.render();
  }
  /**
   * Toggler click handler. Opens/Closes the popover
   *
   * @returns {void}
   */
  togglerClicked() {
    this.popover.opened ? (this.popover.close(), this.onClose()) : (this.popover.open(), this.onOpen());
  }
  /**
   * Shows the Toolbox
   *
   * @param {function} computePositionMethod - method that returns the position coordinate
   * @returns {void}
   */
  show(e) {
    const t = e();
    Object.entries(t).forEach(([o, i]) => {
      this.wrapper.style[o] = i;
    }), this.wrapper.classList.add(Be.CSS.toolboxShowed);
  }
  /**
   * Hides the Toolbox
   *
   * @returns {void}
   */
  hide() {
    this.popover.close(), this.wrapper.classList.remove(Be.CSS.toolboxShowed);
  }
};
function ih(n, e) {
  let t = 0;
  return function(...o) {
    const i = (/* @__PURE__ */ new Date()).getTime();
    if (!(i - t < n))
      return t = i, e(...o);
  };
}
const L = {
  wrapper: "tc-wrap",
  wrapperReadOnly: "tc-wrap--readonly",
  table: "tc-table",
  row: "tc-row",
  withHeadings: "tc-table--heading",
  rowSelected: "tc-row--selected",
  cell: "tc-cell",
  cellSelected: "tc-cell--selected",
  addRow: "tc-add-row",
  addRowDisabled: "tc-add-row--disabled",
  addColumn: "tc-add-column",
  addColumnDisabled: "tc-add-column--disabled"
};
class rh {
  /**
   * Creates
   *
   * @constructor
   * @param {boolean} readOnly - read-only mode flag
   * @param {object} api - Editor.js API
   * @param {TableData} data - Editor.js API
   * @param {TableConfig} config - Editor.js API
   */
  constructor(e, t, o, i) {
    this.readOnly = e, this.api = t, this.data = o, this.config = i, this.wrapper = null, this.table = null, this.toolboxColumn = this.createColumnToolbox(), this.toolboxRow = this.createRowToolbox(), this.createTableWrapper(), this.hoveredRow = 0, this.hoveredColumn = 0, this.selectedRow = 0, this.selectedColumn = 0, this.tunes = {
      withHeadings: !1
    }, this.resize(), this.fill(), this.focusedCell = {
      row: 0,
      column: 0
    }, this.documentClicked = (r) => {
      const s = r.target.closest(`.${L.table}`) !== null, a = r.target.closest(`.${L.wrapper}`) === null;
      (s || a) && this.hideToolboxes();
      const c = r.target.closest(`.${L.addRow}`), l = r.target.closest(`.${L.addColumn}`);
      c && c.parentNode === this.wrapper ? (this.addRow(void 0, !0), this.hideToolboxes()) : l && l.parentNode === this.wrapper && (this.addColumn(void 0, !0), this.hideToolboxes());
    }, this.readOnly || this.bindEvents();
  }
  /**
   * Returns the rendered table wrapper
   *
   * @returns {Element}
   */
  getWrapper() {
    return this.wrapper;
  }
  /**
   * Hangs the necessary handlers to events
   */
  bindEvents() {
    document.addEventListener("click", this.documentClicked), this.table.addEventListener("mousemove", ih(150, (e) => this.onMouseMoveInTable(e)), { passive: !0 }), this.table.onkeypress = (e) => this.onKeyPressListener(e), this.table.addEventListener("keydown", (e) => this.onKeyDownListener(e)), this.table.addEventListener("focusin", (e) => this.focusInTableListener(e));
  }
  /**
   * Configures and creates the toolbox for manipulating with columns
   *
   * @returns {Toolbox}
   */
  createColumnToolbox() {
    return new ui({
      api: this.api,
      cssModifier: "column",
      items: [
        {
          label: this.api.i18n.t("Add column to left"),
          icon: Gu,
          hideIf: () => this.numberOfColumns === this.config.maxcols,
          onClick: () => {
            this.addColumn(this.selectedColumn, !0), this.hideToolboxes();
          }
        },
        {
          label: this.api.i18n.t("Add column to right"),
          icon: Zu,
          hideIf: () => this.numberOfColumns === this.config.maxcols,
          onClick: () => {
            this.addColumn(this.selectedColumn + 1, !0), this.hideToolboxes();
          }
        },
        {
          label: this.api.i18n.t("Delete column"),
          icon: ci,
          hideIf: () => this.numberOfColumns === 1,
          confirmationRequired: !0,
          onClick: () => {
            this.deleteColumn(this.selectedColumn), this.hideToolboxes();
          }
        }
      ],
      onOpen: () => {
        this.selectColumn(this.hoveredColumn), this.hideRowToolbox();
      },
      onClose: () => {
        this.unselectColumn();
      }
    });
  }
  /**
   * Configures and creates the toolbox for manipulating with rows
   *
   * @returns {Toolbox}
   */
  createRowToolbox() {
    return new ui({
      api: this.api,
      cssModifier: "row",
      items: [
        {
          label: this.api.i18n.t("Add row above"),
          icon: Ju,
          hideIf: () => this.numberOfRows === this.config.maxrows,
          onClick: () => {
            this.addRow(this.selectedRow, !0), this.hideToolboxes();
          }
        },
        {
          label: this.api.i18n.t("Add row below"),
          icon: Xu,
          hideIf: () => this.numberOfRows === this.config.maxrows,
          onClick: () => {
            this.addRow(this.selectedRow + 1, !0), this.hideToolboxes();
          }
        },
        {
          label: this.api.i18n.t("Delete row"),
          icon: ci,
          hideIf: () => this.numberOfRows === 1,
          confirmationRequired: !0,
          onClick: () => {
            this.deleteRow(this.selectedRow), this.hideToolboxes();
          }
        }
      ],
      onOpen: () => {
        this.selectRow(this.hoveredRow), this.hideColumnToolbox();
      },
      onClose: () => {
        this.unselectRow();
      }
    });
  }
  /**
   * When you press enter it moves the cursor down to the next row
   * or creates it if the click occurred on the last one
   */
  moveCursorToNextRow() {
    this.focusedCell.row !== this.numberOfRows ? (this.focusedCell.row += 1, this.focusCell(this.focusedCell)) : (this.addRow(), this.focusedCell.row += 1, this.focusCell(this.focusedCell), this.updateToolboxesPosition(0, 0));
  }
  /**
   * Get table cell by row and col index
   *
   * @param {number} row - cell row coordinate
   * @param {number} column - cell column coordinate
   * @returns {HTMLElement}
   */
  getCell(e, t) {
    return this.table.querySelectorAll(`.${L.row}:nth-child(${e}) .${L.cell}`)[t - 1];
  }
  /**
   * Get table row by index
   *
   * @param {number} row - row coordinate
   * @returns {HTMLElement}
   */
  getRow(e) {
    return this.table.querySelector(`.${L.row}:nth-child(${e})`);
  }
  /**
   * The parent of the cell which is the row
   *
   * @param {HTMLElement} cell - cell element
   * @returns {HTMLElement}
   */
  getRowByCell(e) {
    return e.parentElement;
  }
  /**
   * Ger row's first cell
   *
   * @param {Element} row - row to find its first cell
   * @returns {Element}
   */
  getRowFirstCell(e) {
    return e.querySelector(`.${L.cell}:first-child`);
  }
  /**
   * Set the sell's content by row and column numbers
   *
   * @param {number} row - cell row coordinate
   * @param {number} column - cell column coordinate
   * @param {string} content - cell HTML content
   */
  setCellContent(e, t, o) {
    const i = this.getCell(e, t);
    i.innerHTML = o;
  }
  /**
   * Add column in table on index place
   * Add cells in each row
   *
   * @param {number} columnIndex - number in the array of columns, where new column to insert, -1 if insert at the end
   * @param {boolean} [setFocus] - pass true to focus the first cell
   */
  addColumn(e = -1, t = !1) {
    var o;
    let i = this.numberOfColumns;
    if (this.config && this.config.maxcols && this.numberOfColumns >= this.config.maxcols)
      return;
    for (let s = 1; s <= this.numberOfRows; s++) {
      let a;
      const c = this.createCell();
      if (e > 0 && e <= i ? (a = this.getCell(s, e), ai(c, a)) : a = this.getRow(s).appendChild(c), s === 1) {
        const l = this.getCell(s, e > 0 ? e : i + 1);
        l && t && li(l);
      }
    }
    const r = this.wrapper.querySelector(`.${L.addColumn}`);
    (o = this.config) != null && o.maxcols && this.numberOfColumns > this.config.maxcols - 1 && r && r.classList.add(L.addColumnDisabled), this.addHeadingAttrToFirstRow();
  }
  /**
   * Add row in table on index place
   *
   * @param {number} index - number in the array of rows, where new column to insert, -1 if insert at the end
   * @param {boolean} [setFocus] - pass true to focus the inserted row
   * @returns {HTMLElement} row
   */
  addRow(e = -1, t = !1) {
    let o, i = X("div", L.row);
    this.tunes.withHeadings && this.removeHeadingAttrFromFirstRow();
    let r = this.numberOfColumns;
    if (this.config && this.config.maxrows && this.numberOfRows >= this.config.maxrows && a)
      return;
    if (e > 0 && e <= this.numberOfRows) {
      let c = this.getRow(e);
      o = ai(i, c);
    } else
      o = this.table.appendChild(i);
    this.fillRow(o, r), this.tunes.withHeadings && this.addHeadingAttrToFirstRow();
    const s = this.getRowFirstCell(o);
    s && t && li(s);
    const a = this.wrapper.querySelector(`.${L.addRow}`);
    return this.config && this.config.maxrows && this.numberOfRows >= this.config.maxrows && a && a.classList.add(L.addRowDisabled), o;
  }
  /**
   * Delete a column by index
   *
   * @param {number} index
   */
  deleteColumn(e) {
    for (let o = 1; o <= this.numberOfRows; o++) {
      const i = this.getCell(o, e);
      if (!i)
        return;
      i.remove();
    }
    const t = this.wrapper.querySelector(`.${L.addColumn}`);
    t && t.classList.remove(L.addColumnDisabled);
  }
  /**
   * Delete a row by index
   *
   * @param {number} index
   */
  deleteRow(e) {
    this.getRow(e).remove();
    const t = this.wrapper.querySelector(`.${L.addRow}`);
    t && t.classList.remove(L.addRowDisabled), this.addHeadingAttrToFirstRow();
  }
  /**
   * Create a wrapper containing a table, toolboxes
   * and buttons for adding rows and columns
   *
   * @returns {HTMLElement} wrapper - where all buttons for a table and the table itself will be
   */
  createTableWrapper() {
    if (this.wrapper = X("div", L.wrapper), this.table = X("div", L.table), this.readOnly && this.wrapper.classList.add(L.wrapperReadOnly), this.wrapper.appendChild(this.toolboxRow.element), this.wrapper.appendChild(this.toolboxColumn.element), this.wrapper.appendChild(this.table), !this.readOnly) {
      const e = X("div", L.addColumn, {
        innerHTML: di
      }), t = X("div", L.addRow, {
        innerHTML: di
      });
      this.wrapper.appendChild(e), this.wrapper.appendChild(t);
    }
  }
  /**
   * Returns the size of the table based on initial data or config "size" property
   *
   * @return {{rows: number, cols: number}} - number of cols and rows
   */
  computeInitialSize() {
    const e = this.data && this.data.content, t = Array.isArray(e), o = t ? e.length : !1, i = t ? e.length : void 0, r = o ? e[0].length : void 0, s = Number.parseInt(this.config && this.config.rows), a = Number.parseInt(this.config && this.config.cols), c = !isNaN(s) && s > 0 ? s : void 0, l = !isNaN(a) && a > 0 ? a : void 0;
    return {
      rows: i || c || 2,
      cols: r || l || 2
    };
  }
  /**
   * Resize table to match config size or transmitted data size
   *
   * @return {{rows: number, cols: number}} - number of cols and rows
   */
  resize() {
    const { rows: e, cols: t } = this.computeInitialSize();
    for (let o = 0; o < e; o++)
      this.addRow();
    for (let o = 0; o < t; o++)
      this.addColumn();
  }
  /**
   * Fills the table with data passed to the constructor
   *
   * @returns {void}
   */
  fill() {
    const e = this.data;
    if (e && e.content)
      for (let t = 0; t < e.content.length; t++)
        for (let o = 0; o < e.content[t].length; o++)
          this.setCellContent(t + 1, o + 1, e.content[t][o]);
  }
  /**
   * Fills a row with cells
   *
   * @param {HTMLElement} row - row to fill
   * @param {number} numberOfColumns - how many cells should be in a row
   */
  fillRow(e, t) {
    for (let o = 1; o <= t; o++) {
      const i = this.createCell();
      e.appendChild(i);
    }
  }
  /**
   * Creating a cell element
   *
   * @return {Element}
   */
  createCell() {
    return X("div", L.cell, {
      contentEditable: !this.readOnly
    });
  }
  /**
   * Get number of rows in the table
   */
  get numberOfRows() {
    return this.table.childElementCount;
  }
  /**
   * Get number of columns in the table
   */
  get numberOfColumns() {
    return this.numberOfRows ? this.table.querySelectorAll(`.${L.row}:first-child .${L.cell}`).length : 0;
  }
  /**
   * Is the column toolbox menu displayed or not
   *
   * @returns {boolean}
   */
  get isColumnMenuShowing() {
    return this.selectedColumn !== 0;
  }
  /**
   * Is the row toolbox menu displayed or not
   *
   * @returns {boolean}
   */
  get isRowMenuShowing() {
    return this.selectedRow !== 0;
  }
  /**
   * Recalculate position of toolbox icons
   *
   * @param {Event} event - mouse move event
   */
  onMouseMoveInTable(e) {
    const { row: t, column: o } = this.getHoveredCell(e);
    this.hoveredColumn = o, this.hoveredRow = t, this.updateToolboxesPosition();
  }
  /**
   * Prevents default Enter behaviors
   * Adds Shift+Enter processing
   *
   * @param {KeyboardEvent} event - keypress event
   */
  onKeyPressListener(e) {
    if (e.key === "Enter") {
      if (e.shiftKey)
        return !0;
      this.moveCursorToNextRow();
    }
    return e.key !== "Enter";
  }
  /**
   * Prevents tab keydown event from bubbling
   * so that it only works inside the table
   *
   * @param {KeyboardEvent} event - keydown event
   */
  onKeyDownListener(e) {
    e.key === "Tab" && e.stopPropagation();
  }
  /**
   * Set the coordinates of the cell that the focus has moved to
   *
   * @param {FocusEvent} event - focusin event
   */
  focusInTableListener(e) {
    const t = e.target, o = this.getRowByCell(t);
    this.focusedCell = {
      row: Array.from(this.table.querySelectorAll(`.${L.row}`)).indexOf(o) + 1,
      column: Array.from(o.querySelectorAll(`.${L.cell}`)).indexOf(t) + 1
    };
  }
  /**
   * Unselect row/column
   * Close toolbox menu
   * Hide toolboxes
   *
   * @returns {void}
   */
  hideToolboxes() {
    this.hideRowToolbox(), this.hideColumnToolbox(), this.updateToolboxesPosition();
  }
  /**
   * Unselect row, close toolbox
   *
   * @returns {void}
   */
  hideRowToolbox() {
    this.unselectRow(), this.toolboxRow.hide();
  }
  /**
   * Unselect column, close toolbox
   *
   * @returns {void}
   */
  hideColumnToolbox() {
    this.unselectColumn(), this.toolboxColumn.hide();
  }
  /**
   * Set the cursor focus to the focused cell
   *
   * @returns {void}
   */
  focusCell() {
    this.focusedCellElem.focus();
  }
  /**
   * Get current focused element
   *
   * @returns {HTMLElement} - focused cell
   */
  get focusedCellElem() {
    const { row: e, column: t } = this.focusedCell;
    return this.getCell(e, t);
  }
  /**
   * Update toolboxes position
   *
   * @param {number} row - hovered row
   * @param {number} column - hovered column
   */
  updateToolboxesPosition(e = this.hoveredRow, t = this.hoveredColumn) {
    this.isColumnMenuShowing || t > 0 && t <= this.numberOfColumns && this.toolboxColumn.show(() => ({
      left: `calc((100% - var(--cell-size)) / (${this.numberOfColumns} * 2) * (1 + (${t} - 1) * 2))`
    })), this.isRowMenuShowing || e > 0 && e <= this.numberOfRows && this.toolboxRow.show(() => {
      const o = this.getRow(e), { fromTopBorder: i } = si(this.table, o), { height: r } = o.getBoundingClientRect();
      return {
        top: `${Math.ceil(i + r / 2)}px`
      };
    });
  }
  /**
   * Makes the first row headings
   *
   * @param {boolean} withHeadings - use headings row or not
   */
  setHeadingsSetting(e) {
    this.tunes.withHeadings = e, e ? (this.table.classList.add(L.withHeadings), this.addHeadingAttrToFirstRow()) : (this.table.classList.remove(L.withHeadings), this.removeHeadingAttrFromFirstRow());
  }
  /**
   * Adds an attribute for displaying the placeholder in the cell
   */
  addHeadingAttrToFirstRow() {
    for (let e = 1; e <= this.numberOfColumns; e++) {
      let t = this.getCell(1, e);
      t && t.setAttribute("heading", this.api.i18n.t("Heading"));
    }
  }
  /**
   * Removes an attribute for displaying the placeholder in the cell
   */
  removeHeadingAttrFromFirstRow() {
    for (let e = 1; e <= this.numberOfColumns; e++) {
      let t = this.getCell(1, e);
      t && t.removeAttribute("heading");
    }
  }
  /**
   * Add effect of a selected row
   *
   * @param {number} index
   */
  selectRow(e) {
    const t = this.getRow(e);
    t && (this.selectedRow = e, t.classList.add(L.rowSelected));
  }
  /**
   * Remove effect of a selected row
   */
  unselectRow() {
    if (this.selectedRow <= 0)
      return;
    const e = this.table.querySelector(`.${L.rowSelected}`);
    e && e.classList.remove(L.rowSelected), this.selectedRow = 0;
  }
  /**
   * Add effect of a selected column
   *
   * @param {number} index
   */
  selectColumn(e) {
    for (let t = 1; t <= this.numberOfRows; t++) {
      const o = this.getCell(t, e);
      o && o.classList.add(L.cellSelected);
    }
    this.selectedColumn = e;
  }
  /**
   * Remove effect of a selected column
   */
  unselectColumn() {
    if (this.selectedColumn <= 0)
      return;
    let e = this.table.querySelectorAll(`.${L.cellSelected}`);
    Array.from(e).forEach((t) => {
      t.classList.remove(L.cellSelected);
    }), this.selectedColumn = 0;
  }
  /**
   * Calculates the row and column that the cursor is currently hovering over
   * The search was optimized from O(n) to O (log n) via bin search to reduce the number of calculations
   *
   * @param {Event} event - mousemove event
   * @returns hovered cell coordinates as an integer row and column
   */
  getHoveredCell(e) {
    let t = this.hoveredRow, o = this.hoveredColumn;
    const { width: i, height: r, x: s, y: a } = Vu(this.table, e);
    return s >= 0 && (o = this.binSearch(
      this.numberOfColumns,
      (c) => this.getCell(1, c),
      ({ fromLeftBorder: c }) => s < c,
      ({ fromRightBorder: c }) => s > i - c
    )), a >= 0 && (t = this.binSearch(
      this.numberOfRows,
      (c) => this.getCell(c, 1),
      ({ fromTopBorder: c }) => a < c,
      ({ fromBottomBorder: c }) => a > r - c
    )), {
      row: t || this.hoveredRow,
      column: o || this.hoveredColumn
    };
  }
  /**
   * Looks for the index of the cell the mouse is hovering over.
   * Cells can be represented as ordered intervals with left and
   * right (upper and lower for rows) borders inside the table, if the mouse enters it, then this is our index
   *
   * @param {number} numberOfCells - upper bound of binary search
   * @param {function} getCell - function to take the currently viewed cell
   * @param {function} beforeTheLeftBorder - determines the cursor position, to the left of the cell or not
   * @param {function} afterTheRightBorder - determines the cursor position, to the right of the cell or not
   * @returns {number}
   */
  binSearch(e, t, o, i) {
    let r = 0, s = e + 1, a = 0, c;
    for (; r < s - 1 && a < 10; ) {
      c = Math.ceil((r + s) / 2);
      const l = t(c), u = si(this.table, l);
      if (o(u))
        s = c;
      else if (i(u))
        r = c;
      else
        break;
      a++;
    }
    return c;
  }
  /**
   * Collects data from cells into a two-dimensional array
   *
   * @returns {string[][]}
   */
  getData() {
    const e = [];
    for (let t = 1; t <= this.numberOfRows; t++) {
      const o = this.table.querySelector(`.${L.row}:nth-child(${t})`), i = Array.from(o.querySelectorAll(`.${L.cell}`));
      i.every((r) => !r.textContent.trim()) || e.push(i.map((r) => r.innerHTML));
    }
    return e;
  }
  /**
   * Remove listeners on the document
   */
  destroy() {
    document.removeEventListener("click", this.documentClicked);
  }
}
let sh = class {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to press Enter inside the CodeTool textarea
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {TableConstructor} init
   */
  constructor({ data: e, config: t, api: o, readOnly: i, block: r }) {
    this.api = o, this.readOnly = i, this.config = t, this.data = {
      withHeadings: this.getConfig("withHeadings", !1, e),
      stretched: this.getConfig("stretched", !1, e),
      content: e && e.content ? e.content : []
    }, this.table = null, this.block = r;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: nh,
      title: "Table"
    };
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.table = new rh(this.readOnly, this.api, this.data, this.config), this.container = X("div", this.api.styles.block), this.container.appendChild(this.table.getWrapper()), this.table.setHeadingsSetting(this.data.withHeadings), this.container;
  }
  /**
   * Returns plugin settings
   *
   * @returns {Array}
   */
  renderSettings() {
    return [
      {
        label: this.api.i18n.t("With headings"),
        icon: th,
        isActive: this.data.withHeadings,
        closeOnActivate: !0,
        toggle: !0,
        onActivate: () => {
          this.data.withHeadings = !0, this.table.setHeadingsSetting(this.data.withHeadings);
        }
      },
      {
        label: this.api.i18n.t("Without headings"),
        icon: oh,
        isActive: !this.data.withHeadings,
        closeOnActivate: !0,
        toggle: !0,
        onActivate: () => {
          this.data.withHeadings = !1, this.table.setHeadingsSetting(this.data.withHeadings);
        }
      },
      {
        label: this.data.stretched ? this.api.i18n.t("Collapse") : this.api.i18n.t("Stretch"),
        icon: this.data.stretched ? Yu : eh,
        closeOnActivate: !0,
        toggle: !0,
        onActivate: () => {
          this.data.stretched = !this.data.stretched, this.block.stretched = this.data.stretched;
        }
      }
    ];
  }
  /**
   * Extract table data from the view
   *
   * @returns {TableData} - saved data
   */
  save() {
    const e = this.table.getData();
    return {
      withHeadings: this.data.withHeadings,
      stretched: this.data.stretched,
      content: e
    };
  }
  /**
   * Plugin destroyer
   *
   * @returns {void}
   */
  destroy() {
    this.table.destroy();
  }
  /**
   * A helper to get config value.
   *
   * @param {string} configName - the key to get from the config.
   * @param {any} defaultValue - default value if config doesn't have passed key
   * @param {object} savedData - previously saved data. If passed, the key will be got from there, otherwise from the config
   * @returns {any} - config value.
   */
  getConfig(e, t = void 0, o = void 0) {
    const i = this.data || o;
    return i ? i[e] ? i[e] : t : this.config && this.config[e] ? this.config[e] : t;
  }
  /**
   * Table onPaste configuration
   *
   * @public
   */
  static get pasteConfig() {
    return { tags: ["TABLE", "TR", "TH", "TD"] };
  }
  /**
   * On paste callback that is fired from Editor
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = e.detail.data, o = t.querySelector(":scope > thead, tr:first-of-type th"), i = Array.from(t.querySelectorAll("tr")).map((r) => Array.from(r.querySelectorAll("th, td")).map((s) => s.innerHTML));
    this.data = {
      withHeadings: o !== null,
      content: i
    }, this.table.wrapper && this.table.wrapper.replaceWith(this.render());
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode('.cdx-checklist{gap:6px;display:flex;flex-direction:column}.cdx-checklist__item{display:flex;box-sizing:content-box;align-items:flex-start}.cdx-checklist__item-text{outline:none;flex-grow:1;line-height:1.57em}.cdx-checklist__item-checkbox{width:22px;height:22px;display:flex;align-items:center;margin-right:8px;margin-top:calc(.785em - 11px);cursor:pointer}.cdx-checklist__item-checkbox svg{opacity:0;height:20px;width:20px;position:absolute;left:-1px;top:-1px;max-height:20px}@media (hover: hover){.cdx-checklist__item-checkbox:not(.cdx-checklist__item-checkbox--no-hover):hover .cdx-checklist__item-checkbox-check svg{opacity:1}}.cdx-checklist__item-checkbox-check{cursor:pointer;display:inline-block;flex-shrink:0;position:relative;width:20px;height:20px;box-sizing:border-box;margin-left:0;border-radius:5px;border:1px solid #C9C9C9;background:#fff}.cdx-checklist__item-checkbox-check:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100%;background-color:#369fff;visibility:hidden;pointer-events:none;transform:scale(1);transition:transform .4s ease-out,opacity .4s}@media (hover: hover){.cdx-checklist__item--checked .cdx-checklist__item-checkbox:not(.cdx-checklist__item--checked .cdx-checklist__item-checkbox--no-hover):hover .cdx-checklist__item-checkbox-check{background:#0059AB;border-color:#0059ab}}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check{background:#369FFF;border-color:#369fff}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check svg{opacity:1}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check svg path{stroke:#fff}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check:before{opacity:0;visibility:visible;transform:scale(2.5)}')), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const ah = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>', lh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
function hi() {
  const n = document.activeElement, e = window.getSelection().getRangeAt(0), t = e.cloneRange();
  return t.selectNodeContents(n), t.setStart(e.endContainer, e.endOffset), t.extractContents();
}
function ch(n) {
  const e = document.createElement("div");
  return e.appendChild(n), e.innerHTML;
}
function Fe(n, e = null, t = {}) {
  const o = document.createElement(n);
  Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);
  for (const i in t)
    o[i] = t[i];
  return o;
}
function pi(n) {
  return n.innerHTML.replace("<br>", " ").trim();
}
function fi(n, e = !1, t = void 0) {
  const o = document.createRange(), i = window.getSelection();
  o.selectNodeContents(n), t !== void 0 && (o.setStart(n, t), o.setEnd(n, t)), o.collapse(e), i.removeAllRanges(), i.addRange(o);
}
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
Element.prototype.closest || (Element.prototype.closest = function(n) {
  let e = this;
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (e.matches(n))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null && e.nodeType === 1);
  return null;
});
class dh {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to use native Enter behaviour
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: lh,
      title: "Checklist"
    };
  }
  /**
   * Allow Checkbox Tool to be converted to/from other block
   *
   * @returns {{export: Function, import: Function}}
   */
  static get conversionConfig() {
    return {
      /**
       * To create exported string from the checkbox, concatenate items by dot-symbol.
       *
       * @param {ChecklistData} data - checklist data to create a string from that
       * @returns {string}
       */
      export: (e) => e.items.map(({ text: t }) => t).join(". "),
      /**
       * To create a checklist from other block's string, just put it at the first item
       *
       * @param {string} string - string to create list tool data from that
       * @returns {ChecklistData}
       */
      import: (e) => ({
        items: [
          {
            text: e,
            checked: !1
          }
        ]
      })
    };
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} options - block constructor options
   * @param {ChecklistData} options.data - previously saved data
   * @param {object} options.config - user config for Tool
   * @param {object} options.api - Editor.js API
   * @param {boolean} options.readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this._elements = {
      wrapper: null,
      items: []
    }, this.readOnly = i, this.api = o, this.data = e || {};
  }
  /**
   * Returns checklist tag with items
   *
   * @returns {Element}
   */
  render() {
    return this._elements.wrapper = Fe("div", [this.CSS.baseBlock, this.CSS.wrapper]), this.data.items || (this.data.items = [
      {
        text: "",
        checked: !1
      }
    ]), this.data.items.forEach((e) => {
      const t = this.createChecklistItem(e);
      this._elements.wrapper.appendChild(t);
    }), this.readOnly ? this._elements.wrapper : (this._elements.wrapper.addEventListener("keydown", (e) => {
      const [t, o] = [13, 8];
      switch (e.keyCode) {
        case t:
          this.enterPressed(e);
          break;
        case o:
          this.backspace(e);
          break;
      }
    }, !1), this._elements.wrapper.addEventListener("click", (e) => {
      this.toggleCheckbox(e);
    }), this._elements.wrapper);
  }
  /**
   * Return Checklist data
   *
   * @returns {ChecklistData}
   */
  save() {
    let e = this.items.map((t) => {
      const o = this.getItemInput(t);
      return {
        text: pi(o),
        checked: t.classList.contains(this.CSS.itemChecked)
      };
    });
    return e = e.filter((t) => t.text.trim().length !== 0), {
      items: e
    };
  }
  /**
   * Validate data: check if Checklist has items
   *
   * @param {ChecklistData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !!e.items.length;
  }
  /**
   * Toggle checklist item state
   *
   * @param {MouseEvent} event - click
   * @returns {void}
   */
  toggleCheckbox(e) {
    const t = e.target.closest(`.${this.CSS.item}`), o = t.querySelector(`.${this.CSS.checkboxContainer}`);
    o.contains(e.target) && (t.classList.toggle(this.CSS.itemChecked), o.classList.add(this.CSS.noHover), o.addEventListener("mouseleave", () => this.removeSpecialHoverBehavior(o), { once: !0 }));
  }
  /**
   * Create Checklist items
   *
   * @param {ChecklistItem} item - data.item
   * @returns {Element} checkListItem - new element of checklist
   */
  createChecklistItem(e = {}) {
    const t = Fe("div", this.CSS.item), o = Fe("span", this.CSS.checkbox), i = Fe("div", this.CSS.checkboxContainer), r = Fe("div", this.CSS.textField, {
      innerHTML: e.text ? e.text : "",
      contentEditable: !this.readOnly
    });
    return e.checked && t.classList.add(this.CSS.itemChecked), o.innerHTML = ah, i.appendChild(o), t.appendChild(i), t.appendChild(r), t;
  }
  /**
   * Append new elements to the list by pressing Enter
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  enterPressed(e) {
    e.preventDefault();
    const t = this.items, o = document.activeElement.closest(`.${this.CSS.item}`);
    if (t.indexOf(o) === t.length - 1 && pi(this.getItemInput(o)).length === 0) {
      const a = this.api.blocks.getCurrentBlockIndex();
      o.remove(), this.api.blocks.insert(), this.api.caret.setToBlock(a + 1);
      return;
    }
    const i = hi(), r = ch(i), s = this.createChecklistItem({
      text: r,
      checked: !1
    });
    this._elements.wrapper.insertBefore(s, o.nextSibling), fi(this.getItemInput(s), !0);
  }
  /**
   * Handle backspace
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  backspace(e) {
    const t = e.target.closest(`.${this.CSS.item}`), o = this.items.indexOf(t), i = this.items[o - 1];
    if (!i || window.getSelection().focusOffset !== 0)
      return;
    e.preventDefault();
    const r = hi(), s = this.getItemInput(i), a = s.childNodes.length;
    s.appendChild(r), fi(s, void 0, a), t.remove();
  }
  /**
   * Styles
   *
   * @private
   * @returns {object<string>}
   */
  get CSS() {
    return {
      baseBlock: this.api.styles.block,
      wrapper: "cdx-checklist",
      item: "cdx-checklist__item",
      itemChecked: "cdx-checklist__item--checked",
      noHover: "cdx-checklist__item-checkbox--no-hover",
      checkbox: "cdx-checklist__item-checkbox-check",
      textField: "cdx-checklist__item-text",
      checkboxContainer: "cdx-checklist__item-checkbox"
    };
  }
  /**
   * Return all items elements
   *
   * @returns {Element[]}
   */
  get items() {
    return Array.from(this._elements.wrapper.querySelectorAll(`.${this.CSS.item}`));
  }
  /**
   * Removes class responsible for special hover behavior on an item
   * 
   * @private
   * @param {Element} el - item wrapper
   * @returns {Element}
   */
  removeSpecialHoverBehavior(e) {
    e.classList.remove(this.CSS.noHover);
  }
  /**
   * Find and return item's content editable element
   *
   * @private
   * @param {Element} el - item wrapper
   * @returns {Element}
   */
  getItemInput(e) {
    return e.querySelector(`.${this.CSS.textField}`);
  }
}
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode('.embed-tool--loading .embed-tool__caption{display:none}.embed-tool--loading .embed-tool__preloader{display:block}.embed-tool--loading .embed-tool__content{display:none}.embed-tool__preloader{display:none;position:relative;height:200px;box-sizing:border-box;border-radius:5px;border:1px solid #e6e9eb}.embed-tool__preloader:before{content:"";position:absolute;z-index:3;left:50%;top:50%;width:30px;height:30px;margin-top:-25px;margin-left:-15px;border-radius:50%;border:2px solid #cdd1e0;border-top-color:#388ae5;box-sizing:border-box;animation:embed-preloader-spin 2s infinite linear}.embed-tool__url{position:absolute;bottom:20px;left:50%;transform:translate(-50%);max-width:250px;color:#7b7e89;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.embed-tool__content{width:100%}.embed-tool__caption{margin-top:7px}.embed-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}@keyframes embed-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const uh = {
  vimeo: {
    regex: /(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,
    embedUrl: "https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",
    html: '<iframe style="width:100%;" height="320" frameborder="0"></iframe>',
    height: 320,
    width: 580
  },
  youtube: {
    regex: /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
    embedUrl: "https://www.youtube.com/embed/<%= remote_id %>",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580,
    id: ([n, e]) => {
      if (!e && n)
        return n;
      const t = {
        start: "start",
        end: "end",
        t: "start",
        // eslint-disable-next-line camelcase
        time_continue: "start",
        list: "list"
      };
      let o = e.slice(1).split("&").map((i) => {
        const [r, s] = i.split("=");
        return !n && r === "v" ? (n = s, null) : !t[r] || s === "LL" || s.startsWith("RDMM") || s.startsWith("FL") ? null : `${t[r]}=${s}`;
      }).filter((i) => !!i);
      return n + "?" + o.join("&");
    }
  },
  coub: {
    regex: /https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,
    embedUrl: "https://coub.com/embed/<%= remote_id %>",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580
  },
  vine: {
    regex: /https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,
    embedUrl: "https://vine.co/v/<%= remote_id %>/embed/simple/",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580
  },
  imgur: {
    regex: /https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,
    embedUrl: "http://imgur.com/<%= remote_id %>/embed",
    html: '<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',
    height: 500,
    width: 540
  },
  gfycat: {
    regex: /https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,
    embedUrl: "https://gfycat.com/ifr/<%= remote_id %>",
    html: `<iframe frameborder='0' scrolling='no' style="width:100%;" height='436' allowfullscreen ></iframe>`,
    height: 436,
    width: 580
  },
  "twitch-channel": {
    regex: /https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,
    embedUrl: "https://player.twitch.tv/?channel=<%= remote_id %>",
    html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
    height: 366,
    width: 600
  },
  "twitch-video": {
    regex: /https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,
    embedUrl: "https://player.twitch.tv/?video=v<%= remote_id %>",
    html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
    height: 366,
    width: 600
  },
  "yandex-music-album": {
    regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,
    embedUrl: "https://music.yandex.ru/iframe/#album/<%= remote_id %>/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',
    height: 400,
    width: 540
  },
  "yandex-music-track": {
    regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,
    embedUrl: "https://music.yandex.ru/iframe/#track/<%= remote_id %>/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',
    height: 100,
    width: 540,
    id: (n) => n.join("/")
  },
  "yandex-music-playlist": {
    regex: /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
    embedUrl: "https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
    height: 400,
    width: 540,
    id: (n) => n.join("/")
  },
  codepen: {
    regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
    embedUrl: "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
    html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
    height: 300,
    width: 600,
    id: (n) => n.join("/embed/")
  },
  instagram: {
    //it support both reel and post
    regex: /^https:\/\/(?:www\.)?instagram\.com\/(?:reel|p)\/(.*)/,
    embedUrl: "https://www.instagram.com/p/<%= remote_id %>/embed",
    html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 505,
    width: 400,
    id: (n) => {
      var e;
      return (e = n?.[0]) == null ? void 0 : e.split("/")[0];
    }
  },
  twitter: {
    regex: /^https?:\/\/(www\.)?(?:twitter\.com|x\.com)\/.+\/status\/(\d+)/,
    embedUrl: "https://platform.twitter.com/embed/Tweet.html?id=<%= remote_id %>",
    html: '<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 300,
    width: 600,
    id: (n) => n[1]
  },
  pinterest: {
    regex: /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,
    embedUrl: "https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",
    html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",
    id: (n) => n[1]
  },
  facebook: {
    regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
    embedUrl: "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",
    html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",
    id: (n) => n.join("/")
  },
  aparat: {
    regex: /(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,
    embedUrl: "https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",
    html: '<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 300,
    width: 600
  },
  miro: {
    regex: /https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,
    embedUrl: "https://miro.com/app/live-embed/<%= remote_id %>",
    html: '<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>'
  },
  github: {
    regex: /https?:\/\/gist.github.com\/([^\/\?\&]*)\/([^\/\?\&]*)/,
    embedUrl: 'data:text/html;charset=utf-8,<head><base target="_blank" /></head><body><script src="https://gist.github.com/<%= remote_id %>" ><\/script></body>',
    html: '<iframe width="100%" height="350" frameborder="0" style="margin: 0 auto;"></iframe>',
    height: 300,
    width: 600,
    id: (n) => `${n.join("/")}.js`
  }
};
function io(n, e, t) {
  var o, i, r, s, a;
  e == null && (e = 100);
  function c() {
    var u = Date.now() - s;
    u < e && u >= 0 ? o = setTimeout(c, e - u) : (o = null, t || (a = n.apply(r, i), r = i = null));
  }
  var l = function() {
    r = this, i = arguments, s = Date.now();
    var u = t && !o;
    return o || (o = setTimeout(c, e)), u && (a = n.apply(r, i), r = i = null), a;
  };
  return l.clear = function() {
    o && (clearTimeout(o), o = null);
  }, l.flush = function() {
    o && (a = n.apply(r, i), r = i = null, clearTimeout(o), o = null);
  }, l;
}
io.debounce = io;
var hh = io;
class he {
  /**
   * @param {{data: EmbedData, config: EmbedConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read-only mode flag
   */
  constructor({ data: e, api: t, readOnly: o }) {
    this.api = t, this._data = {}, this.element = null, this.readOnly = o, this.data = e;
  }
  /**
   * @param {EmbedData} data - embed data
   * @param {RegExp} [data.regex] - pattern of source URLs
   * @param {string} [data.embedUrl] - URL scheme to embedded page. Use '<%= remote_id %>' to define a place to insert resource id
   * @param {string} [data.html] - iframe which contains embedded content
   * @param {number} [data.height] - iframe height
   * @param {number} [data.width] - iframe width
   * @param {string} [data.caption] - caption
   */
  set data(e) {
    var t;
    if (!(e instanceof Object))
      throw Error("Embed Tool data should be object");
    const { service: o, source: i, embed: r, width: s, height: a, caption: c = "" } = e;
    this._data = {
      service: o || this.data.service,
      source: i || this.data.source,
      embed: r || this.data.embed,
      width: s || this.data.width,
      height: a || this.data.height,
      caption: c || this.data.caption || ""
    };
    const l = this.element;
    l && ((t = l.parentNode) == null || t.replaceChild(this.render(), l));
  }
  /**
   * @returns {EmbedData}
   */
  get data() {
    if (this.element) {
      const e = this.element.querySelector(`.${this.api.styles.input}`);
      this._data.caption = e ? e.innerHTML : "";
    }
    return this._data;
  }
  /**
   * Get plugin styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      container: "embed-tool",
      containerLoading: "embed-tool--loading",
      preloader: "embed-tool__preloader",
      caption: "embed-tool__caption",
      url: "embed-tool__url",
      content: "embed-tool__content"
    };
  }
  /**
   * Render Embed tool content
   *
   * @returns {HTMLElement}
   */
  render() {
    if (!this.data.service) {
      const a = document.createElement("div");
      return this.element = a, a;
    }
    const { html: e } = he.services[this.data.service], t = document.createElement("div"), o = document.createElement("div"), i = document.createElement("template"), r = this.createPreloader();
    t.classList.add(this.CSS.baseClass, this.CSS.container, this.CSS.containerLoading), o.classList.add(this.CSS.input, this.CSS.caption), t.appendChild(r), o.contentEditable = (!this.readOnly).toString(), o.dataset.placeholder = this.api.i18n.t("Enter a caption"), o.innerHTML = this.data.caption || "", i.innerHTML = e, i.content.firstChild.setAttribute("src", this.data.embed), i.content.firstChild.classList.add(this.CSS.content);
    const s = this.embedIsReady(t);
    return i.content.firstChild && t.appendChild(i.content.firstChild), t.appendChild(o), s.then(() => {
      t.classList.remove(this.CSS.containerLoading);
    }), this.element = t, t;
  }
  /**
   * Creates preloader to append to container while data is loading
   *
   * @returns {HTMLElement}
   */
  createPreloader() {
    const e = document.createElement("preloader"), t = document.createElement("div");
    return t.textContent = this.data.source, e.classList.add(this.CSS.preloader), t.classList.add(this.CSS.url), e.appendChild(t), e;
  }
  /**
   * Save current content and return EmbedData object
   *
   * @returns {EmbedData}
   */
  save() {
    return this.data;
  }
  /**
   * Handle pasted url and return Service object
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(e) {
    var t;
    const { key: o, data: i } = e.detail, { regex: r, embedUrl: s, width: a, height: c, id: l = (g) => g.shift() || "" } = he.services[o], u = (t = r.exec(i)) == null ? void 0 : t.slice(1), d = u ? s.replace(/<%= remote_id %>/g, l(u)) : "";
    this.data = {
      service: o,
      source: i,
      embed: d,
      width: a,
      height: c
    };
  }
  /**
   * Analyze provided config and make object with services to use
   *
   * @param {EmbedConfig} config - configuration of embed block element
   */
  static prepare({ config: e = {} }) {
    const { services: t = {} } = e;
    let o = Object.entries(uh);
    const i = Object.entries(t).filter(([s, a]) => typeof a == "boolean" && a === !0).map(([s]) => s), r = Object.entries(t).filter(([s, a]) => typeof a == "object").filter(([s, a]) => he.checkServiceConfig(a)).map(([s, a]) => {
      const { regex: c, embedUrl: l, html: u, height: d, width: g, id: v } = a;
      return [s, {
        regex: c,
        embedUrl: l,
        html: u,
        height: d,
        width: g,
        id: v
      }];
    });
    i.length && (o = o.filter(([s]) => i.includes(s))), o = o.concat(r), he.services = o.reduce((s, [a, c]) => a in s ? (s[a] = Object.assign({}, s[a], c), s) : (s[a] = c, s), {}), he.patterns = o.reduce((s, [a, c]) => (c && typeof c != "boolean" && (s[a] = c.regex), s), {});
  }
  /**
   * Check if Service config is valid
   *
   * @param {Service} config - configuration of embed block element
   * @returns {boolean}
   */
  static checkServiceConfig(e) {
    const { regex: t, embedUrl: o, html: i, height: r, width: s, id: a } = e;
    let c = !!(t && t instanceof RegExp) && !!(o && typeof o == "string") && !!(i && typeof i == "string");
    return c = c && (a !== void 0 ? a instanceof Function : !0), c = c && (r !== void 0 ? Number.isFinite(r) : !0), c = c && (s !== void 0 ? Number.isFinite(s) : !0), c;
  }
  /**
   * Paste configuration to enable pasted URLs processing by Editor
   *
   * @returns {object} - object of patterns which contain regx for pasteConfig
   */
  static get pasteConfig() {
    return {
      patterns: he.patterns
    };
  }
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Checks that mutations in DOM have finished after appending iframe content
   *
   * @param {HTMLElement} targetNode - HTML-element mutations of which to listen
   * @returns {Promise<any>} - result that all mutations have finished
   */
  embedIsReady(e) {
    let t;
    return new Promise((o, i) => {
      t = new MutationObserver(hh.debounce(o, 450)), t.observe(e, {
        childList: !0,
        subtree: !0
      });
    }).then(() => {
      t.disconnect();
    });
  }
}
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(`.cdx-warning{position:relative}@media all and (min-width: 736px){.cdx-warning{padding-left:36px}}.cdx-warning [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-warning [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-warning [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-warning:before{content:"";background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='5' y='5' width='14' height='14' rx='4' stroke='black' stroke-width='2'/%3E%3Cline x1='12' y1='9' x2='12' y2='12' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M12 15.02V15.01' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");width:24px;height:24px;background-size:24px 24px;position:absolute;margin-top:8px;left:0}@media all and (max-width: 735px){.cdx-warning:before{display:none}}.cdx-warning__message{min-height:85px}.cdx-warning__title{margin-bottom:6px}`)), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const ph = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
class yt {
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Toolbox settings
   *
   * @public
   * @returns {ToolboxConfig} An object containing Tool's icon and title.
   */
  static get toolbox() {
    return {
      icon: ph,
      title: "Warning"
    };
  }
  /**
   * Allow to press Enter inside the Warning
   *
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Default placeholder for warning title
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_TITLE_PLACEHOLDER() {
    return "Title";
  }
  /**
   * Default placeholder for warning message
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_MESSAGE_PLACEHOLDER() {
    return "Message";
  }
  /**
   * Warning Tool`s styles
   *
   * @returns {WarningCSS} An object containing Tool`s CSS classnames.
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      wrapper: "cdx-warning",
      title: "cdx-warning__title",
      input: this.api.styles.input,
      message: "cdx-warning__message"
    };
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params — constructor params
   * @param {WarningData} params.data — previously saved data
   * @param {WarningConfig} params.config — user config for Tool
   * @param {API} params.api - Editor.js API
   * @param {boolean} params.readOnly - read-only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this.titlePlaceholder = t?.titlePlaceholder || yt.DEFAULT_TITLE_PLACEHOLDER, this.messagePlaceholder = t?.messagePlaceholder || yt.DEFAULT_MESSAGE_PLACEHOLDER, this.data = {
      title: e.title || "",
      message: e.message || ""
    };
  }
  /**
   * Create Warning Tool container with inputs
   *
   * @returns {Element} Html element of Warning Tool.
   */
  render() {
    const e = this._make("div", [this.CSS.baseClass, this.CSS.wrapper]), t = this._make("div", [this.CSS.input, this.CSS.title], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.title
    }), o = this._make("div", [this.CSS.input, this.CSS.message], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.message
    });
    return t.dataset.placeholder = this.titlePlaceholder, o.dataset.placeholder = this.messagePlaceholder, e.appendChild(t), e.appendChild(o), e;
  }
  /**
   * Extract Warning data from Warning Tool element
   *
   * @param {HTMLDivElement} warningElement - element to save
   * @returns {WarningData} Warning Tool`s data.
   */
  save(e) {
    const t = e.querySelector(`.${this.CSS.title}`), o = e.querySelector(`.${this.CSS.message}`);
    return Object.assign(this.data, {
      title: t?.innerHTML ?? "",
      message: o?.innerHTML ?? ""
    });
  }
  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {Array|string} classNames  - list or name of CSS classname(s)
   * @param  {object} attributes        - any attributes
   * @returns {Element} Html element of {tagName}.
   */
  _make(e, t = null, o = {}) {
    const i = document.createElement(e);
    Array.isArray(t) ? i.classList.add(...t) : t && i.classList.add(t);
    for (const r in o)
      i[r] = o[r];
    return i;
  }
  /**
   * Sanitizer config for Warning Tool saved data
   *
   */
  static get sanitize() {
    return {
      title: {},
      message: {}
    };
  }
}
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".cdx-marker{background:rgba(245,235,111,.29);padding:3px 0}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const fh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.3536 9.31802L12.7678 7.90381C13.5488 7.12276 14.8151 7.12276 15.5962 7.90381C16.3772 8.68486 16.3772 9.95119 15.5962 10.7322L14.182 12.1464M11.3536 9.31802L7.96729 12.7043C7.40889 13.2627 7.02827 13.9739 6.8734 14.7482L6.69798 15.6253C6.55804 16.325 7.17496 16.942 7.87468 16.802L8.75176 16.6266C9.52612 16.4717 10.2373 16.0911 10.7957 15.5327L14.182 12.1464M11.3536 9.31802L14.182 12.1464"/><line x1="15" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
let gh = class Ue {
  /**
   * Class name for term-tag
   *
   * @type {string}
   */
  static get CSS() {
    return "cdx-marker";
  }
  /**
   * @param {{api: object}}  - Editor.js API
   */
  constructor({ api: e }) {
    this.api = e, this.button = null, this.tag = "MARK", this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive
    };
  }
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @return {boolean}
   */
  static get isInline() {
    return !0;
  }
  /**
   * Create button element for Toolbar
   *
   * @return {HTMLElement}
   */
  render() {
    return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
  }
  /**
   * Wrap/Unwrap selected fragment
   *
   * @param {Range} range - selected fragment
   */
  surround(e) {
    if (!e)
      return;
    let t = this.api.selection.findParentTag(this.tag, Ue.CSS);
    t ? this.unwrap(t) : this.wrap(e);
  }
  /**
   * Wrap selection with term-tag
   *
   * @param {Range} range - selected fragment
   */
  wrap(e) {
    let t = document.createElement(this.tag);
    t.classList.add(Ue.CSS), t.appendChild(e.extractContents()), e.insertNode(t), this.api.selection.expandToTag(t);
  }
  /**
   * Unwrap term-tag
   *
   * @param {HTMLElement} termWrapper - term wrapper tag
   */
  unwrap(e) {
    this.api.selection.expandToTag(e);
    let t = window.getSelection(), o = t.getRangeAt(0), i = o.extractContents();
    e.parentNode.removeChild(e), o.insertNode(i), t.removeAllRanges(), t.addRange(o);
  }
  /**
   * Check and change Term's state for current selection
   */
  checkState() {
    const e = this.api.selection.findParentTag(this.tag, Ue.CSS);
    this.button.classList.toggle(this.iconClasses.active, !!e);
  }
  /**
   * Get Tool icon's SVG
   * @return {string}
   */
  get toolboxIcon() {
    return fh;
  }
  /**
   * Sanitizer rule
   * @return {{mark: {class: string}}}
   */
  static get sanitize() {
    return {
      mark: {
        class: Ue.CSS
      }
    };
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".inline-code{background:rgba(250,239,240,.78);color:#b44437;padding:3px 4px;border-radius:5px;margin:0 1px;font-family:inherit;font-size:.86em;font-weight:500;letter-spacing:.3px}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const mh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
let bh = class ze {
  constructor({ api: e }) {
    this.tag = "CODE", this.api = e, this.button = null, this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive
    };
  }
  /**
   * Class name for term-tag
   *
   * @type {string}
   */
  static get CSS() {
    return "inline-code";
  }
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @return {boolean}
   */
  static get isInline() {
    return !0;
  }
  /**
   * Create button element for Toolbar
   *
   * @return {HTMLElement}
   */
  render() {
    return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
  }
  /**
   * Wrap/Unwrap selected fragment
   *
   * @param {Range} range - selected fragment
   */
  surround(e) {
    var t;
    if (!e)
      return;
    let o = this.api.selection.findParentTag(this.tag, ze.CSS);
    o ? this.unwrap(o) : (t = e.commonAncestorContainer.parentElement) != null && t.querySelector(this.tag) || this.wrap(e);
  }
  /**
  * Wrap selection with term-tag
  *
  * @param {Range} range - selected fragment
  */
  wrap(e) {
    let t = document.createElement(this.tag);
    t.classList.add(ze.CSS), t.appendChild(e.extractContents()), e.insertNode(t), this.api.selection.expandToTag(t);
  }
  /**
   * Unwrap term-tag
   *
   * @param {HTMLElement} termWrapper - term wrapper tag
   */
  unwrap(e) {
    var t;
    this.api.selection.expandToTag(e);
    const o = window.getSelection();
    if (!o)
      return;
    const i = o.getRangeAt(0), r = i.extractContents();
    (t = e.parentNode) == null || t.removeChild(e), i.insertNode(r), o.removeAllRanges(), o.addRange(i);
  }
  /**
   * Check and change Term's state for current selection
   * 
   * @return {boolean}
   */
  checkState() {
    const e = this.api.selection.findParentTag(this.tag, ze.CSS);
    return this.button && this.button.classList.toggle(this.iconClasses.active, !!e), !!e;
  }
  /**
   * Get Tool icon's SVG
   * @return {string}
   */
  get toolboxIcon() {
    return mh;
  }
  /**
   * Sanitizer rule
   * @return {SanitizerConfig}
   */
  static get sanitize() {
    return {
      code: {
        class: ze.CSS
      }
    };
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".cdx-underline{text-decoration:underline}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const vh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7.5V11.5C9 12.2956 9.31607 13.0587 9.87868 13.6213C10.4413 14.1839 11.2044 14.5 12 14.5C12.7956 14.5 13.5587 14.1839 14.1213 13.6213C14.6839 13.0587 15 12.2956 15 11.5V7.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.71429 18H16.2857"/></svg>', Qr = class qe {
  /**
   * @param options InlineToolConstructorOptions
   */
  constructor(e) {
    this.tag = "U", this.api = e.api, this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive
    };
  }
  /**
   * Class name for term-tag
   *
   * @type {string}
   */
  static get CSS() {
    return "cdx-underline";
  }
  /**
   * Create button element for Toolbar
   *
   * @returns {HTMLElement}
   */
  render() {
    return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
  }
  /**
   * Wrap/Unwrap selected fragment
   *
   * @param {Range} range - selected fragment
   */
  surround(e) {
    if (!e)
      return;
    const t = this.api.selection.findParentTag(this.tag, qe.CSS);
    t ? this.unwrap(t) : this.wrap(e);
  }
  /**
   * Wrap selection with term-tag
   *
   * @param {Range} range - selected fragment
   */
  wrap(e) {
    const t = document.createElement(this.tag);
    t.classList.add(qe.CSS), t.appendChild(e.extractContents()), e.insertNode(t), this.api.selection.expandToTag(t);
  }
  /**
   * Unwrap term-tag
   *
   * @param {HTMLElement} termWrapper - term wrapper tag
   */
  unwrap(e) {
    var t;
    this.api.selection.expandToTag(e);
    const o = window.getSelection();
    if (!o)
      return;
    const i = o.getRangeAt(0);
    if (!i)
      return;
    const r = i.extractContents();
    r && ((t = e.parentNode) == null || t.removeChild(e), i.insertNode(r), o.removeAllRanges(), o.addRange(i));
  }
  /**
   * Check and change Term's state for current selection
   */
  checkState() {
    var e;
    const t = this.api.selection.findParentTag(this.tag, qe.CSS);
    return (e = this.button) == null || e.classList.toggle(this.iconClasses.active, !!t), !!t;
  }
  /**
   * Get Tool icon's SVG
   *
   * @returns {string}
   */
  get toolboxIcon() {
    return vh;
  }
  /**
   * Sanitizer rule
   *
   * @returns {{u: {class: string}}}
   */
  static get sanitize() {
    return {
      u: {
        class: qe.CSS
      }
    };
  }
};
Qr.isInline = !0;
let yh = Qr;
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".ce-rawtool__textarea{min-height:200px;resize:vertical;border-radius:8px;border:0;background-color:#1e2128;font-family:Menlo,Monaco,Consolas,Courier New,monospace;font-size:12px;line-height:1.6;letter-spacing:-.2px;color:#a1a7b6;overscroll-behavior:contain}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const wh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.6954 5C17.912 5 18.8468 6.07716 18.6755 7.28165L17.426 16.0659C17.3183 16.8229 16.7885 17.4522 16.061 17.6873L12.6151 18.8012C12.2152 18.9304 11.7848 18.9304 11.3849 18.8012L7.93898 17.6873C7.21148 17.4522 6.6817 16.8229 6.57403 16.0659L5.32454 7.28165C5.15322 6.07716 6.088 5 7.30461 5H16.6954Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8.4H9L9.42857 11.7939H14.5714L14.3571 13.2788L14.1429 14.7636L12 15.4L9.85714 14.7636L9.77143 14.3394"/></svg>';
/**
 * Raw HTML Tool for CodeX Editor
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
class Hn {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Should this tool be displayed at the Editor's Toolbox
   *
   * @returns {boolean}
   * @public
   */
  static get displayInToolbox() {
    return !0;
  }
  /**
   * Allow to press Enter inside the RawTool textarea
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: wh,
      title: "Raw HTML"
    };
  }
  /**
   * @typedef {object} RawData — plugin saved data
   * @param {string} html - previously saved HTML code
   * @property
   */
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {RawData} data — previously saved HTML data
   * @param {object} config - user config for Tool
   * @param {object} api - CodeX Editor API
   * @param {boolean} readOnly - read-only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this.placeholder = o.i18n.t(t.placeholder || Hn.DEFAULT_PLACEHOLDER), this.CSS = {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      wrapper: "ce-rawtool",
      textarea: "ce-rawtool__textarea"
    }, this.data = {
      html: e.html || ""
    }, this.textarea = null, this.resizeDebounce = null;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement} this.element - RawTool's wrapper
   * @public
   */
  render() {
    const e = document.createElement("div"), t = 100;
    return this.textarea = document.createElement("textarea"), e.classList.add(this.CSS.baseClass, this.CSS.wrapper), this.textarea.classList.add(this.CSS.textarea, this.CSS.input), this.textarea.textContent = this.data.html, this.textarea.placeholder = this.placeholder, this.readOnly ? this.textarea.disabled = !0 : this.textarea.addEventListener("input", () => {
      this.onInput();
    }), e.appendChild(this.textarea), setTimeout(() => {
      this.resize();
    }, t), e;
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} rawToolsWrapper - RawTool's wrapper, containing textarea with raw HTML code
   * @returns {RawData} - raw HTML code
   * @public
   */
  save(e) {
    return {
      html: e.querySelector("textarea").value
    };
  }
  /**
   * Default placeholder for RawTool's textarea
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_PLACEHOLDER() {
    return "Enter HTML code";
  }
  /**
   * Automatic sanitize config
   */
  static get sanitize() {
    return {
      html: !0
      // Allow HTML tags
    };
  }
  /**
   * Textarea change event
   *
   * @returns {void}
   */
  onInput() {
    this.resizeDebounce && clearTimeout(this.resizeDebounce), this.resizeDebounce = setTimeout(() => {
      this.resize();
    }, 200);
  }
  /**
   * Resize textarea to fit whole height
   *
   * @returns {void}
   */
  resize() {
    this.textarea.style.height = "auto", this.textarea.style.height = this.textarea.scrollHeight + "px";
  }
}
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(`.cdx-attaches{--color-line: #EFF0F1;--color-bg: #fff;--color-bg-secondary: #F8F8F8;--color-bg-secondary--hover: #f2f2f2;--color-text-secondary: #707684}.cdx-attaches--with-file{display:flex;align-items:center;padding:10px 12px;border:1px solid var(--color-line);border-radius:7px;background:var(--color-bg)}.cdx-attaches--with-file .cdx-attaches__file-info{display:grid;grid-gap:4px;max-width:calc(100% - 80px);margin:auto 0;flex-grow:2}.cdx-attaches--with-file .cdx-attaches__download-button{display:flex;align-items:center;background:var(--color-bg-secondary);padding:6px;border-radius:6px;margin:auto 0 auto auto;color:inherit}.cdx-attaches--with-file .cdx-attaches__download-button:hover{background:var(--color-bg-secondary--hover)}.cdx-attaches--with-file .cdx-attaches__download-button svg{width:20px;height:20px;fill:none}.cdx-attaches--with-file .cdx-attaches__file-icon{position:relative}.cdx-attaches--with-file .cdx-attaches__file-icon-background{background-color:#333;width:27px;height:30px;margin-right:12px;border-radius:8px;display:flex;align-items:center;justify-content:center}@supports (-webkit-mask-box-image: url()){.cdx-attaches--with-file .cdx-attaches__file-icon-background{border-radius:0;-webkit-mask-box-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10.3872C0 1.83334 1.83334 0 10.3872 0H13.6128C22.1667 0 24 1.83334 24 10.3872V13.6128C24 22.1667 22.1667 24 13.6128 24H10.3872C1.83334 24 0 22.1667 0 13.6128V10.3872Z' fill='black'/%3E%3C/svg%3E%0A") 48% 41% 37.9% 53.3%}}.cdx-attaches--with-file .cdx-attaches__file-icon-label{position:absolute;left:3px;top:11px;background:inherit;text-transform:uppercase;line-height:1em;color:#fff;padding:1px 2px;border-radius:3px;font-size:10px;font-weight:700;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;letter-spacing:.02em}.cdx-attaches--with-file .cdx-attaches__file-icon svg{width:20px;height:20px}.cdx-attaches--with-file .cdx-attaches__file-icon path{stroke:#fff}.cdx-attaches--with-file .cdx-attaches__size{color:var(--color-text-secondary);font-size:12px;line-height:1em}.cdx-attaches--with-file .cdx-attaches__size:after{content:attr(data-size);margin-left:.2em}.cdx-attaches--with-file .cdx-attaches__title{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;outline:none;max-width:90%;font-size:14px;font-weight:500;line-height:1em}.cdx-attaches--with-file .cdx-attaches__title:empty:before{content:attr(data-placeholder);color:#7b7e89}.cdx-attaches--loading .cdx-attaches__title,.cdx-attaches--loading .cdx-attaches__file-icon,.cdx-attaches--loading .cdx-attaches__size,.cdx-attaches--loading .cdx-attaches__download-button,.cdx-attaches--loading .cdx-attaches__button{opacity:0;font-size:0}.cdx-attaches__button{display:flex;align-items:center;justify-content:center;color:#000;border-radius:7px;font-weight:500}.cdx-attaches__button svg{margin-top:0}`)), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
function kh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var es = { exports: {} };
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return (function(t) {
      var o = {};
      function i(r) {
        if (o[r]) return o[r].exports;
        var s = o[r] = { i: r, l: !1, exports: {} };
        return t[r].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
      }
      return i.m = t, i.c = o, i.d = function(r, s, a) {
        i.o(r, s) || Object.defineProperty(r, s, { enumerable: !0, get: a });
      }, i.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, i.t = function(r, s) {
        if (1 & s && (r = i(r)), 8 & s || 4 & s && typeof r == "object" && r && r.__esModule) return r;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: r }), 2 & s && typeof r != "string") for (var c in r) i.d(a, c, (function(l) {
          return r[l];
        }).bind(null, c));
        return a;
      }, i.n = function(r) {
        var s = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return i.d(s, "a", s), s;
      }, i.o = function(r, s) {
        return Object.prototype.hasOwnProperty.call(r, s);
      }, i.p = "", i(i.s = 3);
    })([function(t, o) {
      var i;
      i = /* @__PURE__ */ (function() {
        return this;
      })();
      try {
        i = i || new Function("return this")();
      } catch {
        typeof window == "object" && (i = window);
      }
      t.exports = i;
    }, function(t, o, i) {
      (function(r) {
        var s = i(2), a = setTimeout;
        function c() {
        }
        function l(p) {
          if (!(this instanceof l)) throw new TypeError("Promises must be constructed via new");
          if (typeof p != "function") throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], h(p, this);
        }
        function u(p, m) {
          for (; p._state === 3; ) p = p._value;
          p._state !== 0 ? (p._handled = !0, l._immediateFn(function() {
            var b = p._state === 1 ? m.onFulfilled : m.onRejected;
            if (b !== null) {
              var w;
              try {
                w = b(p._value);
              } catch (k) {
                return void g(m.promise, k);
              }
              d(m.promise, w);
            } else (p._state === 1 ? d : g)(m.promise, p._value);
          })) : p._deferreds.push(m);
        }
        function d(p, m) {
          try {
            if (m === p) throw new TypeError("A promise cannot be resolved with itself.");
            if (m && (typeof m == "object" || typeof m == "function")) {
              var b = m.then;
              if (m instanceof l) return p._state = 3, p._value = m, void v(p);
              if (typeof b == "function") return void h((w = b, k = m, function() {
                w.apply(k, arguments);
              }), p);
            }
            p._state = 1, p._value = m, v(p);
          } catch (y) {
            g(p, y);
          }
          var w, k;
        }
        function g(p, m) {
          p._state = 2, p._value = m, v(p);
        }
        function v(p) {
          p._state === 2 && p._deferreds.length === 0 && l._immediateFn(function() {
            p._handled || l._unhandledRejectionFn(p._value);
          });
          for (var m = 0, b = p._deferreds.length; m < b; m++) u(p, p._deferreds[m]);
          p._deferreds = null;
        }
        function f(p, m, b) {
          this.onFulfilled = typeof p == "function" ? p : null, this.onRejected = typeof m == "function" ? m : null, this.promise = b;
        }
        function h(p, m) {
          var b = !1;
          try {
            p(function(w) {
              b || (b = !0, d(m, w));
            }, function(w) {
              b || (b = !0, g(m, w));
            });
          } catch (w) {
            if (b) return;
            b = !0, g(m, w);
          }
        }
        l.prototype.catch = function(p) {
          return this.then(null, p);
        }, l.prototype.then = function(p, m) {
          var b = new this.constructor(c);
          return u(this, new f(p, m, b)), b;
        }, l.prototype.finally = s.a, l.all = function(p) {
          return new l(function(m, b) {
            if (!p || p.length === void 0) throw new TypeError("Promise.all accepts an array");
            var w = Array.prototype.slice.call(p);
            if (w.length === 0) return m([]);
            var k = w.length;
            function y(O, E) {
              try {
                if (E && (typeof E == "object" || typeof E == "function")) {
                  var C = E.then;
                  if (typeof C == "function") return void C.call(E, function(T) {
                    y(O, T);
                  }, b);
                }
                w[O] = E, --k == 0 && m(w);
              } catch (T) {
                b(T);
              }
            }
            for (var S = 0; S < w.length; S++) y(S, w[S]);
          });
        }, l.resolve = function(p) {
          return p && typeof p == "object" && p.constructor === l ? p : new l(function(m) {
            m(p);
          });
        }, l.reject = function(p) {
          return new l(function(m, b) {
            b(p);
          });
        }, l.race = function(p) {
          return new l(function(m, b) {
            for (var w = 0, k = p.length; w < k; w++) p[w].then(m, b);
          });
        }, l._immediateFn = typeof r == "function" && function(p) {
          r(p);
        } || function(p) {
          a(p, 0);
        }, l._unhandledRejectionFn = function(p) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", p);
        }, o.a = l;
      }).call(this, i(5).setImmediate);
    }, function(t, o, i) {
      o.a = function(r) {
        var s = this.constructor;
        return this.then(function(a) {
          return s.resolve(r()).then(function() {
            return a;
          });
        }, function(a) {
          return s.resolve(r()).then(function() {
            return s.reject(a);
          });
        });
      };
    }, function(t, o, i) {
      function r(h) {
        return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
          return typeof p;
        } : function(p) {
          return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
        })(h);
      }
      i(4);
      var s, a, c, l, u, d, g, v = i(8), f = (a = function(h) {
        return new Promise(function(p, m) {
          h = l(h), (h = u(h)).beforeSend && h.beforeSend();
          var b = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          b.open(h.method, h.url), b.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(h.headers).forEach(function(k) {
            var y = h.headers[k];
            b.setRequestHeader(k, y);
          });
          var w = h.ratio;
          b.upload.addEventListener("progress", function(k) {
            var y = Math.round(k.loaded / k.total * 100), S = Math.ceil(y * w / 100);
            h.progress(Math.min(S, 100));
          }, !1), b.addEventListener("progress", function(k) {
            var y = Math.round(k.loaded / k.total * 100), S = Math.ceil(y * (100 - w) / 100) + w;
            h.progress(Math.min(S, 100));
          }, !1), b.onreadystatechange = function() {
            if (b.readyState === 4) {
              var k = b.response;
              try {
                k = JSON.parse(k);
              } catch {
              }
              var y = v.parseHeaders(b.getAllResponseHeaders()), S = { body: k, code: b.status, headers: y };
              g(b.status) ? p(S) : m(S);
            }
          }, b.send(h.data);
        });
      }, c = function(h) {
        return h.method = "POST", a(h);
      }, l = function() {
        var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (h.url && typeof h.url != "string") throw new Error("Url must be a string");
        if (h.url = h.url || "", h.method && typeof h.method != "string") throw new Error("`method` must be a string or null");
        if (h.method = h.method ? h.method.toUpperCase() : "GET", h.headers && r(h.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (h.headers = h.headers || {}, h.type && (typeof h.type != "string" || !Object.values(s).includes(h.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (h.progress && typeof h.progress != "function") throw new Error("`progress` must be a function or null");
        if (h.progress = h.progress || function(p) {
        }, h.beforeSend = h.beforeSend || function(p) {
        }, h.ratio && typeof h.ratio != "number") throw new Error("`ratio` must be a number");
        if (h.ratio < 0 || h.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (h.ratio = h.ratio || 90, h.accept && typeof h.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (h.accept = h.accept || "*/*", h.multiple && typeof h.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (h.multiple = h.multiple || !1, h.fieldName && typeof h.fieldName != "string") throw new Error("`fieldName` must be a string");
        return h.fieldName = h.fieldName || "files", h;
      }, u = function(h) {
        switch (h.method) {
          case "GET":
            var p = d(h.data, s.URLENCODED);
            delete h.data, h.url = /\?/.test(h.url) ? h.url + "&" + p : h.url + "?" + p;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var m = (function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || s.JSON;
            })(h);
            (v.isFormData(h.data) || v.isFormElement(h.data)) && (m = s.FORM), h.data = d(h.data, m), m !== f.contentType.FORM && (h.headers["content-type"] = m);
        }
        return h;
      }, d = function() {
        var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case s.URLENCODED:
            return v.urlEncode(h);
          case s.JSON:
            return v.jsonEncode(h);
          case s.FORM:
            return v.formEncode(h);
          default:
            return h;
        }
      }, g = function(h) {
        return h >= 200 && h < 300;
      }, { contentType: s = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: a, get: function(h) {
        return h.method = "GET", a(h);
      }, post: c, transport: function(h) {
        return h = l(h), v.selectFiles(h).then(function(p) {
          for (var m = new FormData(), b = 0; b < p.length; b++) m.append(h.fieldName, p[b], p[b].name);
          v.isObject(h.data) && Object.keys(h.data).forEach(function(k) {
            var y = h.data[k];
            m.append(k, y);
          });
          var w = h.beforeSend;
          return h.beforeSend = function() {
            return w(p);
          }, h.data = m, c(h);
        });
      }, selectFiles: function(h) {
        return delete (h = l(h)).beforeSend, v.selectFiles(h);
      } });
      t.exports = f;
    }, function(t, o, i) {
      i.r(o);
      var r = i(1);
      window.Promise = window.Promise || r.a;
    }, function(t, o, i) {
      (function(r) {
        var s = r !== void 0 && r || typeof self < "u" && self || window, a = Function.prototype.apply;
        function c(l, u) {
          this._id = l, this._clearFn = u;
        }
        o.setTimeout = function() {
          return new c(a.call(setTimeout, s, arguments), clearTimeout);
        }, o.setInterval = function() {
          return new c(a.call(setInterval, s, arguments), clearInterval);
        }, o.clearTimeout = o.clearInterval = function(l) {
          l && l.close();
        }, c.prototype.unref = c.prototype.ref = function() {
        }, c.prototype.close = function() {
          this._clearFn.call(s, this._id);
        }, o.enroll = function(l, u) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = u;
        }, o.unenroll = function(l) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
        }, o._unrefActive = o.active = function(l) {
          clearTimeout(l._idleTimeoutId);
          var u = l._idleTimeout;
          u >= 0 && (l._idleTimeoutId = setTimeout(function() {
            l._onTimeout && l._onTimeout();
          }, u));
        }, i(6), o.setImmediate = typeof self < "u" && self.setImmediate || r !== void 0 && r.setImmediate || this && this.setImmediate, o.clearImmediate = typeof self < "u" && self.clearImmediate || r !== void 0 && r.clearImmediate || this && this.clearImmediate;
      }).call(this, i(0));
    }, function(t, o, i) {
      (function(r, s) {
        (function(a, c) {
          if (!a.setImmediate) {
            var l, u, d, g, v, f = 1, h = {}, p = !1, m = a.document, b = Object.getPrototypeOf && Object.getPrototypeOf(a);
            b = b && b.setTimeout ? b : a, {}.toString.call(a.process) === "[object process]" ? l = function(y) {
              s.nextTick(function() {
                k(y);
              });
            } : (function() {
              if (a.postMessage && !a.importScripts) {
                var y = !0, S = a.onmessage;
                return a.onmessage = function() {
                  y = !1;
                }, a.postMessage("", "*"), a.onmessage = S, y;
              }
            })() ? (g = "setImmediate$" + Math.random() + "$", v = function(y) {
              y.source === a && typeof y.data == "string" && y.data.indexOf(g) === 0 && k(+y.data.slice(g.length));
            }, a.addEventListener ? a.addEventListener("message", v, !1) : a.attachEvent("onmessage", v), l = function(y) {
              a.postMessage(g + y, "*");
            }) : a.MessageChannel ? ((d = new MessageChannel()).port1.onmessage = function(y) {
              k(y.data);
            }, l = function(y) {
              d.port2.postMessage(y);
            }) : m && "onreadystatechange" in m.createElement("script") ? (u = m.documentElement, l = function(y) {
              var S = m.createElement("script");
              S.onreadystatechange = function() {
                k(y), S.onreadystatechange = null, u.removeChild(S), S = null;
              }, u.appendChild(S);
            }) : l = function(y) {
              setTimeout(k, 0, y);
            }, b.setImmediate = function(y) {
              typeof y != "function" && (y = new Function("" + y));
              for (var S = new Array(arguments.length - 1), O = 0; O < S.length; O++) S[O] = arguments[O + 1];
              var E = { callback: y, args: S };
              return h[f] = E, l(f), f++;
            }, b.clearImmediate = w;
          }
          function w(y) {
            delete h[y];
          }
          function k(y) {
            if (p) setTimeout(k, 0, y);
            else {
              var S = h[y];
              if (S) {
                p = !0;
                try {
                  (function(O) {
                    var E = O.callback, C = O.args;
                    switch (C.length) {
                      case 0:
                        E();
                        break;
                      case 1:
                        E(C[0]);
                        break;
                      case 2:
                        E(C[0], C[1]);
                        break;
                      case 3:
                        E(C[0], C[1], C[2]);
                        break;
                      default:
                        E.apply(c, C);
                    }
                  })(S);
                } finally {
                  w(y), p = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, i(0), i(7));
    }, function(t, o) {
      var i, r, s = t.exports = {};
      function a() {
        throw new Error("setTimeout has not been defined");
      }
      function c() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(b) {
        if (i === setTimeout) return setTimeout(b, 0);
        if ((i === a || !i) && setTimeout) return i = setTimeout, setTimeout(b, 0);
        try {
          return i(b, 0);
        } catch {
          try {
            return i.call(null, b, 0);
          } catch {
            return i.call(this, b, 0);
          }
        }
      }
      (function() {
        try {
          i = typeof setTimeout == "function" ? setTimeout : a;
        } catch {
          i = a;
        }
        try {
          r = typeof clearTimeout == "function" ? clearTimeout : c;
        } catch {
          r = c;
        }
      })();
      var u, d = [], g = !1, v = -1;
      function f() {
        g && u && (g = !1, u.length ? d = u.concat(d) : v = -1, d.length && h());
      }
      function h() {
        if (!g) {
          var b = l(f);
          g = !0;
          for (var w = d.length; w; ) {
            for (u = d, d = []; ++v < w; ) u && u[v].run();
            v = -1, w = d.length;
          }
          u = null, g = !1, (function(k) {
            if (r === clearTimeout) return clearTimeout(k);
            if ((r === c || !r) && clearTimeout) return r = clearTimeout, clearTimeout(k);
            try {
              r(k);
            } catch {
              try {
                return r.call(null, k);
              } catch {
                return r.call(this, k);
              }
            }
          })(b);
        }
      }
      function p(b, w) {
        this.fun = b, this.array = w;
      }
      function m() {
      }
      s.nextTick = function(b) {
        var w = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var k = 1; k < arguments.length; k++) w[k - 1] = arguments[k];
        d.push(new p(b, w)), d.length !== 1 || g || l(h);
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = m, s.addListener = m, s.once = m, s.off = m, s.removeListener = m, s.removeAllListeners = m, s.emit = m, s.prependListener = m, s.prependOnceListener = m, s.listeners = function(b) {
        return [];
      }, s.binding = function(b) {
        throw new Error("process.binding is not supported");
      }, s.cwd = function() {
        return "/";
      }, s.chdir = function(b) {
        throw new Error("process.chdir is not supported");
      }, s.umask = function() {
        return 0;
      };
    }, function(t, o, i) {
      function r(a, c) {
        for (var l = 0; l < c.length; l++) {
          var u = c[l];
          u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(a, u.key, u);
        }
      }
      var s = i(9);
      t.exports = (function() {
        function a() {
          (function(d, g) {
            if (!(d instanceof g)) throw new TypeError("Cannot call a class as a function");
          })(this, a);
        }
        var c, l, u;
        return c = a, u = [{ key: "urlEncode", value: function(d) {
          return s(d);
        } }, { key: "jsonEncode", value: function(d) {
          return JSON.stringify(d);
        } }, { key: "formEncode", value: function(d) {
          if (this.isFormData(d)) return d;
          if (this.isFormElement(d)) return new FormData(d);
          if (this.isObject(d)) {
            var g = new FormData();
            return Object.keys(d).forEach(function(v) {
              var f = d[v];
              g.append(v, f);
            }), g;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(d) {
          return Object.prototype.toString.call(d) === "[object Object]";
        } }, { key: "isFormData", value: function(d) {
          return d instanceof FormData;
        } }, { key: "isFormElement", value: function(d) {
          return d instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(g, v) {
            var f = document.createElement("INPUT");
            f.type = "file", d.multiple && f.setAttribute("multiple", "multiple"), d.accept && f.setAttribute("accept", d.accept), f.style.display = "none", document.body.appendChild(f), f.addEventListener("change", function(h) {
              var p = h.target.files;
              g(p), document.body.removeChild(f);
            }, !1), f.click();
          });
        } }, { key: "parseHeaders", value: function(d) {
          var g = d.trim().split(/[\r\n]+/), v = {};
          return g.forEach(function(f) {
            var h = f.split(": "), p = h.shift(), m = h.join(": ");
            p && (v[p] = m);
          }), v;
        } }], (l = null) && r(c.prototype, l), u && r(c, u), a;
      })();
    }, function(t, o) {
      var i = function(s) {
        return encodeURIComponent(s).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, r = function(s, a, c, l) {
        return a = a || null, c = c || "&", l = l || null, s ? (function(u) {
          for (var d = new Array(), g = 0; g < u.length; g++) u[g] && d.push(u[g]);
          return d;
        })(Object.keys(s).map(function(u) {
          var d, g, v = u;
          if (l && (v = l + "[" + v + "]"), typeof s[u] == "object" && s[u] !== null) d = r(s[u], null, c, v);
          else {
            a && (g = v, v = !isNaN(parseFloat(g)) && isFinite(g) ? a + Number(v) : v);
            var f = s[u];
            f = (f = (f = (f = f === !0 ? "1" : f) === !1 ? "0" : f) === 0 ? "0" : f) || "", d = i(v) + "=" + i(f);
          }
          return d;
        })).join(c).replace(/[!'()*]/g, "") : "";
      };
      t.exports = r;
    }]);
  });
})(es);
var xh = es.exports;
const gi = /* @__PURE__ */ kh(xh);
class Ch {
  /**
   * @param {object} options - constructor params
   * @param {AttachesToolConfig} options.config - user defined configuration
   * @param {Function} options.onUpload - callback for successful file upload
   * @param {Function} options.onError - callback for uploading errors
   */
  constructor({ config: e, onUpload: t, onError: o }) {
    this.config = e, this.onUpload = t, this.onError = o;
  }
  /**
   * Handle clicks on the upload file button
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: e }) {
    let t;
    this.config.uploader && typeof this.config.uploader.uploadByFile == "function" ? t = gi.selectFiles({ accept: this.config.types }).then((o) => {
      e();
      const i = this.config.uploader.uploadByFile(o[0]);
      return Eh(i) || console.warn("Custom uploader method uploadByFile should return a Promise"), i;
    }) : t = gi.transport({
      url: this.config.endpoint,
      accept: this.config.types,
      beforeSend: () => e(),
      fieldName: this.config.field,
      headers: this.config.additionalRequestHeaders || {}
    }).then((o) => o.body), t.then((o) => {
      this.onUpload(o);
    }).catch((o) => {
      const i = o.body, r = i && i.message ? i.message : this.config.errorMessage;
      this.onError(r);
    });
  }
}
function Eh(n) {
  return n && typeof n.then == "function";
}
function ee(n, e = null, t = {}) {
  const o = document.createElement(n);
  Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);
  for (const i in t)
    o[i] = t[i];
  return o;
}
function Sh(n) {
  const e = document.createRange(), t = window.getSelection();
  e.selectNodeContents(n), e.collapse(!1), t.removeAllRanges(), t.addRange(e);
}
function zt(n) {
  return Object.keys(n).length === 0;
}
function Th(n) {
  return n === void 0 ? "" : n.split(".").pop();
}
const _h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', qt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.3236 8.43554L9.49533 12.1908C9.13119 12.5505 8.93118 13.043 8.9393 13.5598C8.94741 14.0767 9.163 14.5757 9.53862 14.947C9.91424 15.3182 10.4191 15.5314 10.9422 15.5397C11.4653 15.5479 11.9637 15.3504 12.3279 14.9908L16.1562 11.2355C16.8845 10.5161 17.2845 9.53123 17.2682 8.4975C17.252 7.46376 16.8208 6.46583 16.0696 5.72324C15.3184 4.98066 14.3086 4.55425 13.2624 4.53782C12.2162 4.52138 11.2193 4.91627 10.4911 5.63562L6.66277 9.39093C5.57035 10.4699 4.97032 11.9473 4.99467 13.4979C5.01903 15.0485 5.66578 16.5454 6.79264 17.6592C7.9195 18.7731 9.43417 19.4127 11.0034 19.4374C12.5727 19.462 14.068 18.8697 15.1604 17.7907L18.9887 14.0354"/></svg>', Bh = 500;
class Oh {
  /**
   * @param {object} options - tool constructor options
   * @param {AttachesToolData} [options.data] - previously saved data
   * @param {AttachesToolConfig} options.config - user defined config
   * @param {EditorAPI} options.api - Editor.js API
   * @param {boolean} options.readOnly - flag indicates whether the Read-Only mode enabled or not
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this.nodes = {
      wrapper: null,
      button: null,
      title: null
    }, this._data = {
      file: {},
      title: ""
    }, this.config = {
      endpoint: t.endpoint || "",
      field: t.field || "file",
      types: t.types || "*",
      buttonText: t.buttonText || "Select file to upload",
      errorMessage: t.errorMessage || "File upload failed",
      uploader: t.uploader || void 0,
      additionalRequestHeaders: t.additionalRequestHeaders || {}
    }, e !== void 0 && !zt(e) && (this.data = e), this.uploader = new Ch({
      config: this.config,
      onUpload: (r) => this.onUpload(r),
      onError: (r) => this.uploadingFailed(r)
    }), this.enableFileUpload = this.enableFileUpload.bind(this);
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: qt,
      title: "Attachment"
    };
  }
  /**
   * Returns true to notify core that read-only is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Tool's CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      apiButton: this.api.styles.button,
      loader: this.api.styles.loader,
      /**
       * Tool's classes
       */
      wrapper: "cdx-attaches",
      wrapperWithFile: "cdx-attaches--with-file",
      wrapperLoading: "cdx-attaches--loading",
      button: "cdx-attaches__button",
      title: "cdx-attaches__title",
      size: "cdx-attaches__size",
      downloadButton: "cdx-attaches__download-button",
      fileInfo: "cdx-attaches__file-info",
      fileIcon: "cdx-attaches__file-icon",
      fileIconBackground: "cdx-attaches__file-icon-background",
      fileIconLabel: "cdx-attaches__file-icon-label"
    };
  }
  /**
   * Possible files' extension colors
   *
   * @returns {object}
   */
  get EXTENSIONS() {
    return {
      doc: "#1483E9",
      docx: "#1483E9",
      odt: "#1483E9",
      pdf: "#DB2F2F",
      rtf: "#744FDC",
      tex: "#5a5a5b",
      txt: "#5a5a5b",
      pptx: "#E35200",
      ppt: "#E35200",
      mp3: "#eab456",
      mp4: "#f676a6",
      xls: "#11AE3D",
      html: "#2988f0",
      htm: "#2988f0",
      png: "#AA2284",
      jpg: "#D13359",
      jpeg: "#D13359",
      gif: "#f6af76",
      zip: "#4f566f",
      rar: "#4f566f",
      exe: "#e26f6f",
      svg: "#bf5252",
      key: "#00B2FF",
      sketch: "#FFC700",
      ai: "#FB601D",
      psd: "#388ae5",
      dmg: "#e26f6f",
      json: "#2988f0",
      csv: "#11AE3D"
    };
  }
  /**
   * Validate block data:
   * - check for emptiness
   *
   * @param {AttachesToolData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !zt(e.file);
  }
  /**
   * Return Block data
   *
   * @param {HTMLElement} toolsContent - block main element returned by the render method
   * @returns {AttachesToolData}
   */
  save(e) {
    if (this.pluginHasData()) {
      const t = e.querySelector(`.${this.CSS.title}`);
      t && Object.assign(this.data, {
        title: t.innerHTML
      });
    }
    return this.data;
  }
  /**
   * Renders Block content
   *
   * @returns {HTMLDivElement}
   */
  render() {
    const e = ee("div", this.CSS.baseClass);
    return this.nodes.wrapper = ee("div", this.CSS.wrapper), this.pluginHasData() ? this.showFileData() : this.prepareUploadButton(), e.appendChild(this.nodes.wrapper), e;
  }
  /**
   * Prepares button for file uploading
   */
  prepareUploadButton() {
    this.nodes.button = ee("div", [this.CSS.apiButton, this.CSS.button]), this.nodes.button.innerHTML = `${qt} ${this.config.buttonText}`, this.readOnly || this.nodes.button.addEventListener("click", this.enableFileUpload), this.nodes.wrapper.appendChild(this.nodes.button);
  }
  /**
   * Fires after clicks on the Toolbox AttachesTool Icon
   * Initiates click on the Select File button
   *
   * @public
   */
  appendCallback() {
    this.nodes.button.click();
  }
  /**
   * Checks if any of Tool's fields have data
   *
   * @returns {boolean}
   */
  pluginHasData() {
    return this.data.title !== "" || Object.values(this.data.file).some((e) => e !== void 0);
  }
  /**
   * Allow to upload files on button click
   */
  enableFileUpload() {
    this.uploader.uploadSelectedFile({
      onPreview: () => {
        this.nodes.wrapper.classList.add(this.CSS.wrapperLoading, this.CSS.loader);
      }
    });
  }
  /**
   * File uploading callback
   *
   * @param {UploadResponseFormat} response - server returned data
   */
  onUpload(e) {
    const t = e;
    try {
      t.success && t.file !== void 0 && !zt(t.file) ? (this.data = {
        file: t.file,
        title: t.file.title || ""
      }, this.nodes.button.remove(), this.showFileData(), Sh(this.nodes.title), this.removeLoader()) : this.uploadingFailed(this.config.errorMessage);
    } catch (o) {
      console.error("Attaches tool error:", o), this.uploadingFailed(this.config.errorMessage);
    }
    this.api.blocks.getBlockByIndex(this.api.blocks.getCurrentBlockIndex()).dispatchChange();
  }
  /**
   * Handles uploaded file's extension and appends corresponding icon
   *
   * @param {object<string, string | number | boolean>} file - uploaded file data got from the backend. Could contain any fields.
   */
  appendFileIcon(e) {
    const t = e.extension || Th(e.name), o = this.EXTENSIONS[t], i = 4, r = ee("div", this.CSS.fileIcon), s = ee("div", this.CSS.fileIconBackground);
    if (o && (s.style.backgroundColor = o), r.appendChild(s), t) {
      let a = t;
      t.length > i && (a = t.substring(0, i) + "…");
      const c = ee("div", this.CSS.fileIconLabel, {
        textContent: a,
        // trimmed
        title: t
        // full text for hover
      });
      o && (c.style.backgroundColor = o), r.appendChild(c);
    } else
      s.innerHTML = qt;
    this.nodes.wrapper.appendChild(r);
  }
  /**
   * Removes tool's loader
   */
  removeLoader() {
    setTimeout(() => this.nodes.wrapper.classList.remove(this.CSS.wrapperLoading, this.CSS.loader), Bh);
  }
  /**
   * If upload is successful, show info about the file
   */
  showFileData() {
    this.nodes.wrapper.classList.add(this.CSS.wrapperWithFile);
    const { file: e, title: t } = this.data;
    this.appendFileIcon(e);
    const o = ee("div", this.CSS.fileInfo);
    if (this.nodes.title = ee("div", this.CSS.title, {
      contentEditable: this.readOnly === !1
    }), this.nodes.title.dataset.placeholder = this.api.i18n.t("File title"), this.nodes.title.textContent = t || "", o.appendChild(this.nodes.title), e.size) {
      let i, r;
      const s = ee("div", this.CSS.size);
      Math.log10(+e.size) >= 6 ? (i = "MiB", r = e.size / Math.pow(2, 20)) : (i = "KiB", r = e.size / Math.pow(2, 10)), s.textContent = r.toFixed(1), s.setAttribute("data-size", i), o.appendChild(s);
    }
    if (this.nodes.wrapper.appendChild(o), e.url !== void 0) {
      const i = ee("a", this.CSS.downloadButton, {
        innerHTML: _h,
        href: e.url,
        target: "_blank"
      });
      this.nodes.wrapper.appendChild(i);
    }
  }
  /**
   * If file uploading failed, remove loader and show notification
   *
   * @param {string} errorMessage -  error message
   */
  uploadingFailed(e) {
    this.api.notifier.show({
      message: e,
      style: "error"
    }), this.removeLoader();
  }
  /**
   * Return Attaches Tool's data
   *
   * @returns {AttachesToolData}
   */
  get data() {
    return this._data;
  }
  /**
   * Stores all Tool's data
   *
   * @param {AttachesToolData} data - data to set
   */
  set data({ file: e, title: t }) {
    this._data = {
      file: e,
      title: t
    };
  }
}
const Uh = /* @__PURE__ */ ns({
  name: "Editor",
  props: {
    placeholder: {
      type: String,
      default: "点击这里开始编辑..."
    },
    // 只读模式
    readOnly: {
      type: Boolean,
      default: !1
    },
    // 初始数据
    data: {
      type: Object,
      required: !1
    },
    // 图片上传函数
    onUploadImage: {
      type: Function,
      required: !1
    },
    // 文件/附件上传函数
    onUploadFile: {
      type: Function,
      required: !1
    },
    // 内容变化回调
    onChange: {
      type: Function,
      required: !1
    },
    // 编辑器就绪回调
    onReady: {
      type: Function,
      required: !1
    }
  },
  setup(n) {
    const e = Un(null), t = Un(null), o = async (r) => ({
      success: 1,
      file: {
        url: URL.createObjectURL(r),
        // 可以添加更多信息
        name: r.name,
        size: r.size
      }
    }), i = async (r) => ({
      success: 1,
      file: {
        url: URL.createObjectURL(r),
        name: r.name,
        size: r.size,
        extension: r.name.split(".").pop() || "",
        title: r.name
        // 默认使用文件名作为标题
      }
    });
    return is(() => {
      t.value && (e.value = new Yc({
        holder: t.value,
        placeholder: n.placeholder,
        // 只读模式
        readOnly: n.readOnly,
        // 初始数据
        data: n.data,
        // 中文 i18n 配置
        i18n: Xc,
        // 配置所有工具
        tools: {
          // 标题工具
          header: {
            class: nd,
            config: {
              placeholder: "输入标题",
              levels: [1, 2, 3, 4, 5, 6],
              defaultLevel: 2
            }
          },
          // 段落工具 (默认)
          paragraph: {
            class: ld,
            inlineToolbar: !0,
            config: {
              placeholder: "输入文本"
            }
          },
          // 多级列表（支持嵌套）
          list: {
            class: rd,
            inlineToolbar: !0,
            config: {
              defaultStyle: "unordered"
            }
          },
          // 图片工具
          image: {
            class: bd,
            config: {
              uploader: {
                /**
                 * 通过文件上传图片
                 * @param file - 要上传的文件
                 */
                uploadByFile: async (r) => n.onUploadImage ? await n.onUploadImage(r) : await o(r),
                /**
                 * 通过 URL 上传图片
                 * @param url - 图片 URL
                 */
                uploadByUrl: async (r) => ({
                  success: 1,
                  file: {
                    url: r
                  }
                })
              }
            }
          },
          // 代码块
          code: {
            class: wd,
            config: {
              placeholder: "输入代码"
            }
          },
          // 链接工具
          linkTool: {
            class: Sd,
            config: {
              endpoint: "/api/fetchUrl"
              // 需要后端支持
            }
          },
          // 引用
          quote: {
            class: zu,
            inlineToolbar: !0,
            config: {
              quotePlaceholder: "输入引用",
              captionPlaceholder: "引用来源"
            }
          },
          // 分隔符
          delimiter: Wu,
          // 表格
          table: {
            class: sh,
            inlineToolbar: !0,
            config: {
              rows: 2,
              cols: 3
            }
          },
          // 清单
          checklist: {
            class: dh,
            inlineToolbar: !0
          },
          // 嵌入内容
          embed: {
            class: he,
            config: {
              services: {
                youtube: !0,
                coub: !0,
                codepen: !0,
                twitter: !0,
                instagram: !0,
                vimeo: !0,
                imgur: !0,
                gfycat: !0,
                "twitch-video": !0,
                "twitch-channel": !0,
                github: !0
              }
            }
          },
          // 警告
          warning: {
            class: yt,
            inlineToolbar: !0,
            config: {
              titlePlaceholder: "标题",
              messagePlaceholder: "消息"
            }
          },
          // 高亮标记 (内联工具)
          marker: {
            class: gh
          },
          // 内联代码
          inlineCode: {
            class: bh
          },
          // 下划线
          underline: yh,
          // 原始 HTML
          raw: Hn,
          // 附件
          attaches: {
            class: Oh,
            config: {
              endpoint: "/api/upload/file",
              // 可选：服务器端点
              buttonText: "选择文件",
              uploader: {
                /**
                 * 上传附件文件
                 * @param file - 要上传的文件
                 */
                uploadByFile: async (r) => n.onUploadFile ? await n.onUploadFile(r) : await i(r)
              }
            }
          }
        },
        onChange: async (r) => {
          if (n.onChange) {
            const s = await r.saver.save();
            n.onChange(s);
          }
        },
        onReady: () => {
          n.onReady && n.onReady();
        }
      }));
    }), rs(() => n.readOnly, async (r) => {
      e.value && e.value.readOnly && await e.value.readOnly.toggle(r);
    }), ss(() => {
      e.value && (e.value.destroy(), e.value = null);
    }), () => as("div", {
      ref: t
    }, null);
  }
});
export {
  Uh as Editor,
  Rh as enUS,
  Xc as zhCN
};
