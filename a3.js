var d = new Date() ; 

console.log(d.getDate());
console.log(d.getMonth()+1);
console.log(d.getFullYear()); 

console.log(d.getMinutes()); 
console.log(d.getSeconds()); 
console.log(d.getHours()); 

//console.log(d);

var msg = d.getDate() + "/" +(d.getMonth()+1) + "/" +d.getFullYear(); 
console.log("Today Date is : "+msg); 

var msg = d.getHours() + ":" +d.getMinutes() + ":" +d.getSeconds(); 
console.log("time is " + msg ); 




