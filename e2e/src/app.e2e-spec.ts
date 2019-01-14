import { browser, element, by, $$ } from "protractor";
import { AppPage } from "./app.po";
// import { async } from 'q';

describe('home', () => {
  // 0: Login as Saska
  // 1: When in browse, open profile and check your name (param-a)
  // 2: Count number of users by selecting ui-components. (param b)
  // 3: Logout and navigation to go to the register component.
  // 4: Fill out fields to create a new daddy.
  // 5: Click register
  // 6: Click navigation to go to browse again
  // 7: Count number of users (param c)
  // 8: Expect a = saska && (c-b) = 1

  let page: AppPage;

  it('should do all the commands', () => {

    browser.get('home')
    browser.sleep(10000);
    /*
    //go to login
    $$("#e2eNavLogin").click();
    browser.sleep(2000);

    //fill out the form to login
    $$("#e2eLoginEmail").sendKeys('saska@example.com');
    $$("#e2eLoginPassword").sendKeys("Paswrord1234");
    browser.sleep(2000);

    //login
    $$("#loginButton").click();
    browser.sleep(2000)
    
    //count how many daddies there are loaded
    $$('.example-card').then(function (daddiesBefore) {
        
      let daddiesCountBefore = daddiesBefore.length;
      console.log("daddy count initial: " + daddiesCountBefore);
      browser.sleep(2000);

      //logout
      $$('#e2eNavLogout').click()
      browser.sleep(2000)

      //go to register page
      $$("#e2eNavSignup").click();
      browser.sleep(2000)

      //click on the daddy handle
      $$("#e2eDaddySignup").click();

      //fill out the data in the form
      $$('e2eDaddySignupName').sendKeys('Sophie');
      $$("e2eDaddySignupSurname").sendKeys("Clark");
      $$("e2eDaddySignupBirthDate").sendKeys("10/10/1989");
      $$("e2eDaddySignupEmail").sendKeys("sophie@example.com");
      $$("e2eDaddySignuPassword").sendKeys("Password1234");
      $$("e2eDaddySignuRepeat").sendKeys("Password1234");
      browser.sleep(2000);
      $$("buttonSignUpParent").click();
      browser.sleep(2000);

      //click on the login
      $$("#e2eNavLogin").click();
      browser.sleep(2000);

      //fill out the form to login
      $$("#e2eLoginEmail").sendKeys('saska@example.com');
      $$("#e2eLoginPassword").sendKeys("Paswrord1234");
      browser.sleep(2000);

      // count daddies again
      $$('.example-card').then((daddiesAgter) => {

        let daddiesCountAfter = daddiesAgter.length;
        console.log("sitter count after registering: " + daddiesCountAfter);
        console.log("sittersCountAfter - sittersCountBefore : ");
        console.log(daddiesCountAfter - daddiesCountBefore);
        browser.sleep(5000);

        expect(daddiesCountAfter - daddiesCountBefore).toBe(1);

      });
      
    })
    */

  });


});
