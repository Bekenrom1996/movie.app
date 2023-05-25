(this["webpackJsonpminflix-react"] = this["webpackJsonpminflix-react"] || []).push([
    [0], {
        25: function(e, t, c) {},
        70: function(e, t, c) {
            "use strict";
            c.r(t);
            var n = c(1),
                a = c.n(n),
                r = c(16),
                s = c.n(r),
                i = (c(25), c(6)),
                l = c(5),
                o = c(2),
                d = c(12),
                j = (c(47), c(36)),
                u = c(3),
                b = {
                    movies: [],
                    trending: [],
                    tvseries: [],
                    details: [],
                    favourite: [],
                    searchResult: [],
                    error: "",
                    loading: !1
                },
                O = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "GET_MOVIES":
                            return Object(u.a)(Object(u.a)({}, e), {}, {
                                movies: t.payload,
                                loading: !1
                            });
                        case "GET_TRENDING":
                            return Object(u.a)(Object(u.a)({}, e), {}, {
                                trending: t.payload,
                                loading: !1
                            });
                        case "GET_TV_SERIES":
                            return Object(u.a)(Object(u.a)({}, e), {}, {
                                tvseries: t.payload,
                                loading: !1
                            });
                        case "GET_DETAILS":
                            return Object(u.a)(Object(u.a)({}, e), {}, {
                                details: t.payload,
                                loading: !1
                            });
                        case "CLEAR_DETAILS":
                            return Object(u.a)(Object(u.a)({}, e), {}, {
                                details: []
                            });
                        case "GET_FAVOURITE":
                            return Object(u.a)(Object(u.a)({}, e), {}, {
                                favourite: t.payload,
                                loading: !1
                            });
                        case "SEARCH":
                            return Object(u.a)(Object(u.a)({}, e), {}, {
                                searchResult: t.payload,
                                loading: !1
                            });
                        case "CLEAR_SEARCH":
                            return Object(u.a)(Object(u.a)({}, e), {}, {
                                searchResult: []
                            });
                        case "LOADING":
                            return Object(u.a)(Object(u.a)({}, e), {}, {
                                loading: !0
                            });
                        case "DETAILS_ERROR":
                            return Object(u.a)(Object(u.a)({}, e), {}, {
                                details: null,
                                loading: !1
                            });
                        case "MOVIES_ERROR":
                            return Object(u.a)(Object(u.a)({}, e), {}, {
                                movies: null,
                                loading: !1
                            });
                        case "TRENDING_ERROR":
                            return Object(u.a)(Object(u.a)({}, e), {}, {
                                trending: null,
                                loading: !1
                            });
                        case "SERIES_ERROR":
                            return Object(u.a)(Object(u.a)({}, e), {}, {
                                tvseries: null,
                                loading: !1
                            });
                        case "SEARCH_ERROR":
                            return Object(u.a)(Object(u.a)({}, e), {}, {
                                searchResult: null,
                                loading: !1
                            });
                        default:
                            return e
                    }
                },
                h = Object(d.combineReducers)({
                    movies: O
                }),
                m = [j.a],
                f = "object" === typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : d.compose,
                v = Object(d.createStore)(h, f(d.applyMiddleware.apply(void 0, m))),
                p = c(14),
                x = c(15),
                g = c.n(x),
                _ = "6f53f4a81ecef5f6a1f7440bb392e20b",
                N = "https://api.themoviedb.org/3/movie/popular?api_key=".concat(_, "&language=en-US"),
                y = "https://api.themoviedb.org/3/trending/all/day?api_key=".concat(_, "&language=en-US"),
                E = "https://api.themoviedb.org/3/tv/popular?api_key=".concat(_, "&language=en-US"),
                S = "https://api.themoviedb.org/3/search/multi?api_key=".concat(_, "&query="),
                R = function() {
                    return function(e) {
                        e(k()), e(w()), g.a.get(N).then((function(t) {
                            return e({
                                type: "GET_MOVIES",
                                payload: t.data.results
                            })
                        })).catch((function(t) {
                            return e({
                                type: "MOVIES_ERROR"
                            })
                        }))
                    }
                },
                T = function() {
                    return function(e) {
                        e(k()), e(w()), g.a.get(y).then((function(t) {
                            return e({
                                type: "GET_TRENDING",
                                payload: t.data.results
                            })
                        })).catch((function(t) {
                            return e({
                                type: "TRENDING_ERROR"
                            })
                        }))
                    }
                },
                I = function() {
                    return function(e) {
                        e(k()), e(w()), g.a.get(E).then((function(t) {
                            return e({
                                type: "GET_TV_SERIES",
                                payload: t.data.results
                            })
                        })).catch((function(t) {
                            return e({
                                type: "SERIES_ERROR"
                            })
                        }))
                    }
                },
                w = function() {
                    return function(e) {
                        null !== localStorage.getItem("liked_movies") && e({
                            type: "GET_FAVOURITE",
                            payload: JSON.parse(localStorage.getItem("liked_movies"))
                        })
                    }
                },
                k = function() {
                    return {
                        type: "LOADING"
                    }
                },
                C = function(e) {
                    return e.filter((function(e) {
                        return !e.gender
                    }))
                },
                D = c(37),
                A = c.n(D),
                L = c.p + "static/media/default_poster.3f971516.jpg",
                G = c(0),
                V = function(e) {
                    var t = e.data,
                        c = Object(o.b)(),
                        a = Object(o.c)((function(e) {
                            return e.movies
                        })).favourite,
                        r = Object(n.useState)(!1),
                        s = Object(p.a)(r, 2),
                        l = s[0],
                        d = s[1];
                    Object(n.useEffect)((function() {
                        null !== a && a.map((function(e) {
                            e.id === t.id && d(!l)
                        }))
                    }), []);
                    return Object(G.jsxs)("div", {
                        className: "movieCard",
                        children: [Object(G.jsx)(A.a, {
                            icon: "heart",
                            className: "favourite",
                            fill: l ? "#562a5a" : "white",
                            color: "purple",
                            onClick: function() {
                                if (null == localStorage.getItem("liked_movies")) {
                                    var e = [];
                                    e.push(t), localStorage.setItem("liked_movies", JSON.stringify(e))
                                } else {
                                    var n = JSON.parse(localStorage.getItem("liked_movies")),
                                        a = n.filter((function(e) {
                                            return e.id === t.id
                                        }));
                                    console.log(n), Object.keys(a).length >= 1 ? (console.log("dupe"), a.map((function(e) {
                                        console.log(n.indexOf(e)), n.splice(n.indexOf(e), 1), localStorage.setItem("liked_movies", JSON.stringify(n)), c(w())
                                    }))) : (console.log(Object.keys(a).length), n.push(t), localStorage.setItem("liked_movies", JSON.stringify(n)))
                                }
                                d(!l)
                            }
                        }), Object(G.jsx)("div", {
                            className: "movieCard__poster",
                            children: Object(G.jsx)("img", {
                                src: t.poster_path ? "http://image.tmdb.org/t/p/original".concat(t.poster_path) : L,
                                alt: ""
                            })
                        }), Object(G.jsx)(i.b, {
                            to: "/movie/".concat(t.id),
                            className: "movie__Link",
                            children: Object(G.jsxs)("div", {
                                className: "movieCard__details",
                                children: [Object(G.jsx)("p", {
                                    children: t.title ? t.title : t.name
                                }), Object(G.jsx)("p", {
                                    children: t.release_date ? Object(G.jsx)("span", {
                                        children: new Intl.DateTimeFormat("en-GB", {
                                            month: "short",
                                            year: "numeric",
                                            day: "2-digit"
                                        }).format(Date.parse(t.release_date))
                                    }) : Object(G.jsx)("span", {
                                        children: t.first_air_date ? Object(G.jsx)("span", {
                                            children: new Intl.DateTimeFormat("en-GB", {
                                                month: "short",
                                                year: "numeric",
                                                day: "2-digit"
                                            }).format(Date.parse(t.first_air_date))
                                        }) : "Release/Air Date N/A"
                                    })
                                })]
                            })
                        })]
                    })
                },
                M = function() {
                    var e = Object(o.b)(),
                        t = Object(o.c)((function(e) {
                            return e.movies
                        })).movies;
                    return Object(n.useEffect)((function() {
                        e(R())
                    }), [e]), Object(G.jsx)("div", {
                        children: null === t ? Object(G.jsx)("div", {
                            className: "error",
                            children: Object(G.jsx)("p", {
                                children: "Error Fetching List"
                            })
                        }) : Object(G.jsx)("div", {
                            className: "grid",
                            style: {
                                margin: "1rem 0"
                            },
                            children: t.slice(0, 4).map((function(e) {
                                return Object(G.jsx)(V, {
                                    data: e
                                }, e.id)
                            }))
                        })
                    })
                },
                F = function() {
                    var e = Object(o.b)(),
                        t = Object(o.c)((function(e) {
                            return e.movies
                        })).trending;
                    return Object(n.useEffect)((function() {
                        e(T())
                    }), [e]), Object(G.jsx)("div", {
                        children: null === t ? Object(G.jsx)("div", {
                            className: "error",
                            children: Object(G.jsx)("p", {
                                children: "Error Fetching List"
                            })
                        }) : Object(G.jsx)("div", {
                            className: "grid",
                            style: {
                                margin: "1rem 0"
                            },
                            children: t.slice(0, 4).map((function(e) {
                                return Object(G.jsx)(V, {
                                    data: e
                                }, e.id)
                            }))
                        })
                    })
                },
                P = function() {
                    var e = Object(o.b)(),
                        t = Object(o.c)((function(e) {
                            return e.movies
                        })).tvseries;
                    return Object(n.useEffect)((function() {
                        e(I())
                    }), [e]), Object(G.jsx)("div", {
                        children: null === t ? Object(G.jsx)("div", {
                            className: "error",
                            children: Object(G.jsx)("p", {
                                children: "Error Fetching List"
                            })
                        }) : Object(G.jsx)("div", {
                            className: "grid",
                            style: {
                                margin: "1rem 0"
                            },
                            children: t.slice(0, 4).map((function(e) {
                                return Object(G.jsx)(V, {
                                    data: e
                                }, e.id)
                            }))
                        })
                    })
                },
                J = function() {
                    var e = Object(n.useState)(""),
                        t = Object(p.a)(e, 2),
                        c = t[0],
                        a = t[1],
                        r = Object(n.useState)(!1),
                        s = Object(p.a)(r, 2),
                        o = s[0],
                        d = s[1],
                        j = Object(l.f)();
                    return Object(G.jsxs)("div", {
                        children: [Object(G.jsx)("div", {
                            className: "hero",
                            children: Object(G.jsxs)("div", {
                                className: "hero__content",
                                children: [Object(G.jsxs)("div", {
                                    className: "hero__content--text",
                                    children: [Object(G.jsx)("h1", {
                                        children: "Welcome!"
                                    }), Object(G.jsx)("h3", {
                                        children: "Discover and explore recent and trending Movies & TV Shows"
                                    })]
                                }), Object(G.jsx)("form", {
                                    action: "",
                                    className: "hero__content--form",
                                    children: Object(G.jsxs)("div", {
                                        className: "form__control",
                                        children: [Object(G.jsx)("input", {
                                            type: "text",
                                            name: "search",
                                            id: "",
                                            placeholder: "Search...",
                                            onChange: function(e) {
                                                a(e.target.value)
                                            },
                                            className: "form__element form__text"
                                        }), Object(G.jsx)("button", {
                                            type: "submit",
                                            className: "form__element form__btn",
                                            onClick: function(e) {
                                                e.preventDefault(), "" !== c ? j.push({
                                                    pathname: "/search",
                                                    state: c
                                                }) : d(!0)
                                            },
                                            children: "Show Me!"
                                        })]
                                    })
                                }), Object(G.jsx)("p", {
                                    children: o ? "Please fill the Search field" : null
                                })]
                            })
                        }), Object(G.jsxs)("div", {
                            className: "container",
                            children: [Object(G.jsxs)("div", {
                                className: "category",
                                children: [Object(G.jsxs)("div", {
                                    className: "category__head",
                                    children: [Object(G.jsx)("h2", {
                                        className: "category__title trending",
                                        children: "What's Trending"
                                    }), Object(G.jsx)(i.b, {
                                        to: "/trending",
                                        className: "category__link",
                                        children: "View all"
                                    })]
                                }), Object(G.jsx)(F, {})]
                            }), Object(G.jsxs)("div", {
                                className: "category",
                                children: [Object(G.jsxs)("div", {
                                    className: "category__head",
                                    children: [Object(G.jsx)("h2", {
                                        className: "category__title movies",
                                        children: "Popular Movies"
                                    }), Object(G.jsx)(i.b, {
                                        to: "/movies",
                                        className: "category__link",
                                        children: "View all"
                                    })]
                                }), Object(G.jsx)(M, {})]
                            }), Object(G.jsxs)("div", {
                                className: "category",
                                children: [Object(G.jsxs)("div", {
                                    className: "category__head",
                                    children: [Object(G.jsx)("h2", {
                                        className: "category__title series",
                                        children: "Popular Series"
                                    }), Object(G.jsx)(i.b, {
                                        to: "/tvseries",
                                        className: "category__link",
                                        children: "View all"
                                    })]
                                }), Object(G.jsx)(P, {})]
                            })]
                        })]
                    })
                },
                U = function() {
                    var e = Object(o.b)(),
                        t = Object(o.c)((function(e) {
                            return e.movies
                        })).favourite;
                    return Object(n.useEffect)((function() {
                        e(w())
                    }), [e]), Object(G.jsx)("div", {
                        className: "container",
                        children: null === t ? Object(G.jsx)("div", {
                            children: "You dont have any moie/Show saved"
                        }) : Object(G.jsxs)("div", {
                            className: "wrapper",
                            children: [Object(G.jsx)("div", {
                                className: "category__head",
                                children: Object(G.jsx)("h2", {
                                    className: "category__title movies",
                                    children: "Favourites"
                                })
                            }), Object(G.jsx)("div", {
                                className: "grid",
                                style: {
                                    margin: "1rem 0"
                                },
                                children: t.map((function(e) {
                                    return Object(G.jsx)(V, {
                                        data: e
                                    }, e.id)
                                }))
                            })]
                        })
                    })
                },
                H = function() {
                    var e = Object(o.b)(),
                        t = Object(o.c)((function(e) {
                            return e.movies
                        })).trending;
                    return console.log(t), Object(n.useEffect)((function() {
                        e(T())
                    }), [e]), Object(G.jsx)("div", {
                        className: "container",
                        children: Object(G.jsx)("div", {
                            className: "wrapper",
                            children: Object(G.jsx)("div", {
                                className: "grid",
                                style: {
                                    margin: "1rem 0"
                                },
                                children: t.map((function(e) {
                                    return Object(G.jsx)(V, {
                                        data: e
                                    }, e.id)
                                }))
                            })
                        })
                    })
                },
                W = function() {
                    var e = Object(o.b)(),
                        t = Object(o.c)((function(e) {
                            return e.movies
                        })).tvseries;
                    return console.log(t), Object(n.useEffect)((function() {
                        e(I())
                    }), [e]), Object(G.jsx)("div", {
                        className: "container",
                        children: Object(G.jsx)("div", {
                            className: "wrapper",
                            children: Object(G.jsx)("div", {
                                className: "grid",
                                style: {
                                    margin: "1rem 0"
                                },
                                children: t.map((function(e) {
                                    return Object(G.jsx)(V, {
                                        data: e
                                    }, e.id)
                                }))
                            })
                        })
                    })
                },
                B = function() {
                    var e = Object(o.b)(),
                        t = Object(o.c)((function(e) {
                            return e.movies
                        })).movies;
                    return Object(n.useEffect)((function() {
                        e(R())
                    }), []), Object(G.jsx)("div", {
                        className: "container",
                        children: Object(G.jsx)("div", {
                            className: "wrapper",
                            children: Object(G.jsx)("div", {
                                className: "grid",
                                style: {
                                    margin: "1rem 0"
                                },
                                children: t.map((function(e) {
                                    return Object(G.jsx)(V, {
                                        data: e
                                    }, e.id)
                                }))
                            })
                        })
                    })
                },
                X = c(24),
                q = c(38),
                z = c.n(q),
                Y = function() {
                    var e = Object(o.b)(),
                        t = Object(l.h)().id,
                        c = Object(o.c)((function(e) {
                            return e.movies
                        })),
                        a = c.details,
                        r = c.loading;
                    c.error;
                    return Object(n.useEffect)((function() {
                        return e(function(e) {
                                return function(t) {
                                    t(k()), t(w()), g.a.get("".concat("https://api.themoviedb.org/3/movie/").concat(e, "?api_key=").concat(_)).then((function(c) {
                                        c.ok || g.a.get("".concat("https://api.themoviedb.org/3/tv/").concat(e, "?api_key=").concat(_)).then((function(e) {
                                            return t({
                                                type: "GET_DETAILS",
                                                payload: e.data
                                            })
                                        })).catch((function(e) {
                                            return console.log(e)
                                        })), t({
                                            type: "GET_DETAILS",
                                            payload: c.data
                                        })
                                    })).catch((function(e) {
                                        return t({
                                            type: "DETAILS_ERROR"
                                        })
                                    }))
                                }
                            }(t)),
                            function() {
                                e({
                                    type: "CLEAR_DETAILS"
                                })
                            }
                    }), [e, t]), Object(G.jsx)("div", {
                        children: null === a ? Object(G.jsx)("div", {
                            className: "error",
                            children: "Sorry, couldn't load details for selected Movie/TvShow"
                        }) : Object(G.jsx)("div", {
                            children: r ? Object(G.jsx)("div", {
                                className: "loader"
                            }) : Object(G.jsx)("div", {
                                style: {
                                    backgroundImage: "url(http://image.tmdb.org/t/p/w780".concat(a.backdrop_path, ")")
                                },
                                className: "movie",
                                children: Object(G.jsxs)("div", {
                                    className: "details",
                                    children: [Object(G.jsx)("div", {
                                        className: "poster",
                                        children: Object(G.jsx)("img", {
                                            src: a.poster_path ? "http://image.tmdb.org/t/p/original".concat(a.poster_path) : L,
                                            alt: ""
                                        })
                                    }), Object(G.jsxs)("div", {
                                        className: "desc",
                                        children: [a.title ? Object(G.jsxs)("h2", {
                                            className: "desc__heading",
                                            children: [" ", a.title, " "]
                                        }) : Object(G.jsxs)("h2", {
                                            className: "desc__heading",
                                            children: [" ", a.name, " "]
                                        }), Object(G.jsxs)("p", {
                                            className: "desc__text tagline",
                                            children: [a.tagline, " "]
                                        }), Object(G.jsx)("h3", {
                                            className: "desc__heading",
                                            children: "Overview"
                                        }), Object(G.jsx)("p", {
                                            className: "desc__text",
                                            children: a.overview
                                        }), a.genres ? Object(G.jsxs)("div", {
                                            className: "genres desc__text",
                                            children: [Object(G.jsx)("h3", {
                                                children: "Genres:"
                                            }), Object(G.jsx)("div", {
                                                className: "genres__container",
                                                children: a.genres.map((function(e) {
                                                    return Object(G.jsx)("div", {
                                                        className: "genre",
                                                        children: e.name
                                                    }, e.id)
                                                }))
                                            })]
                                        }) : null, Object(G.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            },
                                            children: [a.runtime ? Object(G.jsxs)("p", {
                                                className: "desc__text",
                                                children: ["Runtime: ", a.runtime, " mins"]
                                            }) : null, a.vote_average ? Object(G.jsx)("div", {
                                                style: {
                                                    width: "70px",
                                                    height: "70px"
                                                },
                                                children: Object(G.jsx)(z.a, {
                                                    children: function(e) {
                                                        var t = e.isVisible ? 10 * a.vote_average : 0;
                                                        return Object(G.jsx)(X.a, {
                                                            value: t,
                                                            strokeWidth: 10,
                                                            styles: Object(X.b)({
                                                                rotation: 1,
                                                                strokeLinecap: "round",
                                                                textSize: "16px",
                                                                pathTransitionDuration: 3,
                                                                pathColor: "#ff2901",
                                                                textColor: "#ff2901",
                                                                trailColor: "#fff",
                                                                backgroundColor: "#ff2901",
                                                                strokeWidth: "100"
                                                            }),
                                                            children: Object(G.jsxs)("strong", {
                                                                style: {
                                                                    color: "#ff2901"
                                                                },
                                                                children: [t, "%"]
                                                            })
                                                        })
                                                    }
                                                })
                                            }) : null]
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                K = function() {
                    var e = Object(n.useState)(""),
                        t = Object(p.a)(e, 2),
                        c = t[0],
                        a = t[1],
                        r = Object(n.useState)(!1),
                        s = Object(p.a)(r, 2),
                        i = s[0],
                        o = s[1],
                        d = Object(l.f)();
                    return Object(G.jsx)("div", {
                        className: "hero",
                        children: Object(G.jsxs)("div", {
                            className: "hero__content",
                            children: [Object(G.jsxs)("div", {
                                className: "hero__content--text",
                                children: [Object(G.jsx)("h1", {
                                    children: "Welcome!"
                                }), Object(G.jsx)("h3", {
                                    children: "Discover and explore recent and trending Movies & TV Shows"
                                })]
                            }), Object(G.jsx)("form", {
                                action: "",
                                className: "hero__content--form",
                                children: Object(G.jsxs)("div", {
                                    className: "form__control",
                                    children: [Object(G.jsx)("input", {
                                        type: "text",
                                        name: "search",
                                        id: "",
                                        placeholder: "Search...",
                                        onChange: function(e) {
                                            a(e.target.value)
                                        },
                                        className: "form__element form__text"
                                    }), Object(G.jsx)("button", {
                                        type: "submit",
                                        className: "form__element form__btn",
                                        onClick: function(e) {
                                            e.preventDefault(), "" !== c ? d.push({
                                                pathname: "/search",
                                                state: c
                                            }) : o(!0)
                                        },
                                        children: "Show Me!"
                                    })]
                                })
                            }), Object(G.jsx)("p", {
                                children: i ? "Please fill the Search field" : null
                            })]
                        })
                    })
                },
                Q = function() {
                    var e = Object(o.b)(),
                        t = Object(o.c)((function(e) {
                            return e.movies
                        })),
                        c = t.searchResult,
                        a = t.loading;
                    console.log(c);
                    var r = Object(l.g)();
                    return Object(n.useEffect)((function() {
                        var t;
                        return e((t = r.state, function(e) {
                                e(k()), g.a.get(S + t).then((function(t) {
                                    var c = C(t.data.results);
                                    e({
                                        type: "SEARCH",
                                        payload: c
                                    })
                                })).catch((function(t) {
                                    return e({
                                        type: "SEARCH_ERROR"
                                    })
                                }))
                            })),
                            function() {
                                e({
                                    type: "CLEAR_SEARCH"
                                })
                            }
                    }), [r]), Object(G.jsxs)("div", {
                        children: [Object(G.jsx)(K, {}), Object(G.jsx)("div", {
                            className: "container",
                            children: null === c ? Object(G.jsx)("div", {
                                className: "error",
                                children: "Error encountered in fetching search results"
                            }) : Object(G.jsx)("div", {
                                children: a ? Object(G.jsx)("div", {
                                    className: "loader"
                                }) : Object(G.jsx)("div", {
                                    children: c.length <= 0 ? Object(G.jsxs)("div", {
                                        className: "error",
                                        children: ["Sorry, couldn't find anything related to", " ", "'".concat(r.state, "'")]
                                    }) : Object(G.jsxs)("div", {
                                        className: "wrapper",
                                        children: [Object(G.jsx)("div", {
                                            className: "category__head",
                                            children: Object(G.jsxs)("h2", {
                                                className: "category__title movies",
                                                children: ["Result for ", "'".concat(r.state, "'")]
                                            })
                                        }), Object(G.jsx)("div", {
                                            className: "grid",
                                            style: {
                                                margin: "1rem 0"
                                            },
                                            children: c.map((function(e) {
                                                return Object(G.jsx)(V, {
                                                    data: e
                                                }, e.id)
                                            }))
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                };
            var Z = function() {
                    return Object(G.jsx)(o.a, {
                        store: v,
                        children: Object(G.jsx)(i.a, {
                            children: Object(G.jsxs)(l.c, {
                                children: [Object(G.jsx)(l.a, {
                                    path: "/",
                                    component: J,
                                    exact: !0
                                }), Object(G.jsx)(l.a, {
                                    path: "/trending",
                                    component: H,
                                    exact: !0
                                }), Object(G.jsx)(l.a, {
                                    path: "/tvseries",
                                    component: W,
                                    exact: !0
                                }), Object(G.jsx)(l.a, {
                                    path: "/movies",
                                    component: B,
                                    exact: !0
                                }), Object(G.jsx)(l.a, {
                                    path: "/movie/:id",
                                    component: Y
                                }), Object(G.jsx)(l.a, {
                                    path: "/favourites",
                                    component: U
                                }), Object(G.jsx)(l.a, {
                                    path: "/search",
                                    component: Q
                                })]
                            })
                        })
                    })
                },
                $ = function(e) {
                    e && e instanceof Function && c.e(3).then(c.bind(null, 71)).then((function(t) {
                        var c = t.getCLS,
                            n = t.getFID,
                            a = t.getFCP,
                            r = t.getLCP,
                            s = t.getTTFB;
                        c(e), n(e), a(e), r(e), s(e)
                    }))
                };
            s.a.render(Object(G.jsx)(a.a.StrictMode, {
                children: Object(G.jsx)(Z, {})
            }), document.getElementById("root")), $()
        }
    },
    [
        [70, 1, 2]
    ]
]);
//# sourceMappingURL=main.07d6bd7f.chunk.js.map