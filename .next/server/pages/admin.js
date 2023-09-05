"use strict";
(() => {
var exports = {};
exports.id = 6964;
exports.ids = [6964];
exports.modules = {

/***/ 3699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);




const Widget1 = ()=>{
    const [list] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([
        {
            title: 'Invoices Awaiting Payment',
            highlight: '2/2',
            progress: 100,
            isProgress: true,
            variant: "success",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.Activity, {
            })
        },
        {
            title: 'Converted Leads',
            highlight: '0/0',
            progress: 0,
            isProgress: true,
            variant: "danger",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.TrendingUp, {
            })
        },
        {
            title: 'Projects In Progress',
            highlight: '2/3',
            progress: 67,
            isProgress: true,
            variant: "primary",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.TrendingDown, {
            })
        },
        {
            title: 'Tasks Not Finished',
            highlight: '0/1',
            progress: 0,
            isProgress: true,
            variant: "danger",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.File, {
            })
        }, 
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .X2, {
        className: "g-2",
        children: list.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, {
                sm: "3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet */ .kr, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Body */ .kr.Body, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Widget7ComponentProgress, {
                            title: data.title,
                            highlight: data.highlight,
                            variant: data.variant,
                            icon: data.icon,
                            progress: data.progress
                        })
                    })
                })
            }, index)
        )
    }));
};
const Widget7ComponentDisplay = ({ title , highlight , ...props })=>{
    return(/*#__PURE__*/ _jsx(Widget4, {
        ...props,
        children: /*#__PURE__*/ _jsx(Widget4.Group, {
            children: /*#__PURE__*/ _jsxs(Widget4.Display, {
                children: [
                    /*#__PURE__*/ _jsx(Widget4.Subtitle, {
                        children: title
                    }),
                    /*#__PURE__*/ _jsx(Widget4.Highlight, {
                        children: highlight
                    })
                ]
            })
        })
    }));
};
const Widget7ComponentProgress = ({ title , highlight , progress , variant , icon , ...props })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget4 */ .UV, {
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget4.Group */ .UV.Group, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget4.Display */ .UV.Display, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .X2, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, {
                                    md: 2,
                                    children: icon
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, {
                                    md: 10,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget4.Subtitle */ .UV.Subtitle, {
                                        children: title
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget4.Addon */ .UV.Addon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget4.Subtitle */ .UV.Subtitle, {
                            children: highlight
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .ProgressBar */ .ko, {
                striped: true,
                now: progress,
                variant: variant
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget1);


/***/ }),

/***/ 9330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const Widget3 = ()=>{
    const [data] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        title: 'Payment Records'
    });
    const [chartSeries] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([
        {
            name: 'This Week Payment',
            data: [
                69,
                25,
                10,
                15,
                58,
                63,
                60
            ]
        },
        {
            name: 'Last Week Payment',
            data: [
                85,
                101,
                98,
                87,
                105,
                91,
                114
            ]
        }, 
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet */ .kr, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Header */ .kr.Header, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Icon */ .kr.Icon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faFileCircleCheck
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Title */ .kr.Title, {
                        children: "Payment Record"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Body */ .kr.Body, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Widget30ComponentChart, {
                    series: chartSeries
                })
            })
        ]
    }));
};
const Widget30ComponentChart = (props)=>{
    const { resolvedTheme: theme  } = (0,_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .Fg)();
    const [options, setOptions] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        theme: {
            mode: theme,
            palette: 'palette1'
        },
        chart: {
            background: 'transparent'
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%'
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [
            '#F0E68C',
            '#FF69B4', 
        ],
        stroke: {
            show: true,
            width: 2,
            colors: [
                'transparent'
            ]
        },
        xaxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ]
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: (val)=>`$ ${val}`
            }
        }
    });
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setOptions((prevOptions)=>({
                ...prevOptions,
                mode: theme,
                palette: 'palette1'
            })
        );
    }, [
        theme
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    }));
// return <></> // <Chart type="bar" width="100%" height={350} options={options} series={props.series} />
};
// Currency formatter
const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget3);

});

/***/ }),

/***/ 4937:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const Widget3 = ()=>{
    const [indicators] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Marker */ .Jx, {
                    type: "dot",
                    variant: "dark"
                }),
                " 10% Not Started"
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Marker */ .Jx, {
                    type: "dot",
                    variant: "success"
                }),
                " 10% In Progress"
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Marker */ .Jx, {
                    type: "dot",
                    variant: "danger"
                }),
                " 0% On Hold"
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Marker */ .Jx, {
                    type: "dot",
                    variant: "warning"
                }),
                " 30% Cancelled"
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Marker */ .Jx, {
                    type: "dot",
                    variant: "primary"
                }),
                " 50% Finished"
            ]
        })
    ]);
    const [chartSeries] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([
        1,
        1,
        0,
        3,
        5
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet */ .kr, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Header */ .kr.Header, {
                bordered: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Icon */ .kr.Icon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInbox
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Title */ .kr.Title, {
                        children: "Statistics by Project Status"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Body */ .kr.Body, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .X2, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Widget25ComponentChart, {
                                series: chartSeries
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "d-flex justify-content-around mt-4",
                                children: indicators.map((indicator, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-muted",
                                        children: indicator
                                    }, index)
                                )
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
const Widget25ComponentChart = (props)=>{
    const { resolvedTheme: theme  } = (0,_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .Fg)();
    const [options, setOptions] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        theme: {
            mode: theme,
            palette: 'palette1'
        },
        chart: {
            background: 'transparent'
        },
        stroke: {
            colors: [
                theme === 'dark' ? '#424242' : '#fff'
            ]
        },
        labels: [
            'Not Started',
            'In Progress',
            'On Hold',
            'Cancelled',
            'Finished'
        ],
        colors: [
            '#444444',
            '#2196f3',
            '#ff3333',
            '#ffd700',
            '#4caf50', 
        ],
        tooltip: {
            fillSeriesColor: false,
            y: {
                formatter: (val)=>currency.format(val)
            }
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        }
    });
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setOptions((prevOptions)=>({
                ...prevOptions,
                mode: theme,
                palette: 'palette1',
                stroke: {
                    colors: [
                        theme === 'dark' ? '#424242' : '#fff'
                    ]
                }
            })
        );
    }, [
        theme
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    }));
// return (
// 	<Chart
// 		type="donut"
// 		width={300}
// 		height="auto"
// 		options={options}
// 		series={props.series}
// 		className="d-flex justify-content-center"
// 	/>
// )
};
// Currency formatter
const currency = new Intl.NumberFormat('en-US', {
    // style: 'currency',
    // currency: 'USD',
    minimumFractionDigits: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget3);

});

/***/ }),

/***/ 5449:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const Widget4 = ()=>{
    const [list] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([
        {
            color: 'success',
            body: 'Oleksandr - Added Created the project',
            footer: 'Project Name: Test',
            header: '3 days ago'
        },
        {
            color: 'primary',
            body: 'Oleksandr - Added Edited the project',
            footer: 'Project Name: Test',
            header: '3 days ago'
        },
        {
            color: 'danger',
            body: 'Oleksandr - Added Deleted the project',
            footer: 'Project Name: Test',
            header: '3 days ago'
        },
        {
            color: 'primary',
            body: 'Oleksandr - Added Edited the contract',
            footer: 'Project Name: Test',
            header: '3 minutes ago'
        },
        {
            color: 'danger',
            body: 'Oleksandr - Added Deleted the project',
            footer: 'Project Name: Test',
            header: '3 minutes ago'
        },
        {
            color: 'success',
            body: 'Oleksandr - Added Created the project',
            footer: 'Project Name: Test',
            header: '3 minutes ago'
        }, 
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet */ .kr, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Header */ .kr.Header, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Icon */ .kr.Icon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faListAlt
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Title */ .kr.Title, {
                        children: "Latest Project Activity"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Body */ .kr.Body, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet */ .kr, {
                    noMargin: true,
                    className: "h-100",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Body */ .kr.Body, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Timeline */ .TY, {
                            children: list.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Timeline.Item */ .TY.Item, {
                                    pin: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Marker */ .Jx, {
                                        type: "dot",
                                        variant: data.color
                                    }),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet */ .kr, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget7.Time */ .rL.Time, {
                                                children: data.header
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Header */ .kr.Header, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget7.Text */ .rL.Text, {
                                                    children: data.body
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Body */ .kr.Body, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget7.Text */ .rL.Text, {
                                                    children: data.footer
                                                })
                                            })
                                        ]
                                    })
                                }, index)
                            )
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget4);

});

/***/ }),

/***/ 6527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5886);
/* harmony import */ var components_admin_dashboard_widget1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3699);
/* harmony import */ var components_admin_dashboard_widget3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9330);
/* harmony import */ var components_admin_dashboard_widget4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4937);
/* harmony import */ var components_admin_dashboard_widget5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5449);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9167);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_2__, components_admin_dashboard_widget5__WEBPACK_IMPORTED_MODULE_6__, components_admin_dashboard_widget4__WEBPACK_IMPORTED_MODULE_5__, components_admin_dashboard_widget3__WEBPACK_IMPORTED_MODULE_4__]);
([components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_2__, components_admin_dashboard_widget5__WEBPACK_IMPORTED_MODULE_6__, components_admin_dashboard_widget4__WEBPACK_IMPORTED_MODULE_5__, components_admin_dashboard_widget3__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const DashboardPage = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .X2, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_7__/* .Col */ .JX, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_admin_dashboard_widget1__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .X2, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_7__/* .Col */ .JX, {
                        md: "8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .X2, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_7__/* .Col */ .JX, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_admin_dashboard_widget3__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_7__/* .Col */ .JX, {
                        md: "4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_admin_dashboard_widget4__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_admin_dashboard_widget5__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
DashboardPage.pageTitle = 'Dashboard';
DashboardPage.activeLink = 'dashboard';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(DashboardPage));

});

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6449:
/***/ ((module) => {

module.exports = require("@restart/hooks/useCallbackRef");

/***/ }),

/***/ 5205:
/***/ ((module) => {

module.exports = require("@restart/hooks/useEventCallback");

/***/ }),

/***/ 5756:
/***/ ((module) => {

module.exports = require("@restart/hooks/useIsomorphicEffect");

/***/ }),

/***/ 3282:
/***/ ((module) => {

module.exports = require("@restart/hooks/useMergedRefs");

/***/ }),

/***/ 2541:
/***/ ((module) => {

module.exports = require("@restart/hooks/useTimeout");

/***/ }),

/***/ 6816:
/***/ ((module) => {

module.exports = require("@restart/hooks/useWillUnmount");

/***/ }),

/***/ 5303:
/***/ ((module) => {

module.exports = require("@restart/ui/Anchor");

/***/ }),

/***/ 9642:
/***/ ((module) => {

module.exports = require("@restart/ui/Button");

/***/ }),

/***/ 451:
/***/ ((module) => {

module.exports = require("@restart/ui/Dropdown");

/***/ }),

/***/ 1328:
/***/ ((module) => {

module.exports = require("@restart/ui/DropdownContext");

/***/ }),

/***/ 9638:
/***/ ((module) => {

module.exports = require("@restart/ui/DropdownItem");

/***/ }),

/***/ 6784:
/***/ ((module) => {

module.exports = require("@restart/ui/DropdownMenu");

/***/ }),

/***/ 7566:
/***/ ((module) => {

module.exports = require("@restart/ui/DropdownToggle");

/***/ }),

/***/ 7528:
/***/ ((module) => {

module.exports = require("@restart/ui/Modal");

/***/ }),

/***/ 328:
/***/ ((module) => {

module.exports = require("@restart/ui/ModalManager");

/***/ }),

/***/ 8180:
/***/ ((module) => {

module.exports = require("@restart/ui/Nav");

/***/ }),

/***/ 5822:
/***/ ((module) => {

module.exports = require("@restart/ui/NavItem");

/***/ }),

/***/ 6372:
/***/ ((module) => {

module.exports = require("@restart/ui/NoopTransition");

/***/ }),

/***/ 2962:
/***/ ((module) => {

module.exports = require("@restart/ui/Overlay");

/***/ }),

/***/ 6638:
/***/ ((module) => {

module.exports = require("@restart/ui/SelectableContext");

/***/ }),

/***/ 4515:
/***/ ((module) => {

module.exports = require("@restart/ui/TabContext");

/***/ }),

/***/ 7753:
/***/ ((module) => {

module.exports = require("@restart/ui/TabPanel");

/***/ }),

/***/ 4636:
/***/ ((module) => {

module.exports = require("@restart/ui/Tabs");

/***/ }),

/***/ 2035:
/***/ ((module) => {

module.exports = require("@restart/ui/ssr");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("dom-helpers/addClass");

/***/ }),

/***/ 5918:
/***/ ((module) => {

module.exports = require("dom-helpers/addEventListener");

/***/ }),

/***/ 7719:
/***/ ((module) => {

module.exports = require("dom-helpers/camelize");

/***/ }),

/***/ 7107:
/***/ ((module) => {

module.exports = require("dom-helpers/canUseDOM");

/***/ }),

/***/ 6375:
/***/ ((module) => {

module.exports = require("dom-helpers/contains");

/***/ }),

/***/ 7836:
/***/ ((module) => {

module.exports = require("dom-helpers/css");

/***/ }),

/***/ 7674:
/***/ ((module) => {

module.exports = require("dom-helpers/hasClass");

/***/ }),

/***/ 2902:
/***/ ((module) => {

module.exports = require("dom-helpers/ownerDocument");

/***/ }),

/***/ 6117:
/***/ ((module) => {

module.exports = require("dom-helpers/querySelectorAll");

/***/ }),

/***/ 2590:
/***/ ((module) => {

module.exports = require("dom-helpers/removeClass");

/***/ }),

/***/ 8951:
/***/ ((module) => {

module.exports = require("dom-helpers/removeEventListener");

/***/ }),

/***/ 7233:
/***/ ((module) => {

module.exports = require("dom-helpers/scrollbarSize");

/***/ }),

/***/ 6479:
/***/ ((module) => {

module.exports = require("dom-helpers/transitionEnd");

/***/ }),

/***/ 7644:
/***/ ((module) => {

module.exports = require("invariant");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9101:
/***/ ((module) => {

module.exports = require("react-feather");

/***/ }),

/***/ 7967:
/***/ ((module) => {

module.exports = require("react-transition-group/Transition");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3372:
/***/ ((module) => {

module.exports = require("uncontrollable");

/***/ }),

/***/ 5548:
/***/ ((module) => {

module.exports = require("warning");

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9167,8367,6259,5886], () => (__webpack_exec__(6527)));
module.exports = __webpack_exports__;

})();