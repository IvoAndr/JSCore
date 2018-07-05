let expect = require("chai").expect;
this.jsdom = require('jsdom-global')();
global.$ = global.jQuery = require('jquery');

let sharedObject = require("shared-object.js");

describe("Tests for sharedObject", function () {
    beforeEach('init the document', function () {
        document.body.innerHTML = "<div id='wrapper'> <input type='text' id='name'> <input type='text' id='income'> </div>";
    });

    describe("Tests for name", function () {
        it('should be null', function () {
            expect(sharedObject.name).to.be.equal(null);
        });
        it('should be MyName', function () {
            sharedObject.changeName("MyName");
            expect(sharedObject.name).to.be.equal("MyName");
        });
        it('should be MyName', function () {
            sharedObject.changeName("");
            expect(sharedObject.name).to.be.equal("MyName");
        });
        it('should be OtherName', function () {
            $("#name").val("OtherName");
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal("OtherName");
        });
    });

    describe("Tests for income", function () {
        it('should be null', function () {
            expect(sharedObject.income).to.be.equal(null);
        });
        it('should be 15', function () {
            sharedObject.changeIncome(15);
            expect(sharedObject.income).to.be.equal(15);
        });
        it('should be 15 again', function () {
            sharedObject.changeIncome(-3);
            expect(sharedObject.income).to.be.equal(15);
        });
        it('still should be 15', function () {
            sharedObject.changeIncome("abc");
            expect(sharedObject.income).to.be.equal(15);
        });
        it('and still should be 15', function () {
            sharedObject.changeIncome(6.9);
            expect(sharedObject.income).to.be.equal(15);
        });
        it('should be 30', function () {
            $("#income").val(30);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(30);
        });
        it('still should be 30', function () {
            $("#income").val(3.3);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(30);
        });
    });
});