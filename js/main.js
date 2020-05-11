/*----- constants -----*/
kickassWomen = [
    {
        name: "malala",
        img: 'images/malala.png'
    },
    {
        name: "kathrine",
        img: 'images/'
    }
]

/*----- app's state (variables) -----*/
let tokens, slotArray, results

/*----- cached element references -----*/



/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', spin);



/*----- functions -----*/

function spin() {
    var sOne = kickassWomen[Math.floor(Math.random() * kickassWomen.length)];
    var sTwo = kickassWomen[Math.floor(Math.random() * kickassWomen.length)];
    var sThree = kickassWomen[Math.floor(Math.random() * kickassWomen.length)];
    console.log(sOne);
    console.log(sTwo);
    console.log(sThree);
}


