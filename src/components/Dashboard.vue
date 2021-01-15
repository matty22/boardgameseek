<template>
  <div id="body">
    <aside>
      <div id="title">
        <h3>BoardGameSeek</h3>
      </div>
      <ul>
        <li>DASHBOARD</li>
        <li>RECOMMENDER</li>
        <li>ABOUT</li>
      </ul>
    </aside>
    <main>
      <section id="infoBar"></section>
      <section id="topRow"><QuickStat/><QuickStat/><QuickStat/><QuickStat/></section>
      <section id="middleRow"></section>
      <section id="bottomRow"></section>
    </main>
  </div>
</template>

<script>
import QuickStat from './QuickStat.vue'
export default {
  setup() {

    return {

    }
  },
  components: {
    QuickStat
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Set up grid for entire dashboard */
#body {
  display: grid;
  grid-template-columns: 200px auto;
}

/* Brown nav window */
aside {
  background-color: #212121;
  color: #ffffff;
  min-height: 100vh;
  padding: 20px 0px;
}

/* Brown nav window title - BoardGameSeek */
aside > #title {
  margin: 0 15px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ffffff;
}

/* Navigation UL */
aside > ul {
  list-style-type: none;
  padding: 40px 20px;
  font-size: 14px;
}

aside > ul > li {
  padding-bottom: 30px;
}

/* Main window styles */

main {
  display: grid;
  grid-row-gap: 20px;
  grid-template-rows: 35px 150px 300px 200px;
  background-color: #f4f3ef;
  padding: 0px 20px;  
}

#infoBar {
  background-color: #f4f8ef;
  border-bottom: 1px solid #dadada;
}

#topRow {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 20px;
}

#middleRow {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
}

#bottomRow {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
}


</style>
