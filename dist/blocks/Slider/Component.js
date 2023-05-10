"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = __importStar(require("react"));
var react_slick_1 = __importDefault(require("react-slick"));
var arrow_left_svg_1 = __importDefault(require("../../assets/images/Services/arrow-left.svg"));
var arrow_right_svg_1 = __importDefault(require("../../assets/images/Services/arrow-right.svg"));
var Slider_module_scss_1 = __importDefault(require("./Slider.module.scss"));
var ServicesCard_1 = __importDefault(require("../../components/ServicesCard"));
var Component = function (props) {
    var slides = props.slides;
    var ref = (0, react_1.useRef)({
        slickNext: function () { return null; },
        slickPrev: function () { return null; },
    });
    var onNext = (0, react_1.useCallback)(function () {
        if (ref.current) {
            ref.current.slickNext();
        }
    }, [ref]);
    var onPrev = (0, react_1.useCallback)(function () {
        if (ref.current) {
            ref.current.slickPrev();
        }
    }, [ref]);
    var settings = {
        className: 'section-outstanding__slider',
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
        speed: 500,
        // autoplay: true,
        appendDots: function (dots) { return react_1.default.createElement("ul", null, dots); },
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    dotsClass: "slick-dots ".concat(Slider_module_scss_1.default.Dots),
                },
            },
        ],
    };
    return (react_1.default.createElement("div", { className: Slider_module_scss_1.default.Slider },
        react_1.default.createElement(react_slick_1.default, __assign({ ref: ref }, settings), slides === null || slides === void 0 ? void 0 : slides.map(function (item, i) { return (react_1.default.createElement(ServicesCard_1.default, { key: i, data: item })); })),
        react_1.default.createElement("button", { className: Slider_module_scss_1.default.Prev, type: "button", onClick: onPrev },
            react_1.default.createElement(arrow_left_svg_1.default, null)),
        react_1.default.createElement("button", { className: Slider_module_scss_1.default.Next, type: "button", onClick: onNext },
            react_1.default.createElement(arrow_right_svg_1.default, null))));
};
exports.Component = Component;
