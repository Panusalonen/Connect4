(function() {
    var curPlayer = "player1";
    var slots = $(".slot");

    $(".column").on("click", function(e) {
        // --> eventlistener to columns to find the slots
        var slotsInColumn = $(e.currentTarget).find(".slot");

        for (var i = 5; i > -1; i--) {
            // --> tracks which players turn
            if (!slotsInColumn.eq(i).hasClass("player1")) {
                if (!slotsInColumn.eq(i).hasClass("player2")) {
                    break; // --> FOR ONLY TO CHECK WHOSE TURN!
                }
            }
        }
        if (i == -1) {
            return;
        }

        slotsInColumn.eq(i).addClass(curPlayer); // --> after sorting out whose turn, mark the color
        var slotsInRow = $(".row" + i);
        if (checkForVictory(slotsInColumn)) {
            // --> checking the victory, IF YES, THEN
        } else if (checkForVictory(slotsInRow)) {
            // --> checking the victory, IF YES, THEN
        } else if (diagonalWin()) {
            // --> checking the victory, IF NO, THEN
        } else {
            switchPlayers();
        }
    });

    function switchPlayers() {
        // --> switch players
        if (curPlayer == "player1") {
            curPlayer = "player2";
        } else {
            curPlayer = "player1";
        }
    }

    function checkForVictory(slots) {
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(curPlayer)) {
                // --> from bottom to top which slot has player class (color)
                count++;
                if (count == 4) {
                    victoryMessage();
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    function victoryMessage() {
        setTimeout(function(){
            $("body").prepend('<h1 class="victory">VICTORY!</h1>');
        }, 100);
        setTimeout(function(){
            alert("GOOD GAME, WELL PLAYED, GO OUT!");
        }, 1000);
    }

    function checkForVictory(slotsInColumn) {
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slotsInColumn.eq(i).hasClass(curPlayer)) {
                // --> from bottom to top which slot has player class (color)
                count++;
                if (count == 4) {
                    victoryMessage();
                    return true;
                    // console.log("victory");
                }
            } else {
                count = 0;
            }
        }
    }

    function victoryMessage() {
        setTimeout(function(){
            $("body").prepend('<h1 class="victory">VICTORY!</h1>');
        }, 100);
        setTimeout(function(){
            alert("GOOD GAME, WELL PLAYED, GO OUT!");
        }, 1000);
    }

    function diagonalWin() {
        var diagonalArray = [
            [0, 7, 14, 21],
            [1, 8, 15, 22],
            [2, 9, 16, 23],
            [3, 8, 13, 18],
            [4, 9, 14, 19],
            [5, 10, 15, 20],
            [6, 13, 20, 27],
            [7, 14, 21, 28],
            [8, 15, 22, 29],
            [9, 14, 19, 24],
            [10, 15, 20, 25],
            [11, 16, 21, 26],
            [12, 19, 26, 33],
            [13, 20, 27, 34],
            [14, 21, 28, 35],
            [15, 20, 25, 30],
            [16, 21, 26, 31],
            [17, 22, 27, 32],
            [18, 25, 32, 39],
            [19, 26, 33, 40],
            [20, 27, 34, 41],
            [21, 26, 31, 36],
            [22, 27, 32, 37],
            [23, 28, 33, 38]
        ];

        for (var i = 0; i < diagonalArray.length; i++) {
            var count = 0;
            for (var j = 0; j < 4; j++) {
                if (slots.eq(diagonalArray[i][j]).hasClass(curPlayer)) {
                    count++;
                }
            }
            if (count == 4) {
                victoryMessage();
                return true;
            }
        }
    }

    function victoryMessage() {
        setTimeout(function(){
            $("body").prepend('<h1 class="victory">VICTORY!</h1>');
        }, 100);
        setTimeout(function(){
            alert("GOOD GAME, WELL PLAYED, GO OUT!");
        }, 1000);
    }
})();
