describe('OrangeHRM Login Test', () => {
    it('Should successfully log in and display the dashboard', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
        cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard');

    });
});