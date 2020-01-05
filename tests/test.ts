import * as faker from "faker";

describe('Protractor', function () {

    it('WDIO', function () {
        browser.url('/create_account');

        //Locators
        let firstName = 'input[name="firstname"]';
        let lastName = 'input[name="lastname"]';
        let countryCode = 'select[name="country_code"]';
        let email = '//*[@id="box-create-account"]/form/div[6]/div[1]/div/input';
        let phone = 'input[name="phone"]';
        let password = '//*[@id="box-create-account"]/form/div[7]/div[1]/div/input';
        let confirmedPassword = '//*[@id="box-create-account"]/form/div[7]/div[2]/div/input';
        let createButton = '//*[@id="box-create-account"]/form/div[9]/button';
        let a = faker.internet.email();

        //Actions

        $(firstName).setValue("TestFirstName");
        console.log("Set value to first name");
        $(lastName).setValue("TestLastName");
        console.log("Set value to lastname");
        $(countryCode).selectByAttribute('value', 'UA');
        console.log("Select country code");
        $(email).setValue(String(a));
        console.log("Set email");
        $(phone).setValue("+380441112233");
        console.log("Set phone");
        $(password).setValue("123456");
        console.log("Set password");
        $(confirmedPassword).setValue("123456");
        console.log("Set confirmedpasswordd");
        $(createButton).click();
        browser.pause(5000);

        //time where I finished course 1:16:43

    });
});
