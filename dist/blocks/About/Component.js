"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var Union_svg_1 = __importDefault(require("../../assets/images/AnimateBg/Union.svg"));
var Union_1_svg_1 = __importDefault(require("../../assets/images/AnimateBg/Union-1.svg"));
var Union_2_svg_1 = __importDefault(require("../../assets/images/AnimateBg/Union-2.svg"));
var Union_3_svg_1 = __importDefault(require("../../assets/images/AnimateBg/Union-3.svg"));
var Union_4_svg_1 = __importDefault(require("../../assets/images/AnimateBg/Union-4.svg"));
var Union_5_svg_1 = __importDefault(require("../../assets/images/AnimateBg/Union-5.svg"));
var Union_6_svg_1 = __importDefault(require("../../assets/images/AnimateBg/Union-6.svg"));
var Union_7_svg_1 = __importDefault(require("../../assets/images/AnimateBg/Union-7.svg"));
var Union_8_svg_1 = __importDefault(require("../../assets/images/AnimateBg/Union-8.svg"));
var Union_9_svg_1 = __importDefault(require("../../assets/images/AnimateBg/Union-9.svg"));
var About_module_scss_1 = __importDefault(require("./About.module.scss"));
var RichText_1 = __importDefault(require("../../components/RichText"));
var Component = function (props) {
    var image = props.image, title = props.title, content = props.content, card = props.card;
    return (react_1.default.createElement("div", { className: About_module_scss_1.default.AboutWrapper },
        react_1.default.createElement("div", { className: About_module_scss_1.default.About },
            react_1.default.createElement("div", { className: About_module_scss_1.default.ImageWrapper },
                react_1.default.createElement(Union_svg_1.default, { className: "".concat(About_module_scss_1.default.Background, " ").concat(About_module_scss_1.default.Bg1) }),
                react_1.default.createElement(Union_1_svg_1.default, { className: "".concat(About_module_scss_1.default.Background, " ").concat(About_module_scss_1.default.Bg2) }),
                react_1.default.createElement(Union_2_svg_1.default, { className: "".concat(About_module_scss_1.default.Background, " ").concat(About_module_scss_1.default.Bg3) }),
                react_1.default.createElement(Union_3_svg_1.default, { className: "".concat(About_module_scss_1.default.Background, " ").concat(About_module_scss_1.default.Bg4) }),
                react_1.default.createElement(Union_4_svg_1.default, { className: "".concat(About_module_scss_1.default.Background, " ").concat(About_module_scss_1.default.Bg5) }),
                react_1.default.createElement(Union_5_svg_1.default, { className: "".concat(About_module_scss_1.default.Background, " ").concat(About_module_scss_1.default.Bg6) }),
                react_1.default.createElement(Union_6_svg_1.default, { className: "".concat(About_module_scss_1.default.Background, " ").concat(About_module_scss_1.default.Bg7) }),
                react_1.default.createElement(Union_7_svg_1.default, { className: "".concat(About_module_scss_1.default.Background, " ").concat(About_module_scss_1.default.Bg8) }),
                react_1.default.createElement(Union_8_svg_1.default, { className: "".concat(About_module_scss_1.default.Background, " ").concat(About_module_scss_1.default.Bg9) }),
                react_1.default.createElement(Union_9_svg_1.default, { className: "".concat(About_module_scss_1.default.Background, " ").concat(About_module_scss_1.default.Bg10) }),
                react_1.default.createElement(image_1.default, { height: 466, width: 337, src: image.url, alt: "image", className: About_module_scss_1.default.Image })),
            react_1.default.createElement("div", { className: About_module_scss_1.default.Content },
                react_1.default.createElement("div", { className: About_module_scss_1.default.Title }, title),
                react_1.default.createElement("div", { className: About_module_scss_1.default.CardWrapper }, card.map(function (item) { return (react_1.default.createElement("div", { key: item.id, className: About_module_scss_1.default.Card },
                    react_1.default.createElement("div", { className: About_module_scss_1.default.Title }, item.title),
                    react_1.default.createElement("div", { className: About_module_scss_1.default.Desc }, item.desc))); })),
                react_1.default.createElement("div", { className: About_module_scss_1.default.TextArea },
                    react_1.default.createElement(RichText_1.default, { content: content }))))));
};
exports.Component = Component;
