<template>
  <div id="gridBody">
    <div id="recommenderBody">
      <section>
        <h1>BoardGameSeek Recommender</h1>
        <p>The BoardGameSeek Recommender takes your board game requirements and searches BoardGameGeek to provide the
          highest rated games that match your criteria. This can help you to choose games that you will love.<br><br>
        </p>
      </section>
      <section id="formFields">
        <p>Choose a value for any or all of these fields to get your board game recommendations.</p>
        <div>
          <label for="numPlayers"># of Players: </label>
          <select id="numPlayers" name="numPlayers" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11+">11+</option>
          </select>
        </div>
        <div>
          <label for="minRating">Minimum Game Rating: </label>
          <select id="minRating" name="minRating" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div>
          <label for="maxWeight">Maximum Game Weight: </label>
          <select id="maxWeight" name="maxWeight" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label for="maxTime">Maximum Game Play Time: </label>
          <select id="maxTime" name="maxTime" required>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">60 minutes</option>
            <option value="120">120 minutes</option>
            <option value="999">120+ minutes</option>
          </select>
        </div>
        <div id="categories">
          <label for="categories">Game Categories</label>
          <Multiselect
            name="categories" 
            v-model="categoriesValue"
            mode="tags"
            :searchable="true"
            :options="categoriesOptions" 
             required />
        </div>
        <div id="mechanics">
          <label for="mechanics">Game Mechanics</label>
          <Multiselect 
            name="mechanics"
            v-model="mechanicsValue"
            mode="tags"
            :searchable="true"
            :options="mechanicsOptions" 
             required />
          </div>
          <button @click="getRecommendations">Search</button>
      </section>
      <section>
        <div v-if="initialResults.length > 0">
          <div class="searchResult" v-for="result in initialResults.slice(0, 10)" :key="result.id">
            <img :src="result.image" class="resultImage" />
            <div>
              <h2>{{ result.name }}</h2>
              <p>BGG Rank: {{ result["Board Game Rank"] }}</p>
              <p>GeekRating: {{ result.GeekAverage }}</p>
              <p>Average Weight: {{ result.averageweight }}</p>
              <p>Description: {{ result.description }}</p>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="searchResult" v-bind:class="{ hideWarning: !searchButtonPushed }">
            <p>No results matching your criteria. Please perform another search.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Multiselect from '@vueform/multiselect'
import { db } from '../../firebaseDatabase';
export default {
  components: { Multiselect },
  methods: {

    getRecommendations: function () {
      let self = this;
      let searchObj = {
        numPlayers: 0,
        minRating: 0,
        maxWeight: 0,
        maxTime: 0,
        categories: [],
        mechanics: []
      }
      self.initialResults = [];

      let initialResults = [];
      let finalResults = [];
           
      // Get values out of all of the input controls
      searchObj.numPlayers = parseInt(document.getElementById('numPlayers').value);
      searchObj.minRating = parseInt(document.getElementById('minRating').value);
      searchObj.maxWeight = parseInt(document.getElementById('maxWeight').value);
      searchObj.maxTime = parseInt(document.getElementById('maxTime').value);

      // Example for getting the string values of the categories input
      this.categoriesValue.forEach((value) => {
        searchObj.categories.push(this.categoriesOptions[value]);
      });

      // Example for getting the string values of the mechanics input
      this.mechanicsValue.forEach((value) => {
        searchObj.mechanics.push(this.mechanicsOptions[value]);
      });


      let gamesRef = db.collection("games");
      gamesRef.where("GeekAverage", ">", searchObj.minRating)
              .orderBy("GeekAverage", "desc")
              .limit(1000)
              .get()
              .then((querySnapshot) => {
                querySnapshot.forEach(function(doc) {
                  initialResults.push(doc.data());
                });
                initialResults = JSON.parse(JSON.stringify(initialResults));
              })
              .then(() => {
                // Filter initialResults further
                finalResults = initialResults.filter((game) => {
                  
                  if (searchObj.numPlayers < game.minplayers || searchObj.numPlayers > game.maxplayers) {
                    return false;
                  }

                  if (searchObj.maxTime < game.maxplaytime) {
                    return false;
                  }

                  if (searchObj.maxWeight <= game.averageweight) {
                    return false;
                  }
                  
                  // if boardgamecategory not includes
                  // Clean up awful stringified array into proper array
                  let cleanGameCategory = game.boardgamecategory.substring(1, game.boardgamecategory.length-1).split(", ");
                  cleanGameCategory = cleanGameCategory.map(a => a.replace("'", ""));
                  cleanGameCategory = cleanGameCategory.map(a => a.replace("'", ""));
                  
                  // Concat both arrays
                  let allCategories = [...cleanGameCategory, ...searchObj.categories];
                  let catBool = (new Set(allCategories).size !== allCategories.length);
                  if (catBool == false) {
                    return false;
                  }
                  


                  // if boardgamemechanic not includes
                  // Clean up awful stringified array into proper array
                  let cleanGameMechanic = game.boardgamemechanic.substring(1, game.boardgamemechanic.length-1).split(", ");
                  cleanGameMechanic = cleanGameMechanic.map(a => a.replace("'", ""));
                  cleanGameMechanic = cleanGameMechanic.map(a => a.replace("'", ""));
                  
                  // Concat both arrays
                  let allMechanics = [...cleanGameMechanic, ...searchObj.mechanics];
                  let mechBool = (new Set(allMechanics).size !== allMechanics.length);

                  if(mechBool == false) {
                    return false;
                  }

                  
                  // if game meets all criteria, add to results set
                  return game;

                });
                self.initialResults = finalResults;
              })
              .catch(function(error) {
                console.log("error getting documents: ", error);
              });
      self.searchButtonPushed = true;
    },
  },
  data () {
    
    return {
      searchButtonPushed: false,
      initialResults: [],
      categoriesValue: [],
      categoriesOptions: ['Abstract Strategy', 'Action/Dexterity', 'Adventure', 'Age of Reason', 'American Civil War', 'American Indian Wars', 
                        'American Revolutionary War', 'American West', 'Ancient', 'Animals', 'Arabian', 'Aviation/Flight', 'Bluffing', 'Book', 
                        'Card Game', 'Childrens Game', 'City Building', 'Civil War', 'Civilization', 'Collectible Components', 'Comic Book/Strip', 
                        'Deduction', 'Dice', 'Economic', 'Educational', 'Electronic', 'Environmental', 'Expansion for Base-game', 'Exploration', 
                        'Fantasy', 'Farming', 'Fighting', 'Game System', 'Horror', 'Humor', 'Industry/Manufacturing', 'Korean War', 'Mafia', 
                        'Math', 'Mature/Adult', 'Maze', 'Medical', 'Medieval', 'Memory', 'Miniatures', 'Modern Warfare', 'Movies/TV/Radio theme', 
                        'Murder/Mystery', 'Music', 'Mythology', 'Napoleonic', 'Nautical', 'Negotiation', 'Novel-based', 'Number', 'Party Game', 
                        'Pike and Shot', 'Pirates', 'Political', 'Post-Napoleonic', 'Prehistoric', 'Print & Play', 'Puzzle', 'Racing', 
                        'Real-time', 'Religious', 'Renaissance', 'Science Fiction', 'Space Exploration', 'Spies/Secret Agents', 'Sports', 
                        'Territory Building', 'Trains', 'Transportation', 'Travel', 'Trivia', 'Video Game Theme', 'Vietnam War', 'Wargame', 
                        'Word Game', 'World War I', 'World War II', 'Zombies'],
      mechanicsValue: [],
      mechanicsOptions: ['Acting', 'Action Drafting', 'Action Points', 'Action Queue', 'Action Retrieval', 'Action Timer', 'Action/Event', 
                         'Advantage Token', 'Alliances', 'Area Majority/Influence', 'Area Movement', 'Area-Impulse', 'Auction: Dexterity', 
                         'Auction: Dutch Priority', 'Auction: Dutch', 'Auction: English', 'Auction: Fixed Placement', 'Auction: Once Around', 
                         'Auction: Sealed Bid', 'Auction: Turn Order Until Pass', 'Auction/Bidding', 'Automatic Resource Growth', 
                         'Bag and Pool Building', 'Betting and Bluffing', 'Bias', 'Bingo', 'Bribery', 'Campaign/Battle Card Driven', 
                         'Card Drafting', 'Card Play Conflict Resolution', 'Catch the Leader', 'Chaining', 'Chit-Pull System', 
                         'Closed Economy Auction', 'Command Cards', 'Commodity Speculation', 'Communication Limits', 'Connections', 
                         'Constrained Bidding', 'Contracts', 'Cooperative Game', 'Crayon Rail System', 'Critical Hits and Failures', 'Cube Tower', 
                         'Deck Construction', 'Deck', 'Deduction', 'Delayed Purchase', 'Dice Rolling', 'Die Icon Resolution', 
                         'Different Dice Movement', 'Drafting', 'Elapsed Real Time Ending', 'Enclosure', 'End Game Bonuses', 'Events', 
                         'Finale Ending', 'Flicking', 'Follow', 'Force Commitment', 'Grid Coverage', 'Grid Movement', 'Hand Management', 
                         'Hexagon Grid', 'Hidden Movement', 'Hidden Roles', 'Hidden Victory Points', 'Highest-Lowest Scoring', 'Hot Potato', 
                         'I Cut, You Choose', 'Impulse Movement', 'Income', 'Increase Value of Unchosen Resources', 'Induction', 'Interrupts', 
                         'Investment', 'Kill Steal', 'King of the Hill', 'Ladder Climbing', 'Layering', 'Legacy Game', 'Line Drawing', 
                         'Line of Sight', 'Loans', 'Lose a Turn', 'Mancala', 'Map Addition', 'Map Deformation', 'Map Reduction', 'Market', 
                         'Matching', 'Measurement Movement', 'Melding and Splaying', 'Memory', 'Minimap Resolution', 'Modular Board', 
                         'Move Through Deck', 'Movement Points', 'Movement Template', 'Moving Multiple Units', 'Multiple Maps', 
                         'Multiple-Lot Auction', 'Narrative Choice/Paragraph', 'Negotiation', 'Network and Route Building', 
                         'Once-Per-Game Abilities', 'Order Counters', 'Ownership', 'Paper-and-Pencil', 'Passed Action Token', 'Pattern Building', 
                         'Pattern Movement', 'Pattern Recognition', 'Physical Removal', 'Pick-up and Deliver', 'Pieces as Map', 
                         'Player Elimination', 'Player Judge', 'Point to Point Movement', 'Predictive Bid', "Prisoner's Dilemma", 
                         'Programmed Movement', 'Push Your Luck', 'Race', 'Random Production', 'Ratio/Combat Results Table', 
                         'Re-rolling and Locking', 'Real-Time', 'Relative Movement', 'Resource to Move', 'Rock-Paper-Scissors', 'Role Playing', 
                         'Roles with Asymmetric Information', 'Roll/Spin and Move', 'Rondel', 'Scenario/Mission/Campaign Game', 
                         'Score-and-Reset Game', 'Secret Unit Deployment', 'Selection Order Bid', 'Semi-Cooperative Game', 'Set Collection', 
                         'Simulation', 'Simultaneous Action Selection', 'Singing', 'Single Loser Game', 'Slide/Push', 'Solo/Solitaire Game', 
                         'Speed Matching', 'Square Grid', 'Stacking and Balancing', 'Stat Check Resolution', 'Static Capture', 'Stock Holding', 
                         'Storytelling', 'Sudden Death Ending', 'Take That', 'Targeted Clues', 'Team-Based Game', 'Tech Trees/Tech Tracks', 
                         'Three Dimensional Movement', 'Tile Placement', 'Time Track', 'Track Movement', 'Trading', 'Traitor Game', 'Trick-taking', 
                         'Tug of War', 'Turn Order: Auction', 'Turn Order: Claim Action', 'Turn Order: Pass Order', 'Turn Order: Progressive', 
                         'Turn Order: Random', 'Turn Order: Role Order', 'Turn Order: Stat-Based', 'Variable Phase Order', 
                         'Variable Player Powers', 'Variable Setup', 'Victory Points as a Resource', 'Voting', 
                         'Worker Placement Different Worker Types', 'Worker Placement with Dice Workers', 'Worker Placement', 
                         'Zone of Control']
    }
  }
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  #gridBody {
    display: grid;
    grid-template-columns:  auto 75% auto;
    justify-items: center;
    align-items: center;
    padding-top: 20px;
    background-color: #f4f3ef;
  }
  
  #recommenderBody {
    grid-column-start: 2;
    padding: 0px 20px;
    min-height: 100vh;
    line-height: 135%;
    padding: 20px 20px;
    border-top: 1px solid #dadada;
    border-radius: 5px;
    box-shadow: 0px 2px 1px 1px #dadada;
    background-color: #ffffff;
  }

  #recommenderBody section {
    grid-column-start: 2;
    grid-column-end: 3;
  }

  #formFields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 60px 40px 40px 40px 60px 60px 40px;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }

  h1, p {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  h1 {
    font-size: 24px;
    padding-bottom: 20px;
    text-align: center;
  }

  p {
    text-align: justify;
  }

  #categories {
    grid-row: 5/6;
    grid-column: 1/3;
  }

  #mechanics {
    grid-row: 6/7;
    grid-column: 1/3;
  }

  button {
    grid-row: 7/8;
    grid-column: 1/2;
    border: 1px solid #212121;
    color: #ffffff;
    border-radius: 5px;
    background-color: #41b883;
    font-weight: bold;
    font-size: 18px;
    transition: 0.3s;
  }

  button:hover {
    background-color: #328d64;
    cursor: pointer;
  }

  button:active {
    transition: 0.3s;
    scale: 99%;
    font-size: 17px;
  }

  #multiselect {
    background-color: #ffffff;
  }

  .searchResult {
    display: grid;
  }

  .resultImage {
    width: 200px;
    height: auto;
  }

  .hideWarning {
    display: none;
  }


</style>
