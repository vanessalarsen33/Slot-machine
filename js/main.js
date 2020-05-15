/*----- constants -----*/
kickassWomen = [
    {
        name: "malala",
        img: 'images/malala.png',
        fact: "This is Malala Yousufzai. As a young girl she defied the Taliban in Pakistan and demanded that girls be allowed to receive an education. She was shot in the head by a Taliban gunman in 2012 but survived. In 2014, she became the youngest person to receive the Nobel Peace Prize.",
        match: "This is Malala Yousufzai."
    },
    {
        name: "kathrine",
        img: 'images/kathrine.png',
        fact: "This is Katherine Johnson. She was an American mathematician whose calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights",
        match: "This is Katherine Johnson."
    },
    {
        name: "rosa",
        img: 'images/rosa.png',
        fact: "This is Rosa Parks. She was a civil rights activist who refused to surrender her seat to a white passenger on a segregated bus in Montgomery, Alabama. Her defiance sparked the Montgomery Bus Boycott. Its success launched nationwide efforts to end racial segregation of public facilities.",
        match: "This is Rosa Parks."
    },
    {
        name: "maya",
        img: 'images/maya.png',
        fact: "This is Maya Angelou. She was an American author, poet and civil rights activist best known for her 1969 memoir, I Know Why the Caged Bird Sings, which made literary history as the first nonfiction bestseller by an African American woman.",
        match: "This is Maya Angelou."
    },
    {
        name: "ruth",
        img: 'images/ruth.png',
        fact: "This is Ruth Bader Ginsburg. Among many things, she became the director of the Women's Rights Project at the ACLU. There, she litigated gender-equality cases, winning five of the six cases she argued before the Supreme Court. Her cases dealt with instances when not only women but also men and families were victims of discriminatory laws",
        match: "This is Ruth Bader Ginsburg"
    },
    {
        name: "yuri",
        img: 'images/yuri1.png',
        fact: "This is Yuri Kochiyama. She was a tireless political activist who dedicated her life to contributing to social change through her participation in social justice and human rights movements",
        match: "This Is Yuri Kochiyama."
    }
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
playSlots(sOne, sTwo, sThree);
};

function playSlots(sOne, sTwo, sThree) {
            let slot1Idx = 1;
            let counter1 = 0;
            const playSlot1 = setInterval(function(){
                const x = document.getElementById('slot1');
                if (slot1Idx === (kickassWomen.length)) slot1Idx = 0;
                x.style.backgroundImage = `url("${kickassWomen[slot1Idx].img}")`
                slot1Idx++
                counter1++  
                if( counter1 > 12 ){
                    x.style.backgroundImage = `url("${sOne.img}")`
                    clearInterval(playSlot1)
                }
            } , 150);

            let slot2Idx = 0;
            let counter2 = 0;
            const playSlot2 = setInterval(function(){
                const x = document.getElementById('slot2');
                if (slot2Idx === (kickassWomen.length)) slot2Idx = 0;
                x.style.backgroundImage = `url("${kickassWomen[slot2Idx].img}")`
                slot2Idx++
                counter2++  
                if( counter2 > 12 ){
                    x.style.backgroundImage = `url("${sTwo.img}")`
                    clearInterval(playSlot2)
                }
            } , 150);

            let slot3Idx = 2;
            let counter3 = 0;
            const playSlot3 = setInterval(function(){
                const x = document.getElementById('slot3');
                if (slot3Idx === (kickassWomen.length)) slot3Idx = 0;
                x.style.backgroundImage = `url("${kickassWomen[slot3Idx].img}")`
                slot3Idx++
                counter3++  
                if( counter3 > 12 ){
                    x.style.backgroundImage = `url("${sThree.img}")`
                    clearInterval(playSlot3)
                }
             } , 150)
    
    setTimeout(function(){
        results(sOne, sTwo, sThree);
    }, 2500)
};

function results(a, b, c){
    if (a.name === b.name && b.name === c.name) {
        isWinner = 2;
        alertEl.innerHTML = `<h3>JACKPOT!</h3><h4>${a.fact}</h4>`;
        alertEl.style.display = 'block';
    } else if (a.name === b.name || b.name === c.name || a.name === c.name) {
        isWinner = 1;
        alertEl.innerHTML = `<h3>YOU GOT A MATCH!</h3><h4>${a.name === b.name || a.name === c.name ? a.match : b.match} Keep playing to learn more!!</h4>`;
        alertEl.style.display = 'block';
    } else {
        isWinner = 0;
    }
updateTkn();

};


function updateTkn(){
    if (isWinner === 2) {
        startTokens += 3;
    } else if (isWinner === 1) {
        startTokens += 1;
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