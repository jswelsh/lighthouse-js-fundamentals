let x = 100;

while (x <= 200) {
  /*first if pulls out a multiple of 3 and for,
    pipes into just a multiple of 4
    finally just a multiple of 3 */  
  if ((x % 3 === 0) && (x % 4 === 0)){
        console.log("LoopyLighthouse");
    }else if (x % 4 === 0){
        console.log("Lighthouse");
    }else if (x % 3 === 0){
        console.log("Loopy");
    }else {
        console.log(x); 
    }
    x ++
}

