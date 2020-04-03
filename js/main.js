let n = Math.floor(Math.random()*1000)

function myFunction(a){
   if(a >= 100 && a <= 200){
      console.log("Liczba znajduje się w przedziale")
   }
   else{
      console.log("Liczba nie znajduje się w przedziale")
   }
}

myFunction(n);