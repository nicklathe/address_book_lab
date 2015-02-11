addressApp.controller('ContactEditModalCtrl', ['$scope', '$http', '$modalInstance', 'contact',function($scope, $http, $modalInstance, contact){

    $scope.firstName = contact.firstName;
    $scope.lastName = contact.lastName;
    $scope.email = contact.email;
    $scope.address = contact.address;
    $scope.city = contact.city;
    $scope.state = contact.state;
    $scope.phone = contact.phone;
    $scope.notes = contact.notes;

    $scope.save = function(){
        var contactData = {
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

        $http.put('/.api/contact/' + contact.id, contactData)
        .success(function(data){
            $modalInstance.close(data);
        })
        .error(function(err){
            alert(err);
        });
    }

    $scope.cancel = function(){
        $modalInstance.dismiss();
    }
}])