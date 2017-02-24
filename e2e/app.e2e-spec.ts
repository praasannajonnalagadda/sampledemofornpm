import { SampledemofornpmPage } from './app.po';

describe('sampledemofornpm App', () => {
  let page: SampledemofornpmPage;

  beforeEach(() => {
    page = new SampledemofornpmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
