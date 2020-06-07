!(function (e, n) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = n()) : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? (exports["relay-app"] = n()) : (e["relay-app"] = n());
})(window, function () {
    return (function (e) {
        var n = window.webpackHotUpdaterelay_app;
        window.webpackHotUpdaterelay_app = function (e, t) {
            !(function (e, n) {
                if (g[e] && w[e]) {
                    for (var t in ((w[e] = !1), n)) Object.prototype.hasOwnProperty.call(n, t) && (f[t] = n[t]);
                    0 == --v && 0 === m && E();
                }
            })(e, t),
                n && n(e, t);
        };
        var t,
            r = !0,
            o = "d736c7d654a5a7c2eeac",
            d = {},
            i = [],
            c = [];
        function a(e) {
            var n = x[e];
            if (!n) return k;
            function r(r) {
                return (
                    n.hot.active
                        ? (x[r] ? -1 === x[r].parents.indexOf(e) && x[r].parents.push(e) : ((i = [e]), (t = r)), -1 === n.children.indexOf(r) && n.children.push(r))
                        : (console.warn("[HMR] unexpected require(" + r + ") from disposed module " + e), (i = [])),
                    k(r)
                );
            }
            function o(e) {
                return {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return k[e];
                    },
                    set: function (n) {
                        k[e] = n;
                    },
                };
            }
            for (var d in k) Object.prototype.hasOwnProperty.call(k, d) && "e" !== d && "t" !== d && Object.defineProperty(r, d, o(d));
            return (
                (r.e = function (e) {
                    return (
                        "ready" === s && p("prepare"),
                        m++,
                        k.e(e).then(n, function (e) {
                            throw (n(), e);
                        })
                    );
                    function n() {
                        m--, "prepare" === s && (b[e] || P(e), 0 === m && 0 === v && E());
                    }
                }),
                (r.t = function (e, n) {
                    return 1 & n && (e = r(e)), k.t(e, -2 & n);
                }),
                r
            );
        }
        var l = [],
            s = "idle";
        function p(e) {
            s = e;
            for (var n = 0; n < l.length; n++) l[n].call(null, e);
        }
        var u,
            f,
            h,
            y,
            v = 0,
            m = 0,
            b = {},
            w = {},
            g = {};
        function O(e) {
            return +e + "" === e ? +e : e;
        }
        function _(e) {
            if ("idle" !== s) throw new Error("check() is only allowed in idle status");
            return (
                (r = e),
                p("check"),
                (n = (n = 1e4) || 1e4),
                new Promise(function (e, t) {
                    if ("undefined" == typeof XMLHttpRequest) return t(new Error("No browser support"));
                    try {
                        var r = new XMLHttpRequest(),
                            d = k.p + "" + o + ".hot-update.json";
                        r.open("GET", d, !0), (r.timeout = n), r.send(null);
                    } catch (e) {
                        return t(e);
                    }
                    r.onreadystatechange = function () {
                        if (4 === r.readyState)
                            if (0 === r.status) t(new Error("Manifest request to " + d + " timed out."));
                            else if (404 === r.status) e();
                            else if (200 !== r.status && 304 !== r.status) t(new Error("Manifest request to " + d + " failed."));
                            else {
                                try {
                                    var n = JSON.parse(r.responseText);
                                } catch (n) {
                                    return void t(n);
                                }
                                e(n);
                            }
                    };
                }).then(function (e) {
                    if (!e) return p(D() ? "ready" : "idle"), null;
                    (w = {}), (b = {}), (g = e.c), (h = e.h), p("prepare");
                    var n = new Promise(function (e, n) {
                        u = { resolve: e, reject: n };
                    });
                    return (f = {}), P(0), "prepare" === s && 0 === m && 0 === v && E(), n;
                })
            );
            var n;
        }
        function P(e) {
            var n, t;
            g[e] ? ((w[e] = !0), v++, (n = e), ((t = document.createElement("script")).charset = "utf-8"), (t.src = k.p + "" + n + "." + o + ".hot-update.js"), document.head.appendChild(t)) : (b[e] = !0);
        }
        function E() {
            p("ready");
            var e = u;
            if (((u = null), e))
                if (r)
                    Promise.resolve()
                        .then(function () {
                            return j(r);
                        })
                        .then(
                            function (n) {
                                e.resolve(n);
                            },
                            function (n) {
                                e.reject(n);
                            }
                        );
                else {
                    var n = [];
                    for (var t in f) Object.prototype.hasOwnProperty.call(f, t) && n.push(O(t));
                    e.resolve(n);
                }
        }
        function j(n) {
            if ("ready" !== s) throw new Error("apply() is only allowed in ready status");
            return (function n(r) {
                var c, a, l, s, u;
                function v(e) {
                    for (
                        var n = [e],
                            t = {},
                            r = n.map(function (e) {
                                return { chain: [e], id: e };
                            });
                        0 < r.length;

                    ) {
                        var o = r.pop(),
                            d = o.id,
                            i = o.chain;
                        if ((s = x[d]) && (!s.hot._selfAccepted || s.hot._selfInvalidated)) {
                            if (s.hot._selfDeclined) return { type: "self-declined", chain: i, moduleId: d };
                            if (s.hot._main) return { type: "unaccepted", chain: i, moduleId: d };
                            for (var c = 0; c < s.parents.length; c++) {
                                var a = s.parents[c],
                                    l = x[a];
                                if (l) {
                                    if (l.hot._declinedDependencies[d]) return { type: "declined", chain: i.concat([a]), moduleId: d, parentId: a };
                                    -1 === n.indexOf(a) && (l.hot._acceptedDependencies[d] ? (t[a] || (t[a] = []), m(t[a], [d])) : (delete t[a], n.push(a), r.push({ chain: i.concat([a]), id: a })));
                                }
                            }
                        }
                    }
                    return { type: "accepted", moduleId: e, outdatedModules: n, outdatedDependencies: t };
                }
                function m(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var r = n[t];
                        -1 === e.indexOf(r) && e.push(r);
                    }
                }
                D();
                var b = {},
                    w = [],
                    _ = {},
                    P = function () {
                        console.warn("[HMR] unexpected require(" + j.moduleId + ") to disposed module");
                    };
                for (var E in f)
                    if (Object.prototype.hasOwnProperty.call(f, E)) {
                        var j;
                        u = O(E);
                        var I = !1,
                            H = !1,
                            M = !1,
                            A = "";
                        switch (((j = f[E] ? v(u) : { type: "disposed", moduleId: E }).chain && (A = "\nUpdate propagation: " + j.chain.join(" -> ")), j.type)) {
                            case "self-declined":
                                r.onDeclined && r.onDeclined(j), r.ignoreDeclined || (I = new Error("Aborted because of self decline: " + j.moduleId + A));
                                break;
                            case "declined":
                                r.onDeclined && r.onDeclined(j), r.ignoreDeclined || (I = new Error("Aborted because of declined dependency: " + j.moduleId + " in " + j.parentId + A));
                                break;
                            case "unaccepted":
                                r.onUnaccepted && r.onUnaccepted(j), r.ignoreUnaccepted || (I = new Error("Aborted because " + u + " is not accepted" + A));
                                break;
                            case "accepted":
                                r.onAccepted && r.onAccepted(j), (H = !0);
                                break;
                            case "disposed":
                                r.onDisposed && r.onDisposed(j), (M = !0);
                                break;
                            default:
                                throw new Error("Unexception type " + j.type);
                        }
                        if (I) return p("abort"), Promise.reject(I);
                        if (H) for (u in ((_[u] = f[u]), m(w, j.outdatedModules), j.outdatedDependencies)) Object.prototype.hasOwnProperty.call(j.outdatedDependencies, u) && (b[u] || (b[u] = []), m(b[u], j.outdatedDependencies[u]));
                        M && (m(w, [j.moduleId]), (_[u] = P));
                    }
                var S,
                    V = [];
                for (a = 0; a < w.length; a++) (u = w[a]), x[u] && x[u].hot._selfAccepted && _[u] !== P && !x[u].hot._selfInvalidated && V.push({ module: u, parents: x[u].parents.slice(), errorHandler: x[u].hot._selfAccepted });
                p("dispose"),
                    Object.keys(g).forEach(function (e) {
                        !1 === g[e] && delete installedChunks[e];
                    });
                for (var B, U, q = w.slice(); 0 < q.length; )
                    if (((u = q.pop()), (s = x[u]))) {
                        var N = {},
                            R = s.hot._disposeHandlers;
                        for (l = 0; l < R.length; l++) (c = R[l])(N);
                        for (d[u] = N, s.hot.active = !1, delete x[u], delete b[u], l = 0; l < s.children.length; l++) {
                            var T = x[s.children[l]];
                            T && 0 <= (S = T.parents.indexOf(u)) && T.parents.splice(S, 1);
                        }
                    }
                for (u in b) if (Object.prototype.hasOwnProperty.call(b, u) && (s = x[u])) for (U = b[u], l = 0; l < U.length; l++) (B = U[l]), 0 <= (S = s.children.indexOf(B)) && s.children.splice(S, 1);
                for (u in (p("apply"), void 0 !== h && ((o = h), (h = void 0)), (f = void 0), _)) Object.prototype.hasOwnProperty.call(_, u) && (e[u] = _[u]);
                var L = null;
                for (u in b)
                    if (Object.prototype.hasOwnProperty.call(b, u) && (s = x[u])) {
                        U = b[u];
                        var C = [];
                        for (a = 0; a < U.length; a++)
                            if (((B = U[a]), (c = s.hot._acceptedDependencies[B]))) {
                                if (-1 !== C.indexOf(c)) continue;
                                C.push(c);
                            }
                        for (a = 0; a < C.length; a++) {
                            c = C[a];
                            try {
                                c(U);
                            } catch (n) {
                                r.onErrored && r.onErrored({ type: "accept-errored", moduleId: u, dependencyId: U[a], error: n }), r.ignoreErrored || (L = L || n);
                            }
                        }
                    }
                for (a = 0; a < V.length; a++) {
                    var X = V[a];
                    (u = X.module), (i = X.parents), (t = u);
                    try {
                        k(u);
                    } catch (c) {
                        if ("function" == typeof X.errorHandler)
                            try {
                                X.errorHandler(c);
                            } catch (n) {
                                r.onErrored && r.onErrored({ type: "self-accept-error-handler-errored", moduleId: u, error: n, originalError: c }), r.ignoreErrored || (L = L || n), (L = L || c);
                            }
                        else r.onErrored && r.onErrored({ type: "self-accept-errored", moduleId: u, error: c }), r.ignoreErrored || (L = L || c);
                    }
                }
                return L
                    ? (p("fail"), Promise.reject(L))
                    : y
                    ? n(r).then(function (e) {
                          return (
                              w.forEach(function (n) {
                                  e.indexOf(n) < 0 && e.push(n);
                              }),
                              e
                          );
                      })
                    : (p("idle"),
                      new Promise(function (e) {
                          e(w);
                      }));
            })((n = n || {}));
        }
        function D() {
            return y && ((f = f || {}), y.forEach(I), (y = void 0), 1);
        }
        function I(n) {
            Object.prototype.hasOwnProperty.call(f, n) || (f[n] = e[n]);
        }
        var x = {};
        function k(n) {
            if (x[n]) return x[n].exports;
            var r,
                o,
                u = (x[n] = {
                    i: n,
                    l: !1,
                    exports: {},
                    hot:
                        ((o = {
                            _acceptedDependencies: {},
                            _declinedDependencies: {},
                            _selfAccepted: !1,
                            _selfDeclined: !1,
                            _selfInvalidated: !1,
                            _disposeHandlers: [],
                            _main: t !== (r = n),
                            active: !0,
                            accept: function (e, n) {
                                if (void 0 === e) o._selfAccepted = !0;
                                else if ("function" == typeof e) o._selfAccepted = e;
                                else if ("object" == typeof e) for (var t = 0; t < e.length; t++) o._acceptedDependencies[e[t]] = n || function () {};
                                else o._acceptedDependencies[e] = n || function () {};
                            },
                            decline: function (e) {
                                if (void 0 === e) o._selfDeclined = !0;
                                else if ("object" == typeof e) for (var n = 0; n < e.length; n++) o._declinedDependencies[e[n]] = !0;
                                else o._declinedDependencies[e] = !0;
                            },
                            dispose: function (e) {
                                o._disposeHandlers.push(e);
                            },
                            addDisposeHandler: function (e) {
                                o._disposeHandlers.push(e);
                            },
                            removeDisposeHandler: function (e) {
                                var n = o._disposeHandlers.indexOf(e);
                                0 <= n && o._disposeHandlers.splice(n, 1);
                            },
                            invalidate: function () {
                                switch (((this._selfInvalidated = !0), s)) {
                                    case "idle":
                                        ((f = {})[r] = e[r]), p("ready");
                                        break;
                                    case "ready":
                                        I(r);
                                        break;
                                    case "prepare":
                                    case "check":
                                    case "dispose":
                                    case "apply":
                                        (y = y || []).push(r);
                                }
                            },
                            check: _,
                            apply: j,
                            status: function (e) {
                                if (!e) return s;
                                l.push(e);
                            },
                            addStatusHandler: function (e) {
                                l.push(e);
                            },
                            removeStatusHandler: function (e) {
                                var n = l.indexOf(e);
                                0 <= n && l.splice(n, 1);
                            },
                            data: d[r],
                        }),
                        (t = void 0),
                        o),
                    parents: ((c = i), (i = []), c),
                    children: [],
                });
            return e[n].call(u.exports, u, u.exports, a(n)), (u.l = !0), u.exports;
        }
        return (
            (k.m = e),
            (k.c = x),
            (k.d = function (e, n, t) {
                k.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
            }),
            (k.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (k.t = function (e, n) {
                if ((1 & n && (e = k(e)), 8 & n)) return e;
                if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                var t = Object.create(null);
                if ((k.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e))
                    for (var r in e)
                        k.d(
                            t,
                            r,
                            function (n) {
                                return e[n];
                            }.bind(null, r)
                        );
                return t;
            }),
            (k.n = function (e) {
                var n =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return k.d(n, "a", n), n;
            }),
            (k.o = function (e, n) {
                return Object.prototype.hasOwnProperty.call(e, n);
            }),
            (k.p = ""),
            (k.h = function () {
                return o;
            }),
            a(0)((k.s = 0))
        );
    })([
        function (e, n) {
            document.getElementById("defaultOpen").click();
            var t = document.getElementById("formPresentar"),
                r = document.getElementById("pwd"),
                o = document.getElementById("nProposal"),
                d = document.getElementById("placeProposal"),
                i = document.getElementById("myProposal"),
                c = document.getElementById("btnSendProposal");
            t.addEventListener("keyup", function () {
                (isValidPlaceProposal = d.checkValidity()),
                    (isValidNProposal = o.checkValidity()),
                    (isValidPwd = r.checkValidity()),
                    1 == i.files.length && (isValidNProposal && isValidPlaceProposal && isValidPwd ? (c.disabled = !1) : (c.disabled = !0));
            });
        },
    ]).default;
});
