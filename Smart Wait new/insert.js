var login = angular.module("login",[]);
login.controller("loginController", function($scope,$http, $httpParamSerializerJQLike,$window){
    
$scope.insertData = function(fname,lname,email,pno,nump,time) {
   console.log("inside login function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/smartwait/collections//waitlist?apiKey=426cFbWe_1CSIZe6fKUMQv6cXuuHlYY4',
    data: JSON.stringify({
                FirstName: fname,
                LastName: lname,
                Emailid: email,
                Phone: pno,
                NumPersons: nump,
				BookTime: time
            }),
    contentType: "application/json"
}).success(function() {
    $window.location = 'index.html';
        })
}
    
});