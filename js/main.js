$(document).ready(function(){
 //array to store input from user
 var result = [];
 var d;
 var e;
 var f;

 //clear input filed
 $(".clear").on("click",function(){
    result.splice(0);
    $("#input").empty();
 });

 //input all keypad to input area
   $("#1").on("click",function(){
     result.push(1);
     $("#input").html(result);
   });

   $("#2").on("click",function(){
     result.push(2);
     $("#input").html(result);
   });

   $("#3").on("click",function(){
     result.push(3);
     $("#input").html(result);
   });

   $("#4").on("click",function(){
     result.push(4);
     $("#input").html(result);
   });

    $("#5").on("click",function(){
      result.push(5);
      $("#input").html(result);
    });

   $("#6").on("click",function(){
     result.push(6);
     $("#input").html(result);
   });

   $("#7").on("click",function(){
     result.push(7);
     $("#input").html(result);
   });

   $("#8").on("click",function(){
     result.push(8);
     $("#input").html(result);
   });

   $("#9").on("click",function(){
     result.push(9);
     $("#input").html(result);
   });

   $("#0").on("click",function(){
     result.push(0);
     $("#input").html(result);
   });

   $("#decimal").on("click",function(){
     result.push('.');
     $("#input").html(result);
   });

   //calculation function
   function calculation(){
     result.forEach(function(elem,index,array){
       if(isNaN(parseInt(elem)) && elem != "." && index !=  result.length - 1){
         d = result.splice(0,index).join("");
         e = result.splice(1,result.length-2).join("");
         if(elem == "+"){
           f = parseFloat(d) + parseFloat(e);
         }

         if(elem == "-"){
           f = parseFloat(d) - parseFloat(e);
         }

         if(elem == "*"){
           f = parseFloat(d) * parseFloat(e);
         }

         if(elem = "/"){
           f = parseFloat(d) / parseFloat(e);
         }

         result[0] = f;
         $("#result").html(f);
       }
     });

   }

   //check if anything exists in result and f
   function empty(){
     if(parseFloat(f) != 0 && result.length == 0){
       result[0] =f;
     }
   }

   //click on cal sign and process cal
   $("#plus").on("click",function(){
      empty();
      result.push('+');
      $("#input").html(result);
      calculation();
   });

   $("#minus").on("click",function(){
     empty();
     result.push('-');
     $("#input").html(result);
     calculation();
   });

   $("#divide").on("click",function(){
     empty();
     result.push('/');
     $("#input").html(result);
     calculation();
   });

   $("#x").on("click",function(){
     empty();
     result.push('*');
     $("#input").html(result);
     calculation();
   });

  //do calculation with equal sign
  $("#equal").on("click",function(){
     result.forEach(function(elem,index,array){
       if(isNaN(parseInt(elem)) && elem != '.'){
         d = result.splice(0,index).join("");
         e = result.splice(1).join("");

         if(elem == "+"){
           f = parseFloat(d) + parseFloat(e);
         }

         if(elem == "-"){
           f = parseFloat(d) - parseFloat(e);
         }

         if(elem == "*"){
           f = parseFloat(d) * parseFloat(e);
         }

         if(elem == "/"){
           f = parseFloat(d) / parseFloat(e);
         }

         $("#input").html(f);
         result.splice(0);
       }
     });


  });
});
