"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
var react_1 = __importDefault(require("react"));
var arrow_right_small_svg_1 = __importDefault(require("public/images/Icons/arrow-right-small.svg"));
var constants_1 = require("../../constants");
var AppBreadcrumb_module_scss_1 = __importDefault(require("./AppBreadcrumb.module.scss"));
var AppBreadcrumb = function (props) {
    var classes = props.classes, list = props.list;
    return (react_1.default.createElement("div", { className: "".concat(AppBreadcrumb_module_scss_1.default.BreadCrumb, " ").concat(classes) },
        react_1.default.createElement(link_1.default, { href: constants_1.LOCATIONS.HOME }, "Home"), list === null || list === void 0 ? void 0 :
        list.map(function (_a) {
            var _b;
            var link = _a.link;
            return (react_1.default.createElement("div", { key: link.url },
                react_1.default.createElement("span", null, "/"),
                react_1.default.createElement(link_1.default, { href: link.type === 'page' ? "/".concat((_b = link.page) === null || _b === void 0 ? void 0 : _b.slug) : link.url }, link.label)));
        }),
        react_1.default.createElement(arrow_right_small_svg_1.default, { className: AppBreadcrumb_module_scss_1.default.Icon })));
};
exports.default = AppBreadcrumb;
