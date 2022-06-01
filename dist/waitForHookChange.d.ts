declare const waitForHookChange: (hookResult: {
    current: unknown;
}, changeTrigger: () => void) => Promise<void>;
export { waitForHookChange };
