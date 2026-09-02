function ri(o) {
  if (o === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return o;
}
function ia(o, t) {
  ((o.prototype = Object.create(t.prototype)),
    (o.prototype.constructor = o),
    (o.__proto__ = t));
}
var Se = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  yr = { duration: 0.5, overwrite: !1, delay: 0 },
  Xs,
  Nt,
  lt,
  De = 1e8,
  rt = 1 / De,
  hs = Math.PI * 2,
  Al = hs / 4,
  Rl = 0,
  ra = Math.sqrt,
  zl = Math.cos,
  Ll = Math.sin,
  Rt = function (t) {
    return typeof t == "string";
  },
  gt = function (t) {
    return typeof t == "function";
  },
  ui = function (t) {
    return typeof t == "number";
  },
  Ws = function (t) {
    return typeof t > "u";
  },
  Ze = function (t) {
    return typeof t == "object";
  },
  le = function (t) {
    return t !== !1;
  },
  Hs = function () {
    return typeof window < "u";
  },
  dn = function (t) {
    return gt(t) || Rt(t);
  },
  na =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Gt = Array.isArray,
  Fl = /random\([^)]+\)/g,
  Il = /,\s*/g,
  mo = /(?:-?\.?\d|\.)+/gi,
  sa = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  cr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Zn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  oa = /[+-]=-?[.\d]+/,
  Nl = /[^,'"\[\]\s]+/gi,
  Yl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  ft,
  qe,
  ds,
  Vs,
  ke = {},
  Ln = {},
  aa,
  la = function (t) {
    return (Ln = wr(t, ke)) && he;
  },
  qs = function (t, i) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      i,
      "Missing plugin? gsap.registerPlugin()",
    );
  },
  Jr = function (t, i) {
    return !i && console.warn(t);
  },
  ua = function (t, i) {
    return (t && (ke[t] = i) && Ln && (Ln[t] = i)) || ke;
  },
  tn = function () {
    return 0;
  },
  Bl = { suppressEvents: !0, isStart: !0, kill: !1 },
  Cn = { suppressEvents: !0, kill: !1 },
  Xl = { suppressEvents: !0 },
  Us = {},
  Si = [],
  ps = {},
  ca,
  ve = {},
  Qn = {},
  vo = 30,
  En = [],
  $s = "",
  Gs = function (t) {
    var i = t[0],
      e,
      r;
    if ((Ze(i) || gt(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (r = En.length; r-- && !En[r].targetTest(i););
      e = En[r];
    }
    for (r = t.length; r--;)
      (t[r] && (t[r]._gsap || (t[r]._gsap = new za(t[r], e)))) ||
        t.splice(r, 1);
    return t;
  },
  Vi = function (t) {
    return t._gsap || Gs(Ae(t))[0]._gsap;
  },
  fa = function (t, i, e) {
    return (e = t[i]) && gt(e)
      ? t[i]()
      : (Ws(e) && t.getAttribute && t.getAttribute(i)) || e;
  },
  ue = function (t, i) {
    return (t = t.split(",")).forEach(i) || t;
  },
  wt = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  ct = function (t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  },
  dr = function (t, i) {
    var e = i.charAt(0),
      r = parseFloat(i.substr(2));
    return (
      (t = parseFloat(t)),
      e === "+" ? t + r : e === "-" ? t - r : e === "*" ? t * r : t / r
    );
  },
  Wl = function (t, i) {
    for (var e = i.length, r = 0; t.indexOf(i[r]) < 0 && ++r < e;);
    return r < e;
  },
  Fn = function () {
    var t = Si.length,
      i = Si.slice(0),
      e,
      r;
    for (ps = {}, Si.length = 0, e = 0; e < t; e++)
      ((r = i[e]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0));
  },
  Ks = function (t) {
    return !!(t._initted || t._startAt || t.add);
  },
  ha = function (t, i, e, r) {
    (Si.length && !Nt && Fn(),
      t.render(i, e, !!(Nt && i < 0 && Ks(t))),
      Si.length && !Nt && Fn());
  },
  da = function (t) {
    var i = parseFloat(t);
    return (i || i === 0) && (t + "").match(Nl).length < 2
      ? i
      : Rt(t)
        ? t.trim()
        : t;
  },
  pa = function (t) {
    return t;
  },
  Ce = function (t, i) {
    for (var e in i) e in t || (t[e] = i[e]);
    return t;
  },
  Hl = function (t) {
    return function (i, e) {
      for (var r in e)
        r in i || (r === "duration" && t) || r === "ease" || (i[r] = e[r]);
    };
  },
  wr = function (t, i) {
    for (var e in i) t[e] = i[e];
    return t;
  },
  yo = function o(t, i) {
    for (var e in i)
      e !== "__proto__" &&
        e !== "constructor" &&
        e !== "prototype" &&
        (t[e] = Ze(i[e]) ? o(t[e] || (t[e] = {}), i[e]) : i[e]);
    return t;
  },
  In = function (t, i) {
    var e = {},
      r;
    for (r in t) r in i || (e[r] = t[r]);
    return e;
  },
  Br = function (t) {
    var i = t.parent || ft,
      e = t.keyframes ? Hl(Gt(t.keyframes)) : Ce;
    if (le(t.inherit))
      for (; i;) (e(t, i.vars.defaults), (i = i.parent || i._dp));
    return t;
  },
  Vl = function (t, i) {
    for (var e = t.length, r = e === i.length; r && e-- && t[e] === i[e];);
    return e < 0;
  },
  _a = function (t, i, e, r, n) {
    var s = t[r],
      a;
    if (n) for (a = i[n]; s && s[n] > a;) s = s._prev;
    return (
      s ? ((i._next = s._next), (s._next = i)) : ((i._next = t[e]), (t[e] = i)),
      i._next ? (i._next._prev = i) : (t[r] = i),
      (i._prev = s),
      (i.parent = i._dp = t),
      i
    );
  },
  Un = function (t, i, e, r) {
    (e === void 0 && (e = "_first"), r === void 0 && (r = "_last"));
    var n = i._prev,
      s = i._next;
    (n ? (n._next = s) : t[e] === i && (t[e] = s),
      s ? (s._prev = n) : t[r] === i && (t[r] = n),
      (i._next = i._prev = i.parent = null));
  },
  Ei = function (t, i) {
    (t.parent &&
      (!i || t.parent.autoRemoveChildren) &&
      t.parent.remove &&
      t.parent.remove(t),
      (t._act = 0));
  },
  qi = function (t, i) {
    if (t && (!i || i._end > t._dur || i._start < 0))
      for (var e = t; e;) ((e._dirty = 1), (e = e.parent));
    return t;
  },
  ql = function (t) {
    for (var i = t.parent; i && i.parent;)
      ((i._dirty = 1), i.totalDuration(), (i = i.parent));
    return t;
  },
  _s = function (t, i, e, r) {
    return (
      t._startAt &&
      (Nt
        ? t._startAt.revert(Cn)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(i, !0, r))
    );
  },
  Ul = function o(t) {
    return !t || (t._ts && o(t.parent));
  },
  wo = function (t) {
    return t._repeat ? xr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  xr = function (t, i) {
    var e = Math.floor((t = ct(t / i)));
    return t && e === t ? e - 1 : e;
  },
  Nn = function (t, i) {
    return (
      (t - i._start) * i._ts +
      (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur)
    );
  },
  $n = function (t) {
    return (t._end = ct(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || rt) || 0),
    ));
  },
  Gn = function (t, i) {
    var e = t._dp;
    return (
      e &&
        e.smoothChildTiming &&
        t._ts &&
        ((t._start = ct(
          e._time -
            (t._ts > 0
              ? i / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts),
        )),
        $n(t),
        e._dirty || qi(e, t)),
      t
    );
  },
  ga = function (t, i) {
    var e;
    if (
      ((i._time ||
        (!i._dur && i._initted) ||
        (i._start < t._time && (i._dur || !i.add))) &&
        ((e = Nn(t.rawTime(), i)),
        (!i._dur || un(0, i.totalDuration(), e) - i._tTime > rt) &&
          i.render(e, !0)),
      qi(t, i)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (e = t; e._dp;)
          (e.rawTime() >= 0 && e.totalTime(e._tTime), (e = e._dp));
      t._zTime = -rt;
    }
  },
  $e = function (t, i, e, r) {
    return (
      i.parent && Ei(i),
      (i._start = ct(
        (ui(e) ? e : e || t !== ft ? Pe(t, e, i) : t._time) + i._delay,
      )),
      (i._end = ct(
        i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0),
      )),
      _a(t, i, "_first", "_last", t._sort ? "_start" : 0),
      gs(i) || (t._recent = i),
      r || ga(t, i),
      t._ts < 0 && Gn(t, t._tTime),
      t
    );
  },
  ma = function (t, i) {
    return (
      (ke.ScrollTrigger || qs("scrollTrigger", i)) &&
      ke.ScrollTrigger.create(i, t)
    );
  },
  va = function (t, i, e, r, n) {
    if ((Zs(t, i, n), !t._initted)) return 1;
    if (
      !e &&
      t._pt &&
      !Nt &&
      ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
      ca !== we.frame
    )
      return (Si.push(t), (t._lazy = [n, r]), 1);
  },
  $l = function o(t) {
    var i = t.parent;
    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || o(i));
  },
  gs = function (t) {
    var i = t.data;
    return i === "isFromStart" || i === "isStart";
  },
  Gl = function (t, i, e, r) {
    var n = t.ratio,
      s =
        i < 0 ||
        (!i &&
          ((!t._start && $l(t) && !(!t._initted && gs(t))) ||
            ((t._ts < 0 || t._dp._ts < 0) && !gs(t))))
          ? 0
          : 1,
      a = t._rDelay,
      l = 0,
      u,
      c,
      p;
    if (
      (a &&
        t._repeat &&
        ((l = un(0, t._tDur, i)),
        (c = xr(l, a)),
        t._yoyo && c & 1 && (s = 1 - s),
        c !== xr(t._tTime, a) &&
          ((n = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
      s !== n || Nt || r || t._zTime === rt || (!i && t._zTime))
    ) {
      if (!t._initted && va(t, i, r, e, l)) return;
      for (
        p = t._zTime,
          t._zTime = i || (e ? rt : 0),
          e || (e = i && !p),
          t.ratio = s,
          t._from && (s = 1 - s),
          t._time = 0,
          t._tTime = l,
          u = t._pt;
        u;
      )
        (u.r(s, u.d), (u = u._next));
      (i < 0 && _s(t, i, e, !0),
        t._onUpdate && !e && be(t, "onUpdate"),
        l && t._repeat && !e && t.parent && be(t, "onRepeat"),
        (i >= t._tDur || i < 0) &&
          t.ratio === s &&
          (s && Ei(t, 1),
          !e &&
            !Nt &&
            (be(t, s ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom())));
    } else t._zTime || (t._zTime = i);
  },
  Kl = function (t, i, e) {
    var r;
    if (e > i)
      for (r = t._first; r && r._start <= e;) {
        if (r.data === "isPause" && r._start > i) return r;
        r = r._next;
      }
    else
      for (r = t._last; r && r._start >= e;) {
        if (r.data === "isPause" && r._start < i) return r;
        r = r._prev;
      }
  },
  br = function (t, i, e, r) {
    var n = t._repeat,
      s = ct(i) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !r && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = n ? (n < 0 ? 1e10 : ct(s * (n + 1) + t._rDelay * n)) : s),
      a > 0 && !r && Gn(t, (t._tTime = t._tDur * a)),
      t.parent && $n(t),
      e || qi(t.parent, t),
      t
    );
  },
  xo = function (t) {
    return t instanceof ne ? qi(t) : br(t, t._dur);
  },
  jl = { _start: 0, endTime: tn, totalDuration: tn },
  Pe = function o(t, i, e) {
    var r = t.labels,
      n = t._recent || jl,
      s = t.duration() >= De ? n.endTime(!1) : t._dur,
      a,
      l,
      u;
    return Rt(i) && (isNaN(i) || i in r)
      ? ((l = i.charAt(0)),
        (u = i.substr(-1) === "%"),
        (a = i.indexOf("=")),
        l === "<" || l === ">"
          ? (a >= 0 && (i = i.replace(/=/, "")),
            (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(i.substr(1)) || 0) *
                (u ? (a < 0 ? n : e).totalDuration() / 100 : 1))
          : a < 0
            ? (i in r || (r[i] = s), r[i])
            : ((l = parseFloat(i.charAt(a - 1) + i.substr(a + 1))),
              u && e && (l = (l / 100) * (Gt(e) ? e[0] : e).totalDuration()),
              a > 1 ? o(t, i.substr(0, a - 1), e) + l : s + l))
      : i == null
        ? s
        : +i;
  },
  Xr = function (t, i, e) {
    var r = ui(i[1]),
      n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
      s = i[n],
      a,
      l;
    if ((r && (s.duration = i[1]), (s.parent = e), t)) {
      for (a = s, l = e; l && !("immediateRender" in a);)
        ((a = l.vars.defaults || {}), (l = le(l.vars.inherit) && l.parent));
      ((s.immediateRender = le(a.immediateRender)),
        t < 2 ? (s.runBackwards = 1) : (s.startAt = i[n - 1]));
    }
    return new kt(i[0], s, i[n + 1]);
  },
  Di = function (t, i) {
    return t || t === 0 ? i(t) : i;
  },
  un = function (t, i, e) {
    return e < t ? t : e > i ? i : e;
  },
  Ut = function (t, i) {
    return !Rt(t) || !(i = Yl.exec(t)) ? "" : i[1];
  },
  Zl = function (t, i, e) {
    return Di(e, function (r) {
      return un(t, i, r);
    });
  },
  ms = [].slice,
  ya = function (t, i) {
    return (
      t &&
      Ze(t) &&
      "length" in t &&
      ((!i && !t.length) || (t.length - 1 in t && Ze(t[0]))) &&
      !t.nodeType &&
      t !== qe
    );
  },
  Ql = function (t, i, e) {
    return (
      e === void 0 && (e = []),
      t.forEach(function (r) {
        var n;
        return (Rt(r) && !i) || ya(r, 1)
          ? (n = e).push.apply(n, Ae(r))
          : e.push(r);
      }) || e
    );
  },
  Ae = function (t, i, e) {
    return lt && !i && lt.selector
      ? lt.selector(t)
      : Rt(t) && !e && (ds || !Tr())
        ? ms.call((i || Vs).querySelectorAll(t), 0)
        : Gt(t)
          ? Ql(t, e)
          : ya(t)
            ? ms.call(t, 0)
            : t
              ? [t]
              : [];
  },
  vs = function (t) {
    return (
      (t = Ae(t)[0] || Jr("Invalid scope") || {}),
      function (i) {
        var e = t.current || t.nativeElement || t;
        return Ae(
          i,
          e.querySelectorAll
            ? e
            : e === t
              ? Jr("Invalid scope") || Vs.createElement("div")
              : t,
        );
      }
    );
  },
  wa = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  xa = function (t) {
    if (gt(t)) return t;
    var i = Ze(t) ? t : { each: t },
      e = Ui(i.ease),
      r = i.from || 0,
      n = parseFloat(i.base) || 0,
      s = {},
      a = r > 0 && r < 1,
      l = isNaN(r) || a,
      u = i.axis,
      c = r,
      p = r;
    return (
      Rt(r)
        ? (c = p = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !a && l && ((c = r[0]), (p = r[1])),
      function (h, f, _) {
        var d = (_ || i).length,
          g = s[d],
          w,
          b,
          S,
          y,
          T,
          C,
          x,
          P,
          k;
        if (!g) {
          if (((k = i.grid === "auto" ? 0 : (i.grid || [1, De])[1]), !k)) {
            for (
              x = -De;
              x < (x = _[k++].getBoundingClientRect().left) && k < d;
            );
            k < d && k--;
          }
          for (
            g = s[d] = [],
              w = l ? Math.min(k, d) * c - 0.5 : r % k,
              b = k === De ? 0 : l ? (d * p) / k - 0.5 : (r / k) | 0,
              x = 0,
              P = De,
              C = 0;
            C < d;
            C++
          )
            ((S = (C % k) - w),
              (y = b - ((C / k) | 0)),
              (g[C] = T = u ? Math.abs(u === "y" ? y : S) : ra(S * S + y * y)),
              T > x && (x = T),
              T < P && (P = T));
          (r === "random" && wa(g),
            (g.max = x - P),
            (g.min = P),
            (g.v = d =
              (parseFloat(i.amount) ||
                parseFloat(i.each) *
                  (k > d
                    ? d - 1
                    : u
                      ? u === "y"
                        ? d / k
                        : k
                      : Math.max(k, d / k)) ||
                0) * (r === "edges" ? -1 : 1)),
            (g.b = d < 0 ? n - d : n),
            (g.u = Ut(i.amount || i.each) || 0),
            (e = e && d < 0 ? Da(e) : e));
        }
        return (
          (d = (g[h] - g.min) / g.max || 0),
          ct(g.b + (e ? e(d) : d) * g.v) + g.u
        );
      }
    );
  },
  ys = function (t) {
    var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (e) {
      var r = ct(Math.round(parseFloat(e) / t) * t * i);
      return (r - (r % 1)) / i + (ui(e) ? 0 : Ut(e));
    };
  },
  ba = function (t, i) {
    var e = Gt(t),
      r,
      n;
    return (
      !e &&
        Ze(t) &&
        ((r = e = t.radius || De),
        t.values
          ? ((t = Ae(t.values)), (n = !ui(t[0])) && (r *= r))
          : (t = ys(t.increment))),
      Di(
        i,
        e
          ? gt(t)
            ? function (s) {
                return ((n = t(s)), Math.abs(n - s) <= r ? n : s);
              }
            : function (s) {
                for (
                  var a = parseFloat(n ? s.x : s),
                    l = parseFloat(n ? s.y : 0),
                    u = De,
                    c = 0,
                    p = t.length,
                    h,
                    f;
                  p--;
                )
                  (n
                    ? ((h = t[p].x - a), (f = t[p].y - l), (h = h * h + f * f))
                    : (h = Math.abs(t[p] - a)),
                    h < u && ((u = h), (c = p)));
                return (
                  (c = !r || u <= r ? t[c] : s),
                  n || c === s || ui(s) ? c : c + Ut(s)
                );
              }
          : ys(t),
      )
    );
  },
  Ta = function (t, i, e, r) {
    return Di(Gt(t) ? !i : e === !0 ? !!(e = 0) : !r, function () {
      return Gt(t)
        ? t[~~(Math.random() * t.length)]
        : (e = e || 1e-5) &&
            (r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - e / 2 + Math.random() * (i - t + e * 0.99)) / e) *
                e *
                r,
            ) / r;
    });
  },
  Jl = function () {
    for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
      i[e] = arguments[e];
    return function (r) {
      return i.reduce(function (n, s) {
        return s(n);
      }, r);
    };
  },
  tu = function (t, i) {
    return function (e) {
      return t(parseFloat(e)) + (i || Ut(e));
    };
  },
  eu = function (t, i, e) {
    return ka(t, i, 0, 1, e);
  },
  Sa = function (t, i, e) {
    return Di(e, function (r) {
      return t[~~i(r)];
    });
  },
  iu = function o(t, i, e) {
    var r = i - t;
    return Gt(t)
      ? Sa(t, o(0, t.length), i)
      : Di(e, function (n) {
          return ((r + ((n - t) % r)) % r) + t;
        });
  },
  ru = function o(t, i, e) {
    var r = i - t,
      n = r * 2;
    return Gt(t)
      ? Sa(t, o(0, t.length - 1), i)
      : Di(e, function (s) {
          return ((s = (n + ((s - t) % n)) % n || 0), t + (s > r ? n - s : s));
        });
  },
  en = function (t) {
    return t.replace(Fl, function (i) {
      var e = i.indexOf("[") + 1,
        r = i.substring(e || 7, e ? i.indexOf("]") : i.length - 1).split(Il);
      return Ta(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5);
    });
  },
  ka = function (t, i, e, r, n) {
    var s = i - t,
      a = r - e;
    return Di(n, function (l) {
      return e + (((l - t) / s) * a || 0);
    });
  },
  nu = function o(t, i, e, r) {
    var n = isNaN(t + i)
      ? 0
      : function (f) {
          return (1 - f) * t + f * i;
        };
    if (!n) {
      var s = Rt(t),
        a = {},
        l,
        u,
        c,
        p,
        h;
      if ((e === !0 && (r = 1) && (e = null), s))
        ((t = { p: t }), (i = { p: i }));
      else if (Gt(t) && !Gt(i)) {
        for (c = [], p = t.length, h = p - 2, u = 1; u < p; u++)
          c.push(o(t[u - 1], t[u]));
        (p--,
          (n = function (_) {
            _ *= p;
            var d = Math.min(h, ~~_);
            return c[d](_ - d);
          }),
          (e = i));
      } else r || (t = wr(Gt(t) ? [] : {}, t));
      if (!c) {
        for (l in i) js.call(a, t, l, "get", i[l]);
        n = function (_) {
          return to(_, a) || (s ? t.p : t);
        };
      }
    }
    return Di(e, n);
  },
  bo = function (t, i, e) {
    var r = t.labels,
      n = De,
      s,
      a,
      l;
    for (s in r)
      ((a = r[s] - i),
        a < 0 == !!e && a && n > (a = Math.abs(a)) && ((l = s), (n = a)));
    return l;
  },
  be = function (t, i, e) {
    var r = t.vars,
      n = r[i],
      s = lt,
      a = t._ctx,
      l,
      u,
      c;
    if (n)
      return (
        (l = r[i + "Params"]),
        (u = r.callbackScope || t),
        e && Si.length && Fn(),
        a && (lt = a),
        (c = l ? n.apply(u, l) : n.call(u)),
        (lt = s),
        c
      );
  },
  Rr = function (t) {
    return (
      Ei(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!Nt),
      t.progress() < 1 && be(t, "onInterrupt"),
      t
    );
  },
  fr,
  Ca = [],
  Ea = function (t) {
    if (t)
      if (((t = (!t.name && t.default) || t), Hs() || t.headless)) {
        var i = t.name,
          e = gt(t),
          r =
            i && !e && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          n = {
            init: tn,
            render: to,
            add: js,
            kill: wu,
            modifier: yu,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: Js,
            aliases: {},
            register: 0,
          };
        if ((Tr(), t !== r)) {
          if (ve[i]) return;
          (Ce(r, Ce(In(t, n), s)),
            wr(r.prototype, wr(n, In(t, s))),
            (ve[(r.prop = i)] = r),
            t.targetTest && (En.push(r), (Us[i] = 1)),
            (i =
              (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) +
              "Plugin"));
        }
        (ua(i, r), t.register && t.register(he, r, ce));
      } else Ca.push(t);
  },
  it = 255,
  zr = {
    aqua: [0, it, it],
    lime: [0, it, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, it],
    navy: [0, 0, 128],
    white: [it, it, it],
    olive: [128, 128, 0],
    yellow: [it, it, 0],
    orange: [it, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [it, 0, 0],
    pink: [it, 192, 203],
    cyan: [0, it, it],
    transparent: [it, it, it, 0],
  },
  Jn = function (t, i, e) {
    return (
      (t += t < 0 ? 1 : t > 1 ? -1 : 0),
      ((t * 6 < 1
        ? i + (e - i) * t * 6
        : t < 0.5
          ? e
          : t * 3 < 2
            ? i + (e - i) * (2 / 3 - t) * 6
            : i) *
        it +
        0.5) |
        0
    );
  },
  Pa = function (t, i, e) {
    var r = t ? (ui(t) ? [t >> 16, (t >> 8) & it, t & it] : 0) : zr.black,
      n,
      s,
      a,
      l,
      u,
      c,
      p,
      h,
      f,
      _;
    if (!r) {
      if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), zr[t]))
        r = zr[t];
      else if (t.charAt(0) === "#") {
        if (
          (t.length < 6 &&
            ((n = t.charAt(1)),
            (s = t.charAt(2)),
            (a = t.charAt(3)),
            (t =
              "#" +
              n +
              n +
              s +
              s +
              a +
              a +
              (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
          t.length === 9)
        )
          return (
            (r = parseInt(t.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & it, r & it, parseInt(t.substr(7), 16) / 255]
          );
        ((t = parseInt(t.substr(1), 16)),
          (r = [t >> 16, (t >> 8) & it, t & it]));
      } else if (t.substr(0, 3) === "hsl") {
        if (((r = _ = t.match(mo)), !i))
          ((l = (+r[0] % 360) / 360),
            (u = +r[1] / 100),
            (c = +r[2] / 100),
            (s = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (n = c * 2 - s),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Jn(l + 1 / 3, n, s)),
            (r[1] = Jn(l, n, s)),
            (r[2] = Jn(l - 1 / 3, n, s)));
        else if (~t.indexOf("="))
          return ((r = t.match(sa)), e && r.length < 4 && (r[3] = 1), r);
      } else r = t.match(mo) || zr.transparent;
      r = r.map(Number);
    }
    return (
      i &&
        !_ &&
        ((n = r[0] / it),
        (s = r[1] / it),
        (a = r[2] / it),
        (p = Math.max(n, s, a)),
        (h = Math.min(n, s, a)),
        (c = (p + h) / 2),
        p === h
          ? (l = u = 0)
          : ((f = p - h),
            (u = c > 0.5 ? f / (2 - p - h) : f / (p + h)),
            (l =
              p === n
                ? (s - a) / f + (s < a ? 6 : 0)
                : p === s
                  ? (a - n) / f + 2
                  : (n - s) / f + 4),
            (l *= 60)),
        (r[0] = ~~(l + 0.5)),
        (r[1] = ~~(u * 100 + 0.5)),
        (r[2] = ~~(c * 100 + 0.5))),
      e && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Oa = function (t) {
    var i = [],
      e = [],
      r = -1;
    return (
      t.split(ki).forEach(function (n) {
        var s = n.match(cr) || [];
        (i.push.apply(i, s), e.push((r += s.length + 1)));
      }),
      (i.c = e),
      i
    );
  },
  To = function (t, i, e) {
    var r = "",
      n = (t + r).match(ki),
      s = i ? "hsla(" : "rgba(",
      a = 0,
      l,
      u,
      c,
      p;
    if (!n) return t;
    if (
      ((n = n.map(function (h) {
        return (
          (h = Pa(h, i, 1)) &&
          s +
            (i ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) +
            ")"
        );
      })),
      e && ((c = Oa(t)), (l = e.c), l.join(r) !== c.c.join(r)))
    )
      for (u = t.replace(ki, "1").split(cr), p = u.length - 1; a < p; a++)
        r +=
          u[a] +
          (~l.indexOf(a)
            ? n.shift() || s + "0,0,0,0)"
            : (c.length ? c : n.length ? n : e).shift());
    if (!u)
      for (u = t.split(ki), p = u.length - 1; a < p; a++) r += u[a] + n[a];
    return r + u[p];
  },
  ki = (function () {
    var o =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      t;
    for (t in zr) o += "|" + t + "\\b";
    return new RegExp(o + ")", "gi");
  })(),
  su = /hsl[a]?\(/,
  Ma = function (t) {
    var i = t.join(" "),
      e;
    if (((ki.lastIndex = 0), ki.test(i)))
      return (
        (e = su.test(i)),
        (t[1] = To(t[1], e)),
        (t[0] = To(t[0], e, Oa(t[1]))),
        !0
      );
  },
  rn,
  we = (function () {
    var o = Date.now,
      t = 500,
      i = 33,
      e = o(),
      r = e,
      n = 1e3 / 240,
      s = n,
      a = [],
      l,
      u,
      c,
      p,
      h,
      f,
      _ = function d(g) {
        var w = o() - r,
          b = g === !0,
          S,
          y,
          T,
          C;
        if (
          ((w > t || w < 0) && (e += w - i),
          (r += w),
          (T = r - e),
          (S = T - s),
          (S > 0 || b) &&
            ((C = ++p.frame),
            (h = T - p.time * 1e3),
            (p.time = T = T / 1e3),
            (s += S + (S >= n ? 4 : n - S)),
            (y = 1)),
          b || (l = u(d)),
          y)
        )
          for (f = 0; f < a.length; f++) a[f](T, h, C, g);
      };
    return (
      (p = {
        time: 0,
        frame: 0,
        tick: function () {
          _(!0);
        },
        deltaRatio: function (g) {
          return h / (1e3 / (g || 60));
        },
        wake: function () {
          aa &&
            (!ds &&
              Hs() &&
              ((qe = ds = window),
              (Vs = qe.document || {}),
              (ke.gsap = he),
              (qe.gsapVersions || (qe.gsapVersions = [])).push(he.version),
              la(Ln || qe.GreenSockGlobals || (!qe.gsap && qe) || {}),
              Ca.forEach(Ea)),
            (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && p.sleep(),
            (u =
              c ||
              function (g) {
                return setTimeout(g, (s - p.time * 1e3 + 1) | 0);
              }),
            (rn = 1),
            _(2));
        },
        sleep: function () {
          ((c ? cancelAnimationFrame : clearTimeout)(l), (rn = 0), (u = tn));
        },
        lagSmoothing: function (g, w) {
          ((t = g || 1 / 0), (i = Math.min(w || 33, t)));
        },
        fps: function (g) {
          ((n = 1e3 / (g || 240)), (s = p.time * 1e3 + n));
        },
        add: function (g, w, b) {
          var S = w
            ? function (y, T, C, x) {
                (g(y, T, C, x), p.remove(S));
              }
            : g;
          return (p.remove(g), a[b ? "unshift" : "push"](S), Tr(), S);
        },
        remove: function (g, w) {
          ~(w = a.indexOf(g)) && a.splice(w, 1) && f >= w && f--;
        },
        _listeners: a,
      }),
      p
    );
  })(),
  Tr = function () {
    return !rn && we.wake();
  },
  G = {},
  ou = /^[\d.\-M][\d.\-,\s]/,
  au = /["']/g,
  lu = function (t) {
    for (
      var i = {},
        e = t.substr(1, t.length - 3).split(":"),
        r = e[0],
        n = 1,
        s = e.length,
        a,
        l,
        u;
      n < s;
      n++
    )
      ((l = e[n]),
        (a = n !== s - 1 ? l.lastIndexOf(",") : l.length),
        (u = l.substr(0, a)),
        (i[r] = isNaN(u) ? u.replace(au, "").trim() : +u),
        (r = l.substr(a + 1).trim()));
    return i;
  },
  uu = function (t) {
    var i = t.indexOf("(") + 1,
      e = t.indexOf(")"),
      r = t.indexOf("(", i);
    return t.substring(i, ~r && r < e ? t.indexOf(")", e + 1) : e);
  },
  cu = function (t) {
    var i = (t + "").split("("),
      e = G[i[0]];
    return e && i.length > 1 && e.config
      ? e.config.apply(
          null,
          ~t.indexOf("{") ? [lu(i[1])] : uu(t).split(",").map(da),
        )
      : G._CE && ou.test(t)
        ? G._CE("", t)
        : e;
  },
  Da = function (t) {
    return function (i) {
      return 1 - t(1 - i);
    };
  },
  Aa = function o(t, i) {
    for (var e = t._first, r; e;)
      (e instanceof ne
        ? o(e, i)
        : e.vars.yoyoEase &&
          (!e._yoyo || !e._repeat) &&
          e._yoyo !== i &&
          (e.timeline
            ? o(e.timeline, i)
            : ((r = e._ease),
              (e._ease = e._yEase),
              (e._yEase = r),
              (e._yoyo = i))),
        (e = e._next));
  },
  Ui = function (t, i) {
    return (t && (gt(t) ? t : G[t] || cu(t))) || i;
  },
  er = function (t, i, e, r) {
    (e === void 0 &&
      (e = function (l) {
        return 1 - i(1 - l);
      }),
      r === void 0 &&
        (r = function (l) {
          return l < 0.5 ? i(l * 2) / 2 : 1 - i((1 - l) * 2) / 2;
        }));
    var n = { easeIn: i, easeOut: e, easeInOut: r },
      s;
    return (
      ue(t, function (a) {
        ((G[a] = ke[a] = n), (G[(s = a.toLowerCase())] = e));
        for (var l in n)
          G[
            s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = G[a + "." + l] = n[l];
      }),
      n
    );
  },
  Ra = function (t) {
    return function (i) {
      return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
    };
  },
  ts = function o(t, i, e) {
    var r = i >= 1 ? i : 1,
      n = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1),
      s = (n / hs) * (Math.asin(1 / r) || 0),
      a = function (c) {
        return c === 1 ? 1 : r * Math.pow(2, -10 * c) * Ll((c - s) * n) + 1;
      },
      l =
        t === "out"
          ? a
          : t === "in"
            ? function (u) {
                return 1 - a(1 - u);
              }
            : Ra(a);
    return (
      (n = hs / n),
      (l.config = function (u, c) {
        return o(t, u, c);
      }),
      l
    );
  },
  es = function o(t, i) {
    i === void 0 && (i = 1.70158);
    var e = function (s) {
        return s ? --s * s * ((i + 1) * s + i) + 1 : 0;
      },
      r =
        t === "out"
          ? e
          : t === "in"
            ? function (n) {
                return 1 - e(1 - n);
              }
            : Ra(e);
    return (
      (r.config = function (n) {
        return o(t, n);
      }),
      r
    );
  };
ue("Linear,Quad,Cubic,Quart,Quint,Strong", function (o, t) {
  var i = t < 5 ? t + 1 : t;
  er(
    o + ",Power" + (i - 1),
    t
      ? function (e) {
          return Math.pow(e, i);
        }
      : function (e) {
          return e;
        },
    function (e) {
      return 1 - Math.pow(1 - e, i);
    },
    function (e) {
      return e < 0.5
        ? Math.pow(e * 2, i) / 2
        : 1 - Math.pow((1 - e) * 2, i) / 2;
    },
  );
});
G.Linear.easeNone = G.none = G.Linear.easeIn;
er("Elastic", ts("in"), ts("out"), ts());
(function (o, t) {
  var i = 1 / t,
    e = 2 * i,
    r = 2.5 * i,
    n = function (a) {
      return a < i
        ? o * a * a
        : a < e
          ? o * Math.pow(a - 1.5 / t, 2) + 0.75
          : a < r
            ? o * (a -= 2.25 / t) * a + 0.9375
            : o * Math.pow(a - 2.625 / t, 2) + 0.984375;
    };
  er(
    "Bounce",
    function (s) {
      return 1 - n(1 - s);
    },
    n,
  );
})(7.5625, 2.75);
er("Expo", function (o) {
  return Math.pow(2, 10 * (o - 1)) * o + o * o * o * o * o * o * (1 - o);
});
er("Circ", function (o) {
  return -(ra(1 - o * o) - 1);
});
er("Sine", function (o) {
  return o === 1 ? 1 : -zl(o * Al) + 1;
});
er("Back", es("in"), es("out"), es());
G.SteppedEase =
  G.steps =
  ke.SteppedEase =
    {
      config: function (t, i) {
        t === void 0 && (t = 1);
        var e = 1 / t,
          r = t + (i ? 0 : 1),
          n = i ? 1 : 0,
          s = 1 - rt;
        return function (a) {
          return (((r * un(0, s, a)) | 0) + n) * e;
        };
      },
    };
yr.ease = G["quad.out"];
ue(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (o) {
    return ($s += o + "," + o + "Params,");
  },
);
var za = function (t, i) {
    ((this.id = Rl++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = i),
      (this.get = i ? i.get : fa),
      (this.set = i ? i.getSetter : Js));
  },
  nn = (function () {
    function o(i) {
      ((this.vars = i),
        (this._delay = +i.delay || 0),
        (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
          ((this._rDelay = i.repeatDelay || 0),
          (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
        (this._ts = 1),
        br(this, +i.duration, 1, 1),
        (this.data = i.data),
        lt && ((this._ctx = lt), lt.data.push(this)),
        rn || we.wake());
    }
    var t = o.prototype;
    return (
      (t.delay = function (e) {
        return e || e === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + e - this._delay),
            (this._delay = e),
            this)
          : this._delay;
      }),
      (t.duration = function (e) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e,
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (e) {
        return arguments.length
          ? ((this._dirty = 0),
            br(
              this,
              this._repeat < 0
                ? e
                : (e - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (t.totalTime = function (e, r) {
        if ((Tr(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (Gn(this, e), !n._dp || n.parent || ga(n, this); n && n.parent;)
            (n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && e < this._tDur) ||
              (this._ts < 0 && e > 0) ||
              (!this._tDur && !e)) &&
            $e(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== e ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === rt) ||
            (!this._initted && this._dur && e) ||
            (!e && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = e), ha(this, e, r)),
          this
        );
      }),
      (t.time = function (e, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), e + wo(this)) %
                (this._dur + this._rDelay) || (e ? this._dur : 0),
              r,
            )
          : this._time;
      }),
      (t.totalProgress = function (e, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * e, r)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (t.progress = function (e, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) +
                wo(this),
              r,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (t.iteration = function (e, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (e - 1) * n, r)
          : this._repeat
            ? xr(this._tTime, n) + 1
            : 1;
      }),
      (t.timeScale = function (e, r) {
        if (!arguments.length) return this._rts === -rt ? 0 : this._rts;
        if (this._rts === e) return this;
        var n =
          this.parent && this._ts ? Nn(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +e || 0),
          (this._ts = this._ps || e === -rt ? 0 : this._rts),
          this.totalTime(
            un(-Math.abs(this._delay), this.totalDuration(), n),
            r !== !1,
          ),
          $n(this),
          ql(this)
        );
      }),
      (t.paused = function (e) {
        return arguments.length
          ? (this._ps !== e &&
              ((this._ps = e),
              e
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Tr(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== rt &&
                      (this._tTime -= rt),
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (e) {
        if (arguments.length) {
          this._start = ct(e);
          var r = this.parent || this._dp;
          return (
            r &&
              (r._sort || !this.parent) &&
              $e(r, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (t.endTime = function (e) {
        return (
          this._start +
          (le(e) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (e) {
        var r = this.parent || this._dp;
        return r
          ? e &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Nn(r.rawTime(e), this)
              : this._tTime
          : this._tTime;
      }),
      (t.revert = function (e) {
        e === void 0 && (e = Xl);
        var r = Nt;
        return (
          (Nt = e),
          Ks(this) &&
            (this.timeline && this.timeline.revert(e),
            this.totalTime(-0.01, e.suppressEvents)),
          this.data !== "nested" && e.kill !== !1 && this.kill(),
          (Nt = r),
          this
        );
      }),
      (t.globalTime = function (e) {
        for (var r = this, n = arguments.length ? e : r.rawTime(); r;)
          ((n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp));
        return !this.parent && this._sat ? this._sat.globalTime(e) : n;
      }),
      (t.repeat = function (e) {
        return arguments.length
          ? ((this._repeat = e === 1 / 0 ? -2 : e), xo(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (t.repeatDelay = function (e) {
        if (arguments.length) {
          var r = this._time;
          return ((this._rDelay = e), xo(this), r ? this.time(r) : this);
        }
        return this._rDelay;
      }),
      (t.yoyo = function (e) {
        return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
      }),
      (t.seek = function (e, r) {
        return this.totalTime(Pe(this, e), le(r));
      }),
      (t.restart = function (e, r) {
        return (
          this.play().totalTime(e ? -this._delay : 0, le(r)),
          this._dur || (this._zTime = -rt),
          this
        );
      }),
      (t.play = function (e, r) {
        return (e != null && this.seek(e, r), this.reversed(!1).paused(!1));
      }),
      (t.reverse = function (e, r) {
        return (
          e != null && this.seek(e || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (e, r) {
        return (e != null && this.seek(e, r), this.paused(!0));
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (e) {
        return arguments.length
          ? (!!e !== this.reversed() &&
              this.timeScale(-this._rts || (e ? -rt : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -rt), this);
      }),
      (t.isActive = function () {
        var e = this.parent || this._dp,
          r = this._start,
          n;
        return !!(
          !e ||
          (this._ts &&
            this._initted &&
            e.isActive() &&
            (n = e.rawTime(!0)) >= r &&
            n < this.endTime(!0) - rt)
        );
      }),
      (t.eventCallback = function (e, r, n) {
        var s = this.vars;
        return arguments.length > 1
          ? (r
              ? ((s[e] = r),
                n && (s[e + "Params"] = n),
                e === "onUpdate" && (this._onUpdate = r))
              : delete s[e],
            this)
          : s[e];
      }),
      (t.then = function (e) {
        var r = this,
          n = r._prom;
        return new Promise(function (s) {
          var a = gt(e) ? e : pa,
            l = function () {
              var c = r.then;
              ((r.then = null),
                n && n(),
                gt(a) && (a = a(r)) && (a.then || a === r) && (r.then = c),
                s(a),
                (r.then = c));
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? l()
            : (r._prom = l);
        });
      }),
      (t.kill = function () {
        Rr(this);
      }),
      o
    );
  })();
Ce(nn.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -rt,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var ne = (function (o) {
  ia(t, o);
  function t(e, r) {
    var n;
    return (
      e === void 0 && (e = {}),
      (n = o.call(this, e) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!e.smoothChildTiming),
      (n.autoRemoveChildren = !!e.autoRemoveChildren),
      (n._sort = le(e.sortChildren)),
      ft && $e(e.parent || ft, ri(n), r),
      e.reversed && n.reverse(),
      e.paused && n.paused(!0),
      e.scrollTrigger && ma(ri(n), e.scrollTrigger),
      n
    );
  }
  var i = t.prototype;
  return (
    (i.to = function (r, n, s) {
      return (Xr(0, arguments, this), this);
    }),
    (i.from = function (r, n, s) {
      return (Xr(1, arguments, this), this);
    }),
    (i.fromTo = function (r, n, s, a) {
      return (Xr(2, arguments, this), this);
    }),
    (i.set = function (r, n, s) {
      return (
        (n.duration = 0),
        (n.parent = this),
        Br(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new kt(r, n, Pe(this, s), 1),
        this
      );
    }),
    (i.call = function (r, n, s) {
      return $e(this, kt.delayedCall(0, r, n), s);
    }),
    (i.staggerTo = function (r, n, s, a, l, u, c) {
      return (
        (s.duration = n),
        (s.stagger = s.stagger || a),
        (s.onComplete = u),
        (s.onCompleteParams = c),
        (s.parent = this),
        new kt(r, s, Pe(this, l)),
        this
      );
    }),
    (i.staggerFrom = function (r, n, s, a, l, u, c) {
      return (
        (s.runBackwards = 1),
        (Br(s).immediateRender = le(s.immediateRender)),
        this.staggerTo(r, n, s, a, l, u, c)
      );
    }),
    (i.staggerFromTo = function (r, n, s, a, l, u, c, p) {
      return (
        (a.startAt = s),
        (Br(a).immediateRender = le(a.immediateRender)),
        this.staggerTo(r, n, a, l, u, c, p)
      );
    }),
    (i.render = function (r, n, s) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = r <= 0 ? 0 : ct(r),
        p = this._zTime < 0 != r < 0 && (this._initted || !u),
        h,
        f,
        _,
        d,
        g,
        w,
        b,
        S,
        y,
        T,
        C,
        x;
      if (
        (this !== ft && c > l && r >= 0 && (c = l), c !== this._tTime || s || p)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((c += this._time - a), (r += this._time - a)),
          (h = c),
          (y = this._start),
          (S = this._ts),
          (w = !S),
          p && (u || (a = this._zTime), (r || !n) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((C = this._yoyo),
            (g = u + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(g * 100 + r, n, s);
          if (
            ((h = ct(c % g)),
            c === l
              ? ((d = this._repeat), (h = u))
              : ((T = ct(c / g)),
                (d = ~~T),
                d && d === T && ((h = u), d--),
                h > u && (h = u)),
            (T = xr(this._tTime, g)),
            !a &&
              this._tTime &&
              T !== d &&
              this._tTime - T * g - this._dur <= 0 &&
              (T = d),
            C && d & 1 && ((h = u - h), (x = 1)),
            d !== T && !this._lock)
          ) {
            var P = C && T & 1,
              k = P === (C && d & 1);
            if (
              (d < T && (P = !P),
              (a = P ? 0 : c % u ? u : c),
              (this._lock = 1),
              (this.render(a || (x ? 0 : ct(d * g)), n, !u)._lock = 0),
              (this._tTime = c),
              !n && this.parent && be(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !x &&
                ((this.invalidate()._lock = 1), (T = d)),
              (a && a !== this._time) ||
                w !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              k &&
                ((this._lock = 2),
                (a = P ? u : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !x && this.invalidate()),
              (this._lock = 0),
              !this._ts && !w)
            )
              return this;
            Aa(this, x);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((b = Kl(this, ct(a), ct(h))), b && (c -= h - (h = b._start))),
          (this._tTime = c),
          (this._time = h),
          (this._act = !S),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (a = 0)),
          !a && c && u && !n && !T && (be(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (h >= a && r >= 0)
          for (f = this._first; f;) {
            if (
              ((_ = f._next), (f._act || h >= f._start) && f._ts && b !== f)
            ) {
              if (f.parent !== this) return this.render(r, n, s);
              if (
                (f.render(
                  f._ts > 0
                    ? (h - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (h - f._start) * f._ts,
                  n,
                  s,
                ),
                h !== this._time || (!this._ts && !w))
              ) {
                ((b = 0), _ && (c += this._zTime = -rt));
                break;
              }
            }
            f = _;
          }
        else {
          f = this._last;
          for (var E = r < 0 ? r : h; f;) {
            if (((_ = f._prev), (f._act || E <= f._end) && f._ts && b !== f)) {
              if (f.parent !== this) return this.render(r, n, s);
              if (
                (f.render(
                  f._ts > 0
                    ? (E - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (E - f._start) * f._ts,
                  n,
                  s || (Nt && Ks(f)),
                ),
                h !== this._time || (!this._ts && !w))
              ) {
                ((b = 0), _ && (c += this._zTime = E ? -rt : rt));
                break;
              }
            }
            f = _;
          }
        }
        if (
          b &&
          !n &&
          (this.pause(),
          (b.render(h >= a ? 0 : -rt)._zTime = h >= a ? 1 : -1),
          this._ts)
        )
          return ((this._start = y), $n(this), this.render(r, n, s));
        (this._onUpdate && !n && be(this, "onUpdate", !0),
          ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
            (y === this._start || Math.abs(S) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !u) &&
                ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                Ei(this, 1),
              !n &&
                !(r < 0 && !a) &&
                (c || a || !l) &&
                (be(
                  this,
                  c === l && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0,
                ),
                this._prom &&
                  !(c < l && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (i.add = function (r, n) {
      var s = this;
      if ((ui(n) || (n = Pe(this, n, r)), !(r instanceof nn))) {
        if (Gt(r))
          return (
            r.forEach(function (a) {
              return s.add(a, n);
            }),
            this
          );
        if (Rt(r)) return this.addLabel(r, n);
        if (gt(r)) r = kt.delayedCall(0, r);
        else return this;
      }
      return this !== r ? $e(this, r, n) : this;
    }),
    (i.getChildren = function (r, n, s, a) {
      (r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = -De));
      for (var l = [], u = this._first; u;)
        (u._start >= a &&
          (u instanceof kt
            ? n && l.push(u)
            : (s && l.push(u), r && l.push.apply(l, u.getChildren(!0, n, s)))),
          (u = u._next));
      return l;
    }),
    (i.getById = function (r) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--;)
        if (n[s].vars.id === r) return n[s];
    }),
    (i.remove = function (r) {
      return Rt(r)
        ? this.removeLabel(r)
        : gt(r)
          ? this.killTweensOf(r)
          : (r.parent === this && Un(this, r),
            r === this._recent && (this._recent = this._last),
            qi(this));
    }),
    (i.totalTime = function (r, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = ct(
              we.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts),
            )),
          o.prototype.totalTime.call(this, r, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (i.addLabel = function (r, n) {
      return ((this.labels[r] = Pe(this, n)), this);
    }),
    (i.removeLabel = function (r) {
      return (delete this.labels[r], this);
    }),
    (i.addPause = function (r, n, s) {
      var a = kt.delayedCall(0, n || tn, s);
      return (
        (a.data = "isPause"),
        (this._hasPause = 1),
        $e(this, a, Pe(this, r))
      );
    }),
    (i.removePause = function (r) {
      var n = this._first;
      for (r = Pe(this, r); n;)
        (n._start === r && n.data === "isPause" && Ei(n), (n = n._next));
    }),
    (i.killTweensOf = function (r, n, s) {
      for (var a = this.getTweensOf(r, s), l = a.length; l--;)
        yi !== a[l] && a[l].kill(r, n);
      return this;
    }),
    (i.getTweensOf = function (r, n) {
      for (var s = [], a = Ae(r), l = this._first, u = ui(n), c; l;)
        (l instanceof kt
          ? Wl(l._targets, a) &&
            (u
              ? (!yi || (l._initted && l._ts)) &&
                l.globalTime(0) <= n &&
                l.globalTime(l.totalDuration()) > n
              : !n || l.isActive()) &&
            s.push(l)
          : (c = l.getTweensOf(a, n)).length && s.push.apply(s, c),
          (l = l._next));
      return s;
    }),
    (i.tweenTo = function (r, n) {
      n = n || {};
      var s = this,
        a = Pe(s, r),
        l = n,
        u = l.startAt,
        c = l.onStart,
        p = l.onStartParams,
        h = l.immediateRender,
        f,
        _ = kt.to(
          s,
          Ce(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (a - (u && "time" in u ? u.time : s._time)) / s.timeScale(),
                ) ||
                rt,
              onStart: function () {
                if ((s.pause(), !f)) {
                  var g =
                    n.duration ||
                    Math.abs(
                      (a - (u && "time" in u ? u.time : s._time)) /
                        s.timeScale(),
                    );
                  (_._dur !== g && br(_, g, 0, 1).render(_._time, !0, !0),
                    (f = 1));
                }
                c && c.apply(_, p || []);
              },
            },
            n,
          ),
        );
      return h ? _.render(0) : _;
    }),
    (i.tweenFromTo = function (r, n, s) {
      return this.tweenTo(n, Ce({ startAt: { time: Pe(this, r) } }, s));
    }),
    (i.recent = function () {
      return this._recent;
    }),
    (i.nextLabel = function (r) {
      return (r === void 0 && (r = this._time), bo(this, Pe(this, r)));
    }),
    (i.previousLabel = function (r) {
      return (r === void 0 && (r = this._time), bo(this, Pe(this, r), 1));
    }),
    (i.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + rt);
    }),
    (i.shiftChildren = function (r, n, s) {
      s === void 0 && (s = 0);
      var a = this._first,
        l = this.labels,
        u;
      for (r = ct(r); a;)
        (a._start >= s && ((a._start += r), (a._end += r)), (a = a._next));
      if (n) for (u in l) l[u] >= s && (l[u] += r);
      return qi(this);
    }),
    (i.invalidate = function (r) {
      var n = this._first;
      for (this._lock = 0; n;) (n.invalidate(r), (n = n._next));
      return o.prototype.invalidate.call(this, r);
    }),
    (i.clear = function (r) {
      r === void 0 && (r = !0);
      for (var n = this._first, s; n;) ((s = n._next), this.remove(n), (n = s));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        qi(this)
      );
    }),
    (i.totalDuration = function (r) {
      var n = 0,
        s = this,
        a = s._last,
        l = De,
        u,
        c,
        p;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -r : r),
        );
      if (s._dirty) {
        for (p = s.parent; a;)
          ((u = a._prev),
            a._dirty && a.totalDuration(),
            (c = a._start),
            c > l && s._sort && a._ts && !s._lock
              ? ((s._lock = 1), ($e(s, a, c - a._delay, 1)._lock = 0))
              : (l = c),
            c < 0 &&
              a._ts &&
              ((n -= c),
              ((!p && !s._dp) || (p && p.smoothChildTiming)) &&
                ((s._start += ct(c / s._ts)), (s._time -= c), (s._tTime -= c)),
              s.shiftChildren(-c, !1, -1 / 0),
              (l = 0)),
            a._end > n && a._ts && (n = a._end),
            (a = u));
        (br(s, s === ft && s._time > n ? s._time : n, 1, 1), (s._dirty = 0));
      }
      return s._tDur;
    }),
    (t.updateRoot = function (r) {
      if ((ft._ts && (ha(ft, Nn(r, ft)), (ca = we.frame)), we.frame >= vo)) {
        vo += Se.autoSleep || 120;
        var n = ft._first;
        if ((!n || !n._ts) && Se.autoSleep && we._listeners.length < 2) {
          for (; n && !n._ts;) n = n._next;
          n || we.sleep();
        }
      }
    }),
    t
  );
})(nn);
Ce(ne.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var fu = function (t, i, e, r, n, s, a) {
    var l = new ce(this._pt, t, i, 0, 1, Ba, null, n),
      u = 0,
      c = 0,
      p,
      h,
      f,
      _,
      d,
      g,
      w,
      b;
    for (
      l.b = e,
        l.e = r,
        e += "",
        r += "",
        (w = ~r.indexOf("random(")) && (r = en(r)),
        s && ((b = [e, r]), s(b, t, i), (e = b[0]), (r = b[1])),
        h = e.match(Zn) || [];
      (p = Zn.exec(r));
    )
      ((_ = p[0]),
        (d = r.substring(u, p.index)),
        f ? (f = (f + 1) % 5) : d.substr(-5) === "rgba(" && (f = 1),
        _ !== h[c++] &&
          ((g = parseFloat(h[c - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: d || c === 1 ? d : ",",
            s: g,
            c: _.charAt(1) === "=" ? dr(g, _) - g : parseFloat(_) - g,
            m: f && f < 4 ? Math.round : 0,
          }),
          (u = Zn.lastIndex)));
    return (
      (l.c = u < r.length ? r.substring(u, r.length) : ""),
      (l.fp = a),
      (oa.test(r) || w) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  js = function (t, i, e, r, n, s, a, l, u, c) {
    gt(r) && (r = r(n || 0, t, s));
    var p = t[i],
      h =
        e !== "get"
          ? e
          : gt(p)
            ? u
              ? t[
                  i.indexOf("set") || !gt(t["get" + i.substr(3)])
                    ? i
                    : "get" + i.substr(3)
                ](u)
              : t[i]()
            : p,
      f = gt(p) ? (u ? gu : Na) : Qs,
      _;
    if (
      (Rt(r) &&
        (~r.indexOf("random(") && (r = en(r)),
        r.charAt(1) === "=" &&
          ((_ = dr(h, r) + (Ut(h) || 0)), (_ || _ === 0) && (r = _))),
      !c || h !== r || ws)
    )
      return !isNaN(h * r) && r !== ""
        ? ((_ = new ce(
            this._pt,
            t,
            i,
            +h || 0,
            r - (h || 0),
            typeof p == "boolean" ? vu : Ya,
            0,
            f,
          )),
          u && (_.fp = u),
          a && _.modifier(a, this, t),
          (this._pt = _))
        : (!p && !(i in t) && qs(i, r),
          fu.call(this, t, i, h, r, f, l || Se.stringFilter, u));
  },
  hu = function (t, i, e, r, n) {
    if (
      (gt(t) && (t = Wr(t, n, i, e, r)),
      !Ze(t) || (t.style && t.nodeType) || Gt(t) || na(t))
    )
      return Rt(t) ? Wr(t, n, i, e, r) : t;
    var s = {},
      a;
    for (a in t) s[a] = Wr(t[a], n, i, e, r);
    return s;
  },
  La = function (t, i, e, r, n, s) {
    var a, l, u, c;
    if (
      ve[t] &&
      (a = new ve[t]()).init(
        n,
        a.rawVars ? i[t] : hu(i[t], r, n, s, e),
        e,
        r,
        s,
      ) !== !1 &&
      ((e._pt = l = new ce(e._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
      e !== fr)
    )
      for (u = e._ptLookup[e._targets.indexOf(n)], c = a._props.length; c--;)
        u[a._props[c]] = l;
    return a;
  },
  yi,
  ws,
  Zs = function o(t, i, e) {
    var r = t.vars,
      n = r.ease,
      s = r.startAt,
      a = r.immediateRender,
      l = r.lazy,
      u = r.onUpdate,
      c = r.runBackwards,
      p = r.yoyoEase,
      h = r.keyframes,
      f = r.autoRevert,
      _ = t._dur,
      d = t._startAt,
      g = t._targets,
      w = t.parent,
      b = w && w.data === "nested" ? w.vars.targets : g,
      S = t._overwrite === "auto" && !Xs,
      y = t.timeline,
      T,
      C,
      x,
      P,
      k,
      E,
      L,
      O,
      q,
      H,
      K,
      U,
      z;
    if (
      (y && (!h || !n) && (n = "none"),
      (t._ease = Ui(n, yr.ease)),
      (t._yEase = p ? Da(Ui(p === !0 ? n : p, yr.ease)) : 0),
      p &&
        t._yoyo &&
        !t._repeat &&
        ((p = t._yEase), (t._yEase = t._ease), (t._ease = p)),
      (t._from = !y && !!r.runBackwards),
      !y || (h && !r.stagger))
    ) {
      if (
        ((O = g[0] ? Vi(g[0]).harness : 0),
        (U = O && r[O.prop]),
        (T = In(r, Us)),
        d &&
          (d._zTime < 0 && d.progress(1),
          i < 0 && c && a && !f ? d.render(-1, !0) : d.revert(c && _ ? Cn : Bl),
          (d._lazy = 0)),
        s)
      ) {
        if (
          (Ei(
            (t._startAt = kt.set(
              g,
              Ce(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: w,
                  immediateRender: !0,
                  lazy: !d && le(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return be(t, "onUpdate");
                    },
                  stagger: 0,
                },
                s,
              ),
            )),
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          i < 0 && (Nt || (!a && !f)) && t._startAt.revert(Cn),
          a && _ && i <= 0 && e <= 0)
        ) {
          i && (t._zTime = i);
          return;
        }
      } else if (c && _ && !d) {
        if (
          (i && (a = !1),
          (x = Ce(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !d && le(l),
              immediateRender: a,
              stagger: 0,
              parent: w,
            },
            T,
          )),
          U && (x[O.prop] = U),
          Ei((t._startAt = kt.set(g, x))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          i < 0 && (Nt ? t._startAt.revert(Cn) : t._startAt.render(-1, !0)),
          (t._zTime = i),
          !a)
        )
          o(t._startAt, rt, rt);
        else if (!i) return;
      }
      for (
        t._pt = t._ptCache = 0, l = (_ && le(l)) || (l && !_), C = 0;
        C < g.length;
        C++
      ) {
        if (
          ((k = g[C]),
          (L = k._gsap || Gs(g)[C]._gsap),
          (t._ptLookup[C] = H = {}),
          ps[L.id] && Si.length && Fn(),
          (K = b === g ? C : b.indexOf(k)),
          O &&
            (q = new O()).init(k, U || T, t, K, b) !== !1 &&
            ((t._pt = P =
              new ce(t._pt, k, q.name, 0, 1, q.render, q, 0, q.priority)),
            q._props.forEach(function (Z) {
              H[Z] = P;
            }),
            q.priority && (E = 1)),
          !O || U)
        )
          for (x in T)
            ve[x] && (q = La(x, T, t, K, k, b))
              ? q.priority && (E = 1)
              : (H[x] = P =
                  js.call(t, k, x, "get", T[x], K, b, 0, r.stringFilter));
        (t._op && t._op[C] && t.kill(k, t._op[C]),
          S &&
            t._pt &&
            ((yi = t),
            ft.killTweensOf(k, H, t.globalTime(i)),
            (z = !t.parent),
            (yi = 0)),
          t._pt && l && (ps[L.id] = 1));
      }
      (E && Xa(t), t._onInit && t._onInit(t));
    }
    ((t._onUpdate = u),
      (t._initted = (!t._op || t._pt) && !z),
      h && i <= 0 && y.render(De, !0, !0));
  },
  du = function (t, i, e, r, n, s, a, l) {
    var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[i],
      c,
      p,
      h,
      f;
    if (!u)
      for (
        u = t._ptCache[i] = [], h = t._ptLookup, f = t._targets.length;
        f--;
      ) {
        if (((c = h[f][i]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== i && c.fp !== i;) c = c._next;
        if (!c)
          return (
            (ws = 1),
            (t.vars[i] = "+=0"),
            Zs(t, a),
            (ws = 0),
            l ? Jr(i + " not eligible for reset") : 1
          );
        u.push(c);
      }
    for (f = u.length; f--;)
      ((p = u[f]),
        (c = p._pt || p),
        (c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + s * c.c),
        (c.c = e - c.s),
        p.e && (p.e = wt(e) + Ut(p.e)),
        p.b && (p.b = c.s + Ut(p.b)));
  },
  pu = function (t, i) {
    var e = t[0] ? Vi(t[0]).harness : 0,
      r = e && e.aliases,
      n,
      s,
      a,
      l;
    if (!r) return i;
    n = wr({}, i);
    for (s in r)
      if (s in n) for (l = r[s].split(","), a = l.length; a--;) n[l[a]] = n[s];
    return n;
  },
  _u = function (t, i, e, r) {
    var n = i.ease || r || "power1.inOut",
      s,
      a;
    if (Gt(i))
      ((a = e[t] || (e[t] = [])),
        i.forEach(function (l, u) {
          return a.push({ t: (u / (i.length - 1)) * 100, v: l, e: n });
        }));
    else
      for (s in i)
        ((a = e[s] || (e[s] = [])),
          s === "ease" || a.push({ t: parseFloat(t), v: i[s], e: n }));
  },
  Wr = function (t, i, e, r, n) {
    return gt(t)
      ? t.call(i, e, r, n)
      : Rt(t) && ~t.indexOf("random(")
        ? en(t)
        : t;
  },
  Fa = $s + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Ia = {};
ue(Fa + ",id,stagger,delay,duration,paused,scrollTrigger", function (o) {
  return (Ia[o] = 1);
});
var kt = (function (o) {
  ia(t, o);
  function t(e, r, n, s) {
    var a;
    (typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
      (a = o.call(this, s ? r : Br(r)) || this));
    var l = a.vars,
      u = l.duration,
      c = l.delay,
      p = l.immediateRender,
      h = l.stagger,
      f = l.overwrite,
      _ = l.keyframes,
      d = l.defaults,
      g = l.scrollTrigger,
      w = l.yoyoEase,
      b = r.parent || ft,
      S = (Gt(e) || na(e) ? ui(e[0]) : "length" in r) ? [e] : Ae(e),
      y,
      T,
      C,
      x,
      P,
      k,
      E,
      L;
    if (
      ((a._targets = S.length
        ? Gs(S)
        : Jr(
            "GSAP target " + e + " not found. https://gsap.com",
            !Se.nullTargetWarn,
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = f),
      _ || h || dn(u) || dn(c))
    ) {
      if (
        ((r = a.vars),
        (y = a.timeline =
          new ne({
            data: "nested",
            defaults: d || {},
            targets: b && b.data === "nested" ? b.vars.targets : S,
          })),
        y.kill(),
        (y.parent = y._dp = ri(a)),
        (y._start = 0),
        h || dn(u) || dn(c))
      ) {
        if (((x = S.length), (E = h && xa(h)), Ze(h)))
          for (P in h) ~Fa.indexOf(P) && (L || (L = {}), (L[P] = h[P]));
        for (T = 0; T < x; T++)
          ((C = In(r, Ia)),
            (C.stagger = 0),
            w && (C.yoyoEase = w),
            L && wr(C, L),
            (k = S[T]),
            (C.duration = +Wr(u, ri(a), T, k, S)),
            (C.delay = (+Wr(c, ri(a), T, k, S) || 0) - a._delay),
            !h &&
              x === 1 &&
              C.delay &&
              ((a._delay = c = C.delay), (a._start += c), (C.delay = 0)),
            y.to(k, C, E ? E(T, k, S) : 0),
            (y._ease = G.none));
        y.duration() ? (u = c = 0) : (a.timeline = 0);
      } else if (_) {
        (Br(Ce(y.vars.defaults, { ease: "none" })),
          (y._ease = Ui(_.ease || r.ease || "none")));
        var O = 0,
          q,
          H,
          K;
        if (Gt(_))
          (_.forEach(function (U) {
            return y.to(S, U, ">");
          }),
            y.duration());
        else {
          C = {};
          for (P in _)
            P === "ease" || P === "easeEach" || _u(P, _[P], C, _.easeEach);
          for (P in C)
            for (
              q = C[P].sort(function (U, z) {
                return U.t - z.t;
              }),
                O = 0,
                T = 0;
              T < q.length;
              T++
            )
              ((H = q[T]),
                (K = {
                  ease: H.e,
                  duration: ((H.t - (T ? q[T - 1].t : 0)) / 100) * u,
                }),
                (K[P] = H.v),
                y.to(S, K, O),
                (O += K.duration));
          y.duration() < u && y.to({}, { duration: u - y.duration() });
        }
      }
      u || a.duration((u = y.duration()));
    } else a.timeline = 0;
    return (
      f === !0 && !Xs && ((yi = ri(a)), ft.killTweensOf(S), (yi = 0)),
      $e(b, ri(a), n),
      r.reversed && a.reverse(),
      r.paused && a.paused(!0),
      (p ||
        (!u &&
          !_ &&
          a._start === ct(b._time) &&
          le(p) &&
          Ul(ri(a)) &&
          b.data !== "nested")) &&
        ((a._tTime = -rt), a.render(Math.max(0, -c) || 0)),
      g && ma(ri(a), g),
      a
    );
  }
  var i = t.prototype;
  return (
    (i.render = function (r, n, s) {
      var a = this._time,
        l = this._tDur,
        u = this._dur,
        c = r < 0,
        p = r > l - rt && !c ? l : r < rt ? 0 : r,
        h,
        f,
        _,
        d,
        g,
        w,
        b,
        S,
        y;
      if (!u) Gl(this, r, n, s);
      else if (
        p !== this._tTime ||
        !r ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c) ||
        this._lazy
      ) {
        if (((h = p), (S = this.timeline), this._repeat)) {
          if (((d = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(d * 100 + r, n, s);
          if (
            ((h = ct(p % d)),
            p === l
              ? ((_ = this._repeat), (h = u))
              : ((g = ct(p / d)),
                (_ = ~~g),
                _ && _ === g ? ((h = u), _--) : h > u && (h = u)),
            (w = this._yoyo && _ & 1),
            w && ((y = this._yEase), (h = u - h)),
            (g = xr(this._tTime, d)),
            h === a && !s && this._initted && _ === g)
          )
            return ((this._tTime = p), this);
          _ !== g &&
            (S && this._yEase && Aa(S, w),
            this.vars.repeatRefresh &&
              !w &&
              !this._lock &&
              h !== d &&
              this._initted &&
              ((this._lock = s = 1),
              (this.render(ct(d * _), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (va(this, c ? r : h, s, n, p)) return ((this._tTime = 0), this);
          if (a !== this._time && !(s && this.vars.repeatRefresh && _ !== g))
            return this;
          if (u !== this._dur) return this.render(r, n, s);
        }
        if (
          ((this._tTime = p),
          (this._time = h),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = b = (y || this._ease)(h / u)),
          this._from && (this.ratio = b = 1 - b),
          !a && p && !n && !g && (be(this, "onStart"), this._tTime !== p))
        )
          return this;
        for (f = this._pt; f;) (f.r(b, f.d), (f = f._next));
        ((S && S.render(r < 0 ? r : S._dur * S._ease(h / this._dur), n, s)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !n &&
            (c && _s(this, r, n, s), be(this, "onUpdate")),
          this._repeat &&
            _ !== g &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            be(this, "onRepeat"),
          (p === this._tDur || !p) &&
            this._tTime === p &&
            (c && !this._onUpdate && _s(this, r, !0, !0),
            (r || !u) &&
              ((p === this._tDur && this._ts > 0) || (!p && this._ts < 0)) &&
              Ei(this, 1),
            !n &&
              !(c && !a) &&
              (p || a || w) &&
              (be(this, p === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(p < l && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (i.targets = function () {
      return this._targets;
    }),
    (i.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        o.prototype.invalidate.call(this, r)
      );
    }),
    (i.resetTo = function (r, n, s, a, l) {
      (rn || we.wake(), this._ts || this.play());
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || Zs(this, u),
        (c = this._ease(u / this._dur)),
        du(this, r, n, s, a, c, u, l)
          ? this.resetTo(r, n, s, a, 1)
          : (Gn(this, 0),
            this.parent ||
              _a(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0,
              ),
            this.render(0))
      );
    }),
    (i.kill = function (r, n) {
      if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Rr(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!Nt),
          this
        );
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, n, yi && yi.vars.overwrite !== !0)
            ._first || Rr(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            br(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = r ? Ae(r) : a,
        u = this._ptLookup,
        c = this._pt,
        p,
        h,
        f,
        _,
        d,
        g,
        w;
      if ((!n || n === "all") && Vl(a, l))
        return (n === "all" && (this._pt = 0), Rr(this));
      for (
        p = this._op = this._op || [],
          n !== "all" &&
            (Rt(n) &&
              ((d = {}),
              ue(n, function (b) {
                return (d[b] = 1);
              }),
              (n = d)),
            (n = pu(a, n))),
          w = a.length;
        w--;
      )
        if (~l.indexOf(a[w])) {
          ((h = u[w]),
            n === "all"
              ? ((p[w] = n), (_ = h), (f = {}))
              : ((f = p[w] = p[w] || {}), (_ = n)));
          for (d in _)
            ((g = h && h[d]),
              g &&
                ((!("kill" in g.d) || g.d.kill(d) === !0) && Un(this, g, "_pt"),
                delete h[d]),
              f !== "all" && (f[d] = 1));
        }
      return (this._initted && !this._pt && c && Rr(this), this);
    }),
    (t.to = function (r, n) {
      return new t(r, n, arguments[2]);
    }),
    (t.from = function (r, n) {
      return Xr(1, arguments);
    }),
    (t.delayedCall = function (r, n, s, a) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: a,
      });
    }),
    (t.fromTo = function (r, n, s) {
      return Xr(2, arguments);
    }),
    (t.set = function (r, n) {
      return ((n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(r, n));
    }),
    (t.killTweensOf = function (r, n, s) {
      return ft.killTweensOf(r, n, s);
    }),
    t
  );
})(nn);
Ce(kt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
ue("staggerTo,staggerFrom,staggerFromTo", function (o) {
  kt[o] = function () {
    var t = new ne(),
      i = ms.call(arguments, 0);
    return (i.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), t[o].apply(t, i));
  };
});
var Qs = function (t, i, e) {
    return (t[i] = e);
  },
  Na = function (t, i, e) {
    return t[i](e);
  },
  gu = function (t, i, e, r) {
    return t[i](r.fp, e);
  },
  mu = function (t, i, e) {
    return t.setAttribute(i, e);
  },
  Js = function (t, i) {
    return gt(t[i]) ? Na : Ws(t[i]) && t.setAttribute ? mu : Qs;
  },
  Ya = function (t, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
  },
  vu = function (t, i) {
    return i.set(i.t, i.p, !!(i.s + i.c * t), i);
  },
  Ba = function (t, i) {
    var e = i._pt,
      r = "";
    if (!t && i.b) r = i.b;
    else if (t === 1 && i.e) r = i.e;
    else {
      for (; e;)
        ((r =
          e.p +
          (e.m ? e.m(e.s + e.c * t) : Math.round((e.s + e.c * t) * 1e4) / 1e4) +
          r),
          (e = e._next));
      r += i.c;
    }
    i.set(i.t, i.p, r, i);
  },
  to = function (t, i) {
    for (var e = i._pt; e;) (e.r(t, e.d), (e = e._next));
  },
  yu = function (t, i, e, r) {
    for (var n = this._pt, s; n;)
      ((s = n._next), n.p === r && n.modifier(t, i, e), (n = s));
  },
  wu = function (t) {
    for (var i = this._pt, e, r; i;)
      ((r = i._next),
        (i.p === t && !i.op) || i.op === t
          ? Un(this, i, "_pt")
          : i.dep || (e = 1),
        (i = r));
    return !e;
  },
  xu = function (t, i, e, r) {
    r.mSet(t, i, r.m.call(r.tween, e, r.mt), r);
  },
  Xa = function (t) {
    for (var i = t._pt, e, r, n, s; i;) {
      for (e = i._next, r = n; r && r.pr > i.pr;) r = r._next;
      ((i._prev = r ? r._prev : s) ? (i._prev._next = i) : (n = i),
        (i._next = r) ? (r._prev = i) : (s = i),
        (i = e));
    }
    t._pt = n;
  },
  ce = (function () {
    function o(i, e, r, n, s, a, l, u, c) {
      ((this.t = e),
        (this.s = n),
        (this.c = s),
        (this.p = r),
        (this.r = a || Ya),
        (this.d = l || this),
        (this.set = u || Qs),
        (this.pr = c || 0),
        (this._next = i),
        i && (i._prev = this));
    }
    var t = o.prototype;
    return (
      (t.modifier = function (e, r, n) {
        ((this.mSet = this.mSet || this.set),
          (this.set = xu),
          (this.m = e),
          (this.mt = n),
          (this.tween = r));
      }),
      o
    );
  })();
ue(
  $s +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (o) {
    return (Us[o] = 1);
  },
);
ke.TweenMax = ke.TweenLite = kt;
ke.TimelineLite = ke.TimelineMax = ne;
ft = new ne({
  sortChildren: !1,
  defaults: yr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Se.stringFilter = Ma;
var $i = [],
  Pn = {},
  bu = [],
  So = 0,
  Tu = 0,
  is = function (t) {
    return (Pn[t] || bu).map(function (i) {
      return i();
    });
  },
  xs = function () {
    var t = Date.now(),
      i = [];
    t - So > 2 &&
      (is("matchMediaInit"),
      $i.forEach(function (e) {
        var r = e.queries,
          n = e.conditions,
          s,
          a,
          l,
          u;
        for (a in r)
          ((s = qe.matchMedia(r[a]).matches),
            s && (l = 1),
            s !== n[a] && ((n[a] = s), (u = 1)));
        u && (e.revert(), l && i.push(e));
      }),
      is("matchMediaRevert"),
      i.forEach(function (e) {
        return e.onMatch(e, function (r) {
          return e.add(null, r);
        });
      }),
      (So = t),
      is("matchMedia"));
  },
  Wa = (function () {
    function o(i, e) {
      ((this.selector = e && vs(e)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Tu++),
        i && this.add(i));
    }
    var t = o.prototype;
    return (
      (t.add = function (e, r, n) {
        gt(e) && ((n = r), (r = e), (e = gt));
        var s = this,
          a = function () {
            var u = lt,
              c = s.selector,
              p;
            return (
              u && u !== s && u.data.push(s),
              n && (s.selector = vs(n)),
              (lt = s),
              (p = r.apply(s, arguments)),
              gt(p) && s._r.push(p),
              (lt = u),
              (s.selector = c),
              (s.isReverted = !1),
              p
            );
          };
        return (
          (s.last = a),
          e === gt
            ? a(s, function (l) {
                return s.add(null, l);
              })
            : e
              ? (s[e] = a)
              : a
        );
      }),
      (t.ignore = function (e) {
        var r = lt;
        ((lt = null), e(this), (lt = r));
      }),
      (t.getTweens = function () {
        var e = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof o
              ? e.push.apply(e, r.getTweens())
              : r instanceof kt &&
                  !(r.parent && r.parent.data === "nested") &&
                  e.push(r);
          }),
          e
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (e, r) {
        var n = this;
        if (
          (e
            ? (function () {
                for (var a = n.getTweens(), l = n.data.length, u; l--;)
                  ((u = n.data[l]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (c) {
                        return a.splice(a.indexOf(c), 1);
                      })));
                for (
                  a
                    .map(function (c) {
                      return {
                        g:
                          c._dur ||
                          c._delay ||
                          (c._sat && !c._sat.vars.immediateRender)
                            ? c.globalTime(0)
                            : -1 / 0,
                        t: c,
                      };
                    })
                    .sort(function (c, p) {
                      return p.g - c.g || -1 / 0;
                    })
                    .forEach(function (c) {
                      return c.t.revert(e);
                    }),
                    l = n.data.length;
                  l--;
                )
                  ((u = n.data[l]),
                    u instanceof ne
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof kt) && u.revert && u.revert(e));
                (n._r.forEach(function (c) {
                  return c(e, n);
                }),
                  (n.isReverted = !0));
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
          this.clear(),
          r)
        )
          for (var s = $i.length; s--;) $i[s].id === this.id && $i.splice(s, 1);
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      o
    );
  })(),
  Su = (function () {
    function o(i) {
      ((this.contexts = []), (this.scope = i), lt && lt.data.push(this));
    }
    var t = o.prototype;
    return (
      (t.add = function (e, r, n) {
        Ze(e) || (e = { matches: e });
        var s = new Wa(0, n || this.scope),
          a = (s.conditions = {}),
          l,
          u,
          c;
        (lt && !s.selector && (s.selector = lt.selector),
          this.contexts.push(s),
          (r = s.add("onMatch", r)),
          (s.queries = e));
        for (u in e)
          u === "all"
            ? (c = 1)
            : ((l = qe.matchMedia(e[u])),
              l &&
                ($i.indexOf(s) < 0 && $i.push(s),
                (a[u] = l.matches) && (c = 1),
                l.addListener
                  ? l.addListener(xs)
                  : l.addEventListener("change", xs)));
        return (
          c &&
            r(s, function (p) {
              return s.add(null, p);
            }),
          this
        );
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      (t.kill = function (e) {
        this.contexts.forEach(function (r) {
          return r.kill(e, !0);
        });
      }),
      o
    );
  })(),
  Yn = {
    registerPlugin: function () {
      for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
        i[e] = arguments[e];
      i.forEach(function (r) {
        return Ea(r);
      });
    },
    timeline: function (t) {
      return new ne(t);
    },
    getTweensOf: function (t, i) {
      return ft.getTweensOf(t, i);
    },
    getProperty: function (t, i, e, r) {
      Rt(t) && (t = Ae(t)[0]);
      var n = Vi(t || {}).get,
        s = e ? pa : da;
      return (
        e === "native" && (e = ""),
        t &&
          (i
            ? s(((ve[i] && ve[i].get) || n)(t, i, e, r))
            : function (a, l, u) {
                return s(((ve[a] && ve[a].get) || n)(t, a, l, u));
              })
      );
    },
    quickSetter: function (t, i, e) {
      if (((t = Ae(t)), t.length > 1)) {
        var r = t.map(function (c) {
            return he.quickSetter(c, i, e);
          }),
          n = r.length;
        return function (c) {
          for (var p = n; p--;) r[p](c);
        };
      }
      t = t[0] || {};
      var s = ve[i],
        a = Vi(t),
        l = (a.harness && (a.harness.aliases || {})[i]) || i,
        u = s
          ? function (c) {
              var p = new s();
              ((fr._pt = 0),
                p.init(t, e ? c + e : c, fr, 0, [t]),
                p.render(1, p),
                fr._pt && to(1, fr));
            }
          : a.set(t, l);
      return s
        ? u
        : function (c) {
            return u(t, l, e ? c + e : c, a, 1);
          };
    },
    quickTo: function (t, i, e) {
      var r,
        n = he.to(
          t,
          Ce(
            ((r = {}), (r[i] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            e || {},
          ),
        ),
        s = function (l, u, c) {
          return n.resetTo(i, l, u, c);
        };
      return ((s.tween = n), s);
    },
    isTweening: function (t) {
      return ft.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return (t && t.ease && (t.ease = Ui(t.ease, yr.ease)), yo(yr, t || {}));
    },
    config: function (t) {
      return yo(Se, t || {});
    },
    registerEffect: function (t) {
      var i = t.name,
        e = t.effect,
        r = t.plugins,
        n = t.defaults,
        s = t.extendTimeline;
      ((r || "").split(",").forEach(function (a) {
        return (
          a && !ve[a] && !ke[a] && Jr(i + " effect requires " + a + " plugin.")
        );
      }),
        (Qn[i] = function (a, l, u) {
          return e(Ae(a), Ce(l || {}, n), u);
        }),
        s &&
          (ne.prototype[i] = function (a, l, u) {
            return this.add(Qn[i](a, Ze(l) ? l : (u = l) && {}, this), u);
          }));
    },
    registerEase: function (t, i) {
      G[t] = Ui(i);
    },
    parseEase: function (t, i) {
      return arguments.length ? Ui(t, i) : G;
    },
    getById: function (t) {
      return ft.getById(t);
    },
    exportRoot: function (t, i) {
      t === void 0 && (t = {});
      var e = new ne(t),
        r,
        n;
      for (
        e.smoothChildTiming = le(t.smoothChildTiming),
          ft.remove(e),
          e._dp = 0,
          e._time = e._tTime = ft._time,
          r = ft._first;
        r;
      )
        ((n = r._next),
          (i ||
            !(
              !r._dur &&
              r instanceof kt &&
              r.vars.onComplete === r._targets[0]
            )) &&
            $e(e, r, r._start - r._delay),
          (r = n));
      return ($e(ft, e, 0), e);
    },
    context: function (t, i) {
      return t ? new Wa(t, i) : lt;
    },
    matchMedia: function (t) {
      return new Su(t);
    },
    matchMediaRefresh: function () {
      return (
        $i.forEach(function (t) {
          var i = t.conditions,
            e,
            r;
          for (r in i) i[r] && ((i[r] = !1), (e = 1));
          e && t.revert();
        }) || xs()
      );
    },
    addEventListener: function (t, i) {
      var e = Pn[t] || (Pn[t] = []);
      ~e.indexOf(i) || e.push(i);
    },
    removeEventListener: function (t, i) {
      var e = Pn[t],
        r = e && e.indexOf(i);
      r >= 0 && e.splice(r, 1);
    },
    utils: {
      wrap: iu,
      wrapYoyo: ru,
      distribute: xa,
      random: Ta,
      snap: ba,
      normalize: eu,
      getUnit: Ut,
      clamp: Zl,
      splitColor: Pa,
      toArray: Ae,
      selector: vs,
      mapRange: ka,
      pipe: Jl,
      unitize: tu,
      interpolate: nu,
      shuffle: wa,
    },
    install: la,
    effects: Qn,
    ticker: we,
    updateRoot: ne.updateRoot,
    plugins: ve,
    globalTimeline: ft,
    core: {
      PropTween: ce,
      globals: ua,
      Tween: kt,
      Timeline: ne,
      Animation: nn,
      getCache: Vi,
      _removeLinkedListItem: Un,
      reverting: function () {
        return Nt;
      },
      context: function (t) {
        return (t && lt && (lt.data.push(t), (t._ctx = lt)), lt);
      },
      suppressOverwrites: function (t) {
        return (Xs = t);
      },
    },
  };
ue("to,from,fromTo,delayedCall,set,killTweensOf", function (o) {
  return (Yn[o] = kt[o]);
});
we.add(ne.updateRoot);
fr = Yn.to({}, { duration: 0 });
var ku = function (t, i) {
    for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i;)
      e = e._next;
    return e;
  },
  Cu = function (t, i) {
    var e = t._targets,
      r,
      n,
      s;
    for (r in i)
      for (n = e.length; n--;)
        ((s = t._ptLookup[n][r]),
          s &&
            (s = s.d) &&
            (s._pt && (s = ku(s, r)),
            s && s.modifier && s.modifier(i[r], t, e[n], r)));
  },
  rs = function (t, i) {
    return {
      name: t,
      headless: 1,
      rawVars: 1,
      init: function (r, n, s) {
        s._onInit = function (a) {
          var l, u;
          if (
            (Rt(n) &&
              ((l = {}),
              ue(n, function (c) {
                return (l[c] = 1);
              }),
              (n = l)),
            i)
          ) {
            l = {};
            for (u in n) l[u] = i(n[u]);
            n = l;
          }
          Cu(a, n);
        };
      },
    };
  },
  he =
    Yn.registerPlugin(
      {
        name: "attr",
        init: function (t, i, e, r, n) {
          var s, a, l;
          this.tween = e;
          for (s in i)
            ((l = t.getAttribute(s) || ""),
              (a = this.add(
                t,
                "setAttribute",
                (l || 0) + "",
                i[s],
                r,
                n,
                0,
                0,
                s,
              )),
              (a.op = s),
              (a.b = l),
              this._props.push(s));
        },
        render: function (t, i) {
          for (var e = i._pt; e;)
            (Nt ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), (e = e._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (t, i) {
          for (var e = i.length; e--;)
            this.add(t, e, t[e] || 0, i[e], 0, 0, 0, 0, 0, 1);
        },
      },
      rs("roundProps", ys),
      rs("modifiers"),
      rs("snap", ba),
    ) || Yn;
kt.version = ne.version = he.version = "3.14.2";
aa = 1;
Hs() && Tr();
G.Power0;
G.Power1;
G.Power2;
G.Power3;
G.Power4;
G.Linear;
G.Quad;
G.Cubic;
G.Quart;
G.Quint;
G.Strong;
G.Elastic;
G.Back;
G.SteppedEase;
G.Bounce;
G.Sine;
G.Expo;
G.Circ;
var ko,
  wi,
  pr,
  eo,
  Wi,
  Co,
  io,
  Eu = function () {
    return typeof window < "u";
  },
  ci = {},
  Yi = 180 / Math.PI,
  _r = Math.PI / 180,
  sr = Math.atan2,
  Eo = 1e8,
  ro = /([A-Z])/g,
  Pu = /(left|right|width|margin|padding|x)/i,
  Ou = /[\s,\(]\S/,
  Ge = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  bs = function (t, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
  },
  Mu = function (t, i) {
    return i.set(
      i.t,
      i.p,
      t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u,
      i,
    );
  },
  Du = function (t, i) {
    return i.set(
      i.t,
      i.p,
      t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b,
      i,
    );
  },
  Au = function (t, i) {
    return i.set(
      i.t,
      i.p,
      t === 1 ? i.e : t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b,
      i,
    );
  },
  Ru = function (t, i) {
    var e = i.s + i.c * t;
    i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
  },
  Ha = function (t, i) {
    return i.set(i.t, i.p, t ? i.e : i.b, i);
  },
  Va = function (t, i) {
    return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
  },
  zu = function (t, i, e) {
    return (t.style[i] = e);
  },
  Lu = function (t, i, e) {
    return t.style.setProperty(i, e);
  },
  Fu = function (t, i, e) {
    return (t._gsap[i] = e);
  },
  Iu = function (t, i, e) {
    return (t._gsap.scaleX = t._gsap.scaleY = e);
  },
  Nu = function (t, i, e, r, n) {
    var s = t._gsap;
    ((s.scaleX = s.scaleY = e), s.renderTransform(n, s));
  },
  Yu = function (t, i, e, r, n) {
    var s = t._gsap;
    ((s[i] = e), s.renderTransform(n, s));
  },
  ht = "transform",
  fe = ht + "Origin",
  Bu = function o(t, i) {
    var e = this,
      r = this.target,
      n = r.style,
      s = r._gsap;
    if (t in ci && n) {
      if (((this.tfm = this.tfm || {}), t !== "transform"))
        ((t = Ge[t] || t),
          ~t.indexOf(",")
            ? t.split(",").forEach(function (a) {
                return (e.tfm[a] = ni(r, a));
              })
            : (this.tfm[t] = s.x ? s[t] : ni(r, t)),
          t === fe && (this.tfm.zOrigin = s.zOrigin));
      else
        return Ge.transform.split(",").forEach(function (a) {
          return o.call(e, a, i);
        });
      if (this.props.indexOf(ht) >= 0) return;
      (s.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(fe, i, "")),
        (t = ht));
    }
    (n || i) && this.props.push(t, i, n[t]);
  },
  qa = function (t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  },
  Xu = function () {
    var t = this.props,
      i = this.target,
      e = i.style,
      r = i._gsap,
      n,
      s;
    for (n = 0; n < t.length; n += 3)
      t[n + 1]
        ? t[n + 1] === 2
          ? i[t[n]](t[n + 2])
          : (i[t[n]] = t[n + 2])
        : t[n + 2]
          ? (e[t[n]] = t[n + 2])
          : e.removeProperty(
              t[n].substr(0, 2) === "--"
                ? t[n]
                : t[n].replace(ro, "-$1").toLowerCase(),
            );
    if (this.tfm) {
      for (s in this.tfm) r[s] = this.tfm[s];
      (r.svg &&
        (r.renderTransform(),
        i.setAttribute("data-svg-origin", this.svgo || "")),
        (n = io()),
        (!n || !n.isStart) &&
          !e[ht] &&
          (qa(e),
          r.zOrigin &&
            e[fe] &&
            ((e[fe] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1)));
    }
  },
  Ua = function (t, i) {
    var e = { target: t, props: [], revert: Xu, save: Bu };
    return (
      t._gsap || he.core.getCache(t),
      i &&
        t.style &&
        t.nodeType &&
        i.split(",").forEach(function (r) {
          return e.save(r);
        }),
      e
    );
  },
  $a,
  Ts = function (t, i) {
    var e = wi.createElementNS
      ? wi.createElementNS(
          (i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t,
        )
      : wi.createElement(t);
    return e && e.style ? e : wi.createElement(t);
  },
  Te = function o(t, i, e) {
    var r = getComputedStyle(t);
    return (
      r[i] ||
      r.getPropertyValue(i.replace(ro, "-$1").toLowerCase()) ||
      r.getPropertyValue(i) ||
      (!e && o(t, Sr(i) || i, 1)) ||
      ""
    );
  },
  Po = "O,Moz,ms,Ms,Webkit".split(","),
  Sr = function (t, i, e) {
    var r = i || Wi,
      n = r.style,
      s = 5;
    if (t in n && !e) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      s-- && !(Po[s] + t in n);
    );
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Po[s] : "") + t;
  },
  Ss = function () {
    Eu() &&
      window.document &&
      ((ko = window),
      (wi = ko.document),
      (pr = wi.documentElement),
      (Wi = Ts("div") || { style: {} }),
      Ts("div"),
      (ht = Sr(ht)),
      (fe = ht + "Origin"),
      (Wi.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      ($a = !!Sr("perspective")),
      (io = he.core.reverting),
      (eo = 1));
  },
  Oo = function (t) {
    var i = t.ownerSVGElement,
      e = Ts(
        "svg",
        (i && i.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
      ),
      r = t.cloneNode(!0),
      n;
    ((r.style.display = "block"), e.appendChild(r), pr.appendChild(e));
    try {
      n = r.getBBox();
    } catch {}
    return (e.removeChild(r), pr.removeChild(e), n);
  },
  Mo = function (t, i) {
    for (var e = i.length; e--;)
      if (t.hasAttribute(i[e])) return t.getAttribute(i[e]);
  },
  Ga = function (t) {
    var i, e;
    try {
      i = t.getBBox();
    } catch {
      ((i = Oo(t)), (e = 1));
    }
    return (
      (i && (i.width || i.height)) || e || (i = Oo(t)),
      i && !i.width && !i.x && !i.y
        ? {
            x: +Mo(t, ["x", "cx", "x1"]) || 0,
            y: +Mo(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : i
    );
  },
  Ka = function (t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Ga(t));
  },
  Pi = function (t, i) {
    if (i) {
      var e = t.style,
        r;
      (i in ci && i !== fe && (i = ht),
        e.removeProperty
          ? ((r = i.substr(0, 2)),
            (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
            e.removeProperty(
              r === "--" ? i : i.replace(ro, "-$1").toLowerCase(),
            ))
          : e.removeAttribute(i));
    }
  },
  xi = function (t, i, e, r, n, s) {
    var a = new ce(t._pt, i, e, 0, 1, s ? Va : Ha);
    return ((t._pt = a), (a.b = r), (a.e = n), t._props.push(e), a);
  },
  Do = { deg: 1, rad: 1, turn: 1 },
  Wu = { grid: 1, flex: 1 },
  Oi = function o(t, i, e, r) {
    var n = parseFloat(e) || 0,
      s = (e + "").trim().substr((n + "").length) || "px",
      a = Wi.style,
      l = Pu.test(i),
      u = t.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      p = 100,
      h = r === "px",
      f = r === "%",
      _,
      d,
      g,
      w;
    if (r === s || !n || Do[r] || Do[s]) return n;
    if (
      (s !== "px" && !h && (n = o(t, i, e, "px")),
      (w = t.getCTM && Ka(t)),
      (f || s === "%") && (ci[i] || ~i.indexOf("adius")))
    )
      return (
        (_ = w ? t.getBBox()[l ? "width" : "height"] : t[c]),
        wt(f ? (n / _) * p : (n / 100) * _)
      );
    if (
      ((a[l ? "width" : "height"] = p + (h ? s : r)),
      (d =
        (r !== "rem" && ~i.indexOf("adius")) ||
        (r === "em" && t.appendChild && !u)
          ? t
          : t.parentNode),
      w && (d = (t.ownerSVGElement || {}).parentNode),
      (!d || d === wi || !d.appendChild) && (d = wi.body),
      (g = d._gsap),
      g && f && g.width && l && g.time === we.time && !g.uncache)
    )
      return wt((n / g.width) * p);
    if (f && (i === "height" || i === "width")) {
      var b = t.style[i];
      ((t.style[i] = p + r), (_ = t[c]), b ? (t.style[i] = b) : Pi(t, i));
    } else
      ((f || s === "%") &&
        !Wu[Te(d, "display")] &&
        (a.position = Te(t, "position")),
        d === t && (a.position = "static"),
        d.appendChild(Wi),
        (_ = Wi[c]),
        d.removeChild(Wi),
        (a.position = "absolute"));
    return (
      l && f && ((g = Vi(d)), (g.time = we.time), (g.width = d[c])),
      wt(h ? (_ * n) / p : _ && n ? (p / _) * n : 0)
    );
  },
  ni = function (t, i, e, r) {
    var n;
    return (
      eo || Ss(),
      i in Ge &&
        i !== "transform" &&
        ((i = Ge[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
      ci[i] && i !== "transform"
        ? ((n = on(t, r)),
          (n =
            i !== "transformOrigin"
              ? n[i]
              : n.svg
                ? n.origin
                : Xn(Te(t, fe)) + " " + n.zOrigin + "px"))
        : ((n = t.style[i]),
          (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
            (n =
              (Bn[i] && Bn[i](t, i, e)) ||
              Te(t, i) ||
              fa(t, i) ||
              (i === "opacity" ? 1 : 0))),
      e && !~(n + "").trim().indexOf(" ") ? Oi(t, i, n, e) + e : n
    );
  },
  Hu = function (t, i, e, r) {
    if (!e || e === "none") {
      var n = Sr(i, t, 1),
        s = n && Te(t, n, 1);
      s && s !== e
        ? ((i = n), (e = s))
        : i === "borderColor" && (e = Te(t, "borderTopColor"));
    }
    var a = new ce(this._pt, t.style, i, 0, 1, Ba),
      l = 0,
      u = 0,
      c,
      p,
      h,
      f,
      _,
      d,
      g,
      w,
      b,
      S,
      y,
      T;
    if (
      ((a.b = e),
      (a.e = r),
      (e += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" &&
        (r = Te(t, r.substring(4, r.indexOf(")")))),
      r === "auto" &&
        ((d = t.style[i]),
        (t.style[i] = r),
        (r = Te(t, i) || r),
        d ? (t.style[i] = d) : Pi(t, i)),
      (c = [e, r]),
      Ma(c),
      (e = c[0]),
      (r = c[1]),
      (h = e.match(cr) || []),
      (T = r.match(cr) || []),
      T.length)
    ) {
      for (; (p = cr.exec(r));)
        ((g = p[0]),
          (b = r.substring(l, p.index)),
          _
            ? (_ = (_ + 1) % 5)
            : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (_ = 1),
          g !== (d = h[u++] || "") &&
            ((f = parseFloat(d) || 0),
            (y = d.substr((f + "").length)),
            g.charAt(1) === "=" && (g = dr(f, g) + y),
            (w = parseFloat(g)),
            (S = g.substr((w + "").length)),
            (l = cr.lastIndex - S.length),
            S ||
              ((S = S || Se.units[i] || y),
              l === r.length && ((r += S), (a.e += S))),
            y !== S && (f = Oi(t, i, d, S) || 0),
            (a._pt = {
              _next: a._pt,
              p: b || u === 1 ? b : ",",
              s: f,
              c: w - f,
              m: (_ && _ < 4) || i === "zIndex" ? Math.round : 0,
            })));
      a.c = l < r.length ? r.substring(l, r.length) : "";
    } else a.r = i === "display" && r === "none" ? Va : Ha;
    return (oa.test(r) && (a.e = 0), (this._pt = a), a);
  },
  Ao = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Vu = function (t) {
    var i = t.split(" "),
      e = i[0],
      r = i[1] || "50%";
    return (
      (e === "top" || e === "bottom" || r === "left" || r === "right") &&
        ((t = e), (e = r), (r = t)),
      (i[0] = Ao[e] || e),
      (i[1] = Ao[r] || r),
      i.join(" ")
    );
  },
  qu = function (t, i) {
    if (i.tween && i.tween._time === i.tween._dur) {
      var e = i.t,
        r = e.style,
        n = i.u,
        s = e._gsap,
        a,
        l,
        u;
      if (n === "all" || n === !0) ((r.cssText = ""), (l = 1));
      else
        for (n = n.split(","), u = n.length; --u > -1;)
          ((a = n[u]),
            ci[a] && ((l = 1), (a = a === "transformOrigin" ? fe : ht)),
            Pi(e, a));
      l &&
        (Pi(e, ht),
        s &&
          (s.svg && e.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          on(e, 1),
          (s.uncache = 1),
          qa(r)));
    }
  },
  Bn = {
    clearProps: function (t, i, e, r, n) {
      if (n.data !== "isFromStart") {
        var s = (t._pt = new ce(t._pt, i, e, 0, 0, qu));
        return ((s.u = r), (s.pr = -10), (s.tween = n), t._props.push(e), 1);
      }
    },
  },
  sn = [1, 0, 0, 1, 0, 0],
  ja = {},
  Za = function (t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  },
  Ro = function (t) {
    var i = Te(t, ht);
    return Za(i) ? sn : i.substr(7).match(sa).map(wt);
  },
  no = function (t, i) {
    var e = t._gsap || Vi(t),
      r = t.style,
      n = Ro(t),
      s,
      a,
      l,
      u;
    return e.svg && t.getAttribute("transform")
      ? ((l = t.transform.baseVal.consolidate().matrix),
        (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
        n.join(",") === "1,0,0,1,0,0" ? sn : n)
      : (n === sn &&
          !t.offsetParent &&
          t !== pr &&
          !e.svg &&
          ((l = r.display),
          (r.display = "block"),
          (s = t.parentNode),
          (!s || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
            ((u = 1), (a = t.nextElementSibling), pr.appendChild(t)),
          (n = Ro(t)),
          l ? (r.display = l) : Pi(t, "display"),
          u &&
            (a
              ? s.insertBefore(t, a)
              : s
                ? s.appendChild(t)
                : pr.removeChild(t))),
        i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  ks = function (t, i, e, r, n, s) {
    var a = t._gsap,
      l = n || no(t, !0),
      u = a.xOrigin || 0,
      c = a.yOrigin || 0,
      p = a.xOffset || 0,
      h = a.yOffset || 0,
      f = l[0],
      _ = l[1],
      d = l[2],
      g = l[3],
      w = l[4],
      b = l[5],
      S = i.split(" "),
      y = parseFloat(S[0]) || 0,
      T = parseFloat(S[1]) || 0,
      C,
      x,
      P,
      k;
    (e
      ? l !== sn &&
        (x = f * g - _ * d) &&
        ((P = y * (g / x) + T * (-d / x) + (d * b - g * w) / x),
        (k = y * (-_ / x) + T * (f / x) - (f * b - _ * w) / x),
        (y = P),
        (T = k))
      : ((C = Ga(t)),
        (y = C.x + (~S[0].indexOf("%") ? (y / 100) * C.width : y)),
        (T = C.y + (~(S[1] || S[0]).indexOf("%") ? (T / 100) * C.height : T))),
      r || (r !== !1 && a.smooth)
        ? ((w = y - u),
          (b = T - c),
          (a.xOffset = p + (w * f + b * d) - w),
          (a.yOffset = h + (w * _ + b * g) - b))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = y),
      (a.yOrigin = T),
      (a.smooth = !!r),
      (a.origin = i),
      (a.originIsAbsolute = !!e),
      (t.style[fe] = "0px 0px"),
      s &&
        (xi(s, a, "xOrigin", u, y),
        xi(s, a, "yOrigin", c, T),
        xi(s, a, "xOffset", p, a.xOffset),
        xi(s, a, "yOffset", h, a.yOffset)),
      t.setAttribute("data-svg-origin", y + " " + T));
  },
  on = function (t, i) {
    var e = t._gsap || new za(t);
    if ("x" in e && !i && !e.uncache) return e;
    var r = t.style,
      n = e.scaleX < 0,
      s = "px",
      a = "deg",
      l = getComputedStyle(t),
      u = Te(t, fe) || "0",
      c,
      p,
      h,
      f,
      _,
      d,
      g,
      w,
      b,
      S,
      y,
      T,
      C,
      x,
      P,
      k,
      E,
      L,
      O,
      q,
      H,
      K,
      U,
      z,
      Z,
      st,
      m,
      ot,
      Kt,
      ze,
      dt,
      zt;
    return (
      (c = p = h = d = g = w = b = S = y = 0),
      (f = _ = 1),
      (e.svg = !!(t.getCTM && Ka(t))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (r[ht] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[ht] !== "none" ? l[ht] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (x = no(t, e.svg)),
      e.svg &&
        (e.uncache
          ? ((Z = t.getBBox()),
            (u = e.xOrigin - Z.x + "px " + (e.yOrigin - Z.y) + "px"),
            (z = ""))
          : (z = !i && t.getAttribute("data-svg-origin")),
        ks(t, z || u, !!z || e.originIsAbsolute, e.smooth !== !1, x)),
      (T = e.xOrigin || 0),
      (C = e.yOrigin || 0),
      x !== sn &&
        ((L = x[0]),
        (O = x[1]),
        (q = x[2]),
        (H = x[3]),
        (c = K = x[4]),
        (p = U = x[5]),
        x.length === 6
          ? ((f = Math.sqrt(L * L + O * O)),
            (_ = Math.sqrt(H * H + q * q)),
            (d = L || O ? sr(O, L) * Yi : 0),
            (b = q || H ? sr(q, H) * Yi + d : 0),
            b && (_ *= Math.abs(Math.cos(b * _r))),
            e.svg && ((c -= T - (T * L + C * q)), (p -= C - (T * O + C * H))))
          : ((zt = x[6]),
            (ze = x[7]),
            (m = x[8]),
            (ot = x[9]),
            (Kt = x[10]),
            (dt = x[11]),
            (c = x[12]),
            (p = x[13]),
            (h = x[14]),
            (P = sr(zt, Kt)),
            (g = P * Yi),
            P &&
              ((k = Math.cos(-P)),
              (E = Math.sin(-P)),
              (z = K * k + m * E),
              (Z = U * k + ot * E),
              (st = zt * k + Kt * E),
              (m = K * -E + m * k),
              (ot = U * -E + ot * k),
              (Kt = zt * -E + Kt * k),
              (dt = ze * -E + dt * k),
              (K = z),
              (U = Z),
              (zt = st)),
            (P = sr(-q, Kt)),
            (w = P * Yi),
            P &&
              ((k = Math.cos(-P)),
              (E = Math.sin(-P)),
              (z = L * k - m * E),
              (Z = O * k - ot * E),
              (st = q * k - Kt * E),
              (dt = H * E + dt * k),
              (L = z),
              (O = Z),
              (q = st)),
            (P = sr(O, L)),
            (d = P * Yi),
            P &&
              ((k = Math.cos(P)),
              (E = Math.sin(P)),
              (z = L * k + O * E),
              (Z = K * k + U * E),
              (O = O * k - L * E),
              (U = U * k - K * E),
              (L = z),
              (K = Z)),
            g &&
              Math.abs(g) + Math.abs(d) > 359.9 &&
              ((g = d = 0), (w = 180 - w)),
            (f = wt(Math.sqrt(L * L + O * O + q * q))),
            (_ = wt(Math.sqrt(U * U + zt * zt))),
            (P = sr(K, U)),
            (b = Math.abs(P) > 2e-4 ? P * Yi : 0),
            (y = dt ? 1 / (dt < 0 ? -dt : dt) : 0)),
        e.svg &&
          ((z = t.getAttribute("transform")),
          (e.forceCSS = t.setAttribute("transform", "") || !Za(Te(t, ht))),
          z && t.setAttribute("transform", z))),
      Math.abs(b) > 90 &&
        Math.abs(b) < 270 &&
        (n
          ? ((f *= -1), (b += d <= 0 ? 180 : -180), (d += d <= 0 ? 180 : -180))
          : ((_ *= -1), (b += b <= 0 ? 180 : -180))),
      (i = i || e.uncache),
      (e.x =
        c -
        ((e.xPercent =
          c &&
          ((!i && e.xPercent) ||
            (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (t.offsetWidth * e.xPercent) / 100
          : 0) +
        s),
      (e.y =
        p -
        ((e.yPercent =
          p &&
          ((!i && e.yPercent) ||
            (Math.round(t.offsetHeight / 2) === Math.round(-p) ? -50 : 0)))
          ? (t.offsetHeight * e.yPercent) / 100
          : 0) +
        s),
      (e.z = h + s),
      (e.scaleX = wt(f)),
      (e.scaleY = wt(_)),
      (e.rotation = wt(d) + a),
      (e.rotationX = wt(g) + a),
      (e.rotationY = wt(w) + a),
      (e.skewX = b + a),
      (e.skewY = S + a),
      (e.transformPerspective = y + s),
      (e.zOrigin = parseFloat(u.split(" ")[2]) || (!i && e.zOrigin) || 0) &&
        (r[fe] = Xn(u)),
      (e.xOffset = e.yOffset = 0),
      (e.force3D = Se.force3D),
      (e.renderTransform = e.svg ? $u : $a ? Qa : Uu),
      (e.uncache = 0),
      e
    );
  },
  Xn = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  ns = function (t, i, e) {
    var r = Ut(i);
    return wt(parseFloat(i) + parseFloat(Oi(t, "x", e + "px", r))) + r;
  },
  Uu = function (t, i) {
    ((i.z = "0px"),
      (i.rotationY = i.rotationX = "0deg"),
      (i.force3D = 0),
      Qa(t, i));
  },
  Ii = "0deg",
  Mr = "0px",
  Ni = ") ",
  Qa = function (t, i) {
    var e = i || this,
      r = e.xPercent,
      n = e.yPercent,
      s = e.x,
      a = e.y,
      l = e.z,
      u = e.rotation,
      c = e.rotationY,
      p = e.rotationX,
      h = e.skewX,
      f = e.skewY,
      _ = e.scaleX,
      d = e.scaleY,
      g = e.transformPerspective,
      w = e.force3D,
      b = e.target,
      S = e.zOrigin,
      y = "",
      T = (w === "auto" && t && t !== 1) || w === !0;
    if (S && (p !== Ii || c !== Ii)) {
      var C = parseFloat(c) * _r,
        x = Math.sin(C),
        P = Math.cos(C),
        k;
      ((C = parseFloat(p) * _r),
        (k = Math.cos(C)),
        (s = ns(b, s, x * k * -S)),
        (a = ns(b, a, -Math.sin(C) * -S)),
        (l = ns(b, l, P * k * -S + S)));
    }
    (g !== Mr && (y += "perspective(" + g + Ni),
      (r || n) && (y += "translate(" + r + "%, " + n + "%) "),
      (T || s !== Mr || a !== Mr || l !== Mr) &&
        (y +=
          l !== Mr || T
            ? "translate3d(" + s + ", " + a + ", " + l + ") "
            : "translate(" + s + ", " + a + Ni),
      u !== Ii && (y += "rotate(" + u + Ni),
      c !== Ii && (y += "rotateY(" + c + Ni),
      p !== Ii && (y += "rotateX(" + p + Ni),
      (h !== Ii || f !== Ii) && (y += "skew(" + h + ", " + f + Ni),
      (_ !== 1 || d !== 1) && (y += "scale(" + _ + ", " + d + Ni),
      (b.style[ht] = y || "translate(0, 0)"));
  },
  $u = function (t, i) {
    var e = i || this,
      r = e.xPercent,
      n = e.yPercent,
      s = e.x,
      a = e.y,
      l = e.rotation,
      u = e.skewX,
      c = e.skewY,
      p = e.scaleX,
      h = e.scaleY,
      f = e.target,
      _ = e.xOrigin,
      d = e.yOrigin,
      g = e.xOffset,
      w = e.yOffset,
      b = e.forceCSS,
      S = parseFloat(s),
      y = parseFloat(a),
      T,
      C,
      x,
      P,
      k;
    ((l = parseFloat(l)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (l += c)),
      l || u
        ? ((l *= _r),
          (u *= _r),
          (T = Math.cos(l) * p),
          (C = Math.sin(l) * p),
          (x = Math.sin(l - u) * -h),
          (P = Math.cos(l - u) * h),
          u &&
            ((c *= _r),
            (k = Math.tan(u - c)),
            (k = Math.sqrt(1 + k * k)),
            (x *= k),
            (P *= k),
            c &&
              ((k = Math.tan(c)),
              (k = Math.sqrt(1 + k * k)),
              (T *= k),
              (C *= k))),
          (T = wt(T)),
          (C = wt(C)),
          (x = wt(x)),
          (P = wt(P)))
        : ((T = p), (P = h), (C = x = 0)),
      ((S && !~(s + "").indexOf("px")) || (y && !~(a + "").indexOf("px"))) &&
        ((S = Oi(f, "x", s, "px")), (y = Oi(f, "y", a, "px"))),
      (_ || d || g || w) &&
        ((S = wt(S + _ - (_ * T + d * x) + g)),
        (y = wt(y + d - (_ * C + d * P) + w))),
      (r || n) &&
        ((k = f.getBBox()),
        (S = wt(S + (r / 100) * k.width)),
        (y = wt(y + (n / 100) * k.height))),
      (k =
        "matrix(" + T + "," + C + "," + x + "," + P + "," + S + "," + y + ")"),
      f.setAttribute("transform", k),
      b && (f.style[ht] = k));
  },
  Gu = function (t, i, e, r, n) {
    var s = 360,
      a = Rt(n),
      l = parseFloat(n) * (a && ~n.indexOf("rad") ? Yi : 1),
      u = l - r,
      c = r + u + "deg",
      p,
      h;
    return (
      a &&
        ((p = n.split("_")[1]),
        p === "short" && ((u %= s), u !== u % (s / 2) && (u += u < 0 ? s : -s)),
        p === "cw" && u < 0
          ? (u = ((u + s * Eo) % s) - ~~(u / s) * s)
          : p === "ccw" && u > 0 && (u = ((u - s * Eo) % s) - ~~(u / s) * s)),
      (t._pt = h = new ce(t._pt, i, e, r, u, Mu)),
      (h.e = c),
      (h.u = "deg"),
      t._props.push(e),
      h
    );
  },
  zo = function (t, i) {
    for (var e in i) t[e] = i[e];
    return t;
  },
  Ku = function (t, i, e) {
    var r = zo({}, e._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      s = e.style,
      a,
      l,
      u,
      c,
      p,
      h,
      f,
      _;
    r.svg
      ? ((u = e.getAttribute("transform")),
        e.setAttribute("transform", ""),
        (s[ht] = i),
        (a = on(e, 1)),
        Pi(e, ht),
        e.setAttribute("transform", u))
      : ((u = getComputedStyle(e)[ht]),
        (s[ht] = i),
        (a = on(e, 1)),
        (s[ht] = u));
    for (l in ci)
      ((u = r[l]),
        (c = a[l]),
        u !== c &&
          n.indexOf(l) < 0 &&
          ((f = Ut(u)),
          (_ = Ut(c)),
          (p = f !== _ ? Oi(e, l, u, _) : parseFloat(u)),
          (h = parseFloat(c)),
          (t._pt = new ce(t._pt, a, l, p, h - p, bs)),
          (t._pt.u = _ || 0),
          t._props.push(l)));
    zo(a, r);
  };
ue("padding,margin,Width,Radius", function (o, t) {
  var i = "Top",
    e = "Right",
    r = "Bottom",
    n = "Left",
    s = (t < 3 ? [i, e, r, n] : [i + n, i + e, r + e, r + n]).map(function (a) {
      return t < 2 ? o + a : "border" + a + o;
    });
  Bn[t > 1 ? "border" + o : o] = function (a, l, u, c, p) {
    var h, f;
    if (arguments.length < 4)
      return (
        (h = s.map(function (_) {
          return ni(a, _, u);
        })),
        (f = h.join(" ")),
        f.split(h[0]).length === 5 ? h[0] : f
      );
    ((h = (c + "").split(" ")),
      (f = {}),
      s.forEach(function (_, d) {
        return (f[_] = h[d] = h[d] || h[((d - 1) / 2) | 0]);
      }),
      a.init(l, f, p));
  };
});
var Ja = {
  name: "css",
  register: Ss,
  targetTest: function (t) {
    return t.style && t.nodeType;
  },
  init: function (t, i, e, r, n) {
    var s = this._props,
      a = t.style,
      l = e.vars.startAt,
      u,
      c,
      p,
      h,
      f,
      _,
      d,
      g,
      w,
      b,
      S,
      y,
      T,
      C,
      x,
      P,
      k;
    (eo || Ss(),
      (this.styles = this.styles || Ua(t)),
      (P = this.styles.props),
      (this.tween = e));
    for (d in i)
      if (d !== "autoRound" && ((c = i[d]), !(ve[d] && La(d, i, e, r, t, n)))) {
        if (
          ((f = typeof c),
          (_ = Bn[d]),
          f === "function" && ((c = c.call(e, r, t, n)), (f = typeof c)),
          f === "string" && ~c.indexOf("random(") && (c = en(c)),
          _)
        )
          _(this, t, d, c, e) && (x = 1);
        else if (d.substr(0, 2) === "--")
          ((u = (getComputedStyle(t).getPropertyValue(d) + "").trim()),
            (c += ""),
            (ki.lastIndex = 0),
            ki.test(u) ||
              ((g = Ut(u)),
              (w = Ut(c)),
              w ? g !== w && (u = Oi(t, d, u, w) + w) : g && (c += g)),
            this.add(a, "setProperty", u, c, r, n, 0, 0, d),
            s.push(d),
            P.push(d, 0, a[d]));
        else if (f !== "undefined") {
          if (
            (l && d in l
              ? ((u = typeof l[d] == "function" ? l[d].call(e, r, t, n) : l[d]),
                Rt(u) && ~u.indexOf("random(") && (u = en(u)),
                Ut(u + "") ||
                  u === "auto" ||
                  (u += Se.units[d] || Ut(ni(t, d)) || ""),
                (u + "").charAt(1) === "=" && (u = ni(t, d)))
              : (u = ni(t, d)),
            (h = parseFloat(u)),
            (b = f === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            b && (c = c.substr(2)),
            (p = parseFloat(c)),
            d in Ge &&
              (d === "autoAlpha" &&
                (h === 1 && ni(t, "visibility") === "hidden" && p && (h = 0),
                P.push("visibility", 0, a.visibility),
                xi(
                  this,
                  a,
                  "visibility",
                  h ? "inherit" : "hidden",
                  p ? "inherit" : "hidden",
                  !p,
                )),
              d !== "scale" &&
                d !== "transform" &&
                ((d = Ge[d]), ~d.indexOf(",") && (d = d.split(",")[0]))),
            (S = d in ci),
            S)
          ) {
            if (
              (this.styles.save(d),
              (k = c),
              f === "string" && c.substring(0, 6) === "var(--")
            ) {
              if (
                ((c = Te(t, c.substring(4, c.indexOf(")")))),
                c.substring(0, 5) === "calc(")
              ) {
                var E = t.style.perspective;
                ((t.style.perspective = c),
                  (c = Te(t, "perspective")),
                  E ? (t.style.perspective = E) : Pi(t, "perspective"));
              }
              p = parseFloat(c);
            }
            if (
              (y ||
                ((T = t._gsap),
                (T.renderTransform && !i.parseTransform) ||
                  on(t, i.parseTransform),
                (C = i.smoothOrigin !== !1 && T.smooth),
                (y = this._pt =
                  new ce(this._pt, a, ht, 0, 1, T.renderTransform, T, 0, -1)),
                (y.dep = 1)),
              d === "scale")
            )
              ((this._pt = new ce(
                this._pt,
                T,
                "scaleY",
                T.scaleY,
                (b ? dr(T.scaleY, b + p) : p) - T.scaleY || 0,
                bs,
              )),
                (this._pt.u = 0),
                s.push("scaleY", d),
                (d += "X"));
            else if (d === "transformOrigin") {
              (P.push(fe, 0, a[fe]),
                (c = Vu(c)),
                T.svg
                  ? ks(t, c, 0, C, 0, this)
                  : ((w = parseFloat(c.split(" ")[2]) || 0),
                    w !== T.zOrigin && xi(this, T, "zOrigin", T.zOrigin, w),
                    xi(this, a, d, Xn(u), Xn(c))));
              continue;
            } else if (d === "svgOrigin") {
              ks(t, c, 1, C, 0, this);
              continue;
            } else if (d in ja) {
              Gu(this, T, d, h, b ? dr(h, b + c) : c);
              continue;
            } else if (d === "smoothOrigin") {
              xi(this, T, "smooth", T.smooth, c);
              continue;
            } else if (d === "force3D") {
              T[d] = c;
              continue;
            } else if (d === "transform") {
              Ku(this, c, t);
              continue;
            }
          } else d in a || (d = Sr(d) || d);
          if (S || ((p || p === 0) && (h || h === 0) && !Ou.test(c) && d in a))
            ((g = (u + "").substr((h + "").length)),
              p || (p = 0),
              (w = Ut(c) || (d in Se.units ? Se.units[d] : g)),
              g !== w && (h = Oi(t, d, u, w)),
              (this._pt = new ce(
                this._pt,
                S ? T : a,
                d,
                h,
                (b ? dr(h, b + p) : p) - h,
                !S && (w === "px" || d === "zIndex") && i.autoRound !== !1
                  ? Ru
                  : bs,
              )),
              (this._pt.u = w || 0),
              S && k !== c
                ? ((this._pt.b = u), (this._pt.e = k), (this._pt.r = Au))
                : g !== w &&
                  w !== "%" &&
                  ((this._pt.b = u), (this._pt.r = Du)));
          else if (d in a) Hu.call(this, t, d, u, b ? b + c : c);
          else if (d in t) this.add(t, d, u || t[d], b ? b + c : c, r, n);
          else if (d !== "parseTransform") {
            qs(d, c);
            continue;
          }
          (S ||
            (d in a
              ? P.push(d, 0, a[d])
              : typeof t[d] == "function"
                ? P.push(d, 2, t[d]())
                : P.push(d, 1, u || t[d])),
            s.push(d));
        }
      }
    x && Xa(this);
  },
  render: function (t, i) {
    if (i.tween._time || !io())
      for (var e = i._pt; e;) (e.r(t, e.d), (e = e._next));
    else i.styles.revert();
  },
  get: ni,
  aliases: Ge,
  getSetter: function (t, i, e) {
    var r = Ge[i];
    return (
      r && r.indexOf(",") < 0 && (i = r),
      i in ci && i !== fe && (t._gsap.x || ni(t, "x"))
        ? e && Co === e
          ? i === "scale"
            ? Iu
            : Fu
          : (Co = e || {}) && (i === "scale" ? Nu : Yu)
        : t.style && !Ws(t.style[i])
          ? zu
          : ~i.indexOf("-")
            ? Lu
            : Js(t, i)
    );
  },
  core: { _removeProperty: Pi, _getMatrix: no },
};
he.utils.checkPrefix = Sr;
he.core.getStyleSaver = Ua;
(function (o, t, i, e) {
  var r = ue(o + "," + t + "," + i, function (n) {
    ci[n] = 1;
  });
  (ue(t, function (n) {
    ((Se.units[n] = "deg"), (ja[n] = 1));
  }),
    (Ge[r[13]] = o + "," + t),
    ue(e, function (n) {
      var s = n.split(":");
      Ge[s[1]] = r[s[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
ue(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (o) {
    Se.units[o] = "px";
  },
);
he.registerPlugin(Ja);
var tt = he.registerPlugin(Ja) || he;
tt.core.Tween;
var Lo = "1.3.18";
function tl(o, t, i) {
  return Math.max(o, Math.min(t, i));
}
function ju(o, t, i) {
  return (1 - i) * o + i * t;
}
function Zu(o, t, i, e) {
  return ju(o, t, 1 - Math.exp(-i * e));
}
function Qu(o, t) {
  return ((o % t) + t) % t;
}
var Ju = class {
  isRunning = !1;
  value = 0;
  from = 0;
  to = 0;
  currentTime = 0;
  lerp;
  duration;
  easing;
  onUpdate;
  advance(o) {
    if (!this.isRunning) return;
    let t = !1;
    if (this.duration && this.easing) {
      this.currentTime += o;
      const i = tl(0, this.currentTime / this.duration, 1);
      t = i >= 1;
      const e = t ? 1 : this.easing(i);
      this.value = this.from + (this.to - this.from) * e;
    } else
      this.lerp
        ? ((this.value = Zu(this.value, this.to, this.lerp * 60, o)),
          Math.round(this.value) === this.to &&
            ((this.value = this.to), (t = !0)))
        : ((this.value = this.to), (t = !0));
    (t && this.stop(), this.onUpdate?.(this.value, t));
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(o, t, { lerp: i, duration: e, easing: r, onStart: n, onUpdate: s }) {
    ((this.from = this.value = o),
      (this.to = t),
      (this.lerp = i),
      (this.duration = e),
      (this.easing = r),
      (this.currentTime = 0),
      (this.isRunning = !0),
      n?.(),
      (this.onUpdate = s));
  }
};
function tc(o, t) {
  let i;
  return function (...e) {
    (clearTimeout(i),
      (i = setTimeout(() => {
        ((i = void 0), o.apply(this, e));
      }, t)));
  };
}
var ec = class {
    constructor(o, t, { autoResize: i = !0, debounce: e = 250 } = {}) {
      ((this.wrapper = o),
        (this.content = t),
        i &&
          ((this.debouncedResize = tc(this.resize, e)),
          this.wrapper instanceof Window
            ? window.addEventListener("resize", this.debouncedResize)
            : ((this.wrapperResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(
            this.debouncedResize,
          )),
          this.contentResizeObserver.observe(this.content)),
        this.resize());
    }
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    destroy() {
      (this.wrapperResizeObserver?.disconnect(),
        this.contentResizeObserver?.disconnect(),
        this.wrapper === window &&
          this.debouncedResize &&
          window.removeEventListener("resize", this.debouncedResize));
    }
    resize = () => {
      (this.onWrapperResize(), this.onContentResize());
    };
    onWrapperResize = () => {
      this.wrapper instanceof Window
        ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
        : ((this.width = this.wrapper.clientWidth),
          (this.height = this.wrapper.clientHeight));
    };
    onContentResize = () => {
      this.wrapper instanceof Window
        ? ((this.scrollHeight = this.content.scrollHeight),
          (this.scrollWidth = this.content.scrollWidth))
        : ((this.scrollHeight = this.wrapper.scrollHeight),
          (this.scrollWidth = this.wrapper.scrollWidth));
    };
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height,
      };
    }
  },
  el = class {
    events = {};
    emit(o, ...t) {
      const i = this.events[o] || [];
      for (let e = 0, r = i.length; e < r; e++) i[e]?.(...t);
    }
    on(o, t) {
      return (
        this.events[o] ? this.events[o].push(t) : (this.events[o] = [t]),
        () => {
          this.events[o] = this.events[o]?.filter((i) => t !== i);
        }
      );
    }
    off(o, t) {
      this.events[o] = this.events[o]?.filter((i) => t !== i);
    }
    destroy() {
      this.events = {};
    }
  },
  ic = 100 / 6,
  mi = { passive: !1 };
function Fo(o, t) {
  return o === 1 ? ic : o === 2 ? t : 1;
}
var rc = class {
    constructor(o, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      ((this.element = o),
        (this.options = t),
        window.addEventListener("resize", this.onWindowResize),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, mi),
        this.element.addEventListener("touchstart", this.onTouchStart, mi),
        this.element.addEventListener("touchmove", this.onTouchMove, mi),
        this.element.addEventListener("touchend", this.onTouchEnd, mi));
    }
    touchStart = { x: 0, y: 0 };
    lastDelta = { x: 0, y: 0 };
    window = { width: 0, height: 0 };
    emitter = new el();
    on(o, t) {
      return this.emitter.on(o, t);
    }
    destroy() {
      (this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize),
        this.element.removeEventListener("wheel", this.onWheel, mi),
        this.element.removeEventListener("touchstart", this.onTouchStart, mi),
        this.element.removeEventListener("touchmove", this.onTouchMove, mi),
        this.element.removeEventListener("touchend", this.onTouchEnd, mi));
    }
    onTouchStart = (o) => {
      const { clientX: t, clientY: i } = o.targetTouches
        ? o.targetTouches[0]
        : o;
      ((this.touchStart.x = t),
        (this.touchStart.y = i),
        (this.lastDelta = { x: 0, y: 0 }),
        this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: o }));
    };
    onTouchMove = (o) => {
      const { clientX: t, clientY: i } = o.targetTouches
          ? o.targetTouches[0]
          : o,
        e = -(t - this.touchStart.x) * this.options.touchMultiplier,
        r = -(i - this.touchStart.y) * this.options.touchMultiplier;
      ((this.touchStart.x = t),
        (this.touchStart.y = i),
        (this.lastDelta = { x: e, y: r }),
        this.emitter.emit("scroll", { deltaX: e, deltaY: r, event: o }));
    };
    onTouchEnd = (o) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: o,
      });
    };
    onWheel = (o) => {
      let { deltaX: t, deltaY: i, deltaMode: e } = o;
      const r = Fo(e, this.window.width),
        n = Fo(e, this.window.height);
      ((t *= r),
        (i *= n),
        (t *= this.options.wheelMultiplier),
        (i *= this.options.wheelMultiplier),
        this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: o }));
    };
    onWindowResize = () => {
      this.window = { width: window.innerWidth, height: window.innerHeight };
    };
  },
  Io = (o) => Math.min(1, 1.001 - 2 ** (-10 * o)),
  nc = class {
    _isScrolling = !1;
    _isStopped = !1;
    _isLocked = !1;
    _preventNextNativeScrollEvent = !1;
    _resetVelocityTimeout = null;
    _rafId = null;
    isTouching;
    time = 0;
    userData = {};
    lastVelocity = 0;
    velocity = 0;
    direction = 0;
    options;
    targetScroll;
    animatedScroll;
    animate = new Ju();
    emitter = new el();
    dimensions;
    virtualScroll;
    constructor({
      wrapper: o = window,
      content: t = document.documentElement,
      eventsTarget: i = o,
      smoothWheel: e = !0,
      syncTouch: r = !1,
      syncTouchLerp: n = 0.075,
      touchInertiaExponent: s = 1.7,
      duration: a,
      easing: l,
      lerp: u = 0.1,
      infinite: c = !1,
      orientation: p = "vertical",
      gestureOrientation: h = p === "horizontal" ? "both" : "vertical",
      touchMultiplier: f = 1,
      wheelMultiplier: _ = 1,
      autoResize: d = !0,
      prevent: g,
      virtualScroll: w,
      overscroll: b = !0,
      autoRaf: S = !1,
      anchors: y = !1,
      autoToggle: T = !1,
      allowNestedScroll: C = !1,
      __experimental__naiveDimensions: x = !1,
      naiveDimensions: P = x,
      stopInertiaOnNavigate: k = !1,
    } = {}) {
      ((window.lenisVersion = Lo),
        window.lenis || (window.lenis = {}),
        (window.lenis.version = Lo),
        p === "horizontal" && (window.lenis.horizontal = !0),
        (!o || o === document.documentElement) && (o = window),
        typeof a == "number" && typeof l != "function"
          ? (l = Io)
          : typeof l == "function" && typeof a != "number" && (a = 1),
        (this.options = {
          wrapper: o,
          content: t,
          eventsTarget: i,
          smoothWheel: e,
          syncTouch: r,
          syncTouchLerp: n,
          touchInertiaExponent: s,
          duration: a,
          easing: l,
          lerp: u,
          infinite: c,
          gestureOrientation: h,
          orientation: p,
          touchMultiplier: f,
          wheelMultiplier: _,
          autoResize: d,
          prevent: g,
          virtualScroll: w,
          overscroll: b,
          autoRaf: S,
          anchors: y,
          autoToggle: T,
          allowNestedScroll: C,
          naiveDimensions: P,
          stopInertiaOnNavigate: k,
        }),
        (this.dimensions = new ec(o, t, { autoResize: d })),
        this.updateClassName(),
        (this.targetScroll = this.animatedScroll = this.actualScroll),
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll),
        this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
          capture: !0,
        }),
        (this.options.anchors || this.options.stopInertiaOnNavigate) &&
          this.options.wrapper.addEventListener("click", this.onClick),
        this.options.wrapper.addEventListener(
          "pointerdown",
          this.onPointerDown,
        ),
        (this.virtualScroll = new rc(i, {
          touchMultiplier: f,
          wheelMultiplier: _,
        })),
        this.virtualScroll.on("scroll", this.onVirtualScroll),
        this.options.autoToggle &&
          (this.checkOverflow(),
          this.rootElement.addEventListener(
            "transitionend",
            this.onTransitionEnd,
          )),
        this.options.autoRaf &&
          (this._rafId = requestAnimationFrame(this.raf)));
    }
    destroy() {
      (this.emitter.destroy(),
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll),
        this.options.wrapper.removeEventListener(
          "scrollend",
          this.onScrollEnd,
          { capture: !0 },
        ),
        this.options.wrapper.removeEventListener(
          "pointerdown",
          this.onPointerDown,
        ),
        (this.options.anchors || this.options.stopInertiaOnNavigate) &&
          this.options.wrapper.removeEventListener("click", this.onClick),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName(),
        this._rafId && cancelAnimationFrame(this._rafId));
    }
    on(o, t) {
      return this.emitter.on(o, t);
    }
    off(o, t) {
      return this.emitter.off(o, t);
    }
    onScrollEnd = (o) => {
      o instanceof CustomEvent ||
        ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
          o.stopPropagation());
    };
    dispatchScrollendEvent = () => {
      this.options.wrapper.dispatchEvent(
        new CustomEvent("scrollend", {
          bubbles: this.options.wrapper === window,
          detail: { lenisScrollEnd: !0 },
        }),
      );
    };
    get overflow() {
      const o = this.isHorizontal ? "overflow-x" : "overflow-y";
      return getComputedStyle(this.rootElement)[o];
    }
    checkOverflow() {
      ["hidden", "clip"].includes(this.overflow)
        ? this.internalStop()
        : this.internalStart();
    }
    onTransitionEnd = (o) => {
      o.propertyName.includes("overflow") && this.checkOverflow();
    };
    setScroll(o) {
      this.isHorizontal
        ? this.options.wrapper.scrollTo({ left: o, behavior: "instant" })
        : this.options.wrapper.scrollTo({ top: o, behavior: "instant" });
    }
    onClick = (o) => {
      const i = o
        .composedPath()
        .filter(
          (e) => e instanceof HTMLAnchorElement && e.getAttribute("href"),
        );
      if (this.options.anchors) {
        const e = i.find((r) => r.getAttribute("href")?.includes("#"));
        if (e) {
          const r = e.getAttribute("href");
          if (r) {
            const n =
                typeof this.options.anchors == "object" && this.options.anchors
                  ? this.options.anchors
                  : void 0,
              s = `#${r.split("#")[1]}`;
            this.scrollTo(s, n);
          }
        }
      }
      this.options.stopInertiaOnNavigate &&
        i.find((r) => r.host === window.location.host) &&
        this.reset();
    };
    onPointerDown = (o) => {
      o.button === 1 && this.reset();
    };
    onVirtualScroll = (o) => {
      if (
        typeof this.options.virtualScroll == "function" &&
        this.options.virtualScroll(o) === !1
      )
        return;
      const { deltaX: t, deltaY: i, event: e } = o;
      if (
        (this.emitter.emit("virtual-scroll", {
          deltaX: t,
          deltaY: i,
          event: e,
        }),
        e.ctrlKey || e.lenisStopPropagation)
      )
        return;
      const r = e.type.includes("touch"),
        n = e.type.includes("wheel");
      this.isTouching = e.type === "touchstart" || e.type === "touchmove";
      const s = t === 0 && i === 0;
      if (
        this.options.syncTouch &&
        r &&
        e.type === "touchstart" &&
        s &&
        !this.isStopped &&
        !this.isLocked
      ) {
        this.reset();
        return;
      }
      const l =
        (this.options.gestureOrientation === "vertical" && i === 0) ||
        (this.options.gestureOrientation === "horizontal" && t === 0);
      if (s || l) return;
      let u = e.composedPath();
      u = u.slice(0, u.indexOf(this.rootElement));
      const c = this.options.prevent,
        p = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
      if (
        u.find(
          (w) =>
            w instanceof HTMLElement &&
            ((typeof c == "function" && c?.(w)) ||
              w.hasAttribute?.("data-lenis-prevent") ||
              (p === "vertical" &&
                w.hasAttribute?.("data-lenis-prevent-vertical")) ||
              (p === "horizontal" &&
                w.hasAttribute?.("data-lenis-prevent-horizontal")) ||
              (r && w.hasAttribute?.("data-lenis-prevent-touch")) ||
              (n && w.hasAttribute?.("data-lenis-prevent-wheel")) ||
              (this.options.allowNestedScroll &&
                this.hasNestedScroll(w, { deltaX: t, deltaY: i }))),
        )
      )
        return;
      if (this.isStopped || this.isLocked) {
        e.cancelable && e.preventDefault();
        return;
      }
      if (!((this.options.syncTouch && r) || (this.options.smoothWheel && n))) {
        ((this.isScrolling = "native"),
          this.animate.stop(),
          (e.lenisStopPropagation = !0));
        return;
      }
      let f = i;
      (this.options.gestureOrientation === "both"
        ? (f = Math.abs(i) > Math.abs(t) ? i : t)
        : this.options.gestureOrientation === "horizontal" && (f = t),
        (!this.options.overscroll ||
          this.options.infinite ||
          (this.options.wrapper !== window &&
            this.limit > 0 &&
            ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
              (this.animatedScroll === 0 && i > 0) ||
              (this.animatedScroll === this.limit && i < 0)))) &&
          (e.lenisStopPropagation = !0),
        e.cancelable && e.preventDefault());
      const _ = r && this.options.syncTouch,
        g = r && e.type === "touchend";
      (g &&
        (f =
          Math.sign(this.velocity) *
          Math.abs(this.velocity) ** this.options.touchInertiaExponent),
        this.scrollTo(this.targetScroll + f, {
          programmatic: !1,
          ...(_
            ? { lerp: g ? this.options.syncTouchLerp : 1 }
            : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing,
              }),
        }));
    };
    resize() {
      (this.dimensions.resize(),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        this.emit());
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    onNativeScroll = () => {
      if (
        (this._resetVelocityTimeout !== null &&
          (clearTimeout(this._resetVelocityTimeout),
          (this._resetVelocityTimeout = null)),
        this._preventNextNativeScrollEvent)
      ) {
        this._preventNextNativeScrollEvent = !1;
        return;
      }
      if (this.isScrolling === !1 || this.isScrolling === "native") {
        const o = this.animatedScroll;
        ((this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity),
          (this.velocity = this.animatedScroll - o),
          (this.direction = Math.sign(this.animatedScroll - o)),
          this.isStopped || (this.isScrolling = "native"),
          this.emit(),
          this.velocity !== 0 &&
            (this._resetVelocityTimeout = setTimeout(() => {
              ((this.lastVelocity = this.velocity),
                (this.velocity = 0),
                (this.isScrolling = !1),
                this.emit());
            }, 400)));
      }
    };
    reset() {
      ((this.isLocked = !1),
        (this.isScrolling = !1),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.lastVelocity = this.velocity = 0),
        this.animate.stop());
    }
    start() {
      if (this.isStopped) {
        if (this.options.autoToggle) {
          this.rootElement.style.removeProperty("overflow");
          return;
        }
        this.internalStart();
      }
    }
    internalStart() {
      this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
    }
    stop() {
      if (!this.isStopped) {
        if (this.options.autoToggle) {
          this.rootElement.style.setProperty("overflow", "clip");
          return;
        }
        this.internalStop();
      }
    }
    internalStop() {
      this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
    }
    raf = (o) => {
      const t = o - (this.time || o);
      ((this.time = o),
        this.animate.advance(t * 0.001),
        this.options.autoRaf &&
          (this._rafId = requestAnimationFrame(this.raf)));
    };
    scrollTo(
      o,
      {
        offset: t = 0,
        immediate: i = !1,
        lock: e = !1,
        programmatic: r = !0,
        lerp: n = r ? this.options.lerp : void 0,
        duration: s = r ? this.options.duration : void 0,
        easing: a = r ? this.options.easing : void 0,
        onStart: l,
        onComplete: u,
        force: c = !1,
        userData: p,
      } = {},
    ) {
      if ((this.isStopped || this.isLocked) && !c) return;
      let h = o,
        f = t;
      if (typeof h == "string" && ["top", "left", "start", "#"].includes(h))
        h = 0;
      else if (typeof h == "string" && ["bottom", "right", "end"].includes(h))
        h = this.limit;
      else {
        let _ = null;
        if (
          (typeof h == "string"
            ? ((_ = document.querySelector(h)),
              _ ||
                (h === "#top"
                  ? (h = 0)
                  : console.warn("Lenis: Target not found", h)))
            : h instanceof HTMLElement && h?.nodeType && (_ = h),
          _)
        ) {
          if (this.options.wrapper !== window) {
            const g = this.rootElement.getBoundingClientRect();
            f -= this.isHorizontal ? g.left : g.top;
          }
          const d = _.getBoundingClientRect();
          h = (this.isHorizontal ? d.left : d.top) + this.animatedScroll;
        }
      }
      if (typeof h == "number") {
        if (((h += f), (h = Math.round(h)), this.options.infinite)) {
          if (r) {
            this.targetScroll = this.animatedScroll = this.scroll;
            const _ = h - this.animatedScroll;
            _ > this.limit / 2
              ? (h -= this.limit)
              : _ < -this.limit / 2 && (h += this.limit);
          }
        } else h = tl(0, h, this.limit);
        if (h === this.targetScroll) {
          (l?.(this), u?.(this));
          return;
        }
        if (((this.userData = p ?? {}), i)) {
          ((this.animatedScroll = this.targetScroll = h),
            this.setScroll(this.scroll),
            this.reset(),
            this.preventNextNativeScrollEvent(),
            this.emit(),
            u?.(this),
            (this.userData = {}),
            requestAnimationFrame(() => {
              this.dispatchScrollendEvent();
            }));
          return;
        }
        (r || (this.targetScroll = h),
          typeof s == "number" && typeof a != "function"
            ? (a = Io)
            : typeof a == "function" && typeof s != "number" && (s = 1),
          this.animate.fromTo(this.animatedScroll, h, {
            duration: s,
            easing: a,
            lerp: n,
            onStart: () => {
              (e && (this.isLocked = !0),
                (this.isScrolling = "smooth"),
                l?.(this));
            },
            onUpdate: (_, d) => {
              ((this.isScrolling = "smooth"),
                (this.lastVelocity = this.velocity),
                (this.velocity = _ - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = _),
                this.setScroll(this.scroll),
                r && (this.targetScroll = _),
                d || this.emit(),
                d &&
                  (this.reset(),
                  this.emit(),
                  u?.(this),
                  (this.userData = {}),
                  requestAnimationFrame(() => {
                    this.dispatchScrollendEvent();
                  }),
                  this.preventNextNativeScrollEvent()));
            },
          }));
      }
    }
    preventNextNativeScrollEvent() {
      ((this._preventNextNativeScrollEvent = !0),
        requestAnimationFrame(() => {
          this._preventNextNativeScrollEvent = !1;
        }));
    }
    hasNestedScroll(o, { deltaX: t, deltaY: i }) {
      const e = Date.now();
      o._lenis || (o._lenis = {});
      const r = o._lenis;
      let n, s, a, l, u, c, p, h, f, _;
      if (e - (r.time ?? 0) > 2e3) {
        r.time = Date.now();
        const x = window.getComputedStyle(o);
        if (
          ((r.computedStyle = x),
          (n = ["auto", "overlay", "scroll"].includes(x.overflowX)),
          (s = ["auto", "overlay", "scroll"].includes(x.overflowY)),
          (u = ["auto"].includes(x.overscrollBehaviorX)),
          (c = ["auto"].includes(x.overscrollBehaviorY)),
          (r.hasOverflowX = n),
          (r.hasOverflowY = s),
          !(n || s))
        )
          return !1;
        ((p = o.scrollWidth),
          (h = o.scrollHeight),
          (f = o.clientWidth),
          (_ = o.clientHeight),
          (a = p > f),
          (l = h > _),
          (r.isScrollableX = a),
          (r.isScrollableY = l),
          (r.scrollWidth = p),
          (r.scrollHeight = h),
          (r.clientWidth = f),
          (r.clientHeight = _),
          (r.hasOverscrollBehaviorX = u),
          (r.hasOverscrollBehaviorY = c));
      } else
        ((a = r.isScrollableX),
          (l = r.isScrollableY),
          (n = r.hasOverflowX),
          (s = r.hasOverflowY),
          (p = r.scrollWidth),
          (h = r.scrollHeight),
          (f = r.clientWidth),
          (_ = r.clientHeight),
          (u = r.hasOverscrollBehaviorX),
          (c = r.hasOverscrollBehaviorY));
      if (!((n && a) || (s && l))) return !1;
      const d = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
      let g, w, b, S, y, T;
      if (d === "horizontal")
        ((g = Math.round(o.scrollLeft)),
          (w = p - f),
          (b = t),
          (S = n),
          (y = a),
          (T = u));
      else if (d === "vertical")
        ((g = Math.round(o.scrollTop)),
          (w = h - _),
          (b = i),
          (S = s),
          (y = l),
          (T = c));
      else return !1;
      return !T && (g >= w || g <= 0) ? !0 : (b > 0 ? g < w : g > 0) && S && y;
    }
    get rootElement() {
      return this.options.wrapper === window
        ? document.documentElement
        : this.options.wrapper;
    }
    get limit() {
      return this.options.naiveDimensions
        ? this.isHorizontal
          ? this.rootElement.scrollWidth - this.rootElement.clientWidth
          : this.rootElement.scrollHeight - this.rootElement.clientHeight
        : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return this.options.orientation === "horizontal";
    }
    get actualScroll() {
      const o = this.options.wrapper;
      return this.isHorizontal
        ? (o.scrollX ?? o.scrollLeft)
        : (o.scrollY ?? o.scrollTop);
    }
    get scroll() {
      return this.options.infinite
        ? Qu(this.animatedScroll, this.limit)
        : this.animatedScroll;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
      return this._isScrolling;
    }
    set isScrolling(o) {
      this._isScrolling !== o &&
        ((this._isScrolling = o), this.updateClassName());
    }
    get isStopped() {
      return this._isStopped;
    }
    set isStopped(o) {
      this._isStopped !== o && ((this._isStopped = o), this.updateClassName());
    }
    get isLocked() {
      return this._isLocked;
    }
    set isLocked(o) {
      this._isLocked !== o && ((this._isLocked = o), this.updateClassName());
    }
    get isSmooth() {
      return this.isScrolling === "smooth";
    }
    get className() {
      let o = "lenis";
      return (
        this.options.autoToggle && (o += " lenis-autoToggle"),
        this.isStopped && (o += " lenis-stopped"),
        this.isLocked && (o += " lenis-locked"),
        this.isScrolling && (o += " lenis-scrolling"),
        this.isScrolling === "smooth" && (o += " lenis-smooth"),
        o
      );
    }
    updateClassName() {
      (this.cleanUpClassName(),
        (this.rootElement.className =
          `${this.rootElement.className} ${this.className}`.trim()));
    }
    cleanUpClassName() {
      this.rootElement.className = this.rootElement.className
        .replace(/lenis(-\w+)?/g, "")
        .trim();
    }
  };
function sc(o, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    ((e.enumerable = e.enumerable || !1),
      (e.configurable = !0),
      "value" in e && (e.writable = !0),
      Object.defineProperty(o, e.key, e));
  }
}
function oc(o, t, i) {
  return (t && sc(o.prototype, t), o);
}
var It,
  On,
  xe,
  bi,
  Ti,
  gr,
  il,
  Bi,
  Hr,
  rl,
  oi,
  Be,
  nl,
  sl = function () {
    return (
      It ||
      (typeof window < "u" && (It = window.gsap) && It.registerPlugin && It)
    );
  },
  ol = 1,
  hr = [],
  W = [],
  je = [],
  Vr = Date.now,
  Cs = function (t, i) {
    return i;
  },
  ac = function () {
    var t = Hr.core,
      i = t.bridge || {},
      e = t._scrollers,
      r = t._proxies;
    (e.push.apply(e, W),
      r.push.apply(r, je),
      (W = e),
      (je = r),
      (Cs = function (s, a) {
        return i[s](a);
      }));
  },
  Ci = function (t, i) {
    return ~je.indexOf(t) && je[je.indexOf(t) + 1][i];
  },
  qr = function (t) {
    return !!~rl.indexOf(t);
  },
  te = function (t, i, e, r, n) {
    return t.addEventListener(i, e, { passive: r !== !1, capture: !!n });
  },
  Jt = function (t, i, e, r) {
    return t.removeEventListener(i, e, !!r);
  },
  pn = "scrollLeft",
  _n = "scrollTop",
  Es = function () {
    return (oi && oi.isPressed) || W.cache++;
  },
  Wn = function (t, i) {
    var e = function r(n) {
      if (n || n === 0) {
        ol && (xe.history.scrollRestoration = "manual");
        var s = oi && oi.isPressed;
        ((n = r.v = Math.round(n) || (oi && oi.iOS ? 1 : 0)),
          t(n),
          (r.cacheID = W.cache),
          s && Cs("ss", n));
      } else
        (i || W.cache !== r.cacheID || Cs("ref")) &&
          ((r.cacheID = W.cache), (r.v = t()));
      return r.v + r.offset;
    };
    return ((e.offset = 0), t && e);
  },
  se = {
    s: pn,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Wn(function (o) {
      return arguments.length
        ? xe.scrollTo(o, Pt.sc())
        : xe.pageXOffset || bi[pn] || Ti[pn] || gr[pn] || 0;
    }),
  },
  Pt = {
    s: _n,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: se,
    sc: Wn(function (o) {
      return arguments.length
        ? xe.scrollTo(se.sc(), o)
        : xe.pageYOffset || bi[_n] || Ti[_n] || gr[_n] || 0;
    }),
  },
  ae = function (t, i) {
    return (
      ((i && i._ctx && i._ctx.selector) || It.utils.toArray)(t)[0] ||
      (typeof t == "string" && It.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", t)
        : null)
    );
  },
  lc = function (t, i) {
    for (var e = i.length; e--;) if (i[e] === t || i[e].contains(t)) return !0;
    return !1;
  },
  Mi = function (t, i) {
    var e = i.s,
      r = i.sc;
    qr(t) && (t = bi.scrollingElement || Ti);
    var n = W.indexOf(t),
      s = r === Pt.sc ? 1 : 2;
    (!~n && (n = W.push(t) - 1), W[n + s] || te(t, "scroll", Es));
    var a = W[n + s],
      l =
        a ||
        (W[n + s] =
          Wn(Ci(t, e), !0) ||
          (qr(t)
            ? r
            : Wn(function (u) {
                return arguments.length ? (t[e] = u) : t[e];
              })));
    return (
      (l.target = t),
      a || (l.smooth = It.getProperty(t, "scrollBehavior") === "smooth"),
      l
    );
  },
  Ps = function (t, i, e) {
    var r = t,
      n = t,
      s = Vr(),
      a = s,
      l = i || 50,
      u = Math.max(500, l * 3),
      c = function (_, d) {
        var g = Vr();
        d || g - s > l
          ? ((n = r), (r = _), (a = s), (s = g))
          : e
            ? (r += _)
            : (r = n + ((_ - n) / (g - a)) * (s - a));
      },
      p = function () {
        ((n = r = e ? 0 : r), (a = s = 0));
      },
      h = function (_) {
        var d = a,
          g = n,
          w = Vr();
        return (
          (_ || _ === 0) && _ !== r && c(_),
          s === a || w - a > u
            ? 0
            : ((r + (e ? g : -g)) / ((e ? w : s) - d)) * 1e3
        );
      };
    return { update: c, reset: p, getVelocity: h };
  },
  Dr = function (t, i) {
    return (
      i && !t._gsapAllow && t.preventDefault(),
      t.changedTouches ? t.changedTouches[0] : t
    );
  },
  No = function (t) {
    var i = Math.max.apply(Math, t),
      e = Math.min.apply(Math, t);
    return Math.abs(i) >= Math.abs(e) ? i : e;
  },
  al = function () {
    ((Hr = It.core.globals().ScrollTrigger), Hr && Hr.core && ac());
  },
  ll = function (t) {
    return (
      (It = t || sl()),
      !On &&
        It &&
        typeof document < "u" &&
        document.body &&
        ((xe = window),
        (bi = document),
        (Ti = bi.documentElement),
        (gr = bi.body),
        (rl = [xe, bi, Ti, gr]),
        It.utils.clamp,
        (nl = It.core.context || function () {}),
        (Bi = "onpointerenter" in gr ? "pointer" : "mouse"),
        (il = xt.isTouch =
          xe.matchMedia &&
          xe.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in xe ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (Be = xt.eventTypes =
          (
            "ontouchstart" in Ti
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Ti
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (ol = 0);
        }, 500),
        al(),
        (On = 1)),
      On
    );
  };
se.op = Pt;
W.cache = 0;
var xt = (function () {
  function o(i) {
    this.init(i);
  }
  var t = o.prototype;
  return (
    (t.init = function (e) {
      (On || ll(It) || console.warn("Please gsap.registerPlugin(Observer)"),
        Hr || al());
      var r = e.tolerance,
        n = e.dragMinimum,
        s = e.type,
        a = e.target,
        l = e.lineHeight,
        u = e.debounce,
        c = e.preventDefault,
        p = e.onStop,
        h = e.onStopDelay,
        f = e.ignore,
        _ = e.wheelSpeed,
        d = e.event,
        g = e.onDragStart,
        w = e.onDragEnd,
        b = e.onDrag,
        S = e.onPress,
        y = e.onRelease,
        T = e.onRight,
        C = e.onLeft,
        x = e.onUp,
        P = e.onDown,
        k = e.onChangeX,
        E = e.onChangeY,
        L = e.onChange,
        O = e.onToggleX,
        q = e.onToggleY,
        H = e.onHover,
        K = e.onHoverEnd,
        U = e.onMove,
        z = e.ignoreCheck,
        Z = e.isNormalizer,
        st = e.onGestureStart,
        m = e.onGestureEnd,
        ot = e.onWheel,
        Kt = e.onEnable,
        ze = e.onDisable,
        dt = e.onClick,
        zt = e.scrollSpeed,
        Yt = e.capture,
        bt = e.allowClicks,
        jt = e.lockAxis,
        Bt = e.onLockAxis;
      ((this.target = a = ae(a) || Ti),
        (this.vars = e),
        f && (f = It.utils.toArray(f)),
        (r = r || 1e-9),
        (n = n || 0),
        (_ = _ || 1),
        (zt = zt || 1),
        (s = s || "wheel,touch,pointer"),
        (u = u !== !1),
        l || (l = parseFloat(xe.getComputedStyle(gr).lineHeight) || 22));
      var fi,
        Zt,
        Qt,
        j,
        mt,
        oe,
        de,
        v = this,
        pe = 0,
        Qe = 0,
        hi = e.passive || (!c && e.passive !== !1),
        pt = Mi(a, se),
        Je = Mi(a, Pt),
        di = pt(),
        Ai = Je(),
        Ot =
          ~s.indexOf("touch") &&
          !~s.indexOf("pointer") &&
          Be[0] === "pointerdown",
        pi = qr(a),
        vt = a.ownerDocument || bi,
        Le = [0, 0, 0],
        Ee = [0, 0, 0],
        ti = 0,
        Cr = function () {
          return (ti = Vr());
        },
        Tt = function (R, Q) {
          return (
            ((v.event = R) && f && lc(R.target, f)) ||
            (Q && Ot && R.pointerType !== "touch") ||
            (z && z(R, Q))
          );
        },
        cn = function () {
          (v._vx.reset(), v._vy.reset(), Zt.pause(), p && p(v));
        },
        ei = function () {
          var R = (v.deltaX = No(Le)),
            Q = (v.deltaY = No(Ee)),
            M = Math.abs(R) >= r,
            F = Math.abs(Q) >= r;
          (L && (M || F) && L(v, R, Q, Le, Ee),
            M &&
              (T && v.deltaX > 0 && T(v),
              C && v.deltaX < 0 && C(v),
              k && k(v),
              O && v.deltaX < 0 != pe < 0 && O(v),
              (pe = v.deltaX),
              (Le[0] = Le[1] = Le[2] = 0)),
            F &&
              (P && v.deltaY > 0 && P(v),
              x && v.deltaY < 0 && x(v),
              E && E(v),
              q && v.deltaY < 0 != Qe < 0 && q(v),
              (Qe = v.deltaY),
              (Ee[0] = Ee[1] = Ee[2] = 0)),
            (j || Qt) &&
              (U && U(v),
              Qt && (g && Qt === 1 && g(v), b && b(v), (Qt = 0)),
              (j = !1)),
            oe && !(oe = !1) && Bt && Bt(v),
            mt && (ot(v), (mt = !1)),
            (fi = 0));
        },
        ir = function (R, Q, M) {
          ((Le[M] += R),
            (Ee[M] += Q),
            v._vx.update(R),
            v._vy.update(Q),
            u ? fi || (fi = requestAnimationFrame(ei)) : ei());
        },
        rr = function (R, Q) {
          (jt &&
            !de &&
            ((v.axis = de = Math.abs(R) > Math.abs(Q) ? "x" : "y"), (oe = !0)),
            de !== "y" && ((Le[2] += R), v._vx.update(R, !0)),
            de !== "x" && ((Ee[2] += Q), v._vy.update(Q, !0)),
            u ? fi || (fi = requestAnimationFrame(ei)) : ei());
        },
        _i = function (R) {
          if (!Tt(R, 1)) {
            R = Dr(R, c);
            var Q = R.clientX,
              M = R.clientY,
              F = Q - v.x,
              A = M - v.y,
              I = v.isDragging;
            ((v.x = Q),
              (v.y = M),
              (I ||
                ((F || A) &&
                  (Math.abs(v.startX - Q) >= n ||
                    Math.abs(v.startY - M) >= n))) &&
                (Qt || (Qt = I ? 2 : 1), I || (v.isDragging = !0), rr(F, A)));
          }
        },
        Ri = (v.onPress = function (N) {
          Tt(N, 1) ||
            (N && N.button) ||
            ((v.axis = de = null),
            Zt.pause(),
            (v.isPressed = !0),
            (N = Dr(N)),
            (pe = Qe = 0),
            (v.startX = v.x = N.clientX),
            (v.startY = v.y = N.clientY),
            v._vx.reset(),
            v._vy.reset(),
            te(Z ? a : vt, Be[1], _i, hi, !0),
            (v.deltaX = v.deltaY = 0),
            S && S(v));
        }),
        V = (v.onRelease = function (N) {
          if (!Tt(N, 1)) {
            Jt(Z ? a : vt, Be[1], _i, !0);
            var R = !isNaN(v.y - v.startY),
              Q = v.isDragging,
              M =
                Q &&
                (Math.abs(v.x - v.startX) > 3 || Math.abs(v.y - v.startY) > 3),
              F = Dr(N);
            (!M &&
              R &&
              (v._vx.reset(),
              v._vy.reset(),
              c &&
                bt &&
                It.delayedCall(0.08, function () {
                  if (Vr() - ti > 300 && !N.defaultPrevented) {
                    if (N.target.click) N.target.click();
                    else if (vt.createEvent) {
                      var A = vt.createEvent("MouseEvents");
                      (A.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        xe,
                        1,
                        F.screenX,
                        F.screenY,
                        F.clientX,
                        F.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null,
                      ),
                        N.target.dispatchEvent(A));
                    }
                  }
                })),
              (v.isDragging = v.isGesturing = v.isPressed = !1),
              p && Q && !Z && Zt.restart(!0),
              Qt && ei(),
              w && Q && w(v),
              y && y(v, M));
          }
        }),
        zi = function (R) {
          return (
            R.touches &&
            R.touches.length > 1 &&
            (v.isGesturing = !0) &&
            st(R, v.isDragging)
          );
        },
        Fe = function () {
          return (v.isGesturing = !1) || m(v);
        },
        Ie = function (R) {
          if (!Tt(R)) {
            var Q = pt(),
              M = Je();
            (ir((Q - di) * zt, (M - Ai) * zt, 1),
              (di = Q),
              (Ai = M),
              p && Zt.restart(!0));
          }
        },
        Ne = function (R) {
          if (!Tt(R)) {
            ((R = Dr(R, c)), ot && (mt = !0));
            var Q =
              (R.deltaMode === 1 ? l : R.deltaMode === 2 ? xe.innerHeight : 1) *
              _;
            (ir(R.deltaX * Q, R.deltaY * Q, 0), p && !Z && Zt.restart(!0));
          }
        },
        Li = function (R) {
          if (!Tt(R)) {
            var Q = R.clientX,
              M = R.clientY,
              F = Q - v.x,
              A = M - v.y;
            ((v.x = Q),
              (v.y = M),
              (j = !0),
              p && Zt.restart(!0),
              (F || A) && rr(F, A));
          }
        },
        nr = function (R) {
          ((v.event = R), H(v));
        },
        ii = function (R) {
          ((v.event = R), K(v));
        },
        Er = function (R) {
          return Tt(R) || (Dr(R, c) && dt(v));
        };
      ((Zt = v._dc = It.delayedCall(h || 0.25, cn).pause()),
        (v.deltaX = v.deltaY = 0),
        (v._vx = Ps(0, 50, !0)),
        (v._vy = Ps(0, 50, !0)),
        (v.scrollX = pt),
        (v.scrollY = Je),
        (v.isDragging = v.isGesturing = v.isPressed = !1),
        nl(this),
        (v.enable = function (N) {
          return (
            v.isEnabled ||
              (te(pi ? vt : a, "scroll", Es),
              s.indexOf("scroll") >= 0 && te(pi ? vt : a, "scroll", Ie, hi, Yt),
              s.indexOf("wheel") >= 0 && te(a, "wheel", Ne, hi, Yt),
              ((s.indexOf("touch") >= 0 && il) || s.indexOf("pointer") >= 0) &&
                (te(a, Be[0], Ri, hi, Yt),
                te(vt, Be[2], V),
                te(vt, Be[3], V),
                bt && te(a, "click", Cr, !0, !0),
                dt && te(a, "click", Er),
                st && te(vt, "gesturestart", zi),
                m && te(vt, "gestureend", Fe),
                H && te(a, Bi + "enter", nr),
                K && te(a, Bi + "leave", ii),
                U && te(a, Bi + "move", Li)),
              (v.isEnabled = !0),
              (v.isDragging = v.isGesturing = v.isPressed = j = Qt = !1),
              v._vx.reset(),
              v._vy.reset(),
              (di = pt()),
              (Ai = Je()),
              N && N.type && Ri(N),
              Kt && Kt(v)),
            v
          );
        }),
        (v.disable = function () {
          v.isEnabled &&
            (hr.filter(function (N) {
              return N !== v && qr(N.target);
            }).length || Jt(pi ? vt : a, "scroll", Es),
            v.isPressed &&
              (v._vx.reset(), v._vy.reset(), Jt(Z ? a : vt, Be[1], _i, !0)),
            Jt(pi ? vt : a, "scroll", Ie, Yt),
            Jt(a, "wheel", Ne, Yt),
            Jt(a, Be[0], Ri, Yt),
            Jt(vt, Be[2], V),
            Jt(vt, Be[3], V),
            Jt(a, "click", Cr, !0),
            Jt(a, "click", Er),
            Jt(vt, "gesturestart", zi),
            Jt(vt, "gestureend", Fe),
            Jt(a, Bi + "enter", nr),
            Jt(a, Bi + "leave", ii),
            Jt(a, Bi + "move", Li),
            (v.isEnabled = v.isPressed = v.isDragging = !1),
            ze && ze(v));
        }),
        (v.kill = v.revert =
          function () {
            v.disable();
            var N = hr.indexOf(v);
            (N >= 0 && hr.splice(N, 1), oi === v && (oi = 0));
          }),
        hr.push(v),
        Z && qr(a) && (oi = v),
        v.enable(d));
    }),
    oc(o, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    o
  );
})();
xt.version = "3.14.2";
xt.create = function (o) {
  return new xt(o);
};
xt.register = ll;
xt.getAll = function () {
  return hr.slice();
};
xt.getById = function (o) {
  return hr.filter(function (t) {
    return t.vars.id === o;
  })[0];
};
sl() && It.registerPlugin(xt);
var D,
  lr,
  X,
  nt,
  ye,
  J,
  so,
  Hn,
  an,
  Ur,
  Lr,
  gn,
  Vt,
  Kn,
  Os,
  ie,
  Yo,
  Bo,
  ur,
  ul,
  ss,
  cl,
  ee,
  Ms,
  fl,
  hl,
  vi,
  Ds,
  oo,
  mr,
  ao,
  $r,
  As,
  os,
  mn = 1,
  qt = Date.now,
  as = qt(),
  Re = 0,
  Fr = 0,
  Xo = function (t, i, e) {
    var r = me(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
    return ((e["_" + i + "Clamp"] = r), r ? t.substr(6, t.length - 7) : t);
  },
  Wo = function (t, i) {
    return i && (!me(t) || t.substr(0, 6) !== "clamp(")
      ? "clamp(" + t + ")"
      : t;
  },
  uc = function o() {
    return Fr && requestAnimationFrame(o);
  },
  Ho = function () {
    return (Kn = 1);
  },
  Vo = function () {
    return (Kn = 0);
  },
  Ue = function (t) {
    return t;
  },
  Ir = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  dl = function () {
    return typeof window < "u";
  },
  pl = function () {
    return D || (dl() && (D = window.gsap) && D.registerPlugin && D);
  },
  Qi = function (t) {
    return !!~so.indexOf(t);
  },
  _l = function (t) {
    return (
      (t === "Height" ? ao : X["inner" + t]) ||
      ye["client" + t] ||
      J["client" + t]
    );
  },
  gl = function (t) {
    return (
      Ci(t, "getBoundingClientRect") ||
      (Qi(t)
        ? function () {
            return ((zn.width = X.innerWidth), (zn.height = ao), zn);
          }
        : function () {
            return si(t);
          })
    );
  },
  cc = function (t, i, e) {
    var r = e.d,
      n = e.d2,
      s = e.a;
    return (s = Ci(t, "getBoundingClientRect"))
      ? function () {
          return s()[r];
        }
      : function () {
          return (i ? _l(n) : t["client" + n]) || 0;
        };
  },
  fc = function (t, i) {
    return !i || ~je.indexOf(t)
      ? gl(t)
      : function () {
          return zn;
        };
  },
  Ke = function (t, i) {
    var e = i.s,
      r = i.d2,
      n = i.d,
      s = i.a;
    return Math.max(
      0,
      (e = "scroll" + r) && (s = Ci(t, e))
        ? s() - gl(t)()[n]
        : Qi(t)
          ? (ye[e] || J[e]) - _l(r)
          : t[e] - t["offset" + r],
    );
  },
  vn = function (t, i) {
    for (var e = 0; e < ur.length; e += 3)
      (!i || ~i.indexOf(ur[e + 1])) && t(ur[e], ur[e + 1], ur[e + 2]);
  },
  me = function (t) {
    return typeof t == "string";
  },
  $t = function (t) {
    return typeof t == "function";
  },
  Nr = function (t) {
    return typeof t == "number";
  },
  Xi = function (t) {
    return typeof t == "object";
  },
  Ar = function (t, i, e) {
    return t && t.progress(i ? 0 : 1) && e && t.pause();
  },
  ls = function (t, i) {
    if (t.enabled) {
      var e = t._ctx
        ? t._ctx.add(function () {
            return i(t);
          })
        : i(t);
      e && e.totalTime && (t.callbackAnimation = e);
    }
  },
  or = Math.abs,
  ml = "left",
  vl = "top",
  lo = "right",
  uo = "bottom",
  Gi = "width",
  Ki = "height",
  Gr = "Right",
  Kr = "Left",
  jr = "Top",
  Zr = "Bottom",
  St = "padding",
  Oe = "margin",
  kr = "Width",
  co = "Height",
  Et = "px",
  Me = function (t) {
    return X.getComputedStyle(t);
  },
  hc = function (t) {
    var i = Me(t).position;
    t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
  },
  qo = function (t, i) {
    for (var e in i) e in t || (t[e] = i[e]);
    return t;
  },
  si = function (t, i) {
    var e =
        i &&
        Me(t)[Os] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        D.to(t, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      r = t.getBoundingClientRect();
    return (e && e.progress(0).kill(), r);
  },
  Vn = function (t, i) {
    var e = i.d2;
    return t["offset" + e] || t["client" + e] || 0;
  },
  yl = function (t) {
    var i = [],
      e = t.labels,
      r = t.duration(),
      n;
    for (n in e) i.push(e[n] / r);
    return i;
  },
  dc = function (t) {
    return function (i) {
      return D.utils.snap(yl(t), i);
    };
  },
  fo = function (t) {
    var i = D.utils.snap(t),
      e =
        Array.isArray(t) &&
        t.slice(0).sort(function (r, n) {
          return r - n;
        });
    return e
      ? function (r, n, s) {
          s === void 0 && (s = 0.001);
          var a;
          if (!n) return i(r);
          if (n > 0) {
            for (r -= s, a = 0; a < e.length; a++) if (e[a] >= r) return e[a];
            return e[a - 1];
          } else for (a = e.length, r += s; a--;) if (e[a] <= r) return e[a];
          return e[0];
        }
      : function (r, n, s) {
          s === void 0 && (s = 0.001);
          var a = i(r);
          return !n || Math.abs(a - r) < s || a - r < 0 == n < 0
            ? a
            : i(n < 0 ? r - t : r + t);
        };
  },
  pc = function (t) {
    return function (i, e) {
      return fo(yl(t))(i, e.direction);
    };
  },
  yn = function (t, i, e, r) {
    return e.split(",").forEach(function (n) {
      return t(i, n, r);
    });
  },
  At = function (t, i, e, r, n) {
    return t.addEventListener(i, e, { passive: !r, capture: !!n });
  },
  Dt = function (t, i, e, r) {
    return t.removeEventListener(i, e, !!r);
  },
  wn = function (t, i, e) {
    ((e = e && e.wheelHandler), e && (t(i, "wheel", e), t(i, "touchmove", e)));
  },
  Uo = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  xn = { toggleActions: "play", anticipatePin: 0 },
  qn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Mn = function (t, i) {
    if (me(t)) {
      var e = t.indexOf("="),
        r = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
      (~e && (t.indexOf("%") > e && (r *= i / 100), (t = t.substr(0, e - 1))),
        (t =
          r +
          (t in qn
            ? qn[t] * i
            : ~t.indexOf("%")
              ? (parseFloat(t) * i) / 100
              : parseFloat(t) || 0)));
    }
    return t;
  },
  bn = function (t, i, e, r, n, s, a, l) {
    var u = n.startColor,
      c = n.endColor,
      p = n.fontSize,
      h = n.indent,
      f = n.fontWeight,
      _ = nt.createElement("div"),
      d = Qi(e) || Ci(e, "pinType") === "fixed",
      g = t.indexOf("scroller") !== -1,
      w = d ? J : e,
      b = t.indexOf("start") !== -1,
      S = b ? u : c,
      y =
        "border-color:" +
        S +
        ";font-size:" +
        p +
        ";color:" +
        S +
        ";font-weight:" +
        f +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (y += "position:" + ((g || l) && d ? "fixed;" : "absolute;")),
      (g || l || !d) &&
        (y += (r === Pt ? lo : uo) + ":" + (s + parseFloat(h)) + "px;"),
      a &&
        (y +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (_._isStart = b),
      _.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")),
      (_.style.cssText = y),
      (_.innerText = i || i === 0 ? t + "-" + i : t),
      w.children[0] ? w.insertBefore(_, w.children[0]) : w.appendChild(_),
      (_._offset = _["offset" + r.op.d2]),
      Dn(_, 0, r, b),
      _
    );
  },
  Dn = function (t, i, e, r) {
    var n = { display: "block" },
      s = e[r ? "os2" : "p2"],
      a = e[r ? "p2" : "os2"];
    ((t._isFlipped = r),
      (n[e.a + "Percent"] = r ? -100 : 0),
      (n[e.a] = r ? "1px" : 0),
      (n["border" + s + kr] = 1),
      (n["border" + a + kr] = 0),
      (n[e.p] = i + "px"),
      D.set(t, n));
  },
  B = [],
  Rs = {},
  ln,
  $o = function () {
    return qt() - Re > 34 && (ln || (ln = requestAnimationFrame(li)));
  },
  ar = function () {
    (!ee || !ee.isPressed || ee.startX > J.clientWidth) &&
      (W.cache++,
      ee ? ln || (ln = requestAnimationFrame(li)) : li(),
      Re || tr("scrollStart"),
      (Re = qt()));
  },
  us = function () {
    ((hl = X.innerWidth), (fl = X.innerHeight));
  },
  Yr = function (t) {
    (W.cache++,
      (t === !0 ||
        (!Vt &&
          !cl &&
          !nt.fullscreenElement &&
          !nt.webkitFullscreenElement &&
          (!Ms ||
            hl !== X.innerWidth ||
            Math.abs(X.innerHeight - fl) > X.innerHeight * 0.25))) &&
        Hn.restart(!0));
  },
  Ji = {},
  _c = [],
  wl = function o() {
    return Dt(Y, "scrollEnd", o) || Hi(!0);
  },
  tr = function (t) {
    return (
      (Ji[t] &&
        Ji[t].map(function (i) {
          return i();
        })) ||
      _c
    );
  },
  ge = [],
  xl = function (t) {
    for (var i = 0; i < ge.length; i += 5)
      (!t || (ge[i + 4] && ge[i + 4].query === t)) &&
        ((ge[i].style.cssText = ge[i + 1]),
        ge[i].getBBox && ge[i].setAttribute("transform", ge[i + 2] || ""),
        (ge[i + 3].uncache = 1));
  },
  bl = function () {
    return W.forEach(function (t) {
      return $t(t) && ++t.cacheID && (t.rec = t());
    });
  },
  ho = function (t, i) {
    var e;
    for (ie = 0; ie < B.length; ie++)
      ((e = B[ie]),
        e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0)));
    (($r = !0), i && xl(i), i || tr("revert"));
  },
  Tl = function (t, i) {
    (W.cache++,
      (i || !re) &&
        W.forEach(function (e) {
          return $t(e) && e.cacheID++ && (e.rec = 0);
        }),
      me(t) && (X.history.scrollRestoration = oo = t));
  },
  re,
  ji = 0,
  Go,
  gc = function () {
    if (Go !== ji) {
      var t = (Go = ji);
      requestAnimationFrame(function () {
        return t === ji && Hi(!0);
      });
    }
  },
  Sl = function () {
    (J.appendChild(mr),
      (ao = (!ee && mr.offsetHeight) || X.innerHeight),
      J.removeChild(mr));
  },
  Ko = function (t) {
    return an(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
    ).forEach(function (i) {
      return (i.style.display = t ? "none" : "block");
    });
  },
  Hi = function (t, i) {
    if (
      ((ye = nt.documentElement),
      (J = nt.body),
      (so = [X, nt, ye, J]),
      Re && !t && !$r)
    ) {
      At(Y, "scrollEnd", wl);
      return;
    }
    (Sl(), (re = Y.isRefreshing = !0), $r || bl());
    var e = tr("refreshInit");
    (ul && Y.sort(),
      i || ho(),
      W.forEach(function (r) {
        $t(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      B.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      ($r = !1),
      B.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            s = r.pin[n];
          (r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - s), r.refresh());
        }
      }),
      (As = 1),
      Ko(!0),
      B.forEach(function (r) {
        var n = Ke(r.scroller, r._dir),
          s = r.vars.end === "max" || (r._endClamp && r.end > n),
          a = r._startClamp && r.start >= n;
        (s || a) &&
          r.setPositions(
            a ? n - 1 : r.start,
            s ? Math.max(a ? n : r.start + 1, n) : r.end,
            !0,
          );
      }),
      Ko(!1),
      (As = 0),
      e.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      W.forEach(function (r) {
        $t(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      Tl(oo, 1),
      Hn.pause(),
      ji++,
      (re = 2),
      li(2),
      B.forEach(function (r) {
        return $t(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (re = Y.isRefreshing = !1),
      tr("refresh"));
  },
  zs = 0,
  An = 1,
  Qr,
  li = function (t) {
    if (t === 2 || (!re && !$r)) {
      ((Y.isUpdating = !0), Qr && Qr.update(0));
      var i = B.length,
        e = qt(),
        r = e - as >= 50,
        n = i && B[0].scroll();
      if (
        ((An = zs > n ? -1 : 1),
        re || (zs = n),
        r &&
          (Re && !Kn && e - Re > 200 && ((Re = 0), tr("scrollEnd")),
          (Lr = as),
          (as = e)),
        An < 0)
      ) {
        for (ie = i; ie-- > 0;) B[ie] && B[ie].update(0, r);
        An = 1;
      } else for (ie = 0; ie < i; ie++) B[ie] && B[ie].update(0, r);
      Y.isUpdating = !1;
    }
    ln = 0;
  },
  Ls = [
    ml,
    vl,
    uo,
    lo,
    Oe + Zr,
    Oe + Gr,
    Oe + jr,
    Oe + Kr,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Rn = Ls.concat([
    Gi,
    Ki,
    "boxSizing",
    "max" + kr,
    "max" + co,
    "position",
    Oe,
    St,
    St + jr,
    St + Gr,
    St + Zr,
    St + Kr,
  ]),
  mc = function (t, i, e) {
    vr(e);
    var r = t._gsap;
    if (r.spacerIsNative) vr(r.spacerState);
    else if (t._gsap.swappedIn) {
      var n = i.parentNode;
      n && (n.insertBefore(t, i), n.removeChild(i));
    }
    t._gsap.swappedIn = !1;
  },
  cs = function (t, i, e, r) {
    if (!t._gsap.swappedIn) {
      for (var n = Ls.length, s = i.style, a = t.style, l; n--;)
        ((l = Ls[n]), (s[l] = e[l]));
      ((s.position = e.position === "absolute" ? "absolute" : "relative"),
        e.display === "inline" && (s.display = "inline-block"),
        (a[uo] = a[lo] = "auto"),
        (s.flexBasis = e.flexBasis || "auto"),
        (s.overflow = "visible"),
        (s.boxSizing = "border-box"),
        (s[Gi] = Vn(t, se) + Et),
        (s[Ki] = Vn(t, Pt) + Et),
        (s[St] = a[Oe] = a[vl] = a[ml] = "0"),
        vr(r),
        (a[Gi] = a["max" + kr] = e[Gi]),
        (a[Ki] = a["max" + co] = e[Ki]),
        (a[St] = e[St]),
        t.parentNode !== i &&
          (t.parentNode.insertBefore(i, t), i.appendChild(t)),
        (t._gsap.swappedIn = !0));
    }
  },
  vc = /([A-Z])/g,
  vr = function (t) {
    if (t) {
      var i = t.t.style,
        e = t.length,
        r = 0,
        n,
        s;
      for ((t.t._gsap || D.core.getCache(t.t)).uncache = 1; r < e; r += 2)
        ((s = t[r + 1]),
          (n = t[r]),
          s
            ? (i[n] = s)
            : i[n] && i.removeProperty(n.replace(vc, "-$1").toLowerCase()));
    }
  },
  Tn = function (t) {
    for (var i = Rn.length, e = t.style, r = [], n = 0; n < i; n++)
      r.push(Rn[n], e[Rn[n]]);
    return ((r.t = t), r);
  },
  yc = function (t, i, e) {
    for (var r = [], n = t.length, s = e ? 8 : 0, a; s < n; s += 2)
      ((a = t[s]), r.push(a, a in i ? i[a] : t[s + 1]));
    return ((r.t = t.t), r);
  },
  zn = { left: 0, top: 0 },
  jo = function (t, i, e, r, n, s, a, l, u, c, p, h, f, _) {
    ($t(t) && (t = t(l)),
      me(t) &&
        t.substr(0, 3) === "max" &&
        (t = h + (t.charAt(4) === "=" ? Mn("0" + t.substr(3), e) : 0)));
    var d = f ? f.time() : 0,
      g,
      w,
      b;
    if ((f && f.seek(0), isNaN(t) || (t = +t), Nr(t)))
      (f &&
        (t = D.utils.mapRange(
          f.scrollTrigger.start,
          f.scrollTrigger.end,
          0,
          h,
          t,
        )),
        a && Dn(a, e, r, !0));
    else {
      $t(i) && (i = i(l));
      var S = (t || "0").split(" "),
        y,
        T,
        C,
        x;
      ((b = ae(i, l) || J),
        (y = si(b) || {}),
        (!y || (!y.left && !y.top)) &&
          Me(b).display === "none" &&
          ((x = b.style.display),
          (b.style.display = "block"),
          (y = si(b)),
          x ? (b.style.display = x) : b.style.removeProperty("display")),
        (T = Mn(S[0], y[r.d])),
        (C = Mn(S[1] || "0", e)),
        (t = y[r.p] - u[r.p] - c + T + n - C),
        a && Dn(a, C, r, e - C < 20 || (a._isStart && C > 20)),
        (e -= e - C));
    }
    if ((_ && ((l[_] = t || -0.001), t < 0 && (t = 0)), s)) {
      var P = t + e,
        k = s._isStart;
      ((g = "scroll" + r.d2),
        Dn(
          s,
          P,
          r,
          (k && P > 20) ||
            (!k && (p ? Math.max(J[g], ye[g]) : s.parentNode[g]) <= P + 1),
        ),
        p &&
          ((u = si(a)),
          p && (s.style[r.op.p] = u[r.op.p] - r.op.m - s._offset + Et)));
    }
    return (
      f &&
        b &&
        ((g = si(b)),
        f.seek(h),
        (w = si(b)),
        (f._caScrollDist = g[r.p] - w[r.p]),
        (t = (t / f._caScrollDist) * h)),
      f && f.seek(d),
      f ? t : Math.round(t)
    );
  },
  wc = /(webkit|moz|length|cssText|inset)/i,
  Zo = function (t, i, e, r) {
    if (t.parentNode !== i) {
      var n = t.style,
        s,
        a;
      if (i === J) {
        ((t._stOrig = n.cssText), (a = Me(t)));
        for (s in a)
          !+s &&
            !wc.test(s) &&
            a[s] &&
            typeof n[s] == "string" &&
            s !== "0" &&
            (n[s] = a[s]);
        ((n.top = e), (n.left = r));
      } else n.cssText = t._stOrig;
      ((D.core.getCache(t).uncache = 1), i.appendChild(t));
    }
  },
  kl = function (t, i, e) {
    var r = i,
      n = r;
    return function (s) {
      var a = Math.round(t());
      return (
        a !== r &&
          a !== n &&
          Math.abs(a - r) > 3 &&
          Math.abs(a - n) > 3 &&
          ((s = a), e && e()),
        (n = r),
        (r = Math.round(s)),
        r
      );
    };
  },
  Sn = function (t, i, e) {
    var r = {};
    ((r[i.p] = "+=" + e), D.set(t, r));
  },
  Qo = function (t, i) {
    var e = Mi(t, i),
      r = "_scroll" + i.p2,
      n = function s(a, l, u, c, p) {
        var h = s.tween,
          f = l.onComplete,
          _ = {};
        u = u || e();
        var d = kl(e, u, function () {
          (h.kill(), (s.tween = 0));
        });
        return (
          (p = (c && p) || 0),
          (c = c || a - u),
          h && h.kill(),
          (l[r] = a),
          (l.inherit = !1),
          (l.modifiers = _),
          (_[r] = function () {
            return d(u + c * h.ratio + p * h.ratio * h.ratio);
          }),
          (l.onUpdate = function () {
            (W.cache++, s.tween && li());
          }),
          (l.onComplete = function () {
            ((s.tween = 0), f && f.call(h));
          }),
          (h = s.tween = D.to(t, l)),
          h
        );
      };
    return (
      (t[r] = e),
      (e.wheelHandler = function () {
        return n.tween && n.tween.kill() && (n.tween = 0);
      }),
      At(t, "wheel", e.wheelHandler),
      Y.isTouch && At(t, "touchmove", e.wheelHandler),
      n
    );
  },
  Y = (function () {
    function o(i, e) {
      (lr ||
        o.register(D) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Ds(this),
        this.init(i, e));
    }
    var t = o.prototype;
    return (
      (t.init = function (e, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Fr)
        ) {
          this.update = this.refresh = this.kill = Ue;
          return;
        }
        e = qo(me(e) || Nr(e) || e.nodeType ? { trigger: e } : e, xn);
        var n = e,
          s = n.onUpdate,
          a = n.toggleClass,
          l = n.id,
          u = n.onToggle,
          c = n.onRefresh,
          p = n.scrub,
          h = n.trigger,
          f = n.pin,
          _ = n.pinSpacing,
          d = n.invalidateOnRefresh,
          g = n.anticipatePin,
          w = n.onScrubComplete,
          b = n.onSnapComplete,
          S = n.once,
          y = n.snap,
          T = n.pinReparent,
          C = n.pinSpacer,
          x = n.containerAnimation,
          P = n.fastScrollEnd,
          k = n.preventOverlaps,
          E =
            e.horizontal || (e.containerAnimation && e.horizontal !== !1)
              ? se
              : Pt,
          L = !p && p !== 0,
          O = ae(e.scroller || X),
          q = D.core.getCache(O),
          H = Qi(O),
          K =
            ("pinType" in e
              ? e.pinType
              : Ci(O, "pinType") || (H && "fixed")) === "fixed",
          U = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
          z = L && e.toggleActions.split(" "),
          Z = "markers" in e ? e.markers : xn.markers,
          st = H ? 0 : parseFloat(Me(O)["border" + E.p2 + kr]) || 0,
          m = this,
          ot =
            e.onRefreshInit &&
            function () {
              return e.onRefreshInit(m);
            },
          Kt = cc(O, H, E),
          ze = fc(O, H),
          dt = 0,
          zt = 0,
          Yt = 0,
          bt = Mi(O, E),
          jt,
          Bt,
          fi,
          Zt,
          Qt,
          j,
          mt,
          oe,
          de,
          v,
          pe,
          Qe,
          hi,
          pt,
          Je,
          di,
          Ai,
          Ot,
          pi,
          vt,
          Le,
          Ee,
          ti,
          Cr,
          Tt,
          cn,
          ei,
          ir,
          rr,
          _i,
          Ri,
          V,
          zi,
          Fe,
          Ie,
          Ne,
          Li,
          nr,
          ii;
        if (
          ((m._startClamp = m._endClamp = !1),
          (m._dir = E),
          (g *= 45),
          (m.scroller = O),
          (m.scroll = x ? x.time.bind(x) : bt),
          (Zt = bt()),
          (m.vars = e),
          (r = r || e.animation),
          "refreshPriority" in e &&
            ((ul = 1), e.refreshPriority === -9999 && (Qr = m)),
          (q.tweenScroll = q.tweenScroll || {
            top: Qo(O, Pt),
            left: Qo(O, se),
          }),
          (m.tweenTo = jt = q.tweenScroll[E.p]),
          (m.scrubDuration = function (M) {
            ((zi = Nr(M) && M),
              zi
                ? V
                  ? V.duration(M)
                  : (V = D.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: zi,
                      paused: !0,
                      onComplete: function () {
                        return w && w(m);
                      },
                    }))
                : (V && V.progress(1).kill(), (V = 0)));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !m.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                e.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (m.animation = r.pause()),
            (r.scrollTrigger = m),
            m.scrubDuration(p),
            (_i = 0),
            l || (l = r.vars.id)),
          y &&
            ((!Xi(y) || y.push) && (y = { snapTo: y }),
            "scrollBehavior" in J.style &&
              D.set(H ? [J, ye] : O, { scrollBehavior: "auto" }),
            W.forEach(function (M) {
              return (
                $t(M) &&
                M.target === (H ? nt.scrollingElement || ye : O) &&
                (M.smooth = !1)
              );
            }),
            (fi = $t(y.snapTo)
              ? y.snapTo
              : y.snapTo === "labels"
                ? dc(r)
                : y.snapTo === "labelsDirectional"
                  ? pc(r)
                  : y.directional !== !1
                    ? function (M, F) {
                        return fo(y.snapTo)(
                          M,
                          qt() - zt < 500 ? 0 : F.direction,
                        );
                      }
                    : D.utils.snap(y.snapTo)),
            (Fe = y.duration || { min: 0.1, max: 2 }),
            (Fe = Xi(Fe) ? Ur(Fe.min, Fe.max) : Ur(Fe, Fe)),
            (Ie = D.delayedCall(y.delay || zi / 2 || 0.1, function () {
              var M = bt(),
                F = qt() - zt < 500,
                A = jt.tween;
              if (
                (F || Math.abs(m.getVelocity()) < 10) &&
                !A &&
                !Kn &&
                dt !== M
              ) {
                var I = (M - j) / pt,
                  Mt = r && !L ? r.totalProgress() : I,
                  $ = F ? 0 : ((Mt - Ri) / (qt() - Lr)) * 1e3 || 0,
                  yt = D.utils.clamp(-I, 1 - I, (or($ / 2) * $) / 0.185),
                  Xt = I + (y.inertia === !1 ? 0 : yt),
                  _t,
                  at,
                  et = y,
                  Ye = et.onStart,
                  ut = et.onInterrupt,
                  _e = et.onComplete;
                if (
                  ((_t = fi(Xt, m)),
                  Nr(_t) || (_t = Xt),
                  (at = Math.max(0, Math.round(j + _t * pt))),
                  M <= mt && M >= j && at !== M)
                ) {
                  if (A && !A._initted && A.data <= or(at - M)) return;
                  (y.inertia === !1 && (yt = _t - I),
                    jt(
                      at,
                      {
                        duration: Fe(
                          or(
                            (Math.max(or(Xt - Mt), or(_t - Mt)) * 0.185) /
                              $ /
                              0.05 || 0,
                          ),
                        ),
                        ease: y.ease || "power3",
                        data: or(at - M),
                        onInterrupt: function () {
                          return Ie.restart(!0) && ut && ut(m);
                        },
                        onComplete: function () {
                          (m.update(),
                            (dt = bt()),
                            r &&
                              !L &&
                              (V
                                ? V.resetTo(
                                    "totalProgress",
                                    _t,
                                    r._tTime / r._tDur,
                                  )
                                : r.progress(_t)),
                            (_i = Ri =
                              r && !L ? r.totalProgress() : m.progress),
                            b && b(m),
                            _e && _e(m));
                        },
                      },
                      M,
                      yt * pt,
                      at - M - yt * pt,
                    ),
                    Ye && Ye(m, jt.tween));
                }
              } else m.isActive && dt !== M && Ie.restart(!0);
            }).pause())),
          l && (Rs[l] = m),
          (h = m.trigger = ae(h || (f !== !0 && f))),
          (ii = h && h._gsap && h._gsap.stRevert),
          ii && (ii = ii(m)),
          (f = f === !0 ? h : ae(f)),
          me(a) && (a = { targets: h, className: a }),
          f &&
            (_ === !1 ||
              _ === Oe ||
              (_ =
                !_ &&
                f.parentNode &&
                f.parentNode.style &&
                Me(f.parentNode).display === "flex"
                  ? !1
                  : St),
            (m.pin = f),
            (Bt = D.core.getCache(f)),
            Bt.spacer
              ? (Je = Bt.pinState)
              : (C &&
                  ((C = ae(C)),
                  C && !C.nodeType && (C = C.current || C.nativeElement),
                  (Bt.spacerIsNative = !!C),
                  C && (Bt.spacerState = Tn(C))),
                (Bt.spacer = Ot = C || nt.createElement("div")),
                Ot.classList.add("pin-spacer"),
                l && Ot.classList.add("pin-spacer-" + l),
                (Bt.pinState = Je = Tn(f))),
            e.force3D !== !1 && D.set(f, { force3D: !0 }),
            (m.spacer = Ot = Bt.spacer),
            (rr = Me(f)),
            (Cr = rr[_ + E.os2]),
            (vt = D.getProperty(f)),
            (Le = D.quickSetter(f, E.a, Et)),
            cs(f, Ot, rr),
            (Ai = Tn(f))),
          Z)
        ) {
          ((Qe = Xi(Z) ? qo(Z, Uo) : Uo),
            (v = bn("scroller-start", l, O, E, Qe, 0)),
            (pe = bn("scroller-end", l, O, E, Qe, 0, v)),
            (pi = v["offset" + E.op.d2]));
          var Er = ae(Ci(O, "content") || O);
          ((oe = this.markerStart = bn("start", l, Er, E, Qe, pi, 0, x)),
            (de = this.markerEnd = bn("end", l, Er, E, Qe, pi, 0, x)),
            x && (nr = D.quickSetter([oe, de], E.a, Et)),
            !K &&
              !(je.length && Ci(O, "fixedMarkers") === !0) &&
              (hc(H ? J : O),
              D.set([v, pe], { force3D: !0 }),
              (cn = D.quickSetter(v, E.a, Et)),
              (ir = D.quickSetter(pe, E.a, Et))));
        }
        if (x) {
          var N = x.vars.onUpdate,
            R = x.vars.onUpdateParams;
          x.eventCallback("onUpdate", function () {
            (m.update(0, 0, 1), N && N.apply(x, R || []));
          });
        }
        if (
          ((m.previous = function () {
            return B[B.indexOf(m) - 1];
          }),
          (m.next = function () {
            return B[B.indexOf(m) + 1];
          }),
          (m.revert = function (M, F) {
            if (!F) return m.kill(!0);
            var A = M !== !1 || !m.enabled,
              I = Vt;
            A !== m.isReverted &&
              (A &&
                ((Ne = Math.max(bt(), m.scroll.rec || 0)),
                (Yt = m.progress),
                (Li = r && r.progress())),
              oe &&
                [oe, de, v, pe].forEach(function (Mt) {
                  return (Mt.style.display = A ? "none" : "block");
                }),
              A && ((Vt = m), m.update(A)),
              f &&
                (!T || !m.isActive) &&
                (A ? mc(f, Ot, Je) : cs(f, Ot, Me(f), Tt)),
              A || m.update(A),
              (Vt = I),
              (m.isReverted = A));
          }),
          (m.refresh = function (M, F, A, I) {
            if (!((Vt || !m.enabled) && !F)) {
              if (f && M && Re) {
                At(o, "scrollEnd", wl);
                return;
              }
              (!re && ot && ot(m),
                (Vt = m),
                jt.tween && !A && (jt.tween.kill(), (jt.tween = 0)),
                V && V.pause(),
                d &&
                  r &&
                  (r.revert({ kill: !1 }).invalidate(),
                  r.getChildren
                    ? r.getChildren(!0, !0, !1).forEach(function (gi) {
                        return gi.vars.immediateRender && gi.render(0, !0, !0);
                      })
                    : r.vars.immediateRender && r.render(0, !0, !0)),
                m.isReverted || m.revert(!0, !0),
                (m._subPinOffset = !1));
              var Mt = Kt(),
                $ = ze(),
                yt = x ? x.duration() : Ke(O, E),
                Xt = pt <= 0.01 || !pt,
                _t = 0,
                at = I || 0,
                et = Xi(A) ? A.end : e.end,
                Ye = e.endTrigger || h,
                ut = Xi(A)
                  ? A.start
                  : e.start || (e.start === 0 || !h ? 0 : f ? "0 0" : "0 100%"),
                _e = (m.pinnedContainer =
                  e.pinnedContainer && ae(e.pinnedContainer, m)),
                We = (h && Math.max(0, B.indexOf(m))) || 0,
                Lt = We,
                Ft,
                Wt,
                Fi,
                fn,
                Ht,
                Ct,
                He,
                jn,
                go,
                Pr,
                Ve,
                Or,
                hn;
              for (
                Z &&
                Xi(A) &&
                ((Or = D.getProperty(v, E.p)), (hn = D.getProperty(pe, E.p)));
                Lt-- > 0;
              )
                ((Ct = B[Lt]),
                  Ct.end || Ct.refresh(0, 1) || (Vt = m),
                  (He = Ct.pin),
                  He &&
                    (He === h || He === f || He === _e) &&
                    !Ct.isReverted &&
                    (Pr || (Pr = []), Pr.unshift(Ct), Ct.revert(!0, !0)),
                  Ct !== B[Lt] && (We--, Lt--));
              for (
                $t(ut) && (ut = ut(m)),
                  ut = Xo(ut, "start", m),
                  j =
                    jo(
                      ut,
                      h,
                      Mt,
                      E,
                      bt(),
                      oe,
                      v,
                      m,
                      $,
                      st,
                      K,
                      yt,
                      x,
                      m._startClamp && "_startClamp",
                    ) || (f ? -0.001 : 0),
                  $t(et) && (et = et(m)),
                  me(et) &&
                    !et.indexOf("+=") &&
                    (~et.indexOf(" ")
                      ? (et = (me(ut) ? ut.split(" ")[0] : "") + et)
                      : ((_t = Mn(et.substr(2), Mt)),
                        (et = me(ut)
                          ? ut
                          : (x
                              ? D.utils.mapRange(
                                  0,
                                  x.duration(),
                                  x.scrollTrigger.start,
                                  x.scrollTrigger.end,
                                  j,
                                )
                              : j) + _t),
                        (Ye = h))),
                  et = Xo(et, "end", m),
                  mt =
                    Math.max(
                      j,
                      jo(
                        et || (Ye ? "100% 0" : yt),
                        Ye,
                        Mt,
                        E,
                        bt() + _t,
                        de,
                        pe,
                        m,
                        $,
                        st,
                        K,
                        yt,
                        x,
                        m._endClamp && "_endClamp",
                      ),
                    ) || -0.001,
                  _t = 0,
                  Lt = We;
                Lt--;
              )
                ((Ct = B[Lt] || {}),
                  (He = Ct.pin),
                  He &&
                    Ct.start - Ct._pinPush <= j &&
                    !x &&
                    Ct.end > 0 &&
                    ((Ft =
                      Ct.end -
                      (m._startClamp ? Math.max(0, Ct.start) : Ct.start)),
                    ((He === h && Ct.start - Ct._pinPush < j) || He === _e) &&
                      isNaN(ut) &&
                      (_t += Ft * (1 - Ct.progress)),
                    He === f && (at += Ft)));
              if (
                ((j += _t),
                (mt += _t),
                m._startClamp && (m._startClamp += _t),
                m._endClamp &&
                  !re &&
                  ((m._endClamp = mt || -0.001), (mt = Math.min(mt, Ke(O, E)))),
                (pt = mt - j || ((j -= 0.01) && 0.001)),
                Xt && (Yt = D.utils.clamp(0, 1, D.utils.normalize(j, mt, Ne))),
                (m._pinPush = at),
                oe &&
                  _t &&
                  ((Ft = {}),
                  (Ft[E.a] = "+=" + _t),
                  _e && (Ft[E.p] = "-=" + bt()),
                  D.set([oe, de], Ft)),
                f && !(As && m.end >= Ke(O, E)))
              )
                ((Ft = Me(f)),
                  (fn = E === Pt),
                  (Fi = bt()),
                  (Ee = parseFloat(vt(E.a)) + at),
                  !yt &&
                    mt > 1 &&
                    ((Ve = (H ? nt.scrollingElement || ye : O).style),
                    (Ve = {
                      style: Ve,
                      value: Ve["overflow" + E.a.toUpperCase()],
                    }),
                    H &&
                      Me(J)["overflow" + E.a.toUpperCase()] !== "scroll" &&
                      (Ve.style["overflow" + E.a.toUpperCase()] = "scroll")),
                  cs(f, Ot, Ft),
                  (Ai = Tn(f)),
                  (Wt = si(f, !0)),
                  (jn = K && Mi(O, fn ? se : Pt)()),
                  _
                    ? ((Tt = [_ + E.os2, pt + at + Et]),
                      (Tt.t = Ot),
                      (Lt = _ === St ? Vn(f, E) + pt + at : 0),
                      Lt &&
                        (Tt.push(E.d, Lt + Et),
                        Ot.style.flexBasis !== "auto" &&
                          (Ot.style.flexBasis = Lt + Et)),
                      vr(Tt),
                      _e &&
                        B.forEach(function (gi) {
                          gi.pin === _e &&
                            gi.vars.pinSpacing !== !1 &&
                            (gi._subPinOffset = !0);
                        }),
                      K && bt(Ne))
                    : ((Lt = Vn(f, E)),
                      Lt &&
                        Ot.style.flexBasis !== "auto" &&
                        (Ot.style.flexBasis = Lt + Et)),
                  K &&
                    ((Ht = {
                      top: Wt.top + (fn ? Fi - j : jn) + Et,
                      left: Wt.left + (fn ? jn : Fi - j) + Et,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (Ht[Gi] = Ht["max" + kr] = Math.ceil(Wt.width) + Et),
                    (Ht[Ki] = Ht["max" + co] = Math.ceil(Wt.height) + Et),
                    (Ht[Oe] =
                      Ht[Oe + jr] =
                      Ht[Oe + Gr] =
                      Ht[Oe + Zr] =
                      Ht[Oe + Kr] =
                        "0"),
                    (Ht[St] = Ft[St]),
                    (Ht[St + jr] = Ft[St + jr]),
                    (Ht[St + Gr] = Ft[St + Gr]),
                    (Ht[St + Zr] = Ft[St + Zr]),
                    (Ht[St + Kr] = Ft[St + Kr]),
                    (di = yc(Je, Ht, T)),
                    re && bt(0)),
                  r
                    ? ((go = r._initted),
                      ss(1),
                      r.render(r.duration(), !0, !0),
                      (ti = vt(E.a) - Ee + pt + at),
                      (ei = Math.abs(pt - ti) > 1),
                      K && ei && di.splice(di.length - 2, 2),
                      r.render(0, !0, !0),
                      go || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      ss(0))
                    : (ti = pt),
                  Ve &&
                    (Ve.value
                      ? (Ve.style["overflow" + E.a.toUpperCase()] = Ve.value)
                      : Ve.style.removeProperty("overflow-" + E.a)));
              else if (h && bt() && !x)
                for (Wt = h.parentNode; Wt && Wt !== J;)
                  (Wt._pinOffset &&
                    ((j -= Wt._pinOffset), (mt -= Wt._pinOffset)),
                    (Wt = Wt.parentNode));
              (Pr &&
                Pr.forEach(function (gi) {
                  return gi.revert(!1, !0);
                }),
                (m.start = j),
                (m.end = mt),
                (Zt = Qt = re ? Ne : bt()),
                !x && !re && (Zt < Ne && bt(Ne), (m.scroll.rec = 0)),
                m.revert(!1, !0),
                (zt = qt()),
                Ie && ((dt = -1), Ie.restart(!0)),
                (Vt = 0),
                r &&
                  L &&
                  (r._initted || Li) &&
                  r.progress() !== Li &&
                  r.progress(Li || 0, !0).render(r.time(), !0, !0),
                (Xt || Yt !== m.progress || x || d || (r && !r._initted)) &&
                  (r &&
                    !L &&
                    (r._initted || Yt || r.vars.immediateRender !== !1) &&
                    r.totalProgress(
                      x && j < -0.001 && !Yt ? D.utils.normalize(j, mt, 0) : Yt,
                      !0,
                    ),
                  (m.progress = Xt || (Zt - j) / pt === Yt ? 0 : Yt)),
                f && _ && (Ot._pinOffset = Math.round(m.progress * ti)),
                V && V.invalidate(),
                isNaN(Or) ||
                  ((Or -= D.getProperty(v, E.p)),
                  (hn -= D.getProperty(pe, E.p)),
                  Sn(v, E, Or),
                  Sn(oe, E, Or - (I || 0)),
                  Sn(pe, E, hn),
                  Sn(de, E, hn - (I || 0))),
                Xt && !re && m.update(),
                c && !re && !hi && ((hi = !0), c(m), (hi = !1)));
            }
          }),
          (m.getVelocity = function () {
            return ((bt() - Qt) / (qt() - Lr)) * 1e3 || 0;
          }),
          (m.endAnimation = function () {
            (Ar(m.callbackAnimation),
              r &&
                (V
                  ? V.progress(1)
                  : r.paused()
                    ? L || Ar(r, m.direction < 0, 1)
                    : Ar(r, r.reversed())));
          }),
          (m.labelToScroll = function (M) {
            return (
              (r &&
                r.labels &&
                (j || m.refresh() || j) + (r.labels[M] / r.duration()) * pt) ||
              0
            );
          }),
          (m.getTrailing = function (M) {
            var F = B.indexOf(m),
              A = m.direction > 0 ? B.slice(0, F).reverse() : B.slice(F + 1);
            return (
              me(M)
                ? A.filter(function (I) {
                    return I.vars.preventOverlaps === M;
                  })
                : A
            ).filter(function (I) {
              return m.direction > 0 ? I.end <= j : I.start >= mt;
            });
          }),
          (m.update = function (M, F, A) {
            if (!(x && !A && !M)) {
              var I = re === !0 ? Ne : m.scroll(),
                Mt = M ? 0 : (I - j) / pt,
                $ = Mt < 0 ? 0 : Mt > 1 ? 1 : Mt || 0,
                yt = m.progress,
                Xt,
                _t,
                at,
                et,
                Ye,
                ut,
                _e,
                We;
              if (
                (F &&
                  ((Qt = Zt),
                  (Zt = x ? bt() : I),
                  y && ((Ri = _i), (_i = r && !L ? r.totalProgress() : $))),
                g &&
                  f &&
                  !Vt &&
                  !mn &&
                  Re &&
                  (!$ && j < I + ((I - Qt) / (qt() - Lr)) * g
                    ? ($ = 1e-4)
                    : $ === 1 &&
                      mt > I + ((I - Qt) / (qt() - Lr)) * g &&
                      ($ = 0.9999)),
                $ !== yt && m.enabled)
              ) {
                if (
                  ((Xt = m.isActive = !!$ && $ < 1),
                  (_t = !!yt && yt < 1),
                  (ut = Xt !== _t),
                  (Ye = ut || !!$ != !!yt),
                  (m.direction = $ > yt ? 1 : -1),
                  (m.progress = $),
                  Ye &&
                    !Vt &&
                    ((at = $ && !yt ? 0 : $ === 1 ? 1 : yt === 1 ? 2 : 3),
                    L &&
                      ((et =
                        (!ut && z[at + 1] !== "none" && z[at + 1]) || z[at]),
                      (We =
                        r &&
                        (et === "complete" || et === "reset" || et in r)))),
                  k &&
                    (ut || We) &&
                    (We || p || !r) &&
                    ($t(k)
                      ? k(m)
                      : m.getTrailing(k).forEach(function (Fi) {
                          return Fi.endAnimation();
                        })),
                  L ||
                    (V && !Vt && !mn
                      ? (V._dp._time - V._start !== V._time &&
                          V.render(V._dp._time - V._start),
                        V.resetTo
                          ? V.resetTo("totalProgress", $, r._tTime / r._tDur)
                          : ((V.vars.totalProgress = $),
                            V.invalidate().restart()))
                      : r && r.totalProgress($, !!(Vt && (zt || M)))),
                  f)
                ) {
                  if ((M && _ && (Ot.style[_ + E.os2] = Cr), !K))
                    Le(Ir(Ee + ti * $));
                  else if (Ye) {
                    if (
                      ((_e = !M && $ > yt && mt + 1 > I && I + 1 >= Ke(O, E)),
                      T)
                    )
                      if (!M && (Xt || _e)) {
                        var Lt = si(f, !0),
                          Ft = I - j;
                        Zo(
                          f,
                          J,
                          Lt.top + (E === Pt ? Ft : 0) + Et,
                          Lt.left + (E === Pt ? 0 : Ft) + Et,
                        );
                      } else Zo(f, Ot);
                    (vr(Xt || _e ? di : Ai),
                      (ei && $ < 1 && Xt) ||
                        Le(Ee + ($ === 1 && !_e ? ti : 0)));
                  }
                }
                (y && !jt.tween && !Vt && !mn && Ie.restart(!0),
                  a &&
                    (ut || (S && $ && ($ < 1 || !os))) &&
                    an(a.targets).forEach(function (Fi) {
                      return Fi.classList[Xt || S ? "add" : "remove"](
                        a.className,
                      );
                    }),
                  s && !L && !M && s(m),
                  Ye && !Vt
                    ? (L &&
                        (We &&
                          (et === "complete"
                            ? r.pause().totalProgress(1)
                            : et === "reset"
                              ? r.restart(!0).pause()
                              : et === "restart"
                                ? r.restart(!0)
                                : r[et]()),
                        s && s(m)),
                      (ut || !os) &&
                        (u && ut && ls(m, u),
                        U[at] && ls(m, U[at]),
                        S && ($ === 1 ? m.kill(!1, 1) : (U[at] = 0)),
                        ut || ((at = $ === 1 ? 1 : 3), U[at] && ls(m, U[at]))),
                      P &&
                        !Xt &&
                        Math.abs(m.getVelocity()) > (Nr(P) ? P : 2500) &&
                        (Ar(m.callbackAnimation),
                        V
                          ? V.progress(1)
                          : Ar(r, et === "reverse" ? 1 : !$, 1)))
                    : L && s && !Vt && s(m));
              }
              if (ir) {
                var Wt = x ? (I / x.duration()) * (x._caScrollDist || 0) : I;
                (cn(Wt + (v._isFlipped ? 1 : 0)), ir(Wt));
              }
              nr && nr((-I / x.duration()) * (x._caScrollDist || 0));
            }
          }),
          (m.enable = function (M, F) {
            m.enabled ||
              ((m.enabled = !0),
              At(O, "resize", Yr),
              H || At(O, "scroll", ar),
              ot && At(o, "refreshInit", ot),
              M !== !1 && ((m.progress = Yt = 0), (Zt = Qt = dt = bt())),
              F !== !1 && m.refresh());
          }),
          (m.getTween = function (M) {
            return M && jt ? jt.tween : V;
          }),
          (m.setPositions = function (M, F, A, I) {
            if (x) {
              var Mt = x.scrollTrigger,
                $ = x.duration(),
                yt = Mt.end - Mt.start;
              ((M = Mt.start + (yt * M) / $), (F = Mt.start + (yt * F) / $));
            }
            (m.refresh(
              !1,
              !1,
              {
                start: Wo(M, A && !!m._startClamp),
                end: Wo(F, A && !!m._endClamp),
              },
              I,
            ),
              m.update());
          }),
          (m.adjustPinSpacing = function (M) {
            if (Tt && M) {
              var F = Tt.indexOf(E.d) + 1;
              ((Tt[F] = parseFloat(Tt[F]) + M + Et),
                (Tt[1] = parseFloat(Tt[1]) + M + Et),
                vr(Tt));
            }
          }),
          (m.disable = function (M, F) {
            if (
              (M !== !1 && m.revert(!0, !0),
              m.enabled &&
                ((m.enabled = m.isActive = !1),
                F || (V && V.pause()),
                (Ne = 0),
                Bt && (Bt.uncache = 1),
                ot && Dt(o, "refreshInit", ot),
                Ie &&
                  (Ie.pause(), jt.tween && jt.tween.kill() && (jt.tween = 0)),
                !H))
            ) {
              for (var A = B.length; A--;)
                if (B[A].scroller === O && B[A] !== m) return;
              (Dt(O, "resize", Yr), H || Dt(O, "scroll", ar));
            }
          }),
          (m.kill = function (M, F) {
            (m.disable(M, F), V && !F && V.kill(), l && delete Rs[l]);
            var A = B.indexOf(m);
            (A >= 0 && B.splice(A, 1),
              A === ie && An > 0 && ie--,
              (A = 0),
              B.forEach(function (I) {
                return I.scroller === m.scroller && (A = 1);
              }),
              A || re || (m.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                M && r.revert({ kill: !1 }),
                F || r.kill()),
              oe &&
                [oe, de, v, pe].forEach(function (I) {
                  return I.parentNode && I.parentNode.removeChild(I);
                }),
              Qr === m && (Qr = 0),
              f &&
                (Bt && (Bt.uncache = 1),
                (A = 0),
                B.forEach(function (I) {
                  return I.pin === f && A++;
                }),
                A || (Bt.spacer = 0)),
              e.onKill && e.onKill(m));
          }),
          B.push(m),
          m.enable(!1, !1),
          ii && ii(m),
          r && r.add && !pt)
        ) {
          var Q = m.update;
          ((m.update = function () {
            ((m.update = Q), W.cache++, j || mt || m.refresh());
          }),
            D.delayedCall(0.01, m.update),
            (pt = 0.01),
            (j = mt = 0));
        } else m.refresh();
        f && gc();
      }),
      (o.register = function (e) {
        return (
          lr ||
            ((D = e || pl()), dl() && window.document && o.enable(), (lr = Fr)),
          lr
        );
      }),
      (o.defaults = function (e) {
        if (e) for (var r in e) xn[r] = e[r];
        return xn;
      }),
      (o.disable = function (e, r) {
        ((Fr = 0),
          B.forEach(function (s) {
            return s[r ? "kill" : "disable"](e);
          }),
          Dt(X, "wheel", ar),
          Dt(nt, "scroll", ar),
          clearInterval(gn),
          Dt(nt, "touchcancel", Ue),
          Dt(J, "touchstart", Ue),
          yn(Dt, nt, "pointerdown,touchstart,mousedown", Ho),
          yn(Dt, nt, "pointerup,touchend,mouseup", Vo),
          Hn.kill(),
          vn(Dt));
        for (var n = 0; n < W.length; n += 3)
          (wn(Dt, W[n], W[n + 1]), wn(Dt, W[n], W[n + 2]));
      }),
      (o.enable = function () {
        if (
          ((X = window),
          (nt = document),
          (ye = nt.documentElement),
          (J = nt.body),
          D &&
            ((an = D.utils.toArray),
            (Ur = D.utils.clamp),
            (Ds = D.core.context || Ue),
            (ss = D.core.suppressOverwrites || Ue),
            (oo = X.history.scrollRestoration || "auto"),
            (zs = X.pageYOffset || 0),
            D.core.globals("ScrollTrigger", o),
            J))
        ) {
          ((Fr = 1),
            (mr = document.createElement("div")),
            (mr.style.height = "100vh"),
            (mr.style.position = "absolute"),
            Sl(),
            uc(),
            xt.register(D),
            (o.isTouch = xt.isTouch),
            (vi =
              xt.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Ms = xt.isTouch === 1),
            At(X, "wheel", ar),
            (so = [X, nt, ye, J]),
            D.matchMedia
              ? ((o.matchMedia = function (u) {
                  var c = D.matchMedia(),
                    p;
                  for (p in u) c.add(p, u[p]);
                  return c;
                }),
                D.addEventListener("matchMediaInit", function () {
                  (bl(), ho());
                }),
                D.addEventListener("matchMediaRevert", function () {
                  return xl();
                }),
                D.addEventListener("matchMedia", function () {
                  (Hi(0, 1), tr("matchMedia"));
                }),
                D.matchMedia().add("(orientation: portrait)", function () {
                  return (us(), us);
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            us(),
            At(nt, "scroll", ar));
          var e = J.hasAttribute("style"),
            r = J.style,
            n = r.borderTopStyle,
            s = D.core.Animation.prototype,
            a,
            l;
          for (
            s.revert ||
              Object.defineProperty(s, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              a = si(J),
              Pt.m = Math.round(a.top + Pt.sc()) || 0,
              se.m = Math.round(a.left + se.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              e || (J.setAttribute("style", ""), J.removeAttribute("style")),
              gn = setInterval($o, 250),
              D.delayedCall(0.5, function () {
                return (mn = 0);
              }),
              At(nt, "touchcancel", Ue),
              At(J, "touchstart", Ue),
              yn(At, nt, "pointerdown,touchstart,mousedown", Ho),
              yn(At, nt, "pointerup,touchend,mouseup", Vo),
              Os = D.utils.checkPrefix("transform"),
              Rn.push(Os),
              lr = qt(),
              Hn = D.delayedCall(0.2, Hi).pause(),
              ur = [
                nt,
                "visibilitychange",
                function () {
                  var u = X.innerWidth,
                    c = X.innerHeight;
                  nt.hidden
                    ? ((Yo = u), (Bo = c))
                    : (Yo !== u || Bo !== c) && Yr();
                },
                nt,
                "DOMContentLoaded",
                Hi,
                X,
                "load",
                Hi,
                X,
                "resize",
                Yr,
              ],
              vn(At),
              B.forEach(function (u) {
                return u.enable(0, 1);
              }),
              l = 0;
            l < W.length;
            l += 3
          )
            (wn(Dt, W[l], W[l + 1]), wn(Dt, W[l], W[l + 2]));
        }
      }),
      (o.config = function (e) {
        "limitCallbacks" in e && (os = !!e.limitCallbacks);
        var r = e.syncInterval;
        ((r && clearInterval(gn)) || ((gn = r) && setInterval($o, r)),
          "ignoreMobileResize" in e &&
            (Ms = o.isTouch === 1 && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (vn(Dt) || vn(At, e.autoRefreshEvents || "none"),
            (cl = (e.autoRefreshEvents + "").indexOf("resize") === -1)));
      }),
      (o.scrollerProxy = function (e, r) {
        var n = ae(e),
          s = W.indexOf(n),
          a = Qi(n);
        (~s && W.splice(s, a ? 6 : 2),
          r && (a ? je.unshift(X, r, J, r, ye, r) : je.unshift(n, r)));
      }),
      (o.clearMatchMedia = function (e) {
        B.forEach(function (r) {
          return r._ctx && r._ctx.query === e && r._ctx.kill(!0, !0);
        });
      }),
      (o.isInViewport = function (e, r, n) {
        var s = (me(e) ? ae(e) : e).getBoundingClientRect(),
          a = s[n ? Gi : Ki] * r || 0;
        return n
          ? s.right - a > 0 && s.left + a < X.innerWidth
          : s.bottom - a > 0 && s.top + a < X.innerHeight;
      }),
      (o.positionInViewport = function (e, r, n) {
        me(e) && (e = ae(e));
        var s = e.getBoundingClientRect(),
          a = s[n ? Gi : Ki],
          l =
            r == null
              ? a / 2
              : r in qn
                ? qn[r] * a
                : ~r.indexOf("%")
                  ? (parseFloat(r) * a) / 100
                  : parseFloat(r) || 0;
        return n ? (s.left + l) / X.innerWidth : (s.top + l) / X.innerHeight;
      }),
      (o.killAll = function (e) {
        if (
          (B.slice(0).forEach(function (n) {
            return n.vars.id !== "ScrollSmoother" && n.kill();
          }),
          e !== !0)
        ) {
          var r = Ji.killAll || [];
          ((Ji = {}),
            r.forEach(function (n) {
              return n();
            }));
        }
      }),
      o
    );
  })();
Y.version = "3.14.2";
Y.saveStyles = function (o) {
  return o
    ? an(o).forEach(function (t) {
        if (t && t.style) {
          var i = ge.indexOf(t);
          (i >= 0 && ge.splice(i, 5),
            ge.push(
              t,
              t.style.cssText,
              t.getBBox && t.getAttribute("transform"),
              D.core.getCache(t),
              Ds(),
            ));
        }
      })
    : ge;
};
Y.revert = function (o, t) {
  return ho(!o, t);
};
Y.create = function (o, t) {
  return new Y(o, t);
};
Y.refresh = function (o) {
  return o ? Yr(!0) : (lr || Y.register()) && Hi(!0);
};
Y.update = function (o) {
  return ++W.cache && li(o === !0 ? 2 : 0);
};
Y.clearScrollMemory = Tl;
Y.maxScroll = function (o, t) {
  return Ke(o, t ? se : Pt);
};
Y.getScrollFunc = function (o, t) {
  return Mi(ae(o), t ? se : Pt);
};
Y.getById = function (o) {
  return Rs[o];
};
Y.getAll = function () {
  return B.filter(function (o) {
    return o.vars.id !== "ScrollSmoother";
  });
};
Y.isScrolling = function () {
  return !!Re;
};
Y.snapDirectional = fo;
Y.addEventListener = function (o, t) {
  var i = Ji[o] || (Ji[o] = []);
  ~i.indexOf(t) || i.push(t);
};
Y.removeEventListener = function (o, t) {
  var i = Ji[o],
    e = i && i.indexOf(t);
  e >= 0 && i.splice(e, 1);
};
Y.batch = function (o, t) {
  var i = [],
    e = {},
    r = t.interval || 0.016,
    n = t.batchMax || 1e9,
    s = function (u, c) {
      var p = [],
        h = [],
        f = D.delayedCall(r, function () {
          (c(p, h), (p = []), (h = []));
        }).pause();
      return function (_) {
        (p.length || f.restart(!0),
          p.push(_.trigger),
          h.push(_),
          n <= p.length && f.progress(1));
      };
    },
    a;
  for (a in t)
    e[a] =
      a.substr(0, 2) === "on" && $t(t[a]) && a !== "onRefreshInit"
        ? s(a, t[a])
        : t[a];
  return (
    $t(n) &&
      ((n = n()),
      At(Y, "refresh", function () {
        return (n = t.batchMax());
      })),
    an(o).forEach(function (l) {
      var u = {};
      for (a in e) u[a] = e[a];
      ((u.trigger = l), i.push(Y.create(u)));
    }),
    i
  );
};
var Jo = function (t, i, e, r) {
    return (
      i > r ? t(r) : i < 0 && t(0),
      e > r ? (r - i) / (e - i) : e < 0 ? i / (i - e) : 1
    );
  },
  fs = function o(t, i) {
    (i === !0
      ? t.style.removeProperty("touch-action")
      : (t.style.touchAction =
          i === !0
            ? "auto"
            : i
              ? "pan-" + i + (xt.isTouch ? " pinch-zoom" : "")
              : "none"),
      t === ye && o(J, i));
  },
  kn = { auto: 1, scroll: 1 },
  xc = function (t) {
    var i = t.event,
      e = t.target,
      r = t.axis,
      n = (i.changedTouches ? i.changedTouches[0] : i).target,
      s = n._gsap || D.core.getCache(n),
      a = qt(),
      l;
    if (!s._isScrollT || a - s._isScrollT > 2e3) {
      for (
        ;
        n &&
        n !== J &&
        ((n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth) ||
          !(kn[(l = Me(n)).overflowY] || kn[l.overflowX]));
      )
        n = n.parentNode;
      ((s._isScroll =
        n &&
        n !== e &&
        !Qi(n) &&
        (kn[(l = Me(n)).overflowY] || kn[l.overflowX])),
        (s._isScrollT = a));
    }
    (s._isScroll || r === "x") && (i.stopPropagation(), (i._gsapAllow = !0));
  },
  Cl = function (t, i, e, r) {
    return xt.create({
      target: t,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: i,
      onWheel: (r = r && xc),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return e && At(nt, xt.eventTypes[0], ea, !1, !0);
      },
      onDisable: function () {
        return Dt(nt, xt.eventTypes[0], ea, !0);
      },
    });
  },
  bc = /(input|label|select|textarea)/i,
  ta,
  ea = function (t) {
    var i = bc.test(t.target.tagName);
    (i || ta) && ((t._gsapAllow = !0), (ta = i));
  },
  Tc = function (t) {
    (Xi(t) || (t = {}),
      (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
      t.type || (t.type = "wheel,touch"),
      (t.debounce = !!t.debounce),
      (t.id = t.id || "normalizer"));
    var i = t,
      e = i.normalizeScrollX,
      r = i.momentum,
      n = i.allowNestedScroll,
      s = i.onRelease,
      a,
      l,
      u = ae(t.target) || ye,
      c = D.core.globals().ScrollSmoother,
      p = c && c.get(),
      h =
        vi &&
        ((t.content && ae(t.content)) ||
          (p && t.content !== !1 && !p.smooth() && p.content())),
      f = Mi(u, Pt),
      _ = Mi(u, se),
      d = 1,
      g =
        (xt.isTouch && X.visualViewport
          ? X.visualViewport.scale * X.visualViewport.width
          : X.outerWidth) / X.innerWidth,
      w = 0,
      b = $t(r)
        ? function () {
            return r(a);
          }
        : function () {
            return r || 2.8;
          },
      S,
      y,
      T = Cl(u, t.type, !0, n),
      C = function () {
        return (y = !1);
      },
      x = Ue,
      P = Ue,
      k = function () {
        ((l = Ke(u, Pt)),
          (P = Ur(vi ? 1 : 0, l)),
          e && (x = Ur(0, Ke(u, se))),
          (S = ji));
      },
      E = function () {
        ((h._gsap.y = Ir(parseFloat(h._gsap.y) + f.offset) + "px"),
          (h.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(h._gsap.y) +
            ", 0, 1)"),
          (f.offset = f.cacheID = 0));
      },
      L = function () {
        if (y) {
          requestAnimationFrame(C);
          var Z = Ir(a.deltaY / 2),
            st = P(f.v - Z);
          if (h && st !== f.v + f.offset) {
            f.offset = st - f.v;
            var m = Ir((parseFloat(h && h._gsap.y) || 0) - f.offset);
            ((h.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              m +
              ", 0, 1)"),
              (h._gsap.y = m + "px"),
              (f.cacheID = W.cache),
              li());
          }
          return !0;
        }
        (f.offset && E(), (y = !0));
      },
      O,
      q,
      H,
      K,
      U = function () {
        (k(),
          O.isActive() &&
            O.vars.scrollY > l &&
            (f() > l ? O.progress(1) && f(l) : O.resetTo("scrollY", l)));
      };
    return (
      h && D.set(h, { y: "+=0" }),
      (t.ignoreCheck = function (z) {
        return (
          (vi && z.type === "touchmove" && L()) ||
          (d > 1.05 && z.type !== "touchstart") ||
          a.isGesturing ||
          (z.touches && z.touches.length > 1)
        );
      }),
      (t.onPress = function () {
        y = !1;
        var z = d;
        ((d = Ir(((X.visualViewport && X.visualViewport.scale) || 1) / g)),
          O.pause(),
          z !== d && fs(u, d > 1.01 ? !0 : e ? !1 : "x"),
          (q = _()),
          (H = f()),
          k(),
          (S = ji));
      }),
      (t.onRelease = t.onGestureStart =
        function (z, Z) {
          if ((f.offset && E(), !Z)) K.restart(!0);
          else {
            W.cache++;
            var st = b(),
              m,
              ot;
            (e &&
              ((m = _()),
              (ot = m + (st * 0.05 * -z.velocityX) / 0.227),
              (st *= Jo(_, m, ot, Ke(u, se))),
              (O.vars.scrollX = x(ot))),
              (m = f()),
              (ot = m + (st * 0.05 * -z.velocityY) / 0.227),
              (st *= Jo(f, m, ot, Ke(u, Pt))),
              (O.vars.scrollY = P(ot)),
              O.invalidate().duration(st).play(0.01),
              ((vi && O.vars.scrollY >= l) || m >= l - 1) &&
                D.to({}, { onUpdate: U, duration: st }));
          }
          s && s(z);
        }),
      (t.onWheel = function () {
        (O._ts && O.pause(), qt() - w > 1e3 && ((S = 0), (w = qt())));
      }),
      (t.onChange = function (z, Z, st, m, ot) {
        if (
          (ji !== S && k(),
          Z && e && _(x(m[2] === Z ? q + (z.startX - z.x) : _() + Z - m[1])),
          st)
        ) {
          f.offset && E();
          var Kt = ot[2] === st,
            ze = Kt ? H + z.startY - z.y : f() + st - ot[1],
            dt = P(ze);
          (Kt && ze !== dt && (H += dt - ze), f(dt));
        }
        (st || Z) && li();
      }),
      (t.onEnable = function () {
        (fs(u, e ? !1 : "x"),
          Y.addEventListener("refresh", U),
          At(X, "resize", U),
          f.smooth &&
            ((f.target.style.scrollBehavior = "auto"),
            (f.smooth = _.smooth = !1)),
          T.enable());
      }),
      (t.onDisable = function () {
        (fs(u, !0),
          Dt(X, "resize", U),
          Y.removeEventListener("refresh", U),
          T.kill());
      }),
      (t.lockAxis = t.lockAxis !== !1),
      (a = new xt(t)),
      (a.iOS = vi),
      vi && !f() && f(1),
      vi && D.ticker.add(Ue),
      (K = a._dc),
      (O = D.to(a, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: e ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: kl(f, f(), function () {
            return O.pause();
          }),
        },
        onUpdate: li,
        onComplete: K.vars.onComplete,
      })),
      a
    );
  };
Y.sort = function (o) {
  if ($t(o)) return B.sort(o);
  var t = X.pageYOffset || 0;
  return (
    Y.getAll().forEach(function (i) {
      return (i._sortY = i.trigger
        ? t + i.trigger.getBoundingClientRect().top
        : i.start + X.innerHeight);
    }),
    B.sort(
      o ||
        function (i, e) {
          return (
            (i.vars.refreshPriority || 0) * -1e6 +
            (i.vars.containerAnimation ? 1e6 : i._sortY) -
            ((e.vars.containerAnimation ? 1e6 : e._sortY) +
              (e.vars.refreshPriority || 0) * -1e6)
          );
        },
    )
  );
};
Y.observe = function (o) {
  return new xt(o);
};
Y.normalizeScroll = function (o) {
  if (typeof o > "u") return ee;
  if (o === !0 && ee) return ee.enable();
  if (o === !1) {
    (ee && ee.kill(), (ee = o));
    return;
  }
  var t = o instanceof xt ? o : Tc(o);
  return (
    ee && ee.target === t.target && ee.kill(),
    Qi(t.target) && (ee = t),
    t
  );
};
Y.core = {
  _getVelocityProp: Ps,
  _inputObserver: Cl,
  _scrollers: W,
  _proxies: je,
  bridge: {
    ss: function () {
      (Re || tr("scrollStart"), (Re = qt()));
    },
    ref: function () {
      return Vt;
    },
  },
};
pl() && D.registerPlugin(Y);
document.addEventListener("astro:page-load", () => {
  tt.registerPlugin(Y);
  const o = () => {
    new nc({
      autoRaf: !0,
      duration: 1.5,
      easing: (c) => Math.min(1, 1.001 - Math.pow(2, -10 * c)),
      smoothWheel: !0,
    });
  };
  if (!["/", "/404"].includes(window.location.pathname)) {
    o();
    const c = document.querySelector(".js-scroll-text"),
      p = document.querySelector(".js-scroll-text-clone"),
      h = tt.timeline();
    (tt.set(c, { y: 0 }),
      tt.set(p, { y: "-100%" }),
      h.to(c, { y: "100%", duration: 2, repeat: -1, ease: "power2.inOut " }).to(
        p,
        {
          y: 0,
          duration: 2,
          repeat: -1,
          ease: "power2.inOut",
          onComplete: () => {
            (tt.set(c, { y: 0 }), tt.set(p, { y: "-100%" }));
          },
        },
        "<",
      ),
      tt.matchMedia().add("(min-width:1024px)", () => {
        const d = document.querySelector(".footer__title .text-wrapper");
        if (!d) return;
        const g = d.textContent.split("");
        ((d.textContent = ""),
          g.forEach((w) => {
            const b = document.createElement("span");
            ((b.textContent = w), d.appendChild(b));
          }),
          tt.set(d.querySelectorAll("span"), {
            y: "100%",
            display: "inline-block",
            opacity: 0,
          }),
          tt.to(d.querySelectorAll("span"), {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: d,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }));
      }));
  }
  function i() {
    const c = document.querySelectorAll(".ink-anim"),
      p = document.querySelectorAll(".ink-anim--07");
    if (!c.length) return;
    const h = document.getElementById("inkDisp"),
      f = document.getElementById("inkBlur");
    (tt.set(c, { opacity: 0 }),
      h?.setAttribute("scale", "70"),
      f?.setAttribute("stdDeviation", "10"),
      c.forEach((g) => {
        g.style.filter = "url(#inkFilter)";
      }),
      tt
        .timeline()
        .to(c, { opacity: 1, duration: 0.2 })
        .to(p, { opacity: 0.6, duration: 0.2 }, ">"));
    const d = { scale: 70, blur: 10 };
    tt.to(d, {
      scale: 0,
      blur: 0,
      duration: 1.8,
      ease: "power3.out",
      onUpdate() {
        (h?.setAttribute("scale", d.scale),
          f?.setAttribute("stdDeviation", d.blur));
      },
      onComplete() {
        c.forEach((g) => (g.style.filter = "none"));
      },
    });
  }
  i();
  const e = document.querySelector(".pointer"),
    r = tt.matchMedia();
  let n = 0,
    s = 0,
    a = 0,
    l = 0;
  window.addEventListener("mousemove", (c) => {
    ((n = c.clientX), (s = c.clientY));
  });
  function u() {
    if (!e) return;
    ((a += (n - a) * 0.1),
      (l += (s - l) * 0.1),
      (e.style.transform = `translate(${a}px, ${l}px)`),
      requestAnimationFrame(u));
  }
  r.add("(min-width: 1024px)", () => {
    (e && tt.set(e, { display: "block" }), e && u());
  });
});
let Zi = null,
  Fs = 0,
  Is = null,
  Xe,
  Ns,
  ai,
  po,
  Ys,
  Bs,
  El = 0.07,
  Pl = 40;
function Ol() {
  ((Xe = document.getElementById("canvas")),
    Xe &&
      ((Ns = Xe.getContext("2d")),
      (ai = document.createElement("canvas")),
      (po = ai.getContext("2d")),
      (El = window.innerWidth >= 1024 ? 0.1 : 0.07),
      (Pl = window.innerWidth >= 1024 ? 10 : 40),
      Ml(),
      window.addEventListener("resize", Dl),
      (Zi = requestAnimationFrame(_o))));
}
function Sc() {
  (cancelAnimationFrame(Zi),
    (Zi = null),
    (Fs = 0),
    window.removeEventListener("resize", Dl),
    clearTimeout(Is));
}
function Ml() {
  ((Xe.width = window.innerWidth),
    (Xe.height = window.innerHeight),
    (ai.width = Xe.width),
    (ai.height = Xe.height),
    (Ys = po.createImageData(ai.width, ai.height)),
    (Bs = Ys.data));
}
function Dl() {
  (clearTimeout(Is),
    (Is = setTimeout(() => {
      (cancelAnimationFrame(Zi),
        (Zi = null),
        Ml(),
        (Zi = requestAnimationFrame(_o)));
    }, 150)));
}
function _o(o) {
  if (((Zi = requestAnimationFrame(_o)), o - Fs < Pl)) return;
  Fs = o;
  const t = Bs.length / 4,
    i = Math.floor(t * 0.02);
  for (let e = 0; e < i; e++) {
    const r = Math.floor(Math.random() * t) * 4;
    Bs[r + 3] = Math.random() * 255 * El;
  }
  (po.putImageData(Ys, 0, 0),
    Ns.clearRect(0, 0, Xe.width, Xe.height),
    Ns.drawImage(ai, 0, 0, ai.width, ai.height, 0, 0, Xe.width, Xe.height));
}
document.addEventListener("astro:before-swap", Sc);
document.addEventListener("astro:after-swap", Ol);
Ol();
document.addEventListener("astro:page-load", () => {
  if (window.location.pathname == "/") {
    let i = function () {
      const e = document.querySelector(".js-time-hour"),
        r = document.querySelector(".js-time-minute");
      if (!e || !r) return;
      const n = new Date(),
        s = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Douala",
          hour: "numeric",
          minute: "numeric",
          day: "numeric",
          month: "numeric",
          weekday: "short",
        }).formatToParts(n),
        a = (l) => s.find((u) => u.type === l)?.value;
      ((e.textContent = a("hour")), (r.textContent = a("minute")));
    };
    var o = i;
    const t = document.querySelector(".js-textloop");
    if (t) {
      const e = t.querySelectorAll("div");
      tt.to(e, { x: "-100%", duration: 80, repeat: -1, ease: "linear" });
    }
    (i(), setInterval(i, 1e3));
  }
});
document.addEventListener("astro:page-load", () => {
  if (window.location.pathname == "/about") {
    tt.registerPlugin(Y);
    const o = tt.matchMedia(),
      t = document.querySelector(".p-about-info"),
      i = document.querySelector(".p-about-info__img img"),
      e = document.querySelector(".p-about-approach"),
      r = document.querySelector(".p-about-approach__bg img");
    o.add("(min-width: 1024px)", () => {
      (tt.set(i, { y: 0 }),
        tt.set(r, { y: 0 }),
        tt.to(i, {
          y: "-10%",
          scrollTrigger: {
            trigger: t,
            start: "top 100%",
            end: "bottom 0%",
            scrub: !0,
          },
        }),
        tt.to(r, {
          y: "-10%",
          scrollTrigger: {
            trigger: e,
            start: "top 100%",
            end: "bottom 0%",
            scrub: !0,
          },
        }));
    });
  }
});
document.addEventListener("astro:page-load", () => {
  if (window.location.pathname == "/service") {
    let t = function (e) {
      const r = document.getElementById("inkDisp"),
        n = document.getElementById("inkBlur");
      (r?.setAttribute("scale", "70"),
        n?.setAttribute("stdDeviation", "10"),
        (e.style.filter = "url(#inkFilter)"),
        tt.timeline().to(e, { opacity: 0.7, duration: 0.2 }));
      const a = { scale: 70, blur: 10 };
      tt.to(a, {
        scale: 0,
        blur: 0,
        duration: 1.8,
        ease: "power3.out",
        onUpdate() {
          (r?.setAttribute("scale", a.scale),
            n?.setAttribute("stdDeviation", a.blur));
        },
        onComplete() {
          e.style.filter = "none";
        },
      });
    };
    var o = t;
    tt.registerPlugin(Y);
    const i = document.querySelectorAll(".p-service-list__item-titleja");
    (tt.set(i, { opacity: 0 }),
      i.forEach((e) => {
        Y.create({
          trigger: e,
          start: "top 80%",
          once: !0,
          onEnter() {
            t(e);
          },
        });
      }));
  }
});
document.addEventListener("astro:page-load", () => {
  window.location.pathname == "/work" &&
    (tt.registerPlugin(Y),
    tt.matchMedia().add("(min-width: 1024px)", () => {
      const t = document.querySelectorAll(".p-work-list__item"),
        i = document.querySelectorAll(".p-work-list__img img");
      (tt.set(i, { y: 0 }),
        t.forEach((e, r) => {
          tt.to(i[r], {
            y: "-10%",
            scrollTrigger: {
              trigger: e,
              start: "top 80%",
              end: "bottom 20%",
              scrub: !0,
            },
          });
        }));
    }));
});
