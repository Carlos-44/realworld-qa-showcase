const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium, request: pwRequest } = require('@playwright/test');

class RealWorldWorld extends World {
  constructor(options) {
    super(options);
    this.browser = null;
    this.context = null;
    this.page = null;
    this.apiContext = null;
    this.baseURL = (options.parameters && options.parameters.baseURL) || 'http://localhost';
    // Shared test state
    this.user = null;
    this.article = null;
  }

  async openBrowser() {
    this.browser = await chromium.launch({ headless: true });
    this.apiContext = await pwRequest.newContext({ baseURL: this.baseURL });
    this.context = await this.browser.newContext({ baseURL: this.baseURL });
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    if (this.apiContext) await this.apiContext.dispose();
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(RealWorldWorld);
