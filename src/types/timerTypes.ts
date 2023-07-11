export type TFontOptions = "kumbh-sans" | "roboto-slab" | "space-mono";

export type TColorOptions = "lightorange" | "skyblue" | "fuchsia";

export interface TTimersLength {
  pomodoro: number;
  short: number;
  long: number;
}

export type TDurationOptions = keyof TTimersLength;

export interface TSettings {
  font: TFontOptions;
  color: TColorOptions;
  duration: TTimersLength;
}
