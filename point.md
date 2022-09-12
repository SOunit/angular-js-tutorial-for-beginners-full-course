# backend url

https://damp-eyrie-18477.herokuapp.com/menu_items.json

# memo

- `ng-src` for avoid rendering error
  - first time Angular variable is undefined so error happens in rendering img
- create `custom filter`
  - create filter factory
  - register filter
  - get filter via DI filter
    - name convention is xxxFilter
- digest cycle
  - angular check changes
  - setup
    - $scope.$watch - not recommended
    - {{someProp}}
    - <input ng-model="someProp">
- outside of angular need update angular-context
  - use `$digest` / `$apply`
  - in case using setTimeout from jQuery etc.
    - in case writing code by myself, using Angular functions will help but 3rd party library won't
  - `$digest` is not good, exception is not visible
  - `$apply` handle exception and call `$digest` for Angular
  - `setTimeout` is outside of Angular Context, but `$timeout` is inside AngularJS, better
- `this` bind in controller works only with `controller as syntax` pattern

# module

- separate concern
- `jQuery` is one module, independent

- module
  - controller
  - directives
  - etc.

# event

- design pattern, publish-subscriber pattern
- `$rootScope` is scope of root
- `$scope.emit` - to top
- `$scope.broadcast` - to down
- `$rootScope.broadcast` - from top to bottom
- event from anywhere to anywhere
