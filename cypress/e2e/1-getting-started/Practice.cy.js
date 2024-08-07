/// <reference types="cypress" />

describe("Input", { testIsolation: false }, () => {
  it("Visit page", () => {
    cy.visit("https://letcode.in/test");
  });

  it("Go to Input end enter full name", () => {
    cy.get(".card-footer a").first().click();
    cy.get("#fullName").click().type("Mate Matic");
  });

  it("Append text to existing", () => {
    cy.get("#join").click().type(" dog");
  });

  it("Check text", () => {
    cy.get("#getMe").should("have.value", "ortonikc");
  });

  it("Clear text", () => {
    cy.get("#clearMe").clear();
  });

  it("Check that the field is disabled", () => {
    cy.get("#noEdit").should("be.disabled");
  });

  it("Check that the field is read only", () => {
    cy.get("#dontwrite").should("have.attr", "readonly", "readonly");
  });
});

describe("Buttons", { testIsolation: false }, () => {
  it("Visit page", () => {
    cy.visit("https://letcode.in/test");
  });

  it("Buttons", () => {
    cy.get(".card-footer").children(".column a").eq(1).click();
  });
});

describe("Select", { testIsolation: false }, () => {
  it("Visit page", () => {
    cy.visit("https://letcode.in/test");
  });

  it("Select", () => {
    cy.get(".card-footer").children(".column a").eq(2).click();
    cy.get("#fruits").select("Mango");
    cy.get("#superheros").select(3);
    cy.get("#lang").select("Java");
    cy.get("#country").select("Brazil");
  });
});
