export type TFontOptions = "kumbh-sans" | "roboto-slab" | "space-mono";

export type TColorOptions = "lightorange" | "skyblue" | "fuchsia";

export interface TTimersLength {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

export interface TSettings {
  font: TFontOptions;
  color: TColorOptions;
  duration: TTimersLength;
}
