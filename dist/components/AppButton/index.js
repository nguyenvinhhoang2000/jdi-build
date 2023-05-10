"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppButton = void 0;
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
var AppButton_module_scss_1 = __importDefault(require("./AppButton.module.scss"));
var AppButton = function (props) {
    var disabled = props.disabled, loading = props.loading, outline = props.outline, href = props.href, fontWeight = props.fontWeight, classes = props.classes, name = props.name, children = props.children;
    return (href ? (react_1.default.createElement(link_1.default, { href: href, className: "".concat(classes, " ").concat(AppButton_module_scss_1.default.Btn, " ").concat(outline ? AppButton_module_scss_1.default.OutlineGradient : AppButton_module_scss_1.default.BgGradient, " ").concat(fontWeight === 'lg' && AppButton_module_scss_1.default.FontWeightLg) }, children)) : (react_1.default.createElement("button", { type: "button", className: "".concat(classes, " ").concat(AppButton_module_scss_1.default.Btn, " ").concat(outline ? AppButton_module_scss_1.default.OutlineGradient : AppButton_module_scss_1.default.BgGradient), disabled: loading || disabled }, !loading ? children
        : "".concat(name, "..."))));
};
exports.AppButton = AppButton;
