let menuItems = document.querySelectorAll(".menu-item"),

    title = document.getElementById("title"),
    adv = document.querySelector(".adv"),
    promp  = document.getElementById('prompt'),
    menu = document.querySelector(".menu"),
    columns = document.querySelectorAll(".column"),
    li5 = document.createElement('li'),
    text = document.createTextNode('Ваше отношение к технике apple'),
    oridginal = document.createTextNode('подлинную');

menu.replaceChild(menuItems[2], menuItems[1]);
menu.insertBefore(menuItems[1], menuItems[3]);
li5.classList.add('menu-item');
li5.innerHTML = 'Пятый пункт';
menu.appendChild(li5);

document.body.style.background = "url(../dz6/img/apple_true.jpg) center no-repeat";
let textTitle = title.innerText;
let arrTitle = textTitle.split(' ');
// title.appendChild(oridginal);
textTitle.replaceChild(arrTitle[2], oridginal);
console.log(title);



columns[1].removeChild(adv);
console.log(li5);


promp.appendChild(text);
