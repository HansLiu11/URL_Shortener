const chai = require('chai');

describe('Test API', () => {

    describe("Test GET route /:url_id", () => {
        it("It should redirect to original url by given short url", (done) => {
            const url_id = 1;
            chai.request("http://localhost")
                .get("/" + url_id)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.redirectTo('https://www.facebook.com/');
                    done();
                })
        });

        it("It should response a 404 error", (done) => {
            const url_id = 100;
            chai.request("http://localhost")
                .get("/" + url_id)
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    response.text.should.be.eq("<h1>404 Not Found on the server </h1>");
                    done();
                });
        });
    });

    describe("Test Post route /api/v1/urls",() => {
        it("it should add a new url", (done) => {
            const expireDay = new Date();
            expireDay.setDate(expireDay.getDate() + 7);
            console.log(expireDay);
            const u = {
                url: "https://www.youtube.com/",
                expireAt: expireDay
            };
        })
    })

})