import { NgLearningRaphPage } from './app.po';

describe('ng-learning-raph App', function() {
  let page: NgLearningRaphPage;

  beforeEach(() => {
    page = new NgLearningRaphPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
