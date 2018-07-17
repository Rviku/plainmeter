import {LinkedIn} from '../../pages/linkedin'; 
import {Browser} from '../../lib/browser';
import {WebElement} from '../../lib/element';

describe('renders correctly', () => {
  let browser: Browser;

  beforeAll(async () => {
    browser = new Browser('chrome');
    const page = new LinkedIn(browser);
    await page.navigate();
  });

  it('does something', async () => {
    const selector = '.header img';
    const element = browser.findElement(selector);
    const img = new WebElement(element, selector);
    const src = await img.getAttribute('src');
    expect(src).toBe('https://static.licdn.com/sc/h/95o6rrc5ws6mlw6wqzy0xgj7y');
  });

  afterAll(() => browser.close());
});
