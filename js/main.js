/*----- constants -----*/
kickassWomen = [
    {
        name: "malala",
        img: 'images/malala.png',
        fact: "This is Malala Yousufzai. As a young girl she defied the Taliban in Pakistan and demanded that girls be allowed to receive an education. She was shot in the head by a Taliban gunman in 2012 but survived. In 2014, she became the youngest person to receive the Nobel Peace Prize."
    },
    {
        name: "kathrine",
        img: 'images/kathrine.png',
        fact: "This is Katherine Johnson. She was an American mathematician whose calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights"
    },
    {
        name: "rosa",
        img: 'images/rosa.png',
        fact: "This is Rosa Parks. She was a civil rights activist who refused to surrender her seat to a white passenger on a segregated bus in Montgomery, Alabama. Her defiance sparked the Montgomery Bus Boycott. Its success launched nationwide efforts to end racial segregation of public facilities."
    },
    // {
    //     name: "maya",
    //     img: 'images/maya.png',
    //     fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    // }
];

/*----- app's state (variables) -----*/
let isWinner;
let startTokens = 10;

/*----- cached element references -----*/
const alertEl = document.getElementById('winner');
const tokenEl = document.getElementById('tokens');


/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', play);

/*----- functions -----*/
init();

function play() {
    alertEl.innerHTML = ``;
    new Audio('sound/click.mp3').play()
    let sOne = kickassWomen[Math.floor(Math.random() * kickassWomen.length)];
    let sTwo = kickassWomen[Math.floor(Math.random() * kickassWomen.length)];
    let sThree = kickassWomen[Math.floor(Math.random() * kickassWomen.length)];


    let slot1Idx = 0;
    setTimeout(function(){
        const playSlot1 = setInterval(function(){
            const x =document.getElementById('slot1');
            x.style.backgroundImage = `url("${kickassWomen[slot1Idx].img}")`
            if(kickassWomen.length -1 === slot1Idx){
                x.style.backgroundImage = `url("${sOne.img}")`
                clearInterval(playSlot1)
            } 
            slot1Idx++
        }, 300)
    }, );


    setTimeout(function(){
            let slot2Idx = 1;
            const playSlot2 = setInterval(function(){
            const x =document.getElementById('slot2');
            x.style.backgroundImage = `url("${kickassWomen[slot2Idx].img}")`
            if(kickassWomen.length - 1 === slot2Idx){
                x.style.backgroundImage = `url("${sTwo.img}")`
                clearInterval(playSlot2)
            } 
            slot2Idx++
        }, 500)
    }, 150)


    setTimeout(function(){
            let slot3Idx = 1;
            const playSlot3 = setInterval(function(){
            const x =document.getElementById('slot3');
            x.style.backgroundImage = `url("${kickassWomen[slot3Idx].img}")`
            if(kickassWomen.length -1 === slot3Idx){
            x.style.backgroundImage = `url("${sThree.img}")`
            clearInterval(playSlot3)
            }
            slot3Idx++
        } , 100)
    }, 200)


    
setTimeout(function(){
    results(sOne, sTwo, sThree);
}, 1500)
} 

function results(a, b, c){
    if (a.name === b.name && b.name === c.name) {
        isWinner = true;
        alertEl.innerHTML = `<h3>YOU GOT A MATCH!</h3><h4>${a.fact}</h4>`;
        alertEl.style.display = 'block';
    } else {
        isWinner = false;
    }
updateTkn();
};

function updateTkn(){
    if (isWinner) {
        startTokens += 3;
    } else {
        startTokens -= 1;
    }
    allowPLay();
    tokenEl.innerHTML = `You Have ${startTokens} Tokens` ;
};

function allowPLay(){
    if ( startTokens === 0 ) {
        document.getElementById('button').disabled = true;
        alertEl.innerHTML = '<h3>You are out of tokens!</h3>'
        alertEl.style.display = 'block';
    } 
};

function init(){
    startTokens;
    tokenEl.innerHTML = `You Have ${startTokens} Tokens` ;
}