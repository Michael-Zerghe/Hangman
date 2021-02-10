(() => {
//recuperer lettre utilisateur button
//comparer lettre au mot (boucle)
//condition positive/negative
//reset
let word = "fuck";
let chances = 10;
let letter = document.querySelectorAll("button");


letter.forEach(p =>{
    p.addEventListener("click",function(){
        if(word.match(p.innerHTML)){
            console.log("oui");
        }
        else{
            console.log("non");
        }
        console.log(chances);
        chances--;
        
    })

})


})();