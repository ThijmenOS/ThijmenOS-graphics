import { ClassOperation } from "@thijmenos/common";
import "jqueryui";

export const MainAppContainer: HTMLElement = document.getElementById(
  "main-application-container"
);

export function CreateElementFromString<T>(htmlString: string): T {
  const div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  return div.firstChild as T;
}

export function GetElementByClass<T>(
  element: HTMLElement,
  selector: string
): T {
  return element.querySelector("." + selector) as T;
}

export function AddElement(
  element: HTMLElement,
  targetElement?: HTMLElement
): void {
  if (!targetElement) targetElement = MainAppContainer;
  targetElement.append(element);
}

export function ClearElement(element: HTMLElement): void {
  element.innerHTML = "";
}

export function AddOrRemoveClass(
  targetElement: Array<HTMLElement>,
  classes: Array<string>,
  operation: ClassOperation
): void {
  if (Array.isArray(targetElement)) {
    targetElement.forEach((el) =>
      operation === ClassOperation.ADD
        ? el.classList.add(...classes)
        : el.classList.remove(...classes)
    );
    return;
  }
}

export function WaitForElm<T>(selector: string): Promise<T> {
  // eslint-disable-next-line consistent-return
  return new Promise((resolve) => {
    if (document.getElementById(selector)) {
      return resolve(document.getElementById(selector) as T);
    }

    const observer = new MutationObserver(() => {
      if (document.getElementById(selector)) {
        resolve(document.getElementById(selector) as T);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

export function InitMovement(
  dataId: string,
  options?: JQueryUI.DraggableOptions
): void {
  jQuery(`[data-id="${dataId}"]`).draggable({
    containment: "parent",
    ...options,
  });
}
