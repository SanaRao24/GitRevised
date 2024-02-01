///<reference types="Cypress"/>

describe("Question Four Automation Task", ()=>{

    it("Question4", ()=>{

        cy.visit("https://www.staysucasa.com/")

        // Contains Work from anywhere
        cy.get(".standard-item h4").eq(0).contains("Work From Anywhere").should('exist')

        // Contains Transparent Pricing
       cy.get(".standard-item h4").eq(1).contains("Transparent Pricing").should('exist')

       // Contains Premium Properties
       cy.get(".standard-item h4").eq(2).contains("Premium Properties").should('exist')


        // Click Find stays button
        cy.get("a").contains('Find Stays').click()
        cy.wait(2000)

        // Verify Page URL should be equal to  https://www.staysucasa.com/index?#featured
        cy.url().should('eq', 'https://www.staysucasa.com/index?#featured')

        // Take a picture of the page you’ve just landed on. Name this image “FIRST_[HH-MM-SS]”.
        cy.screenshot()
        
    })
})
