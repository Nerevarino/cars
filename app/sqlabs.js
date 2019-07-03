<!-- language: lang-js -->
app.controller( 'loginController', function loginController($scope, loginFactory) {

  $scope.loginFactory = function() {
    return loginFactory.login($scope.firstnameLogin, $scope.passwordLogin);  
  };
});

app.factory('loginFactory', function() {
  return {
    login : function(firstnameLogin, passwordLogin) {

        // HERE THE SQL-STATEMENT? //

    }
  }
});
