angular.module('AdminCtrl', [])

  .controller('AdminController', ['$scope','$http','Todos', function($scope, $http, Todos) {

    $scope.chosenDay = 'Today';
    $scope.pageSize = 20;
    $scope.currentPage = 1;
		$scope.gridOptions = {
            data: [],
            urlSync: false
        };

    Todos.getLessons()
	.success(function(data) {
	   $scope.lessonList = data;
		$scope.gridOptions.data = data;
	});

    $scope.deleteLesson = function(id) {
      //$location.path('/');
      if(confirm("Are you sure to delete event number: "+id)==true)
      Todos.deleteLesson(id);
      $location.path('/admin/');
    };

}]);
