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
    <section id="chartArea">
      <div class="chartBlock">
        <h2>GeekRating vs # of Owners K-Means Cluster</h2>
        <img src="../assets/GeekRatingVsOwnsCluster.png" width="800" />
        <details>
          <summary>Click here for an explanation for this chart</summary>
          <p>The GeekRating on BGG is the weighted average rating that all users have given to that game.
            In this chart, the y-axis is the number of people who report owning each game and the x-axis
            is the GeekAverage for each game.<br><br>We can see a trend toward fewer users owning each game
            as the GeekAverage decreases (bottom left cluster of games). Cluster 2 are unique outliers to the
            overall trend. The games in Cluster 2 are what might be considered the 'modern classics'. Games like Carcassonne,
            Ticket to Ride, Pandemic, and Dominion are in this cluster. They aren't necessarily rated extremely high
            by users but they are the games that kicked off this 'renaissance' of board games, so many people own them.
          </p>
        </details>
      </div>
      <div class="chartBlock">
        <h2>Game Weight (complexity) vs # of Owners K-Means Cluster</h2>
        <img src="../assets/WeightVsOwnsCluster.png" width="800" />
        <details>
          <summary>Click here for an explanation for this chart</summary>
          <p>The average weight of a game is how complex the game is as rated by BGG users. In this chart, we see average 
            weight along the x-axis. The range for game weight is 0 for the simplest of games to 5 for the most complex. 
            We see the number of owners along the y-axis again in this chart.<br><br>Overall, the games are dispersed
            fairly evenly. We can see that after a game reaches a weight of 4 or higher, the number of owners falls off
            dramatically. A weight lower than 1 also saw nearly no owners on BGG as those very low complexity games tend 
            to be children's games. There were so few games rated with a weight of 0-1 that they've not been included
             in this chart. Cluster 2 is that same unique group of 'modern classic' board games. They are owned 
            by many BGG users regardless of their range of weights.
          </p>
        </details>
      </div>
      <div class="chartBlock">
        <h2>Decision Tree to predict BoardGameGeek rank</h2>
        <img src="../assets/DecisionTreeBGGRank.png" width="800" />
        <details>
          <summary>Click here for an explanation for this chart</summary>
          <p>This decision tree graph attempts to predict how highly a game will be ranked on BGG based on a few inputs.
            A lower value (higher rank) is preferred in this tree. At each fork, the left branch is the 'yes' branch and 
            the right branch is the 'no' branch.<br><br>The total number of users who have rated the game has a large
            effect on how a game is ranked. This could be because games that are already well regarded have more players and 
            thus more total ratings. After that, the game weight (complexity) predicts a game's rank. BGG users tend to rank games 
            higher when they have greater complexity. This is likely caused by most BGG players being enthusiasts for the hobby
            and being very familiar with common boardgame tropes. The minimum number of players can also affect how high a game 
            reaches on the BGG charts.
          </p>
        </details>
      </div>
      <div class="chartBlock">
        <h2>Decision Tree to predict how many people own the game</h2>
        <img src="../assets/DecisionTreeOwned.png" width="800" />
        <details>
          <summary>Click here for an explanation for this chart</summary>
          <p>This decision tree graph attempts to predict how many people will ultimately own any given game.
            More owners means more revenue for board game stores and dealers. More owners is preferred in this tree. 
            At each fork, the left branch is the 'yes' branch and the right branch is the 'no' branch.<br><br>The most
            important input to this tree is the average rating of the game (GeekAverage) followed by the complexity 
            of the game (average weight). The tree predicts that a game with a GeekAverage between 7.3 - 7.5 and a weight less
            than 2 will be owned by the highest number of BGG users.
          </p>
        </details>
      </div>
      <div class="chartBlock">
        <h2>Board Game Rank by Average Game Weight Trend Line</h2>
        <img src="../assets/WeightVsRankTrendLine.png" width="800" />
        <details>
          <summary>Click here for an explanation for this chart</summary>
          <p>The Board Game Rank is how highly a game is regarded by BGG users. In this chart, we see Board Game Rank 
            along the y-axis. The average weight along the x-axis is the average complexity of the game as rated by BGG users. 
            A lower average weight corresponds to a simpler game and a higher average weight corresponds to a more complex game.
            <br><br>This trend line chart plots all 20,000 games on the BGG website. As the complexity of the game 
            increases the trend line shows that the Board Game Rank increases. This trend line is consisitent with what we 
            see in the decision tree above that predicts Board Game Rank. BGG users tend to regard more complex games more highly.
          </p>
        </details>
      </div>
      <div class="chartBlock">
        <h2>Minimum Recommended Age vs. # of Owners</h2>
        <img src="../assets/MinAgeVsOwnsRing.png" width="800" />
        <details>
          <summary>Click here for an explanation for this chart</summary>
          <p>This ring chart compares minimum recommended age for a game versus how many BGG users own that game. The vast majority
            of games owned on BGG have a minimum recommended age of between 8-14. This information could help game designers and 
            board game shops and dealers to create and stock games within that range and to avoid games with very high or very low 
            recommended minimum ages.
          </p>
        </details>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  setup() {
    return {

    }
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#gridBody {
  display: grid;
  grid-template-rows: 0px 150px auto auto auto;
  grid-template-columns: 1200px;
  grid-row-gap: 20px;
  background-color: #f4f3ef; 
  min-height: 100vh;
}

#topRow {
  display: grid;
  grid-template-columns: 21% 21% 21% 21%;
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

#chartArea {
  display: grid;
  grid-template-columns: 89.5%;
  grid-row: 3;
  grid-row-gap: 20px;
  padding: 0px 20px; 
}

.chartBlock {
  border-top: 1px solid #dadada;
  box-shadow: 0px 2px 1px 1px #dadada;
  background-color: #ffffff;
  width: 100%;
  padding: 20px 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.chartBlock h2 {
  padding-bottom: 10px;
  font-size: 24px;
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

details {
  padding: 15px 0px;
  width: 500px;
}

summary {
  text-align: center;
  cursor: pointer;
}

details > p {
  padding-top: 10px;
  font-size: 14px;
  font-style: italic;
  line-height: 140%;
}


</style>
