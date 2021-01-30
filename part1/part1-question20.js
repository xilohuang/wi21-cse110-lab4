var intervalID = setInterval(callback2, 1000);
function callback2() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}