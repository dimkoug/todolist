var todoControllers = angular.module('myApp.controllers', ['restangular']);
todoControllers  = angular.module('myApp').controller('todoCtrl', function($scope, todo, Restangular , AuthUser) {
  var todos = Restangular.all('todo/');
  todos.getList().then(function(todos) {
    $scope.todos = todos;
    $scope.limit = '15';
  });
  $scope.submitTodo = function(text) {
      var newtodo = new todo({text: text});
      todos.post(newtodo).then(function(data) { 
        $scope.todos.unshift(data);
      })
  }
  $scope.canDelete = function(t){
     
      if(parseInt(t) == AuthUser.id){
        return true;
      }
      else{
        return false;
     }
  }
  $scope.canEdit = function(t){
     
      if(parseInt(t) == AuthUser.id){
        return true;
      }
      else{
        return false;

     }
  }
  $scope.removeTodo = function(pk) {
      var id = parseInt(pk);
      var mytodo = Restangular.one('todo', id)
      var idx= $scope.todos.indexOf(mytodo);
      console.info($scope.todos.indexOf(mytodo));
      mytodo.remove().then(function(data) { 
         todos.getList().then(function(todos) {
            $scope.todos = todos;
          });
          
      })
  }
});
todoControllers  = angular.module('myApp').controller('UserCtrl', function($scope, todo, User, AuthUser , Restangular) {
  var id = AuthUser.id;
  $scope.todos = {};
  var users = Restangular.one('users', id)
  users.get().then(function(users) {
    $scope.user = users;
    $scope.todos = users.todo;

  });
});
todoControllers  = angular.module('myApp').controller('updateCtrl', function($scope, $stateParams, todo, User, AuthUser , Restangular,$window) {
  var mytodo = Restangular.one("todo", parseInt($stateParams.id));
  console.info(mytodo);
  mytodo.get().then(function(c){
    $scope.text = c.text;
  })
  $scope.updateTodo = function(text) {
      var remoteItem = Restangular.copy(mytodo);
          remoteItem.patch({text: text});
          $window.location.href = '/';
  }
});
todoControllers  = angular.module('myApp').controller('detailsCtrl', function($scope, $stateParams, todo, User, AuthUser , Restangular,$window) {
  var mytodo = Restangular.one("todo", parseInt($stateParams.id));
  mytodo.get().then(function(c){
    $scope.text = c.text;
  })
});



// check post length
describe("Test post length", function() {
  var a='a9999';
  var b;
  it("Post is ok", function() {
    if(a.length>4){
        b = true;
    }
    else{
      b = false;


    }

    expect(b).toBe(true);
  });
});

