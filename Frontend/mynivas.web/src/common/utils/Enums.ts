export const MessageTypeEnum = {
    Success: "success",
    Error: "error",
    Warning: "warning",
    Info: "info",
} as const;

export type MessageTypeEnum = typeof MessageTypeEnum[keyof typeof MessageTypeEnum];