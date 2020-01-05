describe('Protractor', function () {

    it('WDIO', function () {
        browser.url('/create_account');
        $('input[name="firstname"]').setValue("TestFirstName");
        $('input[name="lastname"]').setValue("TestLastName");
        $('select[name="country_code"]').selectByAttribute('value', 'UA');
        browser.pause(5000);


    });
});
