export interface InputMessage {
    text: string;
    state: InputMessageState;
}
export declare enum InputMessageState {
    Default = "default",
    Error = "error",
    Warning = "warning"
}
