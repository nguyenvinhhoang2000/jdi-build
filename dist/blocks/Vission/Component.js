"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var AI_brain_png_1 = __importDefault(require("../../assets/images/AboutUs/AI-brain.png"));
var bg_1_png_1 = __importDefault(require("../../assets/images/AboutUs/bg-1.png"));
var bg_2_png_1 = __importDefault(require("../../assets/images/AboutUs/bg-2.png"));
var Vission_module_scss_1 = __importDefault(require("./Vission.module.scss"));
var Component = function (props) {
    var blockName = props.blockName, vission = props.vission;
    return (react_1.default.createElement("div", { className: Vission_module_scss_1.default.VissionWrapper },
        react_1.default.createElement("div", { className: Vission_module_scss_1.default.Vission },
            react_1.default.createElement("div", { className: Vission_module_scss_1.default.BackGround },
                react_1.default.createElement(image_1.default, { height: 404, width: 579, src: bg_1_png_1.default, alt: "background", className: Vission_module_scss_1.default.Bg1 }),
                react_1.default.createElement(image_1.default, { height: 397, width: 325, src: bg_2_png_1.default, alt: "background", className: Vission_module_scss_1.default.Bg2 }),
                react_1.default.createElement(image_1.default, { height: 310, width: 334, src: AI_brain_png_1.default, alt: "background", className: Vission_module_scss_1.default.Brain })),
            blockName && react_1.default.createElement("div", { className: Vission_module_scss_1.default.Title }, blockName),
            react_1.default.createElement("div", { className: Vission_module_scss_1.default.Container }, vission.map(function (item) { return (react_1.default.createElement("div", { key: item.id, className: Vission_module_scss_1.default.Item },
                react_1.default.createElement("div", { className: Vission_module_scss_1.default.TitleCard }, item.title),
                react_1.default.createElement("div", { className: Vission_module_scss_1.default.Desc, dangerouslySetInnerHTML: { __html: item.desc.replaceAll('\n', '<br/>') } }))); })))));
};
exports.Component = Component;
