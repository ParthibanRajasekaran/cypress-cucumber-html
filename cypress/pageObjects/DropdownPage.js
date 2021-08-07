class DropdownPage {

    getPageHeader(){
        return cy.get('h3')
    }

    getDropdownField(){
        return cy.get('#dropdown')
    }

}

export default DropdownPage