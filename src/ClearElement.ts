import { MainAppContainer } from "./graphics";

export function ClearElement(element?: HTMLElement): void {
  if (!element) MainAppContainer.innerHTML = "";

  element.innerHTML = "";
}
