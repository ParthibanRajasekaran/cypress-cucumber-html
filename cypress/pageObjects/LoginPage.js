class LoginPage{

    getPageHeader(){
        return cy.get('h2')
    }

    getPageDescription(){
        return cy.get('h4')
    }

    getUserNameField(){
        return cy.get('#username')
    }

    getUserNameField(){
        return cy.get('#password')
    }

    getLoginButton(){
        return cy.get('button.radius')
    }

}

export default LoginPage