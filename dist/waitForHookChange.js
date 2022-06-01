"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForHookChange = void 0;
const react_1 = require("@testing-library/react");
const waitForHookChange = (hookResult, changeTrigger) => {
    const initalValue = hookResult.current;
    (0, react_1.act)(changeTrigger);
    return (0, react_1.waitFor)(() => hookResult.current === initalValue ? Promise.reject() : Promise.resolve());
};
exports.waitForHookChange = waitForHookChange;
//# sourceMappingURL=waitForHookChange.js.map