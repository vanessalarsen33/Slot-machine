/*----- constants -----*/
kickassWomen = [
    {
        name: "malala",
        img: 'images/malala.png',
        fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
    {
        name: "kathrine",
        img: 'images/kathrine.png',
        fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
    {
        name: "rosa",
        img: 'images/rosa.png'
        fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
    {
        name: "maya",
        img: 'images/maya.png',
        fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    }
];
/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', play);


/*----- functions -----*/


function play() {
    new Audio('sound/click.mp3').play()
    let sOne = kickassWomen[Math.floor(Math.random() * kickassWomen.length)];
    let sTwo = kickassWomen[Math.floor(Math.random() * kickassWomen.length)];
    let sThree = kickassWomen[Math.floor(Math.random() * kickassWomen.length)];
    console.log(sOne, sTwo, sThree, "first");
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
        }, 700)
    }, );
    setTimeout(function(){
            let slot2Idx = 1;
            const playSlot2 = setInterval(function(){
                const x =document.getElementById('slot2');
            x.style.backgroundImage = `url("${kickassWomen[slot2Idx].img}")`
            if(kickassWomen.length -1 === slot2Idx){
                x.style.backgroundImage = `url("${sTwo.img}")`
                clearInterval(playSlot2)
            } 
            slot2Idx++
        }, 700)
    }, 100)
    setTimeout(function(){
        let slot3Idx = 2;
        const playSlot3 = setInterval(function(){
            const x =document.getElementById('slot3');
        x.style.backgroundImage = `url("${kickassWomen[slot3Idx].img}")`
        if(kickassWomen.length -1 === slot3Idx){
            x.style.backgroundImage = `url("${sThree.img}")`
            clearInterval(playSlot3)
        } 
        slot3Idx++
    }, 700)
}, 200)

results(sOne, sTwo, sThree);
}

function results(a, b, c){
    console.log(a.name, b.name, c.name);
    if (a.name === b.name && b.name === c.name) {
        console.log(1);
        return true;
    } else {
        console.log(2);
        return false;
    }; 
}

function showResults(){
    var result = $(results);
    
};

