(() => {
//recuperer lettre utilisateur button
//comparer lettre au mot (boucle)
//condition positive/negative
//reset
let word = "art";
let hidden = word.split('');
let screen = [];
let x = 0;
let i;
let chances = 10;
let letter = document.querySelectorAll("button");
while(x<word.length){
    screen.push('-');
    x++;
}
document.getElementById("reponse").innerHTML = screen.join('');

letter.forEach(p =>{
    p.addEventListener("click",function(){
        if(hidden.includes(p.innerHTML)){
           i = hidden.indexOf(p.innerHTML);
           screen[i] = p.innerHTML;
            document.getElementById("reponse").innerHTML = screen.join('');
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
