"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("payload/config");
var dotenv_1 = __importDefault(require("dotenv"));
var Page_1 = __importDefault(require("./collections/Page"));
var Media_1 = __importDefault(require("./collections/Media"));
var FormSubmissions_1 = __importDefault(require("./collections/FormSubmissions"));
var Projects_1 = __importDefault(require("./collections/Projects"));
var Services_1 = __importDefault(require("./collections/Services"));
var MegaMenu_1 = __importDefault(require("./globals/MegaMenu"));
dotenv_1.default.config();
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    collections: [
        FormSubmissions_1.default,
        Media_1.default,
        Page_1.default,
        Services_1.default,
        Projects_1.default,
    ],
    globals: [
        MegaMenu_1.default,
    ],
});
