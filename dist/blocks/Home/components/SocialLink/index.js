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
var link_1 = __importDefault(require("next/link"));
var facebook_svg_1 = __importDefault(require("public/images/Icons/facebook.svg"));
var linkedin_svg_1 = __importDefault(require("public/images/Icons/linkedin.svg"));
var twitter_svg_1 = __importDefault(require("public/images/Icons/twitter.svg"));
var telegram_svg_1 = __importDefault(require("public/images/Icons/telegram.svg"));
var index_1 = require("../../../../constants/index");
var SocialLink_module_scss_1 = __importDefault(require("./SocialLink.module.scss"));
function SocialLink() {
    return (react_1.default.createElement("div", { className: SocialLink_module_scss_1.default.Social },
        react_1.default.createElement("div", { className: SocialLink_module_scss_1.default.Line }),
        react_1.default.createElement(link_1.default, { className: SocialLink_module_scss_1.default.Icon, href: index_1.LOCATIONS.FACEBOOK, target: "_blank" },
            react_1.default.createElement(facebook_svg_1.default, null)),
        react_1.default.createElement(link_1.default, { className: SocialLink_module_scss_1.default.Icon, href: index_1.LOCATIONS.LINKED_IN, target: "_blank" },
            react_1.default.createElement(linkedin_svg_1.default, null)),
        react_1.default.createElement(link_1.default, { className: SocialLink_module_scss_1.default.Icon, href: index_1.LOCATIONS.TWITTER, target: "_blank" },
            react_1.default.createElement(twitter_svg_1.default, null)),
        react_1.default.createElement(link_1.default, { className: SocialLink_module_scss_1.default.Icon, href: index_1.LOCATIONS.TELEGRAM, target: "_blank" },
            react_1.default.createElement(telegram_svg_1.default, null))));
}
exports.default = (0, react_1.memo)(SocialLink);
