"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = __importDefault(require("react"));
var index_module_scss_1 = __importDefault(require("./index.module.scss"));
var index_1 = __importDefault(require("./components/Banner/index"));
var Services_1 = __importDefault(require("./components/Services"));
var AboutUs_1 = __importDefault(require("./components/AboutUs"));
var Projects_1 = __importDefault(require("./components/Projects"));
var Partnerships_1 = __importDefault(require("./components/Partnerships"));
var MeetOurTeam_1 = __importDefault(require("./components/MeetOurTeam"));
var MeetOurAdvisors_1 = __importDefault(require("./components/MeetOurAdvisors"));
var Component = function (props) {
    var homeBlock = props.homeBlock;
    return (react_1.default.createElement("div", { className: index_module_scss_1.default.Home },
        react_1.default.createElement(index_1.default, null),
        react_1.default.createElement(Services_1.default, { slides: homeBlock[0].services }),
        react_1.default.createElement(AboutUs_1.default, null),
        react_1.default.createElement(Projects_1.default, { projects: homeBlock[1].projects }),
        react_1.default.createElement(Partnerships_1.default, null),
        react_1.default.createElement(MeetOurTeam_1.default, null),
        react_1.default.createElement(MeetOurAdvisors_1.default, null),
        react_1.default.createElement("div", { className: index_module_scss_1.default.CircleAdvisor })));
};
exports.Component = Component;
