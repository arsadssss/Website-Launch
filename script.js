// var countDownDate = new Date("May 02, 2024 00:00:00").getTime();
var target = document.querySelector("#inpt");
document.querySelector("#btn").addEventListener("click", function(){
    var countDownDate = new Date(target.value).getTime();
    var x = setInterval(function(){
        var now = new Date().getTime();
        var distance = countDownDate - now;
    
        var days =  Math.floor(distance / (1000*60*60*24));
        var hours =  Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        var minutes =  Math.floor((distance % (1000*60*60))/(1000*60));
        var seconds =  Math.floor((distance % (1000*60))/(1000));
    
        let d1 = days < 10 ? "0" + days : days;
        let h1 = hours < 10 ? "0" + hours : hours;
        let m1 = minutes < 10 ? "0" + minutes : minutes;
        let s1 = seconds < 10 ? "0" + seconds : seconds;
    
        document.querySelector("#days").innerHTML = d1;
        document.querySelector("#hours").innerHTML = h1;
        document.querySelector("#minutes").innerHTML = m1;
        document.querySelector("#seconds").innerHTML = s1;
    
        if(distance < 0){
            clearInterval(x);
            document.querySelector("#days").innerHTML = "00";
            document.querySelector("#hours").innerHTML = "00";
            document.querySelector("#minutes").innerHTML = "00";
            document.querySelector("#seconds").innerHTML = "00";
        }
    }, 1000)
});

