function createClapSmiley() {
    var clapSmiley = document.createElement('div');
    clapSmiley.classList.add('clap-smiley');
    clapSmiley.style.left = Math.random() * window.innerWidth + 'px';
    clapSmiley.style.animationDuration = Math.random() * 3 + 2 + 's'; // Randomize animation duration
    document.getElementById('raining-container').appendChild(clapSmiley);
}
function stopRainingEffect() {
    var rainingContainer = document.getElementById('raining-container');
    while (rainingContainer.firstChild) {
        rainingContainer.removeChild(rainingContainer.firstChild);
    }
}
// Function to trigger raining animation of clapping smileys
function triggerRainingEffect() {
    for (var i = 0; i < 20; i++) { // Adjust the number of smileys as needed
        createClapSmiley();
    }
    setTimeout(stopRainingEffect, 15000); // 15s
}