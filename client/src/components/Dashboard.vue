<template>
  <div id="gridBody">
    <section id="topRow">
      <div class="quickStat">
        <img class="quickStatImg" id="personSVG" width="60" src="../assets/person.svg" />
        <p class="quickStatP"># of BGG Users</p>
        <h1 class="quickStatTitle">> 2 million</h1>
      </div>
      <div class="quickStat">
        <img class="quickStatImg" width="75" src="../assets/GloomhavenThumb.png" />
        <p class="quickStatP">Current #1 Ranked Game</p>
        <h1 class="quickStatTitle"><em>Gloomhaven</em></h1>
      </div>
      <div class="quickStat">
        <img class="quickStatImg" id="casinoSVG" width="60" src="../assets/casino.svg" />
        <p class="quickStatP"># of games on BGG</p>
        <h1 class="quickStatTitle">20,150</h1>
      </div>
      <div class="quickStat">
        <img class="quickStatImg" width="60" src="../assets/pictures2.png" />
        <p class="quickStatP">2020 Spiel des Jahres Winner</p>
        <h1 class="quickStatTitle"><em>Pictures</em></h1>
      </div>
    </section>
    <section id="middleRow">
      <div class="chartBlock">
        <h2>Board Game Rank by Average Game Weight</h2>
        <iframe width="750" height="450" src="https://app.powerbi.com/reportEmbed?reportId=6b9e02b8-5bb5-41aa-9a4c-bd7634f5dcdd&autoAuth=true&ctid=cfa792cf-7768-4341-8857-81754c2afa1f&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtdXMtYi1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9&navContentPaneEnabled=false" frameborder="0" allowFullScreen="true"></iframe>
      </div>
    </section>
    <section id="bottomRow">
      
    </section>
  </div>
</template>

<script>
// import ChartBlock from './ChartBlock.vue'

export default {

  setup() {
    
    return {

    }
  },
  components: {
    // ChartBlock
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#gridBody {
  display: grid;
  grid-template-rows: 0px 150px 500px 500px;
  grid-row-gap: 20px;
  background-color: #f4f3ef; 
  min-height: 100vh;
}

#topRow {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 20px;
  padding: 0px 20px; 
  grid-row: 2/3;
}

.quickStat {
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 70% 30%;
  border-top: 1px solid #dadada;
  box-shadow: 0px 2px 1px 1px #dadada;
  background-color: #ffffff;
  padding: 20px 20px;
  border-radius: 5px;
}

#middleRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row:3;
  padding: 0px 20px; 
}

#bottomRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  padding: 0px 20px;
  grid-row: 4; 
}

.chartBlock {
  border-top: 1px solid #dadada;
  box-shadow: 0px 2px 1px 1px #dadada;
  background-color: #ffffff;
  padding: 20px 20px;
  border-radius: 5px;
}

#personSVG {
  filter: invert(44%) sepia(57%) saturate(2719%) hue-rotate(253deg) brightness(102%) contrast(101%);
}

#trophySVG {
  filter: invert(73%) sepia(72%) saturate(360%) hue-rotate(355deg) brightness(104%) contrast(105%);
}

#casinoSVG {
  filter: invert(91%) sepia(98%) saturate(1382%) hue-rotate(86deg) brightness(94%) contrast(105%);
}

.quickStatImage {
  grid-row-start: 1;
  grid-row-end: 3;
}

.quickStatTitle {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: -1;
  grid-column-end: -3;
  text-align: right;
  font-size: 24px;
}

.quickStatP {
  font-size: 14px;
  text-align: right;
}


</style>
