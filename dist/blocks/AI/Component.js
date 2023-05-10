"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var check_icon_svg_1 = __importDefault(require("../../assets/images/Icons/check-icon.svg"));
var background_voice_gpt_1_png_1 = __importDefault(require("../../assets/images/Services/background-voice-gpt-1.png"));
var background_voice_gpt_2_png_1 = __importDefault(require("../../assets/images/Services/background-voice-gpt-2.png"));
var voice_gpt_icon_png_1 = __importDefault(require("../../assets/images/Services/voice-gpt-icon.png"));
var AppButton_1 = require("../../components/AppButton");
var AI_module_scss_1 = __importDefault(require("./AI.module.scss"));
var CARD_LIST = [
    AI_module_scss_1.default.Card1,
    AI_module_scss_1.default.Card2,
    AI_module_scss_1.default.Card3,
    AI_module_scss_1.default.Card4,
];
var Component = function (props) {
    var blockName = props.blockName, title = props.title, list = props.list, card = props.card, buttons = props.buttons;
    return (react_1.default.createElement("div", { className: AI_module_scss_1.default.AIWrapper },
        react_1.default.createElement("div", { className: AI_module_scss_1.default.AI },
            blockName && react_1.default.createElement("div", { className: AI_module_scss_1.default.Title }, blockName),
            react_1.default.createElement("div", { className: AI_module_scss_1.default.Container },
                react_1.default.createElement("div", { className: AI_module_scss_1.default.VoiceGPTWrapper },
                    react_1.default.createElement("div", { className: AI_module_scss_1.default.VoiceGPT },
                        react_1.default.createElement(image_1.default, { width: 397, height: 411, alt: "background", src: background_voice_gpt_1_png_1.default, className: AI_module_scss_1.default.Background1 }),
                        react_1.default.createElement(image_1.default, { width: 249, height: 271, alt: "background", src: background_voice_gpt_2_png_1.default, className: AI_module_scss_1.default.Background2 }),
                        react_1.default.createElement(image_1.default, { height: 88, width: 88, src: voice_gpt_icon_png_1.default, alt: "icon", className: AI_module_scss_1.default.VoiceGPTIcon }), card === null || card === void 0 ? void 0 :
                        card.map(function (item, idx) { return (react_1.default.createElement("div", { className: "".concat(AI_module_scss_1.default.Card, " ").concat(CARD_LIST[idx]), key: idx },
                            react_1.default.createElement("div", { className: AI_module_scss_1.default.Name }, item.name),
                            react_1.default.createElement("div", { className: AI_module_scss_1.default.Desc }, item.desc),
                            react_1.default.createElement("div", { className: AI_module_scss_1.default.Icon },
                                react_1.default.createElement(image_1.default, { height: 35, width: 35, src: item.image.url, alt: item.name })))); }))),
                react_1.default.createElement("div", { className: AI_module_scss_1.default.Content },
                    react_1.default.createElement("div", { className: AI_module_scss_1.default.ContentTitle }, title),
                    react_1.default.createElement("div", { className: AI_module_scss_1.default.ContentList }, list.map(function (item) { return (react_1.default.createElement("div", { key: item.id, className: AI_module_scss_1.default.ContentListItem },
                        react_1.default.createElement(check_icon_svg_1.default, null),
                        item.title)); })),
                    buttons.length > 0 && (react_1.default.createElement(AppButton_1.AppButton, { href: buttons[0].page.slug, classes: AI_module_scss_1.default.Btn, fontWeight: "lg" }, buttons[0].label)))))));
};
exports.Component = Component;
