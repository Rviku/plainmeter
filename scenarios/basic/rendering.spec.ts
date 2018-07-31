import {TestSetup} from '../../lib/test-setup';
import {Image} from '../../lib/element';

describe('Loads Page', () => {
  beforeAll(TestSetup.init);
  afterAll(TestSetup.finalize);

  it('checks, whether image has correct url', async () => {
    const img = new Image('.header img');
    const src = await img.getSourceUrl();
    expect(src).toBe('https://static.licdn.com/sc/h/95o6rrc5ws6mlw6wqzy0xgj7y');
  });
});