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
var AppButton_1 = require("components/AppButton");
var man_png_1 = __importDefault(require("public/images/AboutUs/man.png"));
var Union_svg_1 = __importDefault(require("public/images/AnimateBg/Union.svg"));
var Union_1_svg_1 = __importDefault(require("public/images/AnimateBg/Union-1.svg"));
var Union_2_svg_1 = __importDefault(require("public/images/AnimateBg/Union-2.svg"));
var Union_3_svg_1 = __importDefault(require("public/images/AnimateBg/Union-3.svg"));
var Union_4_svg_1 = __importDefault(require("public/images/AnimateBg/Union-4.svg"));
var Union_5_svg_1 = __importDefault(require("public/images/AnimateBg/Union-5.svg"));
var Union_6_svg_1 = __importDefault(require("public/images/AnimateBg/Union-6.svg"));
var Union_7_svg_1 = __importDefault(require("public/images/AnimateBg/Union-7.svg"));
var Union_8_svg_1 = __importDefault(require("public/images/AnimateBg/Union-8.svg"));
var Union_9_svg_1 = __importDefault(require("public/images/AnimateBg/Union-9.svg"));
var index_1 = require("../../../../constants/index");
var AboutUs_module_scss_1 = __importDefault(require("./AboutUs.module.scss"));
function AboutUs() {
    return (react_1.default.createElement("div", { className: AboutUs_module_scss_1.default.AboutWrapper },
        react_1.default.createElement("div", { className: AboutUs_module_scss_1.default.About },
            react_1.default.createElement("div", { className: AboutUs_module_scss_1.default.ImgWrapper },
                react_1.default.createElement(Union_svg_1.default, { className: "".concat(AboutUs_module_scss_1.default.Background, " ").concat(AboutUs_module_scss_1.default.Bg1) }),
                react_1.default.createElement(Union_1_svg_1.default, { className: "".concat(AboutUs_module_scss_1.default.Background, " ").concat(AboutUs_module_scss_1.default.Bg2) }),
                react_1.default.createElement(Union_2_svg_1.default, { className: "".concat(AboutUs_module_scss_1.default.Background, " ").concat(AboutUs_module_scss_1.default.Bg3) }),
                react_1.default.createElement(Union_3_svg_1.default, { className: "".concat(AboutUs_module_scss_1.default.Background, " ").concat(AboutUs_module_scss_1.default.Bg4) }),
                react_1.default.createElement(Union_4_svg_1.default, { className: "".concat(AboutUs_module_scss_1.default.Background, " ").concat(AboutUs_module_scss_1.default.Bg5) }),
                react_1.default.createElement(Union_5_svg_1.default, { className: "".concat(AboutUs_module_scss_1.default.Background, " ").concat(AboutUs_module_scss_1.default.Bg6) }),
                react_1.default.createElement(Union_6_svg_1.default, { className: "".concat(AboutUs_module_scss_1.default.Background, " ").concat(AboutUs_module_scss_1.default.Bg7) }),
                react_1.default.createElement(Union_7_svg_1.default, { className: "".concat(AboutUs_module_scss_1.default.Background, " ").concat(AboutUs_module_scss_1.default.Bg8) }),
                react_1.default.createElement(Union_8_svg_1.default, { className: "".concat(AboutUs_module_scss_1.default.Background, " ").concat(AboutUs_module_scss_1.default.Bg9) }),
                react_1.default.createElement(Union_9_svg_1.default, { className: "".concat(AboutUs_module_scss_1.default.Background, " ").concat(AboutUs_module_scss_1.default.Bg10) }),
                react_1.default.createElement(image_1.default, { className: AboutUs_module_scss_1.default.Img, src: man_png_1.default, alt: "Img" })),
            react_1.default.createElement("div", { className: AboutUs_module_scss_1.default.Content },
                react_1.default.createElement(AppButton_1.AppButton, { href: index_1.LOCATIONS.ABOUT_US, outline: true, classes: AboutUs_module_scss_1.default.Link }, "GET TO KNOW"),
                react_1.default.createElement("h1", null, "ABOUT US"),
                react_1.default.createElement("span", { className: AboutUs_module_scss_1.default.SubTitle }, "We Design, Code, and Ship Beautiful Software"),
                react_1.default.createElement("span", { className: AboutUs_module_scss_1.default.Desc },
                    "JDI ONE is an Innovation Lab empowering entrepreneurs, startups, SMEs, and corporate ventures, to design, build, and scale their Innovation vision.",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    "In Web3, we have been building DeFi, GameFi and Metaverse platforms. Many of our projects have proceeded to raise multi-million dollars of investments.",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    "We partner with a network of security audit partners to ensure the security of our projects.",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    "In AI, we built",
                    ' ',
                    react_1.default.createElement("a", { href: "https://voicegpt.us/", target: "blank" }, "https://voicegpt.us/"),
                    ' ',
                    "and other meaningful AI-related projects for corporations.",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    "We are constantly looking out for forward-looking companies and founders, to start new journeys of disruptive innovations.")))));
}
AboutUs.propTypes = {};
exports.default = (0, react_1.memo)(AboutUs);
