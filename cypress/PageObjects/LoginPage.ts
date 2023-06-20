class Login
{
    inputUsername = "input[name='username']";
    inputPassword = "input[name='password']";
    buttonSubmit = "button[type='submit']";
    labelDashboard = ".oxd-topbar-header-breadcrumb > .oxd-text";
    
    setUserName(usernam: string)
    {
        cy.get(this.inputUsername).type(usernam);
    }

    setPassword(password: string)
    {
        cy.get(this.inputPassword).type(password);
    }

    clickSubmit()
    {
        cy.get(this.buttonSubmit).click();
    }

    verifyLogin(){
        cy.get(this.labelDashboard).should("be.visible")    
    }
}

export default Login; 