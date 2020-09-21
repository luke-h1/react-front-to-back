## React Front To Back

* Course files for https://www.udemy.com/course/modern-react-front-to-back/


## Deployed React Apps: 
  * Github user searcher: https://github-user-search-react-app.netlify.app



## TODO: 
* look into loadUser() method in AuthState.js & figure out why it is spamming the /api/auth endpoint & causing a similar issue that useEffect does when you don't pass in an empty array ✅
  * solution: not passing in correct dispatch msg to reducer. This resulted in the app constantly checking for a JWT token and spamming the /api/auth endpoint for it instead of entering the USER_LOADED state. 
