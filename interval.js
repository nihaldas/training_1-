function ShowTime(){
    var d = new Date() ;
    var t = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() ;
    console.log(t) ;
} 
setInterval(ShowTime , 500) ;

// web workers are a thread for javascript 

