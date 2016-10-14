app.controller('CustomersCtrl', function($scope, Customer) {

    $scope.customer = new Customer();

    var refresh = function() {
        $scope.customers = Customer.query();
        $scope.customer = "";
    }
    refresh();

    $scope.add = function(customer) {
        Customer.save(customer, function(customer) {
            refresh();
        });
    };



    $scope.update = function(customer) {
        customer.$update(function() {
            refresh();
        });
    };

    $scope.remove = function(customer) {
        customer.$delete(function() {
            refresh();
        });
    };

    $scope.edit = function(id) {
        $scope.customer = Customer.get({
            id: id
        });
    };

    $scope.deselect = function() {
        $scope.customer = "";
    }

})
