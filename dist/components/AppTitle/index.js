"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppTitle = void 0;
var react_1 = __importDefault(require("react"));
var AppTitle_module_scss_1 = __importDefault(require("./AppTitle.module.scss"));
var AppTitle = function (props) {
    var classes = props.classes, children = props.children;
    return (react_1.default.createElement("h1", { className: "".concat(classes, " ").concat(AppTitle_module_scss_1.default.Title) }, children));
};
exports.AppTitle = AppTitle;
