/*----- constants -----*/
kickassWomen = [
    {
        name: "malala",
        img: 'images/malala.png'
    },
    {
        name: "kathrine",
        img: 'images/kathrine.png'
    },
    {
        name: "kathrine",
        img: 'images/kathrine.png'
    },
    {
        name: "maya",
        img: 'images/1.png'
    }
];
/*----- app's state (variables) -----*/
let tokens, slotArray;

/*----- cached element references -----*/
// const slotEls = document.querySelectorAll('');

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', spin);
$('#button').click(() => new Audio('sound/click.mp3').play() );


/*----- functions -----*/


function spin(array) {
    let sOne = kickassWomen[Math.floor(Math.random() * kickassWomen.length)];
    let sTwo = kickassWomen[Math.floor(Math.random() * kickassWomen.length)];
    let sThree = kickassWomen[Math.floor(Math.random() * kickassWomen.length)];
    console.log(sOne);
    console.log(sTwo);
    console.log(sThree);
    console.log("slotid",document.getElementById('slot1'));


    setTimeout(() => document.getElementById('slot1').style.backgroundImage = `url("${sOne.img}")`, 800);
    setTimeout(() => document.getElementById('slot2').style.backgroundImage = `url("${sTwo.img}")`, 1500);
    setTimeout(() => document.getElementById('slot3').style.backgroundImage = `url("${sThree.img}")`, 2000)

    
}



