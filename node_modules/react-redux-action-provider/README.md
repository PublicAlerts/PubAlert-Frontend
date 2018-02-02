This context provider component **maps your action creators to your Redux store**, and provides them to the child components through **this.context.actions**.

This saves you writing **mapDispatchToProps** boilerplate in every component. 
 
Install
=======
```bash
$ npm install react-redux-action-provider
```

Usage
=====
actions.js
---
```javascript
export function signIn() {
  dispatch => {
    // Sign in 
  }
}

export function signOut() {
  dispatch => {
    // Sign out 
  }
}
```

index.js
--------
```javascript
import {
  signIn,
  signOut
} from './actions';

import ActionProviderCreator from 'react-redux-action-provider';

const ActionProvider = ActionProviderCreator({
  signIn,
  signOut
});
```

```diff
- <Provider store={store}>
-   <App />
- </Provider>
+ <Provider store={store}>
+   <ActionProvider>
+     <App />
+   </ActionProvider>
+ </Provider>
```

MyComponent.js 
--------------
```diff
+  MyComponent.contextTypes = {
+    actions: PropTypes.object
+  };
```

```javascript
render() {
  // this.context.actions.signIn();
  // this.context.actions.signOut();
}
```

