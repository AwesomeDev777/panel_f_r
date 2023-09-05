"use strict";
exports.id = 9167;
exports.ids = [9167];
exports.modules = {

/***/ 9167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UQ": () => (/* reexport */ accordion_Accordion),
  "xN": () => (/* reexport */ AsideNoSSR),
  "qE": () => (/* reexport */ avatar_Avatar),
  "Ct": () => (/* reexport */ badge_Badge),
  "aG": () => (/* reexport */ breadcrumb_Breadcrumb),
  "zx": () => (/* reexport */ button_Button),
  "Fj": () => (/* reexport */ caret_Caret),
  "en": () => (/* reexport */ chat_Chat),
  "JX": () => (/* reexport */ grid_Col),
  "W2": () => (/* reexport */ grid_Container),
  "_9": () => (/* reexport */ _direction_DirectionProvider),
  "Lt": () => (/* reexport */ dropdown_Dropdown),
  "Tv": () => (/* reexport */ floating_button_FloatingButton),
  "_b": () => (/* reexport */ form_FloatingLabel),
  "$_": () => (/* reexport */ footer_Footer),
  "l0": () => (/* reexport */ form_Form),
  "NI": () => (/* reexport */ form_FormControl),
  "ex": () => (/* reexport */ grid_nav_GridNav),
  "h4": () => (/* reexport */ header_Header),
  "BZ": () => (/* reexport */ form_InputGroup),
  "NX": () => (/* reexport */ list_group_ListGroup),
  "Jx": () => (/* reexport */ marker_Marker),
  "v2": () => (/* reexport */ menu_Menu),
  "u_": () => (/* reexport */ modal_Modal),
  "JL": () => (/* reexport */ nav_Nav),
  "TB": () => (/* reexport */ offcanvas_Offcanvas),
  "tl": () => (/* reexport */ pagination_Pagination),
  "kr": () => (/* reexport */ portlet_Portlet),
  "ko": () => (/* reexport */ progress_ProgressBar),
  "Of": () => (/* reexport */ rich_list_RichList),
  "X2": () => (/* reexport */ grid_Row),
  "HK": () => (/* reexport */ SSRProvider),
  "vA": () => (/* reexport */ structure_Structure),
  "OK": () => (/* reexport */ tab_Tab),
  "iA": () => (/* reexport */ table_Table),
  "f6": () => (/* reexport */ _theme_ThemeProvider),
  "TY": () => (/* reexport */ timeline_Timeline),
  "mI": () => (/* reexport */ widget12_Widget12),
  "m8": () => (/* reexport */ widget13_Widget13),
  "Qw": () => (/* reexport */ widget20_Widget20),
  "UV": () => (/* reexport */ widget4_Widget4),
  "rL": () => (/* reexport */ widget7_Widget7),
  "gm": () => (/* reexport */ useDirection),
  "Fg": () => (/* reexport */ useTheme)
});

// UNUSED EXPORTS: AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, AvatarGroup, BreadcrumbItem, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, CarouselItem, CloseButton, Collapse, DropdownButton, Fade, Figure, FormCheck, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, ListGroupItem, ModalBody, ModalDialog, ModalFooter, ModalTitle, NavDropdown, NavItem, NavLink, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, Ratio, Spinner, SplitButton, Stack, TabContainer, TabContent, TabPane, Tabs, ToggleButton, ToggleButtonGroup, Tooltip, Widget1, Widget10, Widget11, Widget14, Widget18, Widget2, Widget3, Widget5, Widget6, Widget8, Widget9, useAccordionButton

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "uncontrollable"
var external_uncontrollable_ = __webpack_require__(3372);
;// CONCATENATED MODULE: ./src/modules/components/_prefix/PrefixProvider.tsx




const PrefixContext = /*#__PURE__*/ external_react_default().createContext({
    prefixes: {
    }
});
const { Consumer , Provider  } = PrefixContext;
function PrefixProvider({ prefixes ={
} , children  }) {
    const contextValue = (0,external_react_.useMemo)(()=>({
            prefixes: {
                ...prefixes
            }
        })
    , [
        prefixes
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Provider, {
        value: contextValue,
        children: children
    }));
}
PrefixProvider.propTypes = {
    prefixes: (external_prop_types_default()).object
};
function useBootstrapPrefix(prefix, defaultPrefix) {
    const { prefixes  } = (0,external_react_.useContext)(PrefixContext);
    return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

/* harmony default export */ const _prefix_PrefixProvider = ((/* unused pure expression or super */ null && (PrefixProvider)));

// EXTERNAL MODULE: external "dom-helpers/css"
var css_ = __webpack_require__(7836);
var css_default = /*#__PURE__*/__webpack_require__.n(css_);
// EXTERNAL MODULE: external "react-transition-group/Transition"
var Transition_ = __webpack_require__(7967);
var Transition_default = /*#__PURE__*/__webpack_require__.n(Transition_);
// EXTERNAL MODULE: external "dom-helpers/transitionEnd"
var transitionEnd_ = __webpack_require__(6479);
var transitionEnd_default = /*#__PURE__*/__webpack_require__.n(transitionEnd_);
;// CONCATENATED MODULE: ./src/modules/components/transition/transitionEndListener.ts


function parseDuration(node, property) {
    const str = css_default()(node, property) || '';
    const mult = str.indexOf('ms') === -1 ? 1000 : 1;
    return parseFloat(str) * mult;
}
function transitionEndListener(element, handler) {
    const duration = parseDuration(element, 'transitionDuration');
    const delay = parseDuration(element, 'transitionDelay');
    const remove = transitionEnd_default()(element, (e)=>{
        if (e.target === element) {
            remove();
            handler(e);
        }
    }, duration + delay);
};

;// CONCATENATED MODULE: ./src/modules/components/_utilities/createChainedFunction.tsx
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */ function createChainedFunction(...funcs) {
    return funcs.filter((f)=>f != null
    ).reduce((acc, f)=>{
        if (typeof f !== 'function') {
            throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
        }
        if (acc === null) return f;
        return function chainedFunction(...args) {
            // @ts-ignore
            acc.apply(this, args);
            // @ts-ignore
            f.apply(this, args);
        };
    }, null);
}
/* harmony default export */ const _utilities_createChainedFunction = (createChainedFunction);

;// CONCATENATED MODULE: ./src/modules/components/_utilities/triggerBrowserReflow.tsx
// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    node.offsetHeight;
};

// EXTERNAL MODULE: external "@restart/hooks/useMergedRefs"
var useMergedRefs_ = __webpack_require__(3282);
var useMergedRefs_default = /*#__PURE__*/__webpack_require__.n(useMergedRefs_);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);
;// CONCATENATED MODULE: ./src/modules/components/_utilities/safeFindDOMNode.ts

function safeFindDOMNode(componentOrElement) {
    if (componentOrElement && 'setState' in componentOrElement) {
        return external_react_dom_default().findDOMNode(componentOrElement);
    }
    return componentOrElement ?? null;
};

;// CONCATENATED MODULE: ./src/modules/components/transition/TransitionWrapper.tsx





// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = /*#__PURE__*/ external_react_default().forwardRef(({ onEnter , onEntering , onEntered , onExit , onExiting , onExited , addEndListener , children , childRef , ...props }, ref)=>{
    const nodeRef = (0,external_react_.useRef)(null);
    const mergedRef = useMergedRefs_default()(nodeRef, childRef);
    const attachRef = (r)=>{
        mergedRef(safeFindDOMNode(r));
    };
    const normalize = (callback)=>(param)=>{
            if (callback && nodeRef.current) {
                callback(nodeRef.current, param);
            }
        }
    ;
    /* eslint-disable react-hooks/exhaustive-deps */ const handleEnter = (0,external_react_.useCallback)(normalize(onEnter), [
        onEnter
    ]);
    const handleEntering = (0,external_react_.useCallback)(normalize(onEntering), [
        onEntering
    ]);
    const handleEntered = (0,external_react_.useCallback)(normalize(onEntered), [
        onEntered
    ]);
    const handleExit = (0,external_react_.useCallback)(normalize(onExit), [
        onExit
    ]);
    const handleExiting = (0,external_react_.useCallback)(normalize(onExiting), [
        onExiting
    ]);
    const handleExited = (0,external_react_.useCallback)(normalize(onExited), [
        onExited
    ]);
    const handleAddEndListener = (0,external_react_.useCallback)(normalize(addEndListener), [
        addEndListener
    ]);
    /* eslint-enable react-hooks/exhaustive-deps */ return(/*#__PURE__*/ jsx_runtime_.jsx((Transition_default()), {
        ref: ref,
        ...props,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        nodeRef: nodeRef,
        children: typeof children === 'function' ? (status, innerProps)=>children(status, {
                ...innerProps,
                ref: attachRef
            })
         : /*#__PURE__*/ external_react_default().cloneElement(children, {
            ref: attachRef
        })
    }));
});
TransitionWrapper.displayName = 'TransitionWrapper';
/* harmony default export */ const transition_TransitionWrapper = (TransitionWrapper);

;// CONCATENATED MODULE: ./src/modules/components/collapse/Collapse.tsx










const MARGINS = {
    height: [
        'marginTop',
        'marginBottom'
    ],
    width: [
        'marginLeft',
        'marginRight'
    ]
};
function getDefaultDimensionValue(dimension, elem) {
    const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
    const value = elem[offset];
    const margins = MARGINS[dimension];
    return value + // @ts-ignore
    parseInt(css_default()(elem, margins[0]), 10) + // @ts-ignore
    parseInt(css_default()(elem, margins[1]), 10);
}
const collapseStyles = {
    [Transition_.EXITED]: 'collapse',
    [Transition_.EXITING]: 'collapsing',
    [Transition_.ENTERING]: 'collapsing',
    [Transition_.ENTERED]: 'collapse show'
};
const propTypes = {
    /**
	 * Show the component; triggers the expand or collapse animation
	 */ in: (external_prop_types_default()).bool,
    /**
	 * Wait until the first "enter" transition to mount the component (add it to the DOM)
	 */ mountOnEnter: (external_prop_types_default()).bool,
    /**
	 * Unmount the component (remove it from the DOM) when it is collapsed
	 */ unmountOnExit: (external_prop_types_default()).bool,
    /**
	 * Run the expand animation when the component mounts, if it is initially
	 * shown
	 */ appear: (external_prop_types_default()).bool,
    /**
	 * Duration of the collapse animation in milliseconds, to ensure that
	 * finishing callbacks are fired even if the original browser transition end
	 * events are canceled
	 */ timeout: (external_prop_types_default()).number,
    /**
	 * Callback fired before the component expands
	 */ onEnter: (external_prop_types_default()).func,
    /**
	 * Callback fired after the component starts to expand
	 */ onEntering: (external_prop_types_default()).func,
    /**
	 * Callback fired after the component has expanded
	 */ onEntered: (external_prop_types_default()).func,
    /**
	 * Callback fired before the component collapses
	 */ onExit: (external_prop_types_default()).func,
    /**
	 * Callback fired after the component starts to collapse
	 */ onExiting: (external_prop_types_default()).func,
    /**
	 * Callback fired after the component has collapsed
	 */ onExited: (external_prop_types_default()).func,
    /**
	 * The dimension used when collapsing, or a function that returns the
	 * dimension
	 */ dimension: external_prop_types_default().oneOfType([
        external_prop_types_default().oneOf([
            'height',
            'width'
        ]),
        (external_prop_types_default()).func
    ]),
    /**
	 * Function that returns the height or width of the animating DOM node
	 *
	 * Allows for providing some custom logic for how much the Collapse component
	 * should animate in its specified dimension. Called with the current
	 * dimension prop value and the DOM node.
	 *
	 * @default element.offsetWidth | element.offsetHeight
	 */ getDimensionValue: (external_prop_types_default()).func,
    /**
	 * ARIA role of collapsible element
	 */ role: (external_prop_types_default()).string,
    /**
	 * You must provide a single JSX child element to this component and that element cannot be a \<React.Fragment\>
	 */ children: (external_prop_types_default()).element.isRequired
};
const defaultProps = {
    in: false,
    timeout: 300,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    getDimensionValue: getDefaultDimensionValue
};
const Collapse = /*#__PURE__*/ external_react_default().forwardRef(({ onEnter , onEntering , onEntered , onExit , onExiting , className , children , dimension ='height' , getDimensionValue =getDefaultDimensionValue , ...props }, ref)=>{
    /* Compute dimension */ const computedDimension = typeof dimension === 'function' ? dimension() : dimension;
    /* -- Expanding -- */ const handleEnter = (0,external_react_.useMemo)(()=>_utilities_createChainedFunction((elem)=>{
            elem.style[computedDimension] = '0';
        }, onEnter)
    , [
        computedDimension,
        onEnter
    ]);
    const handleEntering = (0,external_react_.useMemo)(()=>_utilities_createChainedFunction((elem)=>{
            const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
            elem.style[computedDimension] = `${elem[scroll]}px`;
        }, onEntering)
    , [
        computedDimension,
        onEntering
    ]);
    const handleEntered = (0,external_react_.useMemo)(()=>_utilities_createChainedFunction((elem)=>{
            elem.style[computedDimension] = '';
        }, onEntered)
    , [
        computedDimension,
        onEntered
    ]);
    /* -- Collapsing -- */ const handleExit = (0,external_react_.useMemo)(()=>_utilities_createChainedFunction((elem)=>{
            elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
            triggerBrowserReflow(elem);
        }, onExit)
    , [
        onExit,
        getDimensionValue,
        computedDimension
    ]);
    const handleExiting = (0,external_react_.useMemo)(()=>_utilities_createChainedFunction((elem)=>{
            elem.style[computedDimension] = '';
        }, onExiting)
    , [
        computedDimension,
        onExiting
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(transition_TransitionWrapper, {
        ref: ref,
        addEndListener: transitionEndListener,
        ...props,
        "aria-expanded": props.role ? props.in : null,
        onEnter: handleEnter,
        onEntering: handleEntering,
        onEntered: handleEntered,
        onExit: handleExit,
        onExiting: handleExiting,
        childRef: children.ref,
        children: (state, innerProps)=>/*#__PURE__*/ external_react_default().cloneElement(children, {
                ...innerProps,
                className: external_classnames_default()(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'collapse-horizontal')
            })
    }));
});
Collapse.displayName = 'Collapse';
// @ts-ignore
Collapse.propTypes = propTypes;
// @ts-ignore
Collapse.defaultProps = defaultProps;
/* harmony default export */ const collapse_Collapse = (Collapse);

;// CONCATENATED MODULE: ./src/modules/components/accordion/AccordionContext.ts

function isAccordionItemSelected(activeEventKey, eventKey) {
    return Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : activeEventKey === eventKey;
}
const context = external_react_default().createContext({
});
context.displayName = 'AccordionContext';
/* harmony default export */ const AccordionContext = (context);

;// CONCATENATED MODULE: ./src/modules/components/accordion/AccordionCollapse.tsx







const AccordionCollapse_propTypes = {
    /** Set a custom element for this component */ as: (external_prop_types_default()).elementType,
    /**
	 * A key that corresponds to the toggler that triggers this collapse's expand or collapse.
	 */ eventKey: (external_prop_types_default()).string.isRequired,
    /** Children prop should only contain a single child, and is enforced as such */ children: (external_prop_types_default()).element.isRequired
};
const AccordionCollapse = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , children , eventKey , ...props }, ref)=>{
    const { activeEventKey  } = (0,external_react_.useContext)(AccordionContext);
    bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-collapse');
    return(/*#__PURE__*/ jsx_runtime_.jsx(collapse_Collapse, {
        ref: ref,
        in: isAccordionItemSelected(activeEventKey, eventKey),
        ...props,
        className: external_classnames_default()(className, bsPrefix),
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            children: external_react_default().Children.only(children)
        })
    }));
});
AccordionCollapse.propTypes = AccordionCollapse_propTypes;
AccordionCollapse.displayName = 'AccordionCollapse';
/* harmony default export */ const accordion_AccordionCollapse = (AccordionCollapse);

;// CONCATENATED MODULE: ./src/modules/components/accordion/AccordionItemContext.ts

const AccordionItemContext_context = external_react_default().createContext({
    eventKey: ''
});
AccordionItemContext_context.displayName = 'AccordionItemContext';
/* harmony default export */ const AccordionItemContext = (AccordionItemContext_context);

;// CONCATENATED MODULE: ./src/modules/components/accordion/AccordionBody.tsx







const AccordionBody_propTypes = {
    /** Set a custom element for this component */ as: (external_prop_types_default()).elementType,
    /** @default 'accordion-body' */ bsPrefix: (external_prop_types_default()).string
};
const AccordionBody = /*#__PURE__*/ external_react_default().forwardRef(({ // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , bsPrefix , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-body');
    const { eventKey  } = (0,external_react_.useContext)(AccordionItemContext);
    return(/*#__PURE__*/ jsx_runtime_.jsx(accordion_AccordionCollapse, {
        eventKey: eventKey,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ref: ref,
            ...props,
            className: external_classnames_default()(className, bsPrefix)
        })
    }));
});
AccordionBody.propTypes = AccordionBody_propTypes;
AccordionBody.displayName = 'AccordionBody';
/* harmony default export */ const accordion_AccordionBody = (AccordionBody);

;// CONCATENATED MODULE: ./src/modules/components/accordion/AccordionButton.tsx







const AccordionButton_propTypes = {
    /** Set a custom element for this component */ as: (external_prop_types_default()).elementType,
    /** @default 'accordion-button' */ bsPrefix: (external_prop_types_default()).string,
    /** A callback function for when this component is clicked */ onClick: (external_prop_types_default()).func
};
function useAccordionButton(eventKey, onClick) {
    const { activeEventKey , onSelect , alwaysOpen  } = (0,external_react_.useContext)(AccordionContext);
    return (e)=>{
        /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */ let eventKeyPassed = eventKey === activeEventKey ? null : eventKey;
        if (alwaysOpen) {
            if (Array.isArray(activeEventKey)) {
                if (activeEventKey.includes(eventKey)) {
                    eventKeyPassed = activeEventKey.filter((k)=>k !== eventKey
                    );
                } else {
                    eventKeyPassed = [
                        ...activeEventKey,
                        eventKey
                    ];
                }
            } else {
                // activeEventKey is undefined.
                eventKeyPassed = [
                    eventKey
                ];
            }
        }
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(eventKeyPassed, e);
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
}
const AccordionButton = /*#__PURE__*/ external_react_default().forwardRef(({ // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'button' , bsPrefix , className , onClick , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-button');
    const { eventKey  } = (0,external_react_.useContext)(AccordionItemContext);
    const accordionOnClick = useAccordionButton(eventKey, onClick);
    const { activeEventKey  } = (0,external_react_.useContext)(AccordionContext);
    if (Component === 'button') {
        props.type = 'button';
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        onClick: accordionOnClick,
        ...props,
        "aria-expanded": eventKey === activeEventKey,
        className: external_classnames_default()(className, bsPrefix, !isAccordionItemSelected(activeEventKey, eventKey) && 'collapsed')
    }));
});
AccordionButton.propTypes = AccordionButton_propTypes;
AccordionButton.displayName = 'AccordionButton';
/* harmony default export */ const accordion_AccordionButton = (AccordionButton);

;// CONCATENATED MODULE: ./src/modules/components/accordion/AccordionIcon.tsx





const AccordionIcon_propTypes = {
    as: (external_prop_types_default()).elementType
};
const AccordionIcon = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-icon');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix)
    }));
});
AccordionIcon.propTypes = AccordionIcon_propTypes;
AccordionIcon.displayName = 'AccordionIcon';
/* harmony default export */ const accordion_AccordionIcon = (AccordionIcon);

;// CONCATENATED MODULE: ./src/modules/components/accordion/AccordionHeader.tsx







const AccordionHeader_propTypes = {
    /** Set a custom element for this component */ as: (external_prop_types_default()).elementType,
    icon: (external_prop_types_default()).elementType,
    /** @default 'accordion-header' */ bsPrefix: (external_prop_types_default()).string,
    /** Click handler for the `AccordionButton` element */ onClick: (external_prop_types_default()).func
};
const AccordionHeader = /*#__PURE__*/ external_react_default().forwardRef(({ // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'h2' , icon: Icon , bsPrefix , className , children , onClick , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-header');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(accordion_AccordionButton, {
            onClick: onClick,
            children: [
                Icon && /*#__PURE__*/ jsx_runtime_.jsx(accordion_AccordionIcon, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                    })
                }),
                children
            ]
        })
    }));
});
AccordionHeader.propTypes = AccordionHeader_propTypes;
AccordionHeader.displayName = 'AccordionHeader';
/* harmony default export */ const accordion_AccordionHeader = (AccordionHeader);

;// CONCATENATED MODULE: ./src/modules/components/accordion/AccordionItem.tsx






const AccordionItem_propTypes = {
    /** Set a custom element for this component */ as: (external_prop_types_default()).elementType,
    /** @default 'accordion-item' */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * A unique key used to control this item's collapse/expand.
	 * @required
	 */ eventKey: (external_prop_types_default()).string.isRequired
};
const AccordionItem = /*#__PURE__*/ external_react_default().forwardRef(({ // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , bsPrefix , className , eventKey , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-item');
    const contextValue = (0,external_react_.useMemo)(()=>({
            eventKey
        })
    , [
        eventKey
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(AccordionItemContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ref: ref,
            ...props,
            className: external_classnames_default()(className, bsPrefix)
        })
    }));
});
AccordionItem.propTypes = AccordionItem_propTypes;
AccordionItem.displayName = 'AccordionItem';
/* harmony default export */ const accordion_AccordionItem = (AccordionItem);

;// CONCATENATED MODULE: ./src/modules/components/accordion/Accordion.tsx













const Accordion_propTypes = {
    /** Set a custom element for this component */ as: (external_react_default()).Fragment,
    /** @default 'accordion' */ bsPrefix: (external_prop_types_default()).string,
    /** The current active key that corresponds to the currently expanded card */ activeKey: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        (external_prop_types_default()).array
    ]),
    /** The default active key that is expanded on start */ defaultActiveKey: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        (external_prop_types_default()).array
    ]),
    /** Renders accordion edge-to-edge with its parent container */ flush: (external_prop_types_default()).bool,
    /** Allow accordion items to stay open when another item is opened */ alwaysOpen: (external_prop_types_default()).bool
};
const Accordion = /*#__PURE__*/ external_react_default().forwardRef((props, ref)=>{
    const { // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div' , activeKey , bsPrefix , className , onSelect , flush , alwaysOpen , ...controlledProps } = (0,external_uncontrollable_.useUncontrolled)(props, {
        activeKey: 'onSelect'
    });
    const prefix = useBootstrapPrefix(bsPrefix, 'accordion');
    const contextValue = (0,external_react_.useMemo)(()=>({
            activeEventKey: activeKey,
            onSelect,
            alwaysOpen
        })
    , [
        activeKey,
        onSelect,
        alwaysOpen
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(AccordionContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ref: ref,
            ...controlledProps,
            className: external_classnames_default()(className, prefix, flush && `${prefix}-flush`)
        })
    }));
});
Accordion.displayName = 'Accordion';
// Accordion.propTypes = propTypes
/* harmony default export */ const accordion_Accordion = (Object.assign(Accordion, {
    Button: accordion_AccordionButton,
    Collapse: accordion_AccordionCollapse,
    Item: accordion_AccordionItem,
    Header: accordion_AccordionHeader,
    Body: accordion_AccordionBody,
    Icon: accordion_AccordionIcon
}));

// EXTERNAL MODULE: external "@restart/hooks/useEventCallback"
var useEventCallback_ = __webpack_require__(5205);
var useEventCallback_default = /*#__PURE__*/__webpack_require__.n(useEventCallback_);
;// CONCATENATED MODULE: ./src/modules/components/transition/Fade.tsx









const Fade_propTypes = {
    /**
	 * Show the component; triggers the fade in or fade out animation
	 */ in: (external_prop_types_default()).bool,
    /**
	 * Wait until the first "enter" transition to mount the component (add it to the DOM)
	 */ mountOnEnter: (external_prop_types_default()).bool,
    /**
	 * Unmount the component (remove it from the DOM) when it is faded out
	 */ unmountOnExit: (external_prop_types_default()).bool,
    /**
	 * Run the fade in animation when the component mounts, if it is initially
	 * shown
	 */ appear: (external_prop_types_default()).bool,
    /**
	 * Duration of the fade animation in milliseconds, to ensure that finishing
	 * callbacks are fired even if the original browser transition end events are
	 * canceled
	 */ timeout: (external_prop_types_default()).number,
    /**
	 * Callback fired before the component fades in
	 */ onEnter: (external_prop_types_default()).func,
    /**
	 * Callback fired after the component starts to fade in
	 */ onEntering: (external_prop_types_default()).func,
    /**
	 * Callback fired after the has component faded in
	 */ onEntered: (external_prop_types_default()).func,
    /**
	 * Callback fired before the component fades out
	 */ onExit: (external_prop_types_default()).func,
    /**
	 * Callback fired after the component starts to fade out
	 */ onExiting: (external_prop_types_default()).func,
    /**
	 * Callback fired after the component has faded out
	 */ onExited: (external_prop_types_default()).func,
    /**
	 * You must provide a single JSX child element to this component and that element cannot be a \<React.Fragment\>
	 */ children: (external_prop_types_default()).element.isRequired,
    /**
	 * Applies additional specified classes during the transition. Takes an object
	 * where the keys correspond to the Transition status
	 */ transitionClasses: (external_prop_types_default()).object
};
const Fade_defaultProps = {
    in: false,
    timeout: 300,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false
};
const fadeStyles = {
    [Transition_.ENTERING]: 'show',
    [Transition_.ENTERED]: 'show'
};
const Fade = /*#__PURE__*/ external_react_default().forwardRef(({ className , children , transitionClasses ={
} , ...props }, ref1)=>{
    const handleEnter = (0,external_react_.useCallback)((node, isAppearing)=>{
        var ref;
        triggerBrowserReflow(node);
        (ref = props.onEnter) === null || ref === void 0 ? void 0 : ref.call(props, node, isAppearing);
    }, [
        props
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(transition_TransitionWrapper, {
        ref: ref1,
        addEndListener: transitionEndListener,
        ...props,
        onEnter: handleEnter,
        childRef: children.ref,
        children: (status, innerProps)=>{
            var ref;
            return(/*#__PURE__*/ external_react_default().cloneElement(children, {
                ...innerProps,
                className: external_classnames_default()('fade', className, children === null || children === void 0 ? void 0 : (ref = children.props) === null || ref === void 0 ? void 0 : ref.className, fadeStyles[status], transitionClasses[status])
            }));
        }
    }));
});
Fade.propTypes = Fade_propTypes;
Fade.defaultProps = Fade_defaultProps;
Fade.displayName = 'Fade';
/* harmony default export */ const transition_Fade = (Fade);

;// CONCATENATED MODULE: ./src/modules/components/alert/AlertLink.tsx





const AlertLink_propTypes = {
    as: (external_prop_types_default()).elementType,
    href: (external_prop_types_default()).string
};
const AlertLink = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'a' , href ='#' , bsPrefix , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'alert-link');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        href: href,
        ...props,
        className: external_classnames_default()(className, bsPrefix)
    }));
});
AlertLink.propTypes = AlertLink_propTypes;
AlertLink.displayName = 'AlertLink';
/* harmony default export */ const alert_AlertLink = (AlertLink);

// EXTERNAL MODULE: external "dom-helpers/camelize"
var camelize_ = __webpack_require__(7719);
var camelize_default = /*#__PURE__*/__webpack_require__.n(camelize_);
;// CONCATENATED MODULE: ./src/modules/components/_utilities/createWithBsPrefix.tsx





const pascalCase = (str)=>str[0].toUpperCase() + camelize_default()(str).slice(1)
;
// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, { displayName =pascalCase(prefix) , Component , defaultProps  } = {
}) {
    const BsComponent = /*#__PURE__*/ external_react_default().forwardRef(({ className , bsPrefix , as: Tag = Component || 'div' , ...props }, ref)=>{
        const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
        return(/*#__PURE__*/ jsx_runtime_.jsx(Tag, {
            ref: ref,
            className: external_classnames_default()(className, resolvedPrefix),
            ...props
        }));
    });
    BsComponent.defaultProps = defaultProps;
    BsComponent.displayName = displayName;
    return BsComponent;
};

;// CONCATENATED MODULE: ./src/modules/components/alert/AlertHeading.tsx

const AlertHeading = createWithBsPrefix('alert-heading', {
    Component: 'h4'
});
/* harmony default export */ const alert_AlertHeading = (AlertHeading);

;// CONCATENATED MODULE: ./src/modules/components/button/CloseButton.tsx




const CloseButton_propTypes = {
    'aria-label': (external_prop_types_default()).string,
    onClick: (external_prop_types_default()).func,
    /**
	 * Render different color variant for the button.
	 *
	 * Omitting this will render the default dark color.
	 */ variant: external_prop_types_default().oneOf([
        'white'
    ])
};
const CloseButton_defaultProps = {
    'aria-label': 'Close'
};
const CloseButton = /*#__PURE__*/ external_react_default().forwardRef(({ className , variant , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
        ref: ref,
        type: "button",
        className: external_classnames_default()('btn-close', variant && `btn-close-${variant}`, className),
        ...props
    })
);
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = CloseButton_propTypes;
CloseButton.defaultProps = CloseButton_defaultProps;
/* harmony default export */ const button_CloseButton = (CloseButton);

;// CONCATENATED MODULE: ./src/modules/components/alert/AlertContent.tsx

const AlertContent = createWithBsPrefix('alert-content', {
    Component: 'div'
});
/* harmony default export */ const alert_AlertContent = (AlertContent);

;// CONCATENATED MODULE: ./src/modules/components/alert/AlertIcon.tsx

const AlertIcon = createWithBsPrefix('alert-icon', {
    Component: 'div'
});
/* harmony default export */ const alert_AlertIcon = (AlertIcon);

;// CONCATENATED MODULE: ./src/modules/components/alert/Alert.tsx













const Alert_propTypes = {
    icon: (external_prop_types_default()).node,
    /**
	 * @default 'alert'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * The Alert visual variant
	 *
	 * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'}
	 */ variant: (external_prop_types_default()).string,
    /**
	 * Renders a properly aligned dismiss button, as well as
	 * adding extra horizontal padding to the Alert.
	 */ dismissible: (external_prop_types_default()).bool,
    /**
	 * Controls the visual state of the Alert.
	 *
	 * @controllable onClose
	 */ show: (external_prop_types_default()).bool,
    /**
	 * Callback fired when alert is closed.
	 *
	 * @controllable show
	 */ onClose: (external_prop_types_default()).func,
    /**
	 * Sets the text for alert close button.
	 */ closeLabel: (external_prop_types_default()).string,
    /**
	 * Sets the variant for close button.
	 */ closeVariant: external_prop_types_default().oneOf([
        'white'
    ])
};
const Alert_defaultProps = {
    variant: 'primary',
    show: true,
    closeLabel: 'Close alert'
};
const Alert = /*#__PURE__*/ external_react_default().forwardRef((uncontrolledProps, ref)=>{
    const { bsPrefix , show , icon , closeLabel , closeVariant , className , children , variant , onClose , dismissible , transition =transition_Fade , ...props } = (0,external_uncontrollable_.useUncontrolled)(uncontrolledProps, {
        show: 'onClose'
    });
    const prefix = useBootstrapPrefix(bsPrefix, 'alert');
    const handleClose = useEventCallback_default()((e)=>{
        if (onClose) {
            onClose(false, e);
        }
    });
    const Transition = transition === true ? transition_Fade : transition;
    const alert = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        role: "alert",
        ...!Transition ? props : undefined,
        ref: ref,
        className: external_classnames_default()(className, prefix, variant && `${prefix}-${variant}`, dismissible && `${prefix}-dismissible`),
        children: [
            icon && /*#__PURE__*/ jsx_runtime_.jsx(alert_AlertIcon, {
                children: icon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(alert_AlertContent, {
                children: children
            }),
            dismissible && /*#__PURE__*/ jsx_runtime_.jsx(button_CloseButton, {
                onClick: handleClose,
                "aria-label": closeLabel,
                variant: closeVariant
            })
        ]
    });
    if (!Transition) return show ? alert : null;
    return(/*#__PURE__*/ jsx_runtime_.jsx(Transition, {
        unmountOnExit: true,
        ...props,
        ref: undefined,
        in: show,
        children: alert
    }));
});
Alert.displayName = 'Alert';
Alert.defaultProps = Alert_defaultProps;
/* harmony default export */ const alert_Alert = (Object.assign(Alert, {
    Link: alert_AlertLink,
    Heading: alert_AlertHeading
}));

// EXTERNAL MODULE: external "@restart/ui/Anchor"
var Anchor_ = __webpack_require__(5303);
var Anchor_default = /*#__PURE__*/__webpack_require__.n(Anchor_);
;// CONCATENATED MODULE: ./src/modules/components/anchor/Anchor.tsx

/* harmony default export */ const anchor_Anchor = ((/* unused pure expression or super */ null && (Anchor)));

;// CONCATENATED MODULE: ./src/modules/components/badge/Badge.tsx





const Badge_propTypes = {
    circle: (external_prop_types_default()).bool,
    square: (external_prop_types_default()).bool,
    /** @default 'badge' */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * The visual style of the badge
	 *
	 * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark')}
	 */ variant: (external_prop_types_default()).string,
    /**
	 * Add the `pill` modifier to make badges more rounded with
	 * some additional horizontal padding
	 */ pill: (external_prop_types_default()).bool,
    /** @default span */ as: (external_prop_types_default()).elementType
};
const Badge_defaultProps = {
    variant: 'primary',
    pill: false
};
const Badge = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , variant , pill , circle , square , className , as: Component = 'span' , ...props }, ref)=>{
    const prefix = useBootstrapPrefix(bsPrefix, 'badge');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, prefix, pill && `rounded-pill`, circle && `badge-circle`, square && `badge-square`, variant && `badge-${variant}`)
    }));
});
Badge.displayName = 'Badge';
Badge.propTypes = Badge_propTypes;
Badge.defaultProps = Badge_defaultProps;
/* harmony default export */ const badge_Badge = (Badge);

;// CONCATENATED MODULE: ./src/modules/components/breadcrumb/BreadcrumbIcon.tsx

const BreadcrumbIcon = createWithBsPrefix('breadcrumb-icon', {
    Component: 'span'
});
/* harmony default export */ const breadcrumb_BreadcrumbIcon = (BreadcrumbIcon);

;// CONCATENATED MODULE: ./src/modules/components/breadcrumb/BreadcrumbText.tsx

const BreadcrumbText = createWithBsPrefix('breadcrumb-text', {
    Component: 'span'
});
/* harmony default export */ const breadcrumb_BreadcrumbText = (BreadcrumbText);

;// CONCATENATED MODULE: ./src/modules/components/breadcrumb/BreadcrumbItem.tsx







const BreadcrumbItem_propTypes = {
    icon: (external_prop_types_default()).node,
    /**
	 * @default 'breadcrumb-item'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Adds a visual "active" state to a Breadcrumb
	 * Item and disables the link.
	 */ active: (external_prop_types_default()).bool,
    /**
	 * `href` attribute for the inner `a` element
	 */ href: (external_prop_types_default()).string,
    /**
	 * Additional props passed as-is to the underlying link for non-active items.
	 */ as: (external_prop_types_default()).elementType
};
const BreadcrumbItem_defaultProps = {
    active: false
};
const BreadcrumbItem = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , active , children , className , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'span' , icon: Icon , ...props }, ref)=>{
    const prefix = useBootstrapPrefix(bsPrefix, 'breadcrumb-item');
    if (props.href) {
        Component = 'a';
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(prefix, className, {
            active
        }),
        "aria-current": active ? 'page' : undefined,
        children: [
            Icon && /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb_BreadcrumbIcon, {
                children: Icon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb_BreadcrumbText, {
                children: children
            })
        ]
    }));
});
BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.propTypes = BreadcrumbItem_propTypes;
BreadcrumbItem.defaultProps = BreadcrumbItem_defaultProps;
/* harmony default export */ const breadcrumb_BreadcrumbItem = (BreadcrumbItem);

;// CONCATENATED MODULE: ./src/modules/components/breadcrumb/Breadcrumb.tsx








const Breadcrumb_propTypes = {
    transparent: (external_prop_types_default()).bool,
    /**
	 * @default 'breadcrumb'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * ARIA label for the nav element
	 * https://www.w3.org/TR/wai-aria-practices/#breadcrumb
	 */ label: (external_prop_types_default()).string,
    as: (external_prop_types_default()).elementType
};
const Breadcrumb_defaultProps = {
    label: 'breadcrumb'
};
const Breadcrumb = /*#__PURE__*/ external_react_default().forwardRef(({ transparent , bsPrefix , className , children , label , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , ...props }, ref)=>{
    const prefix = useBootstrapPrefix(bsPrefix, 'breadcrumb');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        "aria-label": label,
        className: external_classnames_default()(prefix, transparent && `${prefix}-transparent`, className),
        ref: ref,
        ...props,
        children: children
    }));
});
Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.propTypes = Breadcrumb_propTypes;
Breadcrumb.defaultProps = Breadcrumb_defaultProps;
/* harmony default export */ const breadcrumb_Breadcrumb = (Object.assign(Breadcrumb, {
    Item: breadcrumb_BreadcrumbItem,
    Icon: breadcrumb_BreadcrumbIcon,
    Text: breadcrumb_BreadcrumbText
}));

// EXTERNAL MODULE: external "@restart/ui/Button"
var Button_ = __webpack_require__(9642);
;// CONCATENATED MODULE: ./src/modules/components/button/ButtonMarker.tsx

const ButtonMarker = createWithBsPrefix('btn-marker', {
    Component: 'span'
});
/* harmony default export */ const button_ButtonMarker = (ButtonMarker);

;// CONCATENATED MODULE: ./src/modules/components/button/ButtonCounter.tsx





const ButtonCounter = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , ...props }, ref)=>{
    const classNamePrefix = useBootstrapPrefix(bsPrefix, 'btn-counter');
    return(/*#__PURE__*/ jsx_runtime_.jsx(badge_Badge, {
        ref: ref,
        ...props,
        className: external_classnames_default()(classNamePrefix, className)
    }));
});
ButtonCounter.displayName = 'ButtonCounter';
/* harmony default export */ const button_ButtonCounter = (ButtonCounter);

;// CONCATENATED MODULE: ./src/modules/components/button/Button.tsx








const Button_propTypes = {
    icon: (external_prop_types_default()).bool,
    pill: (external_prop_types_default()).bool,
    circle: (external_prop_types_default()).bool,
    width: (external_prop_types_default()).string,
    height: (external_prop_types_default()).string,
    /**
	 * @default 'btn'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * One or more button variant combinations
	 *
	 * buttons may be one of a variety of visual variants such as:
	 *
	 * `'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link'`
	 *
	 * as well as "outline" versions (prefixed by 'outline-*')
	 *
	 * `'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-dark', 'outline-light'`
	 */ variant: (external_prop_types_default()).string,
    /**
	 * Specifies a large or small button.
	 *
	 * @type ('sm'|'lg')
	 */ size: (external_prop_types_default()).string,
    /** Manually set the visual state of the button to `:active` */ active: (external_prop_types_default()).bool,
    /**
	 * Disables the Button, preventing mouse events,
	 * even if the underlying component is an `<a>` element
	 */ disabled: (external_prop_types_default()).bool,
    /** Providing a `href` will render an `<a>` element, _styled_ as a button. */ href: (external_prop_types_default()).string,
    /**
	 * Defines HTML button type attribute.
	 *
	 * @default 'button'
	 */ type: external_prop_types_default().oneOf([
        'button',
        'reset',
        'submit',
        null
    ]),
    as: (external_prop_types_default()).elementType
};
const Button_defaultProps = {
    variant: 'primary',
    active: false,
    disabled: false
};
const Button = /*#__PURE__*/ external_react_default().forwardRef(({ as , bsPrefix , variant , size , active , pill , icon , circle , width , height , className , ...props }, ref)=>{
    const prefix = useBootstrapPrefix(bsPrefix, 'btn');
    const [buttonProps, { tagName  }] = (0,Button_.useButtonProps)({
        tagName: as,
        ...props
    });
    const Component = tagName;
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...props,
        ...buttonProps,
        ref: ref,
        className: external_classnames_default()(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, icon && `${prefix}-icon`, circle && `${prefix}-circle`, width && `${prefix}-${width}`, height && `${prefix}-${height}`, pill && `rounded-pill`, props.href && props.disabled && 'disabled')
    }));
});
Button.displayName = 'Button';
Button.propTypes = Button_propTypes;
Button.defaultProps = Button_defaultProps;
/* harmony default export */ const button_Button = (Object.assign(Button, {
    Marker: button_ButtonMarker,
    Counter: button_ButtonCounter
}));

;// CONCATENATED MODULE: ./src/modules/components/button/ButtonGroup.tsx





const ButtonGroup_propTypes = {
    /**
	 * @default 'btn-group'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Sets the size for all Buttons in the group.
	 *
	 * @type ('sm'|'lg')
	 */ size: (external_prop_types_default()).string,
    /** Make the set of Buttons appear vertically stacked. */ vertical: (external_prop_types_default()).bool,
    /**
	 * An ARIA role describing the button group. Usually the default
	 * "group" role is fine. An `aria-label` or `aria-labelledby`
	 * prop is also recommended.
	 */ role: (external_prop_types_default()).string,
    as: (external_prop_types_default()).elementType
};
const ButtonGroup_defaultProps = {
    vertical: false,
    role: 'group'
};
const ButtonGroup = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , size , vertical , className , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , ...rest }, ref)=>{
    const prefix = useBootstrapPrefix(bsPrefix, 'btn-group');
    let baseClass = prefix;
    if (vertical) baseClass = `${prefix}-vertical`;
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...rest,
        ref: ref,
        className: external_classnames_default()(className, baseClass, size && `${prefix}-${size}`)
    }));
});
ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.propTypes = ButtonGroup_propTypes;
ButtonGroup.defaultProps = ButtonGroup_defaultProps;
/* harmony default export */ const button_ButtonGroup = (ButtonGroup);

;// CONCATENATED MODULE: ./src/modules/components/button/ButtonToolbar.tsx





const ButtonToolbar_propTypes = {
    /**
	 * @default 'btn-toolbar'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * The ARIA role describing the button toolbar. Generally the default
	 * "toolbar" role is correct. An `aria-label` or `aria-labelledby`
	 * prop is also recommended.
	 */ role: (external_prop_types_default()).string
};
const ButtonToolbar_defaultProps = {
    role: 'toolbar'
};
const ButtonToolbar = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , ...props }, ref)=>{
    const prefix = useBootstrapPrefix(bsPrefix, 'btn-toolbar');
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ...props,
        ref: ref,
        className: external_classnames_default()(className, prefix)
    }));
});
ButtonToolbar.displayName = 'ButtonToolbar';
ButtonToolbar.propTypes = ButtonToolbar_propTypes;
ButtonToolbar.defaultProps = ButtonToolbar_defaultProps;
/* harmony default export */ const button_ButtonToolbar = ((/* unused pure expression or super */ null && (ButtonToolbar)));

;// CONCATENATED MODULE: ./src/modules/components/_utilities/divWithClassName.tsx



/* harmony default export */ const divWithClassName = ((className)=>/*#__PURE__*/ external_react_default().forwardRef((p, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            ...p,
            ref: ref,
            className: external_classnames_default()(p.className, className)
        })
    ));

;// CONCATENATED MODULE: ./src/modules/components/card/CardImg.tsx





const CardImg_propTypes = {
    /**
	 * @default 'card-img'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Defines image position inside
	 * the card.
	 *
	 * @type {('top'|'bottom')}
	 */ variant: external_prop_types_default().oneOf([
        'top',
        'bottom'
    ]),
    as: (external_prop_types_default()).elementType
};
const CardImg = /*#__PURE__*/ external_react_default().forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ bsPrefix , className , variant , as: Component = 'img' , ...props }, ref)=>{
    const prefix = useBootstrapPrefix(bsPrefix, 'card-img');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        className: external_classnames_default()(variant ? `${prefix}-${variant}` : prefix, className),
        ...props
    }));
});
CardImg.displayName = 'CardImg';
CardImg.propTypes = CardImg_propTypes;
/* harmony default export */ const card_CardImg = (CardImg);

;// CONCATENATED MODULE: ./src/modules/components/card/CardHeaderContext.tsx

const CardHeaderContext_context = /*#__PURE__*/ external_react_default().createContext(null);
CardHeaderContext_context.displayName = 'CardHeaderContext';
/* harmony default export */ const CardHeaderContext = (CardHeaderContext_context);

;// CONCATENATED MODULE: ./src/modules/components/card/CardHeader.tsx






const CardHeader_propTypes = {
    /**
	 * @default 'card-header'
	 */ bsPrefix: (external_prop_types_default()).string,
    as: (external_prop_types_default()).elementType
};
const CardHeader = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , ...props }, ref)=>{
    const prefix = useBootstrapPrefix(bsPrefix, 'card-header');
    const contextValue = (0,external_react_.useMemo)(()=>({
            cardHeaderBsPrefix: prefix
        })
    , [
        prefix
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(CardHeaderContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ref: ref,
            ...props,
            className: external_classnames_default()(className, prefix)
        })
    }));
});
CardHeader.displayName = 'CardHeader';
CardHeader.propTypes = CardHeader_propTypes;
/* harmony default export */ const card_CardHeader = (CardHeader);

;// CONCATENATED MODULE: ./src/modules/components/card/CardIcon.tsx

const CardIcon = createWithBsPrefix('card-icon', {
    Component: 'div'
});
/* harmony default export */ const card_CardIcon = (CardIcon);

;// CONCATENATED MODULE: ./src/modules/components/card/CardAddon.tsx

const CardAddon = createWithBsPrefix('card-addon', {
    Component: 'div'
});
/* harmony default export */ const card_CardAddon = (CardAddon);

;// CONCATENATED MODULE: ./src/modules/components/card/Card.tsx











const DivStyledAsH5 = divWithClassName('h5');
const DivStyledAsH6 = divWithClassName('h6');
const CardBody = createWithBsPrefix('card-body');
const CardTitle = createWithBsPrefix('card-title', {
    Component: DivStyledAsH5
});
const CardSubtitle = createWithBsPrefix('card-subtitle', {
    Component: DivStyledAsH6
});
const CardLink = createWithBsPrefix('card-link', {
    Component: 'a'
});
const CardText = createWithBsPrefix('card-text', {
    Component: 'p'
});
const CardFooter = createWithBsPrefix('card-footer');
const CardImgOverlay = createWithBsPrefix('card-img-overlay');
const Card_propTypes = {
    /**
	 * @default 'card'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Sets card background
	 *
	 * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')}
	 */ bg: (external_prop_types_default()).string,
    /**
	 * Sets card text color
	 *
	 * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light'|'white'|'muted')}
	 */ text: (external_prop_types_default()).string,
    /**
	 * Sets card border color
	 *
	 * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')}
	 */ border: (external_prop_types_default()).string,
    /**
	 * When this prop is set, it creates a Card with a Card.Body inside
	 * passing the children directly to it
	 */ body: (external_prop_types_default()).bool,
    as: (external_prop_types_default()).elementType
};
const Card_defaultProps = {
    body: false
};
const Card = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , bg , text , border , body , children , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , ...props }, ref)=>{
    const prefix = useBootstrapPrefix(bsPrefix, 'card');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
        children: body ? /*#__PURE__*/ jsx_runtime_.jsx(CardBody, {
            children: children
        }) : children
    }));
});
Card.displayName = 'Card';
Card.propTypes = Card_propTypes;
Card.defaultProps = Card_defaultProps;
/* harmony default export */ const card_Card = (Object.assign(Card, {
    Img: card_CardImg,
    Title: CardTitle,
    Subtitle: CardSubtitle,
    Body: CardBody,
    Link: CardLink,
    Text: CardText,
    Header: card_CardHeader,
    Footer: CardFooter,
    ImgOverlay: CardImgOverlay,
    Icon: card_CardIcon,
    Addon: card_CardAddon
}));

;// CONCATENATED MODULE: ./src/modules/components/card/CardGroup.tsx

/* harmony default export */ const CardGroup = (createWithBsPrefix('card-group'));

;// CONCATENATED MODULE: ./src/modules/components/grid/Col.tsx





const DEVICE_SIZES = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs'
];
const colSize = external_prop_types_default().oneOfType([
    (external_prop_types_default()).bool,
    (external_prop_types_default()).number,
    (external_prop_types_default()).string,
    external_prop_types_default().oneOf([
        'auto'
    ])
]);
const stringOrNumber = external_prop_types_default().oneOfType([
    (external_prop_types_default()).number,
    (external_prop_types_default()).string
]);
const column = external_prop_types_default().oneOfType([
    colSize,
    external_prop_types_default().shape({
        size: colSize,
        order: stringOrNumber,
        offset: stringOrNumber
    }), 
]);
const Col_propTypes = {
    /**
	 * @default 'col'
	 */ bsPrefix: (external_prop_types_default()).string,
    as: (external_prop_types_default()).elementType,
    /**
	 * The number of columns to span on extra small devices (<576px)
	 *
	 * @type {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
	 */ xs: column,
    /**
	 * The number of columns to span on small devices (≥576px)
	 *
	 * @type {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
	 */ sm: column,
    /**
	 * The number of columns to span on medium devices (≥768px)
	 *
	 * @type {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
	 */ md: column,
    /**
	 * The number of columns to span on large devices (≥992px)
	 *
	 * @type {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
	 */ lg: column,
    /**
	 * The number of columns to span on extra large devices (≥1200px)
	 *
	 * @type {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
	 */ xl: column,
    /**
	 * The number of columns to span on extra extra large devices (≥1400px)
	 *
	 * @type {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
	 */ xxl: column
};
function useCol({ as , bsPrefix , className , ...props }) {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'col');
    const spans = [];
    const classes = [];
    DEVICE_SIZES.forEach((brkPoint)=>{
        const propValue = props[brkPoint];
        delete props[brkPoint];
        let span;
        let offset;
        let order;
        if (typeof propValue === 'object' && propValue != null) {
            ({ span , offset , order  } = propValue);
        } else {
            span = propValue;
        }
        const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
        if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
        if (order != null) classes.push(`order${infix}-${order}`);
        if (offset != null) classes.push(`offset${infix}-${offset}`);
    });
    return [
        {
            ...props,
            className: external_classnames_default()(className, ...spans, ...classes)
        },
        {
            as,
            bsPrefix,
            spans
        }, 
    ];
}
const Col = /*#__PURE__*/ external_react_default().forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref)=>{
    const [{ className , ...colProps }, { as: Component = 'div' , bsPrefix , spans  }] = useCol(props);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...colProps,
        ref: ref,
        className: external_classnames_default()(className, !spans.length && bsPrefix)
    }));
});
Col.displayName = 'Col';
Col.propTypes = Col_propTypes;
/* harmony default export */ const grid_Col = (Col);

// EXTERNAL MODULE: external "@restart/ui/Dropdown"
var Dropdown_ = __webpack_require__(451);
var Dropdown_default = /*#__PURE__*/__webpack_require__.n(Dropdown_);
;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownContext.ts

const DropdownContext = external_react_default().createContext({
});
DropdownContext.displayName = 'DropdownContext';
/* harmony default export */ const dropdown_DropdownContext = (DropdownContext);

// EXTERNAL MODULE: external "@restart/ui/DropdownItem"
var DropdownItem_ = __webpack_require__(9638);
;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownIcon.tsx

const DropdownIcon = createWithBsPrefix('dropdown-icon', {
    Component: 'div'
});
/* harmony default export */ const dropdown_DropdownIcon = (DropdownIcon);

;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownContent.tsx

const DropdownContent = createWithBsPrefix('dropdown-content', {
    Component: 'span'
});
/* harmony default export */ const dropdown_DropdownContent = (DropdownContent);

;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownBullet.tsx

const DropdownBullet = createWithBsPrefix('dropdown-bullet', {
    Component: 'i'
});
/* harmony default export */ const dropdown_DropdownBullet = (DropdownBullet);

;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownAddon.tsx

const DropdownAddon = createWithBsPrefix('dropdown-addon', {
    Component: 'div'
});
/* harmony default export */ const dropdown_DropdownAddon = (DropdownAddon);

;// CONCATENATED MODULE: ./src/modules/components/caret/Caret.tsx





const Caret_propTypes = {
    as: (external_prop_types_default()).elementType,
    transform: (external_prop_types_default()).string
};
const Caret = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , transform , bsPrefix , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'caret');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, transform && `${bsPrefix}-${transform}`)
    }));
});
Caret.propTypes = Caret_propTypes;
Caret.displayName = 'Caret';
/* harmony default export */ const caret_Caret = (Caret);

;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownItem.tsx












const DropdownItem_propTypes = {
    icon: (external_prop_types_default()).node,
    bullet: (external_prop_types_default()).bool,
    caret: (external_prop_types_default()).bool,
    /** @default 'dropdown-item' */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Highlight the menu item as active.
	 */ active: (external_prop_types_default()).bool,
    /**
	 * Disable the menu item, making it unselectable.
	 */ disabled: (external_prop_types_default()).bool,
    /**
	 * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
	 */ eventKey: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        (external_prop_types_default()).number
    ]),
    /**
	 * HTML `href` attribute corresponding to `a.href`.
	 */ href: (external_prop_types_default()).string,
    /**
	 * Callback fired when the menu item is clicked.
	 */ onClick: (external_prop_types_default()).func,
    as: (external_prop_types_default()).elementType
};
const DropdownItem = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , eventKey , disabled =false , icon , bullet , caret , onClick , active , as: Component = (Anchor_default()) , children , ...props }, ref)=>{
    const prefix = useBootstrapPrefix(bsPrefix, 'dropdown-item');
    const [dropdownItemProps, meta] = (0,DropdownItem_.useDropdownItem)({
        key: eventKey,
        href: props.href,
        disabled,
        onClick,
        active
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component, {
        ...props,
        ...dropdownItemProps,
        ref: ref,
        className: external_classnames_default()(className, prefix, meta.isActive && 'active', disabled && 'disabled'),
        children: [
            icon && /*#__PURE__*/ jsx_runtime_.jsx(dropdown_DropdownIcon, {
                children: icon
            }),
            bullet && !icon && /*#__PURE__*/ jsx_runtime_.jsx(dropdown_DropdownBullet, {
            }),
            icon || bullet || caret ? /*#__PURE__*/ jsx_runtime_.jsx(dropdown_DropdownContent, {
                children: children
            }) : children,
            caret && /*#__PURE__*/ jsx_runtime_.jsx(dropdown_DropdownAddon, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(caret_Caret, {
                })
            })
        ]
    }));
});
DropdownItem.displayName = 'DropdownItem';
DropdownItem.propTypes = DropdownItem_propTypes;
/* harmony default export */ const dropdown_DropdownItem = (DropdownItem);

// EXTERNAL MODULE: external "@restart/ui/DropdownMenu"
var DropdownMenu_ = __webpack_require__(6784);
// EXTERNAL MODULE: external "@restart/hooks/useIsomorphicEffect"
var useIsomorphicEffect_ = __webpack_require__(5756);
var useIsomorphicEffect_default = /*#__PURE__*/__webpack_require__.n(useIsomorphicEffect_);
// EXTERNAL MODULE: external "warning"
var external_warning_ = __webpack_require__(5548);
var external_warning_default = /*#__PURE__*/__webpack_require__.n(external_warning_);
;// CONCATENATED MODULE: ./src/modules/components/form/InputGroupContext.tsx

const InputGroupContext_context = /*#__PURE__*/ external_react_default().createContext(null);
InputGroupContext_context.displayName = 'InputGroupContext';
/* harmony default export */ const InputGroupContext = (InputGroupContext_context);

// EXTERNAL MODULE: external "invariant"
var external_invariant_ = __webpack_require__(7644);
var external_invariant_default = /*#__PURE__*/__webpack_require__.n(external_invariant_);
;// CONCATENATED MODULE: ./src/modules/components/_utilities/useWrappedRefWithWarning.tsx



function useWrappedRefWithWarning(ref, componentName) {
    // @ts-ignore
    if (false) {}
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const warningRef = external_react_default().useCallback((refValue)=>{
        external_invariant_default()(refValue == null || !refValue.isReactComponent, `${componentName} injected a ref to a provided \`as\` component that resolved to a component instance instead of a DOM element. ` + 'Use `React.forwardRef` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element');
    }, [
        componentName
    ]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMergedRefs_default()(warningRef, ref);
};

;// CONCATENATED MODULE: ./src/modules/components/types.tsx

const alignDirection = external_prop_types_default().oneOf([
    'start',
    'end'
]);
const alignPropType = external_prop_types_default().oneOfType([
    alignDirection,
    external_prop_types_default().shape({
        sm: alignDirection
    }),
    external_prop_types_default().shape({
        md: alignDirection
    }),
    external_prop_types_default().shape({
        lg: alignDirection
    }),
    external_prop_types_default().shape({
        xl: alignDirection
    }),
    external_prop_types_default().shape({
        xxl: alignDirection
    }), 
]);

;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownMenu.tsx













const DropdownMenu_propTypes = {
    animated: (external_prop_types_default()).bool,
    wide: (external_prop_types_default()).bool,
    /**
	 * @default 'dropdown-menu'
	 */ bsPrefix: (external_prop_types_default()).string,
    /** Controls the visibility of the Dropdown menu  */ show: (external_prop_types_default()).bool,
    /** Whether to render the dropdown menu in the DOM before the first time it is shown */ renderOnMount: (external_prop_types_default()).bool,
    /** Have the dropdown switch to it's opposite placement when necessary to stay on screen. */ flip: (external_prop_types_default()).bool,
    /**
	 * Aligns the dropdown menu to the specified side of the container. You can also align
	 * the menu responsively for breakpoints starting at `sm` and up. The alignment
	 * direction will affect the specified breakpoint or larger.
	 *
	 * *Note: Using responsive alignment will disable Popper usage for positioning.*
	 *
	 * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
	 */ align: alignPropType,
    onSelect: (external_prop_types_default()).func,
    /**
	 * Which event when fired outside the component will cause it to be closed
	 *
	 * *Note: For custom dropdown components, you will have to pass the
	 * `rootCloseEvent` to `<RootCloseWrapper>` in your custom dropdown menu
	 * component ([similarly to how it is implemented in `<Dropdown.Menu>`](https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.5/src/DropdownMenu.js#L115-L119)).*
	 */ rootCloseEvent: external_prop_types_default().oneOf([
        'click',
        'mousedown'
    ]),
    /**
	 * Control the rendering of the DropdownMenu. All non-menu props
	 * (listed here) are passed through to the `as` Component.
	 *
	 * If providing a custom, non DOM, component. the `show`, `close` and `align` props
	 * are also injected and should be handled appropriately.
	 */ as: (external_prop_types_default()).elementType,
    /**
	 * A set of popper options and props passed directly to Popper.
	 */ popperConfig: (external_prop_types_default()).object,
    /**
	 * Menu color variant.
	 *
	 * Omitting this will use the default light color.
	 */ variant: (external_prop_types_default()).string
};
const DropdownMenu_defaultProps = {
    flip: true
};
function getDropdownMenuPlacement(alignEnd, dropDirection, isRTL) {
    const topStart = isRTL ? 'top-end' : 'top-start';
    const topEnd = isRTL ? 'top-start' : 'top-end';
    const bottomStart = isRTL ? 'bottom-end' : 'bottom-start';
    const bottomEnd = isRTL ? 'bottom-start' : 'bottom-end';
    const leftStart = isRTL ? 'right-start' : 'left-start';
    const leftEnd = isRTL ? 'right-end' : 'left-end';
    const rightStart = isRTL ? 'left-start' : 'right-start';
    const rightEnd = isRTL ? 'left-end' : 'right-end';
    let placement = alignEnd ? bottomEnd : bottomStart;
    if (dropDirection === 'up') placement = alignEnd ? topEnd : topStart;
    else if (dropDirection === 'end') placement = alignEnd ? rightEnd : rightStart;
    else if (dropDirection === 'start') placement = alignEnd ? leftEnd : leftStart;
    return placement;
}
const DropdownMenu = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , animated , align , rootCloseEvent , flip , wide , show: showProps , renderOnMount , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , popperConfig , variant , ...props }, ref)=>{
    let alignEnd = false;
    const prefix = useBootstrapPrefix(bsPrefix, 'dropdown-menu');
    const { align: contextAlign , drop , isRTL  } = (0,external_react_.useContext)(dropdown_DropdownContext);
    align = align || contextAlign;
    const isInputGroup = (0,external_react_.useContext)(InputGroupContext);
    const alignClasses = [];
    if (align) {
        if (typeof align === 'object') {
            const keys = Object.keys(align);
            external_warning_default()(keys.length === 1, 'There should only be 1 breakpoint when passing an object to `align`');
            if (keys.length) {
                const brkPoint = keys[0];
                const direction = align[brkPoint];
                // .dropdown-menu-end is required for responsively aligning
                // left in addition to align left classes.
                alignEnd = direction === 'start';
                alignClasses.push(`${prefix}-${brkPoint}-${direction}`);
            }
        } else if (align === 'end') {
            alignEnd = true;
        }
    }
    const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
    const [menuProps, { hasShown , popper , show , toggle  }] = (0,DropdownMenu_.useDropdownMenu)({
        flip,
        rootCloseEvent,
        show: showProps,
        usePopper: alignClasses.length === 0,
        offset: [
            0,
            2
        ],
        popperConfig,
        placement
    });
    menuProps.ref = useMergedRefs_default()(useWrappedRefWithWarning(ref, 'DropdownMenu'), menuProps.ref);
    useIsomorphicEffect_default()(()=>{
        // Popper's initial position for the menu is incorrect when
        // renderOnMount=true. Need to call update() to correct it.
        if (show) popper === null || popper === void 0 ? void 0 : popper.update();
    }, [
        show
    ]);
    if (!hasShown && !renderOnMount && !isInputGroup) return null;
    // For custom components provide additional, non-DOM, props;
    if (typeof Component !== 'string') {
        menuProps.show = show;
        menuProps.close = ()=>{
            return toggle === null || toggle === void 0 ? void 0 : toggle(false);
        };
        menuProps.align = align;
    }
    let style = props.style;
    if (popper === null || popper === void 0 ? void 0 : popper.placement) {
        // we don't need the default popper style,
        // menus are display: none when not shown.
        style = {
            ...props.style,
            ...menuProps.style
        };
        props['x-placement'] = popper.placement;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...props,
        ...menuProps,
        style: style,
        ...alignClasses.length && {
            'data-bs-popper': 'static'
        },
        className: external_classnames_default()(className, prefix, show && 'show', alignEnd && `${prefix}-end`, animated && `${prefix}-animated`, wide && `${prefix}-wide`, variant && `${prefix}-${variant}`, ...alignClasses)
    }));
});
DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.propTypes = DropdownMenu_propTypes;
DropdownMenu.defaultProps = DropdownMenu_defaultProps;
/* harmony default export */ const dropdown_DropdownMenu = (DropdownMenu);

// EXTERNAL MODULE: external "@restart/ui/DropdownToggle"
var DropdownToggle_ = __webpack_require__(7566);
// EXTERNAL MODULE: external "@restart/ui/DropdownContext"
var DropdownContext_ = __webpack_require__(1328);
var DropdownContext_default = /*#__PURE__*/__webpack_require__.n(DropdownContext_);
;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownToggle.tsx











const DropdownToggle_propTypes = {
    /**
	 * @default 'dropdown-toggle'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * An html id attribute, necessary for assistive technologies, such as screen readers.
	 * @type {string|number}
	 */ id: (external_prop_types_default()).string,
    split: (external_prop_types_default()).bool,
    as: (external_prop_types_default()).elementType,
    /**
	 * to passthrough to the underlying button or whatever from DropdownButton
	 * @private
	 */ childBsPrefix: (external_prop_types_default()).string,
    noCaret: (external_prop_types_default()).bool
};
const DropdownToggle = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , split , className , childBsPrefix , noCaret , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = button_Button , ...props }, ref)=>{
    const prefix = useBootstrapPrefix(bsPrefix, 'dropdown-toggle');
    const dropdownContext = (0,external_react_.useContext)((DropdownContext_default()));
    const isInputGroup = (0,external_react_.useContext)(InputGroupContext);
    if (childBsPrefix !== undefined) {
        props.bsPrefix = childBsPrefix;
    }
    const [toggleProps] = (0,DropdownToggle_.useDropdownToggle)();
    toggleProps.ref = useMergedRefs_default()(toggleProps.ref, useWrappedRefWithWarning(ref, 'DropdownToggle'));
    // This intentionally forwards size and variant (if set) to the
    // underlying component, to allow it to render size and style variants.
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        className: external_classnames_default()(className, !noCaret && prefix, split && `${prefix}-split`, !!isInputGroup && (dropdownContext === null || dropdownContext === void 0 ? void 0 : dropdownContext.show) && 'show'),
        ...toggleProps,
        ...props
    }));
});
DropdownToggle.displayName = 'DropdownToggle';
DropdownToggle.propTypes = DropdownToggle_propTypes;
/* harmony default export */ const dropdown_DropdownToggle = (DropdownToggle);

;// CONCATENATED MODULE: ./src/modules/components/_direction/DirectionContextHook.tsx

const DirectionContext = /*#__PURE__*/ external_react_default().createContext({
    dir: 'ltr',
    setDir: (_)=>{
    }
});
const useDirection = ()=>external_react_default().useContext(DirectionContext)
;
const useIsRTL = ()=>external_react_default().useContext(DirectionContext).dir === 'rtl'
;

;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownHeader.tsx

const DropdownHeader = createWithBsPrefix('dropdown-header', {
    Component: 'h6'
});
/* harmony default export */ const dropdown_DropdownHeader = (DropdownHeader);

;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownDivider.tsx

const DropdownDivider = createWithBsPrefix('dropdown-divider', {
    Component: 'div',
    defaultProps: {
        role: 'separator'
    }
});
/* harmony default export */ const dropdown_DropdownDivider = (DropdownDivider);

;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownItemText.tsx

const DropdownItemText = createWithBsPrefix('dropdown-item-text', {
    Component: 'span'
});
/* harmony default export */ const dropdown_DropdownItemText = (DropdownItemText);

;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownSubmenu.tsx

const DropdownSubmenu = createWithBsPrefix('dropdown-submenu', {
    Component: 'div'
});
/* harmony default export */ const dropdown_DropdownSubmenu = (DropdownSubmenu);

;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownSubmenuMenu.tsx





const DropdownSubmenuMenu_propTypes = {
    as: (external_prop_types_default()).elementType,
    align: (external_prop_types_default()).string
};
const DropdownSubmenuMenu = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , align ='start' , bsPrefix , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'dropdown-submenu');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, `${bsPrefix}-menu`, align && `${bsPrefix}-${align}`)
    }));
});
DropdownSubmenuMenu.propTypes = DropdownSubmenuMenu_propTypes;
DropdownSubmenuMenu.displayName = 'DropdownSubmenuMenu';
/* harmony default export */ const dropdown_DropdownSubmenuMenu = (DropdownSubmenuMenu);

;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownCol.tsx

const DropdownCol = createWithBsPrefix('dropdown-col', {
    Component: 'div'
});
/* harmony default export */ const dropdown_DropdownCol = (DropdownCol);

;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownRow.tsx

const DropdownRow = createWithBsPrefix('dropdown-row', {
    Component: 'div'
});
/* harmony default export */ const dropdown_DropdownRow = (DropdownRow);

;// CONCATENATED MODULE: ./src/modules/components/dropdown/Dropdown.tsx






















const Dropdown_propTypes = {
    /** @default 'dropdown' */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Determines the direction and location of the Menu in relation to it's Toggle.
	 */ drop: external_prop_types_default().oneOf([
        'up',
        'start',
        'end',
        'down'
    ]),
    as: (external_prop_types_default()).elementType,
    /**
	 * Aligns the dropdown menu to the specified side of the Dropdown toggle. You can
	 * also align the menu responsively for breakpoints starting at `sm` and up.
	 * The alignment direction will affect the specified breakpoint or larger.
	 *
	 * *Note: Using responsive alignment will disable Popper usage for positioning.*
	 *
	 * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
	 */ align: alignPropType,
    /**
	 * Whether or not the Dropdown is visible.
	 *
	 * @controllable onToggle
	 */ show: (external_prop_types_default()).bool,
    /**
	 * Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to
	 * Popper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/).
	 *
	 */ flip: (external_prop_types_default()).bool,
    /**
	 * A callback fired when the Dropdown wishes to change visibility. Called with the requested
	 * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
	 *
	 * ```js
	 * function(
	 *   isOpen: boolean,
	 *   event: SyntheticEvent,
	 *   metadata: {
	 *     source: 'select' | 'click' | 'rootClose' | 'keydown'
	 *   }
	 * ): void
	 * ```
	 *
	 * @controllable show
	 */ onToggle: (external_prop_types_default()).func,
    /**
	 * A callback fired when a menu item is selected.
	 *
	 * ```js
	 * (eventKey: any, event: Object) => any
	 * ```
	 */ onSelect: (external_prop_types_default()).func,
    /**
	 * Controls the focus behavior for when the Dropdown is opened. Set to
	 * `true` to always focus the first menu item, `keyboard` to focus only when
	 * navigating via the keyboard, or `false` to disable completely
	 *
	 * The Default behavior is `false` **unless** the Menu has a `role="menu"`
	 * where it will default to `keyboard` to match the recommended [ARIA Authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
	 */ focusFirstItemOnShow: external_prop_types_default().oneOf([
        false,
        true,
        'keyboard'
    ]),
    /**
	 * Controls the auto close behaviour of the dropdown when clicking outside of
	 * the button or the list.
	 */ autoClose: external_prop_types_default().oneOf([
        true,
        'outside',
        'inside',
        false
    ])
};
const Dropdown_defaultProps = {
    align: 'start',
    autoClose: true
};
const Dropdown = /*#__PURE__*/ external_react_default().forwardRef((pProps, ref)=>{
    const { bsPrefix , drop , show , className , align , onSelect , onToggle , focusFirstItemOnShow , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div' , autoClose , ...props } = (0,external_uncontrollable_.useUncontrolled)(pProps, {
        show: 'onToggle'
    });
    const isInputGroup = (0,external_react_.useContext)(InputGroupContext);
    const prefix = useBootstrapPrefix(bsPrefix, 'dropdown');
    const isRTL = useIsRTL();
    const isClosingPermitted = (source)=>{
        // autoClose=false only permits close on button click
        if (autoClose === false) return source === 'click';
        // autoClose=inside doesn't permit close on rootClose
        if (autoClose === 'inside') return source !== 'rootClose';
        // autoClose=outside doesn't permit close on select
        if (autoClose === 'outside') return source !== 'select';
        return true;
    };
    const handleToggle = useEventCallback_default()((nextShow, meta)=>{
        if (meta.originalEvent.currentTarget === document && (meta.source !== 'keydown' || meta.originalEvent.key === 'Escape')) meta.source = 'rootClose';
        if (isClosingPermitted(meta.source)) onToggle === null || onToggle === void 0 ? void 0 : onToggle(nextShow, meta);
    });
    const alignEnd = align === 'end';
    const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
    const contextValue = (0,external_react_.useMemo)(()=>({
            align,
            drop,
            isRTL
        })
    , [
        align,
        drop,
        isRTL
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(dropdown_DropdownContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Dropdown_default()), {
            placement: placement,
            show: show,
            onSelect: onSelect,
            onToggle: handleToggle,
            focusFirstItemOnShow: focusFirstItemOnShow,
            itemSelector: `.${prefix}-item:not(.disabled):not(:disabled)`,
            children: isInputGroup ? props.children : /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...props,
                ref: ref,
                className: external_classnames_default()(className, show && 'show', (!drop || drop === 'down') && prefix, drop === 'up' && 'dropup', drop === 'end' && 'dropend', drop === 'start' && 'dropstart')
            })
        })
    }));
});
Dropdown.displayName = 'Dropdown';
Dropdown.propTypes = Dropdown_propTypes;
Dropdown.defaultProps = Dropdown_defaultProps;
/* harmony default export */ const dropdown_Dropdown = (Object.assign(Dropdown, {
    Toggle: dropdown_DropdownToggle,
    Menu: dropdown_DropdownMenu,
    Item: dropdown_DropdownItem,
    ItemText: dropdown_DropdownItemText,
    Divider: dropdown_DropdownDivider,
    Header: dropdown_DropdownHeader,
    Submenu: dropdown_DropdownSubmenu,
    SubmenuMenu: dropdown_DropdownSubmenuMenu,
    Row: dropdown_DropdownRow,
    Col: dropdown_DropdownCol
}));

;// CONCATENATED MODULE: ./src/modules/components/dropdown/DropdownButton.tsx







const DropdownButton_propTypes = {
    /**
	 * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
	 * @type {string}
	 */ id: (external_prop_types_default()).string,
    /** An `href` passed to the Toggle component */ href: (external_prop_types_default()).string,
    /** An `onClick` handler passed to the Toggle component */ onClick: (external_prop_types_default()).func,
    /** The content of the non-toggle Button.  */ title: (external_prop_types_default()).node.isRequired,
    /** Disables both Buttons  */ disabled: (external_prop_types_default()).bool,
    /**
	 * Aligns the dropdown menu.
	 *
	 * _see [DropdownMenu](#dropdown-menu-props) for more details_
	 *
	 * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
	 */ align: alignPropType,
    /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */ menuRole: (external_prop_types_default()).string,
    /** Whether to render the dropdown menu in the DOM before the first time it is shown */ renderMenuOnMount: (external_prop_types_default()).bool,
    /**
	 *  Which event when fired outside the component will cause it to be closed.
	 *
	 * _see [DropdownMenu](#dropdown-menu-props) for more details_
	 */ rootCloseEvent: (external_prop_types_default()).string,
    /**
	 * Menu color variant.
	 *
	 * Omitting this will use the default light color.
	 */ menuVariant: external_prop_types_default().oneOf([
        'dark'
    ]),
    /** @ignore */ bsPrefix: (external_prop_types_default()).string,
    /** @ignore */ variant: (external_prop_types_default()).string,
    /** @ignore */ size: (external_prop_types_default()).string
};
/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of
 * [`Dropdown`'s props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu-related props are passed to the `Dropdown.Menu`
 */ const DropdownButton = /*#__PURE__*/ external_react_default().forwardRef(({ title , children , bsPrefix , rootCloseEvent , variant , size , menuRole , renderMenuOnMount , disabled , href , id , menuVariant , ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_Dropdown, {
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(dropdown_DropdownToggle, {
                id: id,
                href: href,
                size: size,
                variant: variant,
                disabled: disabled,
                childBsPrefix: bsPrefix,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(dropdown_DropdownMenu, {
                role: menuRole,
                renderOnMount: renderMenuOnMount,
                rootCloseEvent: rootCloseEvent,
                variant: menuVariant,
                children: children
            })
        ]
    })
);
DropdownButton.displayName = 'DropdownButton';
DropdownButton.propTypes = DropdownButton_propTypes;
/* harmony default export */ const dropdown_DropdownButton = ((/* unused pure expression or super */ null && (DropdownButton)));

;// CONCATENATED MODULE: ./src/modules/components/form/Feedback.tsx




const Feedback_propTypes = {
    /**
	 * Specify whether the feedback is for valid or invalid fields
	 *
	 * @type {('valid'|'invalid')}
	 */ type: (external_prop_types_default()).string,
    /** Display feedback as a tooltip. */ tooltip: (external_prop_types_default()).bool,
    as: (external_prop_types_default()).elementType
};
const Feedback = /*#__PURE__*/ external_react_default().forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ as: Component = 'div' , className , type ='valid' , tooltip =false , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...props,
        ref: ref,
        className: external_classnames_default()(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
    })
);
Feedback.displayName = 'Feedback';
Feedback.propTypes = Feedback_propTypes;
/* harmony default export */ const form_Feedback = (Feedback);

;// CONCATENATED MODULE: ./src/modules/components/form/FormContext.tsx

const FormContext = /*#__PURE__*/ external_react_default().createContext({
});
/* harmony default export */ const form_FormContext = (FormContext);

;// CONCATENATED MODULE: ./src/modules/components/form/FormCheckInput.tsx






const FormCheckInput_propTypes = {
    /**
	 * @default 'form-check-input'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * The underlying HTML element to use when rendering the FormCheckInput.
	 *
	 * @type {('input'|elementType)}
	 */ as: (external_prop_types_default()).elementType,
    /** A HTML id attribute, necessary for proper form accessibility. */ id: (external_prop_types_default()).string,
    /** The type of checkable. */ type: external_prop_types_default().oneOf([
        'radio',
        'checkbox'
    ]).isRequired,
    /** Manually style the input as valid */ isValid: (external_prop_types_default()).bool,
    /** Manually style the input as invalid */ isInvalid: (external_prop_types_default()).bool
};
const FormCheckInput = /*#__PURE__*/ external_react_default().forwardRef(({ id , bsPrefix , className , type ='checkbox' , isValid =false , isInvalid =false , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'input' , ...props }, ref)=>{
    const { controlId  } = (0,external_react_.useContext)(form_FormContext);
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-input');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...props,
        ref: ref,
        type: type,
        id: id || controlId,
        className: external_classnames_default()(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
    }));
});
FormCheckInput.displayName = 'FormCheckInput';
FormCheckInput.propTypes = FormCheckInput_propTypes;
/* harmony default export */ const form_FormCheckInput = (FormCheckInput);

;// CONCATENATED MODULE: ./src/modules/components/form/FormCheckLabel.tsx






const FormCheckLabel_propTypes = {
    /**
	 * @default 'form-check-label'
	 */ bsPrefix: (external_prop_types_default()).string,
    /** The HTML for attribute for associating the label with an input */ htmlFor: (external_prop_types_default()).string
};
const FormCheckLabel = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , htmlFor , ...props }, ref)=>{
    const { controlId  } = (0,external_react_.useContext)(form_FormContext);
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-label');
    return(/*#__PURE__*/ jsx_runtime_.jsx("label" // eslint-disable-line jsx-a11y/label-has-associated-control
    , {
        ...props,
        ref: ref,
        htmlFor: htmlFor || controlId,
        className: external_classnames_default()(className, bsPrefix)
    }));
});
FormCheckLabel.displayName = 'FormCheckLabel';
FormCheckLabel.propTypes = FormCheckLabel_propTypes;
/* harmony default export */ const form_FormCheckLabel = (FormCheckLabel);

;// CONCATENATED MODULE: ./src/modules/components/_utilities/ElementChildren.tsx

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */ function map(children, func) {
    let index = 0;
    return external_react_default().Children.map(children, (child)=>/*#__PURE__*/ external_react_default().isValidElement(child) ? func(child, index++) : child
    );
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */ function forEach(children, func) {
    let index = 0;
    external_react_default().Children.forEach(children, (child)=>{
        if (/*#__PURE__*/ external_react_default().isValidElement(child)) func(child, index++);
    });
}
/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */ function hasChildOfType(children, type) {
    return external_react_default().Children.toArray(children).some((child)=>/*#__PURE__*/ external_react_default().isValidElement(child) && child.type === type
    );
}


;// CONCATENATED MODULE: ./src/modules/components/form/FormCheck.tsx










const FormCheck_propTypes = {
    /**
	 * @default 'form-check'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * bsPrefix override for the base switch class.
	 *
	 * @default 'form-switch'
	 */ bsSwitchPrefix: (external_prop_types_default()).string,
    /**
	 * The FormCheck `ref` will be forwarded to the underlying input element,
	 * which means it will be a DOM node, when resolved.
	 *
	 * @type {ReactRef}
	 * @alias ref
	 */ _ref: (external_prop_types_default()).any,
    /**
	 * The underlying HTML element to use when rendering the FormCheck.
	 *
	 * @type {('input'|elementType)}
	 */ as: (external_prop_types_default()).elementType,
    /**
	 * A HTML id attribute, necessary for proper form accessibility.
	 * An id is recommended for allowing label clicks to toggle the check control.
	 *
	 * This is **required** when `type="switch"` due to how they are rendered.
	 */ id: (external_prop_types_default()).string,
    /**
	 * Provide a function child to manually handle the layout of the FormCheck's inner components.
	 *
	 * ```jsx
	 * <FormCheck>
	 *   <FormCheck.Input isInvalid type={radio} />
	 *   <FormCheck.Label>Allow us to contact you?</FormCheck.Label>
	 *   <Feedback type="invalid">Yo this is required</Feedback>
	 * </FormCheck>
	 * ```
	 */ children: (external_prop_types_default()).node,
    /**
	 * Groups controls horizontally with other `FormCheck`s.
	 */ inline: (external_prop_types_default()).bool,
    /**
	 * Disables the control.
	 */ disabled: (external_prop_types_default()).bool,
    /**
	 * `title` attribute for the underlying `FormCheckLabel`.
	 */ title: (external_prop_types_default()).string,
    /**
	 * Label for the control.
	 */ label: (external_prop_types_default()).node,
    /**
	 * The type of checkable.
	 * @type {('radio' | 'checkbox' | 'switch')}
	 */ type: external_prop_types_default().oneOf([
        'radio',
        'checkbox',
        'switch'
    ]),
    /** Manually style the input as valid */ isValid: (external_prop_types_default()).bool,
    /** Manually style the input as invalid */ isInvalid: (external_prop_types_default()).bool,
    /** Display feedback as a tooltip. */ feedbackTooltip: (external_prop_types_default()).bool,
    /** A message to display when the input is in a validation state */ feedback: (external_prop_types_default()).node
};
const FormCheck = /*#__PURE__*/ external_react_default().forwardRef(({ id , bsPrefix , bsSwitchPrefix , inline =false , disabled =false , isValid =false , isInvalid =false , feedbackTooltip =false , feedback , feedbackType , className , style , title ='' , type ='checkbox' , label , children , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as ='input' , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check');
    bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, 'form-switch');
    const { controlId  } = (0,external_react_.useContext)(form_FormContext);
    const innerFormContext = (0,external_react_.useMemo)(()=>({
            controlId: id || controlId
        })
    , [
        controlId,
        id
    ]);
    const hasLabel = !children && label != null && label !== false || hasChildOfType(children, form_FormCheckLabel);
    const input = /*#__PURE__*/ jsx_runtime_.jsx(form_FormCheckInput, {
        ...props,
        type: type === 'switch' ? 'checkbox' : type,
        ref: ref,
        isValid: isValid,
        isInvalid: isInvalid,
        disabled: disabled,
        as: as
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(form_FormContext.Provider, {
        value: innerFormContext,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: style,
            className: external_classnames_default()(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, type === 'switch' && bsSwitchPrefix),
            children: children || /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    input,
                    hasLabel && /*#__PURE__*/ jsx_runtime_.jsx(form_FormCheckLabel, {
                        title: title,
                        children: label
                    }),
                    feedback && /*#__PURE__*/ jsx_runtime_.jsx(form_Feedback, {
                        type: feedbackType,
                        tooltip: feedbackTooltip,
                        children: feedback
                    })
                ]
            })
        })
    }));
});
FormCheck.displayName = 'FormCheck';
FormCheck.propTypes = FormCheck_propTypes;
/* harmony default export */ const form_FormCheck = (Object.assign(FormCheck, {
    Input: form_FormCheckInput,
    Label: form_FormCheckLabel
}));

;// CONCATENATED MODULE: ./src/modules/components/form/FormControl.tsx








const FormControl_propTypes = {
    /**
	 * @default {'form-control'}
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * The FormControl `ref` will be forwarded to the underlying input element,
	 * which means unless `as` is a composite component,
	 * it will be a DOM node, when resolved.
	 *
	 * @type {ReactRef}
	 * @alias ref
	 */ _ref: (external_prop_types_default()).any,
    /**
	 * Input size variants
	 *
	 * @type {('sm'|'lg')}
	 */ size: (external_prop_types_default()).string,
    /**
	 * The size attribute of the underlying HTML element.
	 * Specifies the visible width in characters if `as` is `'input'`.
	 */ htmlSize: (external_prop_types_default()).number,
    /**
	 * The underlying HTML element to use when rendering the FormControl.
	 *
	 * @type {('input'|'textarea'|elementType)}
	 */ as: (external_prop_types_default()).elementType,
    /**
	 * Render the input as plain text. Generally used along side `readOnly`.
	 */ plaintext: (external_prop_types_default()).bool,
    /** Make the control readonly */ readOnly: (external_prop_types_default()).bool,
    /** Make the control disabled */ disabled: (external_prop_types_default()).bool,
    /**
	 * The `value` attribute of underlying input
	 *
	 * @controllable onChange
	 * */ value: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        external_prop_types_default().arrayOf((external_prop_types_default()).string),
        (external_prop_types_default()).number
    ]),
    /** A callback fired when the `value` prop changes */ onChange: (external_prop_types_default()).func,
    /**
	 * The HTML input `type`, which is only relevant if `as` is `'input'` (the default).
	 */ type: (external_prop_types_default()).string,
    /**
	 * Uses `controlId` from `<FormGroup>` if not explicitly specified.
	 */ id: (external_prop_types_default()).string,
    /** Add "valid" validation styles to the control */ isValid: (external_prop_types_default()).bool,
    /** Add "invalid" validation styles to the control and accompanying label */ isInvalid: (external_prop_types_default()).bool
};
const FormControl = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , type , size , htmlSize , id , className , isValid =false , isInvalid =false , plaintext , readOnly , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'input' , ...props }, ref)=>{
    const { controlId  } = (0,external_react_.useContext)(form_FormContext);
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-control');
    let classes;
    if (plaintext) {
        classes = {
            [`${bsPrefix}-plaintext`]: true
        };
    } else {
        classes = {
            [bsPrefix]: true,
            [`${bsPrefix}-${size}`]: size
        };
    }
    external_warning_default()(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...props,
        type: type,
        size: htmlSize,
        ref: ref,
        readOnly: readOnly,
        id: id || controlId,
        className: external_classnames_default()(className, classes, isValid && `is-valid`, isInvalid && `is-invalid`, type === 'color' && `${bsPrefix}-color`)
    }));
});
FormControl.displayName = 'FormControl';
FormControl.propTypes = FormControl_propTypes;
/* harmony default export */ const form_FormControl = (Object.assign(FormControl, {
    Feedback: form_Feedback
}));

;// CONCATENATED MODULE: ./src/modules/components/form/FormFloating.tsx

/* harmony default export */ const FormFloating = (createWithBsPrefix('form-floating'));

;// CONCATENATED MODULE: ./src/modules/components/form/FormGroup.tsx




const FormGroup_propTypes = {
    as: (external_prop_types_default()).elementType,
    /**
	 * Sets `id` on `<FormControl>` and `htmlFor` on `<FormGroup.Label>`.
	 */ controlId: (external_prop_types_default()).string,
    /**
	 * The FormGroup `ref` will be forwarded to the underlying element.
	 * Unless the FormGroup is rendered `as` a composite component,
	 * it will be a DOM node, when resolved.
	 *
	 * @type {ReactRef}
	 * @alias ref
	 */ _ref: (external_prop_types_default()).any
};
const FormGroup = /*#__PURE__*/ external_react_default().forwardRef(({ controlId , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , ...props }, ref)=>{
    const context = (0,external_react_.useMemo)(()=>({
            controlId
        })
    , [
        controlId
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(form_FormContext.Provider, {
        value: context,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...props,
            ref: ref
        })
    }));
});
FormGroup.displayName = 'FormGroup';
FormGroup.propTypes = FormGroup_propTypes;
/* harmony default export */ const form_FormGroup = (FormGroup);

;// CONCATENATED MODULE: ./src/modules/components/form/FormLabel.tsx








const FormLabel_propTypes = {
    /**
	 * @default 'form-label'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Uses `controlId` from `<FormGroup>` if not explicitly specified.
	 */ htmlFor: (external_prop_types_default()).string,
    /**
	 * Renders the FormLabel as a `<Col>` component (accepting all the same props),
	 * as well as adding additional styling for horizontal forms.
	 */ column: external_prop_types_default().oneOfType([
        (external_prop_types_default()).bool,
        external_prop_types_default().oneOf([
            'sm',
            'lg'
        ])
    ]),
    /**
	 * The FormLabel `ref` will be forwarded to the underlying element.
	 * Unless the FormLabel is rendered `as` a composite component,
	 * it will be a DOM node, when resolved.
	 *
	 * @type {ReactRef}
	 * @alias ref
	 */ _ref: (external_prop_types_default()).any,
    /**
	 * Hides the label visually while still allowing it to be
	 * read by assistive technologies.
	 */ visuallyHidden: (external_prop_types_default()).bool,
    /** Set a custom element for this component */ as: (external_prop_types_default()).elementType
};
const FormLabel_defaultProps = {
    column: false,
    visuallyHidden: false
};
const FormLabel = /*#__PURE__*/ external_react_default().forwardRef(({ // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'label' , bsPrefix , column , visuallyHidden , className , htmlFor , ...props }, ref)=>{
    const { controlId  } = (0,external_react_.useContext)(form_FormContext);
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-label');
    let columnClass = 'col-form-label';
    if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
    const classes = external_classnames_default()(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
    external_warning_default()(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.');
    htmlFor = htmlFor || controlId;
    if (column) return(/*#__PURE__*/ jsx_runtime_.jsx(grid_Col, {
        ref: ref,
        as: "label",
        className: classes,
        htmlFor: htmlFor,
        ...props
    }));
    return(// eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        className: classes,
        htmlFor: htmlFor,
        ...props
    }));
});
FormLabel.displayName = 'FormLabel';
FormLabel.propTypes = FormLabel_propTypes;
FormLabel.defaultProps = FormLabel_defaultProps;
/* harmony default export */ const form_FormLabel = (FormLabel);

;// CONCATENATED MODULE: ./src/modules/components/form/FormRange.tsx






const FormRange_propTypes = {
    /**
	 * @default {'form-range'}
	 */ bsPrefix: (external_prop_types_default()).string,
    /** Make the control disabled */ disabled: (external_prop_types_default()).bool,
    /**
	 * The `value` attribute of underlying input
	 *
	 * @controllable onChange
	 * */ value: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        external_prop_types_default().arrayOf((external_prop_types_default()).string.isRequired),
        (external_prop_types_default()).number
    ]),
    /** A callback fired when the `value` prop changes */ onChange: (external_prop_types_default()).func,
    /**
	 * Uses `controlId` from `<FormGroup>` if not explicitly specified.
	 */ id: (external_prop_types_default()).string
};
const FormRange = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , id , ...props }, ref)=>{
    const { controlId  } = (0,external_react_.useContext)(form_FormContext);
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-range');
    return(/*#__PURE__*/ jsx_runtime_.jsx("input", {
        ...props,
        type: "range",
        ref: ref,
        className: external_classnames_default()(className, bsPrefix),
        id: id || controlId
    }));
});
FormRange.displayName = 'FormRange';
FormRange.propTypes = FormRange_propTypes;
/* harmony default export */ const form_FormRange = (FormRange);

;// CONCATENATED MODULE: ./src/modules/components/form/FormSelect.tsx






const FormSelect_propTypes = {
    /**
	 * @default {'form-select'}
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Size variants
	 *
	 * @type {('sm'|'lg')}
	 */ size: (external_prop_types_default()).string,
    /**
	 * The size attribute of the underlying HTML element.
	 * Specifies the number of visible options.
	 */ htmlSize: (external_prop_types_default()).number,
    /** Make the control disabled */ disabled: (external_prop_types_default()).bool,
    /**
	 * The `value` attribute of underlying input
	 *
	 * @controllable onChange
	 * */ value: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        external_prop_types_default().arrayOf((external_prop_types_default()).string),
        (external_prop_types_default()).number
    ]),
    /** A callback fired when the `value` prop changes */ onChange: (external_prop_types_default()).func,
    /** Add "valid" validation styles to the control */ isValid: (external_prop_types_default()).bool,
    /** Add "invalid" validation styles to the control and accompanying label */ isInvalid: (external_prop_types_default()).bool
};
const FormSelect = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , size , htmlSize , className , isValid =false , isInvalid =false , id , ...props }, ref)=>{
    const { controlId  } = (0,external_react_.useContext)(form_FormContext);
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-select');
    return(/*#__PURE__*/ jsx_runtime_.jsx("select", {
        ...props,
        size: htmlSize,
        ref: ref,
        className: external_classnames_default()(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
        id: id || controlId
    }));
});
FormSelect.displayName = 'FormSelect';
FormSelect.propTypes = FormSelect_propTypes;
/* harmony default export */ const form_FormSelect = (FormSelect);

;// CONCATENATED MODULE: ./src/modules/components/form/FormText.tsx





const FormText_propTypes = {
    /** @default 'form-text' */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * The FormText `ref` will be forwarded to the underlying element.
	 * Unless the FormText is rendered `as` a composite component,
	 * it will be a DOM node, when resolved.
	 *
	 * @type {ReactRef}
	 * @alias ref
	 */ _ref: (external_prop_types_default()).any,
    /**
	 * A convenience prop for add the `text-muted` class,
	 * since it's so commonly used here.
	 */ muted: (external_prop_types_default()).bool,
    as: (external_prop_types_default()).elementType
};
const FormText = /*#__PURE__*/ external_react_default().forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ bsPrefix , className , as: Component = 'small' , muted , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-text');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...props,
        ref: ref,
        className: external_classnames_default()(className, bsPrefix, muted && 'text-muted')
    }));
});
FormText.displayName = 'FormText';
FormText.propTypes = FormText_propTypes;
/* harmony default export */ const form_FormText = (FormText);

;// CONCATENATED MODULE: ./src/modules/components/form/Switch.tsx



const Switch = /*#__PURE__*/ external_react_default().forwardRef((props, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(form_FormCheck, {
        ...props,
        ref: ref,
        type: "switch"
    })
);
Switch.displayName = 'Switch';
/* harmony default export */ const form_Switch = (Object.assign(Switch, {
    Input: form_FormCheck.Input,
    Label: form_FormCheck.Label
}));

;// CONCATENATED MODULE: ./src/modules/components/form/FloatingLabel.tsx






const FloatingLabel_propTypes = {
    as: (external_prop_types_default()).elementType,
    /**
	 * Sets `id` on `<FormControl>` and `htmlFor` on `<label>`.
	 */ controlId: (external_prop_types_default()).string,
    /**
	 * Form control label.
	 */ label: (external_prop_types_default()).node.isRequired
};
const FloatingLabel = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , children , controlId , label , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(form_FormGroup, {
        ref: ref,
        className: external_classnames_default()(className, bsPrefix),
        controlId: controlId,
        ...props,
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: controlId,
                children: label
            })
        ]
    }));
});
FloatingLabel.displayName = 'FloatingLabel';
FloatingLabel.propTypes = FloatingLabel_propTypes;
/* harmony default export */ const form_FloatingLabel = (FloatingLabel);

;// CONCATENATED MODULE: ./src/modules/components/form/Form.tsx














const Form_propTypes = {
    /**
	 * The Form `ref` will be forwarded to the underlying element,
	 * which means, unless it's rendered `as` a composite component,
	 * it will be a DOM node, when resolved.
	 *
	 * @type {ReactRef}
	 * @alias ref
	 */ _ref: (external_prop_types_default()).any,
    /**
	 * Mark a form as having been validated. Setting it to `true` will
	 * toggle any validation styles on the forms elements.
	 */ validated: (external_prop_types_default()).bool,
    as: (external_prop_types_default()).elementType
};
const Form = /*#__PURE__*/ external_react_default().forwardRef(({ className , validated , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'form' , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...props,
        ref: ref,
        className: external_classnames_default()(className, validated && 'was-validated')
    })
);
Form.displayName = 'Form';
Form.propTypes = Form_propTypes;
/* harmony default export */ const form_Form = (Object.assign(Form, {
    Group: form_FormGroup,
    Control: form_FormControl,
    Floating: FormFloating,
    Check: form_FormCheck,
    Switch: form_Switch,
    Label: form_FormLabel,
    Text: form_FormText,
    Range: form_FormRange,
    Select: form_FormSelect,
    FloatingLabel: form_FloatingLabel
}));

;// CONCATENATED MODULE: ./src/modules/components/grid/Container.tsx





const containerSizes = external_prop_types_default().oneOfType([
    (external_prop_types_default()).bool,
    external_prop_types_default().oneOf([
        'sm',
        'md',
        'lg',
        'xl',
        'xxl'
    ])
]);
const Container_propTypes = {
    /**
	 * @default 'container'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Allow the Container to fill all of its available horizontal space.
	 * @type {(true|"sm"|"md"|"lg"|"xl"|"xxl")}
	 */ fluid: containerSizes,
    /**
	 * You can use a custom element for this component
	 */ as: (external_prop_types_default()).elementType
};
const Container_defaultProps = {
    fluid: false
};
const Container = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , fluid , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , className , ...props }, ref)=>{
    const prefix = useBootstrapPrefix(bsPrefix, 'container');
    const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, fluid ? `${prefix}${suffix}` : prefix)
    }));
});
Container.displayName = 'Container';
Container.propTypes = Container_propTypes;
Container.defaultProps = Container_defaultProps;
/* harmony default export */ const grid_Container = (Container);

;// CONCATENATED MODULE: ./src/modules/components/image/Image.tsx





const Image_propTypes = {
    /**
	 * @default 'img'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Sets image as fluid image.
	 */ fluid: (external_prop_types_default()).bool,
    /**
	 * Sets image shape as rounded.
	 */ rounded: (external_prop_types_default()).bool,
    /**
	 * Sets image shape as circle.
	 */ roundedCircle: (external_prop_types_default()).bool,
    /**
	 * Sets image shape as thumbnail.
	 */ thumbnail: (external_prop_types_default()).bool
};
const Image_defaultProps = {
    fluid: false,
    rounded: false,
    roundedCircle: false,
    thumbnail: false
};
const Image = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , fluid , rounded , roundedCircle , thumbnail , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'img');
    return(/*#__PURE__*/ jsx_runtime_.jsx("img" // eslint-disable-line jsx-a11y/alt-text
    , {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, fluid && `${bsPrefix}-fluid`, rounded && `rounded`, roundedCircle && `rounded-circle`, thumbnail && `${bsPrefix}-thumbnail`)
    }));
});
Image.displayName = 'Image';
Image.propTypes = Image_propTypes;
Image.defaultProps = Image_defaultProps;
/* harmony default export */ const image_Image = (Image);

;// CONCATENATED MODULE: ./src/modules/components/figure/FigureImage.tsx




const FigureImage_defaultProps = {
    fluid: true
};
const FigureImage = /*#__PURE__*/ external_react_default().forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(image_Image, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, 'figure-img')
    })
);
FigureImage.displayName = 'FigureImage';
FigureImage.propTypes = Image_propTypes;
FigureImage.defaultProps = FigureImage_defaultProps;
/* harmony default export */ const figure_FigureImage = (FigureImage);

;// CONCATENATED MODULE: ./src/modules/components/figure/FigureCaption.tsx

const FigureCaption = createWithBsPrefix('figure-caption', {
    Component: 'figcaption'
});
/* harmony default export */ const figure_FigureCaption = (FigureCaption);

;// CONCATENATED MODULE: ./src/modules/components/figure/Figure.tsx



const Figure = createWithBsPrefix('figure', {
    Component: 'figure'
});
/* harmony default export */ const figure_Figure = (Object.assign(Figure, {
    Image: figure_FigureImage,
    Caption: figure_FigureCaption
}));

;// CONCATENATED MODULE: ./src/modules/components/form/InputGroup.tsx








const InputGroupText = createWithBsPrefix('input-group-text', {
    Component: 'span'
});
const InputGroupCheckbox = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(InputGroupText, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(form_FormCheckInput, {
            type: "checkbox",
            ...props
        })
    })
;
const InputGroupRadio = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(InputGroupText, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(form_FormCheckInput, {
            type: "radio",
            ...props
        })
    })
;
const InputGroup_propTypes = {
    /** @default 'input-group' */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Control the size of buttons and form elements from the top-level.
	 *
	 * @type {('sm'|'lg')}
	 */ size: (external_prop_types_default()).string,
    /**
	 * Handles the input's rounded corners when using form validation.
	 *
	 * Use this when your input group contains both an input and feedback element.
	 */ hasValidation: (external_prop_types_default()).bool,
    as: (external_prop_types_default()).elementType
};
/**
 *
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */ const InputGroup = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , size , hasValidation , className , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'input-group');
    // Intentionally an empty object. Used in detecting if a dropdown
    // exists under an input group.
    const contextValue = (0,external_react_.useMemo)(()=>({
        })
    , []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(InputGroupContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ref: ref,
            ...props,
            className: external_classnames_default()(className, bsPrefix, size && `${bsPrefix}-${size}`, hasValidation && 'has-validation')
        })
    }));
});
InputGroup.propTypes = InputGroup_propTypes;
InputGroup.displayName = 'InputGroup';
/* harmony default export */ const form_InputGroup = (Object.assign(InputGroup, {
    Text: InputGroupText,
    Radio: InputGroupRadio,
    Checkbox: InputGroupCheckbox
}));

// EXTERNAL MODULE: external "@restart/ui/Nav"
var Nav_ = __webpack_require__(8180);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);
// EXTERNAL MODULE: external "@restart/ui/NavItem"
var NavItem_ = __webpack_require__(5822);
// EXTERNAL MODULE: external "@restart/ui/SelectableContext"
var SelectableContext_ = __webpack_require__(6638);
var SelectableContext_default = /*#__PURE__*/__webpack_require__.n(SelectableContext_);
;// CONCATENATED MODULE: ./src/modules/components/list-group/ListGroupItem.tsx








const ListGroupItem_propTypes = {
    /**
	 * @default 'list-group-item'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Sets contextual classes for list item
	 * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')}
	 */ variant: (external_prop_types_default()).string,
    /**
	 * Marks a ListGroupItem as actionable, applying additional hover, active and disabled styles
	 * for links and buttons.
	 */ action: (external_prop_types_default()).bool,
    /**
	 * Sets list item as active
	 */ active: (external_prop_types_default()).bool,
    /**
	 * Sets list item state as disabled
	 */ disabled: (external_prop_types_default()).bool,
    eventKey: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        (external_prop_types_default()).number
    ]),
    onClick: (external_prop_types_default()).func,
    href: (external_prop_types_default()).string,
    /**
	 * You can use a custom element type for this component. For none `action` items, items render as `li`.
	 * For actions the default is an achor or button element depending on whether a `href` is provided.
	 *
	 * @default {'div' | 'a' | 'button'}
	 */ as: (external_prop_types_default()).elementType
};
const ListGroupItem = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , active , disabled , eventKey , className , variant , action , as , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'list-group-item');
    const [navItemProps, meta] = (0,NavItem_.useNavItem)({
        key: (0,SelectableContext_.makeEventKey)(eventKey, props.href),
        active,
        ...props
    });
    const handleClick = useEventCallback_default()((event)=>{
        if (disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        navItemProps.onClick(event);
    });
    if (disabled && props.tabIndex === undefined) {
        props.tabIndex = -1;
        props['aria-disabled'] = true;
    }
    // eslint-disable-next-line no-nested-ternary
    const Component = as || (action ? props.href ? 'a' : 'button' : 'div');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        ...navItemProps,
        onClick: handleClick,
        className: external_classnames_default()(className, bsPrefix, meta.isActive && 'active', disabled && 'disabled', variant && `${bsPrefix}-${variant}`, action && `${bsPrefix}-action`)
    }));
});
ListGroupItem.propTypes = ListGroupItem_propTypes;
ListGroupItem.displayName = 'ListGroupItem';
/* harmony default export */ const list_group_ListGroupItem = (ListGroupItem);

;// CONCATENATED MODULE: ./src/modules/components/list-group/ListGroup.tsx









const ListGroup_propTypes = {
    /**
	 * @default 'list-group'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Adds a variant to the list-group
	 *
	 * @type {('flush')}
	 */ variant: external_prop_types_default().oneOf([
        'flush'
    ]),
    /**
	 * Changes the flow of the list group items from vertical to horizontal.
	 * A value of `null` (the default) sets it to vertical for all breakpoints;
	 * Just including the prop sets it for all breakpoints, while `{sm|md|lg|xl|xxl}`
	 * makes the list group horizontal starting at that breakpoint’s `min-width`.
	 * @type {(true|'sm'|'md'|'lg'|'xl'|'xxl')}
	 */ horizontal: external_prop_types_default().oneOf([
        true,
        'sm',
        'md',
        'lg',
        'xl',
        'xxl'
    ]),
    /**
	 * Generate numbered list items.
	 */ numbered: (external_prop_types_default()).bool,
    /**
	 * You can use a custom element type for this component.
	 */ as: (external_prop_types_default()).elementType
};
const ListGroup = /*#__PURE__*/ external_react_default().forwardRef((props, ref)=>{
    const { className , bsPrefix: initialBsPrefix , variant , horizontal , numbered , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as ='div' , ...controlledProps } = (0,external_uncontrollable_.useUncontrolled)(props, {
        activeKey: 'onSelect'
    });
    const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'list-group');
    let horizontalVariant;
    if (horizontal) {
        horizontalVariant = horizontal === true ? 'horizontal' : `horizontal-${horizontal}`;
    }
    external_warning_default()(!(horizontal && variant === 'flush'), '`variant="flush"` and `horizontal` should not be used together.');
    return(/*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {
        ref: ref,
        ...controlledProps,
        as: as,
        className: external_classnames_default()(className, bsPrefix, variant && `${bsPrefix}-${variant}`, horizontalVariant && `${bsPrefix}-${horizontalVariant}`, numbered && `${bsPrefix}-numbered`)
    }));
});
ListGroup.propTypes = ListGroup_propTypes;
ListGroup.displayName = 'ListGroup';
/* harmony default export */ const list_group_ListGroup = (Object.assign(ListGroup, {
    Item: list_group_ListGroupItem
}));

// EXTERNAL MODULE: external "dom-helpers/addEventListener"
var addEventListener_ = __webpack_require__(5918);
var addEventListener_default = /*#__PURE__*/__webpack_require__.n(addEventListener_);
// EXTERNAL MODULE: external "dom-helpers/canUseDOM"
var canUseDOM_ = __webpack_require__(7107);
var canUseDOM_default = /*#__PURE__*/__webpack_require__.n(canUseDOM_);
// EXTERNAL MODULE: external "dom-helpers/ownerDocument"
var ownerDocument_ = __webpack_require__(2902);
var ownerDocument_default = /*#__PURE__*/__webpack_require__.n(ownerDocument_);
// EXTERNAL MODULE: external "dom-helpers/removeEventListener"
var removeEventListener_ = __webpack_require__(8951);
var removeEventListener_default = /*#__PURE__*/__webpack_require__.n(removeEventListener_);
// EXTERNAL MODULE: external "dom-helpers/scrollbarSize"
var scrollbarSize_ = __webpack_require__(7233);
var scrollbarSize_default = /*#__PURE__*/__webpack_require__.n(scrollbarSize_);
// EXTERNAL MODULE: external "@restart/hooks/useCallbackRef"
var useCallbackRef_ = __webpack_require__(6449);
var useCallbackRef_default = /*#__PURE__*/__webpack_require__.n(useCallbackRef_);
// EXTERNAL MODULE: external "@restart/hooks/useWillUnmount"
var useWillUnmount_ = __webpack_require__(6816);
var useWillUnmount_default = /*#__PURE__*/__webpack_require__.n(useWillUnmount_);
// EXTERNAL MODULE: external "@restart/ui/Modal"
var Modal_ = __webpack_require__(7528);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: external "dom-helpers/addClass"
var addClass_ = __webpack_require__(562);
var addClass_default = /*#__PURE__*/__webpack_require__.n(addClass_);
// EXTERNAL MODULE: external "dom-helpers/querySelectorAll"
var querySelectorAll_ = __webpack_require__(6117);
var querySelectorAll_default = /*#__PURE__*/__webpack_require__.n(querySelectorAll_);
// EXTERNAL MODULE: external "dom-helpers/removeClass"
var removeClass_ = __webpack_require__(2590);
var removeClass_default = /*#__PURE__*/__webpack_require__.n(removeClass_);
// EXTERNAL MODULE: external "@restart/ui/ModalManager"
var ModalManager_ = __webpack_require__(328);
var ModalManager_default = /*#__PURE__*/__webpack_require__.n(ModalManager_);
;// CONCATENATED MODULE: ./src/modules/components/modal/BootstrapModalManager.tsx





const Selector = {
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
};
class BootstrapModalManager extends (ModalManager_default()) {
    adjustAndStore(prop, element, adjust) {
        const actual = element.style[prop];
        // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
        // @ts-ignore
        element.dataset[prop] = actual;
        css_default()(element, {
            [prop]: `${parseFloat(css_default()(element, prop)) + adjust}px`
        });
    }
    restore(prop1, element1) {
        const value = element1.dataset[prop1];
        if (value !== undefined) {
            delete element1.dataset[prop1];
            css_default()(element1, {
                [prop1]: value
            });
        }
    }
    setContainerStyle(containerState) {
        super.setContainerStyle(containerState);
        const container = this.getElement();
        addClass_default()(container, 'modal-open');
        if (!containerState.scrollBarWidth) return;
        const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
        const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
        querySelectorAll_default()(container, Selector.FIXED_CONTENT).forEach((el)=>this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth)
        );
        querySelectorAll_default()(container, Selector.STICKY_CONTENT).forEach((el)=>this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth)
        );
    }
    removeContainerStyle(containerState1) {
        super.removeContainerStyle(containerState1);
        const container = this.getElement();
        removeClass_default()(container, 'modal-open');
        const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
        const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
        querySelectorAll_default()(container, Selector.FIXED_CONTENT).forEach((el)=>this.restore(paddingProp, el)
        );
        querySelectorAll_default()(container, Selector.STICKY_CONTENT).forEach((el)=>this.restore(marginProp, el)
        );
    }
}
let sharedManager;
function getSharedManager(options) {
    if (!sharedManager) sharedManager = new BootstrapModalManager(options);
    return sharedManager;
}
/* harmony default export */ const modal_BootstrapModalManager = (BootstrapModalManager);

;// CONCATENATED MODULE: ./src/modules/components/modal/ModalBody.tsx

/* harmony default export */ const ModalBody = (createWithBsPrefix('modal-body'));

;// CONCATENATED MODULE: ./src/modules/components/modal/ModalContext.tsx

const ModalContext = /*#__PURE__*/ external_react_default().createContext({
    onHide () {
    }
});
/* harmony default export */ const modal_ModalContext = (ModalContext);

;// CONCATENATED MODULE: ./src/modules/components/modal/ModalDialog.tsx





const ModalDialog_propTypes = {
    /** @default 'modal' */ bsPrefix: (external_prop_types_default()).string,
    contentClassName: (external_prop_types_default()).string,
    /**
	 * Render a large, extra large or small modal.
	 *
	 * @type ('sm'|'lg','xl')
	 */ size: (external_prop_types_default()).string,
    /**
	 * Renders a fullscreen modal. Specifying a breakpoint will render the modal
	 * as fullscreen __below__ the breakpoint size.
	 *
	 * @type (true|'sm-down'|'md-down'|'lg-down'|'xl-down'|'xxl-down')
	 */ fullscreen: external_prop_types_default().oneOfType([
        (external_prop_types_default()).bool,
        (external_prop_types_default()).string
    ]),
    /**
	 * Specify whether the Component should be vertically centered
	 */ centered: (external_prop_types_default()).bool,
    /**
	 * Allows scrolling the `<Modal.Body>` instead of the entire Modal when overflowing.
	 */ scrollable: (external_prop_types_default()).bool
};
const ModalDialog = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , contentClassName , centered , size , fullscreen , children , scrollable , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'modal');
    const dialogClass = `${bsPrefix}-dialog`;
    const fullScreenClass = typeof fullscreen === 'string' ? `${bsPrefix}-fullscreen-${fullscreen}` : `${bsPrefix}-fullscreen`;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ...props,
        ref: ref,
        className: external_classnames_default()(dialogClass, className, size && `${bsPrefix}-${size}`, centered && `${dialogClass}-centered`, scrollable && `${dialogClass}-scrollable`, fullscreen && fullScreenClass),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: external_classnames_default()(`${bsPrefix}-content`, contentClassName),
            children: children
        })
    }));
});
ModalDialog.displayName = 'ModalDialog';
ModalDialog.propTypes = ModalDialog_propTypes;
/* harmony default export */ const modal_ModalDialog = (ModalDialog);

;// CONCATENATED MODULE: ./src/modules/components/modal/ModalFooter.tsx

/* harmony default export */ const ModalFooter = (createWithBsPrefix('modal-footer'));

;// CONCATENATED MODULE: ./src/modules/components/modal/AbstractModalHeader.tsx






const AbstractModalHeader_propTypes = {
    /**
	 * Provides an accessible label for the close
	 * button. It is used for Assistive Technology when the label text is not
	 * readable.
	 */ closeLabel: (external_prop_types_default()).string,
    /**
	 * Sets the variant for close button.
	 */ closeVariant: external_prop_types_default().oneOf([
        'white'
    ]),
    /**
	 * Specify whether the Component should contain a close button
	 */ closeButton: (external_prop_types_default()).bool,
    /**
	 * A Callback fired when the close button is clicked. If used directly inside
	 * a ModalContext, the onHide will automatically be propagated up
	 * to the parent `onHide`.
	 */ onHide: (external_prop_types_default()).func
};
const AbstractModalHeader_defaultProps = {
    closeLabel: 'Close',
    closeButton: false
};
const AbstractModalHeader = /*#__PURE__*/ external_react_default().forwardRef(({ closeLabel , closeVariant , closeButton , onHide , children , ...props }, ref)=>{
    const context = (0,external_react_.useContext)(modal_ModalContext);
    const handleClick = useEventCallback_default()(()=>{
        context === null || context === void 0 ? void 0 : context.onHide();
        onHide === null || onHide === void 0 ? void 0 : onHide();
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: ref,
        ...props,
        children: [
            children,
            closeButton && /*#__PURE__*/ jsx_runtime_.jsx(button_CloseButton, {
                "aria-label": closeLabel,
                variant: closeVariant,
                onClick: handleClick
            })
        ]
    }));
});
AbstractModalHeader.displayName = 'AbstractModalHeader';
AbstractModalHeader.propTypes = AbstractModalHeader_propTypes;
AbstractModalHeader.defaultProps = AbstractModalHeader_defaultProps;
/* harmony default export */ const modal_AbstractModalHeader = (AbstractModalHeader);

;// CONCATENATED MODULE: ./src/modules/components/modal/ModalHeader.tsx






const ModalHeader_propTypes = {
    /**
	 * @default 'modal-header'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Provides an accessible label for the close
	 * button. It is used for Assistive Technology when the label text is not
	 * readable.
	 */ closeLabel: (external_prop_types_default()).string,
    /**
	 * Sets the variant for close button.
	 */ closeVariant: external_prop_types_default().oneOf([
        'white'
    ]),
    /**
	 * Specify whether the Component should contain a close button
	 */ closeButton: (external_prop_types_default()).bool,
    /**
	 * A Callback fired when the close button is clicked. If used directly inside
	 * a Modal component, the onHide will automatically be propagated up to the
	 * parent Modal `onHide`.
	 */ onHide: (external_prop_types_default()).func
};
const ModalHeader_defaultProps = {
    closeLabel: 'Close',
    closeButton: false
};
const ModalHeader = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'modal-header');
    return(/*#__PURE__*/ jsx_runtime_.jsx(modal_AbstractModalHeader, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix)
    }));
});
ModalHeader.displayName = 'ModalHeader';
ModalHeader.propTypes = ModalHeader_propTypes;
ModalHeader.defaultProps = ModalHeader_defaultProps;
/* harmony default export */ const modal_ModalHeader = (ModalHeader);

;// CONCATENATED MODULE: ./src/modules/components/modal/ModalTitle.tsx

/* harmony default export */ const ModalTitle = (createWithBsPrefix('modal-title', {
    Component: 'h4'
}));

;// CONCATENATED MODULE: ./src/modules/components/modal/Modal.tsx

























const Modal_propTypes = {
    /**
	 * @default 'modal'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Render a large, extra large or small modal.
	 * When not provided, the modal is rendered with medium (default) size.
	 * @type ('sm'|'lg'|'xl')
	 */ size: (external_prop_types_default()).string,
    /**
	 * Renders a fullscreen modal. Specifying a breakpoint will render the modal
	 * as fullscreen __below__ the breakpoint size.
	 *
	 * @type (true|'sm-down'|'md-down'|'lg-down'|'xl-down'|'xxl-down')
	 */ fullscreen: external_prop_types_default().oneOfType([
        (external_prop_types_default()).bool,
        (external_prop_types_default()).string
    ]),
    /**
	 * vertically center the Dialog in the window
	 */ centered: (external_prop_types_default()).bool,
    /**
	 * Include a backdrop component. Specify 'static' for a backdrop that doesn't
	 * trigger an "onHide" when clicked.
	 */ backdrop: external_prop_types_default().oneOf([
        'static',
        true,
        false
    ]),
    /**
	 * Add an optional extra class name to .modal-backdrop
	 * It could end up looking like class="modal-backdrop foo-modal-backdrop in".
	 */ backdropClassName: (external_prop_types_default()).string,
    /**
	 * Close the modal when escape key is pressed
	 */ keyboard: (external_prop_types_default()).bool,
    /**
	 * Allows scrolling the `<Modal.Body>` instead of the entire Modal when overflowing.
	 */ scrollable: (external_prop_types_default()).bool,
    /**
	 * Open and close the Modal with a slide and fade animation.
	 */ animation: (external_prop_types_default()).bool,
    /**
	 * A css class to apply to the Modal dialog DOM node.
	 */ dialogClassName: (external_prop_types_default()).string,
    /**
	 * Add an optional extra class name to .modal-content
	 */ contentClassName: (external_prop_types_default()).string,
    /**
	 * A Component type that provides the modal content Markup. This is a useful
	 * prop when you want to use your own styles and markup to create a custom
	 * modal component.
	 */ dialogAs: (external_prop_types_default()).elementType,
    /**
	 * When `true` The modal will automatically shift focus to itself when it
	 * opens, and replace it to the last focused element when it closes.
	 * Generally this should never be set to false as it makes the Modal less
	 * accessible to assistive technologies, like screen-readers.
	 */ autoFocus: (external_prop_types_default()).bool,
    /**
	 * When `true` The modal will prevent focus from leaving the Modal while
	 * open. Consider leaving the default value here, as it is necessary to make
	 * the Modal work well with assistive technologies, such as screen readers.
	 */ enforceFocus: (external_prop_types_default()).bool,
    /**
	 * When `true` The modal will restore focus to previously focused element once
	 * modal is hidden
	 */ restoreFocus: (external_prop_types_default()).bool,
    /**
	 * Options passed to focus function when `restoreFocus` is set to `true`
	 *
	 * @link  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Parameters
	 */ restoreFocusOptions: external_prop_types_default().shape({
        preventScroll: (external_prop_types_default()).bool
    }),
    /**
	 * When `true` The modal will show itself.
	 */ show: (external_prop_types_default()).bool,
    /**
	 * A callback fired when the Modal is opening.
	 */ onShow: (external_prop_types_default()).func,
    /**
	 * A callback fired when the header closeButton or non-static backdrop is
	 * clicked. Required if either are specified.
	 */ onHide: (external_prop_types_default()).func,
    /**
	 * A callback fired when the escape key, if specified in `keyboard`, is pressed.
	 */ onEscapeKeyDown: (external_prop_types_default()).func,
    /**
	 * Callback fired before the Modal transitions in
	 */ onEnter: (external_prop_types_default()).func,
    /**
	 * Callback fired as the Modal begins to transition in
	 */ onEntering: (external_prop_types_default()).func,
    /**
	 * Callback fired after the Modal finishes transitioning in
	 */ onEntered: (external_prop_types_default()).func,
    /**
	 * Callback fired right before the Modal transitions out
	 */ onExit: (external_prop_types_default()).func,
    /**
	 * Callback fired as the Modal begins to transition out
	 */ onExiting: (external_prop_types_default()).func,
    /**
	 * Callback fired after the Modal finishes transitioning out
	 */ onExited: (external_prop_types_default()).func,
    /**
	 * A ModalManager instance used to track and manage the state of open
	 * Modals. Useful when customizing how modals interact within a container
	 */ manager: (external_prop_types_default()).object,
    /**
	 * @private
	 */ container: (external_prop_types_default()).any,
    'aria-labelledby': (external_prop_types_default()).any
};
const Modal_defaultProps = {
    show: false,
    backdrop: true,
    keyboard: true,
    autoFocus: true,
    enforceFocus: true,
    restoreFocus: true,
    animation: true,
    dialogAs: modal_ModalDialog
};
/* eslint-disable no-use-before-define, react/no-multi-comp */ const DialogTransition = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(transition_Fade, {
        ...props,
        timeout: null
    }));
};
const BackdropTransition = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(transition_Fade, {
        ...props,
        timeout: null
    }));
};
/* eslint-enable no-use-before-define */ const Modal = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , style , dialogClassName , contentClassName , children , dialogAs: Dialog , 'aria-labelledby': ariaLabelledby , /* BaseModal props */ show , animation , backdrop , keyboard , onEscapeKeyDown , onShow , onHide , container , autoFocus , enforceFocus , restoreFocus , restoreFocusOptions , onEntered , onExit , onExiting , onEnter , onEntering , onExited , backdropClassName , manager: propsManager , ...props }, ref1)=>{
    const { 0: modalStyle , 1: setStyle  } = (0,external_react_.useState)({
    });
    const { 0: animateStaticModal , 1: setAnimateStaticModal  } = (0,external_react_.useState)(false);
    const waitingForMouseUpRef = (0,external_react_.useRef)(false);
    const ignoreBackdropClickRef = (0,external_react_.useRef)(false);
    const removeStaticModalAnimationRef = (0,external_react_.useRef)(null);
    const [modal, setModalRef] = useCallbackRef_default()();
    const mergedRef = useMergedRefs_default()(ref1, setModalRef);
    const handleHide = useEventCallback_default()(onHide);
    const isRTL = useIsRTL();
    bsPrefix = useBootstrapPrefix(bsPrefix, 'modal');
    const modalContext = (0,external_react_.useMemo)(()=>({
            onHide: handleHide
        })
    , [
        handleHide
    ]);
    function getModalManager() {
        if (propsManager) return propsManager;
        return getSharedManager({
            isRTL
        });
    }
    function updateDialogStyle(node) {
        if (!(canUseDOM_default())) return;
        const containerIsOverflowing = getModalManager().getScrollbarWidth() > 0;
        const modalIsOverflowing = node.scrollHeight > ownerDocument_default()(node).documentElement.clientHeight;
        setStyle({
            paddingRight: containerIsOverflowing && !modalIsOverflowing ? scrollbarSize_default()() : undefined,
            paddingLeft: !containerIsOverflowing && modalIsOverflowing ? scrollbarSize_default()() : undefined
        });
    }
    const handleWindowResize = useEventCallback_default()(()=>{
        if (modal) {
            updateDialogStyle(modal.dialog);
        }
    });
    useWillUnmount_default()(()=>{
        var ref;
        removeEventListener_default()(window, 'resize', handleWindowResize);
        (ref = removeStaticModalAnimationRef.current) === null || ref === void 0 ? void 0 : ref.call(removeStaticModalAnimationRef);
    });
    // We prevent the modal from closing during a drag by detecting where the
    // the click originates from. If it starts in the modal and then ends outside
    // don't close.
    const handleDialogMouseDown = ()=>{
        waitingForMouseUpRef.current = true;
    };
    const handleMouseUp = (e)=>{
        if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
            ignoreBackdropClickRef.current = true;
        }
        waitingForMouseUpRef.current = false;
    };
    const handleStaticModalAnimation = ()=>{
        setAnimateStaticModal(true);
        removeStaticModalAnimationRef.current = transitionEnd_default()(modal.dialog, ()=>{
            setAnimateStaticModal(false);
        });
    };
    const handleStaticBackdropClick = (e)=>{
        if (e.target !== e.currentTarget) {
            return;
        }
        handleStaticModalAnimation();
    };
    const handleClick = (e)=>{
        if (backdrop === 'static') {
            handleStaticBackdropClick(e);
            return;
        }
        if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
            ignoreBackdropClickRef.current = false;
            return;
        }
        onHide === null || onHide === void 0 ? void 0 : onHide();
    };
    const handleEscapeKeyDown = (e)=>{
        if (!keyboard && backdrop === 'static') {
            // Call preventDefault to stop modal from closing in restart ui,
            // then play our animation.
            e.preventDefault();
            handleStaticModalAnimation();
        } else if (keyboard && onEscapeKeyDown) {
            onEscapeKeyDown(e);
        }
    };
    const handleEnter = (node, isAppearing)=>{
        if (node) {
            node.style.display = 'block';
            updateDialogStyle(node);
        }
        onEnter === null || onEnter === void 0 ? void 0 : onEnter(node, isAppearing);
    };
    const handleExit = (node)=>{
        var ref;
        (ref = removeStaticModalAnimationRef.current) === null || ref === void 0 ? void 0 : ref.call(removeStaticModalAnimationRef);
        onExit === null || onExit === void 0 ? void 0 : onExit(node);
    };
    const handleEntering = (node, isAppearing)=>{
        onEntering === null || onEntering === void 0 ? void 0 : onEntering(node, isAppearing);
        // FIXME: This should work even when animation is disabled.
        addEventListener_default()(window, 'resize', handleWindowResize);
    };
    const handleExited = (node)=>{
        if (node) node.style.display = '' // RHL removes it sometimes
        ;
        onExited === null || onExited === void 0 ? void 0 : onExited(node);
        // FIXME: This should work even when animation is disabled.
        removeEventListener_default()(window, 'resize', handleWindowResize);
    };
    const renderBackdrop = (0,external_react_.useCallback)((backdropProps)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            ...backdropProps,
            className: external_classnames_default()(`${bsPrefix}-backdrop`, backdropClassName, !animation && 'show')
        })
    , [
        animation,
        backdropClassName,
        bsPrefix
    ]);
    const baseModalStyle = {
        ...style,
        ...modalStyle
    };
    // Sets `display` always block when `animation` is false
    if (!animation) {
        baseModalStyle.display = 'block';
    }
    const renderDialog = (dialogProps)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            role: "dialog",
            ...dialogProps,
            style: baseModalStyle,
            className: external_classnames_default()(className, bsPrefix, animateStaticModal && `${bsPrefix}-static`),
            onClick: backdrop ? handleClick : undefined,
            onMouseUp: handleMouseUp,
            "aria-labelledby": ariaLabelledby,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Dialog, {
                ...props,
                onMouseDown: handleDialogMouseDown,
                className: dialogClassName,
                contentClassName: contentClassName,
                children: children
            })
        })
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx(modal_ModalContext.Provider, {
        value: modalContext,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
            show: show,
            ref: mergedRef,
            backdrop: backdrop,
            container: container,
            keyboard: true,
            autoFocus: autoFocus,
            enforceFocus: enforceFocus,
            restoreFocus: restoreFocus,
            restoreFocusOptions: restoreFocusOptions,
            onEscapeKeyDown: handleEscapeKeyDown,
            onShow: onShow,
            onHide: onHide,
            onEnter: handleEnter,
            onEntering: handleEntering,
            onEntered: onEntered,
            onExit: handleExit,
            onExiting: onExiting,
            onExited: handleExited,
            manager: getModalManager(),
            transition: animation ? DialogTransition : undefined,
            backdropTransition: animation ? BackdropTransition : undefined,
            renderBackdrop: renderBackdrop,
            renderDialog: renderDialog
        })
    }));
});
Modal.displayName = 'Modal';
Modal.propTypes = Modal_propTypes;
Modal.defaultProps = Modal_defaultProps;
/* harmony default export */ const modal_Modal = (Object.assign(Modal, {
    Body: ModalBody,
    Header: modal_ModalHeader,
    Title: ModalTitle,
    Footer: ModalFooter,
    Dialog: modal_ModalDialog,
    TRANSITION_DURATION: 300,
    BACKDROP_TRANSITION_DURATION: 150
}));

;// CONCATENATED MODULE: ./src/modules/components/nav/NavItem.tsx

/* harmony default export */ const NavItem = (createWithBsPrefix('nav-item'));

;// CONCATENATED MODULE: ./src/modules/components/nav/NavLink.tsx








const NavLink_propTypes = {
    /**
	 * @default 'nav-link'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * The active state of the NavItem item.
	 */ active: (external_prop_types_default()).bool,
    /**
	 * The disabled state of the NavItem item.
	 */ disabled: (external_prop_types_default()).bool,
    /**
	 * The ARIA role for the `NavLink`, In the context of a 'tablist' parent Nav,
	 * the role defaults to 'tab'
	 * */ role: (external_prop_types_default()).string,
    /** The HTML href attribute for the `NavLink` */ href: (external_prop_types_default()).string,
    /**
	 * Uniquely identifies the `NavItem` amongst its siblings,
	 * used to determine and control the active state of the parent `Nav`
	 */ eventKey: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        (external_prop_types_default()).number
    ]),
    /** @default 'a' */ as: (external_prop_types_default()).elementType
};
const NavLink_defaultProps = {
    disabled: false
};
const NavLink = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , as: Component = (Anchor_default()) , active , eventKey , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'nav-link');
    const [navItemProps, meta] = (0,NavItem_.useNavItem)({
        key: (0,SelectableContext_.makeEventKey)(eventKey, props.href),
        active,
        ...props
    });
    delete navItemProps['id'];
    delete navItemProps['aria-controls'];
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...props,
        ...navItemProps,
        ref: ref,
        className: external_classnames_default()(className, bsPrefix, props.disabled && 'disabled', meta.isActive && 'active')
    }));
});
NavLink.displayName = 'NavLink';
NavLink.propTypes = NavLink_propTypes;
NavLink.defaultProps = NavLink_defaultProps;
/* harmony default export */ const nav_NavLink = (NavLink);

;// CONCATENATED MODULE: ./src/modules/components/nav/NavContent.tsx

const NavContent = createWithBsPrefix('nav-content', {
    Component: 'span'
});
/* harmony default export */ const nav_NavContent = (NavContent);

;// CONCATENATED MODULE: ./src/modules/components/nav/NavAddon.tsx





const NavAddon_propTypes = {
    as: (external_prop_types_default()).elementType,
    type: (external_prop_types_default()).string
};
const NavAddon = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , type , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'nav');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, `${bsPrefix}-${type}`)
    }));
});
NavAddon.propTypes = NavAddon_propTypes;
NavAddon.displayName = 'NavAddon';
/* harmony default export */ const nav_NavAddon = (NavAddon);

;// CONCATENATED MODULE: ./src/modules/components/nav/NavIcon.tsx

const NavIcon = createWithBsPrefix('nav-icon', {
    Component: 'div'
});
/* harmony default export */ const nav_NavIcon = (NavIcon);

;// CONCATENATED MODULE: ./src/modules/components/nav/Nav.tsx














const Nav_propTypes = {
    alignment: (external_prop_types_default()).string,
    /**
	 * @default 'nav'
	 */ bsPrefix: (external_prop_types_default()).string,
    /** @private */ cardHeaderBsPrefix: (external_prop_types_default()).string,
    /**
	 * The visual variant of the nav items.
	 *
	 * @type {('tabs'|'pills')}
	 */ variant: (external_prop_types_default()).string,
    /**
	 * Marks the NavItem with a matching `eventKey` (or `href` if present) as active.
	 */ activeKey: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        (external_prop_types_default()).number
    ]),
    /**
	 * Have all `NavItem`s proportionately fill all available width.
	 */ fill: (external_prop_types_default()).bool,
    /**
	 * Have all `NavItem`s evenly fill all available width.
	 *
	 * @type {boolean}
	 */ justify: (external_prop_types_default()).bool,
    /**
	 * A callback fired when a NavItem is selected.
	 *
	 * ```js
	 * function (
	 *  Any eventKey,
	 *  SyntheticEvent event?
	 * )
	 * ```
	 */ onSelect: (external_prop_types_default()).func,
    /**
	 * ARIA role for the Nav, in the context of a TabContainer, the default will
	 * be set to "tablist", but can be overridden by the Nav when set explicitly.
	 *
	 * When the role is "tablist", NavLink focus is managed according to
	 * the ARIA authoring practices for tabs:
	 * https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
	 */ role: (external_prop_types_default()).string,
    size: (external_prop_types_default()).string,
    as: (external_prop_types_default()).elementType,
    /** @private */ onKeyDown: (external_prop_types_default()).func,
    portlet: (external_prop_types_default()).bool
};
const Nav_defaultProps = {
    justify: false,
    fill: false
};
const Nav = /*#__PURE__*/ external_react_default().forwardRef((uncontrolledProps, ref)=>{
    const { as ='div' , bsPrefix: initialBsPrefix , alignment , variant , fill , justify , className , activeKey , size , portlet , ...props } = (0,external_uncontrollable_.useUncontrolled)(uncontrolledProps, {
        activeKey: 'onSelect'
    });
    const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'nav');
    let cardHeaderBsPrefix;
    const cardHeaderContext = (0,external_react_.useContext)(CardHeaderContext);
    if (cardHeaderContext) {
        ({ cardHeaderBsPrefix  } = cardHeaderContext);
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {
        as: as,
        ref: ref,
        activeKey: activeKey,
        className: external_classnames_default()(className, bsPrefix, {
            [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
            [`${bsPrefix}-${variant}`]: !!variant,
            [`${bsPrefix}-${size}`]: size,
            [`${bsPrefix}-fill`]: fill,
            [`${bsPrefix}-justified`]: justify,
            [`justify-content-${alignment}`]: alignment,
            'portlet-nav': portlet
        }),
        ...props
    }));
});
Nav.displayName = 'Nav';
Nav.propTypes = Nav_propTypes;
Nav.defaultProps = Nav_defaultProps;
/* harmony default export */ const nav_Nav = (Object.assign(Nav, {
    Item: NavItem,
    Link: nav_NavLink,
    Content: nav_NavContent,
    Addon: nav_NavAddon,
    Icon: nav_NavIcon
}));

;// CONCATENATED MODULE: ./src/modules/components/nav/NavDropdown.tsx







const NavDropdown_propTypes = {
    /**
	 * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
	 * @type {string}
	 */ id: (external_prop_types_default()).string,
    /** An `onClick` handler passed to the Toggle component */ onClick: (external_prop_types_default()).func,
    /** The content of the non-toggle Button.  */ title: (external_prop_types_default()).node.isRequired,
    /** Disables the toggle NavLink  */ disabled: (external_prop_types_default()).bool,
    /** Style the toggle NavLink as active  */ active: (external_prop_types_default()).bool,
    /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */ menuRole: (external_prop_types_default()).string,
    /** Whether to render the dropdown menu in the DOM before the first time it is shown */ renderMenuOnMount: (external_prop_types_default()).bool,
    /**
	 *  Which event when fired outside the component will cause it to be closed.
	 *
	 * _see [DropdownMenu](#menu-props) for more details_
	 */ rootCloseEvent: (external_prop_types_default()).string,
    /**
	 * Menu color variant.
	 *
	 * Omitting this will use the default light color.
	 */ menuVariant: external_prop_types_default().oneOf([
        'dark'
    ]),
    /** @ignore */ bsPrefix: (external_prop_types_default()).string,
    animated: (external_prop_types_default()).bool
};
const NavDropdown = /*#__PURE__*/ external_react_default().forwardRef(({ id , title , children , bsPrefix , className , rootCloseEvent , menuRole , disabled , active , renderMenuOnMount , menuVariant , animated , ...props }, ref)=>{
    /* NavItem has no additional logic, it's purely presentational. Can set nav item class here to support "as" */ const navItemPrefix = useBootstrapPrefix(undefined, 'nav-item');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_Dropdown, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, navItemPrefix),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(dropdown_Dropdown.Toggle, {
                id: id,
                eventKey: null,
                active: active,
                disabled: disabled,
                childBsPrefix: bsPrefix,
                as: nav_NavLink,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(dropdown_Dropdown.Menu, {
                role: menuRole,
                renderOnMount: renderMenuOnMount,
                rootCloseEvent: rootCloseEvent,
                variant: menuVariant,
                animated: animated,
                children: children
            })
        ]
    }));
});
NavDropdown.displayName = 'NavDropdown';
NavDropdown.propTypes = NavDropdown_propTypes;
/* harmony default export */ const nav_NavDropdown = (Object.assign(NavDropdown, {
    Item: dropdown_Dropdown.Item,
    ItemText: dropdown_Dropdown.ItemText,
    Divider: dropdown_Dropdown.Divider,
    Header: dropdown_Dropdown.Header
}));

;// CONCATENATED MODULE: ./src/modules/components/offcanvas/OffcanvasBody.tsx

/* harmony default export */ const OffcanvasBody = (createWithBsPrefix('offcanvas-body'));

;// CONCATENATED MODULE: ./src/modules/components/offcanvas/OffcanvasToggling.tsx








const OffcanvasToggling_propTypes = {
    /**
	 * Show the component; triggers the fade in or fade out animation
	 */ in: (external_prop_types_default()).bool,
    /**
	 * Wait until the first "enter" transition to mount the component (add it to the DOM)
	 */ mountOnEnter: (external_prop_types_default()).bool,
    /**
	 * Unmount the component (remove it from the DOM) when it is faded out
	 */ unmountOnExit: (external_prop_types_default()).bool,
    /**
	 * Run the fade in animation when the component mounts, if it is initially
	 * shown
	 */ appear: (external_prop_types_default()).bool,
    /**
	 * Duration of the fade animation in milliseconds, to ensure that finishing
	 * callbacks are fired even if the original browser transition end events are
	 * canceled
	 */ timeout: (external_prop_types_default()).number,
    /**
	 * Callback fired before the component fades in
	 */ onEnter: (external_prop_types_default()).func,
    /**
	 * Callback fired after the component starts to fade in
	 */ onEntering: (external_prop_types_default()).func,
    /**
	 * Callback fired after the has component faded in
	 */ onEntered: (external_prop_types_default()).func,
    /**
	 * Callback fired before the component fades out
	 */ onExit: (external_prop_types_default()).func,
    /**
	 * Callback fired after the component starts to fade out
	 */ onExiting: (external_prop_types_default()).func,
    /**
	 * Callback fired after the component has faded out
	 */ onExited: (external_prop_types_default()).func
};
const OffcanvasToggling_defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false
};
const transitionStyles = {
    [Transition_.ENTERING]: 'show',
    [Transition_.ENTERED]: 'show'
};
const OffcanvasToggling = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , children , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas');
    return(/*#__PURE__*/ jsx_runtime_.jsx(transition_TransitionWrapper, {
        ref: ref,
        addEndListener: transitionEndListener,
        ...props,
        childRef: children.ref,
        children: (status, innerProps)=>/*#__PURE__*/ external_react_default().cloneElement(children, {
                ...innerProps,
                className: external_classnames_default()(className, children.props.className, (status === Transition_.ENTERING || status === Transition_.EXITING) && `${bsPrefix}-toggling`, transitionStyles[status])
            })
    }));
});
OffcanvasToggling.propTypes = OffcanvasToggling_propTypes;
OffcanvasToggling.defaultProps = OffcanvasToggling_defaultProps;
OffcanvasToggling.displayName = 'OffcanvasToggling';
/* harmony default export */ const offcanvas_OffcanvasToggling = (OffcanvasToggling);

;// CONCATENATED MODULE: ./src/modules/components/offcanvas/OffcanvasHeader.tsx






const OffcanvasHeader_propTypes = {
    /**
	 * @default 'offcanvas-header'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Provides an accessible label for the close
	 * button. It is used for Assistive Technology when the label text is not
	 * readable.
	 */ closeLabel: (external_prop_types_default()).string,
    /**
	 * Sets the variant for close button.
	 */ closeVariant: external_prop_types_default().oneOf([
        'white'
    ]),
    /**
	 * Specify whether the Component should contain a close button
	 */ closeButton: (external_prop_types_default()).bool,
    /**
	 * A Callback fired when the close button is clicked. If used directly inside
	 * a Offcanvas component, the onHide will automatically be propagated up to the
	 * parent Offcanvas `onHide`.
	 */ onHide: (external_prop_types_default()).func
};
const OffcanvasHeader_defaultProps = {
    closeLabel: 'Close',
    closeButton: false
};
const OffcanvasHeader = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas-header');
    return(/*#__PURE__*/ jsx_runtime_.jsx(modal_AbstractModalHeader, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix)
    }));
});
OffcanvasHeader.displayName = 'OffcanvasHeader';
OffcanvasHeader.propTypes = OffcanvasHeader_propTypes;
OffcanvasHeader.defaultProps = OffcanvasHeader_defaultProps;
/* harmony default export */ const offcanvas_OffcanvasHeader = (OffcanvasHeader);

;// CONCATENATED MODULE: ./src/modules/components/offcanvas/OffcanvasTitle.tsx


const OffcanvasTitle_DivStyledAsH5 = divWithClassName('h5');
/* harmony default export */ const OffcanvasTitle = (createWithBsPrefix('offcanvas-title', {
    Component: OffcanvasTitle_DivStyledAsH5
}));

;// CONCATENATED MODULE: ./src/modules/components/offcanvas/Offcanvas.tsx














const Offcanvas_propTypes = {
    /**
	 * @default 'offcanvas'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Include a backdrop component.
	 */ backdrop: (external_prop_types_default()).bool,
    /**
	 * Add an optional extra class name to .offcanvas-backdrop.
	 */ backdropClassName: (external_prop_types_default()).string,
    /**
	 * Closes the offcanvas when escape key is pressed.
	 */ keyboard: (external_prop_types_default()).bool,
    /**
	 * Allow body scrolling while offcanvas is open.
	 */ scroll: (external_prop_types_default()).bool,
    /**
	 * Which side of the viewport the offcanvas will appear from.
	 */ placement: external_prop_types_default().oneOf([
        'start',
        'end',
        'top',
        'bottom'
    ]),
    /**
	 * When `true` The offcanvas will automatically shift focus to itself when it
	 * opens, and replace it to the last focused element when it closes.
	 * Generally this should never be set to false as it makes the offcanvas less
	 * accessible to assistive technologies, like screen-readers.
	 */ autoFocus: (external_prop_types_default()).bool,
    /**
	 * When `true` The offcanvas will prevent focus from leaving the offcanvas while
	 * open. Consider leaving the default value here, as it is necessary to make
	 * the offcanvas work well with assistive technologies, such as screen readers.
	 */ enforceFocus: (external_prop_types_default()).bool,
    /**
	 * When `true` The offcanvas will restore focus to previously focused element once
	 * offcanvas is hidden
	 */ restoreFocus: (external_prop_types_default()).bool,
    /**
	 * Options passed to focus function when `restoreFocus` is set to `true`
	 *
	 * @link  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Parameters
	 */ restoreFocusOptions: external_prop_types_default().shape({
        preventScroll: (external_prop_types_default()).bool
    }),
    /**
	 * When `true` The offcanvas will show itself.
	 */ show: (external_prop_types_default()).bool,
    /**
	 * A callback fired when the offcanvas is opening.
	 */ onShow: (external_prop_types_default()).func,
    /**
	 * A callback fired when the header closeButton or backdrop is
	 * clicked. Required if either are specified.
	 */ onHide: (external_prop_types_default()).func,
    /**
	 * A callback fired when the escape key, if specified in `keyboard`, is pressed.
	 */ onEscapeKeyDown: (external_prop_types_default()).func,
    /**
	 * Callback fired before the offcanvas transitions in
	 */ onEnter: (external_prop_types_default()).func,
    /**
	 * Callback fired as the offcanvas begins to transition in
	 */ onEntering: (external_prop_types_default()).func,
    /**
	 * Callback fired after the offcanvas finishes transitioning in
	 */ onEntered: (external_prop_types_default()).func,
    /**
	 * Callback fired right before the offcanvas transitions out
	 */ onExit: (external_prop_types_default()).func,
    /**
	 * Callback fired as the offcanvas begins to transition out
	 */ onExiting: (external_prop_types_default()).func,
    /**
	 * Callback fired after the offcanvas finishes transitioning out
	 */ onExited: (external_prop_types_default()).func,
    /**
	 * @private
	 */ container: (external_prop_types_default()).any,
    'aria-labelledby': (external_prop_types_default()).string
};
const Offcanvas_defaultProps = {
    show: false,
    backdrop: true,
    keyboard: true,
    scroll: false,
    autoFocus: true,
    enforceFocus: true,
    restoreFocus: true,
    placement: 'start'
};
function Offcanvas_DialogTransition(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(offcanvas_OffcanvasToggling, {
        ...props
    }));
}
function Offcanvas_BackdropTransition(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(transition_Fade, {
        ...props
    }));
}
const Offcanvas = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , children , 'aria-labelledby': ariaLabelledby , placement , /* BaseModal props */ show , backdrop , keyboard , scroll , onEscapeKeyDown , onShow , onHide , container , autoFocus , enforceFocus , restoreFocus , restoreFocusOptions , onEntered , onExit , onExiting , onEnter , onEntering , onExited , backdropClassName , manager: propsManager , ...props }, ref)=>{
    const modalManager = (0,external_react_.useRef)();
    bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas');
    const handleHide = useEventCallback_default()(()=>{
        onHide === null || onHide === void 0 ? void 0 : onHide();
    });
    const modalContext = (0,external_react_.useMemo)(()=>({
            onHide: handleHide
        })
    , [
        handleHide
    ]);
    function getModalManager() {
        if (propsManager) return propsManager;
        if (scroll) {
            // Have to use a different modal manager since the shared
            // one handles overflow.
            if (!modalManager.current) modalManager.current = new modal_BootstrapModalManager({
                handleContainerOverflow: false
            });
            return modalManager.current;
        }
        return getSharedManager();
    }
    const handleEnter = (node, ...args)=>{
        if (node) node.style.visibility = 'visible';
        onEnter === null || onEnter === void 0 ? void 0 : onEnter(node, ...args);
    };
    const handleExited = (node, ...args)=>{
        if (node) node.style.visibility = '';
        onExited === null || onExited === void 0 ? void 0 : onExited(...args);
    };
    const renderBackdrop = (0,external_react_.useCallback)((backdropProps)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            ...backdropProps,
            className: external_classnames_default()(`${bsPrefix}-backdrop`, backdropClassName)
        })
    , [
        backdropClassName,
        bsPrefix
    ]);
    const renderDialog = (dialogProps)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            role: "dialog",
            ...dialogProps,
            ...props,
            className: external_classnames_default()(className, bsPrefix, `${bsPrefix}-${placement}`),
            "aria-labelledby": ariaLabelledby,
            children: children
        })
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx(modal_ModalContext.Provider, {
        value: modalContext,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
            show: show,
            ref: ref,
            backdrop: backdrop,
            container: container,
            keyboard: keyboard,
            autoFocus: autoFocus,
            enforceFocus: enforceFocus && !scroll,
            restoreFocus: restoreFocus,
            restoreFocusOptions: restoreFocusOptions,
            onEscapeKeyDown: onEscapeKeyDown,
            onShow: onShow,
            onHide: handleHide,
            onEnter: handleEnter,
            onEntering: onEntering,
            onEntered: onEntered,
            onExit: onExit,
            onExiting: onExiting,
            onExited: handleExited,
            manager: getModalManager(),
            transition: Offcanvas_DialogTransition,
            backdropTransition: Offcanvas_BackdropTransition,
            renderBackdrop: renderBackdrop,
            renderDialog: renderDialog
        })
    }));
});
Offcanvas.displayName = 'Offcanvas';
Offcanvas.propTypes = Offcanvas_propTypes;
Offcanvas.defaultProps = Offcanvas_defaultProps;
/* harmony default export */ const offcanvas_Offcanvas = (Object.assign(Offcanvas, {
    Body: OffcanvasBody,
    Header: offcanvas_OffcanvasHeader,
    Title: OffcanvasTitle
}));

// EXTERNAL MODULE: external "@restart/ui/Overlay"
var Overlay_ = __webpack_require__(2962);
var Overlay_default = /*#__PURE__*/__webpack_require__.n(Overlay_);
// EXTERNAL MODULE: external "dom-helpers/hasClass"
var hasClass_ = __webpack_require__(7674);
var hasClass_default = /*#__PURE__*/__webpack_require__.n(hasClass_);
;// CONCATENATED MODULE: ./src/modules/components/popover/PopoverHeader.tsx

/* harmony default export */ const PopoverHeader = (createWithBsPrefix('popover-header'));

;// CONCATENATED MODULE: ./src/modules/components/popover/PopoverBody.tsx

/* harmony default export */ const PopoverBody = (createWithBsPrefix('popover-body'));

;// CONCATENATED MODULE: ./src/modules/components/helpers.ts

class BsPrefixComponent extends (external_react_default()).Component {
}
function getOverlayDirection(placement, isRTL) {
    let bsDirection = placement;
    if (placement === 'left') {
        bsDirection = isRTL ? 'end' : 'start';
    } else if (placement === 'right') {
        bsDirection = isRTL ? 'start' : 'end';
    }
    return bsDirection;
}

;// CONCATENATED MODULE: ./src/modules/components/popover/Popover.tsx









const Popover_propTypes = {
    /**
	 * @default 'popover'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * An html id attribute, necessary for accessibility
	 * @type {string}
	 * @required
	 */ id: (external_prop_types_default()).string,
    /**
	 * Sets the direction the Popover is positioned towards.
	 *
	 * > This is generally provided by the `Overlay` component positioning the popover
	 */ placement: external_prop_types_default().oneOf([
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start', 
    ]),
    /**
	 * An Overlay injected set of props for positioning the popover arrow.
	 *
	 * > This is generally provided by the `Overlay` component positioning the popover
	 */ arrowProps: external_prop_types_default().shape({
        ref: (external_prop_types_default()).any,
        style: (external_prop_types_default()).object
    }),
    /**
	 * When this prop is set, it creates a Popover with a Popover.Body inside
	 * passing the children directly to it
	 */ body: (external_prop_types_default()).bool,
    /** @private */ popper: (external_prop_types_default()).object,
    /** @private */ show: (external_prop_types_default()).bool
};
const Popover_defaultProps = {
    placement: 'right'
};
const Popover = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , placement , className , style , children , body , arrowProps , popper: _ , show: _1 , ...props }, ref)=>{
    const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'popover');
    const isRTL = useIsRTL();
    const [primaryPlacement] = (placement === null || placement === void 0 ? void 0 : placement.split('-')) || [];
    const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: ref,
        role: "tooltip",
        style: style,
        "x-placement": primaryPlacement,
        className: external_classnames_default()(className, decoratedBsPrefix, primaryPlacement && `bs-popover-${bsDirection}`),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "popover-arrow",
                ...arrowProps
            }),
            body ? /*#__PURE__*/ jsx_runtime_.jsx(PopoverBody, {
                children: children
            }) : children
        ]
    }));
});
Popover.propTypes = Popover_propTypes;
Popover.displayName = 'Popover';
Popover.defaultProps = Popover_defaultProps;
/* harmony default export */ const popover_Popover = (Object.assign(Popover, {
    Header: PopoverHeader,
    Body: PopoverBody,
    // Default popover offset.
    // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
    POPPER_OFFSET: [
        0,
        8
    ]
}));

;// CONCATENATED MODULE: ./src/modules/components/overlay/useOverlayOffset.tsx




// This is meant for internal use.
// This applies a custom offset to the overlay if it's a popover.
function useOverlayOffset() {
    const overlayRef = (0,external_react_.useRef)(null);
    const popoverClass = useBootstrapPrefix(undefined, 'popover');
    const offset = (0,external_react_.useMemo)(()=>({
            name: 'offset',
            options: {
                offset: ()=>{
                    if (overlayRef.current && hasClass_default()(overlayRef.current, popoverClass)) {
                        return popover_Popover.POPPER_OFFSET;
                    }
                    return [
                        0,
                        0
                    ];
                }
            }
        })
    , [
        popoverClass
    ]);
    return [
        overlayRef,
        [
            offset
        ]
    ];
};

;// CONCATENATED MODULE: ./src/modules/components/overlay/Overlay.tsx









const Overlay_propTypes = {
    /**
	 * A component instance, DOM node, or function that returns either.
	 * The `container` element will have the Overlay appended to it via a React portal.
	 */ container: (external_prop_types_default()).any,
    /**
	 * A component instance, DOM node, or function that returns either.
	 * The overlay will be positioned in relation to the `target`
	 */ target: (external_prop_types_default()).any,
    /**
	 * Set the visibility of the Overlay
	 */ show: (external_prop_types_default()).bool,
    /**
	 * A set of popper options and props passed directly to Popper.
	 */ popperConfig: (external_prop_types_default()).object,
    /**
	 * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
	 */ rootClose: (external_prop_types_default()).bool,
    /**
	 * Specify event for triggering a "root close" toggle.
	 */ rootCloseEvent: external_prop_types_default().oneOf([
        'click',
        'mousedown'
    ]),
    /**
	 * A callback invoked by the overlay when it wishes to be hidden. Required if
	 * `rootClose` is specified.
	 */ onHide: (external_prop_types_default()).func,
    /**
	 * Animate the entering and exiting of the Overlay. `true` will use the `<Fade>` transition,
	 * or a custom react-transition-group `<Transition>` component can be provided.
	 */ transition: (external_prop_types_default()).any,
    /**
	 * Callback fired before the Overlay transitions in
	 */ onEnter: (external_prop_types_default()).func,
    /**
	 * Callback fired as the Overlay begins to transition in
	 */ onEntering: (external_prop_types_default()).func,
    /**
	 * Callback fired after the Overlay finishes transitioning in
	 */ onEntered: (external_prop_types_default()).func,
    /**
	 * Callback fired right before the Overlay transitions out
	 */ onExit: (external_prop_types_default()).func,
    /**
	 * Callback fired as the Overlay begins to transition out
	 */ onExiting: (external_prop_types_default()).func,
    /**
	 * Callback fired after the Overlay finishes transitioning out
	 */ onExited: (external_prop_types_default()).func,
    /**
	 * The placement of the Overlay in relation to it's `target`.
	 */ placement: external_prop_types_default().oneOf([
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start', 
    ])
};
const Overlay_defaultProps = {
    rootClose: false,
    show: false,
    placement: 'top'
};
function wrapRefs(props, arrowProps) {
    const { ref  } = props;
    const { ref: aRef  } = arrowProps;
    props.ref = ref.__wrapped || (ref.__wrapped = (r)=>ref(safeFindDOMNode(r))
    );
    arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = (r)=>aRef(safeFindDOMNode(r))
    );
}
const Overlay = /*#__PURE__*/ external_react_default().forwardRef(({ children: overlay , transition =transition_Fade , popperConfig ={
} , ...outerProps }, outerRef)=>{
    const popperRef = (0,external_react_.useRef)({
    });
    const [ref2, modifiers] = useOverlayOffset();
    const mergedRef = useMergedRefs_default()(outerRef, ref2);
    const actualTransition = transition === true ? transition_Fade : transition || undefined;
    return(/*#__PURE__*/ jsx_runtime_.jsx((Overlay_default()), {
        ...outerProps,
        ref: mergedRef,
        popperConfig: {
            ...popperConfig,
            modifiers: modifiers.concat(popperConfig.modifiers || [])
        },
        transition: actualTransition,
        children: (overlayProps, { arrowProps , placement , popper: popperObj , show  })=>{
            var ref, ref1;
            wrapRefs(overlayProps, arrowProps);
            const popper = Object.assign(popperRef.current, {
                state: popperObj === null || popperObj === void 0 ? void 0 : popperObj.state,
                scheduleUpdate: popperObj === null || popperObj === void 0 ? void 0 : popperObj.update,
                placement,
                outOfBoundaries: ((ref1 = popperObj === null || popperObj === void 0 ? void 0 : (ref = popperObj.state) === null || ref === void 0 ? void 0 : ref.modifiersData.hide) === null || ref1 === void 0 ? void 0 : ref1.isReferenceHidden) || false
            });
            if (typeof overlay === 'function') return overlay({
                ...overlayProps,
                placement,
                show,
                ...!transition && show && {
                    className: 'show'
                },
                popper,
                arrowProps
            });
            return(/*#__PURE__*/ external_react_default().cloneElement(overlay, {
                ...overlayProps,
                placement,
                arrowProps,
                popper,
                className: external_classnames_default()(overlay.props.className, !transition && show && 'show'),
                style: {
                    ...overlay.props.style,
                    ...overlayProps.style
                }
            }));
        }
    }));
});
Overlay.displayName = 'Overlay';
Overlay.propTypes = Overlay_propTypes;
Overlay.defaultProps = Overlay_defaultProps;
/* harmony default export */ const overlay_Overlay = (Overlay);

// EXTERNAL MODULE: external "dom-helpers/contains"
var contains_ = __webpack_require__(6375);
var contains_default = /*#__PURE__*/__webpack_require__.n(contains_);
// EXTERNAL MODULE: external "@restart/hooks/useTimeout"
var useTimeout_ = __webpack_require__(2541);
var useTimeout_default = /*#__PURE__*/__webpack_require__.n(useTimeout_);
;// CONCATENATED MODULE: ./src/modules/components/overlay/OverlayTrigger.tsx










function normalizeDelay(delay) {
    return delay && typeof delay === 'object' ? delay : {
        show: delay,
        hide: delay
    };
}
// Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker
// moving from one child element to another.
function handleMouseOverOut(handler, args, relatedNative) {
    const [e] = args;
    const target = e.currentTarget;
    const related = e.relatedTarget || e.nativeEvent[relatedNative];
    if ((!related || related !== target) && !contains_default()(target, related)) {
        handler(...args);
    }
}
const triggerType = external_prop_types_default().oneOf([
    'click',
    'hover',
    'focus'
]);
const OverlayTrigger_propTypes = {
    children: external_prop_types_default().oneOfType([
        (external_prop_types_default()).element,
        (external_prop_types_default()).func
    ]).isRequired,
    /**
	 * Specify which action or actions trigger Overlay visibility
	 *
	 * @type {'hover' | 'click' |'focus' | Array<'hover' | 'click' |'focus'>}
	 */ trigger: external_prop_types_default().oneOfType([
        triggerType,
        external_prop_types_default().arrayOf(triggerType)
    ]),
    /**
	 * A millisecond delay amount to show and hide the Overlay once triggered
	 */ delay: external_prop_types_default().oneOfType([
        (external_prop_types_default()).number,
        external_prop_types_default().shape({
            show: (external_prop_types_default()).number,
            hide: (external_prop_types_default()).number
        }), 
    ]),
    /**
	 * The visibility of the Overlay. `show` is a _controlled_ prop so should be paired
	 * with `onToggle` to avoid breaking user interactions.
	 *
	 * Manually toggling `show` does **not** wait for `delay` to change the visibility.
	 *
	 * @controllable onToggle
	 */ show: (external_prop_types_default()).bool,
    /**
	 * The initial visibility state of the Overlay.
	 */ defaultShow: (external_prop_types_default()).bool,
    /**
	 * A callback that fires when the user triggers a change in tooltip visibility.
	 *
	 * `onToggle` is called with the desired next `show`, and generally should be passed
	 * back to the `show` prop. `onToggle` fires _after_ the configured `delay`
	 *
	 * @controllable `show`
	 */ onToggle: (external_prop_types_default()).func,
    /**
    The initial flip state of the Overlay.
   */ flip: (external_prop_types_default()).bool,
    /**
	 * An element or text to overlay next to the target.
	 */ overlay: external_prop_types_default().oneOfType([
        (external_prop_types_default()).func,
        (external_prop_types_default()).element.isRequired
    ]),
    /**
	 * A Popper.js config object passed to the the underlying popper instance.
	 */ popperConfig: (external_prop_types_default()).object,
    // Overridden props from `<Overlay>`.
    /**
	 * @private
	 */ target: external_prop_types_default().oneOf([
        null
    ]),
    /**
	 * @private
	 */ onHide: external_prop_types_default().oneOf([
        null
    ]),
    /**
	 * The placement of the Overlay in relation to it's `target`.
	 */ placement: external_prop_types_default().oneOf([
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start', 
    ])
};
const OverlayTrigger_defaultProps = {
    defaultShow: false,
    trigger: [
        'hover',
        'focus'
    ]
};
function OverlayTrigger({ trigger , overlay , children , popperConfig ={
} , show: propsShow , defaultShow =false , onToggle , delay: propsDelay , placement , flip =placement && placement.indexOf('auto') !== -1 , ...props }) {
    const triggerNodeRef = (0,external_react_.useRef)(null);
    const mergedRef = useMergedRefs_default()(triggerNodeRef, children.ref);
    const timeout = useTimeout_default()();
    const hoverStateRef = (0,external_react_.useRef)('');
    const [show, setShow] = (0,external_uncontrollable_.useUncontrolledProp)(propsShow, defaultShow, onToggle);
    const delay = normalizeDelay(propsDelay);
    const { onFocus , onBlur , onClick  } = typeof children !== 'function' ? external_react_default().Children.only(children).props : {
    };
    const attachRef = (r)=>{
        mergedRef(safeFindDOMNode(r));
    };
    const handleShow = (0,external_react_.useCallback)(()=>{
        timeout.clear();
        hoverStateRef.current = 'show';
        if (!delay.show) {
            setShow(true);
            return;
        }
        timeout.set(()=>{
            if (hoverStateRef.current === 'show') setShow(true);
        }, delay.show);
    }, [
        delay.show,
        setShow,
        timeout
    ]);
    const handleHide = (0,external_react_.useCallback)(()=>{
        timeout.clear();
        hoverStateRef.current = 'hide';
        if (!delay.hide) {
            setShow(false);
            return;
        }
        timeout.set(()=>{
            if (hoverStateRef.current === 'hide') setShow(false);
        }, delay.hide);
    }, [
        delay.hide,
        setShow,
        timeout
    ]);
    const handleFocus = (0,external_react_.useCallback)((...args)=>{
        handleShow();
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(...args);
    }, [
        handleShow,
        onFocus
    ]);
    const handleBlur = (0,external_react_.useCallback)((...args)=>{
        handleHide();
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(...args);
    }, [
        handleHide,
        onBlur
    ]);
    const handleClick = (0,external_react_.useCallback)((...args)=>{
        setShow(!show);
        onClick === null || onClick === void 0 ? void 0 : onClick(...args);
    }, [
        onClick,
        setShow,
        show
    ]);
    const handleMouseOver = (0,external_react_.useCallback)((...args)=>{
        handleMouseOverOut(handleShow, args, 'fromElement');
    }, [
        handleShow
    ]);
    const handleMouseOut = (0,external_react_.useCallback)((...args)=>{
        handleMouseOverOut(handleHide, args, 'toElement');
    }, [
        handleHide
    ]);
    const triggers = trigger == null ? [] : [].concat(trigger);
    const triggerProps = {
        ref: attachRef
    };
    if (triggers.indexOf('click') !== -1) {
        triggerProps.onClick = handleClick;
    }
    if (triggers.indexOf('focus') !== -1) {
        triggerProps.onFocus = handleFocus;
        triggerProps.onBlur = handleBlur;
    }
    if (triggers.indexOf('hover') !== -1) {
        external_warning_default()(triggers.length > 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibility of the overlay to just mouse users. Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.');
        triggerProps.onMouseOver = handleMouseOver;
        triggerProps.onMouseOut = handleMouseOut;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            typeof children === 'function' ? children(triggerProps) : /*#__PURE__*/ (0,external_react_.cloneElement)(children, triggerProps),
            /*#__PURE__*/ jsx_runtime_.jsx(overlay_Overlay, {
                ...props,
                show: show,
                onHide: handleHide,
                flip: flip,
                placement: placement,
                popperConfig: popperConfig,
                target: triggerNodeRef.current,
                children: overlay
            })
        ]
    }));
}
OverlayTrigger.propTypes = OverlayTrigger_propTypes;
OverlayTrigger.defaultProps = OverlayTrigger_defaultProps;
/* harmony default export */ const overlay_OverlayTrigger = ((/* unused pure expression or super */ null && (OverlayTrigger)));

;// CONCATENATED MODULE: ./src/modules/components/pagination/PageItem.tsx

/* eslint-disable react/no-multi-comp */ 



const PageItem_propTypes = {
    /** Disables the PageItem */ disabled: (external_prop_types_default()).bool,
    /** Styles PageItem as active, and renders a `<span>` instead of an `<a>`. */ active: (external_prop_types_default()).bool,
    /** An accessible label indicating the active state.. */ activeLabel: (external_prop_types_default()).string,
    /** A callback function for when this component is clicked */ onClick: (external_prop_types_default()).func
};
const PageItem_defaultProps = {
    active: false,
    disabled: false,
    activeLabel: '(current)'
};
const PageItem = /*#__PURE__*/ external_react_default().forwardRef(({ active , disabled , className , style , activeLabel , children , ...props }, ref)=>{
    const Component = active || disabled ? 'span' : (Anchor_default());
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        ref: ref,
        style: style,
        className: external_classnames_default()(className, 'page-item', {
            active,
            disabled
        }),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component, {
            className: "page-link",
            disabled: disabled,
            ...props,
            children: [
                children,
                active && activeLabel && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "visually-hidden",
                    children: activeLabel
                })
            ]
        })
    }));
});
PageItem.propTypes = PageItem_propTypes;
PageItem.defaultProps = PageItem_defaultProps;
PageItem.displayName = 'PageItem';
/* harmony default export */ const pagination_PageItem = (PageItem);
function createButton(name, defaultValue, label = name) {
    function Button({ children , ...props }) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(PageItem, {
            ...props,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    "aria-hidden": "true",
                    children: children || defaultValue
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "visually-hidden",
                    children: label
                })
            ]
        }));
    }
    Button.displayName = name;
    return Button;
}
const First = createButton('First', '\xab');
const Prev = createButton('Prev', '‹', 'Previous');
const Ellipsis = createButton('Ellipsis', '…', 'More');
const Next = createButton('Next', '›');
const Last = createButton('Last', '\xbb');

;// CONCATENATED MODULE: ./src/modules/components/pagination/Pagination.tsx






const Pagination_propTypes = {
    /**
	 * @default 'pagination'
	 * */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Set's the size of all PageItems.
	 *
	 * @type {('sm'|'lg')}
	 */ size: external_prop_types_default().oneOf([
        'sm',
        'lg'
    ])
};
/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */ const Pagination = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , size , ...props }, ref)=>{
    const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'pagination');
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, decoratedBsPrefix, size && `${decoratedBsPrefix}-${size}`)
    }));
});
Pagination.propTypes = Pagination_propTypes;
Pagination.displayName = 'Pagination';
/* harmony default export */ const pagination_Pagination = (Object.assign(Pagination, {
    First: First,
    Prev: Prev,
    Ellipsis: Ellipsis,
    Item: pagination_PageItem,
    Next: Next,
    Last: Last
}));

;// CONCATENATED MODULE: ./src/modules/components/placeholder/usePlaceholder.ts



function usePlaceholder({ animation , bg , bsPrefix , size , ...props }) {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'placeholder');
    const [{ className , ...colProps }] = useCol(props);
    return {
        ...colProps,
        className: external_classnames_default()(className, animation ? `${bsPrefix}-${animation}` : bsPrefix, size && `${bsPrefix}-${size}`, bg && `bg-${bg}`)
    };
};

;// CONCATENATED MODULE: ./src/modules/components/placeholder/PlaceholderButton.tsx





const PlaceholderButton_propTypes = {
    /**
	 * @default 'placeholder'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Changes the animation of the placeholder.
	 */ animation: external_prop_types_default().oneOf([
        'glow',
        'wave'
    ]),
    size: external_prop_types_default().oneOf([
        'xs',
        'sm',
        'lg'
    ]),
    /**
	 * Button variant.
	 */ variant: (external_prop_types_default()).string
};
const PlaceholderButton = /*#__PURE__*/ external_react_default().forwardRef((props, ref)=>{
    const placeholderProps = usePlaceholder(props);
    return(/*#__PURE__*/ jsx_runtime_.jsx(button_Button, {
        ...placeholderProps,
        ref: ref,
        disabled: true,
        tabIndex: -1
    }));
});
PlaceholderButton.displayName = 'PlaceholderButton';
PlaceholderButton.propTypes = PlaceholderButton_propTypes;
/* harmony default export */ const placeholder_PlaceholderButton = (PlaceholderButton);

;// CONCATENATED MODULE: ./src/modules/components/placeholder/Placeholder.tsx





const Placeholder_propTypes = {
    /**
	 * @default 'placeholder'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Changes the animation of the placeholder.
	 *
	 * @type ('glow'|'wave')
	 */ animation: (external_prop_types_default()).string,
    /**
	 * Change the background color of the placeholder.
	 *
	 * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark')}
	 */ bg: (external_prop_types_default()).string,
    /**
	 * Component size variations.
	 *
	 * @type ('xs'|'sm'|'lg')
	 */ size: (external_prop_types_default()).string
};
const Placeholder = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'span' , ...props }, ref)=>{
    const placeholderProps = usePlaceholder(props);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...placeholderProps,
        ref: ref
    }));
});
Placeholder.displayName = 'Placeholder';
Placeholder.propTypes = Placeholder_propTypes;
/* harmony default export */ const placeholder_Placeholder = (Object.assign(Placeholder, {
    Button: placeholder_PlaceholderButton
}));

;// CONCATENATED MODULE: ./src/modules/components/portlet/PortletAddon.tsx

const PortletAddon = createWithBsPrefix('portlet-addon', {
    Component: 'div'
});
/* harmony default export */ const portlet_PortletAddon = (PortletAddon);

;// CONCATENATED MODULE: ./src/modules/components/portlet/PortletHeader.tsx





const PortletHeader_propTypes = {
    bordered: (external_prop_types_default()).bool
};
const PortletHeader = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , bordered , ...props }, ref)=>{
    const classNamePrefix = useBootstrapPrefix(bsPrefix, 'portlet-header');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, classNamePrefix, bordered && `${classNamePrefix}-bordered`)
    }));
});
PortletHeader.propTypes = PortletHeader_propTypes;
PortletHeader.displayName = 'PortletHeader';
/* harmony default export */ const portlet_PortletHeader = (PortletHeader);

;// CONCATENATED MODULE: ./src/modules/components/portlet/PortletFooter.tsx





const PortletFooter_propTypes = {
    bordered: (external_prop_types_default()).bool,
    align: (external_prop_types_default()).string
};
const PortletFooter = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , bordered , align , ...props }, ref)=>{
    const classNamePrefix = useBootstrapPrefix(bsPrefix, 'portlet-footer');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, classNamePrefix, {
            [`${classNamePrefix}-bordered`]: bordered,
            [`text-${align}`]: align
        })
    }));
});
PortletFooter.propTypes = PortletFooter_propTypes;
PortletFooter.displayName = 'PortletFooter';
/* harmony default export */ const portlet_PortletFooter = (PortletFooter);

;// CONCATENATED MODULE: ./src/modules/components/portlet/PortletTitle.tsx

const PortletTitle = createWithBsPrefix('portlet-title', {
    Component: 'h3'
});
/* harmony default export */ const portlet_PortletTitle = (PortletTitle);

;// CONCATENATED MODULE: ./src/modules/components/portlet/PortletBody.tsx

const PortletBody = createWithBsPrefix('portlet-body', {
    Component: 'div'
});
/* harmony default export */ const portlet_PortletBody = (PortletBody);

;// CONCATENATED MODULE: ./src/modules/components/portlet/PortletIcon.tsx

const PortletIcon = createWithBsPrefix('portlet-icon', {
    Component: 'div'
});
/* harmony default export */ const portlet_PortletIcon = (PortletIcon);

;// CONCATENATED MODULE: ./src/modules/components/portlet/Portlet.tsx











const Portlet_propTypes = {
    as: (external_prop_types_default()).elementType,
    variant: (external_prop_types_default()).string,
    scroll: (external_prop_types_default()).bool,
    noMargin: (external_prop_types_default()).bool
};
const Portlet = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , variant , scroll , noMargin , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'portlet');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, variant && `${bsPrefix}-${variant}`, scroll && `${bsPrefix}-scroll`, noMargin && 'mb-0')
    }));
});
Portlet.propTypes = Portlet_propTypes;
Portlet.displayName = 'Portlet';
/* harmony default export */ const portlet_Portlet = (Object.assign(Portlet, {
    Header: portlet_PortletHeader,
    Footer: portlet_PortletFooter,
    Addon: portlet_PortletAddon,
    Title: portlet_PortletTitle,
    Icon: portlet_PortletIcon,
    Body: portlet_PortletBody
}));

;// CONCATENATED MODULE: ./src/modules/components/progress/ProgressBar.tsx







const ROUND_PRECISION = 1000;
/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */ function onlyProgressBar(props, propName, componentName) {
    const children = props[propName];
    if (!children) {
        return null;
    }
    let error = null;
    external_react_default().Children.forEach(children, (child)=>{
        if (error) {
            return;
        }
        /**
		 * Compare types in a way that works with libraries that patch and proxy
		 * components like react-hot-loader.
		 *
		 * see https://github.com/gaearon/react-hot-loader#checking-element-types
		 */ const element = /*#__PURE__*/ jsx_runtime_.jsx(ProgressBar, {
        });
        if (child.type === element.type) return;
        const childType = child.type;
        const childIdentifier = /*#__PURE__*/ external_react_default().isValidElement(child) ? childType.displayName || childType.name || childType : child;
        error = new Error(`Children of ${componentName} can contain only ProgressBar ` + `components. Found ${childIdentifier}.`);
    });
    return error;
}
const ProgressBar_propTypes = {
    /**
	 * Minimum value progress can begin from
	 */ min: (external_prop_types_default()).number,
    /**
	 * Current value of progress
	 */ now: (external_prop_types_default()).number,
    /**
	 * Maximum value progress can reach
	 */ max: (external_prop_types_default()).number,
    /**
	 * Show label that represents visual percentage.
	 * EG. 60%
	 */ label: (external_prop_types_default()).node,
    /**
	 * Hide's the label visually.
	 */ visuallyHidden: (external_prop_types_default()).bool,
    /**
	 * Uses a gradient to create a striped effect.
	 */ striped: (external_prop_types_default()).bool,
    /**
	 * Animate's the stripes from right to left
	 */ animated: (external_prop_types_default()).bool,
    /**
	 * @private
	 * @default 'progress-bar'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Sets the background class of the progress bar.
	 *
	 * @type ('success'|'danger'|'warning'|'info')
	 */ variant: (external_prop_types_default()).any,
    /**
	 * Child elements (only allows elements of type <ProgressBar />)
	 */ children: onlyProgressBar,
    /**
	 * @private
	 */ isChild: (external_prop_types_default()).bool
};
const ProgressBar_defaultProps = {
    min: 0,
    max: 100,
    animated: false,
    isChild: false,
    visuallyHidden: false,
    striped: false
};
function getPercentage(now = 0, min = 0, max = 100) {
    const percentage = (now - min) / (max - min) * 100;
    return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}
function renderProgressBar({ min , now , max , label , visuallyHidden , striped , animated , className , style , variant , bsPrefix , ...props }, ref) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        ...props,
        role: "progressbar",
        className: external_classnames_default()(className, `${bsPrefix}-bar`, {
            [`bg-${variant}`]: variant,
            [`${bsPrefix}-bar-animated`]: animated,
            [`${bsPrefix}-bar-striped`]: animated || striped
        }),
        style: {
            width: `${getPercentage(now, min, max)}%`,
            ...style
        },
        "aria-valuenow": now,
        "aria-valuemin": min,
        "aria-valuemax": max,
        children: visuallyHidden ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "visually-hidden",
            children: label
        }) : label
    }));
}
renderProgressBar.propTypes = ProgressBar_propTypes;
const ProgressBar = /*#__PURE__*/ external_react_default().forwardRef(({ isChild , ...props }, ref)=>{
    props.bsPrefix = useBootstrapPrefix(props.bsPrefix, 'progress');
    if (isChild) {
        return renderProgressBar(props, ref);
    }
    const { min , now , max , label , visuallyHidden , striped , animated , size , bsPrefix , variant , className , children , ...wrapperProps } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        ...wrapperProps,
        className: external_classnames_default()(className, bsPrefix, size && `${bsPrefix}-${size}`),
        children: children ? map(children, (child)=>/*#__PURE__*/ (0,external_react_.cloneElement)(child, {
                isChild: true
            })
        ) : renderProgressBar({
            min,
            now,
            max,
            label,
            visuallyHidden,
            striped,
            animated,
            bsPrefix,
            variant
        }, ref)
    }));
});
ProgressBar.displayName = 'ProgressBar';
ProgressBar.propTypes = ProgressBar_propTypes;
ProgressBar.defaultProps = ProgressBar_defaultProps;
/* harmony default export */ const progress_ProgressBar = (ProgressBar);

;// CONCATENATED MODULE: ./src/modules/components/ratio/Ratio.tsx





const Ratio_propTypes = {
    /**
	 * @default 'ratio'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * This component requires a single child element
	 */ children: (external_prop_types_default()).element.isRequired,
    /**
	 * Set the aspect ratio of the embed. A fraction or a percentage can also
	 * be used to create custom aspect ratios.
	 */ aspectRatio: external_prop_types_default().oneOfType([
        (external_prop_types_default()).number,
        (external_prop_types_default()).string
    ])
};
const Ratio_defaultProps = {
    aspectRatio: '1x1'
};
function toPercent(num) {
    if (num <= 0 || num > 100) return '100%';
    if (num < 1) return `${num * 100}%`;
    return `${num}%`;
}
const Ratio = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , children , aspectRatio , style , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'ratio');
    const isCustomRatio = typeof aspectRatio === 'number';
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        ...props,
        style: {
            ...style,
            ...isCustomRatio && {
                '--bs-aspect-ratio': toPercent(aspectRatio)
            }
        },
        className: external_classnames_default()(bsPrefix, className, !isCustomRatio && `${bsPrefix}-${aspectRatio}`),
        children: external_react_default().Children.only(children)
    }));
});
Ratio.propTypes = Ratio_propTypes;
Ratio.defaultProps = Ratio_defaultProps;
/* harmony default export */ const ratio_Ratio = ((/* unused pure expression or super */ null && (Ratio)));

;// CONCATENATED MODULE: ./src/modules/components/grid/Row.tsx





const Row_DEVICE_SIZES = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs'
];
const rowColWidth = external_prop_types_default().oneOfType([
    (external_prop_types_default()).number,
    (external_prop_types_default()).string
]);
const rowColumns = external_prop_types_default().oneOfType([
    rowColWidth,
    external_prop_types_default().shape({
        cols: rowColWidth
    }), 
]);
const Row_propTypes = {
    /**
	 * @default 'row'
	 */ bsPrefix: (external_prop_types_default()).string,
    as: (external_prop_types_default()).elementType,
    /**
	 * The number of columns that will fit next to each other on extra small devices (<576px).
	 * Use `auto` to give columns their natural widths.
	 *
	 * @type {(number|'auto'|{ cols: number|'auto' })}
	 */ xs: rowColumns,
    /**
	 * The number of columns that will fit next to each other on small devices (≥576px).
	 * Use `auto` to give columns their natural widths.
	 *
	 * @type {(number|'auto'|{ cols: number|'auto' })}
	 */ sm: rowColumns,
    /**
	 * The number of columns that will fit next to each other on medium devices (≥768px).
	 * Use `auto` to give columns their natural widths.
	 *
	 * @type {(number|'auto'|{ cols: number|'auto' })}
	 */ md: rowColumns,
    /**
	 * The number of columns that will fit next to each other on large devices (≥992px).
	 * Use `auto` to give columns their natural widths.
	 *
	 * @type {(number|'auto'|{ cols: number|'auto' })}
	 */ lg: rowColumns,
    /**
	 * The number of columns that will fit next to each other on extra large devices (≥1200px).
	 * Use `auto` to give columns their natural widths.
	 *
	 * @type {(number|'auto'|{ cols: number|'auto' })}
	 */ xl: rowColumns,
    /**
	 * The number of columns that will fit next to each other on extra extra large devices (≥1400px).
	 * Use `auto` to give columns their natural widths.
	 *
	 * @type {(number|'auto'|{ cols: number|'auto' })}
	 */ xxl: rowColumns,
    portletFill: external_prop_types_default().oneOfType([
        (external_prop_types_default()).bool,
        (external_prop_types_default()).string
    ])
};
const Row = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , portletFill , ...props }, ref)=>{
    const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'row');
    const sizePrefix = `${decoratedBsPrefix}-cols`;
    const classes = [];
    Row_DEVICE_SIZES.forEach((brkPoint)=>{
        const propValue = props[brkPoint];
        delete props[brkPoint];
        let cols;
        if (propValue != null && typeof propValue === 'object') {
            ({ cols  } = propValue);
        } else {
            cols = propValue;
        }
        const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
        if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
    });
    let portletFillClass = null;
    if (typeof portletFill === 'string') {
        portletFillClass = `portlet-row-fill-${portletFill}`;
    } else if (typeof portletFill === 'boolean') {
        portletFillClass = 'portlet-row-fill';
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, decoratedBsPrefix, portletFillClass, ...classes)
    }));
});
Row.displayName = 'Row';
Row.propTypes = Row_propTypes;
/* harmony default export */ const grid_Row = (Row);

;// CONCATENATED MODULE: ./src/modules/components/spinner/Spinner.tsx





const Spinner_propTypes = {
    /**
	 * @default 'spinner'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * The visual color style of the spinner
	 *
	 * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark')}
	 */ variant: (external_prop_types_default()).string,
    /**
	 * Changes the animation style of the spinner.
	 *
	 * @type {('border'|'grow')}
	 * @default true
	 */ animation: external_prop_types_default().oneOf([
        'border',
        'grow'
    ]).isRequired,
    /**
	 * Component size variations.
	 *
	 * @type {('sm')}
	 */ size: (external_prop_types_default()).string,
    /**
	 * This component may be used to wrap child elements or components.
	 */ children: (external_prop_types_default()).element,
    /**
	 * An ARIA accessible role applied to the Menu component. This should generally be set to 'status'
	 */ role: (external_prop_types_default()).string,
    /**
	 * @default div
	 */ as: (external_prop_types_default()).elementType
};
const Spinner = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , variant , animation , size , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'spinner');
    const bsSpinnerPrefix = `${bsPrefix}-${animation}`;
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsSpinnerPrefix, size && `${bsSpinnerPrefix}-${size}`, variant && `text-${variant}`)
    }));
});
Spinner.propTypes = Spinner_propTypes;
Spinner.displayName = 'Spinner';
/* harmony default export */ const spinner_Spinner = ((/* unused pure expression or super */ null && (Spinner)));

;// CONCATENATED MODULE: ./src/modules/components/dropdown/SplitButton.tsx







const SplitButton_propTypes = {
    /**
	 * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
	 * @type {string}
	 * @required
	 */ id: (external_prop_types_default()).string,
    /**
	 * Accessible label for the toggle; the value of `title` if not specified.
	 */ toggleLabel: (external_prop_types_default()).string,
    /** An `href` passed to the non-toggle Button */ href: (external_prop_types_default()).string,
    /** An anchor `target` passed to the non-toggle Button */ target: (external_prop_types_default()).string,
    /** An `onClick` handler passed to the non-toggle Button */ onClick: (external_prop_types_default()).func,
    /** The content of the non-toggle Button.  */ title: (external_prop_types_default()).node.isRequired,
    /** A `type` passed to the non-toggle Button */ type: (external_prop_types_default()).string,
    /** Disables both Buttons  */ disabled: (external_prop_types_default()).bool,
    /**
	 * Aligns the dropdown menu.
	 *
	 * _see [DropdownMenu](#dropdown-menu-props) for more details_
	 *
	 * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
	 */ align: alignPropType,
    /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */ menuRole: (external_prop_types_default()).string,
    /** Whether to render the dropdown menu in the DOM before the first time it is shown */ renderMenuOnMount: (external_prop_types_default()).bool,
    /**
	 *  Which event when fired outside the component will cause it to be closed.
	 *
	 * _see [DropdownMenu](#dropdown-menu-props) for more details_
	 */ rootCloseEvent: (external_prop_types_default()).string,
    /** @ignore */ bsPrefix: (external_prop_types_default()).string,
    /** @ignore */ variant: (external_prop_types_default()).string,
    /** @ignore */ size: (external_prop_types_default()).string
};
const SplitButton_defaultProps = {
    toggleLabel: 'Toggle dropdown',
    type: 'button'
};
/**
 * A convenience component for simple or general use split button dropdowns. Renders a
 * `ButtonGroup` containing a `Button` and a `Button` toggle for the `Dropdown`. All `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of [`Dropdown`'s
 * props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._
 * The Button `variant`, `size` and `bsPrefix` props are passed to the button and toggle,
 * and menu-related props are passed to the `Dropdown.Menu`
 */ const SplitButton = /*#__PURE__*/ external_react_default().forwardRef(({ id , bsPrefix , size , variant , title , type , toggleLabel , children , onClick , href , target , menuRole , renderMenuOnMount , rootCloseEvent , ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_Dropdown, {
        ref: ref,
        ...props,
        as: button_ButtonGroup,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(button_Button, {
                size: size,
                variant: variant,
                disabled: props.disabled,
                bsPrefix: bsPrefix,
                href: href,
                target: target,
                onClick: onClick,
                type: type,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(dropdown_Dropdown.Toggle, {
                split: true,
                id: id,
                size: size,
                variant: variant,
                disabled: props.disabled,
                childBsPrefix: bsPrefix,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "visually-hidden",
                    children: toggleLabel
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(dropdown_Dropdown.Menu, {
                role: menuRole,
                renderOnMount: renderMenuOnMount,
                rootCloseEvent: rootCloseEvent,
                children: children
            })
        ]
    })
);
SplitButton.propTypes = SplitButton_propTypes;
SplitButton.defaultProps = SplitButton_defaultProps;
SplitButton.displayName = 'SplitButton';
/* harmony default export */ const dropdown_SplitButton = ((/* unused pure expression or super */ null && (SplitButton)));

// EXTERNAL MODULE: external "@restart/ui/ssr"
var ssr_ = __webpack_require__(2035);
;// CONCATENATED MODULE: ./src/modules/components/_ssr/SSRProvider.ts

/* harmony default export */ const SSRProvider = (ssr_.SSRProvider);

;// CONCATENATED MODULE: ./src/modules/components/_utilities/createUtilityClasses.ts

function responsivePropType(propType) {
    return external_prop_types_default().oneOfType([
        propType,
        external_prop_types_default().shape({
            xs: propType,
            sm: propType,
            md: propType,
            lg: propType,
            xl: propType,
            xxl: propType
        }), 
    ]);
}
const createUtilityClasses_DEVICE_SIZES = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs'
];
function createUtilityClassName(utilityValues) {
    const classes = [];
    Object.entries(utilityValues).forEach(([utilName, utilValue])=>{
        if (utilValue != null) {
            if (typeof utilValue === 'object') {
                createUtilityClasses_DEVICE_SIZES.forEach((brkPoint)=>{
                    const bpValue = utilValue[brkPoint];
                    if (bpValue != null) {
                        const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
                        classes.push(`${utilName}${infix}-${bpValue}`);
                    }
                });
            } else {
                classes.push(`${utilName}-${utilValue}`);
            }
        }
    });
    return classes;
};

;// CONCATENATED MODULE: ./src/modules/components/grid/Stack.tsx






const Stack_propTypes = {
    /**
	 * Change the underlying component CSS base class name and modifier class names prefix.
	 * **This is an escape hatch** for working with heavily customized bootstrap css.
	 *
	 * Defaults to `hstack` if direction is `horizontal` or `vstack` if direction
	 * is `vertical`.
	 *
	 * @default 'hstack | vstack'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Sets the spacing between each item. Valid values are `0-5`.
	 */ gap: responsivePropType((external_prop_types_default()).number)
};
const Stack = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , direction , gap , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, direction === 'horizontal' ? 'hstack' : 'vstack');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...props,
        ref: ref,
        className: external_classnames_default()(className, bsPrefix, ...createUtilityClassName({
            gap
        }))
    }));
});
Stack.displayName = 'Stack';
Stack.propTypes = Stack_propTypes;
/* harmony default export */ const grid_Stack = ((/* unused pure expression or super */ null && (Stack)));

// EXTERNAL MODULE: external "@restart/ui/Tabs"
var Tabs_ = __webpack_require__(4636);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);
;// CONCATENATED MODULE: ./src/modules/components/tab/getTabTransitionComponent.ts

function getTabTransitionComponent(transition) {
    if (typeof transition === 'boolean') {
        return transition ? transition_Fade : undefined;
    }
    return transition;
};

;// CONCATENATED MODULE: ./src/modules/components/tab/TabContainer.tsx





const TabContainer_propTypes = {
    /**
	 * HTML id attribute, required if no `generateChildId` prop
	 * is specified.
	 *
	 * @type {string}
	 */ id: (external_prop_types_default()).string,
    /**
	 * Sets a default animation strategy for all children `<TabPane>`s.
	 * Defaults to `<Fade>` animation; else, use `false` to disable, or a
	 * custom react-transition-group `<Transition/>` component.
	 *
	 * @type {{Transition | false}}
	 * @default {Fade}
	 */ transition: external_prop_types_default().oneOfType([
        external_prop_types_default().oneOf([
            false
        ]),
        (external_prop_types_default()).elementType
    ]),
    /**
	 * Wait until the first "enter" transition to mount tabs (add them to the DOM)
	 */ mountOnEnter: (external_prop_types_default()).bool,
    /**
	 * Unmount tabs (remove it from the DOM) when they are no longer visible
	 */ unmountOnExit: (external_prop_types_default()).bool,
    /**
	 * A function that takes an `eventKey` and `type` and returns a unique id for
	 * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
	 * function, meaning it should always return the _same_ id for the same set
	 * of inputs. The default value requires that an `id` to be set for the
	 * `<TabContainer>`.
	 *
	 * The `type` argument will either be `"tab"` or `"pane"`.
	 *
	 * @defaultValue (eventKey, type) => `${props.id}-${type}-${eventKey}`
	 */ generateChildId: (external_prop_types_default()).func,
    /**
	 * A callback fired when a tab is selected.
	 *
	 * @controllable activeKey
	 */ onSelect: (external_prop_types_default()).func,
    /**
	 * The `eventKey` of the currently active tab.
	 *
	 * @controllable onSelect
	 */ activeKey: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        (external_prop_types_default()).number
    ])
};
const TabContainer = ({ transition , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
        ...props,
        transition: getTabTransitionComponent(transition)
    })
;
TabContainer.propTypes = TabContainer_propTypes;
TabContainer.displayName = 'TabContainer';
/* harmony default export */ const tab_TabContainer = (TabContainer);

;// CONCATENATED MODULE: ./src/modules/components/tab/TabContent.tsx

/* harmony default export */ const TabContent = (createWithBsPrefix('tab-content'));

// EXTERNAL MODULE: external "@restart/ui/NoopTransition"
var NoopTransition_ = __webpack_require__(6372);
var NoopTransition_default = /*#__PURE__*/__webpack_require__.n(NoopTransition_);
// EXTERNAL MODULE: external "@restart/ui/TabContext"
var TabContext_ = __webpack_require__(4515);
var TabContext_default = /*#__PURE__*/__webpack_require__.n(TabContext_);
// EXTERNAL MODULE: external "@restart/ui/TabPanel"
var TabPanel_ = __webpack_require__(7753);
;// CONCATENATED MODULE: ./src/modules/components/tab/TabPane.tsx










const TabPane_propTypes = {
    /**
	 * @default 'tab-pane'
	 */ bsPrefix: (external_prop_types_default()).string,
    as: (external_prop_types_default()).elementType,
    /**
	 * A key that associates the `TabPane` with it's controlling `NavLink`.
	 */ eventKey: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        (external_prop_types_default()).number
    ]),
    /**
	 * Toggles the active state of the TabPane, this is generally controlled by a
	 * TabContainer.
	 */ active: (external_prop_types_default()).bool,
    /**
	 * Use animation when showing or hiding `<TabPane>`s. Defaults to `<Fade>`
	 * animation, else use `false` to disable or a react-transition-group
	 * `<Transition/>` component.
	 */ transition: external_prop_types_default().oneOfType([
        (external_prop_types_default()).bool,
        (external_prop_types_default()).elementType
    ]),
    /**
	 * Transition onEnter callback when animation is not `false`
	 */ onEnter: (external_prop_types_default()).func,
    /**
	 * Transition onEntering callback when animation is not `false`
	 */ onEntering: (external_prop_types_default()).func,
    /**
	 * Transition onEntered callback when animation is not `false`
	 */ onEntered: (external_prop_types_default()).func,
    /**
	 * Transition onExit callback when animation is not `false`
	 */ onExit: (external_prop_types_default()).func,
    /**
	 * Transition onExiting callback when animation is not `false`
	 */ onExiting: (external_prop_types_default()).func,
    /**
	 * Transition onExited callback when animation is not `false`
	 */ onExited: (external_prop_types_default()).func,
    /**
	 * Wait until the first "enter" transition to mount the tab (add it to the DOM)
	 */ mountOnEnter: (external_prop_types_default()).bool,
    /**
	 * Unmount the tab (remove it from the DOM) when it is no longer visible
	 */ unmountOnExit: (external_prop_types_default()).bool,
    /** @ignore * */ id: (external_prop_types_default()).string,
    /** @ignore * */ 'aria-labelledby': (external_prop_types_default()).string
};
const TabPane = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , transition , ...props }, ref)=>{
    const [{ className , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div' , ...rest }, { isActive , onEnter , onEntering , onEntered , onExit , onExiting , onExited , mountOnEnter , unmountOnExit , transition: Transition = (NoopTransition_default()) ,  }, ] = (0,TabPanel_.useTabPanel)({
        ...props,
        transition: getTabTransitionComponent(transition)
    });
    const prefix = useBootstrapPrefix(bsPrefix, 'tab-pane');
    delete rest['id'];
    delete rest['aria-labelledby'];
    // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
    // conflict with the top level one.
    return(/*#__PURE__*/ jsx_runtime_.jsx((TabContext_default()).Provider, {
        value: null,
        children: /*#__PURE__*/ jsx_runtime_.jsx((SelectableContext_default()).Provider, {
            value: null,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Transition, {
                in: isActive,
                onEnter: onEnter,
                onEntering: onEntering,
                onEntered: onEntered,
                onExit: onExit,
                onExiting: onExiting,
                onExited: onExited,
                mountOnEnter: mountOnEnter,
                unmountOnExit: unmountOnExit,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...rest,
                    ref: ref,
                    className: external_classnames_default()(className, prefix, isActive && 'active')
                })
            })
        })
    }));
});
TabPane.displayName = 'TabPane';
TabPane.propTypes = TabPane_propTypes;
/* harmony default export */ const tab_TabPane = (TabPane);

;// CONCATENATED MODULE: ./src/modules/components/tab/Tab.tsx






/* eslint-disable react/no-unused-prop-types */ const Tab_propTypes = {
    eventKey: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        (external_prop_types_default()).number
    ]),
    /**
	 * Content for the tab title.
	 */ title: (external_prop_types_default()).node.isRequired,
    /**
	 * The disabled state of the tab.
	 */ disabled: (external_prop_types_default()).bool,
    /**
	 * Class to pass to the underlying nav link.
	 */ tabClassName: (external_prop_types_default()).string
};
const Tab = ()=>{
    throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly');
    // Needed otherwise docs error out.
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    }));
};
Tab.propTypes = Tab_propTypes;
/* harmony default export */ const tab_Tab = (Object.assign(Tab, {
    Container: tab_TabContainer,
    Content: TabContent,
    Pane: tab_TabPane
}));

;// CONCATENATED MODULE: ./src/modules/components/table/Table.tsx





const Table_propTypes = {
    /**
	 * @default 'table'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * Adds zebra-striping to any table row within the `<tbody>`.
	 */ striped: (external_prop_types_default()).bool,
    /**
	 * Adds borders on all sides of the table and cells.
	 */ bordered: (external_prop_types_default()).bool,
    /**
	 * Removes all borders on the table and cells, including table header.
	 */ borderless: (external_prop_types_default()).bool,
    /**
	 * Enable a hover state on table rows within a `<tbody>`.
	 */ hover: (external_prop_types_default()).bool,
    /**
	 * Make tables more compact by cutting cell padding in half by setting
	 * size as `sm`.
	 */ size: (external_prop_types_default()).string,
    /**
	 * Invert the colors of the table — with light text on dark backgrounds
	 * by setting variant as `dark`.
	 */ variant: (external_prop_types_default()).string,
    /**
	 * Responsive tables allow tables to be scrolled horizontally with ease.
	 * Across every breakpoint, use `responsive` for horizontally
	 * scrolling tables. Responsive tables are wrapped automatically in a `div`.
	 * Use `responsive="sm"`, `responsive="md"`, `responsive="lg"`, or
	 * `responsive="xl"` as needed to create responsive tables up to
	 * a particular breakpoint. From that breakpoint and up, the table will
	 * behave normally and not scroll horizontally.
	 */ responsive: external_prop_types_default().oneOfType([
        (external_prop_types_default()).bool,
        (external_prop_types_default()).string
    ])
};
const Table = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , striped , bordered , borderless , hover , size , variant , responsive , ...props }, ref)=>{
    const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'table');
    const classes = external_classnames_default()(className, decoratedBsPrefix, variant && `${decoratedBsPrefix}-${variant}`, size && `${decoratedBsPrefix}-${size}`, striped && `${decoratedBsPrefix}-striped`, bordered && `${decoratedBsPrefix}-bordered`, borderless && `${decoratedBsPrefix}-borderless`, hover && `${decoratedBsPrefix}-hover`);
    const table = /*#__PURE__*/ jsx_runtime_.jsx("table", {
        ...props,
        className: classes,
        ref: ref
    });
    if (responsive) {
        let responsiveClass = `${decoratedBsPrefix}-responsive`;
        if (typeof responsive === 'string') {
            responsiveClass = `${responsiveClass}-${responsive}`;
        }
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: responsiveClass,
            children: table
        }));
    }
    return table;
});
Table.displayName = 'Table';
Table.propTypes = Table_propTypes;
/* harmony default export */ const table_Table = (Table);

;// CONCATENATED MODULE: ./src/modules/components/tab/Tabs.tsx












const Tabs_propTypes = {
    /**
	 * Mark the Tab with a matching `eventKey` as active.
	 *
	 * @controllable onSelect
	 */ activeKey: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        (external_prop_types_default()).number
    ]),
    /** The default active key that is selected on start */ defaultActiveKey: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        (external_prop_types_default()).number
    ]),
    /**
	 * Navigation style
	 *
	 * @type {('tabs'| 'pills')}
	 */ variant: (external_prop_types_default()).string,
    /**
	 * Sets a default animation strategy for all children `<TabPane>`s.<tbcont
	 *
	 * Defaults to `<Fade>` animation, else use `false` to disable or a
	 * react-transition-group `<Transition/>` component.
	 *
	 * @type {Transition | false}
	 * @default {Fade}
	 */ transition: external_prop_types_default().oneOfType([
        external_prop_types_default().oneOf([
            false
        ]),
        (external_prop_types_default()).elementType
    ]),
    /**
	 * HTML id attribute, required if no `generateChildId` prop
	 * is specified.
	 *
	 * @type {string}
	 */ id: (external_prop_types_default()).string,
    /**
	 * Callback fired when a Tab is selected.
	 *
	 * ```js
	 * function (
	 *   Any eventKey,
	 *   SyntheticEvent event?
	 * )
	 * ```
	 *
	 * @controllable activeKey
	 */ onSelect: (external_prop_types_default()).func,
    /**
	 * Wait until the first "enter" transition to mount tabs (add them to the DOM)
	 */ mountOnEnter: (external_prop_types_default()).bool,
    /**
	 * Unmount tabs (remove it from the DOM) when it is no longer visible
	 */ unmountOnExit: (external_prop_types_default()).bool
};
const Tabs_defaultProps = {
    variant: 'tabs',
    mountOnEnter: false,
    unmountOnExit: false
};
function getDefaultActiveKey(children) {
    let defaultActiveKey;
    forEach(children, (child)=>{
        if (defaultActiveKey == null) {
            defaultActiveKey = child.props.eventKey;
        }
    });
    return defaultActiveKey;
}
function renderTab(child) {
    const { title , eventKey , disabled , tabClassName , id  } = child.props;
    if (title == null) {
        return null;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
        as: "li",
        role: "presentation",
        children: /*#__PURE__*/ jsx_runtime_.jsx(nav_NavLink, {
            as: "button",
            type: "button",
            eventKey: eventKey,
            disabled: disabled,
            id: id,
            className: tabClassName,
            children: title
        })
    }));
}
const Tabs = (props)=>{
    const { id , onSelect , transition , mountOnEnter , unmountOnExit , children , activeKey =getDefaultActiveKey(children) , ...controlledProps } = (0,external_uncontrollable_.useUncontrolled)(props, {
        activeKey: 'onSelect'
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
        id: id,
        activeKey: activeKey,
        onSelect: onSelect,
        transition: getTabTransitionComponent(transition),
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(nav_Nav, {
                ...controlledProps,
                role: "tablist",
                as: "ul",
                children: map(children, renderTab)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TabContent, {
                children: map(children, (child)=>{
                    const childProps = {
                        ...child.props
                    };
                    delete childProps.title;
                    delete childProps.disabled;
                    delete childProps.tabClassName;
                    return(/*#__PURE__*/ jsx_runtime_.jsx(tab_TabPane, {
                        ...childProps
                    }));
                })
            })
        ]
    }));
};
Tabs.propTypes = Tabs_propTypes;
Tabs.defaultProps = Tabs_defaultProps;
Tabs.displayName = 'Tabs';
/* harmony default export */ const tab_Tabs = ((/* unused pure expression or super */ null && (Tabs)));

;// CONCATENATED MODULE: ./src/modules/components/button/ToggleButton.tsx






const noop = ()=>undefined
;
const ToggleButton_propTypes = {
    /**
	 * @default 'btn-check'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * The `<input>` element `type`
	 */ type: external_prop_types_default().oneOf([
        'checkbox',
        'radio'
    ]),
    /**
	 * The HTML input name, used to group like checkboxes or radio buttons together
	 * semantically
	 */ name: (external_prop_types_default()).string,
    /**
	 * The checked state of the input, managed by `<ToggleButtonGroup>` automatically
	 */ checked: (external_prop_types_default()).bool,
    /**
	 * The disabled state of both the label and input
	 */ disabled: (external_prop_types_default()).bool,
    /**
	 * `id` is required for button clicks to toggle input.
	 */ id: (external_prop_types_default()).string.isRequired,
    /**
	 * A callback fired when the underlying input element changes. This is passed
	 * directly to the `<input>` so shares the same signature as a native `onChange` event.
	 */ onChange: (external_prop_types_default()).func,
    /**
	 * The value of the input, should be unique amongst it's siblings when nested in a
	 * `ToggleButtonGroup`.
	 */ value: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        external_prop_types_default().arrayOf((external_prop_types_default()).string.isRequired),
        (external_prop_types_default()).number
    ]).isRequired,
    /**
	 * A ref attached to the `<input>` element
	 * @type {ReactRef}
	 */ inputRef: external_prop_types_default().oneOfType([
        (external_prop_types_default()).func,
        (external_prop_types_default()).any
    ])
};
const ToggleButton = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , name , className , checked , type , onChange , value , disabled , id , inputRef , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'btn-check');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: bsPrefix,
                name: name,
                type: type,
                value: value,
                ref: inputRef,
                autoComplete: "off",
                checked: !!checked,
                disabled: !!disabled,
                onChange: onChange || noop,
                id: id
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(button_Button, {
                ...props,
                ref: ref,
                className: external_classnames_default()(className, disabled && 'disabled'),
                type: undefined,
                as: "label",
                htmlFor: id
            })
        ]
    }));
});
ToggleButton.propTypes = ToggleButton_propTypes;
ToggleButton.displayName = 'ToggleButton';
/* harmony default export */ const button_ToggleButton = (ToggleButton);

;// CONCATENATED MODULE: ./src/modules/components/button/ToggleButtonGroup.tsx









const ToggleButtonGroup_propTypes = {
    /**
	 * An HTML `<input>` name for each child button.
	 *
	 * __Required if `type` is set to `'radio'`__
	 */ name: (external_prop_types_default()).string,
    /**
	 * The value, or array of values, of the active (pressed) buttons
	 *
	 * @controllable onChange
	 */ value: (external_prop_types_default()).any,
    /**
	 * Callback fired when a button is pressed, depending on whether the `type`
	 * is `'radio'` or `'checkbox'`, `onChange` will be called with the value or
	 * array of active values
	 *
	 * @controllable value
	 */ onChange: (external_prop_types_default()).func,
    /**
	 * The input `type` of the rendered buttons, determines the toggle behavior
	 * of the buttons
	 */ type: external_prop_types_default().oneOf([
        'checkbox',
        'radio'
    ]).isRequired,
    /**
	 * Sets the size for all Buttons in the group.
	 *
	 * @type ('sm'|'lg')
	 */ size: (external_prop_types_default()).string,
    /** Make the set of Buttons appear vertically stacked. */ vertical: (external_prop_types_default()).bool
};
const ToggleButtonGroup_defaultProps = {
    type: 'radio',
    vertical: false
};
const ToggleButtonGroup = /*#__PURE__*/ external_react_default().forwardRef((props, ref)=>{
    const { children , type , name , value , onChange , ...controlledProps } = (0,external_uncontrollable_.useUncontrolled)(props, {
        value: 'onChange'
    });
    const getValues = ()=>value == null ? [] : [].concat(value)
    ;
    const handleToggle = (inputVal, event)=>{
        if (!onChange) {
            return;
        }
        const values = getValues();
        const isActive = values.indexOf(inputVal) !== -1;
        if (type === 'radio') {
            if (!isActive && onChange) onChange(inputVal, event);
            return;
        }
        if (isActive) {
            onChange(values.filter((n)=>n !== inputVal
            ), event);
        } else {
            onChange([
                ...values,
                inputVal
            ], event);
        }
    };
    external_invariant_default()(type !== 'radio' || !!name, 'A `name` is required to group the toggle buttons when the `type` ' + 'is set to "radio"');
    return(/*#__PURE__*/ jsx_runtime_.jsx(button_ButtonGroup, {
        ...controlledProps,
        ref: ref,
        children: map(children, (child)=>{
            const values = getValues();
            const { value: childVal , onChange: childOnChange  } = child.props;
            const handler = (e)=>handleToggle(childVal, e)
            ;
            return(/*#__PURE__*/ external_react_default().cloneElement(child, {
                type,
                name: child.name || name,
                checked: values.indexOf(childVal) !== -1,
                onChange: _utilities_createChainedFunction(childOnChange, handler)
            }));
        })
    }));
});
ToggleButtonGroup.displayName = 'ToggleButtonGroup';
ToggleButtonGroup.propTypes = ToggleButtonGroup_propTypes;
ToggleButtonGroup.defaultProps = ToggleButtonGroup_defaultProps;
/* harmony default export */ const button_ToggleButtonGroup = (Object.assign(ToggleButtonGroup, {
    Button: button_ToggleButton
}));

;// CONCATENATED MODULE: ./src/modules/components/tooltip/Tooltip.tsx







const Tooltip_propTypes = {
    /**
	 * @default 'tooltip'
	 */ bsPrefix: (external_prop_types_default()).string,
    /**
	 * An html id attribute, necessary for accessibility
	 * @type {string}
	 * @required
	 */ id: (external_prop_types_default()).string,
    /**
	 * Sets the direction the Tooltip is positioned towards.
	 *
	 * > This is generally provided by the `Overlay` component positioning the tooltip
	 */ placement: external_prop_types_default().oneOf([
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start', 
    ]),
    /**
	 * An Overlay injected set of props for positioning the tooltip arrow.
	 *
	 * > This is generally provided by the `Overlay` component positioning the tooltip
	 *
	 * @type {{ ref: ReactRef, style: Object }}
	 */ arrowProps: external_prop_types_default().shape({
        ref: (external_prop_types_default()).any,
        style: (external_prop_types_default()).object
    }),
    /** @private */ popper: (external_prop_types_default()).object,
    /** @private */ show: (external_prop_types_default()).any
};
const Tooltip_defaultProps = {
    placement: 'right'
};
const Tooltip = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , placement , className , style , children , arrowProps , popper: _ , show: _2 , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'tooltip');
    const isRTL = useIsRTL();
    const [primaryPlacement] = (placement === null || placement === void 0 ? void 0 : placement.split('-')) || [];
    const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: ref,
        style: style,
        role: "tooltip",
        "x-placement": primaryPlacement,
        className: external_classnames_default()(className, bsPrefix, `bs-tooltip-${bsDirection}`),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "tooltip-arrow",
                ...arrowProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${bsPrefix}-inner`,
                children: children
            })
        ]
    }));
});
Tooltip.propTypes = Tooltip_propTypes;
Tooltip.defaultProps = Tooltip_defaultProps;
Tooltip.displayName = 'Tooltip';
/* harmony default export */ const tooltip_Tooltip = ((/* unused pure expression or super */ null && (Tooltip)));

;// CONCATENATED MODULE: ./src/modules/components/avatar/AvatarDisplay.tsx

const AvatarDisplay = createWithBsPrefix('avatar-display', {
    Component: 'div'
});
/* harmony default export */ const avatar_AvatarDisplay = (AvatarDisplay);

;// CONCATENATED MODULE: ./src/modules/components/avatar/AvatarAddon.tsx





const AvatarAddon_propTypes = {
    as: (external_prop_types_default()).elementType,
    position: external_prop_types_default().oneOf([
        'top',
        'bottom'
    ])
};
const AvatarAddon = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , position ='top' , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'avatar-addon');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, `${bsPrefix}-${position}`)
    }));
});
AvatarAddon.propTypes = AvatarAddon_propTypes;
AvatarAddon.displayName = 'AvatarAddon';
/* harmony default export */ const avatar_AvatarAddon = (AvatarAddon);

;// CONCATENATED MODULE: ./src/modules/components/avatar/AvatarBadge.tsx






const AvatarBadge_propTypes = {
    as: (external_prop_types_default()).elementType
};
const AvatarBadge = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = badge_Badge , bsPrefix , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'avatar-badge');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix)
    }));
});
AvatarBadge.propTypes = AvatarBadge_propTypes;
AvatarBadge.displayName = 'AvatarBadge';
/* harmony default export */ const avatar_AvatarBadge = (AvatarBadge);

;// CONCATENATED MODULE: ./src/modules/components/avatar/AvatarIcon.tsx





const AvatarIcon_propTypes = {
    as: (external_prop_types_default()).elementType,
    variant: (external_prop_types_default()).string
};
const AvatarIcon = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , variant , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'avatar-icon');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, variant && `${bsPrefix}-${variant}`)
    }));
});
AvatarIcon.propTypes = AvatarIcon_propTypes;
AvatarIcon.displayName = 'AvatarIcon';
/* harmony default export */ const avatar_AvatarIcon = (AvatarIcon);

;// CONCATENATED MODULE: ./src/modules/components/avatar/Avatar.tsx









const Avatar_propTypes = {
    variant: (external_prop_types_default()).string,
    display: (external_prop_types_default()).bool,
    circle: (external_prop_types_default()).bool,
    size: external_prop_types_default().oneOf([
        'sm',
        'lg'
    ])
};
const Avatar = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , variant , circle , size , display , children , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'avatar');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, {
            [`${bsPrefix}-${variant}`]: variant,
            [`${bsPrefix}-circle`]: circle,
            [`${bsPrefix}-${size}`]: size
        }),
        children: display ? /*#__PURE__*/ jsx_runtime_.jsx(avatar_AvatarDisplay, {
            children: children
        }) : children
    }));
});
Avatar.propTypes = Avatar_propTypes;
Avatar.displayName = 'Avatar';
/* harmony default export */ const avatar_Avatar = (Object.assign(Avatar, {
    Display: avatar_AvatarDisplay,
    Addon: avatar_AvatarAddon,
    Badge: avatar_AvatarBadge,
    Icon: avatar_AvatarIcon
}));

;// CONCATENATED MODULE: ./src/modules/components/avatar/AvatarGroup.tsx





const AvatarGroup_propTypes = {
    as: (external_prop_types_default()).elementType,
    size: external_prop_types_default().oneOf([
        'sm',
        'lg'
    ])
};
const AvatarGroup = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , size , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'avatar-group');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, size && `${bsPrefix}-${size}`)
    }));
});
AvatarGroup.propTypes = AvatarGroup_propTypes;
AvatarGroup.displayName = 'AvatarGroup';
/* harmony default export */ const avatar_AvatarGroup = ((/* unused pure expression or super */ null && (AvatarGroup)));

;// CONCATENATED MODULE: ./src/modules/components/marker/Marker.tsx





const Marker_propTypes = {
    as: (external_prop_types_default()).elementType
};
const Marker = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'i' , bsPrefix , className , variant , type , size , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'marker');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, `${bsPrefix}-${type}`, {
            [`${bsPrefix}-${size}`]: size,
            [`text-${variant}`]: variant
        })
    }));
});
Marker.propTypes = Marker_propTypes;
Marker.displayName = 'Marker';
/* harmony default export */ const marker_Marker = (Marker);

;// CONCATENATED MODULE: ./src/modules/components/chat/ChatAuthor.tsx

const ChatAuthor = createWithBsPrefix('chat-author', {
    Component: 'span'
});
/* harmony default export */ const chat_ChatAuthor = (ChatAuthor);

;// CONCATENATED MODULE: ./src/modules/components/chat/ChatAvatar.tsx

const ChatAvatar = createWithBsPrefix('chat-avatar', {
    Component: 'div'
});
/* harmony default export */ const chat_ChatAvatar = (ChatAvatar);

;// CONCATENATED MODULE: ./src/modules/components/chat/ChatBubble.tsx





const ChatBubble_propTypes = {
    as: (external_prop_types_default()).elementType,
    variant: (external_prop_types_default()).string
};
const ChatBubble = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'p' , bsPrefix , className , variant , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'chat-bubble');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, variant && `${bsPrefix}-${variant}`)
    }));
});
ChatBubble.propTypes = ChatBubble_propTypes;
ChatBubble.displayName = 'ChatBubble';
/* harmony default export */ const chat_ChatBubble = (ChatBubble);

;// CONCATENATED MODULE: ./src/modules/components/chat/ChatContent.tsx

const ChatContent = createWithBsPrefix('chat-content', {
    Component: 'div'
});
/* harmony default export */ const chat_ChatContent = (ChatContent);

;// CONCATENATED MODULE: ./src/modules/components/chat/ChatImage.tsx

const ChatImage = createWithBsPrefix('chat-image', {
    Component: 'img'
});
/* harmony default export */ const chat_ChatImage = (ChatImage);

;// CONCATENATED MODULE: ./src/modules/components/chat/ChatItem.tsx






const ChatItem_propTypes = {
    as: (external_prop_types_default()).elementType,
    align: (external_prop_types_default()).string,
    content: (external_prop_types_default()).bool
};
const ChatItem = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , align ='start' , content , children , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'chat-item');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, align && `${bsPrefix}-${align}`),
        children: content ? /*#__PURE__*/ jsx_runtime_.jsx(chat_ChatContent, {
            children: children
        }) : children
    }));
});
ChatItem.propTypes = ChatItem_propTypes;
ChatItem.displayName = 'ChatItem';
/* harmony default export */ const chat_ChatItem = (ChatItem);

;// CONCATENATED MODULE: ./src/modules/components/chat/ChatSection.tsx





const ChatSection_propTypes = {
    as: (external_prop_types_default()).elementType
};
const ChatSection = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , children , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'chat-section');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix),
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: external_classnames_default()(`${bsPrefix}-text`),
            children: children
        })
    }));
});
ChatSection.propTypes = ChatSection_propTypes;
ChatSection.displayName = 'ChatSection';
/* harmony default export */ const chat_ChatSection = (ChatSection);

;// CONCATENATED MODULE: ./src/modules/components/chat/ChatTime.tsx

const ChatTime = createWithBsPrefix('chat-time', {
    Component: 'span'
});
/* harmony default export */ const chat_ChatTime = (ChatTime);

;// CONCATENATED MODULE: ./src/modules/components/chat/Chat.tsx









const Chat = createWithBsPrefix('chat', {
    Component: 'div'
});
/* harmony default export */ const chat_Chat = (Object.assign(Chat, {
    Author: chat_ChatAuthor,
    Avatar: chat_ChatAvatar,
    Bubble: chat_ChatBubble,
    Content: chat_ChatContent,
    Item: chat_ChatItem,
    Image: chat_ChatImage,
    Section: chat_ChatSection,
    Time: chat_ChatTime
}));

;// CONCATENATED MODULE: ./src/modules/components/grid-nav/GridNavIcon.tsx

const GridNavIcon = createWithBsPrefix('grid-nav-icon', {
    Component: 'div'
});
/* harmony default export */ const grid_nav_GridNavIcon = (GridNavIcon);

;// CONCATENATED MODULE: ./src/modules/components/grid-nav/GridNavContent.tsx

const GridNavContent = createWithBsPrefix('grid-nav-content', {
    Component: 'span'
});
/* harmony default export */ const grid_nav_GridNavContent = (GridNavContent);

;// CONCATENATED MODULE: ./src/modules/components/grid-nav/GridNavItem.tsx







const GridNavItem_propTypes = {
    as: (external_prop_types_default()).elementType,
    active: (external_prop_types_default()).bool,
    disabled: (external_prop_types_default()).bool,
    icon: (external_prop_types_default()).node,
    href: (external_prop_types_default()).string
};
const GridNavItem = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , active , disabled , icon , children , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'grid-nav-item');
    if (props.href) {
        Component = 'a';
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, {
            active: !disabled && active,
            disabled: disabled
        }),
        children: [
            icon && /*#__PURE__*/ jsx_runtime_.jsx(grid_nav_GridNavIcon, {
                children: icon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(grid_nav_GridNavContent, {
                children: children
            })
        ]
    }));
});
GridNavItem.propTypes = GridNavItem_propTypes;
GridNavItem.displayName = 'GridNavItem';
/* harmony default export */ const grid_nav_GridNavItem = (GridNavItem);

;// CONCATENATED MODULE: ./src/modules/components/grid-nav/GridNavRow.tsx

const GridNavRow = createWithBsPrefix('grid-nav-row', {
    Component: 'div'
});
/* harmony default export */ const grid_nav_GridNavRow = (GridNavRow);

;// CONCATENATED MODULE: ./src/modules/components/grid-nav/GridNavTitle.tsx

const GridNavTitle = createWithBsPrefix('grid-nav-title', {
    Component: 'h4'
});
/* harmony default export */ const grid_nav_GridNavTitle = (GridNavTitle);

;// CONCATENATED MODULE: ./src/modules/components/grid-nav/GridNavSubtitle.tsx

const GridNavSubtitle = createWithBsPrefix('grid-nav-subtitle', {
    Component: 'span'
});
/* harmony default export */ const grid_nav_GridNavSubtitle = (GridNavSubtitle);

;// CONCATENATED MODULE: ./src/modules/components/grid-nav/GridNav.tsx









const GridNav_propTypes = {
    as: (external_prop_types_default()).elementType,
    noRounded: (external_prop_types_default()).bool,
    bordered: (external_prop_types_default()).bool,
    flush: (external_prop_types_default()).bool,
    action: (external_prop_types_default()).bool
};
const GridNav = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , noRounded , bordered , flush , action , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'grid-nav');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, {
            [`${bsPrefix}-bordered`]: bordered,
            [`${bsPrefix}-flush`]: flush,
            [`${bsPrefix}-action`]: action,
            [`${bsPrefix}-no-rounded`]: noRounded
        })
    }));
});
GridNav.propTypes = GridNav_propTypes;
GridNav.displayName = 'GridNav';
/* harmony default export */ const grid_nav_GridNav = (Object.assign(GridNav, {
    Item: grid_nav_GridNavItem,
    Row: grid_nav_GridNavRow,
    Title: grid_nav_GridNavTitle,
    Subtitle: grid_nav_GridNavSubtitle
}));

;// CONCATENATED MODULE: ./src/modules/components/rich-list/RichListAddon.tsx





const RichListAddon_propTypes = {
    as: (external_prop_types_default()).elementType,
    addonType: (external_prop_types_default()).string
};
const RichListAddon = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , addonType , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, `rich-list-${addonType}`);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix)
    }));
});
RichListAddon.propTypes = RichListAddon_propTypes;
RichListAddon.displayName = 'RichListAddon';
/* harmony default export */ const rich_list_RichListAddon = (RichListAddon);

;// CONCATENATED MODULE: ./src/modules/components/rich-list/RichListContent.tsx

const RichListContent = createWithBsPrefix('rich-list-content', {
    Component: 'div'
});
/* harmony default export */ const rich_list_RichListContent = (RichListContent);

;// CONCATENATED MODULE: ./src/modules/components/rich-list/RichListItem.tsx






const RichListItem_propTypes = {
    as: (external_prop_types_default()).elementType,
    active: (external_prop_types_default()).bool,
    disabled: (external_prop_types_default()).bool,
    content: (external_prop_types_default()).bool
};
const RichListItem = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , active , disabled , content , children , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'rich-list-item');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, {
            active: !disabled && active,
            disabled: disabled
        }),
        children: content ? /*#__PURE__*/ jsx_runtime_.jsx(rich_list_RichListContent, {
            children: children
        }) : children
    }));
});
RichListItem.propTypes = RichListItem_propTypes;
RichListItem.displayName = 'RichListItem';
/* harmony default export */ const rich_list_RichListItem = (RichListItem);

;// CONCATENATED MODULE: ./src/modules/components/rich-list/RichListTitle.tsx

const RichListTitle = createWithBsPrefix('rich-list-title', {
    Component: 'h4'
});
/* harmony default export */ const rich_list_RichListTitle = (RichListTitle);

;// CONCATENATED MODULE: ./src/modules/components/rich-list/RichListSubtitle.tsx

const RichListSubtitle = createWithBsPrefix('rich-list-subtitle', {
    Component: 'span'
});
/* harmony default export */ const rich_list_RichListSubtitle = (RichListSubtitle);

;// CONCATENATED MODULE: ./src/modules/components/rich-list/RichListParagraph.tsx

const RichListParagraph = createWithBsPrefix('rich-list-paragraph', {
    Component: 'p'
});
/* harmony default export */ const rich_list_RichListParagraph = (RichListParagraph);

;// CONCATENATED MODULE: ./src/modules/components/rich-list/RichList.tsx











const RichList_propTypes = {
    as: (external_prop_types_default()).elementType,
    bordered: (external_prop_types_default()).bool,
    flush: (external_prop_types_default()).bool,
    action: (external_prop_types_default()).bool
};
const RichList = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , bordered , flush , action , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'rich-list');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, {
            [`${bsPrefix}-bordered`]: bordered,
            [`${bsPrefix}-flush`]: flush,
            [`${bsPrefix}-action`]: action
        })
    }));
});
RichList.propTypes = RichList_propTypes;
RichList.displayName = 'RichList';
/* harmony default export */ const rich_list_RichList = (Object.assign(RichList, {
    Addon: rich_list_RichListAddon,
    Item: rich_list_RichListItem,
    Content: rich_list_RichListContent,
    Title: rich_list_RichListTitle,
    Subtitle: rich_list_RichListSubtitle,
    Paragraph: rich_list_RichListParagraph
}));

;// CONCATENATED MODULE: ./src/modules/components/timeline/TimelineItem.tsx





const TimelineItem_propTypes = {
    as: (external_prop_types_default()).elementType,
    time: (external_prop_types_default()).node,
    pin: (external_prop_types_default()).node
};
const TimelineItem = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , time , pin , children , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'timeline');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, `${bsPrefix}-item`),
        children: [
            time && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(`${bsPrefix}-time`),
                children: time
            }),
            pin && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(`${bsPrefix}-pin`),
                children: pin
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(`${bsPrefix}-content`),
                children: children
            })
        ]
    }));
});
TimelineItem.propTypes = TimelineItem_propTypes;
TimelineItem.displayName = 'TimelineItem';
/* harmony default export */ const timeline_TimelineItem = (TimelineItem);

;// CONCATENATED MODULE: ./src/modules/components/timeline/Timeline.tsx






const Timeline_propTypes = {
    as: (external_prop_types_default()).elementType,
    zigzag: (external_prop_types_default()).bool,
    timed: (external_prop_types_default()).bool
};
const Timeline = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , zigzag , timed , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'timeline');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, {
            [`${bsPrefix}-zigzag`]: zigzag,
            [`${bsPrefix}-timed`]: timed
        })
    }));
});
Timeline.propTypes = Timeline_propTypes;
Timeline.displayName = 'Timeline';
/* harmony default export */ const timeline_Timeline = (Object.assign(Timeline, {
    Item: timeline_TimelineItem
}));

;// CONCATENATED MODULE: ./src/modules/components/floating-button/FloatingButton.tsx





const FloatingButton_propTypes = {
    as: (external_prop_types_default()).elementType,
    align: external_prop_types_default().oneOf([
        'start',
        'end'
    ])
};
const FloatingButton = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , align ='start' , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'floating-btn');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, `${bsPrefix}-${align}`)
    }));
});
FloatingButton.propTypes = FloatingButton_propTypes;
FloatingButton.displayName = 'FloatingButton';
/* harmony default export */ const floating_button_FloatingButton = (FloatingButton);

;// CONCATENATED MODULE: ./src/modules/components/widget1/Widget1Addon.tsx

const Widget1Addon = createWithBsPrefix('widget1-addon', {
    Component: 'div'
});
/* harmony default export */ const widget1_Widget1Addon = (Widget1Addon);

;// CONCATENATED MODULE: ./src/modules/components/widget1/Widget1Body.tsx





const Widget1Body_propTypes = {
    as: (external_prop_types_default()).elementType,
    offset: (external_prop_types_default()).bool
};
const Widget1Body = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , offset , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'widget1-body');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, offset && `${bsPrefix}-offset`)
    }));
});
Widget1Body.propTypes = Widget1Body_propTypes;
Widget1Body.displayName = 'Widget1Body';
/* harmony default export */ const widget1_Widget1Body = (Widget1Body);

;// CONCATENATED MODULE: ./src/modules/components/widget1/Widget1DialogContent.tsx

const Widget1DialogContent = createWithBsPrefix('widget1-dialog-content', {
    Component: 'div'
});
/* harmony default export */ const widget1_Widget1DialogContent = (Widget1DialogContent);

;// CONCATENATED MODULE: ./src/modules/components/widget1/Widget1Dialog.tsx

const Widget1Dialog = createWithBsPrefix('widget1-dialog', {
    Component: 'div'
});
/* harmony default export */ const widget1_Widget1Dialog = (Widget1Dialog);

;// CONCATENATED MODULE: ./src/modules/components/widget1/Widget1Display.tsx





const Widget1Display_propTypes = {
    as: (external_prop_types_default()).elementType,
    size: (external_prop_types_default()).string,
    top: (external_prop_types_default()).bool,
    bottom: (external_prop_types_default()).bool
};
const Widget1Display = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , size , top , bottom , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'widget1-display');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, size && `${bsPrefix}-${size}`, top && `${bsPrefix}-top`, bottom && `${bsPrefix}-bottom`)
    }));
});
Widget1Display.propTypes = Widget1Display_propTypes;
Widget1Display.displayName = 'Widget1Display';
/* harmony default export */ const widget1_Widget1Display = (Widget1Display);

;// CONCATENATED MODULE: ./src/modules/components/widget1/Widget1Group.tsx

const Widget1Group = createWithBsPrefix('widget1-group', {
    Component: 'div'
});
/* harmony default export */ const widget1_Widget1Group = (Widget1Group);

;// CONCATENATED MODULE: ./src/modules/components/widget1/Widget1Offset.tsx

const Widget1Offset = createWithBsPrefix('widget1-offset', {
    Component: 'div'
});
/* harmony default export */ const widget1_Widget1Offset = (Widget1Offset);

;// CONCATENATED MODULE: ./src/modules/components/widget1/Widget1Title.tsx

const Widget1Title = createWithBsPrefix('widget1-title', {
    Component: 'h3'
});
/* harmony default export */ const widget1_Widget1Title = (Widget1Title);

;// CONCATENATED MODULE: ./src/modules/components/widget1/Widget1.tsx













const Widget1 = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , ...props }, ref)=>{
    const classNamePrefix = useBootstrapPrefix(bsPrefix, 'widget1');
    return(/*#__PURE__*/ jsx_runtime_.jsx(portlet_Portlet, {
        ref: ref,
        ...props,
        className: external_classnames_default()(classNamePrefix, className)
    }));
});
Widget1.displayName = 'Widget1';
/* harmony default export */ const widget1_Widget1 = (Object.assign(Widget1, {
    Addon: widget1_Widget1Addon,
    Body: widget1_Widget1Body,
    Dialog: widget1_Widget1Dialog,
    DialogContent: widget1_Widget1DialogContent,
    Display: widget1_Widget1Display,
    Group: widget1_Widget1Group,
    Offset: widget1_Widget1Offset,
    Title: widget1_Widget1Title
}));

;// CONCATENATED MODULE: ./src/modules/components/widget2/Widget2.tsx





const Widget2 = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , ...props }, ref)=>{
    const classNamePrefix = useBootstrapPrefix(bsPrefix, 'widget2');
    return(/*#__PURE__*/ jsx_runtime_.jsx(nav_Nav, {
        ref: ref,
        ...props,
        className: external_classnames_default()(classNamePrefix, className)
    }));
});
Widget2.displayName = 'Widget2';
/* harmony default export */ const widget2_Widget2 = ((/* unused pure expression or super */ null && (Widget2)));

;// CONCATENATED MODULE: ./src/modules/components/widget3/Widget3Display.tsx

const Widget3Display = createWithBsPrefix('widget3-display', {
    Component: 'div'
});
/* harmony default export */ const widget3_Widget3Display = (Widget3Display);

;// CONCATENATED MODULE: ./src/modules/components/widget3/Widget3Subtitle.tsx

const Widget3Subtitle = createWithBsPrefix('widget3-subtitle', {
    Component: 'sub'
});
/* harmony default export */ const widget3_Widget3Subtitle = (Widget3Subtitle);

;// CONCATENATED MODULE: ./src/modules/components/widget3/Widget3Title.tsx

const Widget3Title = createWithBsPrefix('widget3-title', {
    Component: 'h3'
});
/* harmony default export */ const widget3_Widget3Title = (Widget3Title);

;// CONCATENATED MODULE: ./src/modules/components/widget3/Widget3.tsx








const Widget3_propTypes = {
    as: (external_prop_types_default()).elementType,
    size: (external_prop_types_default()).string
};
const Widget3 = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , size , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'widget3');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, size && `${bsPrefix}-${size}`)
    }));
});
Widget3.propTypes = Widget3_propTypes;
Widget3.displayName = 'Widget3';
/* harmony default export */ const widget3_Widget3 = (Object.assign(Widget3, {
    Display: widget3_Widget3Display,
    Subtitle: widget3_Widget3Subtitle,
    Title: widget3_Widget3Title
}));

;// CONCATENATED MODULE: ./src/modules/components/widget4/Widget4Addon.tsx

const Widget4Addon = createWithBsPrefix('widget4-addon', {
    Component: 'div'
});
/* harmony default export */ const widget4_Widget4Addon = (Widget4Addon);

;// CONCATENATED MODULE: ./src/modules/components/widget4/Widget4Display.tsx

const Widget4Display = createWithBsPrefix('widget4-display', {
    Component: 'div'
});
/* harmony default export */ const widget4_Widget4Display = (Widget4Display);

;// CONCATENATED MODULE: ./src/modules/components/widget4/Widget4Group.tsx

const Widget4Group = createWithBsPrefix('widget4-group', {
    Component: 'div'
});
/* harmony default export */ const widget4_Widget4Group = (Widget4Group);

;// CONCATENATED MODULE: ./src/modules/components/widget4/Widget4Highlight.tsx

const Widget4Highlight = createWithBsPrefix('widget4-highlight', {
    Component: 'h2'
});
/* harmony default export */ const widget4_Widget4Highlight = (Widget4Highlight);

;// CONCATENATED MODULE: ./src/modules/components/widget4/Widget4Subtitle.tsx

const Widget4Subtitle = createWithBsPrefix('widget4-subtitle', {
    Component: 'h6'
});
/* harmony default export */ const widget4_Widget4Subtitle = (Widget4Subtitle);

;// CONCATENATED MODULE: ./src/modules/components/widget4/Widget4Title.tsx

const Widget4Title = createWithBsPrefix('widget4-title', {
    Component: 'h3'
});
/* harmony default export */ const widget4_Widget4Title = (Widget4Title);

;// CONCATENATED MODULE: ./src/modules/components/widget4/Widget4.tsx







const Widget4 = createWithBsPrefix('widget4', {
    Component: 'div'
});
/* harmony default export */ const widget4_Widget4 = (Object.assign(Widget4, {
    Addon: widget4_Widget4Addon,
    Display: widget4_Widget4Display,
    Group: widget4_Widget4Group,
    Highlight: widget4_Widget4Highlight,
    Subtitle: widget4_Widget4Subtitle,
    Title: widget4_Widget4Title
}));

;// CONCATENATED MODULE: ./src/modules/components/widget5/Widget5Group.tsx

const Widget5Group = createWithBsPrefix('widget5-group', {
    Component: 'div'
});
/* harmony default export */ const widget5_Widget5Group = (Widget5Group);

;// CONCATENATED MODULE: ./src/modules/components/widget5/Widget5Info.tsx

const Widget5Info = createWithBsPrefix('widget5-info', {
    Component: 'span'
});
/* harmony default export */ const widget5_Widget5Info = (Widget5Info);

;// CONCATENATED MODULE: ./src/modules/components/widget5/Widget5Item.tsx

const Widget5Item = createWithBsPrefix('widget5-item', {
    Component: 'div'
});
/* harmony default export */ const widget5_Widget5Item = (Widget5Item);

;// CONCATENATED MODULE: ./src/modules/components/widget5/Widget5Title.tsx

const Widget5Title = createWithBsPrefix('widget5-title', {
    Component: 'h4'
});
/* harmony default export */ const widget5_Widget5Title = (Widget5Title);

;// CONCATENATED MODULE: ./src/modules/components/widget5/Widget5Value.tsx

const Widget5Value = createWithBsPrefix('widget5-value', {
    Component: 'span'
});
/* harmony default export */ const widget5_Widget5Value = (Widget5Value);

;// CONCATENATED MODULE: ./src/modules/components/widget5/Widget5.tsx






const Widget5 = createWithBsPrefix('widget5', {
    Component: 'div'
});
/* harmony default export */ const widget5_Widget5 = (Object.assign(Widget5, {
    Group: widget5_Widget5Group,
    Info: widget5_Widget5Info,
    Item: widget5_Widget5Item,
    Title: widget5_Widget5Title,
    Value: widget5_Widget5Value
}));

;// CONCATENATED MODULE: ./src/modules/components/widget6/Widget6Title.tsx

const Widget6Title = createWithBsPrefix('widget6-title', {
    Component: 'h5'
});
/* harmony default export */ const widget6_Widget6Title = (Widget6Title);

;// CONCATENATED MODULE: ./src/modules/components/widget6/Widget6Subtitle.tsx

const Widget6Subtitle = createWithBsPrefix('widget6-subtitle', {
    Component: 'span'
});
/* harmony default export */ const widget6_Widget6Subtitle = (Widget6Subtitle);

;// CONCATENATED MODULE: ./src/modules/components/widget6/Widget6.tsx



const Widget6 = createWithBsPrefix('widget6', {
    Component: 'div'
});
/* harmony default export */ const widget6_Widget6 = (Object.assign(Widget6, {
    Title: widget6_Widget6Title,
    Subtitle: widget6_Widget6Subtitle
}));

;// CONCATENATED MODULE: ./src/modules/components/widget7/Widget7Text.tsx

const Widget7Text = createWithBsPrefix('widget7-text', {
    Component: 'p'
});
/* harmony default export */ const widget7_Widget7Text = (Widget7Text);

;// CONCATENATED MODULE: ./src/modules/components/widget7/Widget7Time.tsx

const Widget7Time = createWithBsPrefix('widget7-time', {
    Component: 'span'
});
/* harmony default export */ const widget7_Widget7Time = (Widget7Time);

;// CONCATENATED MODULE: ./src/modules/components/widget7/Widget7.tsx



const Widget7 = createWithBsPrefix('widget7', {
    Component: 'div'
});
/* harmony default export */ const widget7_Widget7 = (Object.assign(Widget7, {
    Text: widget7_Widget7Text,
    Time: widget7_Widget7Time
}));

;// CONCATENATED MODULE: ./src/modules/components/widget8/Widget8Addon.tsx

const Widget8Addon = createWithBsPrefix('widget8-addon', {
    Component: 'div'
});
/* harmony default export */ const widget8_Widget8Addon = (Widget8Addon);

;// CONCATENATED MODULE: ./src/modules/components/widget8/Widget8Avatar.tsx





const Widget8Avatar = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , ...props }, ref)=>{
    const classNamePrefix = useBootstrapPrefix(bsPrefix, 'widget8-avatar');
    return(/*#__PURE__*/ jsx_runtime_.jsx(avatar_Avatar, {
        ref: ref,
        ...props,
        className: external_classnames_default()(classNamePrefix, className)
    }));
});
Widget8Avatar.displayName = 'Widget8Avatar';
/* harmony default export */ const widget8_Widget8Avatar = (Widget8Avatar);

;// CONCATENATED MODULE: ./src/modules/components/widget8/Widget8Content.tsx

const Widget8Content = createWithBsPrefix('widget8-content', {
    Component: 'div'
});
/* harmony default export */ const widget8_Widget8Content = (Widget8Content);

;// CONCATENATED MODULE: ./src/modules/components/widget8/Widget8Highlight.tsx





const Widget8Highlight_propTypes = {
    as: (external_prop_types_default()).elementType,
    size: (external_prop_types_default()).string
};
const Widget8Highlight = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , size , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'h4' , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'widget8-highlight');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, size && `${bsPrefix}-${size}`)
    }));
});
Widget8Highlight.propTypes = Widget8Highlight_propTypes;
Widget8Highlight.displayName = 'Widget8Highlight';
/* harmony default export */ const widget8_Widget8Highlight = (Widget8Highlight);

;// CONCATENATED MODULE: ./src/modules/components/widget8/Widget8Subtitle.tsx

const Widget8Subtitle = createWithBsPrefix('widget8-subtitle', {
    Component: 'span'
});
/* harmony default export */ const widget8_Widget8Subtitle = (Widget8Subtitle);

;// CONCATENATED MODULE: ./src/modules/components/widget8/Widget8Title.tsx

const Widget8Title = createWithBsPrefix('widget8-title', {
    Component: 'h6'
});
/* harmony default export */ const widget8_Widget8Title = (Widget8Title);

;// CONCATENATED MODULE: ./src/modules/components/widget8/Widget8.tsx







const Widget8 = createWithBsPrefix('widget8', {
    Component: 'div'
});
/* harmony default export */ const widget8_Widget8 = (Object.assign(Widget8, {
    Addon: widget8_Widget8Addon,
    Avatar: widget8_Widget8Avatar,
    Content: widget8_Widget8Content,
    Highlight: widget8_Widget8Highlight,
    Subtitle: widget8_Widget8Subtitle,
    Title: widget8_Widget8Title
}));

;// CONCATENATED MODULE: ./src/modules/components/widget9/Widget9Degree.tsx

const Widget9Degree = createWithBsPrefix('widget9-degree', {
    Component: 'sup'
});
/* harmony default export */ const widget9_Widget9Degree = (Widget9Degree);

;// CONCATENATED MODULE: ./src/modules/components/widget9/Widget9Display.tsx





const Widget9Display_propTypes = {
    as: (external_prop_types_default()).elementType,
    size: (external_prop_types_default()).string
};
const Widget9Display = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , size , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'widget9-display');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, size && `${bsPrefix}-${size}`)
    }));
});
Widget9Display.propTypes = Widget9Display_propTypes;
Widget9Display.displayName = 'Widget9Display';
/* harmony default export */ const widget9_Widget9Display = (Widget9Display);

;// CONCATENATED MODULE: ./src/modules/components/widget9/Widget9Grid.tsx

const Widget9Grid = createWithBsPrefix('widget9-grid', {
    Component: 'div'
});
/* harmony default export */ const widget9_Widget9Grid = (Widget9Grid);

;// CONCATENATED MODULE: ./src/modules/components/widget9/Widget9GridIcon.tsx

const Widget9GridIcon = createWithBsPrefix('widget9-grid-item-icon', {
    Component: 'div'
});
/* harmony default export */ const widget9_Widget9GridIcon = (Widget9GridIcon);

;// CONCATENATED MODULE: ./src/modules/components/widget9/Widget9GridItem.tsx

const Widget9GridItem = createWithBsPrefix('widget9-grid-item', {
    Component: 'div'
});
/* harmony default export */ const widget9_Widget9GridItem = (Widget9GridItem);

;// CONCATENATED MODULE: ./src/modules/components/widget9/Widget9GridText.tsx

const Widget9GridText = createWithBsPrefix('widget9-grid-item-text', {
    Component: 'span'
});
/* harmony default export */ const widget9_Widget9GridText = (Widget9GridText);

;// CONCATENATED MODULE: ./src/modules/components/widget9/Widget9Icon.tsx

const Widget9Icon = createWithBsPrefix('widget9-icon', {
    Component: 'span'
});
/* harmony default export */ const widget9_Widget9Icon = (Widget9Icon);

;// CONCATENATED MODULE: ./src/modules/components/widget9/Widget9List.tsx

const Widget9List = createWithBsPrefix('widget9-list', {
    Component: 'div'
});
/* harmony default export */ const widget9_Widget9List = (Widget9List);

;// CONCATENATED MODULE: ./src/modules/components/widget9/Widget9ListAddon.tsx

const Widget9ListAddon = createWithBsPrefix('widget9-list-item-addon', {
    Component: 'div'
});
/* harmony default export */ const widget9_Widget9ListAddon = (Widget9ListAddon);

;// CONCATENATED MODULE: ./src/modules/components/widget9/Widget9ListItem.tsx

const Widget9ListItem = createWithBsPrefix('widget9-list-item', {
    Component: 'div'
});
/* harmony default export */ const widget9_Widget9ListItem = (Widget9ListItem);

;// CONCATENATED MODULE: ./src/modules/components/widget9/Widget9ListText.tsx

const Widget9ListText = createWithBsPrefix('widget9-list-item-text', {
    Component: 'span'
});
/* harmony default export */ const widget9_Widget9ListText = (Widget9ListText);

;// CONCATENATED MODULE: ./src/modules/components/widget9/Widget9Text.tsx

const Widget9Text = createWithBsPrefix('widget9-text', {
    Component: 'h3'
});
/* harmony default export */ const widget9_Widget9Text = (Widget9Text);

;// CONCATENATED MODULE: ./src/modules/components/widget9/Widget9.tsx













const Widget9 = createWithBsPrefix('widget9', {
    Component: 'div'
});
/* harmony default export */ const widget9_Widget9 = (Object.assign(Widget9, {
    Degree: widget9_Widget9Degree,
    Display: widget9_Widget9Display,
    Text: widget9_Widget9Text,
    Icon: widget9_Widget9Icon,
    Grid: widget9_Widget9Grid,
    GridItem: widget9_Widget9GridItem,
    GridIcon: widget9_Widget9GridIcon,
    GridText: widget9_Widget9GridText,
    List: widget9_Widget9List,
    ListItem: widget9_Widget9ListItem,
    ListText: widget9_Widget9ListText,
    ListAddon: widget9_Widget9ListAddon
}));

;// CONCATENATED MODULE: ./src/modules/components/widget10/Widget10Addon.tsx

const Widget10Addon = createWithBsPrefix('widget10-addon', {
    Component: 'div'
});
/* harmony default export */ const widget10_Widget10Addon = (Widget10Addon);

;// CONCATENATED MODULE: ./src/modules/components/widget10/Widget10Content.tsx

const Widget10Content = createWithBsPrefix('widget10-content', {
    Component: 'div'
});
/* harmony default export */ const widget10_Widget10Content = (Widget10Content);

;// CONCATENATED MODULE: ./src/modules/components/widget10/Widget10Item.tsx

const Widget10Item = createWithBsPrefix('widget10-item', {
    Component: 'div'
});
/* harmony default export */ const widget10_Widget10Item = (Widget10Item);

;// CONCATENATED MODULE: ./src/modules/components/widget10/Widget10Subtitle.tsx

const Widget10Subtitle = createWithBsPrefix('widget10-subtitle', {
    Component: 'span'
});
/* harmony default export */ const widget10_Widget10Subtitle = (Widget10Subtitle);

;// CONCATENATED MODULE: ./src/modules/components/widget10/Widget10Title.tsx

const Widget10Title = createWithBsPrefix('widget10-title', {
    Component: 'h2'
});
/* harmony default export */ const widget10_Widget10Title = (Widget10Title);

;// CONCATENATED MODULE: ./src/modules/components/widget10/Widget10.tsx










const Widget10_propTypes = {
    as: (external_prop_types_default()).elementType,
    vertical: external_prop_types_default().oneOfType([
        (external_prop_types_default()).bool,
        (external_prop_types_default()).string
    ])
};
const Widget10 = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , vertical , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'widget10');
    let verticalClass;
    if (typeof vertical === 'string') {
        verticalClass = `${bsPrefix}-vertical-${vertical}`;
    } else if (typeof vertical === 'boolean') {
        verticalClass = `${bsPrefix}-vertical`;
    } else {
        verticalClass = null;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, verticalClass)
    }));
});
Widget10.propTypes = Widget10_propTypes;
Widget10.displayName = 'Widget10';
/* harmony default export */ const widget10_Widget10 = (Object.assign(Widget10, {
    Addon: widget10_Widget10Addon,
    Content: widget10_Widget10Content,
    Item: widget10_Widget10Item,
    Subtitle: widget10_Widget10Subtitle,
    Title: widget10_Widget10Title
}));

;// CONCATENATED MODULE: ./src/modules/components/widget11/Widget11.tsx





const Widget11_propTypes = {
    as: (external_prop_types_default()).elementType,
    bottom: (external_prop_types_default()).bool,
    top: (external_prop_types_default()).bool
};
const Widget11 = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , bottom , top , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'widget11');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, bottom && `${bsPrefix}-bottom`, top && `${bsPrefix}-top`)
    }));
});
Widget11.propTypes = Widget11_propTypes;
Widget11.displayName = 'Widget11';
/* harmony default export */ const widget11_Widget11 = ((/* unused pure expression or super */ null && (Widget11)));

;// CONCATENATED MODULE: ./src/modules/components/widget12/Widget12.tsx





const Widget12 = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , small , ...props }, ref)=>{
    const classNamePrefix = useBootstrapPrefix(bsPrefix, 'widget12');
    return(/*#__PURE__*/ jsx_runtime_.jsx(avatar_Avatar, {
        ref: ref,
        ...props,
        className: external_classnames_default()(small ? `${classNamePrefix}-sm` : classNamePrefix, className)
    }));
});
Widget12.displayName = 'Widget12';
/* harmony default export */ const widget12_Widget12 = (Widget12);

;// CONCATENATED MODULE: ./src/modules/components/widget13/Widget13Avatar.tsx





const Widget13Avatar = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , ...props }, ref)=>{
    const classNamePrefix = useBootstrapPrefix(bsPrefix, 'widget13-avatar');
    return(/*#__PURE__*/ jsx_runtime_.jsx(avatar_Avatar, {
        ref: ref,
        ...props,
        className: external_classnames_default()(classNamePrefix, className)
    }));
});
Widget13Avatar.displayName = 'Widget13Avatar';
/* harmony default export */ const widget13_Widget13Avatar = (Widget13Avatar);

;// CONCATENATED MODULE: ./src/modules/components/widget13/Widget13Text.tsx

const Widget13Text = createWithBsPrefix('widget13-text', {
    Component: 'span'
});
/* harmony default export */ const widget13_Widget13Text = (Widget13Text);

;// CONCATENATED MODULE: ./src/modules/components/widget13/Widget13.tsx







const Widget13 = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'widget13');
    return(/*#__PURE__*/ jsx_runtime_.jsx(dropdown_DropdownToggle, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix)
    }));
});
Widget13.displayName = 'Widget13';
/* harmony default export */ const widget13_Widget13 = (Object.assign(Widget13, {
    Avatar: widget13_Widget13Avatar,
    Text: widget13_Widget13Text
}));

;// CONCATENATED MODULE: ./src/modules/components/widget14/Widget14Avatar.tsx





const Widget14Avatar = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , className , ...props }, ref)=>{
    const classNamePrefix = useBootstrapPrefix(bsPrefix, 'widget14-avatar');
    return(/*#__PURE__*/ jsx_runtime_.jsx(avatar_Avatar, {
        ref: ref,
        ...props,
        className: external_classnames_default()(classNamePrefix, className)
    }));
});
Widget14Avatar.displayName = 'Widget14Avatar';
/* harmony default export */ const widget14_Widget14Avatar = (Widget14Avatar);

;// CONCATENATED MODULE: ./src/modules/components/widget14/Widget14Subtitle.tsx

const Widget14Subtitle = createWithBsPrefix('widget14-subtitle', {
    Component: 'span'
});
/* harmony default export */ const widget14_Widget14Subtitle = (Widget14Subtitle);

;// CONCATENATED MODULE: ./src/modules/components/widget14/Widget14Title.tsx

const Widget14Title = createWithBsPrefix('widget14-title', {
    Component: 'h3'
});
/* harmony default export */ const widget14_Widget14Title = (Widget14Title);

;// CONCATENATED MODULE: ./src/modules/components/widget14/Widget14.tsx




const Widget14 = createWithBsPrefix('widget14', {
    Component: 'div'
});
/* harmony default export */ const widget14_Widget14 = (Object.assign(Widget14, {
    Avatar: widget14_Widget14Avatar,
    Title: widget14_Widget14Title,
    Subtitle: widget14_Widget14Subtitle
}));

;// CONCATENATED MODULE: ./src/modules/components/widget18/Widget18Content.tsx

const Widget18Content = createWithBsPrefix('widget18-content', {
    Component: 'div'
});
/* harmony default export */ const widget18_Widget18Content = (Widget18Content);

;// CONCATENATED MODULE: ./src/modules/components/widget18/Widget18Icon.tsx

const Widget18Icon = createWithBsPrefix('widget18-icon', {
    Component: 'div'
});
/* harmony default export */ const widget18_Widget18Icon = (Widget18Icon);

;// CONCATENATED MODULE: ./src/modules/components/widget18/Widget18.tsx







const Widget18_propTypes = {
    as: (external_prop_types_default()).elementType,
    icon: (external_prop_types_default()).node
};
const Widget18 = /*#__PURE__*/ external_react_default().forwardRef(({ bsPrefix , icon , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div' , className , children , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'widget18');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix),
        children: [
            icon && /*#__PURE__*/ jsx_runtime_.jsx(widget18_Widget18Icon, {
                children: icon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(widget18_Widget18Content, {
                children: children
            })
        ]
    }));
});
Widget18.propTypes = Widget18_propTypes;
Widget18.displayName = 'Widget18';
/* harmony default export */ const widget18_Widget18 = ((/* unused pure expression or super */ null && (Widget18)));

;// CONCATENATED MODULE: ./src/modules/components/widget20/Widget20.tsx

const Widget20 = createWithBsPrefix('widget20', {
    Component: 'h1'
});
/* harmony default export */ const widget20_Widget20 = (Widget20);

;// CONCATENATED MODULE: ./src/modules/components/menu/MenuItem.tsx

const MenuItem = createWithBsPrefix('menu-item', {
    Component: 'div'
});
/* harmony default export */ const menu_MenuItem = (MenuItem);

;// CONCATENATED MODULE: ./src/modules/components/menu/MenuLink.tsx






const MenuLink_propTypes = {
    as: (external_prop_types_default()).elementType,
    bullet: (external_prop_types_default()).bool,
    active: (external_prop_types_default()).bool,
    caret: (external_prop_types_default()).bool,
    addon: (external_prop_types_default()).node,
    icon: (external_prop_types_default()).node
};
const MenuLink = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'a' , bsPrefix , className , bullet , active , caret , addon , icon , children , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'menu-item');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, `${bsPrefix}-link`, {
            active: active
        }),
        children: [
            icon ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: external_classnames_default()(`${bsPrefix}-icon`),
                children: icon
            }) : bullet ? /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: external_classnames_default()(`${bsPrefix}-bullet`)
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: external_classnames_default()(`${bsPrefix}-text`),
                children: children
            }),
            addon ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: external_classnames_default()(`${bsPrefix}-addon`),
                children: addon
            }) : caret ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: external_classnames_default()(`${bsPrefix}-addon`),
                children: /*#__PURE__*/ jsx_runtime_.jsx(caret_Caret, {
                    className: external_classnames_default()(`${bsPrefix}-caret`)
                })
            }) : null
        ]
    }));
});
MenuLink.propTypes = MenuLink_propTypes;
MenuLink.displayName = 'MenuLink';
/* harmony default export */ const menu_MenuLink = (MenuLink);

;// CONCATENATED MODULE: ./src/modules/components/menu/MenuSection.tsx





const MenuSection_propTypes = {
    as: (external_prop_types_default()).elementType,
    icon: (external_prop_types_default()).node
};
const MenuSection = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , icon , children , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'menu-section');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix),
        children: [
            icon && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(`${bsPrefix}-icon`),
                children: icon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: external_classnames_default()(`${bsPrefix}-text`),
                children: children
            })
        ]
    }));
});
MenuSection.propTypes = MenuSection_propTypes;
MenuSection.displayName = 'MenuSection';
/* harmony default export */ const menu_MenuSection = (MenuSection);

;// CONCATENATED MODULE: ./src/modules/components/menu/MenuSubmenuContext.tsx

const MenuSubmenuContext = /*#__PURE__*/ external_react_default().createContext({
    height: 'auto',
    setHeight: ()=>{
    },
    active: true,
    setActive: ()=>{
    },
    defaultActive: false
});
MenuSubmenuContext.displayName = 'MenuSubmenuContext';
/* harmony default export */ const menu_MenuSubmenuContext = (MenuSubmenuContext);

;// CONCATENATED MODULE: ./src/modules/components/menu/MenuSubmenu.tsx





const MenuSubmenu_propTypes = {
    as: (external_prop_types_default()).elementType,
    defaultActive: (external_prop_types_default()).bool
};
const MenuSubmenu = /*#__PURE__*/ external_react_default().forwardRef(({ defaultActive =false , ...props }, ref)=>{
    const [height, setHeight] = external_react_default().useState('auto');
    const [active, setActive] = external_react_default().useState(true);
    return(/*#__PURE__*/ jsx_runtime_.jsx(menu_MenuSubmenuContext.Provider, {
        value: {
            height,
            setHeight,
            active,
            setActive,
            defaultActive
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(menu_MenuItem, {
            ref: ref,
            ...props
        })
    }));
});
MenuSubmenu.propTypes = MenuSubmenu_propTypes;
MenuSubmenu.displayName = 'MenuSubmenu';
/* harmony default export */ const menu_MenuSubmenu = (MenuSubmenu);

;// CONCATENATED MODULE: ./src/modules/components/menu/MenuSubmenuMenu.tsx





const MenuSubmenuMenu = ({ bsPrefix , className , style , ...props })=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'menu-submenu');
    const componentRef = external_react_default().useRef();
    const { height , setHeight , active , setActive , defaultActive  } = external_react_default().useContext(menu_MenuSubmenuContext);
    external_react_default().useEffect(()=>{
        var ref;
        setHeight((componentRef === null || componentRef === void 0 ? void 0 : (ref = componentRef.current) === null || ref === void 0 ? void 0 : ref.offsetHeight) || 0);
        setActive(defaultActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: componentRef,
        ...props,
        className: external_classnames_default()(className, bsPrefix),
        style: {
            ...style,
            height: active ? height : 0
        }
    }));
};
MenuSubmenuMenu.displayName = 'MenuSubmenuMenu';
/* harmony default export */ const menu_MenuSubmenuMenu = (MenuSubmenuMenu);

;// CONCATENATED MODULE: ./src/modules/components/menu/MenuToggle.tsx







const MenuToggle_propTypes = {
    as: (external_prop_types_default()).elementType
};
const MenuToggle = /*#__PURE__*/ external_react_default().forwardRef(({ as ='button' , bsPrefix , className , onClick , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'menu-item-toggle');
    const { active , setActive  } = external_react_default().useContext(menu_MenuSubmenuContext);
    const handleToggle = (e)=>{
        setActive((prevActive)=>!prevActive
        );
        if (onClick) {
            onClick(e);
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(menu_MenuLink, {
        as: as,
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix),
        onClick: handleToggle,
        active: active
    }));
});
MenuToggle.propTypes = MenuToggle_propTypes;
MenuToggle.displayName = 'MenuToggle';
/* harmony default export */ const menu_MenuToggle = (MenuToggle);

;// CONCATENATED MODULE: ./src/modules/components/menu/Menu.tsx







const Menu = createWithBsPrefix('menu', {
    Component: 'div'
});
/* harmony default export */ const menu_Menu = (Object.assign(Menu, {
    Item: menu_MenuItem,
    Link: menu_MenuLink,
    Toggle: menu_MenuToggle,
    Section: menu_MenuSection,
    Submenu: menu_MenuSubmenu,
    SubmenuMenu: menu_MenuSubmenuMenu
}));

;// CONCATENATED MODULE: ./src/modules/components/layout/structure/Structure.tsx





const Structure_propTypes = {
    as: (external_prop_types_default()).elementType,
    type: external_prop_types_default().oneOf([
        'holder',
        'wrapper',
        'content'
    ])
};
const Structure = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , type , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, type);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix)
    }));
});
Structure.propTypes = Structure_propTypes;
Structure.displayName = 'Structure';
/* harmony default export */ const structure_Structure = (Structure);

;// CONCATENATED MODULE: ./src/modules/components/layout/header/HeaderBrand.tsx

const HeaderBrand = createWithBsPrefix('header-brand', {
    Component: 'h3'
});
/* harmony default export */ const header_HeaderBrand = (HeaderBrand);

;// CONCATENATED MODULE: ./src/modules/components/layout/header/HeaderContainer.tsx





const HeaderContainer_propTypes = {
    as: (external_prop_types_default()).elementType,
    fluid: (external_prop_types_default()).bool
};
const HeaderContainer = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , fluid , bsPrefix , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'header-container');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, fluid ? 'container-fluid' : 'container')
    }));
});
HeaderContainer.propTypes = HeaderContainer_propTypes;
HeaderContainer.displayName = 'HeaderContainer';
/* harmony default export */ const header_HeaderContainer = (HeaderContainer);

;// CONCATENATED MODULE: ./src/modules/components/layout/header/HeaderDivider.tsx

const HeaderDivider = createWithBsPrefix('header-divider', {
    Component: 'i'
});
/* harmony default export */ const header_HeaderDivider = (HeaderDivider);

;// CONCATENATED MODULE: ./src/modules/components/layout/header/HeaderHolder.tsx





const HeaderHolder_propTypes = {
    as: (external_prop_types_default()).elementType,
    shown: external_prop_types_default().oneOf([
        'mobile',
        'desktop'
    ])
};
const HeaderHolder = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , shown , bsPrefix , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'header-holder');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, {
            [`${bsPrefix}-${shown}`]: shown
        })
    }));
});
HeaderHolder.propTypes = HeaderHolder_propTypes;
HeaderHolder.displayName = 'HeaderHolder';
/* harmony default export */ const header_HeaderHolder = (HeaderHolder);

;// CONCATENATED MODULE: ./src/modules/components/layout/header/HeaderTitle.tsx

const HeaderTitle = createWithBsPrefix('header-title', {
    Component: 'h4'
});
/* harmony default export */ const header_HeaderTitle = (HeaderTitle);

;// CONCATENATED MODULE: ./src/modules/components/layout/header/HeaderWrap.tsx





const HeaderWrap_propTypes = {
    as: (external_prop_types_default()).elementType,
    block: (external_prop_types_default()).bool,
    justify: external_prop_types_default().oneOf([
        'start',
        'center',
        'end'
    ])
};
const HeaderWrap = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , block , justify , bsPrefix , className , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'header-wrap');
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, {
            [`${bsPrefix}-block`]: block,
            [`justify-content-${justify}`]: justify
        })
    }));
});
HeaderWrap.propTypes = HeaderWrap_propTypes;
HeaderWrap.displayName = 'HeaderWrap';
/* harmony default export */ const header_HeaderWrap = (HeaderWrap);

;// CONCATENATED MODULE: ./src/modules/components/layout/header/Header.tsx







const Header = createWithBsPrefix('header', {
    Component: 'div'
});
/* harmony default export */ const header_Header = (Object.assign(Header, {
    Container: header_HeaderContainer,
    Holder: header_HeaderHolder,
    Wrap: header_HeaderWrap,
    Title: header_HeaderTitle,
    Brand: header_HeaderBrand,
    Divider: header_HeaderDivider
}));

;// CONCATENATED MODULE: ./src/modules/components/layout/footer/Footer.tsx

const Footer = createWithBsPrefix('footer', {
    Component: 'div'
});
/* harmony default export */ const footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/modules/components/layout/aside/AsideAddon.tsx

const AsideAddon = createWithBsPrefix('aside-addon', {
    Component: 'div'
});
/* harmony default export */ const aside_AsideAddon = (AsideAddon);

;// CONCATENATED MODULE: ./src/modules/components/layout/aside/AsideBody.tsx

const AsideBody = createWithBsPrefix('aside-body', {
    Component: 'div'
});
/* harmony default export */ const aside_AsideBody = (AsideBody);

;// CONCATENATED MODULE: ./src/modules/components/layout/aside/AsideHeader.tsx

const AsideHeader = createWithBsPrefix('aside-header', {
    Component: 'div'
});
/* harmony default export */ const aside_AsideHeader = (AsideHeader);

;// CONCATENATED MODULE: ./src/modules/components/layout/aside/AsideTitle.tsx

const AsideTitle = createWithBsPrefix('aside-title', {
    Component: 'h3'
});
/* harmony default export */ const aside_AsideTitle = (AsideTitle);

;// CONCATENATED MODULE: ./src/modules/components/layout/portal/BackdropPortal.ts

const BackdropPortal = ({ children  })=>external_react_dom_default().createPortal(children, document.querySelector('body'))
;
/* harmony default export */ const portal_BackdropPortal = (BackdropPortal);

;// CONCATENATED MODULE: ./src/modules/components/layout/aside/Aside.tsx






const Aside_propTypes = {
    as: (external_prop_types_default()).elementType,
    desktopMinimized: (external_prop_types_default()).bool,
    mobileMinimized: (external_prop_types_default()).bool,
    backdropOnClick: (external_prop_types_default()).func
};
const Aside = /*#__PURE__*/ external_react_default().forwardRef(({ as: Component = 'div' , bsPrefix , className , desktopMinimized , mobileMinimized , backdropOnClick , children , ...props }, ref)=>{
    bsPrefix = useBootstrapPrefix(bsPrefix, 'aside');
    const [hoverable, setHoverable] = external_react_default().useState(false);
    const viewportBreakpoint = 1025;
    const transitionDuration = 200;
    const backdropId = `${bsPrefix}-backdrop`;
    const activeClass = `${bsPrefix}-active`;
    const hoverClass = `${bsPrefix}-hover`;
    const stateClasses = {
        desktop: {
            minimized: `${bsPrefix}-desktop-minimized`,
            maximized: `${bsPrefix}-desktop-maximized`
        },
        mobile: {
            minimized: `${bsPrefix}-mobile-minimized`,
            maximized: `${bsPrefix}-mobile-maximized`
        }
    };
    const toggleMinimized = (viewport, minimized)=>{
        if (minimized) {
            document.body.classList.add(stateClasses[viewport].minimized);
            document.body.classList.remove(stateClasses[viewport].maximized);
        } else {
            document.body.classList.add(stateClasses[viewport].maximized);
            document.body.classList.remove(stateClasses[viewport].minimized);
        }
        if (viewport === 'desktop') {
            if (minimized) {
                setTimeout(()=>{
                    setHoverable(true);
                }, transitionDuration);
            } else {
                setHoverable(false);
            }
        }
    };
    const backdropClick = (e)=>{
        if (backdropOnClick) {
            backdropOnClick(e);
        }
    };
    external_react_default().useLayoutEffect(()=>{
        if (window.innerWidth >= viewportBreakpoint) {
            toggleMinimized('desktop', desktopMinimized);
        } else {
            toggleMinimized('mobile', mobileMinimized);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        desktopMinimized,
        mobileMinimized
    ]);
    external_react_default().useLayoutEffect(()=>{
        document.body.classList.add(activeClass);
        toggleMinimized('desktop', desktopMinimized);
        toggleMinimized('mobile', mobileMinimized);
        setTimeout(()=>{
            window.dispatchEvent(new Event('resize'));
        }, transitionDuration * 2);
        return ()=>{
            document.body.classList.remove(activeClass);
            document.body.classList.remove(stateClasses.desktop.maximized);
            document.body.classList.remove(stateClasses.desktop.minimized);
            document.body.classList.remove(stateClasses.mobile.maximized);
            document.body.classList.remove(stateClasses.mobile.minimized);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component, {
        ref: ref,
        ...props,
        className: external_classnames_default()(className, bsPrefix, {
            [hoverClass]: hoverable
        }),
        children: [
            children,
            !mobileMinimized && /*#__PURE__*/ jsx_runtime_.jsx(portal_BackdropPortal, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: backdropId,
                    style: {
                        opacity: 1
                    },
                    onClick: backdropClick
                })
            })
        ]
    }));
});
Aside.propTypes = Aside_propTypes;
Aside.displayName = 'Aside';
/* harmony default export */ const aside_Aside = (Aside);

;// CONCATENATED MODULE: ./src/modules/components/layout/aside/AsideNoSSR.tsx





// const Aside = dynamic(() => import('./Aside'), {
// 	ssr: false,
// })
/* harmony default export */ const AsideNoSSR = (Object.assign(aside_Aside, {
    Body: aside_AsideBody,
    Header: aside_AsideHeader,
    Title: aside_AsideTitle,
    Addon: aside_AsideAddon
}));

;// CONCATENATED MODULE: ./src/modules/components/carousel/CarouselItem.tsx

const CarouselItem = createWithBsPrefix('carousel-item', {
    Component: 'div'
});
/* harmony default export */ const carousel_CarouselItem = ((/* unused pure expression or super */ null && (CarouselItem)));

;// CONCATENATED MODULE: ./src/modules/components/_theme/helpers.ts
const MEDIA = '(prefers-color-scheme: dark)';
const COLOR_SCHEMES = [
    'light',
    'dark'
];
const getTheme = (key, fallback)=>{
    if (true) return undefined;
    let theme;
    try {
        theme = localStorage.getItem(key) || undefined;
    } catch (e) {
    // Unsupported
    }
    return theme || fallback;
};
const disableAnimation = ()=>{
    const css = document.createElement('style');
    css.appendChild(document.createTextNode(`*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`));
    document.head.appendChild(css);
    return ()=>{
        (()=>window.getComputedStyle(document.body)
        )();
        // Wait for next tick before removing
        setTimeout(()=>{
            document.head.removeChild(css);
        }, 1);
    };
};
const getSystemTheme = (e)=>{
    if (!e) {
        e = window.matchMedia(MEDIA);
    }
    const isDark = e.matches;
    const systemTheme = isDark ? 'dark' : 'light';
    return systemTheme;
};

;// CONCATENATED MODULE: ./src/modules/components/_theme/ThemeContextHook.tsx

const ThemeContext = /*#__PURE__*/ external_react_default().createContext({
    setTheme: (_)=>{
    },
    themes: []
});
const useTheme = ()=>external_react_default().useContext(ThemeContext)
;

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/modules/components/_theme/ThemeScript.tsx




const ThemeScript = /*#__PURE__*/ external_react_default().memo(({ forcedTheme , storageKey , attribute , enableSystem , defaultTheme , value , attrs  })=>{
    // Code-golfing the amount of characters in the script
    const optimization = (()=>{
        if (attribute === 'class') {
            const removeClasses = `d.remove(${attrs.map((t)=>`'${t}'`
            ).join(',')})`;
            return `var d=document.documentElement.classList;${removeClasses};`;
        } else {
            return `var d=document.documentElement;`;
        }
    })();
    const updateDOM = (name, literal)=>{
        name = (value === null || value === void 0 ? void 0 : value[name]) || name;
        const val = literal ? name : `'${name}'`;
        if (attribute === 'class') {
            return `d.add(${val})`;
        }
        return `d.setAttribute('${attribute}', ${val})`;
    };
    const defaultSystem = defaultTheme === 'system';
    return(/*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
        children: forcedTheme ? /*#__PURE__*/ jsx_runtime_.jsx("script", {
            dangerouslySetInnerHTML: {
                // These are minified via Terser and then updated by hand, don't recommend
                // prettier-ignore
                __html: `!function(){${optimization}${updateDOM(forcedTheme)}}()`
            }
        }, "next-themes-script") : enableSystem ? /*#__PURE__*/ jsx_runtime_.jsx("script", {
            dangerouslySetInnerHTML: {
                // prettier-ignore
                __html: `!function(){try {${optimization}var e=localStorage.getItem('${storageKey}');${!defaultSystem ? updateDOM(defaultTheme) + ';' : ''}if("system"===e||(!e&&${defaultSystem})){var t="${MEDIA}",m=window.matchMedia(t);m.media!==t||m.matches?${updateDOM('dark')}:${updateDOM('light')}}else if(e) ${value ? `var x=${JSON.stringify(value)};` : ''}${updateDOM(value ? 'x[e]' : 'e', true)}}catch(e){}}()`
            }
        }, "next-themes-script") : /*#__PURE__*/ jsx_runtime_.jsx("script", {
            dangerouslySetInnerHTML: {
                // prettier-ignore
                __html: `!function(){try{${optimization}var e=localStorage.getItem("${storageKey}");if(e){${value ? `var x=${JSON.stringify(value)};` : ''}${updateDOM(value ? 'x[e]' : 'e', true)}}else{${updateDOM(defaultTheme)};}}catch(t){}}();`
            }
        }, "next-themes-script")
    }));
}, (prevProps, nextProps)=>{
    // Only re-render when forcedTheme changes
    // the rest of the props should be completely stable
    if (prevProps.forcedTheme !== nextProps.forcedTheme) return false;
    return true;
});
ThemeScript.displayName = 'ThemeScript';
/* harmony default export */ const _theme_ThemeScript = (ThemeScript);

;// CONCATENATED MODULE: ./src/modules/components/_theme/ThemeProvider.tsx





const ThemeProvider = ({ forcedTheme , disableTransitionOnChange =false , enableSystem =true , enableColorScheme =true , storageKey ='buc-theme' , themes =[
    'light',
    'dark'
] , defaultTheme =enableSystem ? 'system' : 'light' , attribute ='data-theme' , value , children ,  })=>{
    const [theme1, setThemeState] = external_react_default().useState(()=>getTheme(storageKey, defaultTheme)
    );
    const [resolvedTheme, setResolvedTheme] = external_react_default().useState(()=>getTheme(storageKey)
    );
    const attrs = !value ? themes : Object.values(value);
    const handleMediaQuery = external_react_default().useCallback((e)=>{
        const systemTheme = getSystemTheme(e);
        setResolvedTheme(systemTheme);
        if (theme1 === 'system' && !forcedTheme) changeTheme(systemTheme, false);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        theme1,
        forcedTheme
    ]);
    // Ref hack to avoid adding handleMediaQuery as a dep
    const mediaListener = external_react_default().useRef(handleMediaQuery);
    mediaListener.current = handleMediaQuery;
    const changeTheme = external_react_default().useCallback((theme, updateStorage = true, updateDOM = true)=>{
        let name = (value === null || value === void 0 ? void 0 : value[theme]) || theme;
        const enable = disableTransitionOnChange && updateDOM ? disableAnimation() : null;
        if (updateStorage) {
            try {
                localStorage.setItem(storageKey, theme);
            } catch (e) {
            // Unsupported
            }
        }
        if (theme === 'system' && enableSystem) {
            const resolved = getSystemTheme();
            name = (value === null || value === void 0 ? void 0 : value[resolved]) || resolved;
        }
        if (updateDOM) {
            const d = document.documentElement;
            if (attribute === 'class') {
                d.classList.remove(...attrs);
                d.classList.add(name);
            } else {
                d.setAttribute(attribute, name);
            }
            enable === null || enable === void 0 ? void 0 : enable();
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    external_react_default().useEffect(()=>{
        const handler = (...args)=>mediaListener.current(...args)
        ;
        // Always listen to System preference
        const media = window.matchMedia(MEDIA);
        // Intentionally use deprecated listener methods to support iOS & old browsers
        media.addListener(handler);
        handler(media);
        return ()=>media.removeListener(handler)
        ;
    }, []);
    const setTheme = external_react_default().useCallback((newTheme)=>{
        if (forcedTheme) {
            changeTheme(newTheme, true, false);
        } else {
            changeTheme(newTheme);
        }
        setThemeState(newTheme);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        forcedTheme
    ]);
    // localStorage event handling
    external_react_default().useEffect(()=>{
        const handleStorage = (e)=>{
            if (e.key !== storageKey) {
                return;
            }
            // If default theme set, use it if localstorage === null (happens on local storage manual deletion)
            const theme = e.newValue || defaultTheme;
            setTheme(theme);
        };
        window.addEventListener('storage', handleStorage);
        return ()=>window.removeEventListener('storage', handleStorage)
        ;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        setTheme
    ]);
    // color-scheme handling
    external_react_default().useEffect(()=>{
        if (!enableColorScheme) return;
        let colorScheme = // If theme is forced to light or dark, use that
        forcedTheme && COLOR_SCHEMES.includes(forcedTheme) ? forcedTheme : theme1 && COLOR_SCHEMES.includes(theme1) ? theme1 : theme1 === 'system' ? resolvedTheme || null : null;
        // color-scheme tells browser how to render built-in elements like forms, scrollbars, etc.
        // if color-scheme is null, this will remove the property
        document.documentElement.style.setProperty('color-scheme', colorScheme);
    }, [
        enableColorScheme,
        theme1,
        resolvedTheme,
        forcedTheme
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ThemeContext.Provider, {
        value: {
            theme: theme1,
            setTheme,
            forcedTheme,
            resolvedTheme: theme1 === 'system' ? resolvedTheme : theme1,
            themes: enableSystem ? [
                ...themes,
                'system'
            ] : themes,
            systemTheme: enableSystem ? resolvedTheme : undefined
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(_theme_ThemeScript, {
                forcedTheme,
                storageKey,
                attribute,
                value,
                enableSystem,
                defaultTheme,
                attrs
            }),
            children
        ]
    }));
};
/* harmony default export */ const _theme_ThemeProvider = (ThemeProvider);

;// CONCATENATED MODULE: ./src/modules/components/_direction/helpers.ts
const getSystemDirection = (fallback)=>{
    if (typeof document === 'undefined') return undefined;
    let direction;
    try {
        direction = document.documentElement.dir || undefined;
    } catch (e) {
    // Unsupported
    }
    return direction || fallback;
};
const animationStyleId = 'buc-direction-style';
function helpers_disableAnimation() {
    const styleElement = document.createElement('style');
    styleElement.setAttribute('id', animationStyleId);
    styleElement.textContent = `
	* {
		animation: none !important;
		transition: none !important;
	}
	`;
    document.head.append(styleElement);
}
function enableAnimation() {
    setTimeout(()=>{
        var ref;
        (ref = document.getElementById(animationStyleId)) === null || ref === void 0 ? void 0 : ref.remove();
    }, 1000);
}

;// CONCATENATED MODULE: ./src/modules/components/_direction/DirectionProvider.tsx





function DirectionProvider({ defaultDirection ='ltr' , children  }) {
    const [dir, setDir] = external_react_default().useState(()=>getSystemDirection() || defaultDirection
    );
    const contextValue = external_react_default().useMemo(()=>({
            dir,
            setDir
        })
    , [
        dir,
        setDir
    ]);
    external_react_default().useEffect(()=>{
        document.documentElement.dir = dir;
        helpers_disableAnimation();
        enableAnimation();
    }, [
        dir
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(DirectionContext.Provider, {
        value: contextValue,
        children: children
    }));
}
/* harmony default export */ const _direction_DirectionProvider = (DirectionProvider);

;// CONCATENATED MODULE: ./src/modules/components/index.tsx
















































































































/***/ })

};
;