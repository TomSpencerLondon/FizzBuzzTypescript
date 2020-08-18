import { Namer } from "../namer";

describe("Namer getName function return value", () => {
  it("Should be defined", () => {
    const namer = new Namer();

    expect(namer.getName()).toBeDefined("The function getName() should be defined.");
  });

  it("Shouldn't return blank.", () => {
    const namer = new Namer();

    expect(namer.getName()).not.toMatch("", "The function getName() should return the name.");
  });

  it("Should return 'MyName'", () => {
    const namer = new Namer();

    expect(namer.getName()).toMatch("MyName");
  });
})
