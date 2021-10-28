/**
* Get current day
*/
const today = new Date()
const getDay = today.getDay()

const day = ['It\'s finally', 'It\'s F*****g', 'It\'s F*****g', 'It\'s F*****g',  'It\'s F*****g', 'Almost weekend!', 'It\'s finally']
const day2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',  'Thursday', 'It\'s Friday', 'Saturday']

// get day & comment
const _day = day[getDay]
const _day2 = day2[getDay]

const newDay = document.querySelector('.newDay')
newDay.append(_day)
const commentDay = document.querySelector('.commentDay')
commentDay.append(_day2)
document.querySelector(".year").innerHTML = today.getFullYear();

/**
* Circle text
*/
class Circle {
    constructor(id) {
        const el = document.getElementById(id);
        const parent = el.parentElement;
        parent.removeChild(el);
        const chars = el.innerText.split("");
        chars.push(" ");
        for (let i = 0; i < chars.length; i++) {
            const span = document.createElement("span");
            span.innerText = chars[i];
            span.className = `char${i + 1}`;
            span.style.transform = `rotate(${i * 9.1}deg)`;
            parent.appendChild(span);
        }
    }
}
function init() {
    new Circle("circle-content");
}
init();
