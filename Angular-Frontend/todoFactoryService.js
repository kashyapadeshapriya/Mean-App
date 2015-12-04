<script>
  angular.module('app', ['ngRoute'])
.controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
        Todos.success(function(data){
            $scope.todos = data;
          }).error(function(data, status){
            console.log(data, status);
           $scope.todos = [];
          });
    }])
 }]);
</script>