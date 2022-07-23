class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  //1)add player
  addPlayer() {
    
  }
  
   //2)get distance
  getDistance() {
    
  }

  
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }


    //3)update position
  update() {
    var playerIndex = "players/player" + this.index;
    
  }

    //4)get all the values of player
  static getPlayersInfo() {
   
  }
}



