let homeScr = document.getElementById("home-scr");
let guestScr = document.getElementById("guest-scr");
let foulScrHome = document.getElementById("foul-scr-home");
let foulScrGuest = document.getElementById("foul-scr-guest");
let periodScr = document.getElementById("period-scr");
let timeScr = document.getElementById("time-scr");
let startReset = document.getElementById("ng-btn");
let homeInpt = document.getElementById("home-inpt");
let guestInpt = document.getElementById("guest-inpt");
let teams = document.getElementById("teams");
homeScr.textContent = 0;
guestScr.textContent = 0;
foulScrHome.textContent = 0;
foulScrGuest.textContent = 0;
periodScr.textContent = 0;
timeScr.textContent = "10:00";
let countHome = 0;
let countGuest = 0;
let countHomeFoul = 0;
let countGuestFoul = 0;
let countPeriod = 0;
var countdown, sec;
var toggle = true;

function incrementHome (homeId){
    if (homeId.includes("incrt-home1")){
        countHome += 1;
        homeScr.textContent = countHome;
    }
    else if (homeId.includes("incrt-home2")){
        countHome += 2;
        homeScr.textContent = countHome;
    }
    else if (homeId.includes("incrt-home3")){
        countHome += 3;
        homeScr.textContent = countHome;
    }
}

function incrementGuest (guestId){
    if (guestId.includes("incrt-guest1")){
        countGuest += 1;
        guestScr.textContent = countGuest;
    }
    else if (guestId.includes("incrt-guest2")){
        countGuest += 2;
        guestScr.textContent = countGuest;
    }
    else if (guestId.includes("incrt-guest3")){
        countGuest += 3;
        guestScr.textContent = countGuest;
    }
    
}

function incrementHomeFoul (guestId){
    if (countHomeFoul <6){
        countHomeFoul += 1;
        foulScrHome.textContent = countHomeFoul;
    }
}

function incrementGuestFoul (guestId){
    if (countGuestFoul < 6){
        countGuestFoul += 1;
        foulScrGuest.textContent = countGuestFoul;
        }
}

function incrementPeriod (guestId){
        if (countPeriod < 4){
            clearInterval(countdown);
	        toggle = true;
	        startReset.innerHTML = 'Start';
	        timeScr.innerHTML = "10:00";
            countPeriod += 1;
            periodScr.textContent = countPeriod;
        }
}

function startTimer() {
	sec = 599;
	countdown = setInterval(currentTime, 1000);
	toggle = false;
	startReset.innerHTML = 'Reset';
    console.log(countPeriod)
    if(countPeriod == 0){
        homeScr.textContent = 0;
        guestScr.textContent = 0;
        foulScrHome.textContent = 0;
        foulScrGuest.textContent = 0;
        countHome = 0;
        countGuest = 0;
        countHomeFoul = 0;
        countGuestFoul = 0;
        teams.innerHTML = homeInpt.value.toUpperCase()+" / "+guestInpt.value.toUpperCase();
        homeInpt.value = ""
        guestInpt.value = ""
    }
    
}

function resetTimer(){
	clearInterval(countdown);
	toggle = true;
	startReset.innerHTML = 'Start';
	timeScr.innerHTML = "10:00";
    homeScr.textContent = 0;
    guestScr.textContent = 0;
    foulScrHome.textContent = 0;
    foulScrGuest.textContent = 0;
    periodScr.textContent = 0;
    countHome = 0;
    countGuest = 0;
    countHomeFoul = 0;
    countGuestFoul = 0; 
    countPeriod = 0;
    teams.innerHTML =" / ";
    homeInpt.value = ""
    guestInpt.value = ""
}
function currentTime() {
    const minutes = Math.floor(sec/60);
    let seconds = sec % 60;
	switch(true){
		case (sec < 10 && sec > 0):
			seconds = seconds < 10 ? '0' + seconds : seconds;
            timeScr.innerHTML = minutes + ":" + seconds;
			break;
		case (sec === 0):
			seconds = seconds < 10 ? '0' + seconds : seconds;
            timeScr.innerHTML = minutes + ":" + seconds;
			clearInterval(countdown);
			break;
		default:
			seconds = seconds < 10 ? '0' + seconds : seconds;
            timeScr.innerHTML = minutes + ":" + seconds;
			break;
	}
	sec--;
}


function timer(){
	switch(toggle){
		case true:
			startTimer();
			break;
		case false:
			resetTimer();
			break;
	}
};

