import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
  test("with additional classes", () => {
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(
      "someClass class1 class2"
    );
  });
  test("with mods", () => {
    expect(
      classNames("someClass", { hovered: true, scrolable: true }, [
        "class1",
        "class2",
      ])
    ).toBe("someClass class1 class2 hovered scrolable");
  });
  test("with mods false", () => {
    expect(
      classNames("someClass", { hovered: true, scrolable: false }, [
        "class1",
        "class2",
      ])
    ).toBe("someClass class1 class2 hovered");
  });
  test("with mods undefind", () => {
    expect(
      classNames("someClass", { hovered: true, scrolable: undefined }, [
        "class1",
        "class2",
      ])
    ).toBe("someClass class1 class2 hovered");
  });
});
