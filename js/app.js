window.addEventListener('load', function() {
    console.log('ready to rock');

    let checkParam = new RegExp('^[1-8][1-8][1-8][1-8]$');

    let checkBtn = document.querySelector('#check');
    let guess = document.querySelector('#guess');
    checkBtn.addEventListener('click', function() {

        if(checkParam.test(guess.value)) {
            let array = [];
            let currentGuess = guess.value;
            
            for(let i = 0; i < currentGuess.length; i++) {
                let nums=parseInt(currentGuess[i]); 
                array.push(nums);
            }
            console.log(array);
            //This calls POST function
            sendGuess(currentGuess);
        } else {
            console.log('not working');
        }
    });
});



//TODO: convert this to AJAX on backbone
function sendGuess(guess) {
    let request = new XMLHttpRequest();
    request.open('POST', 'URL');

    let body = JSON.stringify({
       guess: guess,
    });

    request.send(body);
    console.log('I made it');
}