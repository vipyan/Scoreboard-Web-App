let scoreHome = 0
let scoreGuest = 0

const homeScoreBoard = document.getElementById("score-board-home")
const guestScoreBoard = document.getElementById("score-board-guest")

// function home
function add1H(){
    scoreHome +=1
    homeScoreBoard.textContent = scoreHome
}

function add2H(){
    scoreHome +=2
    homeScoreBoard.textContent = scoreHome
}

function add3H(){
    scoreHome +=3
    homeScoreBoard.textContent = scoreHome
}

// fuction guest

function add1G(){
    scoreGuest += 1
    guestScoreBoard.textContent = scoreGuest 
}

function add2G(){
    scoreGuest += 2
    guestScoreBoard.textContent = scoreGuest 
    
}

function addG(){
    scoreGuest += 3
    guestScoreBoard.textContent = scoreGuest 
}