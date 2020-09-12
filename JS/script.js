const URL = "https://covid19.mathdro.id/api";
const URL1 = "https://api.covid19api.com/summary";
let app = angular.module("MyApp",[]);
// app.controller('MyCtrl',($scope , $http)=>{
//     // this is controller
//     // $scope.title="Stay home stay safe";
// $http.get(URL).then((response)=>{
//     // console.log(response);
//     $scope.all_data = response.data;
// } ,(error) =>{

// } )

// });
app.controller('MyCtrl',($scope , $http)=>{
    // this is controller
    // $scope.title="Stay home stay safe";
    $scope.countries = [];
$http.get(URL1).then((response)=>{
    console.log(response);
    $scope.countries = response.data.Countries;
    $scope.all_data = response.data;
} ,(error) =>{

} )

});