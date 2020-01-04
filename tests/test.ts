describe('Protractor', function () {

    it('WDIO', function () {
        browser.url('/about-us-i-1');
       /* let body = $('body');
        console.log(body.getText());*/

        /*let paragraphs = $$("p");
        paragraphs.forEach(p=> {
            console.log(p.getText());
        })*/

        let element = $('#box-information');
        console.log(element.getText());
    });
});
