import {elementIsPresent, findBy, Page, TextInput} from '../lib';
import {Button} from '../lib/element';
import {ChromeBrowser} from '../lib/browser';
import {TestService} from '../lib/test-injector';

@TestService
export class LinkedIn extends Page {
  private static pageUrl = 'https://www.linkedin.com';

  constructor(browser: ChromeBrowser) {
    super(browser);
    this.setUrl(LinkedIn.pageUrl);
  }

  @findBy('.login-password')
  public Email: TextInput;

  @findBy('.login-password')
  public Password: TextInput;

  @findBy('#login-submit')
  public Confirm: Button;

  public loadCondition() {
    return elementIsPresent(() => this.Email);
  }
}
