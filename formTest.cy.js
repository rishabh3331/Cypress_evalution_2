describe('DemoQA Form Test', () => {
    it('Should fill and submit the form successfully', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        timeout: 120000
        //increase timeout to 120 seconds
        cy.get('#firstName').type('Rishabh');
        cy.get('#lastName').type('Shivhare');
        cy.get('#userEmail').type('rishabh@example.com');
        cy.get('input[name="gender"][value="Male"]').click({force:true});
        cy.get('#userNumber').type('1234567890');
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select('2001');
        cy.get('.react-datepicker__month-select').select('June');
        cy.get('.react-datepicker__day--012').click();
        cy.get('#hobbies-checkbox-1').check({force: true});
        cy.get('input[type="chechbox"]').first().check({force: true});
        cy.get('#uploadPicture').selectFile('cypress/screenshots/sample.jpg');
        cy.get('#currentAddress').type('123 Test Street, Test City');
        cy.get('#submit').click();
        cy.get('.modal-content').should('contain', 'Thanks for submitting the form');

    });
});