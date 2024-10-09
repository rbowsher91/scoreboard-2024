let homeDisplay = document.getElementById('home-score-el')
let guestDisplay = document.getElementById('guest-score-el')
let homeScore = 0
let guestScore = 0


function add1Home() {
    homeScore += 1
    homeDisplay.textContent = homeScore
}


function add2Home() {
    homeScore += 2
    homeDisplay.textContent = homeScore
}


function add3Home() {
    homeScore += 3
    homeDisplay.textContent = homeScore
}


function add1Guest() {
    guestScore += 1
    guestDisplay.textContent = guestScore
}


function add2Guest() {
    guestScore += 2
    guestDisplay.textContent = guestScore
}


function add3Guest() {
    guestScore += 3
    guestDisplay.textContent = guestScore
}


