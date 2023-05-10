"use strict";
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
var react_1 = __importStar(require("react"));
var Component_1 = require("blocks/Slider/Component");
var bg_circle_svg_1 = __importDefault(require("../../../../public/images/Services/bg_circle.svg"));
var index_1 = require("../../../../constants/index");
var Services_module_scss_1 = __importDefault(require("./Services.module.scss"));
var AppButton_1 = require("../../../../components/AppButton");
function Services(_a) {
    var slides = _a.slides;
    return (react_1.default.createElement("div", { className: Services_module_scss_1.default.ServicesWrapper },
        react_1.default.createElement(bg_circle_svg_1.default, { className: Services_module_scss_1.default.Background }),
        react_1.default.createElement("div", { className: Services_module_scss_1.default.Services },
            react_1.default.createElement(AppButton_1.AppButton, { href: index_1.LOCATIONS.SERVICES, outline: true }, "Our Solutions"),
            react_1.default.createElement("div", { className: Services_module_scss_1.default.Title }, "Services"),
            react_1.default.createElement("div", { className: Services_module_scss_1.default.Desc }, "We produce bespoke solutions to help you make an impact"),
            react_1.default.createElement(Component_1.Component, { slides: slides }))));
}
Services.propTypes = {};
exports.default = (0, react_1.memo)(Services);
