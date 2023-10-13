var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(Be) {
  return Be && Be.__esModule && Object.prototype.hasOwnProperty.call(Be, "default") ? Be.default : Be;
}
var htmx_min = { exports: {} };
(function(module) {
  (function(Be, Yr) {
    module.exports ? module.exports = Yr() : Be.htmx = Be.htmx || Yr();
  })(typeof self < "u" ? self : commonjsGlobal, function() {
    return function() {
      var Y = { onLoad: t, process: Pt, on: Z, off: K, trigger: fe, ajax: wr, find: E, findAll: f, closest: v, values: function(Be, Yr) {
        var Mr = nr(Be, Yr || "post");
        return Mr.values;
      }, remove: U, addClass: B, removeClass: n, toggleClass: V, takeClass: j, defineExtension: qr, removeExtension: Hr, logAll: X, logNone: F, logger: null, config: { historyEnabled: !0, historyCacheSize: 10, refreshOnHistoryMiss: !1, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: !0, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: !0, allowScriptTags: !0, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: !1, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: !1, scrollBehavior: "smooth", defaultFocusScroll: !1, getCacheBusterParam: !1, globalViewTransitions: !1, methodsThatUseUrlParams: ["get"], selfRequestsOnly: !1 }, parseInterval: d, _: e, createEventSource: function(Be) {
        return new EventSource(Be, { withCredentials: !0 });
      }, createWebSocket: function(Be) {
        var Yr = new WebSocket(Be, []);
        return Yr.binaryType = Y.config.wsBinaryType, Yr;
      }, version: "1.9.6" }, r = { addTriggerHandler: St, bodyContains: oe, canAccessLocalStorage: M, findThisElement: de, filterValues: lr, hasAttribute: o, getAttributeValue: ee, getClosestAttributeValue: re, getClosestMatch: c, getExpressionVars: xr, getHeaders: sr, getInputValues: nr, getInternalData: ie, getSwapSpecification: fr, getTriggerSpecs: Ze, getTarget: ge, makeFragment: l, mergeObjects: se, makeSettleInfo: T, oobSwap: ye, querySelectorExt: le, selectAndSwap: Fe, settleImmediately: Wt, shouldCancel: tt, triggerEvent: fe, triggerErrorEvent: ue, withExtensions: C }, b = ["get", "post", "put", "delete", "patch"], w = b.map(function(Be) {
        return "[hx-" + Be + "], [data-hx-" + Be + "]";
      }).join(", ");
      function d(Be) {
        if (Be != null)
          return Be.slice(-2) == "ms" ? parseFloat(Be.slice(0, -2)) || void 0 : Be.slice(-1) == "s" ? parseFloat(Be.slice(0, -1)) * 1e3 || void 0 : Be.slice(-1) == "m" ? parseFloat(Be.slice(0, -1)) * 1e3 * 60 || void 0 : parseFloat(Be) || void 0;
      }
      function Q(Be, Yr) {
        return Be.getAttribute && Be.getAttribute(Yr);
      }
      function o(Be, Yr) {
        return Be.hasAttribute && (Be.hasAttribute(Yr) || Be.hasAttribute("data-" + Yr));
      }
      function ee(Be, Yr) {
        return Q(Be, Yr) || Q(Be, "data-" + Yr);
      }
      function u(Be) {
        return Be.parentElement;
      }
      function te() {
        return document;
      }
      function c(Be, Yr) {
        for (; Be && !Yr(Be); )
          Be = u(Be);
        return Be || null;
      }
      function O(Be, Yr, Mr) {
        var Dr = ee(Yr, Mr), Xr = ee(Yr, "hx-disinherit");
        return Be !== Yr && Xr && (Xr === "*" || Xr.split(" ").indexOf(Mr) >= 0) ? "unset" : Dr;
      }
      function re(Be, Yr) {
        var Mr = null;
        if (c(Be, function(Dr) {
          return Mr = O(Be, Dr, Yr);
        }), Mr !== "unset")
          return Mr;
      }
      function h(Be, Yr) {
        var Mr = Be.matches || Be.matchesSelector || Be.msMatchesSelector || Be.mozMatchesSelector || Be.webkitMatchesSelector || Be.oMatchesSelector;
        return Mr && Mr.call(Be, Yr);
      }
      function q(Be) {
        var Yr = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Mr = Yr.exec(Be);
        return Mr ? Mr[1].toLowerCase() : "";
      }
      function i(Be, Yr) {
        for (var Mr = new DOMParser(), Dr = Mr.parseFromString(Be, "text/html"), Xr = Dr.body; Yr > 0; )
          Yr--, Xr = Xr.firstChild;
        return Xr == null && (Xr = te().createDocumentFragment()), Xr;
      }
      function H(Be) {
        return Be.match(/<body/);
      }
      function l(Be) {
        var Yr = !H(Be);
        if (Y.config.useTemplateFragments && Yr) {
          var Mr = i("<body><template>" + Be + "</template></body>", 0);
          return Mr.querySelector("template").content;
        } else {
          var Dr = q(Be);
          switch (Dr) {
            case "thead":
            case "tbody":
            case "tfoot":
            case "colgroup":
            case "caption":
              return i("<table>" + Be + "</table>", 1);
            case "col":
              return i("<table><colgroup>" + Be + "</colgroup></table>", 2);
            case "tr":
              return i("<table><tbody>" + Be + "</tbody></table>", 2);
            case "td":
            case "th":
              return i("<table><tbody><tr>" + Be + "</tr></tbody></table>", 3);
            case "script":
            case "style":
              return i("<div>" + Be + "</div>", 1);
            default:
              return i(Be, 0);
          }
        }
      }
      function ne(Be) {
        Be && Be();
      }
      function L(Be, Yr) {
        return Object.prototype.toString.call(Be) === "[object " + Yr + "]";
      }
      function A(Be) {
        return L(Be, "Function");
      }
      function N(Be) {
        return L(Be, "Object");
      }
      function ie(Be) {
        var Yr = "htmx-internal-data", Mr = Be[Yr];
        return Mr || (Mr = Be[Yr] = {}), Mr;
      }
      function I(Be) {
        var Yr = [];
        if (Be)
          for (var Mr = 0; Mr < Be.length; Mr++)
            Yr.push(Be[Mr]);
        return Yr;
      }
      function ae(Be, Yr) {
        if (Be)
          for (var Mr = 0; Mr < Be.length; Mr++)
            Yr(Be[Mr]);
      }
      function P(Be) {
        var Yr = Be.getBoundingClientRect(), Mr = Yr.top, Dr = Yr.bottom;
        return Mr < window.innerHeight && Dr >= 0;
      }
      function oe(Be) {
        return Be.getRootNode && Be.getRootNode() instanceof window.ShadowRoot ? te().body.contains(Be.getRootNode().host) : te().body.contains(Be);
      }
      function k(Be) {
        return Be.trim().split(/\s+/);
      }
      function se(Be, Yr) {
        for (var Mr in Yr)
          Yr.hasOwnProperty(Mr) && (Be[Mr] = Yr[Mr]);
        return Be;
      }
      function S(Be) {
        try {
          return JSON.parse(Be);
        } catch (Yr) {
          return y(Yr), null;
        }
      }
      function M() {
        var Be = "htmx:localStorageTest";
        try {
          return localStorage.setItem(Be, Be), localStorage.removeItem(Be), !0;
        } catch {
          return !1;
        }
      }
      function D(Be) {
        try {
          var Yr = new URL(Be);
          return Yr && (Be = Yr.pathname + Yr.search), Be.match("^/$") || (Be = Be.replace(/\/+$/, "")), Be;
        } catch {
          return Be;
        }
      }
      function e(e) {
        return gr(te().body, function() {
          return eval(e);
        });
      }
      function t(Be) {
        var Yr = Y.on("htmx:load", function(Mr) {
          Be(Mr.detail.elt);
        });
        return Yr;
      }
      function X() {
        Y.logger = function(Be, Yr, Mr) {
          console && console.log(Yr, Be, Mr);
        };
      }
      function F() {
        Y.logger = null;
      }
      function E(Be, Yr) {
        return Yr ? Be.querySelector(Yr) : E(te(), Be);
      }
      function f(Be, Yr) {
        return Yr ? Be.querySelectorAll(Yr) : f(te(), Be);
      }
      function U(Be, Yr) {
        Be = s(Be), Yr ? setTimeout(function() {
          U(Be), Be = null;
        }, Yr) : Be.parentElement.removeChild(Be);
      }
      function B(Be, Yr, Mr) {
        Be = s(Be), Mr ? setTimeout(function() {
          B(Be, Yr), Be = null;
        }, Mr) : Be.classList && Be.classList.add(Yr);
      }
      function n(Be, Yr, Mr) {
        Be = s(Be), Mr ? setTimeout(function() {
          n(Be, Yr), Be = null;
        }, Mr) : Be.classList && (Be.classList.remove(Yr), Be.classList.length === 0 && Be.removeAttribute("class"));
      }
      function V(Be, Yr) {
        Be = s(Be), Be.classList.toggle(Yr);
      }
      function j(Be, Yr) {
        Be = s(Be), ae(Be.parentElement.children, function(Mr) {
          n(Mr, Yr);
        }), B(Be, Yr);
      }
      function v(Be, Yr) {
        if (Be = s(Be), Be.closest)
          return Be.closest(Yr);
        do
          if (Be == null || h(Be, Yr))
            return Be;
        while (Be = Be && u(Be));
        return null;
      }
      function g(Be, Yr) {
        return Be.substring(0, Yr.length) === Yr;
      }
      function _(Be, Yr) {
        return Be.substring(Be.length - Yr.length) === Yr;
      }
      function z(Be) {
        var Yr = Be.trim();
        return g(Yr, "<") && _(Yr, "/>") ? Yr.substring(1, Yr.length - 2) : Yr;
      }
      function W(Be, Yr) {
        return Yr.indexOf("closest ") === 0 ? [v(Be, z(Yr.substr(8)))] : Yr.indexOf("find ") === 0 ? [E(Be, z(Yr.substr(5)))] : Yr.indexOf("next ") === 0 ? [$(Be, z(Yr.substr(5)))] : Yr.indexOf("previous ") === 0 ? [G(Be, z(Yr.substr(9)))] : Yr === "document" ? [document] : Yr === "window" ? [window] : Yr === "body" ? [document.body] : te().querySelectorAll(z(Yr));
      }
      var $ = function(Be, Yr) {
        for (var Mr = te().querySelectorAll(Yr), Dr = 0; Dr < Mr.length; Dr++) {
          var Xr = Mr[Dr];
          if (Xr.compareDocumentPosition(Be) === Node.DOCUMENT_POSITION_PRECEDING)
            return Xr;
        }
      }, G = function(Be, Yr) {
        for (var Mr = te().querySelectorAll(Yr), Dr = Mr.length - 1; Dr >= 0; Dr--) {
          var Xr = Mr[Dr];
          if (Xr.compareDocumentPosition(Be) === Node.DOCUMENT_POSITION_FOLLOWING)
            return Xr;
        }
      };
      function le(Be, Yr) {
        return Yr ? W(Be, Yr)[0] : W(te().body, Be)[0];
      }
      function s(Be) {
        return L(Be, "String") ? E(Be) : Be;
      }
      function J(Be, Yr, Mr) {
        return A(Yr) ? { target: te().body, event: Be, listener: Yr } : { target: s(Be), event: Yr, listener: Mr };
      }
      function Z(Be, Yr, Mr) {
        Nr(function() {
          var Xr = J(Be, Yr, Mr);
          Xr.target.addEventListener(Xr.event, Xr.listener);
        });
        var Dr = A(Yr);
        return Dr ? Yr : Mr;
      }
      function K(Be, Yr, Mr) {
        return Nr(function() {
          var Dr = J(Be, Yr, Mr);
          Dr.target.removeEventListener(Dr.event, Dr.listener);
        }), A(Yr) ? Yr : Mr;
      }
      var he = te().createElement("output");
      function ve(Be, Yr) {
        var Mr = re(Be, Yr);
        if (Mr) {
          if (Mr === "this")
            return [de(Be, Yr)];
          var Dr = W(Be, Mr);
          return Dr.length === 0 ? (y('The selector "' + Mr + '" on ' + Yr + " returned no matches!"), [he]) : Dr;
        }
      }
      function de(Be, Yr) {
        return c(Be, function(Mr) {
          return ee(Mr, Yr) != null;
        });
      }
      function ge(Be) {
        var Yr = re(Be, "hx-target");
        if (Yr)
          return Yr === "this" ? de(Be, "hx-target") : le(Be, Yr);
        var Mr = ie(Be);
        return Mr.boosted ? te().body : Be;
      }
      function me(Be) {
        for (var Yr = Y.config.attributesToSettle, Mr = 0; Mr < Yr.length; Mr++)
          if (Be === Yr[Mr])
            return !0;
        return !1;
      }
      function pe(Be, Yr) {
        ae(Be.attributes, function(Mr) {
          !Yr.hasAttribute(Mr.name) && me(Mr.name) && Be.removeAttribute(Mr.name);
        }), ae(Yr.attributes, function(Mr) {
          me(Mr.name) && Be.setAttribute(Mr.name, Mr.value);
        });
      }
      function xe(Be, Yr) {
        for (var Mr = Lr(Yr), Dr = 0; Dr < Mr.length; Dr++) {
          var Xr = Mr[Dr];
          try {
            if (Xr.isInlineSwap(Be))
              return !0;
          } catch (Fr) {
            y(Fr);
          }
        }
        return Be === "outerHTML";
      }
      function ye(Be, Yr, Mr) {
        var Dr = "#" + Q(Yr, "id"), Xr = "outerHTML";
        Be === "true" || (Be.indexOf(":") > 0 ? (Xr = Be.substr(0, Be.indexOf(":")), Dr = Be.substr(Be.indexOf(":") + 1, Be.length)) : Xr = Be);
        var Fr = te().querySelectorAll(Dr);
        return Fr ? (ae(Fr, function(Ur) {
          var Br, jr = Yr.cloneNode(!0);
          Br = te().createDocumentFragment(), Br.appendChild(jr), xe(Xr, Ur) || (Br = jr);
          var _r = { shouldSwap: !0, target: Ur, fragment: Br };
          fe(Ur, "htmx:oobBeforeSwap", _r) && (Ur = _r.target, _r.shouldSwap && De(Xr, Ur, Ur, Br, Mr), ae(Mr.elts, function(Qr) {
            fe(Qr, "htmx:oobAfterSwap", _r);
          }));
        }), Yr.parentNode.removeChild(Yr)) : (Yr.parentNode.removeChild(Yr), ue(te().body, "htmx:oobErrorNoTarget", { content: Yr })), Be;
      }
      function be(Be, Yr, Mr) {
        var Dr = re(Be, "hx-select-oob");
        if (Dr) {
          var Xr = Dr.split(",");
          for (let _r = 0; _r < Xr.length; _r++) {
            var Fr = Xr[_r].split(":", 2), Ur = Fr[0].trim();
            Ur.indexOf("#") === 0 && (Ur = Ur.substring(1));
            var Br = Fr[1] || "true", jr = Yr.querySelector("#" + Ur);
            jr && ye(Br, jr, Mr);
          }
        }
        ae(f(Yr, "[hx-swap-oob], [data-hx-swap-oob]"), function(_r) {
          var Qr = ee(_r, "hx-swap-oob");
          Qr != null && ye(Qr, _r, Mr);
        });
      }
      function we(Be) {
        ae(f(Be, "[hx-preserve], [data-hx-preserve]"), function(Yr) {
          var Mr = ee(Yr, "id"), Dr = te().getElementById(Mr);
          Dr != null && Yr.parentNode.replaceChild(Dr, Yr);
        });
      }
      function Se(Be, Yr, Mr) {
        ae(Yr.querySelectorAll("[id]"), function(Dr) {
          var Xr = Q(Dr, "id");
          if (Xr && Xr.length > 0) {
            var Fr = Xr.replace("'", "\\'"), Ur = Dr.tagName.replace(":", "\\:"), Br = Be.querySelector(Ur + "[id='" + Fr + "']");
            if (Br && Br !== Be) {
              var jr = Dr.cloneNode();
              pe(Dr, Br), Mr.tasks.push(function() {
                pe(Dr, jr);
              });
            }
          }
        });
      }
      function Ee(Be) {
        return function() {
          n(Be, Y.config.addedClass), Pt(Be), Ct(Be), Ce(Be), fe(Be, "htmx:load");
        };
      }
      function Ce(Be) {
        var Yr = "[autofocus]", Mr = h(Be, Yr) ? Be : Be.querySelector(Yr);
        Mr != null && Mr.focus();
      }
      function a(Be, Yr, Mr, Dr) {
        for (Se(Be, Mr, Dr); Mr.childNodes.length > 0; ) {
          var Xr = Mr.firstChild;
          B(Xr, Y.config.addedClass), Be.insertBefore(Xr, Yr), Xr.nodeType !== Node.TEXT_NODE && Xr.nodeType !== Node.COMMENT_NODE && Dr.tasks.push(Ee(Xr));
        }
      }
      function Te(Be, Yr) {
        for (var Mr = 0; Mr < Be.length; )
          Yr = (Yr << 5) - Yr + Be.charCodeAt(Mr++) | 0;
        return Yr;
      }
      function Re(Be) {
        var Yr = 0;
        if (Be.attributes)
          for (var Mr = 0; Mr < Be.attributes.length; Mr++) {
            var Dr = Be.attributes[Mr];
            Dr.value && (Yr = Te(Dr.name, Yr), Yr = Te(Dr.value, Yr));
          }
        return Yr;
      }
      function Oe(Be) {
        var Yr = ie(Be);
        if (Yr.onHandlers) {
          for (let Mr = 0; Mr < Yr.onHandlers.length; Mr++) {
            const Dr = Yr.onHandlers[Mr];
            Be.removeEventListener(Dr.event, Dr.listener);
          }
          delete Yr.onHandlers;
        }
      }
      function qe(Be) {
        var Yr = ie(Be);
        Yr.timeout && clearTimeout(Yr.timeout), Yr.webSocket && Yr.webSocket.close(), Yr.sseEventSource && Yr.sseEventSource.close(), Yr.listenerInfos && ae(Yr.listenerInfos, function(Mr) {
          Mr.on && Mr.on.removeEventListener(Mr.trigger, Mr.listener);
        }), Yr.initHash && (Yr.initHash = null), Oe(Be);
      }
      function m(Be) {
        fe(Be, "htmx:beforeCleanupElement"), qe(Be), Be.children && ae(Be.children, function(Yr) {
          m(Yr);
        });
      }
      function He(Be, Yr, Mr) {
        if (Be.tagName === "BODY")
          return ke(Be, Yr, Mr);
        var Dr, Xr = Be.previousSibling;
        for (a(u(Be), Be, Yr, Mr), Xr == null ? Dr = u(Be).firstChild : Dr = Xr.nextSibling, ie(Be).replacedWith = Dr, Mr.elts = Mr.elts.filter(function(Fr) {
          return Fr != Be;
        }); Dr && Dr !== Be; )
          Dr.nodeType === Node.ELEMENT_NODE && Mr.elts.push(Dr), Dr = Dr.nextElementSibling;
        m(Be), u(Be).removeChild(Be);
      }
      function Le(Be, Yr, Mr) {
        return a(Be, Be.firstChild, Yr, Mr);
      }
      function Ae(Be, Yr, Mr) {
        return a(u(Be), Be, Yr, Mr);
      }
      function Ne(Be, Yr, Mr) {
        return a(Be, null, Yr, Mr);
      }
      function Ie(Be, Yr, Mr) {
        return a(u(Be), Be.nextSibling, Yr, Mr);
      }
      function Pe(Be, Yr, Mr) {
        return m(Be), u(Be).removeChild(Be);
      }
      function ke(Be, Yr, Mr) {
        var Dr = Be.firstChild;
        if (a(Be, Dr, Yr, Mr), Dr) {
          for (; Dr.nextSibling; )
            m(Dr.nextSibling), Be.removeChild(Dr.nextSibling);
          m(Dr), Be.removeChild(Dr);
        }
      }
      function Me(Be, Yr, Mr) {
        var Dr = Mr || re(Be, "hx-select");
        if (Dr) {
          var Xr = te().createDocumentFragment();
          ae(Yr.querySelectorAll(Dr), function(Fr) {
            Xr.appendChild(Fr);
          }), Yr = Xr;
        }
        return Yr;
      }
      function De(Be, Yr, Mr, Dr, Xr) {
        switch (Be) {
          case "none":
            return;
          case "outerHTML":
            He(Mr, Dr, Xr);
            return;
          case "afterbegin":
            Le(Mr, Dr, Xr);
            return;
          case "beforebegin":
            Ae(Mr, Dr, Xr);
            return;
          case "beforeend":
            Ne(Mr, Dr, Xr);
            return;
          case "afterend":
            Ie(Mr, Dr, Xr);
            return;
          case "delete":
            Pe(Mr);
            return;
          default:
            for (var Fr = Lr(Yr), Ur = 0; Ur < Fr.length; Ur++) {
              var Br = Fr[Ur];
              try {
                var jr = Br.handleSwap(Be, Mr, Dr, Xr);
                if (jr) {
                  if (typeof jr.length < "u")
                    for (var _r = 0; _r < jr.length; _r++) {
                      var Qr = jr[_r];
                      Qr.nodeType !== Node.TEXT_NODE && Qr.nodeType !== Node.COMMENT_NODE && Xr.tasks.push(Ee(Qr));
                    }
                  return;
                }
              } catch (Vr) {
                y(Vr);
              }
            }
            Be === "innerHTML" ? ke(Mr, Dr, Xr) : De(Y.config.defaultSwapStyle, Yr, Mr, Dr, Xr);
        }
      }
      function Xe(Be) {
        if (Be.indexOf("<title") > -1) {
          var Yr = Be.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, ""), Mr = Yr.match(/<title(\s[^>]*>|>)([\s\S]*?)<\/title>/im);
          if (Mr)
            return Mr[2];
        }
      }
      function Fe(Be, Yr, Mr, Dr, Xr, Fr) {
        Xr.title = Xe(Dr);
        var Ur = l(Dr);
        if (Ur)
          return be(Mr, Ur, Xr), Ur = Me(Mr, Ur, Fr), we(Ur), De(Be, Mr, Yr, Ur, Xr);
      }
      function Ue(Be, Yr, Mr) {
        var Dr = Be.getResponseHeader(Yr);
        if (Dr.indexOf("{") === 0) {
          var Xr = S(Dr);
          for (var Fr in Xr)
            if (Xr.hasOwnProperty(Fr)) {
              var Ur = Xr[Fr];
              N(Ur) || (Ur = { value: Ur }), fe(Mr, Fr, Ur);
            }
        } else
          for (var Br = Dr.split(","), jr = 0; jr < Br.length; jr++)
            fe(Mr, Br[jr].trim(), []);
      }
      var p = /[\s,]/, Ve = /[_$a-zA-Z]/, je = /[_$a-zA-Z0-9]/, _e = ['"', "'", "/"], ze = /[^\s]/;
      function We(Be) {
        for (var Yr = [], Mr = 0; Mr < Be.length; ) {
          if (Ve.exec(Be.charAt(Mr))) {
            for (var Dr = Mr; je.exec(Be.charAt(Mr + 1)); )
              Mr++;
            Yr.push(Be.substr(Dr, Mr - Dr + 1));
          } else if (_e.indexOf(Be.charAt(Mr)) !== -1) {
            var Xr = Be.charAt(Mr), Dr = Mr;
            for (Mr++; Mr < Be.length && Be.charAt(Mr) !== Xr; )
              Be.charAt(Mr) === "\\" && Mr++, Mr++;
            Yr.push(Be.substr(Dr, Mr - Dr + 1));
          } else {
            var Fr = Be.charAt(Mr);
            Yr.push(Fr);
          }
          Mr++;
        }
        return Yr;
      }
      function $e(Be, Yr, Mr) {
        return Ve.exec(Be.charAt(0)) && Be !== "true" && Be !== "false" && Be !== "this" && Be !== Mr && Yr !== ".";
      }
      function Ge(Be, Yr, Mr) {
        if (Yr[0] === "[") {
          Yr.shift();
          for (var Dr = 1, Xr = " return (function(" + Mr + "){ return (", Fr = null; Yr.length > 0; ) {
            var Ur = Yr[0];
            if (Ur === "]") {
              if (Dr--, Dr === 0) {
                Fr === null && (Xr = Xr + "true"), Yr.shift(), Xr += ")})";
                try {
                  var Br = gr(Be, function() {
                    return Function(Xr)();
                  }, function() {
                    return !0;
                  });
                  return Br.source = Xr, Br;
                } catch (jr) {
                  return ue(te().body, "htmx:syntax:error", { error: jr, source: Xr }), null;
                }
              }
            } else
              Ur === "[" && Dr++;
            $e(Ur, Fr, Mr) ? Xr += "((" + Mr + "." + Ur + ") ? (" + Mr + "." + Ur + ") : (window." + Ur + "))" : Xr = Xr + Ur, Fr = Yr.shift();
          }
        }
      }
      function x(Be, Yr) {
        for (var Mr = ""; Be.length > 0 && !Be[0].match(Yr); )
          Mr += Be.shift();
        return Mr;
      }
      var Je = "input, textarea, select";
      function Ze(Be) {
        var Yr = ee(Be, "hx-trigger"), Mr = [];
        if (Yr) {
          var Dr = We(Yr);
          do {
            x(Dr, ze);
            var Xr = Dr.length, Fr = x(Dr, /[,\[\s]/);
            if (Fr !== "")
              if (Fr === "every") {
                var Ur = { trigger: "every" };
                x(Dr, ze), Ur.pollInterval = d(x(Dr, /[,\[\s]/)), x(Dr, ze);
                var Br = Ge(Be, Dr, "event");
                Br && (Ur.eventFilter = Br), Mr.push(Ur);
              } else if (Fr.indexOf("sse:") === 0)
                Mr.push({ trigger: "sse", sseEvent: Fr.substr(4) });
              else {
                var jr = { trigger: Fr }, Br = Ge(Be, Dr, "event");
                for (Br && (jr.eventFilter = Br); Dr.length > 0 && Dr[0] !== ","; ) {
                  x(Dr, ze);
                  var _r = Dr.shift();
                  if (_r === "changed")
                    jr.changed = !0;
                  else if (_r === "once")
                    jr.once = !0;
                  else if (_r === "consume")
                    jr.consume = !0;
                  else if (_r === "delay" && Dr[0] === ":")
                    Dr.shift(), jr.delay = d(x(Dr, p));
                  else if (_r === "from" && Dr[0] === ":") {
                    Dr.shift();
                    var Qr = x(Dr, p);
                    (Qr === "closest" || Qr === "find" || Qr === "next" || Qr === "previous") && (Dr.shift(), Qr += " " + x(Dr, p)), jr.from = Qr;
                  } else
                    _r === "target" && Dr[0] === ":" ? (Dr.shift(), jr.target = x(Dr, p)) : _r === "throttle" && Dr[0] === ":" ? (Dr.shift(), jr.throttle = d(x(Dr, p))) : _r === "queue" && Dr[0] === ":" ? (Dr.shift(), jr.queue = x(Dr, p)) : (_r === "root" || _r === "threshold") && Dr[0] === ":" ? (Dr.shift(), jr[_r] = x(Dr, p)) : ue(Be, "htmx:syntax:error", { token: Dr.shift() });
                }
                Mr.push(jr);
              }
            Dr.length === Xr && ue(Be, "htmx:syntax:error", { token: Dr.shift() }), x(Dr, ze);
          } while (Dr[0] === "," && Dr.shift());
        }
        return Mr.length > 0 ? Mr : h(Be, "form") ? [{ trigger: "submit" }] : h(Be, 'input[type="button"], input[type="submit"]') ? [{ trigger: "click" }] : h(Be, Je) ? [{ trigger: "change" }] : [{ trigger: "click" }];
      }
      function Ke(Be) {
        ie(Be).cancelled = !0;
      }
      function Ye(Be, Yr, Mr) {
        var Dr = ie(Be);
        Dr.timeout = setTimeout(function() {
          oe(Be) && Dr.cancelled !== !0 && (nt(Mr, Be, Mt("hx:poll:trigger", { triggerSpec: Mr, target: Be })) || Yr(Be), Ye(Be, Yr, Mr));
        }, Mr.pollInterval);
      }
      function Qe(Be) {
        return location.hostname === Be.hostname && Q(Be, "href") && Q(Be, "href").indexOf("#") !== 0;
      }
      function et(Be, Yr, Mr) {
        if (Be.tagName === "A" && Qe(Be) && (Be.target === "" || Be.target === "_self") || Be.tagName === "FORM") {
          Yr.boosted = !0;
          var Dr, Xr;
          if (Be.tagName === "A")
            Dr = "get", Xr = Q(Be, "href");
          else {
            var Fr = Q(Be, "method");
            Dr = Fr ? Fr.toLowerCase() : "get", Xr = Q(Be, "action");
          }
          Mr.forEach(function(Ur) {
            it(Be, function(Br, jr) {
              if (v(Br, Y.config.disableSelector)) {
                m(Br);
                return;
              }
              ce(Dr, Xr, Br, jr);
            }, Yr, Ur, !0);
          });
        }
      }
      function tt(Be, Yr) {
        return !!((Be.type === "submit" || Be.type === "click") && (Yr.tagName === "FORM" || h(Yr, 'input[type="submit"], button') && v(Yr, "form") !== null || Yr.tagName === "A" && Yr.href && (Yr.getAttribute("href") === "#" || Yr.getAttribute("href").indexOf("#") !== 0)));
      }
      function rt(Be, Yr) {
        return ie(Be).boosted && Be.tagName === "A" && Yr.type === "click" && (Yr.ctrlKey || Yr.metaKey);
      }
      function nt(Be, Yr, Mr) {
        var Dr = Be.eventFilter;
        if (Dr)
          try {
            return Dr.call(Yr, Mr) !== !0;
          } catch (Xr) {
            return ue(te().body, "htmx:eventFilter:error", { error: Xr, source: Dr.source }), !0;
          }
        return !1;
      }
      function it(Be, Yr, Mr, Dr, Xr) {
        var Fr = ie(Be), Ur;
        Dr.from ? Ur = W(Be, Dr.from) : Ur = [Be], Dr.changed && Ur.forEach(function(Br) {
          var jr = ie(Br);
          jr.lastValue = Br.value;
        }), ae(Ur, function(Br) {
          var jr = function(_r) {
            if (!oe(Be)) {
              Br.removeEventListener(Dr.trigger, jr);
              return;
            }
            if (!rt(Be, _r) && ((Xr || tt(_r, Be)) && _r.preventDefault(), !nt(Dr, Be, _r))) {
              var Qr = ie(_r);
              if (Qr.triggerSpec = Dr, Qr.handledFor == null && (Qr.handledFor = []), Qr.handledFor.indexOf(Be) < 0) {
                if (Qr.handledFor.push(Be), Dr.consume && _r.stopPropagation(), Dr.target && _r.target && !h(_r.target, Dr.target))
                  return;
                if (Dr.once) {
                  if (Fr.triggeredOnce)
                    return;
                  Fr.triggeredOnce = !0;
                }
                if (Dr.changed) {
                  var Vr = ie(Br);
                  if (Vr.lastValue === Br.value)
                    return;
                  Vr.lastValue = Br.value;
                }
                if (Fr.delayed && clearTimeout(Fr.delayed), Fr.throttle)
                  return;
                Dr.throttle ? Fr.throttle || (Yr(Be, _r), Fr.throttle = setTimeout(function() {
                  Fr.throttle = null;
                }, Dr.throttle)) : Dr.delay ? Fr.delayed = setTimeout(function() {
                  Yr(Be, _r);
                }, Dr.delay) : (fe(Be, "htmx:trigger"), Yr(Be, _r));
              }
            }
          };
          Mr.listenerInfos == null && (Mr.listenerInfos = []), Mr.listenerInfos.push({ trigger: Dr.trigger, listener: jr, on: Br }), Br.addEventListener(Dr.trigger, jr);
        });
      }
      var at = !1, ot = null;
      function st() {
        ot || (ot = function() {
          at = !0;
        }, window.addEventListener("scroll", ot), setInterval(function() {
          at && (at = !1, ae(te().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(Be) {
            lt(Be);
          }));
        }, 200));
      }
      function lt(Be) {
        if (!o(Be, "data-hx-revealed") && P(Be)) {
          Be.setAttribute("data-hx-revealed", "true");
          var Yr = ie(Be);
          Yr.initHash ? fe(Be, "revealed") : Be.addEventListener("htmx:afterProcessNode", function(Mr) {
            fe(Be, "revealed");
          }, { once: !0 });
        }
      }
      function ut(Be, Yr, Mr) {
        for (var Dr = k(Mr), Xr = 0; Xr < Dr.length; Xr++) {
          var Fr = Dr[Xr].split(/:(.+)/);
          Fr[0] === "connect" && ft(Be, Fr[1], 0), Fr[0] === "send" && ht(Be);
        }
      }
      function ft(Be, Yr, Mr) {
        if (oe(Be)) {
          if (Yr.indexOf("/") == 0) {
            var Dr = location.hostname + (location.port ? ":" + location.port : "");
            location.protocol == "https:" ? Yr = "wss://" + Dr + Yr : location.protocol == "http:" && (Yr = "ws://" + Dr + Yr);
          }
          var Xr = Y.createWebSocket(Yr);
          Xr.onerror = function(Fr) {
            ue(Be, "htmx:wsError", { error: Fr, socket: Xr }), ct(Be);
          }, Xr.onclose = function(Fr) {
            if ([1006, 1012, 1013].indexOf(Fr.code) >= 0) {
              var Ur = vt(Mr);
              setTimeout(function() {
                ft(Be, Yr, Mr + 1);
              }, Ur);
            }
          }, Xr.onopen = function(Fr) {
            Mr = 0;
          }, ie(Be).webSocket = Xr, Xr.addEventListener("message", function(Fr) {
            if (!ct(Be)) {
              var Ur = Fr.data;
              C(Be, function($r) {
                Ur = $r.transformResponse(Ur, null, Be);
              });
              for (var Br = T(Be), jr = l(Ur), _r = I(jr.children), Qr = 0; Qr < _r.length; Qr++) {
                var Vr = _r[Qr];
                ye(ee(Vr, "hx-swap-oob") || "true", Vr, Br);
              }
              Wt(Br.tasks);
            }
          });
        }
      }
      function ct(Be) {
        if (!oe(Be))
          return ie(Be).webSocket.close(), !0;
      }
      function ht(Be) {
        var Yr = c(Be, function(Mr) {
          return ie(Mr).webSocket != null;
        });
        Yr ? Be.addEventListener(Ze(Be)[0].trigger, function(Mr) {
          var Dr = ie(Yr).webSocket, Xr = sr(Be, Yr), Fr = nr(Be, "post"), Ur = Fr.errors, Br = Fr.values, jr = xr(Be), _r = se(Br, jr), Qr = lr(_r, Be);
          if (Qr.HEADERS = Xr, Ur && Ur.length > 0) {
            fe(Be, "htmx:validation:halted", Ur);
            return;
          }
          Dr.send(JSON.stringify(Qr)), tt(Mr, Be) && Mr.preventDefault();
        }) : ue(Be, "htmx:noWebSocketSourceError");
      }
      function vt(Be) {
        var Yr = Y.config.wsReconnectDelay;
        if (typeof Yr == "function")
          return Yr(Be);
        if (Yr === "full-jitter") {
          var Mr = Math.min(Be, 6), Dr = 1e3 * Math.pow(2, Mr);
          return Dr * Math.random();
        }
        y('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
      }
      function dt(Be, Yr, Mr) {
        for (var Dr = k(Mr), Xr = 0; Xr < Dr.length; Xr++) {
          var Fr = Dr[Xr].split(/:(.+)/);
          Fr[0] === "connect" && gt(Be, Fr[1]), Fr[0] === "swap" && mt(Be, Fr[1]);
        }
      }
      function gt(Be, Yr) {
        var Mr = Y.createEventSource(Yr);
        Mr.onerror = function(Dr) {
          ue(Be, "htmx:sseError", { error: Dr, source: Mr }), xt(Be);
        }, ie(Be).sseEventSource = Mr;
      }
      function mt(Be, Yr) {
        var Mr = c(Be, yt);
        if (Mr) {
          var Dr = ie(Mr).sseEventSource, Xr = function(Fr) {
            if (!xt(Mr)) {
              if (!oe(Be)) {
                Dr.removeEventListener(Yr, Xr);
                return;
              }
              var Ur = Fr.data;
              C(Be, function(Qr) {
                Ur = Qr.transformResponse(Ur, null, Be);
              });
              var Br = fr(Be), jr = ge(Be), _r = T(Be);
              Fe(Br.swapStyle, jr, Be, Ur, _r), Wt(_r.tasks), fe(Be, "htmx:sseMessage", Fr);
            }
          };
          ie(Be).sseListener = Xr, Dr.addEventListener(Yr, Xr);
        } else
          ue(Be, "htmx:noSSESourceError");
      }
      function pt(Be, Yr, Mr) {
        var Dr = c(Be, yt);
        if (Dr) {
          var Xr = ie(Dr).sseEventSource, Fr = function() {
            xt(Dr) || (oe(Be) ? Yr(Be) : Xr.removeEventListener(Mr, Fr));
          };
          ie(Be).sseListener = Fr, Xr.addEventListener(Mr, Fr);
        } else
          ue(Be, "htmx:noSSESourceError");
      }
      function xt(Be) {
        if (!oe(Be))
          return ie(Be).sseEventSource.close(), !0;
      }
      function yt(Be) {
        return ie(Be).sseEventSource != null;
      }
      function bt(Be, Yr, Mr, Dr) {
        var Xr = function() {
          Mr.loaded || (Mr.loaded = !0, Yr(Be));
        };
        Dr ? setTimeout(Xr, Dr) : Xr();
      }
      function wt(Be, Yr, Mr) {
        var Dr = !1;
        return ae(b, function(Xr) {
          if (o(Be, "hx-" + Xr)) {
            var Fr = ee(Be, "hx-" + Xr);
            Dr = !0, Yr.path = Fr, Yr.verb = Xr, Mr.forEach(function(Ur) {
              St(Be, Ur, Yr, function(Br, jr) {
                if (v(Br, Y.config.disableSelector)) {
                  m(Br);
                  return;
                }
                ce(Xr, Fr, Br, jr);
              });
            });
          }
        }), Dr;
      }
      function St(Be, Yr, Mr, Dr) {
        if (Yr.sseEvent)
          pt(Be, Dr, Yr.sseEvent);
        else if (Yr.trigger === "revealed")
          st(), it(Be, Dr, Mr, Yr), lt(Be);
        else if (Yr.trigger === "intersect") {
          var Xr = {};
          Yr.root && (Xr.root = le(Be, Yr.root)), Yr.threshold && (Xr.threshold = parseFloat(Yr.threshold));
          var Fr = new IntersectionObserver(function(Ur) {
            for (var Br = 0; Br < Ur.length; Br++) {
              var jr = Ur[Br];
              if (jr.isIntersecting) {
                fe(Be, "intersect");
                break;
              }
            }
          }, Xr);
          Fr.observe(Be), it(Be, Dr, Mr, Yr);
        } else
          Yr.trigger === "load" ? nt(Yr, Be, Mt("load", { elt: Be })) || bt(Be, Dr, Mr, Yr.delay) : Yr.pollInterval ? (Mr.polling = !0, Ye(Be, Dr, Yr)) : it(Be, Dr, Mr, Yr);
      }
      function Et(Be) {
        if (Y.config.allowScriptTags && (Be.type === "text/javascript" || Be.type === "module" || Be.type === "")) {
          var Yr = te().createElement("script");
          ae(Be.attributes, function(Dr) {
            Yr.setAttribute(Dr.name, Dr.value);
          }), Yr.textContent = Be.textContent, Yr.async = !1, Y.config.inlineScriptNonce && (Yr.nonce = Y.config.inlineScriptNonce);
          var Mr = Be.parentElement;
          try {
            Mr.insertBefore(Yr, Be);
          } catch (Dr) {
            y(Dr);
          } finally {
            Be.parentElement && Be.parentElement.removeChild(Be);
          }
        }
      }
      function Ct(Be) {
        h(Be, "script") && Et(Be), ae(f(Be, "script"), function(Yr) {
          Et(Yr);
        });
      }
      function Tt() {
        return document.querySelector("[hx-boost], [data-hx-boost]");
      }
      function Rt(Be) {
        var Yr = null, Mr = [];
        if (document.evaluate)
          for (var Dr = document.evaluate('//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") ]]', Be); Yr = Dr.iterateNext(); )
            Mr.push(Yr);
        else
          for (var Xr = document.getElementsByTagName("*"), Fr = 0; Fr < Xr.length; Fr++)
            for (var Ur = Xr[Fr].attributes, Br = 0; Br < Ur.length; Br++) {
              var jr = Ur[Br].name;
              (g(jr, "hx-on:") || g(jr, "data-hx-on:")) && Mr.push(Xr[Fr]);
            }
        return Mr;
      }
      function Ot(Be) {
        if (Be.querySelectorAll) {
          var Yr = Tt() ? ", a" : "", Mr = Be.querySelectorAll(w + Yr + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
          return Mr;
        } else
          return [];
      }
      function qt(Be) {
        var Yr = s("#" + Q(Be, "form")) || v(Be, "form");
        if (Yr) {
          var Mr = function(Dr) {
            var Xr = v(Dr.target, "button, input[type='submit']");
            if (Xr !== null) {
              var Fr = ie(Yr);
              Fr.lastButtonClicked = Xr;
            }
          };
          Be.addEventListener("click", Mr), Be.addEventListener("focusin", Mr), Be.addEventListener("focusout", function(Dr) {
            var Xr = ie(Yr);
            Xr.lastButtonClicked = null;
          });
        }
      }
      function Ht(Be) {
        var Yr = We(Be), Mr = 0;
        for (let Dr = 0; Dr < Yr.length; Dr++) {
          const Xr = Yr[Dr];
          Xr === "{" ? Mr++ : Xr === "}" && Mr--;
        }
        return Mr;
      }
      function Lt(Be, Yr, Mr) {
        var Dr = ie(Be);
        Dr.onHandlers = [];
        var Xr, Fr = function(Ur) {
          return gr(Be, function() {
            Xr || (Xr = new Function("event", Mr)), Xr.call(Be, Ur);
          });
        };
        Be.addEventListener(Yr, Fr), Dr.onHandlers.push({ event: Yr, listener: Fr });
      }
      function At(Be) {
        var Yr = ee(Be, "hx-on");
        if (Yr) {
          for (var Mr = {}, Dr = Yr.split(`
`), Xr = null, Fr = 0; Dr.length > 0; ) {
            var Ur = Dr.shift(), Br = Ur.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
            Fr === 0 && Br ? (Ur.split(":"), Xr = Br[1].slice(0, -1), Mr[Xr] = Br[2]) : Mr[Xr] += Ur, Fr += Ht(Ur);
          }
          for (var jr in Mr)
            Lt(Be, jr, Mr[jr]);
        }
      }
      function Nt(Be) {
        Oe(Be);
        for (var Yr = 0; Yr < Be.attributes.length; Yr++) {
          var Mr = Be.attributes[Yr].name, Dr = Be.attributes[Yr].value;
          if (g(Mr, "hx-on:") || g(Mr, "data-hx-on:")) {
            let Xr = Mr.slice(Mr.indexOf(":") + 1);
            g(Xr, ":") && (Xr = "htmx" + Xr), Lt(Be, Xr, Dr);
          }
        }
      }
      function It(Be) {
        if (v(Be, Y.config.disableSelector)) {
          m(Be);
          return;
        }
        var Yr = ie(Be);
        if (Yr.initHash !== Re(Be)) {
          qe(Be), Yr.initHash = Re(Be), At(Be), fe(Be, "htmx:beforeProcessNode"), Be.value && (Yr.lastValue = Be.value);
          var Mr = Ze(Be), Dr = wt(Be, Yr, Mr);
          Dr || (re(Be, "hx-boost") === "true" ? et(Be, Yr, Mr) : o(Be, "hx-trigger") && Mr.forEach(function(Ur) {
            St(Be, Ur, Yr, function() {
            });
          })), (Be.tagName === "FORM" || Q(Be, "type") === "submit" && o(Be, "form")) && qt(Be);
          var Xr = ee(Be, "hx-sse");
          Xr && dt(Be, Yr, Xr);
          var Fr = ee(Be, "hx-ws");
          Fr && ut(Be, Yr, Fr), fe(Be, "htmx:afterProcessNode");
        }
      }
      function Pt(Be) {
        if (Be = s(Be), v(Be, Y.config.disableSelector)) {
          m(Be);
          return;
        }
        It(Be), ae(Ot(Be), function(Yr) {
          It(Yr);
        }), ae(Rt(Be), Nt);
      }
      function kt(Be) {
        return Be.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function Mt(Be, Yr) {
        var Mr;
        return window.CustomEvent && typeof window.CustomEvent == "function" ? Mr = new CustomEvent(Be, { bubbles: !0, cancelable: !0, detail: Yr }) : (Mr = te().createEvent("CustomEvent"), Mr.initCustomEvent(Be, !0, !0, Yr)), Mr;
      }
      function ue(Be, Yr, Mr) {
        fe(Be, Yr, se({ error: Yr }, Mr));
      }
      function Dt(Be) {
        return Be === "htmx:afterProcessNode";
      }
      function C(Be, Yr) {
        ae(Lr(Be), function(Mr) {
          try {
            Yr(Mr);
          } catch (Dr) {
            y(Dr);
          }
        });
      }
      function y(Be) {
        console.error ? console.error(Be) : console.log && console.log("ERROR: ", Be);
      }
      function fe(Be, Yr, Mr) {
        Be = s(Be), Mr == null && (Mr = {}), Mr.elt = Be;
        var Dr = Mt(Yr, Mr);
        Y.logger && !Dt(Yr) && Y.logger(Be, Yr, Mr), Mr.error && (y(Mr.error), fe(Be, "htmx:error", { errorInfo: Mr }));
        var Xr = Be.dispatchEvent(Dr), Fr = kt(Yr);
        if (Xr && Fr !== Yr) {
          var Ur = Mt(Fr, Dr.detail);
          Xr = Xr && Be.dispatchEvent(Ur);
        }
        return C(Be, function(Br) {
          Xr = Xr && Br.onEvent(Yr, Dr) !== !1 && !Dr.defaultPrevented;
        }), Xr;
      }
      var Xt = location.pathname + location.search;
      function Ft() {
        var Be = te().querySelector("[hx-history-elt],[data-hx-history-elt]");
        return Be || te().body;
      }
      function Ut(Be, Yr, Mr, Dr) {
        if (M()) {
          Be = D(Be);
          for (var Xr = S(localStorage.getItem("htmx-history-cache")) || [], Fr = 0; Fr < Xr.length; Fr++)
            if (Xr[Fr].url === Be) {
              Xr.splice(Fr, 1);
              break;
            }
          var Ur = { url: Be, content: Yr, title: Mr, scroll: Dr };
          for (fe(te().body, "htmx:historyItemCreated", { item: Ur, cache: Xr }), Xr.push(Ur); Xr.length > Y.config.historyCacheSize; )
            Xr.shift();
          for (; Xr.length > 0; )
            try {
              localStorage.setItem("htmx-history-cache", JSON.stringify(Xr));
              break;
            } catch (Br) {
              ue(te().body, "htmx:historyCacheError", { cause: Br, cache: Xr }), Xr.shift();
            }
        }
      }
      function Bt(Be) {
        if (!M())
          return null;
        Be = D(Be);
        for (var Yr = S(localStorage.getItem("htmx-history-cache")) || [], Mr = 0; Mr < Yr.length; Mr++)
          if (Yr[Mr].url === Be)
            return Yr[Mr];
        return null;
      }
      function Vt(Be) {
        var Yr = Y.config.requestClass, Mr = Be.cloneNode(!0);
        return ae(f(Mr, "." + Yr), function(Dr) {
          n(Dr, Yr);
        }), Mr.innerHTML;
      }
      function jt() {
        var Be = Ft(), Yr = Xt || location.pathname + location.search, Mr;
        try {
          Mr = te().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
        } catch {
          Mr = te().querySelector('[hx-history="false"],[data-hx-history="false"]');
        }
        Mr || (fe(te().body, "htmx:beforeHistorySave", { path: Yr, historyElt: Be }), Ut(Yr, Vt(Be), te().title, window.scrollY)), Y.config.historyEnabled && history.replaceState({ htmx: !0 }, te().title, window.location.href);
      }
      function _t(Be) {
        Y.config.getCacheBusterParam && (Be = Be.replace(/org\.htmx\.cache-buster=[^&]*&?/, ""), (_(Be, "&") || _(Be, "?")) && (Be = Be.slice(0, -1))), Y.config.historyEnabled && history.pushState({ htmx: !0 }, "", Be), Xt = Be;
      }
      function zt(Be) {
        Y.config.historyEnabled && history.replaceState({ htmx: !0 }, "", Be), Xt = Be;
      }
      function Wt(Be) {
        ae(Be, function(Yr) {
          Yr.call();
        });
      }
      function $t(Be) {
        var Yr = new XMLHttpRequest(), Mr = { path: Be, xhr: Yr };
        fe(te().body, "htmx:historyCacheMiss", Mr), Yr.open("GET", Be, !0), Yr.setRequestHeader("HX-History-Restore-Request", "true"), Yr.onload = function() {
          if (this.status >= 200 && this.status < 400) {
            fe(te().body, "htmx:historyCacheMissLoad", Mr);
            var Dr = l(this.response);
            Dr = Dr.querySelector("[hx-history-elt],[data-hx-history-elt]") || Dr;
            var Xr = Ft(), Fr = T(Xr), Ur = Xe(this.response);
            if (Ur) {
              var Br = E("title");
              Br ? Br.innerHTML = Ur : window.document.title = Ur;
            }
            ke(Xr, Dr, Fr), Wt(Fr.tasks), Xt = Be, fe(te().body, "htmx:historyRestore", { path: Be, cacheMiss: !0, serverResponse: this.response });
          } else
            ue(te().body, "htmx:historyCacheMissLoadError", Mr);
        }, Yr.send();
      }
      function Gt(Be) {
        jt(), Be = Be || location.pathname + location.search;
        var Yr = Bt(Be);
        if (Yr) {
          var Mr = l(Yr.content), Dr = Ft(), Xr = T(Dr);
          ke(Dr, Mr, Xr), Wt(Xr.tasks), document.title = Yr.title, setTimeout(function() {
            window.scrollTo(0, Yr.scroll);
          }, 0), Xt = Be, fe(te().body, "htmx:historyRestore", { path: Be, item: Yr });
        } else
          Y.config.refreshOnHistoryMiss ? window.location.reload(!0) : $t(Be);
      }
      function Jt(Be) {
        var Yr = ve(Be, "hx-indicator");
        return Yr == null && (Yr = [Be]), ae(Yr, function(Mr) {
          var Dr = ie(Mr);
          Dr.requestCount = (Dr.requestCount || 0) + 1, Mr.classList.add.call(Mr.classList, Y.config.requestClass);
        }), Yr;
      }
      function Zt(Be) {
        var Yr = ve(Be, "hx-disabled-elt");
        return Yr == null && (Yr = []), ae(Yr, function(Mr) {
          var Dr = ie(Mr);
          Dr.requestCount = (Dr.requestCount || 0) + 1, Mr.setAttribute("disabled", "");
        }), Yr;
      }
      function Kt(Be, Yr) {
        ae(Be, function(Mr) {
          var Dr = ie(Mr);
          Dr.requestCount = (Dr.requestCount || 0) - 1, Dr.requestCount === 0 && Mr.classList.remove.call(Mr.classList, Y.config.requestClass);
        }), ae(Yr, function(Mr) {
          var Dr = ie(Mr);
          Dr.requestCount = (Dr.requestCount || 0) - 1, Dr.requestCount === 0 && Mr.removeAttribute("disabled");
        });
      }
      function Yt(Be, Yr) {
        for (var Mr = 0; Mr < Be.length; Mr++) {
          var Dr = Be[Mr];
          if (Dr.isSameNode(Yr))
            return !0;
        }
        return !1;
      }
      function Qt(Be) {
        return Be.name === "" || Be.name == null || Be.disabled || Be.type === "button" || Be.type === "submit" || Be.tagName === "image" || Be.tagName === "reset" || Be.tagName === "file" ? !1 : Be.type === "checkbox" || Be.type === "radio" ? Be.checked : !0;
      }
      function er(Be, Yr, Mr) {
        if (Be != null && Yr != null) {
          var Dr = Mr[Be];
          Dr === void 0 ? Mr[Be] = Yr : Array.isArray(Dr) ? Array.isArray(Yr) ? Mr[Be] = Dr.concat(Yr) : Dr.push(Yr) : Array.isArray(Yr) ? Mr[Be] = [Dr].concat(Yr) : Mr[Be] = [Dr, Yr];
        }
      }
      function tr(Be, Yr, Mr, Dr, Xr) {
        if (!(Dr == null || Yt(Be, Dr))) {
          if (Be.push(Dr), Qt(Dr)) {
            var Fr = Q(Dr, "name"), Ur = Dr.value;
            Dr.multiple && (Ur = I(Dr.querySelectorAll("option:checked")).map(function(jr) {
              return jr.value;
            })), Dr.files && (Ur = I(Dr.files)), er(Fr, Ur, Yr), Xr && rr(Dr, Mr);
          }
          if (h(Dr, "form")) {
            var Br = Dr.elements;
            ae(Br, function(jr) {
              tr(Be, Yr, Mr, jr, Xr);
            });
          }
        }
      }
      function rr(Be, Yr) {
        Be.willValidate && (fe(Be, "htmx:validation:validate"), Be.checkValidity() || (Yr.push({ elt: Be, message: Be.validationMessage, validity: Be.validity }), fe(Be, "htmx:validation:failed", { message: Be.validationMessage, validity: Be.validity })));
      }
      function nr(Be, Yr) {
        var Mr = [], Dr = {}, Xr = {}, Fr = [], Ur = ie(Be), Br = h(Be, "form") && Be.noValidate !== !0 || ee(Be, "hx-validate") === "true";
        if (Ur.lastButtonClicked && (Br = Br && Ur.lastButtonClicked.formNoValidate !== !0), Yr !== "get" && tr(Mr, Xr, Fr, v(Be, "form"), Br), tr(Mr, Dr, Fr, Be, Br), Ur.lastButtonClicked || Be.tagName === "BUTTON" || Be.tagName === "INPUT" && Q(Be, "type") === "submit") {
          var jr = Ur.lastButtonClicked || Be, _r = Q(jr, "name");
          er(_r, jr.value, Xr);
        }
        var Qr = ve(Be, "hx-include");
        return ae(Qr, function(Vr) {
          tr(Mr, Dr, Fr, Vr, Br), h(Vr, "form") || ae(Vr.querySelectorAll(Je), function($r) {
            tr(Mr, Dr, Fr, $r, Br);
          });
        }), Dr = se(Dr, Xr), { errors: Fr, values: Dr };
      }
      function ir(Be, Yr, Mr) {
        Be !== "" && (Be += "&"), String(Mr) === "[object Object]" && (Mr = JSON.stringify(Mr));
        var Dr = encodeURIComponent(Mr);
        return Be += encodeURIComponent(Yr) + "=" + Dr, Be;
      }
      function ar(Be) {
        var Yr = "";
        for (var Mr in Be)
          if (Be.hasOwnProperty(Mr)) {
            var Dr = Be[Mr];
            Array.isArray(Dr) ? ae(Dr, function(Xr) {
              Yr = ir(Yr, Mr, Xr);
            }) : Yr = ir(Yr, Mr, Dr);
          }
        return Yr;
      }
      function or(Be) {
        var Yr = new FormData();
        for (var Mr in Be)
          if (Be.hasOwnProperty(Mr)) {
            var Dr = Be[Mr];
            Array.isArray(Dr) ? ae(Dr, function(Xr) {
              Yr.append(Mr, Xr);
            }) : Yr.append(Mr, Dr);
          }
        return Yr;
      }
      function sr(Be, Yr, Mr) {
        var Dr = { "HX-Request": "true", "HX-Trigger": Q(Be, "id"), "HX-Trigger-Name": Q(Be, "name"), "HX-Target": ee(Yr, "id"), "HX-Current-URL": te().location.href };
        return dr(Be, "hx-headers", !1, Dr), Mr !== void 0 && (Dr["HX-Prompt"] = Mr), ie(Be).boosted && (Dr["HX-Boosted"] = "true"), Dr;
      }
      function lr(Be, Yr) {
        var Mr = re(Yr, "hx-params");
        if (Mr) {
          if (Mr === "none")
            return {};
          if (Mr === "*")
            return Be;
          if (Mr.indexOf("not ") === 0)
            return ae(Mr.substr(4).split(","), function(Xr) {
              Xr = Xr.trim(), delete Be[Xr];
            }), Be;
          var Dr = {};
          return ae(Mr.split(","), function(Xr) {
            Xr = Xr.trim(), Dr[Xr] = Be[Xr];
          }), Dr;
        } else
          return Be;
      }
      function ur(Be) {
        return Q(Be, "href") && Q(Be, "href").indexOf("#") >= 0;
      }
      function fr(Be, Yr) {
        var Mr = Yr || re(Be, "hx-swap"), Dr = { swapStyle: ie(Be).boosted ? "innerHTML" : Y.config.defaultSwapStyle, swapDelay: Y.config.defaultSwapDelay, settleDelay: Y.config.defaultSettleDelay };
        if (ie(Be).boosted && !ur(Be) && (Dr.show = "top"), Mr) {
          var Xr = k(Mr);
          if (Xr.length > 0)
            for (var Fr = 0; Fr < Xr.length; Fr++) {
              var Ur = Xr[Fr];
              if (Ur.indexOf("swap:") === 0)
                Dr.swapDelay = d(Ur.substr(5));
              else if (Ur.indexOf("settle:") === 0)
                Dr.settleDelay = d(Ur.substr(7));
              else if (Ur.indexOf("transition:") === 0)
                Dr.transition = Ur.substr(11) === "true";
              else if (Ur.indexOf("ignoreTitle:") === 0)
                Dr.ignoreTitle = Ur.substr(12) === "true";
              else if (Ur.indexOf("scroll:") === 0) {
                var Br = Ur.substr(7), jr = Br.split(":"), _r = jr.pop(), Qr = jr.length > 0 ? jr.join(":") : null;
                Dr.scroll = _r, Dr.scrollTarget = Qr;
              } else if (Ur.indexOf("show:") === 0) {
                var Vr = Ur.substr(5), jr = Vr.split(":"), $r = jr.pop(), Qr = jr.length > 0 ? jr.join(":") : null;
                Dr.show = $r, Dr.showTarget = Qr;
              } else if (Ur.indexOf("focus-scroll:") === 0) {
                var tn = Ur.substr(13);
                Dr.focusScroll = tn == "true";
              } else
                Fr == 0 ? Dr.swapStyle = Ur : y("Unknown modifier in hx-swap: " + Ur);
            }
        }
        return Dr;
      }
      function cr(Be) {
        return re(Be, "hx-encoding") === "multipart/form-data" || h(Be, "form") && Q(Be, "enctype") === "multipart/form-data";
      }
      function hr(Be, Yr, Mr) {
        var Dr = null;
        return C(Yr, function(Xr) {
          Dr == null && (Dr = Xr.encodeParameters(Be, Mr, Yr));
        }), Dr ?? (cr(Yr) ? or(Mr) : ar(Mr));
      }
      function T(Be) {
        return { tasks: [], elts: [Be] };
      }
      function vr(Be, Yr) {
        var Mr = Be[0], Dr = Be[Be.length - 1];
        if (Yr.scroll) {
          var Xr = null;
          Yr.scrollTarget && (Xr = le(Mr, Yr.scrollTarget)), Yr.scroll === "top" && (Mr || Xr) && (Xr = Xr || Mr, Xr.scrollTop = 0), Yr.scroll === "bottom" && (Dr || Xr) && (Xr = Xr || Dr, Xr.scrollTop = Xr.scrollHeight);
        }
        if (Yr.show) {
          var Xr = null;
          if (Yr.showTarget) {
            var Fr = Yr.showTarget;
            Yr.showTarget === "window" && (Fr = "body"), Xr = le(Mr, Fr);
          }
          Yr.show === "top" && (Mr || Xr) && (Xr = Xr || Mr, Xr.scrollIntoView({ block: "start", behavior: Y.config.scrollBehavior })), Yr.show === "bottom" && (Dr || Xr) && (Xr = Xr || Dr, Xr.scrollIntoView({ block: "end", behavior: Y.config.scrollBehavior }));
        }
      }
      function dr(Be, Yr, Mr, Dr) {
        if (Dr == null && (Dr = {}), Be == null)
          return Dr;
        var Xr = ee(Be, Yr);
        if (Xr) {
          var Fr = Xr.trim(), Ur = Mr;
          if (Fr === "unset")
            return null;
          Fr.indexOf("javascript:") === 0 ? (Fr = Fr.substr(11), Ur = !0) : Fr.indexOf("js:") === 0 && (Fr = Fr.substr(3), Ur = !0), Fr.indexOf("{") !== 0 && (Fr = "{" + Fr + "}");
          var Br;
          Ur ? Br = gr(Be, function() {
            return Function("return (" + Fr + ")")();
          }, {}) : Br = S(Fr);
          for (var jr in Br)
            Br.hasOwnProperty(jr) && Dr[jr] == null && (Dr[jr] = Br[jr]);
        }
        return dr(u(Be), Yr, Mr, Dr);
      }
      function gr(Be, Yr, Mr) {
        return Y.config.allowEval ? Yr() : (ue(Be, "htmx:evalDisallowedError"), Mr);
      }
      function mr(Be, Yr) {
        return dr(Be, "hx-vars", !0, Yr);
      }
      function pr(Be, Yr) {
        return dr(Be, "hx-vals", !1, Yr);
      }
      function xr(Be) {
        return se(mr(Be), pr(Be));
      }
      function yr(Be, Yr, Mr) {
        if (Mr !== null)
          try {
            Be.setRequestHeader(Yr, Mr);
          } catch {
            Be.setRequestHeader(Yr, encodeURIComponent(Mr)), Be.setRequestHeader(Yr + "-URI-AutoEncoded", "true");
          }
      }
      function br(Be) {
        if (Be.responseURL && typeof URL < "u")
          try {
            var Yr = new URL(Be.responseURL);
            return Yr.pathname + Yr.search;
          } catch {
            ue(te().body, "htmx:badResponseUrl", { url: Be.responseURL });
          }
      }
      function R(Be, Yr) {
        return Be.getAllResponseHeaders().match(Yr);
      }
      function wr(Be, Yr, Mr) {
        return Be = Be.toLowerCase(), Mr ? Mr instanceof Element || L(Mr, "String") ? ce(Be, Yr, null, null, { targetOverride: s(Mr), returnPromise: !0 }) : ce(Be, Yr, s(Mr.source), Mr.event, { handler: Mr.handler, headers: Mr.headers, values: Mr.values, targetOverride: s(Mr.target), swapOverride: Mr.swap, returnPromise: !0 }) : ce(Be, Yr, null, null, { returnPromise: !0 });
      }
      function Sr(Be) {
        for (var Yr = []; Be; )
          Yr.push(Be), Be = Be.parentElement;
        return Yr;
      }
      function Er(Be, Yr, Mr) {
        var Dr, Xr;
        if (typeof URL == "function") {
          Xr = new URL(Yr, document.location.href);
          var Fr = document.location.origin;
          Dr = Fr === Xr.origin;
        } else
          Xr = Yr, Dr = g(Yr, document.location.origin);
        return Y.config.selfRequestsOnly && !Dr ? !1 : fe(Be, "htmx:validateUrl", se({ url: Xr, sameHost: Dr }, Mr));
      }
      function ce(Be, Yr, Mr, Dr, Xr, Fr) {
        var Ur = null, Br = null;
        if (Xr = Xr ?? {}, Xr.returnPromise && typeof Promise < "u")
          var jr = new Promise(function(ln, un) {
            Ur = ln, Br = un;
          });
        Mr == null && (Mr = te().body);
        var _r = Xr.handler || Tr;
        if (!oe(Mr))
          return ne(Ur), jr;
        var Qr = Xr.targetOverride || ge(Mr);
        if (Qr == null || Qr == he)
          return ue(Mr, "htmx:targetError", { target: ee(Mr, "hx-target") }), ne(Br), jr;
        var Vr = ie(Mr), $r = Vr.lastButtonClicked;
        if ($r) {
          var tn = Q($r, "formaction");
          tn != null && (Yr = tn);
          var gn = Q($r, "formmethod");
          gn != null && (Be = gn);
        }
        if (!Fr) {
          var xn = function() {
            return ce(Be, Yr, Mr, Dr, Xr, !0);
          }, yn = { target: Qr, elt: Mr, path: Yr, verb: Be, triggeringEvent: Dr, etc: Xr, issueRequest: xn };
          if (fe(Mr, "htmx:confirm", yn) === !1)
            return ne(Ur), jr;
        }
        var nn = Mr, rn = re(Mr, "hx-sync"), an = null, bn = !1;
        if (rn) {
          var qn = rn.split(":"), Zr = qn[0].trim();
          if (Zr === "this" ? nn = de(Mr, "hx-sync") : nn = le(Mr, Zr), rn = (qn[1] || "drop").trim(), Vr = ie(nn), rn === "drop" && Vr.xhr && Vr.abortable !== !0)
            return ne(Ur), jr;
          if (rn === "abort") {
            if (Vr.xhr)
              return ne(Ur), jr;
            bn = !0;
          } else if (rn === "replace")
            fe(nn, "htmx:abort");
          else if (rn.indexOf("queue") === 0) {
            var en = rn.split(" ");
            an = (en[1] || "last").trim();
          }
        }
        if (Vr.xhr)
          if (Vr.abortable)
            fe(nn, "htmx:abort");
          else {
            if (an == null) {
              if (Dr) {
                var fn = ie(Dr);
                fn && fn.triggerSpec && fn.triggerSpec.queue && (an = fn.triggerSpec.queue);
              }
              an == null && (an = "last");
            }
            return Vr.queuedRequests == null && (Vr.queuedRequests = []), an === "first" && Vr.queuedRequests.length === 0 ? Vr.queuedRequests.push(function() {
              ce(Be, Yr, Mr, Dr, Xr);
            }) : an === "all" ? Vr.queuedRequests.push(function() {
              ce(Be, Yr, Mr, Dr, Xr);
            }) : an === "last" && (Vr.queuedRequests = [], Vr.queuedRequests.push(function() {
              ce(Be, Yr, Mr, Dr, Xr);
            })), ne(Ur), jr;
          }
        var zr = new XMLHttpRequest();
        Vr.xhr = zr, Vr.abortable = bn;
        var Jr = function() {
          if (Vr.xhr = null, Vr.abortable = !1, Vr.queuedRequests != null && Vr.queuedRequests.length > 0) {
            var ln = Vr.queuedRequests.shift();
            ln();
          }
        }, wn = re(Mr, "hx-prompt");
        if (wn) {
          var hn = prompt(wn);
          if (hn === null || !fe(Mr, "htmx:prompt", { prompt: hn, target: Qr }))
            return ne(Ur), Jr(), jr;
        }
        var mn = re(Mr, "hx-confirm");
        if (mn && !confirm(mn))
          return ne(Ur), Jr(), jr;
        var Wr = sr(Mr, Qr, hn);
        Xr.headers && (Wr = se(Wr, Xr.headers));
        var pn = nr(Mr, Be), cn = pn.errors, on = pn.values;
        Xr.values && (on = se(on, Xr.values));
        var In = xr(Mr), Ln = se(on, In), dn = lr(Ln, Mr);
        Be !== "get" && !cr(Mr) && (Wr["Content-Type"] = "application/x-www-form-urlencoded"), Y.config.getCacheBusterParam && Be === "get" && (dn["org.htmx.cache-buster"] = Q(Qr, "id") || "true"), (Yr == null || Yr === "") && (Yr = te().location.href);
        var Rn = dr(Mr, "hx-request"), Hn = ie(Mr).boosted, Sn = Y.config.methodsThatUseUrlParams.indexOf(Be) >= 0, Kr = { boosted: Hn, useUrlParams: Sn, parameters: dn, unfilteredParameters: Ln, headers: Wr, target: Qr, verb: Be, errors: cn, withCredentials: Xr.credentials || Rn.credentials || Y.config.withCredentials, timeout: Xr.timeout || Rn.timeout || Y.config.timeout, path: Yr, triggeringEvent: Dr };
        if (!fe(Mr, "htmx:configRequest", Kr))
          return ne(Ur), Jr(), jr;
        if (Yr = Kr.path, Be = Kr.verb, Wr = Kr.headers, dn = Kr.parameters, cn = Kr.errors, Sn = Kr.useUrlParams, cn && cn.length > 0)
          return fe(Mr, "htmx:validation:halted", Kr), ne(Ur), Jr(), jr;
        var An = Yr.split("#"), Yn = An[0], Tn = An[1], sn = Yr;
        if (Sn) {
          sn = Yn;
          var kn = Object.keys(dn).length !== 0;
          kn && (sn.indexOf("?") < 0 ? sn += "?" : sn += "&", sn += ar(dn), Tn && (sn += "#" + Tn));
        }
        if (!Er(Mr, sn, Kr))
          return ue(Mr, "htmx:invalidPath", Kr), ne(Br), jr;
        if (zr.open(Be.toUpperCase(), sn, !0), zr.overrideMimeType("text/html"), zr.withCredentials = Kr.withCredentials, zr.timeout = Kr.timeout, !Rn.noHeaders) {
          for (var On in Wr)
            if (Wr.hasOwnProperty(On)) {
              var Pn = Wr[On];
              yr(zr, On, Pn);
            }
        }
        var Gr = { xhr: zr, target: Qr, requestConfig: Kr, etc: Xr, boosted: Hn, pathInfo: { requestPath: Yr, finalRequestPath: sn, anchor: Tn } };
        if (zr.onload = function() {
          try {
            var ln = Sr(Mr);
            if (Gr.pathInfo.responsePath = br(zr), _r(Mr, Gr), Kt(En, Cn), fe(Mr, "htmx:afterRequest", Gr), fe(Mr, "htmx:afterOnLoad", Gr), !oe(Mr)) {
              for (var un = null; ln.length > 0 && un == null; ) {
                var vn = ln.shift();
                oe(vn) && (un = vn);
              }
              un && (fe(un, "htmx:afterRequest", Gr), fe(un, "htmx:afterOnLoad", Gr));
            }
            ne(Ur), Jr();
          } catch (Nn) {
            throw ue(Mr, "htmx:onLoadError", se({ error: Nn }, Gr)), Nn;
          }
        }, zr.onerror = function() {
          Kt(En, Cn), ue(Mr, "htmx:afterRequest", Gr), ue(Mr, "htmx:sendError", Gr), ne(Br), Jr();
        }, zr.onabort = function() {
          Kt(En, Cn), ue(Mr, "htmx:afterRequest", Gr), ue(Mr, "htmx:sendAbort", Gr), ne(Br), Jr();
        }, zr.ontimeout = function() {
          Kt(En, Cn), ue(Mr, "htmx:afterRequest", Gr), ue(Mr, "htmx:timeout", Gr), ne(Br), Jr();
        }, !fe(Mr, "htmx:beforeRequest", Gr))
          return ne(Ur), Jr(), jr;
        var En = Jt(Mr), Cn = Zt(Mr);
        ae(["loadstart", "loadend", "progress", "abort"], function(ln) {
          ae([zr, zr.upload], function(un) {
            un.addEventListener(ln, function(vn) {
              fe(Mr, "htmx:xhr:" + ln, { lengthComputable: vn.lengthComputable, loaded: vn.loaded, total: vn.total });
            });
          });
        }), fe(Mr, "htmx:beforeSend", Gr);
        var Mn = Sn ? null : hr(zr, Mr, dn);
        return zr.send(Mn), jr;
      }
      function Cr(Be, Yr) {
        var Mr = Yr.xhr, Dr = null, Xr = null;
        if (R(Mr, /HX-Push:/i) ? (Dr = Mr.getResponseHeader("HX-Push"), Xr = "push") : R(Mr, /HX-Push-Url:/i) ? (Dr = Mr.getResponseHeader("HX-Push-Url"), Xr = "push") : R(Mr, /HX-Replace-Url:/i) && (Dr = Mr.getResponseHeader("HX-Replace-Url"), Xr = "replace"), Dr)
          return Dr === "false" ? {} : { type: Xr, path: Dr };
        var Fr = Yr.pathInfo.finalRequestPath, Ur = Yr.pathInfo.responsePath, Br = re(Be, "hx-push-url"), jr = re(Be, "hx-replace-url"), _r = ie(Be).boosted, Qr = null, Vr = null;
        return Br ? (Qr = "push", Vr = Br) : jr ? (Qr = "replace", Vr = jr) : _r && (Qr = "push", Vr = Ur || Fr), Vr ? Vr === "false" ? {} : (Vr === "true" && (Vr = Ur || Fr), Yr.pathInfo.anchor && Vr.indexOf("#") === -1 && (Vr = Vr + "#" + Yr.pathInfo.anchor), { type: Qr, path: Vr }) : {};
      }
      function Tr(Be, Yr) {
        var Mr = Yr.xhr, Dr = Yr.target, Xr = Yr.etc;
        if (Yr.requestConfig, !!fe(Be, "htmx:beforeOnLoad", Yr)) {
          if (R(Mr, /HX-Trigger:/i) && Ue(Mr, "HX-Trigger", Be), R(Mr, /HX-Location:/i)) {
            jt();
            var Fr = Mr.getResponseHeader("HX-Location"), Ur;
            Fr.indexOf("{") === 0 && (Ur = S(Fr), Fr = Ur.path, delete Ur.path), wr("GET", Fr, Ur).then(function() {
              _t(Fr);
            });
            return;
          }
          var Br = R(Mr, /HX-Refresh:/i) && Mr.getResponseHeader("HX-Refresh") === "true";
          if (R(Mr, /HX-Redirect:/i)) {
            location.href = Mr.getResponseHeader("HX-Redirect"), Br && location.reload();
            return;
          }
          if (Br) {
            location.reload();
            return;
          }
          R(Mr, /HX-Retarget:/i) && (Yr.target = te().querySelector(Mr.getResponseHeader("HX-Retarget")));
          var jr = Cr(Be, Yr), _r = Mr.status >= 200 && Mr.status < 400 && Mr.status !== 204, Qr = Mr.response, Vr = Mr.status >= 400, $r = Y.config.ignoreTitle, tn = se({ shouldSwap: _r, serverResponse: Qr, isError: Vr, ignoreTitle: $r }, Yr);
          if (fe(Dr, "htmx:beforeSwap", tn)) {
            if (Dr = tn.target, Qr = tn.serverResponse, Vr = tn.isError, $r = tn.ignoreTitle, Yr.target = Dr, Yr.failed = Vr, Yr.successful = !Vr, tn.shouldSwap) {
              Mr.status === 286 && Ke(Be), C(Be, function(Zr) {
                Qr = Zr.transformResponse(Qr, Mr, Be);
              }), jr.type && jt();
              var gn = Xr.swapOverride;
              R(Mr, /HX-Reswap:/i) && (gn = Mr.getResponseHeader("HX-Reswap"));
              var Ur = fr(Be, gn);
              Ur.hasOwnProperty("ignoreTitle") && ($r = Ur.ignoreTitle), Dr.classList.add(Y.config.swappingClass);
              var xn = null, yn = null, nn = function() {
                try {
                  var Zr = document.activeElement, en = {};
                  try {
                    en = { elt: Zr, start: Zr ? Zr.selectionStart : null, end: Zr ? Zr.selectionEnd : null };
                  } catch {
                  }
                  var fn;
                  R(Mr, /HX-Reselect:/i) && (fn = Mr.getResponseHeader("HX-Reselect"));
                  var zr = T(Dr);
                  if (Fe(Ur.swapStyle, Dr, Be, Qr, zr, fn), en.elt && !oe(en.elt) && Q(en.elt, "id")) {
                    var Jr = document.getElementById(Q(en.elt, "id")), wn = { preventScroll: Ur.focusScroll !== void 0 ? !Ur.focusScroll : !Y.config.defaultFocusScroll };
                    if (Jr) {
                      if (en.start && Jr.setSelectionRange)
                        try {
                          Jr.setSelectionRange(en.start, en.end);
                        } catch {
                        }
                      Jr.focus(wn);
                    }
                  }
                  if (Dr.classList.remove(Y.config.swappingClass), ae(zr.elts, function(Wr) {
                    Wr.classList && Wr.classList.add(Y.config.settlingClass), fe(Wr, "htmx:afterSwap", Yr);
                  }), R(Mr, /HX-Trigger-After-Swap:/i)) {
                    var hn = Be;
                    oe(Be) || (hn = te().body), Ue(Mr, "HX-Trigger-After-Swap", hn);
                  }
                  var mn = function() {
                    if (ae(zr.tasks, function(on) {
                      on.call();
                    }), ae(zr.elts, function(on) {
                      on.classList && on.classList.remove(Y.config.settlingClass), fe(on, "htmx:afterSettle", Yr);
                    }), jr.type && (jr.type === "push" ? (_t(jr.path), fe(te().body, "htmx:pushedIntoHistory", { path: jr.path })) : (zt(jr.path), fe(te().body, "htmx:replacedInHistory", { path: jr.path }))), Yr.pathInfo.anchor) {
                      var Wr = E("#" + Yr.pathInfo.anchor);
                      Wr && Wr.scrollIntoView({ block: "start", behavior: "auto" });
                    }
                    if (zr.title && !$r) {
                      var pn = E("title");
                      pn ? pn.innerHTML = zr.title : window.document.title = zr.title;
                    }
                    if (vr(zr.elts, Ur), R(Mr, /HX-Trigger-After-Settle:/i)) {
                      var cn = Be;
                      oe(Be) || (cn = te().body), Ue(Mr, "HX-Trigger-After-Settle", cn);
                    }
                    ne(xn);
                  };
                  Ur.settleDelay > 0 ? setTimeout(mn, Ur.settleDelay) : mn();
                } catch (Wr) {
                  throw ue(Be, "htmx:swapError", Yr), ne(yn), Wr;
                }
              }, rn = Y.config.globalViewTransitions;
              if (Ur.hasOwnProperty("transition") && (rn = Ur.transition), rn && fe(Be, "htmx:beforeTransition", Yr) && typeof Promise < "u" && document.startViewTransition) {
                var an = new Promise(function(Zr, en) {
                  xn = Zr, yn = en;
                }), bn = nn;
                nn = function() {
                  document.startViewTransition(function() {
                    return bn(), an;
                  });
                };
              }
              Ur.swapDelay > 0 ? setTimeout(nn, Ur.swapDelay) : nn();
            }
            Vr && ue(Be, "htmx:responseError", se({ error: "Response Status Error Code " + Mr.status + " from " + Yr.pathInfo.requestPath }, Yr));
          }
        }
      }
      var Rr = {};
      function Or() {
        return { init: function(Be) {
          return null;
        }, onEvent: function(Be, Yr) {
          return !0;
        }, transformResponse: function(Be, Yr, Mr) {
          return Be;
        }, isInlineSwap: function(Be) {
          return !1;
        }, handleSwap: function(Be, Yr, Mr, Dr) {
          return !1;
        }, encodeParameters: function(Be, Yr, Mr) {
          return null;
        } };
      }
      function qr(Be, Yr) {
        Yr.init && Yr.init(r), Rr[Be] = se(Or(), Yr);
      }
      function Hr(Be) {
        delete Rr[Be];
      }
      function Lr(Be, Yr, Mr) {
        if (Be == null)
          return Yr;
        Yr == null && (Yr = []), Mr == null && (Mr = []);
        var Dr = ee(Be, "hx-ext");
        return Dr && ae(Dr.split(","), function(Xr) {
          if (Xr = Xr.replace(/ /g, ""), Xr.slice(0, 7) == "ignore:") {
            Mr.push(Xr.slice(7));
            return;
          }
          if (Mr.indexOf(Xr) < 0) {
            var Fr = Rr[Xr];
            Fr && Yr.indexOf(Fr) < 0 && Yr.push(Fr);
          }
        }), Lr(u(Be), Yr, Mr);
      }
      var Ar = !1;
      te().addEventListener("DOMContentLoaded", function() {
        Ar = !0;
      });
      function Nr(Be) {
        Ar || te().readyState === "complete" ? Be() : te().addEventListener("DOMContentLoaded", Be);
      }
      function Ir() {
        Y.config.includeIndicatorStyles !== !1 && te().head.insertAdjacentHTML("beforeend", "<style>                      ." + Y.config.indicatorClass + "{opacity:0;transition: opacity 200ms ease-in;}                      ." + Y.config.requestClass + " ." + Y.config.indicatorClass + "{opacity:1}                      ." + Y.config.requestClass + "." + Y.config.indicatorClass + "{opacity:1}                    </style>");
      }
      function Pr() {
        var Be = te().querySelector('meta[name="htmx-config"]');
        return Be ? S(Be.content) : null;
      }
      function kr() {
        var Be = Pr();
        Be && (Y.config = se(Y.config, Be));
      }
      return Nr(function() {
        kr(), Ir();
        var Be = te().body;
        Pt(Be);
        var Yr = te().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
        Be.addEventListener("htmx:abort", function(Dr) {
          var Xr = Dr.target, Fr = ie(Xr);
          Fr && Fr.xhr && Fr.xhr.abort();
        });
        var Mr = window.onpopstate;
        window.onpopstate = function(Dr) {
          Dr.state && Dr.state.htmx ? (Gt(), ae(Yr, function(Xr) {
            fe(Xr, "htmx:restored", { document: te(), triggerEvent: fe });
          })) : Mr && Mr(Dr);
        }, setTimeout(function() {
          fe(Be, "htmx:load", {}), Be = null;
        }, 0);
      }), Y;
    }();
  });
})(htmx_min);
var htmx_minExports = htmx_min.exports;
const htmx = /* @__PURE__ */ getDefaultExportFromCjs(htmx_minExports);
window.htmx = htmx;
