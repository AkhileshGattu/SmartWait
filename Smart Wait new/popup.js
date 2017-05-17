
/*
angular.module('wait', []).controller('waitCtrl',function($scope,$http,$httpParamSerializerJQLike,$window){
		console.log("inside pop up");
		var url = 'https://api.mongolab.com/api/1/databases/smartwait/collections//waitlist?apiKey=426cFbWe_1CSIZe6fKUMQv6cXuuHlYY4';
		var res = $http.get(url).success(function(data) { 
		$scope.customerList= data;
		$scope.time = data.BookTime;
		});
		$scope.waitTime = "30 minutes";
		$scope.retrieveList = function(){
		$window.location = "retrieveList.html";
		};
		
									  });	  
	*/


	
									  
var wait = angular.module('wait', []);
var wait1 = angular.module('wait1', ['ngDialog']);	
var app = angular.module('app',['wait','wait1']);
var dialog;
wait.controller('waitCtrl',function($scope,$http,$httpParamSerializerJQLike,$window){
		console.log("inside pop up");
		var url = 'https://api.mongolab.com/api/1/databases/smartwait/collections//waitlist?apiKey=426cFbWe_1CSIZe6fKUMQv6cXuuHlYY4';
		var res = $http.get(url).success(function(data) { 
		$scope.customerList= data;
		$scope.time = data.BookTime;
		});
		$scope.waitTime = "30 minutes";
				
		 });
		 
	

wait1.controller('list',['$scope','ngDialog',function($scope,ngDialog){
    $scope.retrieveList=function(){
        console.log("hi");
        dialog = ngDialog.open({
            template: 'retrieveList.html',
			controller: 'getListController',
			
			
        });	
		
    };
    
}]);


app.controller('getListController',function($scope,$http,$httpParamSerializerJQLike,$window){
		console.log("inside function");
		var url = 'https://api.mongolab.com/api/1/databases/smartwait/collections//users?apiKey=426cFbWe_1CSIZe6fKUMQv6cXuuHlYY4';
		var UserName = localStorage.getItem("UserName");
		var password = localStorage.getItem("password");
		var res = $http.get(url).success(function(data) { 
		for(var i =0 ;i<data.length;i++)
		{
			//console.log(data[i].UserName + "  " + data[i].password);
			
			if(data[i].UserName == UserName && data[i].password == password)
			{
				
				$scope.fname = data[i].FirstName;
				$scope.lname = data[i].LastName;
				$scope.email = data[i].Emailid;
				$scope.pno = data[i].Phone;
				break;
			}
			
			
		}
		
		 });
		 
		 
		 $scope.insertList = function(fname,lname,email,pno,nump,time) {
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
			$window.alert("List Added");
        })
		}
		
		$scope.time = ["10.00 AM","11.00 AM", "12.00 PM", "1.00 PM", "2.00 PM", "3.00 PM","4.00 PM", "5.00 PM","6.00 PM", "7.00 PM",
							"8.00 PM","9.00 PM","10.00 PM"];  

		 
		 
		 
		$scope.cancel = function () {
		dialog.close();
		};
		 
});
	





		 
	