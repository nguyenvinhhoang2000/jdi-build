"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var Pricing_module_scss_1 = __importDefault(require("./Pricing.module.scss"));
var STYLE_LIST = [
    Pricing_module_scss_1.default.Card1,
    Pricing_module_scss_1.default.Card2,
    Pricing_module_scss_1.default.Card3,
];
var Component = function (props) {
    var blockName = props.blockName, title = props.title, card = props.card, desc = props.desc, image = props.image;
    return (react_1.default.createElement("div", { className: Pricing_module_scss_1.default.PriceWrapper },
        react_1.default.createElement("div", { className: Pricing_module_scss_1.default.Price },
            react_1.default.createElement("div", { className: Pricing_module_scss_1.default.Cricle }),
            blockName && react_1.default.createElement("div", { className: Pricing_module_scss_1.default.Title }, blockName),
            title && (react_1.default.createElement("div", { className: Pricing_module_scss_1.default.Preferential },
                react_1.default.createElement(image_1.default, { height: 28, width: 28, src: image.url, alt: "check" }),
                title)),
            react_1.default.createElement("div", { className: Pricing_module_scss_1.default.Container }, card.map(function (item, idx) {
                var _a, _b;
                return (react_1.default.createElement("div", { className: "".concat(Pricing_module_scss_1.default.Card, " ").concat(STYLE_LIST[idx]) },
                    react_1.default.createElement("div", { className: Pricing_module_scss_1.default.BackgroundWrapper },
                        react_1.default.createElement("div", { className: Pricing_module_scss_1.default.Background })),
                    react_1.default.createElement("div", { className: Pricing_module_scss_1.default.NameWrapper },
                        react_1.default.createElement(image_1.default, { height: 100, width: 100, src: item.cardImage.url, alt: "check" }),
                        react_1.default.createElement("div", { className: Pricing_module_scss_1.default.Name }, item.name)),
                    react_1.default.createElement("div", { className: Pricing_module_scss_1.default.PriceListWrapper }, (_a = item.priceList) === null || _a === void 0 ? void 0 : _a.map(function (pl) { return (react_1.default.createElement("div", { className: Pricing_module_scss_1.default.PriceList },
                        pl.label,
                        ' ',
                        react_1.default.createElement("span", null, pl.price))); })),
                    react_1.default.createElement("div", { className: Pricing_module_scss_1.default.LineGradient }),
                    react_1.default.createElement("div", { className: Pricing_module_scss_1.default.MonthlyWrapper },
                        react_1.default.createElement("div", { className: Pricing_module_scss_1.default.Title }, "Monthly"), (_b = item.monthly) === null || _b === void 0 ? void 0 :
                        _b.map(function (m) { return (react_1.default.createElement("div", { className: Pricing_module_scss_1.default.Monthly },
                            m.label,
                            ' ',
                            react_1.default.createElement("span", null, m.price))); }))));
            })),
            desc && (react_1.default.createElement("div", { className: Pricing_module_scss_1.default.Desc }, desc)))));
};
exports.Component = Component;
