import {TestSetup} from '../../lib/test-setup';
import {TestInjector} from '../../lib/test-injector';
import {ChromeBrowser, WebElement} from '../../lib';

describe('renders correctly', () => {
  beforeAll(TestSetup.init);
  afterAll(TestSetup.finalize);

  it('does something', async () => {
    const selector = '.header img';
    const browser = TestInjector.get(ChromeBrowser);
    const element = browser.findElement(selector);
    const img = new WebElement(element, selector);
    const src = await img.getAttribute('src');
    expect(src).toBe('https://static.licdn.com/sc/h/95o6rrc5ws6mlw6wqzy0xgj7y');
  });
});