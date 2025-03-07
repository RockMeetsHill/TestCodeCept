Feature('account');

Scenario('test get all accounts from api',  ({ I }) => {
    I.sendGetRequest('/');
    I.seeResponseCodeIsSuccessful();
});

Scenario('get user by query id', ({ I }) => {
    
  const resp = I.sendGetRequest('/1');
  I.seeResponseCodeIsSuccessful();

  // check data for partial inclusion
  I.seeResponseContainsJson({
      name: "name 1",
      password: "password 1",
      id: "1"  
  });
});

/*
Scenario('test create new account to api',  ({ I }) => {
    //if the api call requires a token
    //I.amBearerAuthenticated(secret('token-is-here'));
    
    //to use with custom authorization with headers use:
    //I.haveRequestHeaders method

    const response =  I.sendPostRequest('/Account', {
        accName: "ccjss",
        accPass: "1234",
        accEmail: "ccjss@api.com",
        dob: "2025-03-03T17:42:46.049Z",
        gender: true,
        role: "Manager"
      });

      I.seeResponseEquals(200);
});



Scenario('delete user by id', ({ I }) => {
    
    const resp = I.sendDeleteRequest('/Account/?id=1003');
    I.seeResponseCodeIsSuccessful();
  
    
});

Scenario('get user by query', ({ I }) => {
    
    const resp = I.sendGetRequest('/Account/id?id=1003');
    I.seeResponseCodeIsSuccessful();
  
    
    I.seeResponseContainsKeys(['data']);

    // check data for partial inclusion
    I.seeResponseContainsJson({
      data: {
        accId: 1003,
        accName: "ccjs",
        accPass: "123",
        accEmail: "ccjs@api.com",
        dob: "2025-03-03T17:42:46.05",
        gender: true,
        role: "Manager",
        isActivated: true,
        isApproved: true        
      },
    });
});

Scenario('test create duplicate account to api',  ({ I }) => {
    //checking create duplicate account : return body will have "success: false
//                                                                  "

    const response =  I.sendPostRequest('/Account', {
        accName: "ccjss",
        accPass: "1234",
        accEmail: "ccjss@api.com",
        dob: "2025-03-03T17:42:46.049Z",
        gender: true,
        role: "Manager"
      });

      I.seeResponseContainsKeys(['success']);

      I.seeResponseContainsJson({
        success: false

      })

});*/



