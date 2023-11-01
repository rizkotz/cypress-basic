describe('User can login to system', () => {
  //positive test case
  it('user can login with valid username and password', () => {
    //arrange
    cy.visit('http://localhost:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    //assert
    cy.get('.nav-link > .d-sm-none').should("have.text","Hi, SuperAdmin");
  })

    //negative test case
    it('user cannot login with valid username and wrong password', () => {
      //arrange
      cy.visit('http://localhost:8000/');
      //act
      cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
      cy.get(':nth-child(3) > .form-control').type("password-salah");
      cy.get('.btn').click();
      //assert
      cy.get('.invalid-feedback').should("have.text","These credentials do not match our records.");
      
    })

    it('user cannot login with wrong username and valid password', () => {
      //arrange
      cy.visit('http://localhost:8000/');
      //act
      cy.get(':nth-child(2) > .form-control').type("superadminnn@gmail.com");
      cy.get(':nth-child(3) > .form-control').type("password");
      cy.get('.btn').click();
      //assert
      cy.get('.invalid-feedback').should("have.text","These credentials do not match our records.");
      
    })

    it('User cannot login wtih empty username and valid password', () => {
      //arrange
      cy.visit('http://localhost:8000/');
      //act
      cy.get(':nth-child(3) > .form-control').type("password");
      cy.get('.btn').click();
      //assert
      cy.get('.invalid-feedback').should(
        "have.text", 
        "The email field is required.");
    });
    it('User cannot login wtih valid username and empty password', () => {
      //arrange
      cy.visit('http://localhost:8000/');
      //act
      cy.get(':nth-child(2) > .form-control').type("superadmina@gmail.com");
      cy.get('.btn').click();
      //assert
      cy.get('.invalid-feedback').should(
        "have.text", 
        "The password field is required.");
    });
  
    //QUIZ
    it('User click login without username and password ', () => {
      //arrange
      cy.visit('http://localhost:8000/');
      //act
      cy.get('.btn').click();
      //assert
      cy.get(':nth-child(2) > .invalid-feedback').should(
        "have.text", 
        "The email field is required.");
        cy.get(':nth-child(3) > .invalid-feedback').should(
        "have.text", 
        "The password field is required.");
    });

    it('User can login and click menu', () => {
      //arrange
      cy.visit('http://localhost:8000/');
      //act
      cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
      cy.get(':nth-child(3) > .form-control').type("password");
      cy.get('.btn').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      //assert
      cy.get('#sidebar-wrapper > :nth-child(1) > a').should("have.text","Test");
    });
})