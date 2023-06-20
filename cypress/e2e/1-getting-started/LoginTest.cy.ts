import Login from "../../PageObjects/LoginPage"

describe("Cypress POM" , () => {
    it.only('LoginTest', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.fixture('example').then((data) => {
            const login = new Login();
            login.setUserName(data.username);
            login.setPassword(data.password);
            login.clickSubmit();
            login.verifyLogin();
        })
    })
})