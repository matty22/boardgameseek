<template>
  <article>
    <p>{{ title }}</p>
    <iframe width='{{ width }}' height='{{ height }}' src='{{ frameLink }}' frameborder='0' allowFullScreen='true' />
  </article>
</template>

<script>

export default {
  props: ['title', 'width', 'height', 'frameLink'],
  setup() {

    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

article {
  border-top: 1px solid #dadada;
  box-shadow: 0px 2px 1px 1px #dadada;
  background-color: #ffffff;
  padding: 20px 20px;
  border-radius: 5px;
}

</style>
