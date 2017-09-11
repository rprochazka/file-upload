import { FileUploaderPage } from './app.po';

describe('file-uploader App', () => {
  let page: FileUploaderPage;

  beforeEach(() => {
    page = new FileUploaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
