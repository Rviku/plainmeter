import { WebElementPromise } from 'selenium-webdriver';
import {TestInjector} from './test-injector';
import {ChromeBrowser} from './index';

export class WebElement {
  protected element: WebElementPromise;

  constructor(public selector: string) {
    const browser = TestInjector.get(ChromeBrowser);
    this.element = browser.findElement(selector);
  }

  public async click() {
    try {
      return await this.element.click();
    } catch (clickErr) {
      try {
        await this.element.getDriver().executeScript('arguments[0].click();', this.element);
      } catch (jsErr) {
        throw clickErr;
      }
    }
  }

  public async getAttribute(attr: string) {
    return this.element.getAttribute(attr);
  }

  public async isDisplayed() {
    try {
      return await this.element.isDisplayed();
    } catch (ex) {
      return false;
    }
  }

  public async getText() {
    return await this.element.getText();
  }
}



