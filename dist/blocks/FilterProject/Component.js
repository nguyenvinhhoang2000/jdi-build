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
exports.Component = void 0;
var react_1 = __importStar(require("react"));
var AppCategory_1 = __importDefault(require("components/AppCategory"));
var AppProject_1 = __importDefault(require("components/AppProject"));
var index_1 = require("../../constants/index");
var FilterProject_module_scss_1 = __importDefault(require("./FilterProject.module.scss"));
var Component = function (_a) {
    var projects = _a.projects;
    var _b = (0, react_1.useState)(index_1.PROJECT_CATEGORY_TYPE.SOCIAL_FI), category = _b[0], setCategory = _b[1];
    var onClickCategory = (0, react_1.useCallback)(function (value) { return function () {
        setCategory(value);
    }; }, []);
    var projectFilter = (0, react_1.useMemo)(function () { var _a; return (_a = projects === null || projects === void 0 ? void 0 : projects.filter(function (item) { return item.category === category; })) === null || _a === void 0 ? void 0 : _a.slice(0, 3); }, [category, projects]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(AppCategory_1.default, { selected: category, onClick: onClickCategory, data: index_1.PROJECT_CATEGORY_LIST }),
        react_1.default.createElement(AppProject_1.default, { classes: FilterProject_module_scss_1.default.ProjectContainer, data: projectFilter, filter: category })));
};
exports.Component = Component;
