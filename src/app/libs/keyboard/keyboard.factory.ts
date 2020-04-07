import { isAndroid, Page } from "tns-core-modules/ui/page/page";
import { KeyboardAndroidImpl } from "./keyboard.android";
import { KeyboardiOSImpl } from "./keyboard.ios";
import { Keyboard } from "./keyboard.interface";

export abstract class KeyboardFactory {
  static getInstance(): Keyboard {
    if (isAndroid) {
      return new KeyboardAndroidImpl();
    } else {
      return new KeyboardiOSImpl();
    }
  }
} 