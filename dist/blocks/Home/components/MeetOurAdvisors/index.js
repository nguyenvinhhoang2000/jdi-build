"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("constants/index");
var AppMemberCard_1 = __importDefault(require("components/AppMemberCard"));
var advisor_1_png_1 = __importDefault(require("public/images/Advisors/advisor-1.png"));
var advisor_2_png_1 = __importDefault(require("public/images/Advisors/advisor-2.png"));
var advisor_3_png_1 = __importDefault(require("public/images/Advisors/advisor-3.png"));
var MeetOurAdvisors_module_scss_1 = __importDefault(require("./MeetOurAdvisors.module.scss"));
var AppButton_1 = require("../../../../components/AppButton");
var MEMBER_LIST = [
    {
        id: '1',
        name: 'Kelly Choo',
        title: 'Blockchain Advisor',
        image: advisor_1_png_1.default,
    },
    {
        id: '2',
        name: 'Kenneth Bok',
        title: 'Blockchain Advisor',
        image: advisor_2_png_1.default,
    },
    {
        id: '3',
        name: 'Jackson Ng',
        title: 'Blockchain Advisor',
        image: advisor_3_png_1.default,
    },
];
function MeetOurAdvisors() {
    return (react_1.default.createElement("div", { className: MeetOurAdvisors_module_scss_1.default.AdvisorWrapper },
        react_1.default.createElement("div", { className: MeetOurAdvisors_module_scss_1.default.Advisor },
            react_1.default.createElement(AppButton_1.AppButton, { href: index_1.LOCATIONS.TEAM, outline: true, classes: MeetOurAdvisors_module_scss_1.default.Link }, "Advisors"),
            react_1.default.createElement("h1", { className: MeetOurAdvisors_module_scss_1.default.Title }, "Meet Our Advisors"),
            react_1.default.createElement("div", { className: MeetOurAdvisors_module_scss_1.default.MemberWrapper }, MEMBER_LIST.map(function (item) { return (react_1.default.createElement(AppMemberCard_1.default, { key: item.id, centerd: true, data: item })); })))));
}
MeetOurAdvisors.propTypes = {};
exports.default = MeetOurAdvisors;
