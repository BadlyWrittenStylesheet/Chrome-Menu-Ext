const navLeft = document.getElementById("nav-left");
const leftNavUl = navLeft.querySelector("ul");

const navRight = document.getElementById("nav-right");
const rightNavUl = navRight.querySelector("ul");

const navBottom = document.getElementById("nav-bottom");
const bottomNavUl = navBottom.querySelector("ul");

const navTop = document.getElementById("nav-top");
const topNavUl = navTop.querySelector("ul");


fetch('db.json').then(Response => Response.json()).then(data => {
    console.log(data.navLeft)
    console.log(data.navRight)
    for (let i = 0; i < data.navLeft.length; i++) {
        let href = data.navLeft[i].url;
        let name = data.navLeft[i].name;
        console.log(href, name)
        leftNavUl.innerHTML += `<li><a href='${href}'>${name}</a></li>`; // Close the li element correctly
    }
    for (let i = 0; i < data.navRight.length; i++) {
        let href = data.navRight[i].url;
        let name = data.navRight[i].name;
        console.log(href, name)
        rightNavUl.innerHTML += `<li><a href='${href}'>${name}</a></li>`; // Close the li element correctly
    }
    for (let i = 0; i < data.navBottom.length; i++) {
        let href = data.navBottom[i].url;
        let name = data.navBottom[i].name;
        console.log(href, name)
        bottomNavUl.innerHTML += `<li><a href='${href}'>${name}</a></li>`; // Close the li element correctly
    }
    for (let i = 0; i < data.navTop.length; i++) {
        let href = data.navTop[i].url;
        let name = data.navTop[i].name;
        console.log(href, name)
        topNavUl.innerHTML += `<li><a href='${href}'>${name}</a></li>`; // Close the li element correctly
    }
})


console.log(navLeft);
console.log(leftNavUl);
console.log(navRight);
console.log(rightNavUl);
