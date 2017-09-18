var c = 0 ;

function timerCount(){
    postMessage(c) ; 
    c++ ; 
    setTimeout("timerCount()",500);  
} 

timerCount() ; 