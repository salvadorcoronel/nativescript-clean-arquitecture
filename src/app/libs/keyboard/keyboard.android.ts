import { Keyboard } from "./keyboard.interface";
import { ad } from "@nativescript/core/utils/utils";

export class KeyboardAndroidImpl implements Keyboard {
  hide(): void {
    ad.dismissSoftInput();
  }
}