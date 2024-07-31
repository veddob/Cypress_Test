/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("test isolation true", { testIsolation: true }, () => {
  beforeEach(() => {
    cy.visit("https://www.index.hr/");
    cy.get("#didomi-notice-agree-button").click();
  });

  it("Get first article", () => {
    cy.get(".first-news a").first().click();
  });
});

describe("test isolation false", { testIsolation: false }, () => {
  it("Visit page", () => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit("https://www.index.hr/");
  });

  it("Confirm cookies", () => {
    cy.get("#didomi-notice-agree-button").click();
  });

  it("Get first article", () => {
    cy.get(".first-news a").first().click();
  });

  it("Get the last of most read articles", () => {
    cy.get(".home-cube-big-timeline > ul > .most-read ").click();
  });

  it("Get Znanost from footer", () => {
    cy.get("footer > .list-holder > ul > li > a").eq(6).click();
  });
});
