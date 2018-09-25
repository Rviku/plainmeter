import {TestInjector} from '../lib/test-injector';
import {LinkedIn} from '../pages/linkedin';
import {ChromeBrowser} from '../lib/browser';

export class TestSetup {
  public static async init() {
    const page = TestInjector.get(LinkedIn);
    await page.navigate();
  }

  public static async finalize() {
    const browser = TestInjector.get(ChromeBrowser);
    await browser.close();
  }
}