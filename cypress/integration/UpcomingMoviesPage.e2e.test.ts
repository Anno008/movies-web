import locators from "~/testUtils/locators";

describe("Upcoming movies e2e tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should display upcoming movies", () => {
    const r = new RegExp(locators.movieCard);
    cy.findAllByTestId(r, { exact: false, timeout: 3000 }).should("have.length", 20);

    cy.get("[id=root]").scrollTo("bottom", { duration: 3000, ensureScrollable: false });
    cy.findAllByTestId(r, { exact: false, timeout: 4000 }).should("have.length", 40);
  });
});
