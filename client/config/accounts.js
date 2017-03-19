Accounts.ui.config({
    extraSignupFields: [{
        fieldName: "name",
        fieldLabel: "Name"
    }],
    requestPermissions: {
        facebook: ["email", "user_about_me"]
    }
});
