import { SurprisePage } from './app.po';

describe('surprise App', function() {
  let page: SurprisePage;

  beforeEach(() => {
    page = new SurprisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
