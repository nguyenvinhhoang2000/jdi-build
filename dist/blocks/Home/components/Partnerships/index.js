"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var partner_2_png_1 = __importDefault(require("../../../../public/images/Partnerships/partner-2.png"));
var partner_3_png_1 = __importDefault(require("../../../../public/images/Partnerships/partner-3.png"));
var partner_4_png_1 = __importDefault(require("../../../../public/images/Partnerships/partner-4.png"));
var partner_1_png_1 = __importDefault(require("../../../../public/images/Partnerships/partner-1.png"));
var Partnerships_module_scss_1 = __importDefault(require("./Partnerships.module.scss"));
function Partnerships() {
    return (react_1.default.createElement("div", { className: Partnerships_module_scss_1.default.PartnerWrapper },
        react_1.default.createElement("div", { className: Partnerships_module_scss_1.default.CricleBlur }),
        react_1.default.createElement("div", { className: Partnerships_module_scss_1.default.Partner },
            react_1.default.createElement("h1", { className: Partnerships_module_scss_1.default.Title }, "Partnerships"),
            react_1.default.createElement("div", { className: Partnerships_module_scss_1.default.ItemWrapper },
                react_1.default.createElement("div", { className: Partnerships_module_scss_1.default.Item },
                    react_1.default.createElement(image_1.default, { src: partner_1_png_1.default, alt: "Partnership" })),
                react_1.default.createElement("div", { className: Partnerships_module_scss_1.default.Item },
                    react_1.default.createElement(image_1.default, { src: partner_2_png_1.default, alt: "Partnership" })),
                react_1.default.createElement("div", { className: Partnerships_module_scss_1.default.Item },
                    react_1.default.createElement(image_1.default, { src: partner_3_png_1.default, alt: "Partnership" })),
                react_1.default.createElement("div", { className: Partnerships_module_scss_1.default.Item },
                    react_1.default.createElement(image_1.default, { src: partner_4_png_1.default, alt: "Partnership" }))))));
}
exports.default = Partnerships;
