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
var image_1 = __importDefault(require("next/image"));
var category_icon_svg_1 = __importDefault(require("public/images/Icons/category-icon.svg"));
var index_1 = require("../../constants/index");
var AppProject_module_scss_1 = __importDefault(require("./AppProject.module.scss"));
function AppProject(props) {
    var classes = props.classes, filter = props.filter, data = props.data;
    return (react_1.default.createElement("div", { className: "".concat(classes, " ").concat(AppProject_module_scss_1.default.ProjectWrapper) }, data === null || data === void 0 ? void 0 : data.map(function (item) { return (react_1.default.createElement("div", { key: item.id, className: "".concat(AppProject_module_scss_1.default.Project, " ").concat(filter === item.category ? '' : '') },
        react_1.default.createElement("div", { className: AppProject_module_scss_1.default.BgOverlay },
            react_1.default.createElement("div", { className: AppProject_module_scss_1.default.BgBlur })),
        react_1.default.createElement("div", { className: AppProject_module_scss_1.default.ImgWrapper },
            react_1.default.createElement(image_1.default, { width: 1000, height: 1000, src: item.image.url, alt: "Project", className: AppProject_module_scss_1.default.Img })),
        react_1.default.createElement("div", { className: AppProject_module_scss_1.default.Content },
            react_1.default.createElement("div", { className: AppProject_module_scss_1.default.Blur }),
            react_1.default.createElement("div", { className: AppProject_module_scss_1.default.Title }, item.title),
            react_1.default.createElement("div", { className: AppProject_module_scss_1.default.Decs }, item.desc),
            react_1.default.createElement("div", { className: AppProject_module_scss_1.default.Category },
                react_1.default.createElement(category_icon_svg_1.default, { className: AppProject_module_scss_1.default.Icon }),
                index_1.PROJECT_CATEGORY_LIST.map(function (c) {
                    if (c.value === item.category)
                        return c.label;
                    return null;
                }))))); })));
}
exports.default = (0, react_1.memo)(AppProject);
