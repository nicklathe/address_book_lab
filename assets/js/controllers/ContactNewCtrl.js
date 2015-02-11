addressApp.controller('ContactNewCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.createContact = function(){

        $scope.alert = false;
        var data = {
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            email: $scope.email,
            address: $scope.address,
            city: $scope.city,
            state: $scope.state,
            zip: $scope.zip,
            phone: $scope.phone,
            notes: $scope.notes
        };

        $http.post('/.api/contact', data).success(function(data){
            $scope.alert = 'Contact has been created';
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.email = '';
            $scope.address = '';
            $scope.city = '';
            $scope.state = '';
            $scope.zip = '';
            $scope.phone = '';
            $scope.notes = '';
        }).error(function(){
            alert(err);
        })
    }
}])