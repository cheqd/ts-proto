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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protobufPackage = void 0;
__exportStar(require("./epoch"), exports);
__exportStar(require("./genesis"), exports);
__exportStar(require("./osmosisibc"), exports);
__exportStar(require("./params"), exports);
__exportStar(require("./proposal"), exports);
__exportStar(require("./query"), exports);
__exportStar(require("./tx"), exports);
exports.protobufPackage = 'feeabstraction.feeabs.v1beta1';
//# sourceMappingURL=index.js.map