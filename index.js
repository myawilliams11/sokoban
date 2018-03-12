const map = [
    "  WWWWW ",
    "WWW   W ",
    "WOSB  W ",
    "WWW BOW ",
    "WOWWB W ",
    "W W O WW",
    "WB XBBOW",
    "W   O  W",
    "WWWWWWWW"
  ];
  const winningMap = [
    "  WWWWW ",
    "WWW   W ",
    "WXS   W ",
    "WWW  XW ",
    "WXWW  W ",
    "W W X WW",
    "W  X  XW",
    "W   X  W",
    "WWWWWWWW"
  ];
var playerRow = 0;
var playerCell = 0;

// black player piece
let playerDiv = document.getElementById("player")

for (iRow = 0; iRow < map.length; iRow++) {
    let rowDiv = document.createElement("div")
    rowDiv.classList.add("row")
    rowDiv.id = "row-" + iRow
    document.getElementById("container").appendChild(rowDiv)

    let mapRow = map[iRow]
    console.log('Map Row at position ' + iRow + ' is: ' + mapRow)
    for (iCell = 0; iCell < mapRow.length; iCell++) {

        let cellDiv = document.createElement("div")
        cellDiv.classList.add("cell")
        cellDiv.id = "cell-" + iCell

        rowDiv.appendChild(cellDiv)

        let character = mapRow[iCell]
        console.log('Character at position ' + iCell + ' is: "' + character + '"')


        // set initial player position
        if (character == "S") {
            playerDiv.style.left = (22 * iCell) + "px"
            playerDiv.style.top = (22 * iRow) + "px"
            playerRow = iRow;
            playerCell = iCell; 
        }
        // make barrier color grey
        else if (character == "W") {
            cellDiv.classList.add("barrier")
        }
        // make empty storage location- O
        else if (character == "O") {
            cellDiv.classList.add("storage")
        }
        // starting position of box -B
        else if (character == "B") {
            cellDiv.classList.add("box")
        }
        // storage loation with box already in it- X
        else if (character == "X") {
            cellDiv.classList.add("hybrid")
        }
    }
}

// scroll through maze
document.addEventListener("keydown", function (event) {
    console.log(event.key)
    let pixelsFromTop = Number(playerDiv.style.top.split("px")[0])
    let pixelsFromLeft = Number(playerDiv.style.left.split("px")[0])
    console.log("px from top", pixelsFromTop)
    console.log("px from left", pixelsFromLeft)

    if (event.key == "ArrowUp") {     
        playerRow--;
        if (map[playerRow][playerCell] == "W") {
            playerRow++;
            // blocking hybrid cell mvt
        } else if (map[playerRow][playerCell] == "X") {
            playerRow++;
            // move boxes
        } else if (map[playerRow][playerCell] == "B") {
                playerRow--;
        } else {
            playerDiv.style.top = (pixelsFromTop - 22) + "px";
        }     
    }

    if (event.key == "ArrowLeft") {
        playerCell--;
        if (map[playerRow][playerCell] == "W"){
            playerCell++;  
            // blocking hybrid cell mvt
        } else if (map[playerRow][playerCell] == "X") {
            playerCell++; 
            // move boxes***
        } else {
        playerDiv.style.left = (pixelsFromLeft - 22) + "px";  
        }
    } 

    if (event.key == "ArrowDown") {
        playerRow++;
        if (map[playerRow][playerCell] == "W") {
            playerRow--;
            // blocking hybrid cell mvt
        } else if (map[playerRow][playerCell] == "X") {
            playerRow++;        
            // move boxes***
        } else {
        playerDiv.style.top = (pixelsFromTop + 22) + "px";
        }     
    }

    if (event.key == "ArrowRight") {
        playerCell++;
        if (map[playerRow][playerCell] == "W") {
            playerCell--;
            // blocking hybrid cell mvt
        } else if (map[playerRow][playerCell] == "X") {
                playerCell--;    
                // move boxes***
        } else {
            playerDiv.style.left = (pixelsFromLeft + 22) + "px";
        }
    }




    console.log("playerPosition:", map[playerRow][playerCell])

    //  make barriers active
//      if (playerDiv.barrier)

    //winning alert - winningMap then alert "great job"
        
        // if (winningMap){
        // window.alert ("Great Job!"); 

})