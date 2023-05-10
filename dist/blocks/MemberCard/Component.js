"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = __importDefault(require("react"));
var MemberCard_module_scss_1 = __importDefault(require("./MemberCard.module.scss"));
var AppMemberCard_1 = __importDefault(require("../../components/AppMemberCard"));
var constants_1 = require("../../constants");
var AppButton_1 = require("../../components/AppButton");
var AppTitle_1 = require("../../components/AppTitle");
var Component = function (props) {
    var member = props.member, blockName = props.blockName, alignment = props.alignment, background = props.background, type = props.type, link = props.link;
    return (react_1.default.createElement("div", { className: MemberCard_module_scss_1.default.TeamWrapper },
        background === 'LG'
            ? react_1.default.createElement("div", { className: "".concat(MemberCard_module_scss_1.default.CricleBlur, " ").concat(type === constants_1.TITLE_TYPE.GRADIENT && MemberCard_module_scss_1.default.Pt) })
            : react_1.default.createElement("div", { className: MemberCard_module_scss_1.default.Cricle }),
        react_1.default.createElement("div", { className: MemberCard_module_scss_1.default.Team },
            type === constants_1.TITLE_TYPE.NORMAL ? (react_1.default.createElement("div", { className: MemberCard_module_scss_1.default.Title }, blockName)) : (react_1.default.createElement("div", { className: MemberCard_module_scss_1.default.Container },
                react_1.default.createElement(AppButton_1.AppButton, { href: link[0].link.page.slug, outline: true }, link[0].link.label),
                react_1.default.createElement(AppTitle_1.AppTitle, { className: MemberCard_module_scss_1.default.TitleGradient }, blockName))),
            react_1.default.createElement("div", { className: "".concat(MemberCard_module_scss_1.default.MemberWrapper, " ").concat(alignment === 'CENTER' && MemberCard_module_scss_1.default.Center) }, member === null || member === void 0 ? void 0 : member.map(function (item) { return (react_1.default.createElement(AppMemberCard_1.default, { key: item.id, centerd: alignment === 'CENTER', data: item })); })))));
};
exports.Component = Component;
