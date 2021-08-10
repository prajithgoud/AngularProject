import { MyappprojectPage } from './app.po';

describe('myappproject App', function() {
  let page: MyappprojectPage;

  beforeEach(() => {
    page = new MyappprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
