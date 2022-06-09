export interface InputMessage {
  text: string;
  state: InputMessageState;
}

export enum InputMessageState {
  Default = 'default',
  Error = 'error',
  Warning = 'warning'
}