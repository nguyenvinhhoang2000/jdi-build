"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("constants/index");
var AppMemberCard_1 = __importDefault(require("components/AppMemberCard"));
var AppButton_1 = require("components/AppButton");
var partner_1_png_1 = __importDefault(require("public/images/Teams/partner-1.png"));
var partner_2_png_1 = __importDefault(require("public/images/Teams/partner-2.png"));
var partner_3_png_1 = __importDefault(require("public/images/Teams/partner-3.png"));
var partner_4_png_1 = __importDefault(require("public/images/Teams/partner-4.png"));
var MeetOurTeam_module_scss_1 = __importDefault(require("./MeetOurTeam.module.scss"));
var MEMBER_LIST = [
    {
        id: '1',
        name: 'George Nguyen',
        title: 'FOUNDER & Managing Partner',
        image: partner_1_png_1.default,
    },
    {
        id: '2',
        name: 'Frank Lee',
        title: 'Managing Partner',
        image: partner_2_png_1.default,
    },
    {
        id: '3',
        name: 'Trung Nguyen',
        title: 'Community Manager',
        image: partner_3_png_1.default,
    },
    {
        id: '4',
        name: 'Sinh Ha',
        title: 'Solution Architect',
        image: partner_4_png_1.default,
    },
];
function MeetOurTeam() {
    return (react_1.default.createElement("div", { className: MeetOurTeam_module_scss_1.default.TeamWrapper },
        react_1.default.createElement("div", { className: MeetOurTeam_module_scss_1.default.CricleBlur }),
        react_1.default.createElement("div", { className: MeetOurTeam_module_scss_1.default.Team },
            react_1.default.createElement(AppButton_1.AppButton, { href: index_1.LOCATIONS.TEAM, outline: true, classes: MeetOurTeam_module_scss_1.default.Link }, "CORE TEAM"),
            react_1.default.createElement("h1", { className: MeetOurTeam_module_scss_1.default.Title }, "Meet Our Team"),
            react_1.default.createElement("div", { className: MeetOurTeam_module_scss_1.default.MemberWrapper }, MEMBER_LIST.map(function (item) { return (react_1.default.createElement(AppMemberCard_1.default, { key: item.id, data: item })); })))));
}
MeetOurTeam.propTypes = {};
exports.default = MeetOurTeam;
