"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var namer_1 = require("../namer");
describe("Namer getName function return value", function () {
    it("Should be defined", function () {
        var namer = new namer_1.Namer();
        expect(namer.getName()).toBeDefined("The function getName() should be defined.");
    });
    it("Shouldn't return blank.", function () {
        var namer = new namer_1.Namer();
        expect(namer.getName()).not.toBe("", "The function getName() should return the name.");
    });
    it("Should return 'MyName'", function () {
        var namer = new namer_1.Namer();
        expect(namer.getName()).toBe("MyName");
    });
});
//# sourceMappingURL=namer.spec.js.map