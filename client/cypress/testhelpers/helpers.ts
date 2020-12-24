export const fillForm = (inputs) => {
  inputs.forEach((input, i) => {
    if (input.type === "textfield") {
      input.errors.forEach((error) => {
        cy.get(`#${input.field}`).type(error.falseValue, { force: true });
        cy.get("#submitButton").click({ force: true });
        cy.get(
          `[title="${error.message}"] > .MuiIconButton-label > .MuiSvgIcon-root`
        );
        cy.get(`#${input.field}`).clear({ force: true });
      });
      if (input.field === "location" && i === inputs.length - 1) {
        cy.get(`#${input.field}`).type(input.trueValue + "{enter}", {
          force: true,
        });
      } else {
        cy.get(`#${input.field}`).type(input.trueValue, { force: true });
      }
    } else if (input.type === "select") {
      cy.get(`#${input.field}`).click({ force: true });
      cy.get(`#${input.selector}`).click();
    }
  });
};
export const expectFormErrors = (errorTitles: string[]) => {
  cy.get("#submitButton").click();
  errorTitles.forEach((title) => {
    cy.get(`[title="${title}"] > .MuiIconButton-label > .MuiSvgIcon-root`);
  });
};

export const startWithAdminRefreshToken = () => {
  cy.server();
  cy.setCookie(
    "refreshToken",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWRtaW4ifQ.MBOiVFSMgSjxufbOKuEb1wCrHfJ9HuUetIWOrMvOQ6U"
  );
};
