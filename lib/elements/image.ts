import {WebElement} from '../element';

export class Image extends WebElement {
  constructor(selector: string) {
    super(selector);
  }

  public async getSourceUrl(): Promise<string> {
    return this.getAttribute('src');
  }

  public type(text: string) {
    return this.element.sendKeys(text);
  }
}