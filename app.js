var app = angular.module("mainApp",['ngRoute'])
var parametersPass;
app.config(['$routeProvider',function($routeProvider) {
        $routeProvider
        .when('/addStudent', {
          templateUrl: 'templates/first.html',
          controller: 'AddStudentController'
        })
        .when('/viewStudents', {
          templateUrl: 'templates/second.html',
          controller: 'ViewStudentsController' 
        })
        .otherwise({
          redirectTo: '/addStudent'
        });
 }])
.controller('AddStudentController', function($scope,$location,$http,Service) {

    $scope.budget = 999;
     var parameters = {uname:' ',password:' '};
   
      Service.postRequestSend('http://150.129.180.38:8080/SignaturApp_webservices/rest/myanalysis/',parameters).then(function(data){
            $scope.analysislist = data.data;
       },function(error){
         console.log(error.data);
      });
        
      Service.getRequestSend('http://150.129.180.38/Astrology_Webservice/login.php',parameters).then(function(data){
          
       },function(data){

     });
    
     $scope.navigateNextPage = function(data){
        parametersPass = data;
        // show selected member details in same page
        
        //$scope.selectedMemeberDetail = [data];
        
        // navigate to other page
        $location.path('/viewStudents');
     }
})

.controller('ViewStudentsController', function($scope,$location,$window) { 
   $scope.analysislist = [parametersPass];
})

.service('Service',function($http){

      return {

              postRequestSend: (function(url,parameters) {
                  return $http({
                       url : url,
                       method : 'POST',
                       headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                       transformRequest: function(obj) {
                           var str = [];
                           for(var p in obj)
                               str.push(encodeURIComponent(p)+' = '+encodeURIComponent(obj[p]));

                           return str.join('&');
                       },
                       data : parameters,
                   })
              }),

              getRequestSend: (function(url,parameters) {
               return $http({
                     url : url,
                     method : 'GET',
                     data : parameters

                 })
            })
          };
})