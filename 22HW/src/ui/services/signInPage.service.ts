import { ADMIN_USERNAME, ADMIN_PASSWORD } from "../../config/environment";
import { ICredentials } from "../../data/types/signIn.types";
import { logStep } from "../../utils/reporter/decorators";
import homePage from "../pages/home.page";
import signinPage from "../pages/signin.page";
import { SalesPortalPageService } from "./salesPortalPage.service";

class SignInPageService extends SalesPortalPageService {
  private signInPage = signinPage;
  private homePage = homePage;
 
  @logStep("Open Sales Portal")
  async openSalesPortal() {
    await this.signInPage.open();
  }

  @logStep("Login to Sales Portal")
  async login(credentials: ICredentials) {
    await this.signInPage.fillCredentials(credentials);
    await this.signInPage.clickOnSubmitButton();
    await this.homePage.waitForPageOpened();
  }
  
  @logStep("Login as admin")
  async loginAsAdmin() {
    await this.login({
      email: ADMIN_USERNAME,
      password: ADMIN_PASSWORD,
    });
  }
}

export default new SignInPageService();