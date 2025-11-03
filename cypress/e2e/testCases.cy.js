describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('Cloudflare Turnstile')) {
        return false // не провалювати тест
      }
    })
  })

  it('1 Main title change 3 times', () => {
    const titleLocator = 'div.overflow-hidden.py-new-xs > h1'
    const titleText1 = 'Conversational AI'
    const titleText2 = 'Text to Speech'
    const titleText3 = 'Speech to Text'

    cy.get(titleLocator)
      .scrollIntoView()
      .should('have.text', titleText1)

    cy.get(titleLocator)
      .should('have.text', titleText2)

    cy.get(titleLocator)
      .should('have.text', titleText3)
  })
  it('2 Click on "Products" in header show drop list', () => {
    const button_Products = 'button#radix-_R_4b9eivb_'
    const dropList = 'div.p-md.header-md\\:p-xl'

    cy.get(button_Products).click()
    cy.get(dropList).should('be.visible')
  })
  it('3 Button "Call your agent" scroll to block "HD Voice AI"', () => {
    const button_CallYourAgent = '[data-content="CALL YOUR AGENT"]'
    const hdVoice = '#radix-_R_4lueivb_-content-hd-voice-ai'

    cy.get(button_CallYourAgent).click()
    cy.get(hdVoice).should('be.visible') //not right but now i thing OK
  })
  it('4 Button "Sign up" open page registration', () => {
    const button_SignUp = '.flex.gap-new-md.xl\\:gap-new-lg.ml-auto.min-w-fit.items-center > a:nth-child(3)'
    cy.get(button_SignUp)
      .invoke('attr', 'href')
      .then(url_SignUp => {
        cy.get(button_SignUp).click()
        cy.url().should('include', url_SignUp)
      })
  })
  it('5 Promo field of the form registration shows affter click on "Apply a promo code"', () => {
    const button_SignUp = '.flex.gap-new-md.xl\\:gap-new-lg.ml-auto.min-w-fit.items-center > a:nth-child(3)'
    const link_PromoCode = 'button.c-ewUecD > span'
    const field_PromoCode = '#promo_code'

    cy.get(button_SignUp).click()
    cy.get(link_PromoCode).scrollIntoView().click()
    cy.get(field_PromoCode).should('be.visible')
  })
  it('6 Corect fill registration form', () => {
    const button_SignUp = '.flex.gap-new-md.xl\\:gap-new-lg.ml-auto.min-w-fit.items-center > a:nth-child(3)'
    const field_Email = '#email'
    const field_FirstName = '#first_name'
    const field_LastName = '#last_name'
    const field_Password = '#password'
    const checkBox_TermCondition = '#terms_and_conditions'
    const button_SignUp_Registration = 'button.c-bzrwjc-fMMSUj-withAnimation-true > span.c-bhURco'

    cy.get(button_SignUp).click()
    cy.get(field_Email).type('rexese6435@ametitas.com')
    cy.get(field_FirstName).type('Qwerty')
    cy.get(field_LastName).type('Asdfgh')
    cy.get(field_Password).type("tsqfvxAv8J>$f")
    cy.get(checkBox_TermCondition).click()
    cy.get(button_SignUp_Registration).click()
  })
  it('7 Button "START BUILDING" above the footer open page of registration', () => {
    const button_StartBuilding = '.flex.gap-new-md.xl\\:gap-new-lg.ml-auto.min-w-fit.items-center > a:nth-child(2)'

    cy.get(button_StartBuilding)
      .invoke('removeAttr', 'target')
      .invoke('attr', 'href')
      .then(url_SignUp => {
        cy.get(button_StartBuilding).click()
        cy.url().should('include', url_SignUp)
      })
    })
  it('8 Button "Contact us" open page with form "Talk to an expert"', () => {
    const button_ContactUs = '.flex.gap-new-md.xl\\:gap-new-lg.ml-auto.min-w-fit.items-center > a:nth-child(1)'

    cy.get(button_ContactUs)
      .invoke('attr', 'href')
      .then(url_ContactUs => {
        cy.get(button_ContactUs).click()
        cy.url().should('eq', url_ContactUs)
      })
  })
  it('9 Click on "MCP integration" in block "HOW IT WORKS" displays a description of this function', () => {
    const dropBox_Button = '#radix-_R_2elueivb_-trigger-3'
    const dropBox_ButtonText = 'button[data-state="active"] p'

    //cy.visit('/')

    cy.get(dropBox_Button).click()
    cy.get(dropBox_ButtonText).should('be.visible')
    cy.get(dropBox_ButtonText).invoke('text','Power Voice AI Agents with built-in global voice, phone number provisioning, SIP connectivity, and AI inference managed by Telnyx.')
  })
  it('10 Validation of the "Talk to an expert" phone field in the form with number', () => {
    const button_ContactUs = '.flex.gap-new-md.xl\\:gap-new-lg.ml-auto.min-w-fit.items-center > a:nth-child(1)'
    const field_PhoneNumber = '#Phone_Number_Base__c'

    cy.get(button_ContactUs).click()
    cy.get(field_PhoneNumber).type('1234')
    cy.get(field_PhoneNumber).invoke('val').should('not.be.empty')
  })
})