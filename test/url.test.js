const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

describe('Test API', () => {

    describe("Test GET route /:url_id", () => {
        it("It should redirect to original url by given short url", (done) => {
            const url_id = 1;
            chai.request("http://localhost")
                .get("/" + url_id)
                .end((err, res) => {
                    res.should.redirectTo('https://www.youtube.com/');
                    done();
                })
        });

        it("It should response a 404 error", (done) => {
            const url_id = 100;
            chai.request("http://localhost")
                .get("/" + url_id)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.text.should.be.eq("<h1>404 Not Found on the server </h1>");
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
            chai.request("http://localhost")
                .post("/api/v1/urls")
                .send(u)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id').eq('2');
                    done();
                });
        });

        it("it should not add a new url without expireAt", (done) => {
            const u = {
                url: "https://www.youtube.com/",
            };
            chai.request("http://localhost")
                .post("/api/v1/urls")
                .send(u)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.text.should.be.eq("{\"errors\":[{\"msg\":\"Invalid value\",\"param\":\"expireAt\",\"location\":\"body\"}]}")
                    console.log(res.text);
                    done();
                });
        })
    })

})