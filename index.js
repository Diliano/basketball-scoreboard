let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

function addPoints(team, points) {
    if (team === "home") {
        homeScore += points;
        homeScoreEl.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += points;
        guestScoreEl.textContent = guestScore;
    } 
    updateScoreStyles();
}

function resetScores() {
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScore = 0;
    guestScoreEl.textContent = guestScore;
    updateScoreStyles();
}

function updateScoreStyles() {
    if (homeScore > guestScore) {
        homeScoreEl.style.opacity = 1;
        guestScoreEl.style.opacity = 0.5;
    } else if (guestScore > homeScore) {
        guestScoreEl.style.opacity = 1;
        homeScoreEl.style.opacity = 0.5;
    } else {
       homeScoreEl.style.opacity = 1;
       guestScoreEl.style.opacity = 1; 
    }
}