
var s = document.getElementById("second");
var m = document.getElementById("minute");
var h = document.getElementById("hour");


setInterval(()=>{
   var d = new Date();
   var second = d.getSeconds();
   var minute = d.getMinutes();
   var hour = d.getHours();
   if(hour => 12){
   var ho = hour-12;
   h.style.transform = `rotate(${ho*30 + minute/2}deg)`;
   }
   else{
    h.style.transform = `rotate(${hour*30 + minute/2}deg)`;
   }
   s.style.transform= `rotate(${second*6}deg)`;
   m.style.transform = `rotate(${minute*6}deg)`;
 
},1000);
