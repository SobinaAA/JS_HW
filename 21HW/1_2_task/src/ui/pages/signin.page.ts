import { ICredentials } from "../../data/credentials";
import { SalesPortalPage } from "./salesPortal.page";


class SignInPage extends SalesPortalPage {
    readonly EmailInput = "#emailinput";
    readonly PasswordInput = "#passwordinput";
    readonly ButtonSubmit = 'button[type="submit"]';
    readonly Title = "p.lead";
  
  async fillCredentials(creds: ICredentials) {
    await this.setValue(this.EmailInput, creds.email);
    await this.setValue(this.PasswordInput, creds.password);
  }

  async clickOnSubmitButton() {
    await this.click(this.ButtonSubmit);
  }

  async waitForPageOpened(): Promise<void> {
    await this.waitForDisplayed(this.Title);
  }

  async open() {
    await this.openPage("https://anatoly-karpovich.github.io/aqa-course-project/");
  }
}

export default new SignInPage();
