/**
 * Created by aljonp on 10/5/15.
 */
Template.messages.helpers({
  messages: Messages.find({})
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'

});
