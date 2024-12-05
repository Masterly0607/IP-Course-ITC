<template>
  
  <div>
       <div  class="category-item">
      <div class="category-img">
      <img :src="'http://localhost:3000/'+ image" style="width: 100%; height: 100%; object-fit: cover; "/>
      </div>
     
      <h3>{{ title }}</h3>
      <p style="color: gray; font-size: 10px;">{{ num }} items</p>
    </div>
  </div>
  

   
  </template>
  <script>
   export default {
    props:{
      title: String,
      img: String,
      color: String,
      num: Number,
  
    }
   }
  
  
  </script>
  <style>
  .category-item{
    padding: 30px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px;
    
    
    
    
  }
  .category-img{
    width: 100px;
    height: 100px;
  }
</style>