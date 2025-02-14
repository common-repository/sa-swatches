(() => {
	var e = {
		3849: (e, t) => {
			var n;
			! function () {
				"use strict";
				var r = {}.hasOwnProperty;

				function o() {
					for (var e = [], t = 0; t < arguments.length; t++) {
						var n = arguments[t];
						if (n) {
							var i = typeof n;
							if ("string" === i || "number" === i) e.push(n);
							else if (Array.isArray(n)) {
								if (n.length) {
									var s = o.apply(null, n);
									s && e.push(s)
								}
							} else if ("object" === i)
								if (n.toString === Object.prototype.toString)
									for (var a in n) r.call(n, a) && n[a] && e.push(a);
								else e.push(n.toString())
						}
					}
					return e.join(" ")
				}
				e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function () {
					return o
				}.apply(t, [])) || (e.exports = n)
			}()
		},
		7608: (e, t) => {
			var n;
			! function () {
				"use strict";
				var r = {}.hasOwnProperty;

				function o() {
					for (var e = [], t = 0; t < arguments.length; t++) {
						var n = arguments[t];
						if (n) {
							var i = typeof n;
							if ("string" === i || "number" === i) e.push(n);
							else if (Array.isArray(n)) {
								if (n.length) {
									var s = o.apply(null, n);
									s && e.push(s)
								}
							} else if ("object" === i) {
								if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
									e.push(n.toString());
									continue
								}
								for (var a in n) r.call(n, a) && n[a] && e.push(a)
							}
						}
					}
					return e.join(" ")
				}
				e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function () {
					return o
				}.apply(t, [])) || (e.exports = n)
			}()
		},
		1029: () => { },
		946: () => { },
		7440: () => { }
	},
		t = {};

	function n(r) {
		var o = t[r];
		if (void 0 !== o) return o.exports;
		var i = t[r] = {
			exports: {}
		};
		return e[r](i, i.exports, n), i.exports
	}
	n.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return n.d(t, {
			a: t
		}), t
	}, n.d = (e, t) => {
		for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
			enumerable: !0,
			get: t[r]
		})
	}, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
		"use strict";
		const e = window.React,
			t = window.wc.__experimentalInteractivity,
			r = window.wp.data,
			o = window.wc.wcBlocksData,
			i = window.wp.element;
		var s = n(3849),
			a = n.n(s);
		const l = window.wp.i18n,
			c = (0, i.forwardRef)((function ({
				icon: e,
				size: t = 24,
				...n
			}, r) {
				return (0, i.cloneElement)(e, {
					width: t,
					height: t,
					...n,
					ref: r
				})
			})),
			u = window.wp.primitives,
			d = (0, e.createElement)(u.SVG, {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, (0, e.createElement)(u.Path, {
				d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
			}));
		n(946);
		const m = (0, e.createElement)(u.SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24"
		}, (0, e.createElement)(u.Path, {
			d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
		})),
			p = (0, e.createElement)(u.SVG, {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, (0, e.createElement)(u.Path, {
				d: "M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"
			})),
			f = (0, e.createElement)(u.SVG, {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, (0, e.createElement)(u.Path, {
				fillRule: "evenodd",
				d: "M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",
				clipRule: "evenodd"
			})),
			h = e => {
				switch (e) {
					case "success":
					case "warning":
					case "info":
					case "default":
						return "polite";
					default:
						return "assertive"
				}
			},
			g = e => {
				switch (e) {
					case "success":
						return m;
					case "warning":
					case "info":
					case "error":
						return p;
					default:
						return f
				}
			};

		function w() {
			return w = Object.assign ? Object.assign.bind() : function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}, w.apply(this, arguments)
		}
		var v = n(7608),
			b = n.n(v);
		const E = window.lodash,
			y = window.wp.deprecated;
		var S = n.n(y);
		const C = window.wp.compose,
			L = window.wp.dom,
			x = (0, i.createElement)(u.SVG, {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, (0, i.createElement)(u.Path, {
				d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
			}));

		function _(e, t, n) {
			const {
				defaultView: r
			} = t, {
				frameElement: o
			} = r;
			if (!o || t === n.ownerDocument) return e;
			const i = o.getBoundingClientRect();
			return new r.DOMRect(e.left + i.left, e.top + i.top, e.width, e.height)
		}
		let R = 0;

		function T(e) {
			const t = document.scrollingElement || document.body;
			e && (R = t.scrollTop);
			const n = e ? "add" : "remove";
			t.classList[n]("lockscroll"), document.documentElement.classList[n]("lockscroll"), e || (t.scrollTop = R)
		}
		let O = 0;

		function I() {
			return (0, i.useEffect)((() => (0 === O && T(!0), ++O, () => {
				1 === O && T(!1), --O
			})), []), null
		}
		window.wp.warning;
		const D = (0, i.createContext)({
			slots: {},
			fills: {},
			registerSlot: () => {
				"undefined" != typeof process && process.env
			},
			updateSlot: () => { },
			unregisterSlot: () => { },
			registerFill: () => { },
			unregisterFill: () => { }
		});

		function N(e) {
			const t = (0, i.useContext)(D),
				n = t.slots[e] || {},
				r = t.fills[e],
				o = (0, i.useMemo)((() => r || []), [r]);
			return {
				...n,
				updateSlot: (0, i.useCallback)((n => {
					t.updateSlot(e, n)
				}), [e, t.updateSlot]),
				unregisterSlot: (0, i.useCallback)((n => {
					t.unregisterSlot(e, n)
				}), [e, t.unregisterSlot]),
				fills: o,
				registerFill: (0, i.useCallback)((n => {
					t.registerFill(e, n)
				}), [e, t.registerFill]),
				unregisterFill: (0, i.useCallback)((n => {
					t.unregisterFill(e, n)
				}), [e, t.unregisterFill])
			}
		}
		const F = (0, i.createContext)({
			registerSlot: () => { },
			unregisterSlot: () => { },
			registerFill: () => { },
			unregisterFill: () => { },
			getSlot: () => { },
			getFills: () => { },
			subscribe: () => { }
		});

		function k({
			name: e,
			children: t,
			registerFill: n,
			unregisterFill: r
		}) {
			const o = (e => {
				const {
					getSlot: t,
					subscribe: n
				} = (0, i.useContext)(F), [r, o] = (0, i.useState)(t(e));
				return (0, i.useEffect)((() => (o(t(e)), n((() => {
					o(t(e))
				})))), [e]), r
			})(e),
				s = (0, i.useRef)({
					name: e,
					children: t
				});
			return (0, i.useLayoutEffect)((() => (n(e, s.current), () => r(e, s.current))), []), (0, i.useLayoutEffect)((() => {
				s.current.children = t, o && o.forceUpdate()
			}), [t]), (0, i.useLayoutEffect)((() => {
				e !== s.current.name && (r(s.current.name, s.current), s.current.name = e, n(e, s.current))
			}), [e]), o && o.node ? ((0, E.isFunction)(t) && (t = t(o.props.fillProps)), (0, i.createPortal)(t, o.node)) : null
		}
		const M = e => (0, i.createElement)(F.Consumer, null, (({
			registerFill: t,
			unregisterFill: n
		}) => (0, i.createElement)(k, w({}, e, {
			registerFill: t,
			unregisterFill: n
		}))));
		class A extends i.Component {
			constructor() {
				super(...arguments), this.isUnmounted = !1, this.bindNode = this.bindNode.bind(this)
			}
			componentDidMount() {
				const {
					registerSlot: e
				} = this.props;
				e(this.props.name, this)
			}
			componentWillUnmount() {
				const {
					unregisterSlot: e
				} = this.props;
				this.isUnmounted = !0, e(this.props.name, this)
			}
			componentDidUpdate(e) {
				const {
					name: t,
					unregisterSlot: n,
					registerSlot: r
				} = this.props;
				e.name !== t && (n(e.name), r(t, this))
			}
			bindNode(e) {
				this.node = e
			}
			forceUpdate() {
				this.isUnmounted || super.forceUpdate()
			}
			render() {
				const {
					children: e,
					name: t,
					fillProps: n = {},
					getFills: r
				} = this.props, o = (0, E.map)(r(t, this), (e => {
					const t = (0, E.isFunction)(e.children) ? e.children(n) : e.children;
					return i.Children.map(t, ((e, t) => {
						if (!e || (0, E.isString)(e)) return e;
						const n = e.key || t;
						return (0, i.cloneElement)(e, {
							key: n
						})
					}))
				})).filter((0, E.negate)(i.isEmptyElement));
				return (0, i.createElement)(i.Fragment, null, (0, E.isFunction)(e) ? e(o) : o)
			}
		}
		const P = e => (0, i.createElement)(F.Consumer, null, (({
			registerSlot: t,
			unregisterSlot: n,
			getFills: r
		}) => (0, i.createElement)(A, w({}, e, {
			registerSlot: t,
			unregisterSlot: n,
			getFills: r
		}))));

		function B() {
			const [, e] = (0, i.useState)({}), t = (0, i.useRef)(!0);
			return (0, i.useEffect)((() => () => {
				t.current = !1
			}), []), () => {
				t.current && e({})
			}
		}

		function V({
			name: e,
			children: t
		}) {
			const n = N(e),
				r = (0, i.useRef)({
					rerender: B()
				});
			return (0, i.useEffect)((() => (n.registerFill(r), () => {
				n.unregisterFill(r)
			})), [n.registerFill, n.unregisterFill]), n.ref && n.ref.current ? ("function" == typeof t && (t = t(n.fillProps)), (0, i.createPortal)(t, n.ref.current)) : null
		}
		const W = (0, i.forwardRef)((function ({
			name: e,
			fillProps: t = {},
			as: n = "div",
			...r
		}, o) {
			const s = (0, i.useContext)(D),
				a = (0, i.useRef)();
			return (0, i.useLayoutEffect)((() => (s.registerSlot(e, a, t), () => {
				s.unregisterSlot(e, a)
			})), [s.registerSlot, s.unregisterSlot, e]), (0, i.useLayoutEffect)((() => {
				s.updateSlot(e, t)
			})), (0, i.createElement)(n, w({
				ref: (0, C.useMergeRefs)([o, a])
			}, r))
		}));

		function z(e) {
			return (0, i.createElement)(i.Fragment, null, (0, i.createElement)(M, e), (0, i.createElement)(V, e))
		}
		const H = (0, i.forwardRef)((({
			bubblesVirtually: e,
			...t
		}, n) => e ? (0, i.createElement)(W, w({}, t, {
			ref: n
		})) : (0, i.createElement)(P, t)));

		function U(e) {
			return "appear" === e ? "top" : "left"
		}
		const j = "Popover";

		function q(e, t) {
			const {
				paddingTop: n,
				paddingBottom: r,
				paddingLeft: o,
				paddingRight: i
			} = (s = t).ownerDocument.defaultView.getComputedStyle(s);
			var s;
			const a = n ? parseInt(n, 10) : 0,
				l = r ? parseInt(r, 10) : 0,
				c = o ? parseInt(o, 10) : 0,
				u = i ? parseInt(i, 10) : 0;
			return {
				x: e.left + c,
				y: e.top + a,
				width: e.width - c - u,
				height: e.height - a - l,
				left: e.left + c,
				right: e.right - u,
				top: e.top + a,
				bottom: e.bottom - l
			}
		}

		function G(e, t, n) {
			n ? e.getAttribute(t) !== n && e.setAttribute(t, n) : e.hasAttribute(t) && e.removeAttribute(t)
		}

		function K(e, t, n = "") {
			e.style[t] !== n && (e.style[t] = n)
		}

		function Y(e, t, n) {
			n ? e.classList.contains(t) || e.classList.add(t) : e.classList.contains(t) && e.classList.remove(t)
		}
		const X = (0, i.forwardRef)((({
			headerTitle: e,
			onClose: t,
			children: n,
			className: r,
			noArrow: o = !0,
			isAlternate: s,
			position: a = "bottom right",
			range: c,
			focusOnMount: u = "firstElement",
			anchorRef: d,
			shouldAnchorIncludePadding: m,
			anchorRect: p,
			getAnchorRect: f,
			expandOnMobile: h,
			animate: g = !0,
			onClickOutside: v,
			onFocusOutside: E,
			__unstableStickyBoundaryElement: y,
			__unstableSlotName: R = j,
			__unstableObserveElement: T,
			__unstableBoundaryParent: O,
			__unstableForcePosition: D,
			__unstableForceXAlignment: F,
			...k
		}, M) => {
			const A = (0, i.useRef)(null),
				P = (0, i.useRef)(null),
				B = (0, i.useRef)(),
				V = (0, C.useViewportMatch)("medium", "<"),
				[W, H] = (0, i.useState)(),
				X = N(R),
				J = h && V,
				[Q, Z] = (0, C.useResizeObserver)();
			o = J || o, (0, i.useLayoutEffect)((() => {
				if (J) return Y(B.current, "is-without-arrow", o), Y(B.current, "is-alternate", s), G(B.current, "data-x-axis"), G(B.current, "data-y-axis"), K(B.current, "top"), K(B.current, "left"), K(P.current, "maxHeight"), void K(P.current, "maxWidth");
				const e = () => {
					if (!B.current || !P.current) return;
					let e = function (e, t, n, r = !1, o, i) {
						if (t) return t;
						if (n) {
							if (!e.current) return;
							const t = n(e.current);
							return _(t, t.ownerDocument || e.current.ownerDocument, i)
						}
						if (!1 !== r) {
							if (!(r && window.Range && window.Element && window.DOMRect)) return;
							if ("function" == typeof (null == r ? void 0 : r.cloneRange)) return _((0, L.getRectangleFromRange)(r), r.endContainer.ownerDocument, i);
							if ("function" == typeof (null == r ? void 0 : r.getBoundingClientRect)) {
								const e = _(r.getBoundingClientRect(), r.ownerDocument, i);
								return o ? e : q(e, r)
							}
							const {
								top: e,
								bottom: t
							} = r, n = e.getBoundingClientRect(), s = t.getBoundingClientRect(), a = _(new window.DOMRect(n.left, n.top, n.width, s.bottom - n.top), e.ownerDocument, i);
							return o ? a : q(a, r)
						}
						if (!e.current) return;
						const {
							parentNode: s
						} = e.current, a = s.getBoundingClientRect();
						return o ? a : q(a, s)
					}(A, p, f, d, m, B.current);
					if (!e) return;
					const {
						offsetParent: t,
						ownerDocument: n
					} = B.current;
					let r, i = 0;
					if (t && t !== n.body) {
						const n = t.getBoundingClientRect();
						i = n.top, e = new window.DOMRect(e.left - n.left, e.top - n.top, e.width, e.height)
					}
					var c;
					O && (r = null === (c = B.current.closest(".popover-slot")) || void 0 === c ? void 0 : c.parentNode);
					const u = Z.height ? Z : P.current.getBoundingClientRect(),
						{
							popoverTop: h,
							popoverLeft: g,
							xAxis: w,
							yAxis: v,
							contentHeight: b,
							contentWidth: E
						} = function (e, t, n = "top", r, o, i, s, a, c) {
							const [u, d = "center", m] = n.split(" "), p = function (e, t, n, r, o, i, s, a) {
								const {
									height: l
								} = t;
								if (o) {
									const t = o.getBoundingClientRect().top + l - s;
									if (e.top <= t) return {
										yAxis: n,
										popoverTop: Math.min(e.bottom, t)
									}
								}
								let c = e.top + e.height / 2;
								"bottom" === r ? c = e.bottom : "top" === r && (c = e.top);
								const u = {
									popoverTop: c,
									contentHeight: (c - l / 2 > 0 ? l / 2 : c) + (c + l / 2 > window.innerHeight ? window.innerHeight - c : l / 2)
								},
									d = {
										popoverTop: e.top,
										contentHeight: e.top - 10 - l > 0 ? l : e.top - 10
									},
									m = {
										popoverTop: e.bottom,
										contentHeight: e.bottom + 10 + l > window.innerHeight ? window.innerHeight - 10 - e.bottom : l
									};
								let p, f = n,
									h = null;
								if (!o && !a)
									if ("middle" === n && u.contentHeight === l) f = "middle";
									else if ("top" === n && d.contentHeight === l) f = "top";
									else if ("bottom" === n && m.contentHeight === l) f = "bottom";
									else {
										f = d.contentHeight > m.contentHeight ? "top" : "bottom";
										const e = "top" === f ? d.contentHeight : m.contentHeight;
										h = e !== l ? e : null
									}
								return p = "middle" === f ? u.popoverTop : "top" === f ? d.popoverTop : m.popoverTop, {
									yAxis: f,
									popoverTop: p,
									contentHeight: h
								}
							}(e, t, u, m, r, 0, i, a), f = function (e, t, n, r, o, i, s, a, c) {
								const {
									width: u
								} = t;
								"left" === n && (0, l.isRTL)() ? n = "right" : "right" === n && (0, l.isRTL)() && (n = "left"), "left" === r && (0, l.isRTL)() ? r = "right" : "right" === r && (0, l.isRTL)() && (r = "left");
								const d = Math.round(e.left + e.width / 2),
									m = {
										popoverLeft: d,
										contentWidth: (d - u / 2 > 0 ? u / 2 : d) + (d + u / 2 > window.innerWidth ? window.innerWidth - d : u / 2)
									};
								let p = e.left;
								"right" === r ? p = e.right : "middle" === i || c || (p = d);
								let f = e.right;
								"left" === r ? f = e.left : "middle" === i || c || (f = d);
								const h = {
									popoverLeft: p,
									contentWidth: p - u > 0 ? u : p
								},
									g = {
										popoverLeft: f,
										contentWidth: f + u > window.innerWidth ? window.innerWidth - f : u
									};
								let w, v = n,
									b = null;
								if (!o && !a)
									if ("center" === n && m.contentWidth === u) v = "center";
									else if ("left" === n && h.contentWidth === u) v = "left";
									else if ("right" === n && g.contentWidth === u) v = "right";
									else {
										v = h.contentWidth > g.contentWidth ? "left" : "right";
										const e = "left" === v ? h.contentWidth : g.contentWidth;
										u > window.innerWidth && (b = window.innerWidth), e !== u && (v = "center", m.popoverLeft = window.innerWidth / 2)
									}
								if (w = "center" === v ? m.popoverLeft : "left" === v ? h.popoverLeft : g.popoverLeft, s) {
									const e = s.getBoundingClientRect();
									w = Math.min(w, e.right - u), (0, l.isRTL)() || (w = Math.max(w, 0))
								}
								return {
									xAxis: v,
									popoverLeft: w,
									contentWidth: b
								}
							}(e, t, d, m, r, p.yAxis, s, a, c);
							return {
								...f,
								...p
							}
						}(e, u, a, y, B.current, i, r, D, F);
					"number" == typeof h && "number" == typeof g && (K(B.current, "top", h + "px"), K(B.current, "left", g + "px")), Y(B.current, "is-without-arrow", o || "center" === w && "middle" === v), Y(B.current, "is-alternate", s), G(B.current, "data-x-axis", w), G(B.current, "data-y-axis", v), K(P.current, "maxHeight", "number" == typeof b ? b + "px" : ""), K(P.current, "maxWidth", "number" == typeof E ? E + "px" : ""), H(({
						left: "right",
						right: "left"
					}[w] || "center") + " " + ({
						top: "bottom",
						bottom: "top"
					}[v] || "middle"))
				};
				e();
				const {
					ownerDocument: t
				} = B.current, {
					defaultView: n
				} = t, r = n.setInterval(e, 500);
				let i;
				const c = () => {
					n.cancelAnimationFrame(i), i = n.requestAnimationFrame(e)
				};
				n.addEventListener("click", c), n.addEventListener("resize", e), n.addEventListener("scroll", e, !0);
				const u = function (e) {
					if (e) return e.endContainer ? e.endContainer.ownerDocument : e.top ? e.top.ownerDocument : e.ownerDocument
				}(d);
				let h;
				return u && u !== t && (u.defaultView.addEventListener("resize", e), u.defaultView.addEventListener("scroll", e, !0)), T && (h = new n.MutationObserver(e), h.observe(T, {
					attributes: !0
				})), () => {
					n.clearInterval(r), n.removeEventListener("resize", e), n.removeEventListener("scroll", e, !0), n.removeEventListener("click", c), n.cancelAnimationFrame(i), u && u !== t && (u.defaultView.removeEventListener("resize", e), u.defaultView.removeEventListener("scroll", e, !0)), h && h.disconnect()
				}
			}), [J, p, f, d, m, a, Z, y, T, O]);
			const $ = (e, n) => {
				if ("focus-outside" === e && E) E(n);
				else if ("focus-outside" === e && v) {
					const e = new window.MouseEvent("click");
					Object.defineProperty(e, "target", {
						get: () => n.relatedTarget
					}), S()("Popover onClickOutside prop", {
						since: "5.3",
						alternative: "onFocusOutside"
					}), v(e)
				} else t && t()
			},
				[ee, te] = (0, C.__experimentalUseDialog)({
					focusOnMount: u,
					__unstableOnClose: $,
					onClose: $
				}),
				ne = (0, C.useMergeRefs)([B, ee, M]),
				re = Boolean(g && W) && function (e) {
					if ("loading" === e.type) return b()("components-animate__loading");
					const {
						type: t,
						origin: n = U(t)
					} = e;
					if ("appear" === t) {
						const [e, t = "center"] = n.split(" ");
						return b()("components-animate__appear", {
							["is-from-" + t]: "center" !== t,
							["is-from-" + e]: "middle" !== e
						})
					}
					return "slide-in" === t ? b()("components-animate__slide-in", "is-from-" + n) : void 0
				}({
					type: "appear",
					origin: W
				});
			let oe = (0, i.createElement)("div", w({
				className: b()("components-popover", r, re, {
					"is-expanded": J,
					"is-without-arrow": o,
					"is-alternate": s
				})
			}, k, {
				ref: ne
			}, te, {
				tabIndex: "-1"
			}), J && (0, i.createElement)(I, null), J && (0, i.createElement)("div", {
				className: "components-popover__header"
			}, (0, i.createElement)("span", {
				className: "components-popover__header-title"
			}, e), (0, i.createElement)(ae, {
				className: "components-popover__close",
				icon: x,
				onClick: t
			})), (0, i.createElement)("div", {
				ref: P,
				className: "components-popover__content"
			}, (0, i.createElement)("div", {
				style: {
					position: "relative"
				}
			}, Q, n)));
			return X.ref && (oe = (0, i.createElement)(z, {
				name: R
			}, oe)), d || p ? oe : (0, i.createElement)("span", {
				ref: A
			}, oe)
		}));
		X.Slot = (0, i.forwardRef)((function ({
			name: e = j
		}, t) {
			return (0, i.createElement)(H, {
				bubblesVirtually: !0,
				name: e,
				className: "popover-slot",
				ref: t
			})
		}));
		const J = X,
			Q = function ({
				shortcut: e,
				className: t
			}) {
				if (!e) return null;
				let n, r;
				return (0, E.isString)(e) && (n = e), (0, E.isObject)(e) && (n = e.display, r = e.ariaLabel), (0, i.createElement)("span", {
					className: t,
					"aria-label": r
				}, n)
			},
			Z = (0, i.createElement)("div", {
				className: "event-catcher"
			}),
			$ = ({
				eventHandlers: e,
				child: t,
				childrenWithPopover: n
			}) => (0, i.cloneElement)((0, i.createElement)("span", {
				className: "disabled-element-wrapper"
			}, (0, i.cloneElement)(Z, e), (0, i.cloneElement)(t, {
				children: n
			}), ","), e),
			ee = ({
				child: e,
				eventHandlers: t,
				childrenWithPopover: n
			}) => (0, i.cloneElement)(e, {
				...t,
				children: n
			}),
			te = (e, t, n) => {
				if (1 !== i.Children.count(e)) return;
				const r = i.Children.only(e);
				"function" == typeof r.props[t] && r.props[t](n)
			},
			ne = function ({
				children: e,
				position: t,
				text: n,
				shortcut: r
			}) {
				const [o, s] = (0, i.useState)(!1), [a, l] = (0, i.useState)(!1), c = (0, C.useDebounce)(l, 700), u = t => {
					te(e, "onMouseDown", t), document.addEventListener("mouseup", p), s(!0)
				}, d = t => {
					te(e, "onMouseUp", t), document.removeEventListener("mouseup", p), s(!1)
				}, m = e => "mouseUp" === e ? d : "mouseDown" === e ? u : void 0, p = m("mouseUp"), f = (t, n) => r => {
					if (te(e, t, r), r.currentTarget.disabled) return;
					if ("focus" === r.type && o) return;
					c.cancel();
					const i = (0, E.includes)(["focus", "mouseenter"], r.type);
					i !== a && (n ? c(i) : l(i))
				}, h = () => {
					c.cancel(), document.removeEventListener("mouseup", p)
				};
				if ((0, i.useEffect)((() => h), []), 1 !== i.Children.count(e)) return e;
				const g = {
					onMouseEnter: f("onMouseEnter", !0),
					onMouseLeave: f("onMouseLeave"),
					onClick: f("onClick"),
					onFocus: f("onFocus"),
					onBlur: f("onBlur"),
					onMouseDown: m("mouseDown")
				},
					w = i.Children.only(e),
					{
						children: v,
						disabled: b
					} = w.props,
					y = b ? $ : ee,
					S = (({
						grandchildren: e,
						isOver: t,
						position: n,
						text: r,
						shortcut: o
					}) => (0, i.concatChildren)(e, t && (0, i.createElement)(J, {
						focusOnMount: !1,
						position: n,
						className: "components-tooltip",
						"aria-hidden": "true",
						animate: !1,
						noArrow: !0
					}, r, (0, i.createElement)(Q, {
						className: "components-tooltip__shortcut",
						shortcut: o
					}))))({
						grandchildren: v,
						isOver: a,
						position: t,
						text: n,
						shortcut: r
					});
				return y({
					child: w,
					eventHandlers: g,
					childrenWithPopover: S
				})
			},
			re = function ({
				icon: e,
				className: t,
				...n
			}) {
				const r = ["dashicon", "dashicons", "dashicons-" + e, t].filter(Boolean).join(" ");
				return (0, i.createElement)("span", w({
					className: r
				}, n))
			},
			oe = function ({
				icon: e = null,
				size: t = 24,
				...n
			}) {
				if ("string" == typeof e) return (0, i.createElement)(re, w({
					icon: e
				}, n));
				if ((0, i.isValidElement)(e) && re === e.type) return (0, i.cloneElement)(e, {
					...n
				});
				if ("function" == typeof e) return e.prototype instanceof i.Component ? (0, i.createElement)(e, {
					size: t,
					...n
				}) : e({
					size: t,
					...n
				});
				if (e && ("svg" === e.type || e.type === u.SVG)) {
					const r = {
						width: t,
						height: t,
						...e.props,
						...n
					};
					return (0, i.createElement)(u.SVG, r)
				}
				return (0, i.isValidElement)(e) ? (0, i.cloneElement)(e, {
					size: t,
					...n
				}) : e
			},
			ie = (0, i.forwardRef)((function ({
				as: e = "div",
				className: t,
				...n
			}, r) {
				return function ({
					as: e = "div",
					...t
				}) {
					return "function" == typeof t.children ? t.children(t) : (0, i.createElement)(e, t)
				}({
					as: e,
					className: b()("components-visually-hidden", t),
					...n,
					ref: r
				})
			})),
			se = ["onMouseDown", "onClick"],
			ae = (0, i.forwardRef)((function (e, t) {
				const {
					href: n,
					target: r,
					isSmall: o,
					isPressed: s,
					isBusy: a,
					isDestructive: l,
					className: c,
					disabled: u,
					icon: d,
					iconPosition: m = "left",
					iconSize: p,
					showTooltip: f,
					tooltipPosition: h,
					shortcut: g,
					label: v,
					children: y,
					text: C,
					variant: L,
					__experimentalIsFocusable: x,
					describedBy: _,
					...R
				} = function ({
					isDefault: e,
					isPrimary: t,
					isSecondary: n,
					isTertiary: r,
					isLink: o,
					variant: i,
					...s
				}) {
					let a = i;
					var l, c, u, d, m;
					return t && (null !== (l = a) && void 0 !== l || (a = "primary")), r && (null !== (c = a) && void 0 !== c || (a = "tertiary")), n && (null !== (u = a) && void 0 !== u || (a = "secondary")), e && (S()("Button isDefault prop", {
						since: "5.4",
						alternative: 'variant="secondary"'
					}), null !== (d = a) && void 0 !== d || (a = "secondary")), o && (null !== (m = a) && void 0 !== m || (a = "link")), {
						...s,
						variant: a
					}
				}(e), T = b()("components-button", c, {
					"is-secondary": "secondary" === L,
					"is-primary": "primary" === L,
					"is-small": o,
					"is-tertiary": "tertiary" === L,
					"is-pressed": s,
					"is-busy": a,
					"is-link": "link" === L,
					"is-destructive": l,
					"has-text": !!d && !!y,
					"has-icon": !!d
				}), O = u && !x, I = void 0 === n || O ? "button" : "a", D = "a" === I ? {
					href: n,
					target: r
				} : {
					type: "button",
					disabled: O,
					"aria-pressed": s
				};
				if (u && x) {
					D["aria-disabled"] = !0;
					for (const e of se) R[e] = e => {
						e.stopPropagation(), e.preventDefault()
					}
				}
				const N = !O && (f && v || g || !!v && (!y || (0, E.isArray)(y) && !y.length) && !1 !== f),
					F = _ ? (0, E.uniqueId)() : null,
					k = R["aria-describedby"] || F,
					M = (0, i.createElement)(I, w({}, D, R, {
						className: T,
						"aria-label": R["aria-label"] || v,
						"aria-describedby": k,
						ref: t
					}), d && "left" === m && (0, i.createElement)(oe, {
						icon: d,
						size: p
					}), C && (0, i.createElement)(i.Fragment, null, C), d && "right" === m && (0, i.createElement)(oe, {
						icon: d,
						size: p
					}), y);
				return N ? (0, i.createElement)(i.Fragment, null, (0, i.createElement)(ne, {
					text: _ || v,
					shortcut: g,
					position: h
				}, M), _ && (0, i.createElement)(ie, null, (0, i.createElement)("span", {
					id: F
				}, _))) : (0, i.createElement)(i.Fragment, null, M, _ && (0, i.createElement)(ie, null, (0, i.createElement)("span", {
					id: F
				}, _)))
			}));
		n(1029), n(7440);
		const le = () => (0, e.createElement)("span", {
			className: "wc-block-components-spinner",
			"aria-hidden": "true"
		}),
			ce = ({
				className: t,
				showSpinner: n = !1,
				children: r,
				variant: o = "contained",
				...i
			}) => {
				const s = a()("wc-block-components-button", "wp-element-button", t, o, {
					"wc-block-components-button--loading": n
				});
				return (0, e.createElement)(ae, {
					className: s,
					...i
				}, n && (0, e.createElement)(le, null), (0, e.createElement)("span", {
					className: "wc-block-components-button__text"
				}, r))
			},
			ue = window.wp.a11y,
			de = ({
				className: t,
				status: n = "default",
				children: r,
				spokenMessage: o = r,
				onRemove: s = (() => { }),
				isDismissible: u = !0,
				politeness: m = h(n),
				summary: p
			}) => (((e, t) => {
				const n = "string" == typeof e ? e : (0, i.renderToString)(e);
				(0, i.useEffect)((() => {
					n && (0, ue.speak)(n, t)
				}), [n, t])
			})(o, m), (0, e.createElement)("div", {
				className: a()(t, "wc-block-components-notice-banner", "is-" + n, {
					"is-dismissible": u
				})
			}, (0, e.createElement)(c, {
				icon: g(n)
			}), (0, e.createElement)("div", {
				className: "wc-block-components-notice-banner__content"
			}, p && (0, e.createElement)("p", {
				className: "wc-block-components-notice-banner__summary"
			}, p), r), !!u && (0, e.createElement)(ce, {
				className: "wc-block-components-notice-banner__dismiss",
				icon: d,
				label: (0, l.__)("Dismiss this notice", "sa-swatches"),
				onClick: e => {
					"function" == typeof (null == e ? void 0 : e.preventDefault) && e.preventDefault && e.preventDefault(), s()
				},
				showTooltip: !1
			})));
		var me = function (e) {
			return e.IDLE = "IDLE", e.SLIDE_OUT = "SLIDE-OUT", e.SLIDE_IN = "SLIDE-IN", e
		}(me || {});
		const pe = ".wc-block-store-notices",
			fe = (e, t, n) => 0 === n ? e : t.replace("###", n.toString()),
			he = e => (0, t.getContext)(e),
			getElement = (0, t.getElement),
			{
				state: ge
			} = (0, t.store)("woocommerce/product-button", {
				state: {
					get slideInAnimation() {
						const {
							animationStatus: e
						} = he();
						return e === me.SLIDE_IN
					},
					get slideOutAnimation() {
						const {
							animationStatus: e
						} = he();
						return e === me.SLIDE_OUT
					},
					get numberOfItemsInTheCart() {
						const {
							productId: e
						} = he(), t = ((e, t) => null == e ? void 0 : e.items.find((e => e.id === t)))(ge.cart, e);
						return (null == t ? void 0 : t.quantity) || 0
					},
					get hasCartLoaded() {
						return !!ge.cart
					},
					get addToCartText() {
						const e = he();
						return e.animationStatus === me.IDLE || e.animationStatus === me.SLIDE_OUT ? fe(e.addToCartText, ge.inTheCartText, e.temporaryNumberOfItems) : fe(e.addToCartText, ge.inTheCartText, ge.numberOfItemsInTheCart)
					},
					get displayViewCart() {
						const {
							displayViewCart: e,
							temporaryNumberOfItems: t
						} = he();
						return !!e && (ge.hasCartLoaded ? ge.numberOfItemsInTheCart > 0 : t > 0)
					}
				},
				actions: {
					* addToCart() {
						const t = he(),
							{
								productId: n,
								quantityToAdd: s
							} = t;
						t.isLoading = !0;
						// Added by sa
						if (n <= 0 && t?.link) {
							window.location = t.link;
							return;
						}
						try {
							yield (0, r.dispatch)(o.CART_STORE_KEY).addItemToCart(n, s), t.temporaryNumberOfItems = ge.numberOfItemsInTheCart
						} catch (t) {
							const n = document.querySelector(pe);
							var a;
							n || null === (a = document.querySelector(".entry-content")) || void 0 === a || a.prepend((() => {
								const e = document.createElement("div");
								return e.classList.add(pe.replace(".", "")), e
							})());
							const r = null != n ? n : document.querySelector(pe);
							r && ((t, n) => {
								const r = (0, i.createRoot)(t);
								r.render((0, e.createElement)(de, {
									status: "error",
									onRemove: () => r.unmount()
								}, n)), null == t || t.scrollIntoView({
									behavior: "smooth",
									inline: "nearest"
								})
							})(r, t.message), console.error(t)
						} finally {
							t.displayViewCart = !0, t.isLoading = !1
						}
					},
					handleAnimationEnd: e => {
						const t = he();
						"slideOut" === e.animationName ? t.animationStatus = me.SLIDE_IN : "slideIn" === e.animationName && (t.temporaryNumberOfItems = ge.numberOfItemsInTheCart, t.animationStatus = me.IDLE)
					}
				},
				callbacks: {
					syncTemporaryNumberOfItemsOnLoad: () => {
						const e = he();
						const element = getElement();
						element.ref.addEventListener("sasw_variation_change", (evt) => {
							e.productId = evt.detail?.variation_id || 0;
							e.link = evt.detail?.link || null;
						});

						ge.hasCartLoaded && (e.temporaryNumberOfItems = ge.numberOfItemsInTheCart)
					},
					startAnimation: () => {
						const e = he();
						ge.hasCartLoaded && e.temporaryNumberOfItems !== ge.numberOfItemsInTheCart && !e.isLoading && e.animationStatus === me.IDLE && (e.animationStatus = me.SLIDE_OUT)
					}
				}
			});
		(0, r.subscribe)((() => {
			const e = (0, r.select)(o.CART_STORE_KEY).getCartData();
			(0, r.select)(o.CART_STORE_KEY).hasFinishedResolution("getCartData") && (ge.cart = e)
		}), o.CART_STORE_KEY), (window.requestIdleCallback || (e => setTimeout(e, 100)))((() => {
			ge.hasCartLoaded || (0, r.select)(o.CART_STORE_KEY).getCartData()
		}))
	})()
})();