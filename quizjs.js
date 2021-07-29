const st = document.getElementById("start-btn")
const que = document.getElementsByClassName('ques')[0]
const nex = document.getElementsByClassName('next')[0]
var i = 0
let s = 0;
st.addEventListener("click", startgame)
function startgame(){
    st.classList.add('hide')
    que.classList.remove('hide')
    nex.classList.remove('hide')
    i=0
}
nex.addEventListener('click',quechange)

function quechange(){
    if(i>questions.length-1){
        que.classList.add('hide')
        nex.classList.add('hide')
        document.getElementsByClassName("result")[0].classList.remove('hide')
        document.getElementById('finalscore').innerHTML = s;
    }
    else{
        document.getElementById('question').innerHTML = questions[i];
        setanswer(i);
    }
    i++;
}
let track = 0;
const first = document.getElementById('1')
const sec = document.getElementById('2')
const thir = document.getElementById('3')
const fourth = document.getElementById('4')
function setanswer(j){
    first.classList.remove('correct')
    sec.classList.remove('correct')
    thir.classList.remove('correct')
    fourth.classList.remove('correct')
    first.classList.remove('wrong')
    sec.classList.remove('wrong')
    thir.classList.remove('wrong')
    fourth.classList.remove('wrong')
    if(j==0){
        first.innerText = '2002'
        sec.innerText = '2007'
        thir.innerText = '2008'
        fourth.innerText = '2012'
        track = 1;
        
    }
    if(j==1){
        first.innerText = 'Thor'
        sec.innerText = 'Captain'
        thir.innerText = 'Rocket'
        fourth.innerText = 'Spiderman'
        track = 2;
        
    }
    if(j==2){
        first.innerText = '4'
        sec.innerText = '6'
        thir.innerText = '10'
        fourth.innerText = '5'
        track = 3;
        
    }
    if(j==3){
        first.innerText = 'Tony Stark'
        sec.innerText = 'Steve Rogers'
        thir.innerText = 'Peter Parker'
        fourth.innerText = 'Mary Poppins'
        track = 4;
    }

}
function firstclick(){
    if(track==2){
        first.classList.add('correct')
        s++
        document.getElementById('scr').innerHTML = s;

    }
    else{
        first.classList.add('wrong')
    }
}
function secclick(){
    if(track==4 || track==0 || track==3){
        sec.classList.add('correct')
        s++
        document.getElementById('scr').innerHTML = s;
        
    }
    else{
        sec.classList.add('wrong')
    }
}
function thirclick(){
    if(track==1){
        thir.classList.add('correct')
        s++
        document.getElementById('scr').innerHTML = s;
        
    }
    else{
        thir.classList.add('wrong')
    }
}
function fourthclick(){
    fourth.classList.add('wrong')
}
document.getElementById("restart").addEventListener('click',restart)
function restart(){
    document.getElementsByClassName("result")[0].classList.add('hide')
    st.classList.remove('hide')
}

let questions= ["When was the first Marvel movie released?", "Who killed Thanos?", "How many infinity stones are there?","Captain America's real name is?"]
