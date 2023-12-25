let favNumber = 28;
let baseURL = "http://numbersapi.com";

// 1.
async function fact1() {
    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
}

fact1();

// 2.
const favNumbers = [25, 26, 28];
async function multiplefacts() {
    let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
    console.log(data);
}
multiplefacts();

// 3.
async function fourfacts() {
    let facts = await Promise.all(
        Array.from({ length: 4}, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
fourfacts();