import {WebElement} from '../element';


export class TextInput extends WebElement {
  constructor(selector: string) {
    super(selector);
  }

  public type(text: string) {
    return this.element.sendKeys(text);
  }
}