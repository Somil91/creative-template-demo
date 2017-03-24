import { CreativeTemplateDemoPage } from './app.po';

describe('creative-template-demo App', () => {
  let page: CreativeTemplateDemoPage;

  beforeEach(() => {
    page = new CreativeTemplateDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
