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
var ServicesCard_module_scss_1 = __importDefault(require("./ServicesCard.module.scss"));
function ServicesCard(_a) {
    var data = _a.data;
    return (react_1.default.createElement("div", { className: ServicesCard_module_scss_1.default.CardWrapper },
        react_1.default.createElement("div", { className: ServicesCard_module_scss_1.default.Card },
            react_1.default.createElement(image_1.default, { height: 86.6, width: 100, src: data.image.url, alt: "Title" }),
            react_1.default.createElement("h1", null, data.title),
            react_1.default.createElement("span", null, data.desc))));
}
exports.default = (0, react_1.memo)(ServicesCard);
