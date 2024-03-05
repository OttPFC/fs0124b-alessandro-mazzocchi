let startTime ;

function timeInTheSite(){

    if (sessionStorage.getItem('startTime')) {
        startTime = parseInt(sessionStorage.getItem('startTime'));
    } else {
        
        startTime = new Date().getTime();
        sessionStorage.setItem('startTime', startTime);
    }

    function updateTimer() {
        //sessionStorage.removeItem('startTime');
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - startTime;

        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
        let hours = Math.floor((elapsedTime / 1000 / 60 / 60) % 24);

        document.getElementById('timer').textContent = hours + " ore " + minutes + " minuti " + seconds + " secondi";
    }

    setInterval(updateTimer, 1000);
}
timeInTheSite()