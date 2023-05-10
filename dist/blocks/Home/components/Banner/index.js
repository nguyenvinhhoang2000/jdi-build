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
var man_png_1 = __importDefault(require("public/images/Banner/man.png"));
var Rectangle_svg_1 = __importDefault(require("public/images/Banner/Rectangle.svg"));
var bg_cricle_1_svg_1 = __importDefault(require("public/images/Banner/bg-cricle-1.svg"));
var bg_cricle_2_svg_1 = __importDefault(require("public/images/Banner/bg-cricle-2.svg"));
var index_1 = require("components/AppButton/index");
var index_2 = require("../../../../constants/index");
var SocialLink_1 = __importDefault(require("../SocialLink"));
var Banner_module_scss_1 = __importDefault(require("./Banner.module.scss"));
function Banner() {
    return (react_1.default.createElement("div", { className: Banner_module_scss_1.default.BannerWrapper },
        react_1.default.createElement("div", { className: Banner_module_scss_1.default.Banner },
            react_1.default.createElement("div", { className: Banner_module_scss_1.default.CircleBanner }),
            react_1.default.createElement(Rectangle_svg_1.default, { className: Banner_module_scss_1.default.BackgroundCircle }),
            react_1.default.createElement(bg_cricle_1_svg_1.default, { className: Banner_module_scss_1.default.BackgroundCircle1 }),
            react_1.default.createElement(bg_cricle_2_svg_1.default, { className: Banner_module_scss_1.default.BackgroundCircle2 }),
            react_1.default.createElement(image_1.default, { className: Banner_module_scss_1.default.BackgroundBanner, src: man_png_1.default, alt: "background banner" }),
            react_1.default.createElement(SocialLink_1.default, null),
            react_1.default.createElement("div", { className: Banner_module_scss_1.default.Content },
                react_1.default.createElement("div", { className: Banner_module_scss_1.default.Title },
                    react_1.default.createElement("h1", null,
                        "TURNING GREAT IDEAS INTO",
                        ' ',
                        react_1.default.createElement("span", { className: Banner_module_scss_1.default.TextGradient1 }, "INNOVATIVE")),
                    react_1.default.createElement("span", { className: Banner_module_scss_1.default.TextGradient2 }, "SOLUTIONS")),
                react_1.default.createElement("span", { className: Banner_module_scss_1.default.SubTitle }, "We create works that revolutionize the way people think and work"),
                react_1.default.createElement("div", { className: Banner_module_scss_1.default.Btn },
                    react_1.default.createElement(index_1.AppButton, { href: index_2.LOCATIONS.ABOUT_US, classes: Banner_module_scss_1.default.BtnAbout, fontWeight: "lg" }, "About Us"),
                    react_1.default.createElement(index_1.AppButton, { outline: true, href: index_2.LOCATIONS.ABOUT_US, classes: Banner_module_scss_1.default.BtnProject, fontWeight: "lg" }, "See Project"))))));
}
exports.default = (0, react_1.memo)(Banner);
