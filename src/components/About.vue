<template>
  <div class="about">
    <h1>Hi {{there_name}} .This is an about page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>
  </div>
</template>


<script>
export default {

  data(){
  return {
  there_name: this.$route.params.name


  }
  }

}
</script>