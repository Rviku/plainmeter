import {A, TestInjector} from './test-injector';
import {LinkedIn} from '../pages/linkedin';
import {ChromeBrowser} from './browser';

export class TestSetup {
  public static async init() {
    const page = TestInjector.get<LinkedIn>(LinkedIn);
    await page.navigate();
  }

  public static async finalize() {
    const browser = TestInjector.get<ChromeBrowser>(ChromeBrowser);
    await browser.close();
  }
}