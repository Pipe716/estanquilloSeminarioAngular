import { EstanquilloPage } from './app.po';

describe('estanquillo App', function() {
  let page: EstanquilloPage;

  beforeEach(() => {
    page = new EstanquilloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
