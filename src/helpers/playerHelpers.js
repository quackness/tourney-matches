import playerData from "../data/playerData";


//turning an object into an array
export const preparePlayerData = () => {
  return Object.values(playerData);
};

//add a wins key to every player
export const addWinsToPlayers = (playerDataArray, matchData) => {
  //map works for arrays
  return playerDataArray.map(player => {
     // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
       // Adds a win if the gamerTag matches
      if (match.winner === playerData.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);
    // {
    //   matchNumber: 1,
    //   players: ["Disguised Lizard", "DrSpiteful"],
    //   winner: "DrSpiteful",
    //   scoreDifference: 1
    // },
    console.log("currentWins is", currentWins)
    //assigns the value to the wins key
    player.wins = currentWins;
    return player;
  }); 
}

