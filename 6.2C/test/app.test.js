const chai = require("chai");
const request = require("supertest");
const app = require("../index");
const { calculateTotal } = require("../calculator");

const expect = chai.expect;

describe("SIT725 6.2C Testing Project", function () {

    it("should return list of hairdressers from REST API endpoint", async function () {
        const res = await request(app).get("/api/hairdressers");

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
        expect(res.body.length).to.be.greaterThan(0);
    });

    it("should calculate total price correctly", function () {
        const result = calculateTotal(30, 2);

        expect(result).to.equal(60);
    });

    it("should return 0 when quantity is 0", function () {
        const result = calculateTotal(50, 0);

        expect(result).to.equal(0);
    });

    it("should throw error for negative price", function () {
        expect(() => calculateTotal(-20, 2)).to.throw("Price and quantity must be positive");
    });

});