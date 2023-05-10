"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = __importStar(require("react"));
var link_1 = __importDefault(require("next/link"));
var formik_1 = require("formik");
var react_toastify_1 = require("react-toastify");
var location_32_svg_1 = __importDefault(require("../../assets/images/Icons/location-32.svg"));
var phone_icon_svg_1 = __importDefault(require("../../assets/images/Icons/phone-icon.svg"));
var email_32_svg_1 = __importDefault(require("../../assets/images/Icons/email-32.svg"));
// import Map from '../../assets/images/Icons/locationIcon.svg'
var facebook_fill_svg_1 = __importDefault(require("../../assets/images/Icons/facebook-fill.svg"));
var linkedin_fill_svg_1 = __importDefault(require("../../assets/images/Icons/linkedin-fill.svg"));
var twitter_fill_svg_1 = __importDefault(require("../../assets/images/Icons/twitter-fill.svg"));
var telegram_fill_svg_1 = __importDefault(require("../../assets/images/Icons/telegram-fill.svg"));
var bg_wave_svg_1 = __importDefault(require("../../assets/images/ContactUs/bg-wave.svg"));
var Location_module_scss_1 = __importDefault(require("./Location.module.scss"));
var Component = function (props) {
    var facebook = props.facebook, linkedin = props.linkedin, twitter = props.twitter, telegram = props.telegram, location = props.location, phone = props.phone, email = props.email, map = props.map;
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1];
    var validation = (0, formik_1.useFormik)({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            subject: '',
            message: '',
        },
        onSubmit: function (values) { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        return [4 /*yield*/, fetch('/api/form-submissions', {
                                body: JSON.stringify(__assign(__assign({}, values), { source: 'Website Contact Page' })),
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                method: 'post',
                            })];
                    case 1:
                        res = _a.sent();
                        if (res.status === 201) {
                            setLoading(false);
                            react_toastify_1.toast.success('Thank for questtion');
                            validation.resetForm();
                        }
                        else {
                            setLoading(false);
                            react_toastify_1.toast.error('There was a problem submitting your request. Please check your submission and try again, or email us directly.');
                        }
                        return [2 /*return*/];
                }
            });
        }); },
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: Location_module_scss_1.default.LocationWrapper },
            react_1.default.createElement("div", { className: Location_module_scss_1.default.Location },
                react_1.default.createElement("div", { className: Location_module_scss_1.default.Content },
                    react_1.default.createElement(bg_wave_svg_1.default, { className: Location_module_scss_1.default.BgWave }),
                    react_1.default.createElement("div", { className: Location_module_scss_1.default.SocialConnect },
                        react_1.default.createElement("div", { className: Location_module_scss_1.default.Text }, "Social Connect"),
                        react_1.default.createElement("div", { className: Location_module_scss_1.default.SocialWrapper },
                            react_1.default.createElement(link_1.default, { className: Location_module_scss_1.default.Icon, href: facebook, target: "_blank" },
                                react_1.default.createElement(facebook_fill_svg_1.default, null)),
                            react_1.default.createElement(link_1.default, { className: Location_module_scss_1.default.Icon, href: linkedin, target: "_blank" },
                                react_1.default.createElement(linkedin_fill_svg_1.default, null)),
                            react_1.default.createElement(link_1.default, { className: Location_module_scss_1.default.Icon, href: twitter, target: "_blank" },
                                react_1.default.createElement(twitter_fill_svg_1.default, null)),
                            react_1.default.createElement(link_1.default, { className: Location_module_scss_1.default.Icon, href: telegram, target: "_blank" },
                                react_1.default.createElement(telegram_fill_svg_1.default, null)))),
                    react_1.default.createElement("div", { className: Location_module_scss_1.default.Locations },
                        react_1.default.createElement(location_32_svg_1.default, null),
                        react_1.default.createElement("div", { className: Location_module_scss_1.default.Wrapper },
                            react_1.default.createElement("div", { className: Location_module_scss_1.default.Title }, "LOCATION"),
                            location.map(function (item) { return (react_1.default.createElement("div", { key: item.id, className: Location_module_scss_1.default.Address }, item.address)); }))),
                    react_1.default.createElement("div", { className: Location_module_scss_1.default.Phone },
                        react_1.default.createElement(phone_icon_svg_1.default, null),
                        react_1.default.createElement("div", { className: Location_module_scss_1.default.Wrapper },
                            react_1.default.createElement("div", { className: Location_module_scss_1.default.Title }, "PHONE"),
                            phone.map(function (item) { return (react_1.default.createElement("div", { key: item.id, className: Location_module_scss_1.default.Address }, item.phoneNumber)); }))),
                    react_1.default.createElement("div", { className: Location_module_scss_1.default.Email },
                        react_1.default.createElement(email_32_svg_1.default, null),
                        react_1.default.createElement("div", { className: Location_module_scss_1.default.Wrapper },
                            react_1.default.createElement("div", { className: Location_module_scss_1.default.Title }, "EMAIL"),
                            email.map(function (item) { return (react_1.default.createElement("div", { key: item.id, className: Location_module_scss_1.default.Address }, item.email)); })))),
                react_1.default.createElement("div", { className: Location_module_scss_1.default.MapWrapper },
                    react_1.default.createElement("iframe", { className: Location_module_scss_1.default.Map, title: "Map", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3523756074997!2d106.66446072862978!3d10.784300437435165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed141dff36d%3A0x3c1c3a8bec7c6a87!2zNjAxQSDEkC4gQ8OhY2ggTeG6oW5nIFRow6FuZyA4LCBQaMaw4budbmcgMTUsIFF14bqtbiAxMCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1661528507721!5m2!1svi!2s" })))),
        react_1.default.createElement("div", { className: Location_module_scss_1.default.SectionWrapper },
            react_1.default.createElement("div", { className: Location_module_scss_1.default.Cricle }),
            react_1.default.createElement("div", { className: Location_module_scss_1.default.Section },
                react_1.default.createElement("form", { onSubmit: validation.handleSubmit, className: Location_module_scss_1.default.Form },
                    react_1.default.createElement("div", { className: Location_module_scss_1.default.Title }, "If You Have More Questions..."),
                    react_1.default.createElement("input", { name: "name", type: "text", required: true, placeholder: "Enter your name", value: validation.values.name, onChange: validation.handleChange }),
                    react_1.default.createElement("div", { className: Location_module_scss_1.default.Row },
                        react_1.default.createElement("input", { type: "email", name: "email", required: true, placeholder: "Enter your Email", value: validation.values.email, onChange: validation.handleChange }),
                        react_1.default.createElement("input", { name: "phoneNumber", type: "text", required: true, placeholder: "Enter your phone number", value: validation.values.phoneNumber, onChange: validation.handleChange })),
                    react_1.default.createElement("input", { name: "subject", type: "text", placeholder: "SubJect", value: validation.values.subject, onChange: validation.handleChange }),
                    react_1.default.createElement("textarea", { name: "message", placeholder: "Your Message...", rows: 4, value: validation.values.message, onChange: validation.handleChange }),
                    react_1.default.createElement("button", { type: "submit", className: Location_module_scss_1.default.Btn, disabled: loading }, loading ? 'Loading...' : 'Submit'))))));
};
exports.Component = Component;
