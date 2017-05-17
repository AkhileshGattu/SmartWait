var login = angular.module("login",[]);
login.controller("loginController", function($scope,$http, $httpParamSerializerJQLike,$window){
    
$scope.LoginCustomer = function(fname,lname,email,pno,uname,password) {
   //console.log("inside login function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/smartwait/collections//users?apiKey=426cFbWe_1CSIZe6fKUMQv6cXuuHlYY4',
    data: JSON.stringify({
                FirstName: fname,
                LastName: lname,
                Emailid: email,
                Phone: pno,
                UserName: uname,
                password: password
            }),
    contentType: "application/json"
}).success(function() {
    $window.location = 'index.html';
        })
}
    
});