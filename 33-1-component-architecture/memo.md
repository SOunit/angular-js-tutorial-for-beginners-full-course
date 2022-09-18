- AngularJS 1.5 introduced `component`
- `component` is a new way of implementing `directive`

# component architecture principles

- control only their own view and data
  - never modify data or DOM outside their own scope
  - to avoid chaos
  - component always use `isolate scope`
- well defined public API - Inputs and Outputs
  - Inputs: use `<` and `@` bindings only
  - never change property of passed in object or array
  - Output: use `&` for component event callbacks
  - pass data to callback through param map `{key: value}`
- well defined `lifecycle`
  - `$onInit` - controller initialize code
  - `$onChange(changeObj)` - called whenever one-way bindings are updated
  - `$postLink` - similar to `link` method in directive
  - `$onDestroy` - when scope is about to be destroyed
- application is a tree of components
  - entire app should be comprised of components
  - each component has well-designed input and output
  - 2-way data binding is minimized as much as possible

# create component

- register component with module
- configure component
  - default controller is `$ctrl`
  - bindings - isolate scope
- reference props in template
