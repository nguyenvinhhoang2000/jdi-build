"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = __importDefault(require("react"));
var AppBreadcrumb_1 = __importDefault(require("../../components/AppBreadcrumb"));
var TitlePage_module_scss_1 = __importDefault(require("./TitlePage.module.scss"));
var AppTitle_1 = require("../../components/AppTitle");
var Component = function (props) {
    var blockName = props.blockName, breadcrumb = props.breadcrumb;
    return (react_1.default.createElement("div", { className: TitlePage_module_scss_1.default.TitlePageWrapper },
        react_1.default.createElement("div", { className: TitlePage_module_scss_1.default.TitlePage },
            react_1.default.createElement(AppBreadcrumb_1.default, { classes: TitlePage_module_scss_1.default.BreadCrumb, list: breadcrumb }),
            react_1.default.createElement(AppTitle_1.AppTitle, { classes: TitlePage_module_scss_1.default.Title }, blockName))));
};
exports.Component = Component;
