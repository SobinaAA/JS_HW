import { SALES_PORTAL_URL } from "../../config/environment";
import { ICredentials } from "../../data/types/signIn.types";
import { SalesPortalPage } from "./salesPortal.page";


class SignInPage extends SalesPortalPage {
    readonly EmailInput = "#emailinput";
    readonly PasswordInput = "#passwordinput";
    readonly ButtonSubmit = 'button[type="submit"]';
    readonly Title = "p.lead";
  
    async fillCredentials(credentials: ICredentials) {
      await this.setValue(this.EmailInput, credentials.email);
      await this.setValue(this.PasswordInput, credentials.password);
    }

  async clickOnSubmitButton() {
    await this.click(this.ButtonSubmit);
  }

  async waitForPageOpened(): Promise<void> {
    await this.waitForDisplayed(this.Title);
  }

  async open() {
    await this.openPage(SALES_PORTAL_URL);
  }
}

export default new SignInPage();
