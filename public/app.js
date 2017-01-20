(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.addEventListener('load', function() {
    console.log('ready to rock');

    let checkParam = new RegExp('^[1-8][1-8][1-8][1-8]$');

    let checkBtn = document.querySelector('#check');
    let guess = document.querySelector('#guess');
    checkBtn.addEventListener('click', function() {

       

        if(checkParam.test(guess.value)) {
            //console.log('this is guess value' + guess.value);

            let array = [];

            let currentGuess = guess.value;
            //TODO: convert to numbers 
            for(let i = 0; i < currentGuess.length; i++) {
                array.push(parseInt(currentGuess[i])); 
                //console.log(nums);
                //(nums);
                

                // console.log('this is guess num from loop' + num);
                // array.push(num);

            }


            console.log(array);
            //console.log('POST HERE');
             
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
},{}]},{},[1]);
