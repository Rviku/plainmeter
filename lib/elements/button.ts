import {WebElement} from '../element';

export class Button extends WebElement {
  constructor(selector: string) {
    super(selector);
  }

  public async isDisabled() {
    try {
      return await this.element.getAttribute('disabled') === 'disabled';
    } catch (ex) {
      return false;
    }
  }
}