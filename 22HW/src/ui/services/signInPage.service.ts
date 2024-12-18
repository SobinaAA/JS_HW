import { CREDS, ICredentials } from "../../data/credentials";
import homePage from "../pages/home.page";
import signinPage from "../pages/signin.page";
import { SalesPortalPageService } from "./salesPortalPage.service";

class SignInPageService extends SalesPortalPageService {
  private signInPage = signinPage;
  private homePage = homePage;

  async openSalesPortal() {
    await this.signInPage.open();
  }

  async login(credentials: ICredentials) {
    await this.signInPage.fillCredentials(credentials);
    await this.signInPage.clickOnSubmitButton();
    await this.homePage.waitForPageOpened();
  }

  async loginAsAdmin() {
    await this.login(CREDS[0]);
  }
}

export default new SignInPageService();
