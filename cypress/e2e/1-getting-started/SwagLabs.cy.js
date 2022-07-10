/// <reference types="cypress" />

describe('my SwagLabs project', () => {
  it('launch SwagLabs homepage', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.title().should('eq','Swag Labs')

    const userName = 'standard_user'
    const password = 'secret_sauce'

    cy.get('[id="user-name"]').type(userName)
    cy.get('[id="password"]').type(password)
    cy.get('[id="login-button"]').click()
  
    cy.get('[class="title"]').should('contain.text', 'Products')
    cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[class="shopping_cart_link"]').click()
    cy.get('[class="inventory_item_name"]').should('contain.text', 'Sauce Labs Backpack')
    cy.get('[id="remove-sauce-labs-backpack"]').click()
    cy.get('[id="checkout"]').click()
    cy.location('pathname').should('equal','/checkout-step-one.html')

  })
})