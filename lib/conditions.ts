import { Browser, WebElement, NewablePage, Page } from './';

export type WaitCondition = (browser: Browser) => Promise<boolean>;

export function elementIsVisible(locator: () => WebElement): WaitCondition {
  return async () => await locator().isDisplayed();
}

export function elementIsPresent(locator: () => WebElement): WaitCondition {
  return async () => await locator() !== undefined;
}

export function pageHasLoaded<T extends Page>(page: NewablePage<T>): WaitCondition {
  return (browser: Browser) => {
    const condition = new page(browser).loadCondition();
    return condition(browser);
  };
}
