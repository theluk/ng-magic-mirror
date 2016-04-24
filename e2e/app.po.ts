export class NgMagicMirrorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-magic-mirror-app p')).getText();
  }
}
