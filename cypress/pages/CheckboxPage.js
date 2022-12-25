class checkboxPage {
  getPageHeader() {
    return cy.get("h3");
  }

  getChecbox1() {
    return cy.get("#checkboxes").find("input").first();
  }

  getChecbox2() {
    return cy.get("#checkboxes").find("input").eq(1);
  }
}
export default checkboxPage;
