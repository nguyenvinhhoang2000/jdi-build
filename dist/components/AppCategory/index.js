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
var AppCategory_module_scss_1 = __importDefault(require("./AppCategory.module.scss"));
function AppCategory(props) {
    var center = props.center, data = props.data, selected = props.selected, onClick = props.onClick;
    return (react_1.default.createElement("div", { className: "".concat(AppCategory_module_scss_1.default.CategoryWrapper, " ").concat(center && AppCategory_module_scss_1.default.Center) }, data.map(function (item) { return (react_1.default.createElement("div", { key: item.value, role: "button", onKeyDown: function () { return null; }, tabIndex: 0, onClick: onClick(item.value), className: "".concat(AppCategory_module_scss_1.default.Category, " ").concat(selected === item.value ? AppCategory_module_scss_1.default.Active : '') },
        react_1.default.createElement("div", { className: AppCategory_module_scss_1.default.Overlay }, item.label))); })));
}
exports.default = (0, react_1.memo)(AppCategory);
