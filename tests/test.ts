describe('Protractor', function () {

    it('WDIO', function () {
        browser.url('/create_account');
        $('input[name="firstname"]').setValue("TestFirstName");
        $('input[name="lastname"]').setValue("TestLastName");

    });
});
