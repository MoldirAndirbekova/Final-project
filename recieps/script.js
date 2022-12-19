let data = [
    {
        name: 'A LIGHTER TROPICAL PUNCH',
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos_1600x.png',
        text: '1.5 oz. of Tequila 4 oz. of AVEC Spiced Mango and Passionfruit (or, half a can) Orange Half MoonFill a highball glass with ice. Add tequila. Top with AVEC. Garnish with an orange half moon.Note: for best results, chill your AVEC before using.',
        logo: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/files/signature_mango.png'
    },
    {
        name: 'A LIGHTER TROPICAL PUNCH',
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos_1600x.png',
        text: '1.5 oz. of Tequila 4 oz. of AVEC Spiced Mango and Passionfruit (or, half a can) Orange Half MoonFill a highball glass with ice. Add tequila. Top with AVEC. Garnish with an orange half moon.Note: for best results, chill your AVEC before using.',
        logo: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/files/signature_mango.png'
    },
    {
        name: 'A LIGHTER TROPICAL PUNCH',
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos_1600x.png',
        text: '1.5 oz. of Tequila 4 oz. of AVEC Spiced Mango and Passionfruit (or, half a can) Orange Half MoonFill a highball glass with ice. Add tequila. Top with AVEC. Garnish with an orange half moon.Note: for best results, chill your AVEC before using.',
        logo: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/files/signature_mango.png'
    }
];

for (let i = 0; i < data.length; i++) {
    let el = `<div class="card"> <img class="logo" src="${data[i].logo}"> <img class="img" src="${data[i].img}"> <div class="text">${data[i].name}</div></div>`
    document.getElementById('container').innerHTML += el;
}