Main - componentWillMount -- calls (dispatch) todoInitialize (is an action, that was given through props)

thunk wakes up ... object ?  do your thing .... function ... runs

function: todoInitialize

call superagent to fetch it all

dispatch to private method called "initAction"

fires the "INIT" reducer with the result of superagent

Sets the state with whatever it got

Refreshes the page





Update webpack config to use the ENV

Create and import the thunk middleware

Create new public thunked actions
Rename/Unpublish all of the original actions
Export only the functional ones

Add an "INITIALIZE" reducer

Change "CREATE" action to not do the ID and Dates

Call the new fetchAll in componentWillMount for the container

Use the new import as syntax
