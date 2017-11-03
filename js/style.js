
var trigger = false;
var body = document.querySelector("body")
function change(){
    console.log('func work')
    trigger = !trigger;
    if(trigger === true){
        body.className =("color");
    console.log(trigger)
    }
    if(trigger === false){
        body.className = ("colorB");
        console.log(false)
    }   
}