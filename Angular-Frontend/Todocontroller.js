<script>
  angular.module('app', ['ngRoute'])
.controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', function ($scope, $routeParams, Todos) {
      $scope.todo = Todos[$routeParams.id];
    }])
 }]);
</script>