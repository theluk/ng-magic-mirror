import { NgMagicMirrorPage } from './app.po';

describe('ng-magic-mirror App', function() {
  let page: NgMagicMirrorPage;

  beforeEach(() => {
    page = new NgMagicMirrorPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-magic-mirror Works!');
  });
});
