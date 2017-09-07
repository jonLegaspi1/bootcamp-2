angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
	$scope.searchListing = '';
	$scope.detailedInfo =  undefined;

    $scope.addListing = function() {
		$scope.listings.push({
			'code':$scope.code,
			'name':$scope.name,
			'address':$scope.address
		});
		$scope.code='';
		$scope.name='';
		$scope.address='';
		
	};
    $scope.deleteListing = function(index) {
		$scope.listings.splice(index, 1);
	};
    $scope.showDetails = function(index) {
		$scope.detailedInfo = $scope.listings[index];
	};	
  }
]);