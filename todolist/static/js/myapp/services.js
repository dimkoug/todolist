// Resources have the following methods by default:
// get(), query(), save(), remove(), delete()
angular.module('myApp.services', ['ngResource'])
  .factory('todo', function($resource) {
    return $resource('/todo/:id/'); 
  })
  .factory('User', function($resource) {
    return $resource('/users/:id/'); 
  });



