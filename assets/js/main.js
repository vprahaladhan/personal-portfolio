const cols = document.querySelectorAll('.animate__bounce');

for (const col of cols) {
    col.addEventListener('click', () => {
        const card = document.getElementById('card');
        card.classList.toggle('flip')
    })
}

window.addEventListener('wheel', event => {
    const card = document.getElementById('card');
    card.classList.toggle('flip');

    const page1 = document.getElementById('page1');
    if (!page1.classList.contains('visible')) {
        page1.classList.add('visible');
    }

    const section = document.getElementById('section07');
    if (section) {
        section.classList.toggle('hide');
    }
});

// const page5 = document.getElementById('page5');
// page5.addEventListener('click', () => alert('Clicked!'));

// window.addEventListener('load', (event) => {
//     const page1 = document.getElementById('page1');
//     page1.classList.toggle('visible');
// });

// const buttons = document.querySelectorAll('.btn');

// for (const button of buttons) {
//     col.addEventListener('mouseover', () => {
//         // button.classList.toggle('ripple')
//     })
// }

// document.getElementById('back-button').addEventListener('click', () => {
//     const card = document.getElementById('card');
//     card.classList.toggle('flip')
// })

// window.addEventListener("resize", () => {
//     const col1 = document.getElementById('col-1');
//     const height = col1.clientHeight;
//     const width = col1.clientWidth;
// });