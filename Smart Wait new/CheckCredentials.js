var login = angular.module("CheckLogin",[])
login.controller("checkLoginController",function($scope,$http,$httpParamSerializerJQLike,$window) {
	$scope.checkCredentials = function(uname,password) {
		console.log("inside function");
		//var UserName,pass;
		var flag = false;
		//$window.alert(uname);
	//document.body.innerHTML = UserName;
		localStorage.setItem("UserName" , uname);
		localStorage.setItem("password" , password);
    
		 var url = 'https://api.mongolab.com/api/1/databases/smartwait/collections//users?apiKey=426cFbWe_1CSIZe6fKUMQv6cXuuHlYY4';
		var res = $http.get(url).success(function(data) { 
		for(var i =0 ;i<data.length;i++)
		{
			//console.log(data[i].UserName + "  " + data[i].password);
			
			if(data[i].UserName == uname && data[i].password == password)
			{
				flag = true;
				break;
			}
			
			
		}
		if(flag == true)
		{
		$window.alert("login Successful");
		$window.location= 'waitPage.html';
		}
		else
			$window.alert("Please check the credentials");
		
		 });
		
		
}
    
});
		
		
		
		
		
	
	
	
	