(() => {
//recuperer lettre utilisateur button
//comparer lettre au mot (boucle)
//condition positive/negative
//reset
let word = "bonjour";
let hidden = word.split('');
let screen = [];
let x = 0;
let chances = 10;
let letter = document.querySelectorAll("button");
console.log(hidden);
while(x<word.length){
    screen.push('-');
    x++;
}
document.getElementById("reponse").innerHTML = screen.join('');

letter.forEach(p =>{
    p.addEventListener("click",function(){
        if(hidden.includes(p.innerHTML)){
            document.getElementById("reponse").innerHTML = p.innerHTML;
        }
        else if(chances>0){
            chances--;
            document.getElementById("essais").innerHTML = "Numbers of tries left : " + chances;
        }
        else if (chances ===0){
            document.getElementById("essais").innerHTML = "You lose";
            letter.forEach(k =>{
                k.disabled = true;
            })
        } 
        p.disabled = true;

    })
})

})();