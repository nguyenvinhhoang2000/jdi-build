"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var background_rhombus_png_1 = __importDefault(require("../../assets/images/Services/background-rhombus.png"));
var constants_1 = require("../../constants");
var ServicesList_module_scss_1 = __importDefault(require("./ServicesList.module.scss"));
var Component = function (props) {
    var services = props.services, blockName = props.blockName, background = props.background;
    return (react_1.default.createElement("div", { className: ServicesList_module_scss_1.default.ServicesWapper },
        react_1.default.createElement("div", { className: "".concat(ServicesList_module_scss_1.default.Services, " ").concat(background === constants_1.BACKGROUND_TYPE.CRICLE && ServicesList_module_scss_1.default.OverFlowHidden) },
            background === constants_1.BACKGROUND_TYPE.RHOMBUS ? (react_1.default.createElement(image_1.default, { width: 498, height: 586, alt: "background", src: background_rhombus_png_1.default, className: ServicesList_module_scss_1.default.Rhombus })) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: ServicesList_module_scss_1.default.CricleLg }),
                react_1.default.createElement("div", { className: ServicesList_module_scss_1.default.CricleSm }))),
            react_1.default.createElement("div", { className: ServicesList_module_scss_1.default.Title }, blockName),
            react_1.default.createElement("div", { className: ServicesList_module_scss_1.default.Container }, services.map(function (s, idx) { return (react_1.default.createElement("div", { key: s.id, className: ServicesList_module_scss_1.default.Item },
                react_1.default.createElement(image_1.default, { height: 70, width: 80, src: s.image.url, alt: s.title }),
                react_1.default.createElement("span", null, s.title),
                react_1.default.createElement("div", { className: ServicesList_module_scss_1.default.Idx }, idx + 1 < 10 ? "0".concat(idx + 1) : idx + 1))); })))));
};
exports.Component = Component;
