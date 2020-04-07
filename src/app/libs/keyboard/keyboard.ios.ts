import { Keyboard } from "./keyboard.interface";
import { Page } from "tns-core-modules/ui/page/page";

export class KeyboardiOSImpl implements Keyboard {
  hide(page: Page): void {
    page.nativeView.endEditing(true);
  }
}