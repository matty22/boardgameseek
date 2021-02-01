<template>
  <div id="aboutBody">
    <p>
      <a href="https://www.boardgamegeek.com" target="_blank"><strong>BoardGameGeek</strong></a> is the largest board game community website on the internet.
      BGG has news, forums, groups, and other ways for fans of board games to interact with one another. One of the main features of BGG is that
      each user can create their own digital collection of boardgames and they can rate games on several different metrics like quality, complexity,
      and how many players is best. The main draw of BGG is their <a href="https://boardgamegeek.com/browse/boardgame" target="_blank">comprehensive 
      list of board games and their rankings.</a> Using all of the rankings from BGG users, the website provides a listing of the games that 
      the community has deemed 'best'.
    </p>
    <p>
      <strong>BoardGameSeek</strong> is a web application that strives to make sense of the huge amount of board game data available on BoardGameGeek.
      On the Dashboard are charts that attempt to show trends in the BGG data. How does game weight (complexity) affect how users rate games?
      How do multiple factors together affect how users rate games? Can we make any reasonable groupings of the games listed on BGG? On the 
      Recommender page, users can input their requirements for multiple data points and the Recommender engine will provide back a list of the 
      highest rated games on BGG that meet all of their requirements.
    </p>
  </div>
</template>

<script>

export default {
  
  setup() {
   
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#aboutBody {
  padding: 0px 70px;
  background-color: #f4f3ef;
}

#aboutBody p {
  font-size: 22px;
  line-height: 125%;
  border-top: 1px solid #dadada;
  border-radius: 5px;
  box-shadow: 0px 2px 1px 1px #dadada;
  background-color: #ffffff;
  padding: 20px 20px;
  margin-top: 20px;
}

#aboutBody a {
  color: #328d64;
  text-decoration: none;
}

</style>
