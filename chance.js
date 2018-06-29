// var counts = [0,0,0,0,0,0,0,0,0,0,0,0,0];
function getRandomInt() {
    return Math.floor(Math.random() * 8);
}
function magic(){
    var answer = getRandomInt()
    var statement = '';
    if (answer === 0 ) {
        statement = "It is certain"
        
    }
    if (answer === 1 ) {
        statement = "Without a doubt"
        
    }
    if (answer === 2) {
        statement = "Signs point to yes"
        
    }
    if (answer === 3) {
        statement = "Very doubtful"
        
    }
    if (answer === 4) { 
        statement = "Ask again later"
        
    }
    if (answer === 5){
        statement = "Yes"
        
    }
    if (answer === 6) {
        statement = "Cannot predict now"
        
    }
    if (answer === 7) {
        statement = "My reply is no"
        
    }
    if (answer === 8) {
        statement ="Outlook not so good"
        
    }
    console.log("statement " + statement)
    document.getElementById("bob").innerHTML = statement;
    
}

// document.getElementById("joe").addEventListener("click", magic());

