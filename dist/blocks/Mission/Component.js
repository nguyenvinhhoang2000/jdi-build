"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var Cricle_mission_png_1 = __importDefault(require("../../assets/images/AboutUs/Cricle-mission.png"));
var Mission_module_scss_1 = __importDefault(require("./Mission.module.scss"));
var Component = function (props) {
    var blockName = props.blockName, missions = props.missions;
    return (react_1.default.createElement("div", { className: Mission_module_scss_1.default.MissionWrapper },
        react_1.default.createElement("div", { className: Mission_module_scss_1.default.Mission },
            react_1.default.createElement("div", { className: Mission_module_scss_1.default.Card },
                react_1.default.createElement("div", { className: Mission_module_scss_1.default.Image },
                    react_1.default.createElement(image_1.default, { height: 362, width: 362, src: Cricle_mission_png_1.default, alt: "image" })),
                react_1.default.createElement("div", { className: Mission_module_scss_1.default.Content },
                    blockName && react_1.default.createElement("div", { className: Mission_module_scss_1.default.Title }, blockName),
                    missions.map(function (item) { return (react_1.default.createElement("div", { key: item.id, className: Mission_module_scss_1.default.List },
                        react_1.default.createElement("div", { className: Mission_module_scss_1.default.ListTitle }, item.title),
                        react_1.default.createElement("div", { className: Mission_module_scss_1.default.ListDesc }, item.desc))); }))))));
};
exports.Component = Component;
