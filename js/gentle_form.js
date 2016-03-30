/*!
 * GentleForm - v1.0.1
 * Accessible and user-friendly HTML5 form validation library.
 * https://github.com/Zhouzi/GentleForm
 *
 * @author Gabin Aureche
 * @license MIT
 */
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? exports.GentleForm = e() : t.GentleForm = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            o = n(1),
            u = r(o),
            s = n(15),
            f = (r(s), {}),
            l = 0,
            c = function() {
                function t(e, n) {
                    var r = this;
                    a(this, t);
                    var i = this.$form = u["default"](e);
                    this.onSubmit = "function" == typeof n ? n : function() {}, i.on("change", function(t) {
                        var e = u["default"](t.target);
                        e.setState("changed", !0, i), r.validate(e)
                    }).on("input", function(t) {
                        var e = u["default"](t.target);
                        (e.hasState("changed") || e.hasState("submitted")) && r.validate(e)
                    }).on("submit", function(t) {
                        i.setState("submitted", !0, i);
                        var e = i.validity(),
                            n = e.children,
                            a = {};
                        n.forEach(function(t) {
                            var e = u["default"](t.element),
                                n = e.attr("type"),
                                o = e.attr("name");
                            if (!(!o || "fieldset" == e.prop("tagName") || e.prop("disabled") || "reset" == n || "submit" == n || "button" == n || "file" == n || o in a)) {
                                e.setState("submitted", !0, i), r.validate(e);
                                var s = null;
                                "radio" == n ? u["default"]('[name="' + o + ']"', i).each(function(t) {
                                    var e = u["default"](t);
                                    e.checked() && (s = e.val())
                                }) : s = "checkbox" == n ? e.checked() : e.val(), a[o] = {
                                    validity: t.validity,
                                    value: s
                                }
                            }
                        }), r.validate(i), r.onSubmit(t, e.valid, a)
                    }), u["default"]("[data-include]", i).each(function(t) {
                        var e = u["default"](t),
                            n = e.attr("data-include");
                        "string" != typeof f[n] && (f[n] = u["default"]("#" + n).text()), e.html(e.html() + f[n])
                    }), u["default"]("[data-errors-when]", i).hide(), this.refreshAria()
                }
                return i(t, [{
                    key: "validate",
                    value: function(t) {
                        var e = this;
                        return t.each(function(t) {
                            var n = u["default"](t),
                                r = n.validity();
                            r.valid ? n.setState("valid", !0, e.$form).setState("invalid", !1, e.$form) : n.setState("invalid", !0, e.$form).setState("valid", !1, e.$form);
                            var a = u["default"]('[data-errors-for="' + n.attr("name") + '"]', e.$form),
                                i = void 0;
                            a.each(function(t) {
                                for (var e in r) r.hasOwnProperty(e) && (i = u["default"]('[data-errors-when="' + e + '"]', t), r[e] ? i.show() : i.hide())
                            })
                        }), this
                    }
                }, {
                    key: "refreshAria",
                    value: function() {
                        var t = this,
                            e = void 0;
                        return u["default"]("[required], [aria-required]", this.$form).each(function(t) {
                            e = u["default"](t), e.prop("required") ? e.aria("required", !0) : e.removeAttr("aria-required")
                        }), u["default"]("[data-errors-for]", this.$form).each(function(n) {
                            e = u["default"](n), e.attr("role", "alert").aria("live", "assertive").aria("atomic", !0);
                            var r = e.attr("data-errors-for"),
                                a = u["default"]('[name="' + r + '"]', t.$form);
                            if (a.length()) {
                                var i = e.attr("id");
                                "string" == typeof i && i.length || (i = "gentle_" + l++, e.attr("id", i));
                                var o = a.aria("describedby");
                                "string" != typeof o && (o = ""), o = o.split(" "), o.indexOf(i) < 0 && o.push(i), a.aria("describedby", o.join(" ").trim())
                            }
                        }), this
                    }
                }]), t
            }();
        e["default"] = c, t.exports = e["default"]
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(2),
            i = r(a),
            o = n(3),
            u = r(o);
        n(4), n(5), n(6), n(7), n(8), n(9), n(12), n(13), n(14), u["default"].fn.setState = function(t, e, n) {
            "invalid" == t && e === !0 || "valid" == t && e === !1 ? this.aria("invalid", !0) : ("invalid" == t && e === !1 || "valid" == t && e === !0) && this.aria("invalid", !1);
            var r = "is-" + t,
                a = new i["default"]('[data-states-for="' + this.attr("name") + '"]', n).add(this.get());
            return e ? a.addClass(r) : a.removeClass(r), this
        }, u["default"].fn.hasState = function(t) {
            return this.hasClass("is-" + t)
        }, u["default"].fn.show = function() {
            return this.aria("hidden", !1).removeClass("is-hidden")
        }, u["default"].fn.hide = function() {
            return this.aria("hidden", !0).addClass("is-hidden")
        }, e["default"] = i["default"], t.exports = e["default"]
    }, function(t, e, n) {
        var r, a;
        r = [n(3)], a = function(t) {
            return function(e, n) {
                return new t(e, n)
            }
        }.apply(e, r), !(void 0 !== a && (t.exports = a))
    }, function(t, e, n) {
        var r, a;
        r = [], a = function() {
            function t(e) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? document : arguments[1];
                n instanceof t && (n = n.get(0)), e instanceof t ? this._elements = e.get() : "string" == typeof e ? this._elements = [].slice.call(n.querySelectorAll(e)) : e instanceof Array ? this._elements = e : this._elements = [e]
            }
            return t.fn = t.prototype = {
                constructor: t,
                get: function(t) {
                    return void 0 == t ? this._elements : this._elements[t]
                },
                length: function() {
                    return this._elements.length
                },
                each: function(t) {
                    return this._elements.forEach(t), this
                },
                add: function(e, n) {
                    return this._elements = this._elements.concat(new t(e, n).get()), this
                }
            }, t
        }.apply(e, r), !(void 0 !== a && (t.exports = a))
    }, function(t, e, n) {
        var r, a;
        r = [n(3)], a = function(t) {
            return t.fn.on = function(t, e) {
                var n = t.replace(/\s/g, "").split(",");
                return this.each(function(t) {
                    n.forEach(function(n) {
                        t.addEventListener(n, e, ["focus", "blur"].indexOf(n) > -1)
                    })
                })
            }, t
        }.apply(e, r), !(void 0 !== a && (t.exports = a))
    }, function(t, e, n) {
        var r, a;
        r = [n(3)], a = function(t) {
            return t.fn.addClass = function(t) {
                return this.each(function(e) {
                    e.classList.add(t)
                }), this
            }, t.fn.removeClass = function(t) {
                return this.each(function(e) {
                    e.classList.remove(t)
                }), this
            }, t.fn.hasClass = function(t) {
                return this.get(0).classList.contains(t)
            }, t
        }.apply(e, r), !(void 0 !== a && (t.exports = a))
    }, function(t, e, n) {
        var r, a;
        r = [n(3)], a = function(t) {
            return t.fn.html = function(t) {
                return arguments.length > 0 ? this.each(function(e) {
                    e.innerHTML = t
                }) : this.get(0).innerHTML
            }, t
        }.apply(e, r), !(void 0 !== a && (t.exports = a))
    }, function(t, e, n) {
        var r, a;
        r = [n(3)], a = function(t) {
            return t.fn.hasAttr = function(t) {
                return this.get(0).hasAttribute(t)
            }, t.fn.attr = function(t, e) {
                return arguments.length > 1 ? this.each(function(n) {
                    n.setAttribute(t, e)
                }) : this.get(0).getAttribute(t)
            }, t.fn.removeAttr = function(t) {
                return this.each(function(e) {
                    e.removeAttribute(t)
                }), this
            }, t
        }.apply(e, r), !(void 0 !== a && (t.exports = a))
    }, function(t, e, n) {
        var r, a;
        r = [n(3)], a = function(t) {
            return t.fn.checked = function(t) {
                return arguments.length > 0 ? this.each(function(e) {
                    e.checked = !!t
                }) : this.get(0).checked
            }, t
        }.apply(e, r), !(void 0 !== a && (t.exports = a))
    }, function(t, e, n) {
        var r, a;
        r = [n(3), n(10), n(11)], a = function(t) {
            return t.fn.validators = [{
                name: "valueMissing",
                attribute: "required",
                isInvalid: function(e) {
                    var n = e.attr("type");
                    if ("checkbox" == n) return !e.checked();
                    if ("radio" != n) return e.val().length <= 0;
                    var r = e.attr("name");
                    if ("string" != typeof r) return !1;
                    for (var a = new t('[type="radio"][name="' + r + '"]').get(), i = 0, o = a.length; o > i; i++)
                        if (new t(a[i]).checked()) return !1;
                    return !0
                }
            }, {
                name: "patternMismatch",
                attribute: "pattern",
                isInvalid: function(t) {
                    return !new RegExp(t.attr("pattern")).test(t.val())
                }
            }, {
                name: "rangeOverflow",
                attribute: "max",
                isInvalid: function(t) {
                    return t.val() > t.attr("max")
                }
            }, {
                name: "rangeUnderflow",
                attribute: "min",
                isInvalid: function(t) {
                    return t.val() < t.attr("min")
                }
            }, {
                name: "tooShort",
                attribute: "minlength",
                isInvalid: function(t) {
                    return t.val().length < t.attr("minlength")
                }
            }, {
                name: "tooLong",
                attribute: "maxlength",
                isInvalid: function(t) {
                    return t.val().length > t.attr("maxlength")
                }
            }, {
                name: "typeMismatch",
                attribute: "type",
                isInvalid: function(t) {
                    var e = t.attr("type");
                    return "email" == e ? !/[^\s]+@[^\s]+/.test(t.val()) : "number" == e ? /[^0-9]/g.test(t.val()) : "url" == e ? !/(http|ftp)s?:\/\//.test(t.val()) : !1
                }
            }, {
                name: "customError"
            }, {
                name: "stepMismatch"
            }], t.fn.checkValidity = function() {
                return this.validity().valid
            }, t.fn.validity = function() {
                var e = this,
                    n = void 0;
                if ("form" == this.prop("tagName")) {
                    var r = function() {
                        var r = e.formChildren();
                        n = {
                            valid: !0,
                            children: []
                        };
                        var a = void 0,
                            i = void 0;
                        return r.forEach(function(e) {
                            if (i = new t(e), ["button", "submit"].indexOf(i.attr("type")) < 0 && "button" != i.tagName) {
                                a = new t(e).validity(), n.children.push({
                                    element: e,
                                    validity: a
                                });
                                for (var r in a) a.hasOwnProperty(r) && (void 0 === n[r] && (n[r] = a[r]), "valid" == r ? a[r] === !1 && (n.valid = !1) : a[r] === !0 && (n[r] = !0))
                            }
                        }), {
                            v: n
                        }
                    }();
                    if ("object" == typeof r) return r.v
                }
                n = this.get(0).validity || {};
                var a = {
                    valid: !0
                };
                return this.validators.forEach(function(t) {
                    var r = !1;
                    a.valid ? void 0 !== n[t.name] ? r = a[t.name] = n[t.name] : "function" == typeof t.isInvalid ? r = a[t.name] = t.isInvalid(e) : a[t.name] = !1 : a[t.name] = !1, r && (a.valid = !1)
                }), a
            }, t
        }.apply(e, r), !(void 0 !== a && (t.exports = a))
    }, function(t, e, n) {
        var r, a;
        r = [n(3)], a = function(t) {
            return t.fn.prop = function(t, e) {
                if (arguments.length > 1) return this.each(function(n) {
                    n[t] = e
                });
                var n = this.get(0)[t];
                return "tagName" == t ? n.toLowerCase() : n
            }, t
        }.apply(e, r), !(void 0 !== a && (t.exports = a))
    }, function(t, e, n) {
        var r, a;
        r = [n(3), n(10)], a = function(t) {
            return t.fn.formChildren = function() {
                if ("form" !== this.prop("tagName")) throw new Error('.formChildren expected element to be a <form> but got "' + this.prop("tagName") + '"');
                for (var t = this.get(0), e = [], n = 0, r = t.length; r > n; n++) e.push(t[n]);
                return e
            }, t
        }.apply(e, r), !(void 0 !== a && (t.exports = a))
    }, function(t, e, n) {
        var r, a;
        r = [n(3)], a = function(t) {
            return t.fn.val = function(e) {
                return arguments.length > 0 ? this.each(function(n) {
                    var r = new t(n),
                        a = r.attr("type");
                    return "checkbox" == a || "radio" == a ? r.checked(!!e) : void(n.value = e)
                }) : this.get(0).value
            }, t
        }.apply(e, r), !(void 0 !== a && (t.exports = a))
    }, function(t, e, n) {
        var r, a;
        r = [n(3), n(7)], a = function(t) {
            return t.fn.aria = function(t, e) {
                return arguments.length > 1 ? this.attr("aria-" + t, e) : this.attr("aria-" + t)
            }, t.fn.removeAria = function(t) {
                return this.removeAttr("aria-" + t)
            }, t
        }.apply(e, r), !(void 0 !== a && (t.exports = a))
    }, function(t, e, n) {
        var r, a;
        r = [n(3)], a = function(t) {
            return t.fn.text = function(t) {
                return arguments.length > 0 ? this.each(function(e) {
                    e.textContent = t
                }) : this.get(0).textContent
            }, t
        }.apply(e, r), !(void 0 !== a && (t.exports = a))
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = {
            isButton: function(t) {
                return "button" == t.prop("tagName") || ["button", "submit"].indexOf(t.attr("type")) > -1
            }
        }, t.exports = e["default"]
    }])
});