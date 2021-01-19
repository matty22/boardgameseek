<template>
  <article>
    <h2>{{ title }}</h2>
    <h1>{{ value }}</h1>
  </article>
</template>

<script>
export default {
  setup() {

    return {

    }
  },
  props: ["title", "value", "imageSrc"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

article {
  border-top: 1px solid #dadada;
  box-shadow: 0px 2px 1px 1px #dadada;
  padding: 20px 20px;
}

</style>
