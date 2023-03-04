function orientationChange() {
    if (window.innerWidth / window.innerHeight <= 1.3) {
        document.getElementById("hide-page").style.display = "flex";
        document.getElementById('logo').style.marginTop = '0';
    } else if (window.innerWidth / window.innerHeight >= 1.8) {
        document.getElementById("hide-page").style.display = "none";
        document.getElementById('logo').style.marginTop = '0';
        document.getElementById('secondScreen').style.paddingTop = '5vw';
        document.getElementsByClassName('horizontal').style.paddingTop = '4vw';
    } else if (window.innerWidth / window.innerHeight > 1.5 && window.innerWidth / window.innerHeight < 1.8) {
        document.getElementById("hide-page").style.display = "none";
        document.getElementById('logo').style.marginTop = '8vw';
    } else if (window.innerWidth / window.innerHeight > 1.4 && window.innerWidth / window.innerHeight <= 1.5) {
        document.getElementById("hide-page").style.display = "none";
        document.getElementById('logo').style.marginTop = '15vw';
        document.getElementById('text').style.fontSize = '5vw';
    }
    else if (window.innerWidth / window.innerHeight > 1.3 && window.innerWidth / window.innerHeight <= 1.4) {
        document.getElementById("hide-page").style.display = "none";
        document.getElementById('logo').style.marginTop = '20vw';
        document.getElementById('text').style.fontSize = '5vw';
        document.getElementById('secondScreen').style.paddingTop = '5vw';
        document.getElementsByClassName('horizontal').style.paddingTop = '4vw';
    }
}

setInterval(orientationChange);