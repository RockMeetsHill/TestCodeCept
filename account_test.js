Feature('account');

Scenario('test something',  ({ I }) => {
    I.sendGetRequest('/Account');
    I.seeResponseCodeIsSuccessful();
});
