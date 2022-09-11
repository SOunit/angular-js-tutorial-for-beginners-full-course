- Angular has digest cycle to check value change
- if value change, re-render run
- not recommended approach, Angular offer automated binding without manual setup

```
$scope.$watch(valueToWatch, function(old, new){})
```
