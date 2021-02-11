(() => {
//recuperer lettre utilisateur button
//comparer lettre au mot (boucle)
//condition positive/negative
//reset
gallery = [
    "images/00.svg",
    "images/01.svg",
    "images/02.svg",
    "images/03.svg",
    "images/04.svg",
    "images/05.svg",
    "images/06.svg",
    "images/Lose.svg",
    "images/Win.svg",
]

let random = ["sangoku","vegeta","trunks","sangohan","broly","bulma","yamcha","freezer","nappa","cell","hit","jiren","babidi","karin"];

let rng = Math.floor(Math.random()*random.length);
let img = document.getElementById("photo");
let word = random[rng];
let hidden = word.split('');
let screen = [];
let x = 0;
let galInd = 1;
let chances = 7;
let letter = document.querySelectorAll("button.btnalpha");
while(x<word.length){
    screen.push('-');
    x++;
}
document.getElementById("reponse").innerHTML = screen.join('');
document.getElementById("essais").innerHTML ="NUMBER OF TRIES LEFT : "+ chances;

letter.forEach(p =>{
    p.addEventListener("click",function(){
       let i = 0;

        hidden.forEach(m =>{
            if(m === p.innerHTML){
                screen[i]=hidden[i];
                document.getElementById("reponse").innerHTML = screen.join('');
            }
        i++;

        });

        if(hidden.includes(p.innerHTML) === false){
            chances--;
            document.getElementById("essais").innerHTML ="NUMBER OF TRIES LEFT : "+ chances;
            img.src = gallery[galInd];
            galInd++;
        }

        p.disabled = true;

        if(screen.includes('-')===false){
            letter.forEach(w => w.disabled = true);
            document.getElementById("reponse").innerHTML = "YOU WIN";
            img.src = gallery[8];
        }
        if (chances === 0){
            letter.forEach(w => w.disabled = true);
            document.getElementById("reponse").innerHTML = "YOU LOSE";
        }
        
    })

    
})
document.getElementById("restart").addEventListener("click",function(){
    document.location.reload();
})

})();
