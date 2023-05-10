"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
var Config_1 = __importDefault(require("../Slider/Config"));
var Config_2 = __importDefault(require("../FilterProject/Config"));
exports.Home = {
    slug: 'home',
    labels: {
        singular: 'Home',
        plural: 'Home Blocks',
    },
    fields: [
        {
            name: 'homeBlock',
            label: 'Home Block',
            type: 'blocks',
            minRows: 1,
            blocks: [
                Config_1.default,
                Config_2.default,
            ],
        },
    ],
};
