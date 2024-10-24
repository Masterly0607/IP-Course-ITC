<template>
  <div>
      <h1>This is my first VueJS project</h1>
  <RouterView />
  </div>

</template>
<!-- package: small software or library that developer is builded -->
 <!-- devDependencies: use when compile -->
  <!-- dependencies: use when run code -->
   <!-- node_modules: 
    example: why pinia appears in node_modules and in dependencies?
    pinia in  dependencies is depended on pinia in node_modules
   
   -->
    <!-- vite.config.js : used to compile js code to host -->
     <!-- 400-405 = error from user -->
      <!-- 500-505 = error from sever -->
       <!-- There are two ways to import components -->
        <!-- 1. Static import: will bundle the component when the app is built.(All components are loaded at the same time) 
        + pro: All components are loaded at the same time, which can be useful if the app is small.
        + con: Increases the initial load time because all components are bundled together. 
        -->
         <!-- 2. Lazy loading(dynamic import): load the component only when the route is visited.(useful for larger app)
         + pro: Only loads components when needed, leading to better performance, especially for larger apps.
         + con: Requires a network request when the component is loaded for the first time, which can lead to a slight delay.
         -->
         <!-- git: 
          + 
         
         -->
          <!-- https vs ssh:
          https: 
          ssh: key for your own computer  
          -->