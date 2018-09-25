import {elementIsPresent, findBy, Page} from '../lib';
import {ChromeBrowser} from '../lib/browser';
import {TestService} from '../lib/test-injector';
import {TextInput} from '../lib/elements/text-input';
import {Button} from '../lib/elements/button';
import {ConfigService} from '../services/config-service';

@TestService
export class LinkedIn extends Page {
  constructor(browser: ChromeBrowser, private config: ConfigService) {
    super(browser);
    this.setUrl(this.config.get().url);
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
