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

/**
* Noise
*/
const noise = () => {
    let canvas, ctx;
    let wWidth, wHeight;
    let noiseData = [];
    let frame = 0;
    let loopTimeout;

    // Create Noise
    const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.5) {
                buffer32[i] = 0xff000000;
            }
        }

        noiseData.push(idata);
    };
    // Play Noise
    const paintNoise = () => {
        if (frame === 9) {
            frame = 0;
        } else {
            frame++;
        }

        ctx.putImageData(noiseData[frame], 0, 0);
    };
    // Loop
    const loop = () => {
        paintNoise(frame);

        loopTimeout = window.setTimeout(() => {
            window.requestAnimationFrame(loop);
        }, (1000 / 25));
    };

    // Setup
    const setup = () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;

        canvas.width = wWidth;
        canvas.height = wHeight;

        for (let i = 0; i < 10; i++) {
            createNoise();
        }

        loop();
    };

    // Reset
    let resizeThrottle;
    const reset = () => {
        window.addEventListener('resize', () => {
            window.clearTimeout(resizeThrottle);

            resizeThrottle = window.setTimeout(() => {
                window.clearTimeout(loopTimeout);
                setup();
            }, 200);
        }, false);
    };

    // Init
    const init = (() => {
        canvas = document.getElementById('noise');
        ctx = canvas.getContext('2d');

        setup();
    })();
};
noise();
