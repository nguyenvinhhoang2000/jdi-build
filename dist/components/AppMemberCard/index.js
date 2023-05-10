"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var AppMemberCard_module_scss_1 = __importDefault(require("./AppMemberCard.module.scss"));
function AppMemberCard(props) {
    var centerd = props.centerd, data = props.data;
    return (react_1.default.createElement("div", { className: "".concat(AppMemberCard_module_scss_1.default.Team, " ").concat(centerd ? AppMemberCard_module_scss_1.default.Centerd : '') },
        react_1.default.createElement("div", { className: AppMemberCard_module_scss_1.default.BgOverlay }),
        react_1.default.createElement("div", { className: AppMemberCard_module_scss_1.default.Content },
            react_1.default.createElement(image_1.default, { height: 117, width: 136, className: AppMemberCard_module_scss_1.default.Img, src: data.image.url || data.image, alt: data.name }),
            react_1.default.createElement("h1", { className: AppMemberCard_module_scss_1.default.Name }, data.name),
            react_1.default.createElement("span", { className: AppMemberCard_module_scss_1.default.Role }, data.title))));
}
exports.default = AppMemberCard;
