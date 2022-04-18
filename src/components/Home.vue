<template>
  <div>
      <p>{{name}}</p>
      
  </div>
</template>

<script>

export default {
   
    data(){
        return {
            name:'asd',
            a:1,
            b:4
        }
    },
    methods:{
        sum(a,b){
            return a+b
        }
    }
    

}
</script>

<style>
div{ 
    background-color:rebeccapurple;
}
</style>