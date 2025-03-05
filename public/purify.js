/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).DOMPurify =
        t());
})(this, function () {
  "use strict";
  const {
    entries: e,
    setPrototypeOf: t,
    isFrozen: n,
    getPrototypeOf: o,
    getOwnPropertyDescriptor: r,
  } = Object;
  let { freeze: i, seal: a, create: l } = Object,
    { apply: c, construct: s } = "undefined" != typeof Reflect && Reflect;
  i ||
    (i = function (e) {
      return e;
    }),
    a ||
      (a = function (e) {
        return e;
      }),
    c ||
      (c = function (e, t, n) {
        return e.apply(t, n);
      }),
    s ||
      (s = function (e, t) {
        return new e(...t);
      });
  const u = R(Array.prototype.forEach),
    m = R(Array.prototype.lastIndexOf),
    p = R(Array.prototype.pop),
    f = R(Array.prototype.push),
    d = R(Array.prototype.splice),
    h = R(String.prototype.toLowerCase),
    g = R(String.prototype.toString),
    T = R(String.prototype.match),
    y = R(String.prototype.replace),
    E = R(String.prototype.indexOf),
    A = R(String.prototype.trim),
    _ = R(Object.prototype.hasOwnProperty),
    S = R(RegExp.prototype.test),
    b =
      ((N = TypeError),
      function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return s(N, t);
      });
  var N;
  function R(e) {
    return function (t) {
      for (
        var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1;
        r < n;
        r++
      )
        o[r - 1] = arguments[r];
      return c(e, t, o);
    };
  }
  function w(e, o) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h;
    t && t(e, null);
    let i = o.length;
    for (; i--; ) {
      let t = o[i];
      if ("string" == typeof t) {
        const e = r(t);
        e !== t && (n(o) || (o[i] = e), (t = e));
      }
      e[t] = !0;
    }
    return e;
  }
  function O(e) {
    for (let t = 0; t < e.length; t++) {
      _(e, t) || (e[t] = null);
    }
    return e;
  }
  function D(t) {
    const n = l(null);
    for (const [o, r] of e(t)) {
      _(t, o) &&
        (Array.isArray(r)
          ? (n[o] = O(r))
          : r && "object" == typeof r && r.constructor === Object
          ? (n[o] = D(r))
          : (n[o] = r));
    }
    return n;
  }
  function v(e, t) {
    for (; null !== e; ) {
      const n = r(e, t);
      if (n) {
        if (n.get) return R(n.get);
        if ("function" == typeof n.value) return R(n.value);
      }
      e = o(e);
    }
    return function () {
      return null;
    };
  }
  const L = i([
      "a",
      "abbr",
      "acronym",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "bdi",
      "bdo",
      "big",
      "blink",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "center",
      "cite",
      "code",
      "col",
      "colgroup",
      "content",
      "data",
      "datalist",
      "dd",
      "decorator",
      "del",
      "details",
      "dfn",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "element",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "font",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meter",
      "nav",
      "nobr",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "section",
      "select",
      "shadow",
      "small",
      "source",
      "spacer",
      "span",
      "strike",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "track",
      "tt",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
    ]),
    C = i([
      "svg",
      "a",
      "altglyph",
      "altglyphdef",
      "altglyphitem",
      "animatecolor",
      "animatemotion",
      "animatetransform",
      "circle",
      "clippath",
      "defs",
      "desc",
      "ellipse",
      "filter",
      "font",
      "g",
      "glyph",
      "glyphref",
      "hkern",
      "image",
      "line",
      "lineargradient",
      "marker",
      "mask",
      "metadata",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialgradient",
      "rect",
      "stop",
      "style",
      "switch",
      "symbol",
      "text",
      "textpath",
      "title",
      "tref",
      "tspan",
      "view",
      "vkern",
    ]),
    x = i([
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
    ]),
    M = i([
      "animate",
      "color-profile",
      "cursor",
      "discard",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-src",
      "font-face-uri",
      "foreignobject",
      "hatch",
      "hatchpath",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "missing-glyph",
      "script",
      "set",
      "solidcolor",
      "unknown",
      "use",
    ]),
    k = i([
      "math",
      "menclose",
      "merror",
      "mfenced",
      "mfrac",
      "mglyph",
      "mi",
      "mlabeledtr",
      "mmultiscripts",
      "mn",
      "mo",
      "mover",
      "mpadded",
      "mphantom",
      "mroot",
      "mrow",
      "ms",
      "mspace",
      "msqrt",
      "mstyle",
      "msub",
      "msup",
      "msubsup",
      "mtable",
      "mtd",
      "mtext",
      "mtr",
      "munder",
      "munderover",
      "mprescripts",
    ]),
    I = i([
      "maction",
      "maligngroup",
      "malignmark",
      "mlongdiv",
      "mscarries",
      "mscarry",
      "msgroup",
      "mstack",
      "msline",
      "msrow",
      "semantics",
      "annotation",
      "annotation-xml",
      "mprescripts",
      "none",
    ]),
    U = i(["#text"]),
    z = i([
      "accept",
      "action",
      "align",
      "alt",
      "autocapitalize",
      "autocomplete",
      "autopictureinpicture",
      "autoplay",
      "background",
      "bgcolor",
      "border",
      "capture",
      "cellpadding",
      "cellspacing",
      "checked",
      "cite",
      "class",
      "clear",
      "color",
      "cols",
      "colspan",
      "controls",
      "controlslist",
      "coords",
      "crossorigin",
      "datetime",
      "decoding",
      "default",
      "dir",
      "disabled",
      "disablepictureinpicture",
      "disableremoteplayback",
      "download",
      "draggable",
      "enctype",
      "enterkeyhint",
      "face",
      "for",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hreflang",
      "id",
      "inputmode",
      "integrity",
      "ismap",
      "kind",
      "label",
      "lang",
      "list",
      "loading",
      "loop",
      "low",
      "max",
      "maxlength",
      "media",
      "method",
      "min",
      "minlength",
      "multiple",
      "muted",
      "name",
      "nonce",
      "noshade",
      "novalidate",
      "nowrap",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "playsinline",
      "popover",
      "popovertarget",
      "popovertargetaction",
      "poster",
      "preload",
      "pubdate",
      "radiogroup",
      "readonly",
      "rel",
      "required",
      "rev",
      "reversed",
      "role",
      "rows",
      "rowspan",
      "spellcheck",
      "scope",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "srclang",
      "start",
      "src",
      "srcset",
      "step",
      "style",
      "summary",
      "tabindex",
      "title",
      "translate",
      "type",
      "usemap",
      "valign",
      "value",
      "width",
      "wrap",
      "xmlns",
      "slot",
    ]),
    P = i([
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "amplitude",
      "ascent",
      "attributename",
      "attributetype",
      "azimuth",
      "basefrequency",
      "baseline-shift",
      "begin",
      "bias",
      "by",
      "class",
      "clip",
      "clippathunits",
      "clip-path",
      "clip-rule",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "cx",
      "cy",
      "d",
      "dx",
      "dy",
      "diffuseconstant",
      "direction",
      "display",
      "divisor",
      "dur",
      "edgemode",
      "elevation",
      "end",
      "exponent",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterunits",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyphref",
      "gradientunits",
      "gradienttransform",
      "height",
      "href",
      "id",
      "image-rendering",
      "in",
      "in2",
      "intercept",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kerning",
      "keypoints",
      "keysplines",
      "keytimes",
      "lang",
      "lengthadjust",
      "letter-spacing",
      "kernelmatrix",
      "kernelunitlength",
      "lighting-color",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerheight",
      "markerunits",
      "markerwidth",
      "maskcontentunits",
      "maskunits",
      "max",
      "mask",
      "media",
      "method",
      "mode",
      "min",
      "name",
      "numoctaves",
      "offset",
      "operator",
      "opacity",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "paint-order",
      "path",
      "pathlength",
      "patterncontentunits",
      "patterntransform",
      "patternunits",
      "points",
      "preservealpha",
      "preserveaspectratio",
      "primitiveunits",
      "r",
      "rx",
      "ry",
      "radius",
      "refx",
      "refy",
      "repeatcount",
      "repeatdur",
      "restart",
      "result",
      "rotate",
      "scale",
      "seed",
      "shape-rendering",
      "slope",
      "specularconstant",
      "specularexponent",
      "spreadmethod",
      "startoffset",
      "stddeviation",
      "stitchtiles",
      "stop-color",
      "stop-opacity",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke",
      "stroke-width",
      "style",
      "surfacescale",
      "systemlanguage",
      "tabindex",
      "tablevalues",
      "targetx",
      "targety",
      "transform",
      "transform-origin",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textlength",
      "type",
      "u1",
      "u2",
      "unicode",
      "values",
      "viewbox",
      "visibility",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "width",
      "word-spacing",
      "wrap",
      "writing-mode",
      "xchannelselector",
      "ychannelselector",
      "x",
      "x1",
      "x2",
      "xmlns",
      "y",
      "y1",
      "y2",
      "z",
      "zoomandpan",
    ]),
    H = i([
      "accent",
      "accentunder",
      "align",
      "bevelled",
      "close",
      "columnsalign",
      "columnlines",
      "columnspan",
      "denomalign",
      "depth",
      "dir",
      "display",
      "displaystyle",
      "encoding",
      "fence",
      "frame",
      "height",
      "href",
      "id",
      "largeop",
      "length",
      "linethickness",
      "lspace",
      "lquote",
      "mathbackground",
      "mathcolor",
      "mathsize",
      "mathvariant",
      "maxsize",
      "minsize",
      "movablelimits",
      "notation",
      "numalign",
      "open",
      "rowalign",
      "rowlines",
      "rowspacing",
      "rowspan",
      "rspace",
      "rquote",
      "scriptlevel",
      "scriptminsize",
      "scriptsizemultiplier",
      "selection",
      "separator",
      "separators",
      "stretchy",
      "subscriptshift",
      "supscriptshift",
      "symmetric",
      "voffset",
      "width",
      "xmlns",
    ]),
    F = i(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    B = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    W = a(/<%[\w\W]*|[\w\W]*%>/gm),
    G = a(/\$\{[\w\W]*/gm),
    Y = a(/^data-[\-\w.\u00B7-\uFFFF]+$/),
    j = a(/^aria-[\-\w]+$/),
    X = a(
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    ),
    q = a(/^(?:\w+script|data):/i),
    $ = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    K = a(/^html$/i),
    V = a(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var Z = Object.freeze({
    __proto__: null,
    ARIA_ATTR: j,
    ATTR_WHITESPACE: $,
    CUSTOM_ELEMENT: V,
    DATA_ATTR: Y,
    DOCTYPE_NAME: K,
    ERB_EXPR: W,
    IS_ALLOWED_URI: X,
    IS_SCRIPT_OR_DATA: q,
    MUSTACHE_EXPR: B,
    TMPLIT_EXPR: G,
  });
  const J = 1,
    Q = 3,
    ee = 7,
    te = 8,
    ne = 9,
    oe = function () {
      return "undefined" == typeof window ? null : window;
    };
  var re = (function t() {
    let n =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe();
    const o = (e) => t(e);
    if (
      ((o.version = "3.2.4"),
      (o.removed = []),
      !n || !n.document || n.document.nodeType !== ne || !n.Element)
    )
      return (o.isSupported = !1), o;
    let { document: r } = n;
    const a = r,
      c = a.currentScript,
      {
        DocumentFragment: s,
        HTMLTemplateElement: N,
        Node: R,
        Element: O,
        NodeFilter: B,
        NamedNodeMap: W = n.NamedNodeMap || n.MozNamedAttrMap,
        HTMLFormElement: G,
        DOMParser: Y,
        trustedTypes: j,
      } = n,
      q = O.prototype,
      $ = v(q, "cloneNode"),
      V = v(q, "remove"),
      re = v(q, "nextSibling"),
      ie = v(q, "childNodes"),
      ae = v(q, "parentNode");
    if ("function" == typeof N) {
      const e = r.createElement("template");
      e.content && e.content.ownerDocument && (r = e.content.ownerDocument);
    }
    let le,
      ce = "";
    const {
        implementation: se,
        createNodeIterator: ue,
        createDocumentFragment: me,
        getElementsByTagName: pe,
      } = r,
      { importNode: fe } = a;
    let de = {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: [],
    };
    o.isSupported =
      "function" == typeof e &&
      "function" == typeof ae &&
      se &&
      void 0 !== se.createHTMLDocument;
    const {
      MUSTACHE_EXPR: he,
      ERB_EXPR: ge,
      TMPLIT_EXPR: Te,
      DATA_ATTR: ye,
      ARIA_ATTR: Ee,
      IS_SCRIPT_OR_DATA: Ae,
      ATTR_WHITESPACE: _e,
      CUSTOM_ELEMENT: Se,
    } = Z;
    let { IS_ALLOWED_URI: be } = Z,
      Ne = null;
    const Re = w({}, [...L, ...C, ...x, ...k, ...U]);
    let we = null;
    const Oe = w({}, [...z, ...P, ...H, ...F]);
    let De = Object.seal(
        l(null, {
          tagNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null,
          },
          attributeNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null,
          },
          allowCustomizedBuiltInElements: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: !1,
          },
        })
      ),
      ve = null,
      Le = null,
      Ce = !0,
      xe = !0,
      Me = !1,
      ke = !0,
      Ie = !1,
      Ue = !0,
      ze = !1,
      Pe = !1,
      He = !1,
      Fe = !1,
      Be = !1,
      We = !1,
      Ge = !0,
      Ye = !1,
      je = !0,
      Xe = !1,
      qe = {},
      $e = null;
    const Ke = w({}, [
      "annotation-xml",
      "audio",
      "colgroup",
      "desc",
      "foreignobject",
      "head",
      "iframe",
      "math",
      "mi",
      "mn",
      "mo",
      "ms",
      "mtext",
      "noembed",
      "noframes",
      "noscript",
      "plaintext",
      "script",
      "style",
      "svg",
      "template",
      "thead",
      "title",
      "video",
      "xmp",
    ]);
    let Ve = null;
    const Ze = w({}, ["audio", "video", "img", "source", "image", "track"]);
    let Je = null;
    const Qe = w({}, [
        "alt",
        "class",
        "for",
        "id",
        "label",
        "name",
        "pattern",
        "placeholder",
        "role",
        "summary",
        "title",
        "value",
        "style",
        "xmlns",
      ]),
      et = "http://www.w3.org/1998/Math/MathML",
      tt = "http://www.w3.org/2000/svg",
      nt = "http://www.w3.org/1999/xhtml";
    let ot = nt,
      rt = !1,
      it = null;
    const at = w({}, [et, tt, nt], g);
    let lt = w({}, ["mi", "mo", "mn", "ms", "mtext"]),
      ct = w({}, ["annotation-xml"]);
    const st = w({}, ["title", "style", "font", "a", "script"]);
    let ut = null;
    const mt = ["application/xhtml+xml", "text/html"];
    let pt = null,
      ft = null;
    const dt = r.createElement("form"),
      ht = function (e) {
        return e instanceof RegExp || e instanceof Function;
      },
      gt = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!ft || ft !== e) {
          if (
            ((e && "object" == typeof e) || (e = {}),
            (e = D(e)),
            (ut =
              -1 === mt.indexOf(e.PARSER_MEDIA_TYPE)
                ? "text/html"
                : e.PARSER_MEDIA_TYPE),
            (pt = "application/xhtml+xml" === ut ? g : h),
            (Ne = _(e, "ALLOWED_TAGS") ? w({}, e.ALLOWED_TAGS, pt) : Re),
            (we = _(e, "ALLOWED_ATTR") ? w({}, e.ALLOWED_ATTR, pt) : Oe),
            (it = _(e, "ALLOWED_NAMESPACES")
              ? w({}, e.ALLOWED_NAMESPACES, g)
              : at),
            (Je = _(e, "ADD_URI_SAFE_ATTR")
              ? w(D(Qe), e.ADD_URI_SAFE_ATTR, pt)
              : Qe),
            (Ve = _(e, "ADD_DATA_URI_TAGS")
              ? w(D(Ze), e.ADD_DATA_URI_TAGS, pt)
              : Ze),
            ($e = _(e, "FORBID_CONTENTS") ? w({}, e.FORBID_CONTENTS, pt) : Ke),
            (ve = _(e, "FORBID_TAGS") ? w({}, e.FORBID_TAGS, pt) : {}),
            (Le = _(e, "FORBID_ATTR") ? w({}, e.FORBID_ATTR, pt) : {}),
            (qe = !!_(e, "USE_PROFILES") && e.USE_PROFILES),
            (Ce = !1 !== e.ALLOW_ARIA_ATTR),
            (xe = !1 !== e.ALLOW_DATA_ATTR),
            (Me = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
            (ke = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
            (Ie = e.SAFE_FOR_TEMPLATES || !1),
            (Ue = !1 !== e.SAFE_FOR_XML),
            (ze = e.WHOLE_DOCUMENT || !1),
            (Fe = e.RETURN_DOM || !1),
            (Be = e.RETURN_DOM_FRAGMENT || !1),
            (We = e.RETURN_TRUSTED_TYPE || !1),
            (He = e.FORCE_BODY || !1),
            (Ge = !1 !== e.SANITIZE_DOM),
            (Ye = e.SANITIZE_NAMED_PROPS || !1),
            (je = !1 !== e.KEEP_CONTENT),
            (Xe = e.IN_PLACE || !1),
            (be = e.ALLOWED_URI_REGEXP || X),
            (ot = e.NAMESPACE || nt),
            (lt = e.MATHML_TEXT_INTEGRATION_POINTS || lt),
            (ct = e.HTML_INTEGRATION_POINTS || ct),
            (De = e.CUSTOM_ELEMENT_HANDLING || {}),
            e.CUSTOM_ELEMENT_HANDLING &&
              ht(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
              (De.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
            e.CUSTOM_ELEMENT_HANDLING &&
              ht(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
              (De.attributeNameCheck =
                e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
            e.CUSTOM_ELEMENT_HANDLING &&
              "boolean" ==
                typeof e.CUSTOM_ELEMENT_HANDLING
                  .allowCustomizedBuiltInElements &&
              (De.allowCustomizedBuiltInElements =
                e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
            Ie && (xe = !1),
            Be && (Fe = !0),
            qe &&
              ((Ne = w({}, U)),
              (we = []),
              !0 === qe.html && (w(Ne, L), w(we, z)),
              !0 === qe.svg && (w(Ne, C), w(we, P), w(we, F)),
              !0 === qe.svgFilters && (w(Ne, x), w(we, P), w(we, F)),
              !0 === qe.mathMl && (w(Ne, k), w(we, H), w(we, F))),
            e.ADD_TAGS && (Ne === Re && (Ne = D(Ne)), w(Ne, e.ADD_TAGS, pt)),
            e.ADD_ATTR && (we === Oe && (we = D(we)), w(we, e.ADD_ATTR, pt)),
            e.ADD_URI_SAFE_ATTR && w(Je, e.ADD_URI_SAFE_ATTR, pt),
            e.FORBID_CONTENTS &&
              ($e === Ke && ($e = D($e)), w($e, e.FORBID_CONTENTS, pt)),
            je && (Ne["#text"] = !0),
            ze && w(Ne, ["html", "head", "body"]),
            Ne.table && (w(Ne, ["tbody"]), delete ve.tbody),
            e.TRUSTED_TYPES_POLICY)
          ) {
            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
              throw b(
                'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
              );
            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
              throw b(
                'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
              );
            (le = e.TRUSTED_TYPES_POLICY), (ce = le.createHTML(""));
          } else
            void 0 === le &&
              (le = (function (e, t) {
                if ("object" != typeof e || "function" != typeof e.createPolicy)
                  return null;
                let n = null;
                const o = "data-tt-policy-suffix";
                t && t.hasAttribute(o) && (n = t.getAttribute(o));
                const r = "dompurify" + (n ? "#" + n : "");
                try {
                  return e.createPolicy(r, {
                    createHTML: (e) => e,
                    createScriptURL: (e) => e,
                  });
                } catch (e) {
                  return (
                    console.warn(
                      "TrustedTypes policy " + r + " could not be created."
                    ),
                    null
                  );
                }
              })(j, c)),
              null !== le && "string" == typeof ce && (ce = le.createHTML(""));
          i && i(e), (ft = e);
        }
      },
      Tt = w({}, [...C, ...x, ...M]),
      yt = w({}, [...k, ...I]),
      Et = function (e) {
        f(o.removed, { element: e });
        try {
          ae(e).removeChild(e);
        } catch (t) {
          V(e);
        }
      },
      At = function (e, t) {
        try {
          f(o.removed, { attribute: t.getAttributeNode(e), from: t });
        } catch (e) {
          f(o.removed, { attribute: null, from: t });
        }
        if ((t.removeAttribute(e), "is" === e))
          if (Fe || Be)
            try {
              Et(t);
            } catch (e) {}
          else
            try {
              t.setAttribute(e, "");
            } catch (e) {}
      },
      _t = function (e) {
        let t = null,
          n = null;
        if (He) e = "<remove></remove>" + e;
        else {
          const t = T(e, /^[\r\n\t ]+/);
          n = t && t[0];
        }
        "application/xhtml+xml" === ut &&
          ot === nt &&
          (e =
            '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
            e +
            "</body></html>");
        const o = le ? le.createHTML(e) : e;
        if (ot === nt)
          try {
            t = new Y().parseFromString(o, ut);
          } catch (e) {}
        if (!t || !t.documentElement) {
          t = se.createDocument(ot, "template", null);
          try {
            t.documentElement.innerHTML = rt ? ce : o;
          } catch (e) {}
        }
        const i = t.body || t.documentElement;
        return (
          e &&
            n &&
            i.insertBefore(r.createTextNode(n), i.childNodes[0] || null),
          ot === nt
            ? pe.call(t, ze ? "html" : "body")[0]
            : ze
            ? t.documentElement
            : i
        );
      },
      St = function (e) {
        return ue.call(
          e.ownerDocument || e,
          e,
          B.SHOW_ELEMENT |
            B.SHOW_COMMENT |
            B.SHOW_TEXT |
            B.SHOW_PROCESSING_INSTRUCTION |
            B.SHOW_CDATA_SECTION,
          null
        );
      },
      bt = function (e) {
        return (
          e instanceof G &&
          ("string" != typeof e.nodeName ||
            "string" != typeof e.textContent ||
            "function" != typeof e.removeChild ||
            !(e.attributes instanceof W) ||
            "function" != typeof e.removeAttribute ||
            "function" != typeof e.setAttribute ||
            "string" != typeof e.namespaceURI ||
            "function" != typeof e.insertBefore ||
            "function" != typeof e.hasChildNodes)
        );
      },
      Nt = function (e) {
        return "function" == typeof R && e instanceof R;
      };
    function Rt(e, t, n) {
      u(e, (e) => {
        e.call(o, t, n, ft);
      });
    }
    const wt = function (e) {
        let t = null;
        if ((Rt(de.beforeSanitizeElements, e, null), bt(e))) return Et(e), !0;
        const n = pt(e.nodeName);
        if (
          (Rt(de.uponSanitizeElement, e, { tagName: n, allowedTags: Ne }),
          e.hasChildNodes() &&
            !Nt(e.firstElementChild) &&
            S(/<[/\w!]/g, e.innerHTML) &&
            S(/<[/\w!]/g, e.textContent))
        )
          return Et(e), !0;
        if (e.nodeType === ee) return Et(e), !0;
        if (Ue && e.nodeType === te && S(/<[/\w]/g, e.data)) return Et(e), !0;
        if (!Ne[n] || ve[n]) {
          if (!ve[n] && Dt(n)) {
            if (De.tagNameCheck instanceof RegExp && S(De.tagNameCheck, n))
              return !1;
            if (De.tagNameCheck instanceof Function && De.tagNameCheck(n))
              return !1;
          }
          if (je && !$e[n]) {
            const t = ae(e) || e.parentNode,
              n = ie(e) || e.childNodes;
            if (n && t) {
              for (let o = n.length - 1; o >= 0; --o) {
                const r = $(n[o], !0);
                (r.__removalCount = (e.__removalCount || 0) + 1),
                  t.insertBefore(r, re(e));
              }
            }
          }
          return Et(e), !0;
        }
        return e instanceof O &&
          !(function (e) {
            let t = ae(e);
            (t && t.tagName) || (t = { namespaceURI: ot, tagName: "template" });
            const n = h(e.tagName),
              o = h(t.tagName);
            return (
              !!it[e.namespaceURI] &&
              (e.namespaceURI === tt
                ? t.namespaceURI === nt
                  ? "svg" === n
                  : t.namespaceURI === et
                  ? "svg" === n && ("annotation-xml" === o || lt[o])
                  : Boolean(Tt[n])
                : e.namespaceURI === et
                ? t.namespaceURI === nt
                  ? "math" === n
                  : t.namespaceURI === tt
                  ? "math" === n && ct[o]
                  : Boolean(yt[n])
                : e.namespaceURI === nt
                ? !(t.namespaceURI === tt && !ct[o]) &&
                  !(t.namespaceURI === et && !lt[o]) &&
                  !yt[n] &&
                  (st[n] || !Tt[n])
                : !("application/xhtml+xml" !== ut || !it[e.namespaceURI]))
            );
          })(e)
          ? (Et(e), !0)
          : ("noscript" !== n && "noembed" !== n && "noframes" !== n) ||
            !S(/<\/no(script|embed|frames)/i, e.innerHTML)
          ? (Ie &&
              e.nodeType === Q &&
              ((t = e.textContent),
              u([he, ge, Te], (e) => {
                t = y(t, e, " ");
              }),
              e.textContent !== t &&
                (f(o.removed, { element: e.cloneNode() }),
                (e.textContent = t))),
            Rt(de.afterSanitizeElements, e, null),
            !1)
          : (Et(e), !0);
      },
      Ot = function (e, t, n) {
        if (Ge && ("id" === t || "name" === t) && (n in r || n in dt))
          return !1;
        if (xe && !Le[t] && S(ye, t));
        else if (Ce && S(Ee, t));
        else if (!we[t] || Le[t]) {
          if (
            !(
              (Dt(e) &&
                ((De.tagNameCheck instanceof RegExp && S(De.tagNameCheck, e)) ||
                  (De.tagNameCheck instanceof Function &&
                    De.tagNameCheck(e))) &&
                ((De.attributeNameCheck instanceof RegExp &&
                  S(De.attributeNameCheck, t)) ||
                  (De.attributeNameCheck instanceof Function &&
                    De.attributeNameCheck(t)))) ||
              ("is" === t &&
                De.allowCustomizedBuiltInElements &&
                ((De.tagNameCheck instanceof RegExp && S(De.tagNameCheck, n)) ||
                  (De.tagNameCheck instanceof Function && De.tagNameCheck(n))))
            )
          )
            return !1;
        } else if (Je[t]);
        else if (S(be, y(n, _e, "")));
        else if (
          ("src" !== t && "xlink:href" !== t && "href" !== t) ||
          "script" === e ||
          0 !== E(n, "data:") ||
          !Ve[e]
        ) {
          if (Me && !S(Ae, y(n, _e, "")));
          else if (n) return !1;
        } else;
        return !0;
      },
      Dt = function (e) {
        return "annotation-xml" !== e && T(e, Se);
      },
      vt = function (e) {
        Rt(de.beforeSanitizeAttributes, e, null);
        const { attributes: t } = e;
        if (!t || bt(e)) return;
        const n = {
          attrName: "",
          attrValue: "",
          keepAttr: !0,
          allowedAttributes: we,
          forceKeepAttr: void 0,
        };
        let r = t.length;
        for (; r--; ) {
          const i = t[r],
            { name: a, namespaceURI: l, value: c } = i,
            s = pt(a);
          let m = "value" === a ? c : A(c);
          if (
            ((n.attrName = s),
            (n.attrValue = m),
            (n.keepAttr = !0),
            (n.forceKeepAttr = void 0),
            Rt(de.uponSanitizeAttribute, e, n),
            (m = n.attrValue),
            !Ye ||
              ("id" !== s && "name" !== s) ||
              (At(a, e), (m = "user-content-" + m)),
            Ue && S(/((--!?|])>)|<\/(style|title)/i, m))
          ) {
            At(a, e);
            continue;
          }
          if (n.forceKeepAttr) continue;
          if ((At(a, e), !n.keepAttr)) continue;
          if (!ke && S(/\/>/i, m)) {
            At(a, e);
            continue;
          }
          Ie &&
            u([he, ge, Te], (e) => {
              m = y(m, e, " ");
            });
          const f = pt(e.nodeName);
          if (Ot(f, s, m)) {
            if (
              le &&
              "object" == typeof j &&
              "function" == typeof j.getAttributeType
            )
              if (l);
              else
                switch (j.getAttributeType(f, s)) {
                  case "TrustedHTML":
                    m = le.createHTML(m);
                    break;
                  case "TrustedScriptURL":
                    m = le.createScriptURL(m);
                }
            try {
              l ? e.setAttributeNS(l, a, m) : e.setAttribute(a, m),
                bt(e) ? Et(e) : p(o.removed);
            } catch (e) {}
          }
        }
        Rt(de.afterSanitizeAttributes, e, null);
      },
      Lt = function e(t) {
        let n = null;
        const o = St(t);
        for (Rt(de.beforeSanitizeShadowDOM, t, null); (n = o.nextNode()); )
          Rt(de.uponSanitizeShadowNode, n, null),
            wt(n),
            vt(n),
            n.content instanceof s && e(n.content);
        Rt(de.afterSanitizeShadowDOM, t, null);
      };
    return (
      (o.sanitize = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = null,
          r = null,
          i = null,
          l = null;
        if (
          ((rt = !e), rt && (e = "\x3c!--\x3e"), "string" != typeof e && !Nt(e))
        ) {
          if ("function" != typeof e.toString)
            throw b("toString is not a function");
          if ("string" != typeof (e = e.toString()))
            throw b("dirty is not a string, aborting");
        }
        if (!o.isSupported) return e;
        if (
          (Pe || gt(t), (o.removed = []), "string" == typeof e && (Xe = !1), Xe)
        ) {
          if (e.nodeName) {
            const t = pt(e.nodeName);
            if (!Ne[t] || ve[t])
              throw b(
                "root node is forbidden and cannot be sanitized in-place"
              );
          }
        } else if (e instanceof R)
          (n = _t("\x3c!----\x3e")),
            (r = n.ownerDocument.importNode(e, !0)),
            (r.nodeType === J && "BODY" === r.nodeName) || "HTML" === r.nodeName
              ? (n = r)
              : n.appendChild(r);
        else {
          if (!Fe && !Ie && !ze && -1 === e.indexOf("<"))
            return le && We ? le.createHTML(e) : e;
          if (((n = _t(e)), !n)) return Fe ? null : We ? ce : "";
        }
        n && He && Et(n.firstChild);
        const c = St(Xe ? e : n);
        for (; (i = c.nextNode()); )
          wt(i), vt(i), i.content instanceof s && Lt(i.content);
        if (Xe) return e;
        if (Fe) {
          if (Be)
            for (l = me.call(n.ownerDocument); n.firstChild; )
              l.appendChild(n.firstChild);
          else l = n;
          return (
            (we.shadowroot || we.shadowrootmode) && (l = fe.call(a, l, !0)), l
          );
        }
        let m = ze ? n.outerHTML : n.innerHTML;
        return (
          ze &&
            Ne["!doctype"] &&
            n.ownerDocument &&
            n.ownerDocument.doctype &&
            n.ownerDocument.doctype.name &&
            S(K, n.ownerDocument.doctype.name) &&
            (m = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + m),
          Ie &&
            u([he, ge, Te], (e) => {
              m = y(m, e, " ");
            }),
          le && We ? le.createHTML(m) : m
        );
      }),
      (o.setConfig = function () {
        gt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
          (Pe = !0);
      }),
      (o.clearConfig = function () {
        (ft = null), (Pe = !1);
      }),
      (o.isValidAttribute = function (e, t, n) {
        ft || gt({});
        const o = pt(e),
          r = pt(t);
        return Ot(o, r, n);
      }),
      (o.addHook = function (e, t) {
        "function" == typeof t && f(de[e], t);
      }),
      (o.removeHook = function (e, t) {
        if (void 0 !== t) {
          const n = m(de[e], t);
          return -1 === n ? void 0 : d(de[e], n, 1)[0];
        }
        return p(de[e]);
      }),
      (o.removeHooks = function (e) {
        de[e] = [];
      }),
      (o.removeAllHooks = function () {
        de = {
          afterSanitizeAttributes: [],
          afterSanitizeElements: [],
          afterSanitizeShadowDOM: [],
          beforeSanitizeAttributes: [],
          beforeSanitizeElements: [],
          beforeSanitizeShadowDOM: [],
          uponSanitizeAttribute: [],
          uponSanitizeElement: [],
          uponSanitizeShadowNode: [],
        };
      }),
      o
    );
  })();
  return re;
});
