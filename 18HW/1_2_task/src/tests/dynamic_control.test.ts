import * as sel from "../data/selectors";
import * as n from "../data/labels";

describe('Dynamic_controls_herokuapp', () => {
    const url = "https://the-internet.herokuapp.com/";
 
    //before and after tests
    before(async function () {
        await browser.maximizeWindow();
      });
    
    beforeEach(async function () {
        await browser.url(url);
    });

    it('Should display correct header', async function () {
        await $(sel.linkSelector("dynamic_controls")).click();
        await $(sel.removeButtonSelector).waitForDisplayed();
        const actualText = await $(sel.headerSelector).getText();
        expect(actualText).toContain(n.headerH4);
    });

    it('Should check Checkbox', async function () {
        await $(sel.linkSelector("dynamic_controls")).click();
        await $(sel.checkboxSelector).waitForDisplayed();
        await $(sel.checkboxSelector).click();
        await expect($(sel.checkboxSelector)).toBeChecked();
    });

    it('Should remove and return checkbox', async function () {
        await $(sel.linkSelector("dynamic_controls")).click();
        await $(sel.removeButtonSelector).click(); //нажала на кнопку для исчезновения чекбокса
        await $(sel.checkboxSelector).waitForDisplayed({
            timeout: 5000,
            interval: 500,
            timeoutMsg: `Element is not vanished after 5 seconds`,
            reverse: true, //жду именно пока пропадет
          });
        const actualText1 = await $(sel.messageSelector).getText();
        expect(actualText1).toContain(n.message1);
        await $(sel.removeButtonSelector).click();
        await $(sel.removeButtonSelector).waitForDisplayed();
        const actualText2 = await $(sel.messageSelector).getText();
        expect(actualText2).toContain(n.message2);
    });

    
    it('Test function', async function () {
        await $(sel.linkSelector("dynamic_controls")).click();
        await waitForElementWithText(sel.headerSelector, 'Dunamic Contrals', 5000); //на самом деле текст "Dynamic Controls"
    });
});

async function waitForElementWithText(selector: string, text: string, timeout: number) {
    await browser.waitUntil(
        async () => {
            const isDisplayed = await $(selector).isDisplayed();
            const actualText = await $(selector).getText(); 
            const isCorrectText = actualText.trim() === text;
            if (!isCorrectText) throw new Error(`Element ${selector} actual text is ${actualText}, not ${text}`);
            return isCorrectText && isDisplayed;
        },
        {
          timeout: timeout,
          timeoutMsg: `Element ${selector} wasn't present within timeout ${timeout}ms interval`,
          interval: 500,
        }
      );
  }
  