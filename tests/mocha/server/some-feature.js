if (!(typeof MochaWeb === 'undefined')){
    MochaWeb.testOnly(function(){
        mocha.timeout(999999999);
        var assert = chai.assert;

        describe('some feature', function () {
            var client = {};

            before(function (done) {
                client = webdriverjs.remote({desiredCapabilities: {browserName: 'safari'}});
                client.init(done);
            });

            it('should do something', function (done) {
                client
                    .url('http://localhost:5000')
                    .getElementSize('#velocity-status-widget', function (err, result) {
                        assert.equal(undefined, err);
                        assert.strictEqual(result.height , 20);
                        assert.strictEqual(result.width, 20);
                    })
                    .call(done);
            });

            after(function (done) {
                client.end(done);
            });
        });
    });
}
