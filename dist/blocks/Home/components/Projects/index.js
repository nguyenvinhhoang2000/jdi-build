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
var index_1 = require("constants/index");
var AppButton_1 = require("components/AppButton");
var Component_1 = require("blocks/FilterProject/Component");
var Projects_module_scss_1 = __importDefault(require("./Projects.module.scss"));
function Projects(_a) {
    var projects = _a.projects;
    return (react_1.default.createElement("div", { className: Projects_module_scss_1.default.ProjectWrapper },
        react_1.default.createElement("div", { className: Projects_module_scss_1.default.Project },
            react_1.default.createElement("div", { className: Projects_module_scss_1.default.Content },
                react_1.default.createElement(AppButton_1.AppButton, { classes: Projects_module_scss_1.default.Link, outline: true, href: index_1.LOCATIONS.PROJECTS }, "Case Study"),
                react_1.default.createElement("h1", { className: Projects_module_scss_1.default.Title }, "PROJECTS"),
                react_1.default.createElement("span", { className: Projects_module_scss_1.default.SubTitle }, "We are a highly flexible team that strives to meld our best practices with existing structures and processes of our clients.")),
            react_1.default.createElement(Component_1.Component, { projects: projects }))));
}
exports.default = (0, react_1.memo)(Projects);
