/// <reference types="cypress" />

describe("Valid credentials", { testIsolation: false }, () => {
  it("Visit page", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });

  it("Username", () => {
    cy.get("#username").click().type("student");
  });

  it("Password", () => {
    cy.get("#password").click().type("Password123");
  });

  it("Submit", () => {
    cy.get(".btn").click();
  });

  it("URL check", () => {
    cy.url().should(
      "include",
      "https://practicetestautomation.com/logged-in-successfully/"
    );
  });
});

// describe("Invalid username", () => {
//   beforeEach(() => {
//     cy.visit("https://practicetestautomation.com/practice-test-login/");
//   });

//   it("Invalid username", () => {
//     cy.get("#username").click().type("abc");
//   });

//   it("Submit", () => {
//     cy.get(".btn").click();
//   });

//   it("Error text check", () => {
//     cy.get("#error").should("have.text", "Your username is invalid!");
//   });
// });

// describe("Invalid password", () => {
//   beforeEach(() => {
//     cy.visit("https://practicetestautomation.com/practice-test-login/");
//   });

//   it("Valid username", () => {
//     cy.get("#username").click().type("student");
//   });

//   it("Invalid password", () => {
//     cy.get("#username").click().type("123");
//   });

//   it("Submit", () => {
//     cy.get(".btn").click();
//   });
// });
