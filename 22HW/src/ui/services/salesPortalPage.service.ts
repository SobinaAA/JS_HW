import { GetTextMethod } from "../../data/types/base.types";
import { logStep } from "../../utils/reporter/decorators";
import signinPage from "../pages/signin.page";

export abstract class SalesPortalPageService {
  private basePage = signinPage;
  async validateNotification(text: string, method: GetTextMethod = "with") {
    const notification = await this.basePage.getNotificationText(text, method);
    expect(notification).toBe(text);
    this.basePage.closeNotificationByText(text);
  }
  
@logStep("Log out")
  async signOut() {
    await this.basePage.deleteCookies(["Authorization"]);
  }
}
