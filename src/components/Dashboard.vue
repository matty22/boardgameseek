<template>
  <section id="topRow">
    <QuickStat/>
    <QuickStat/>
    <QuickStat/>
    <QuickStat/>
  </section>
  <section id="middleRow">
    <ChartBlock/>
    <ChartBlock/>
  </section>
  <section id="bottomRow">
    <ChartBlock/>
    <ChartBlock/>
  </section>
</template>

<script>
import QuickStat from './QuickStat.vue'
import ChartBlock from './ChartBlock.vue'

export default {
  setup() {

    return {

    }
  },
  components: {
    QuickStat,
    ChartBlock
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#topRow {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 20px;
  padding: 0px 20px; 
}

#middleRow {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  padding: 0px 20px; 
}

#bottomRow {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  padding: 0px 20px; 
}


</style>
