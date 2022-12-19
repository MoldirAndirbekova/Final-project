let data = [
    {
        name: 'A LIGHTER TROPICAL PUNCH',
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos_1600x.png',
        text: '1.5 oz. of Tequila 4 oz. of AVEC Spiced Mango and Passionfruit (or, half a can) Orange Half MoonFill a highball glass with ice. Add tequila. Top with AVEC. Garnish with an orange half moon.Note: for best results, chill your AVEC before using.',
        logo: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/files/signature_mango.png'
    },
    {
        name: 'A CLEANER MULE (WITH ALL THE KICK)',
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-13_1200x.png',
        text: '1.5 oz. of something 4 oz. of AVEC Ginger (or, half a can) Angostura Bitters, optional Lime Wedge Fill a highball glass with ice. Add something. Add 3 dashes of angostura bitters. Top off with AVEC. Gently stir. Add a squeeze of lime and garnish.Note: for best results, chill your AVEC before using.', 
        logo: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/files/sigtag-ginger.png'
    },
    {
        name: 'A LIGHTER SPICY MARG',
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos_1600x.png',
        text: '1.5 oz. of Tequila 4 oz. of AVEC Spiced Mango and Passionfruit (or, half a can) Orange Half MoonFill a highball glass with ice. Add tequila. Top with AVEC. Garnish with an orange half moon.Note: for best results, chill your AVEC before using.',
        logo: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/files/sigtag-jalapeno.png'
    },
    {
        name: 'AN ACTUALLY GOOD ___ & SODA',
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-11_1200x.png',
        text: '4 oz. of AVEC Yuzu & Lime (or, half a can) 3 drops Absinthe, optional Lime Wedge Fill a highball glass with ice. Add something. Top with AVEC. Make it fancy by adding 3 drops of absinthe, if you wish! Add a squeeze of lime. Optional Stir. Garnish with a lime wedge. Note: for best results, chill your AVEC before using',
        logo: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/files/sigtag-yuzu.png'
    },
    {
        name: 'A HIBISCUS JULEP',
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-06_1200x.png',
        text: '4 oz. of AVEC Hibiscus & Pomegranate  (or, half a can) Sprig of Mint Fill a highball glass with ice. Add gin, top with AVEC. Stir with sprig of mint.',
        logo: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/files/sigtag-hibiscus.png'
    },
    {
        name: 'A PALOMA WITHOUT ALL THE SUGAR',
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-14_1200x.png',
        text: ' 4 oz. of AVEC Grapefruit & Pomelo  (or, half a can) Almond Extract Lime Wedge Rimming Salt, optional Rim glass with salt. Add ice, add tequila. Add in 2-3 drops of almond extract, to taste. Top off with AVEC. Gently stir. Add a squeeze of lime. Garnish. Note: for best results, chill your AVEC before using.',
        logo: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/files/sigtag-grapefruit.png'
    }
];

for (let i = 0; i < data.length; i++) {
    let el = `<div class="card"> <img class="logo" src="${data[i].logo}"> <img class="img" src="${data[i].img}"> <div class="text">${data[i].name}</div></div>`
    document.getElementById('container').innerHTML += el;
}

let data2 = [
    {
        name: 'AVEC MEXICAN MULE',
        text: `4 oz. of AVEC Ginger
        Lime Slice
        Pour tequila and AVEC over ice and garnish with a lime slice.`,
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-08_1600x.png'
    },
    {
        name: 'WHISKEY GINGER',
        text: `4 oz. AVEC Ginger
        3 dashes of Angostura bitters, optional
        Lime Wedge
        Add ice to a glass. Add Bourbon or Rum and AVEC. Add bitters. Stir and garnish with a lime wedge.`,
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-04_1600x.png'
    },
    {
        name: 'MOMOSA',
        text: `2 oz. of AVEC Grapefruit & Pomelo (or, to taste)
        Pour chilled prosecco into a coupe or champagne glass. Top with cold AVEC.
        Note: for best results, chill your AVEC before using. `,
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-02_1600x.png'
    },
    {
        name: 'HIBISCUS AVEC-VERNA',
        text: `5 oz. of AVEC Hibiscus & Pomegranate
        Orange Half-Moon
        In a wine glass with ice, pour Averna and sparkling wine. Top with AVEC Hibiscus and Pomegranate. Garnish with an orange half-moon.
        Note: for best results, chill your AVEC before using.`,
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-01_1600x.png'
    },
    {
        name: 'MODERN CRAN',
        text: `4 oz. of AVEC Hibiscus & Pomegranate (or, half a can)
        Lime Wedge
        Fill a highball glass with ice. Add something. Top with AVEC. Add a squeeze of lime. Stir. Garnish with a lime wedge.
        Note: for best results, chill your AVEC before using. `,
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-12_1600x.png'
    },
    {
        name: 'AVEC COSMO',
        text: `4 oz. of AVEC Hibiscus & Pomegranate
        1 oz. of Cointreau
        Lemon Peel
        Add something, AVEC, and Cointreau in a Collins glass over rocks. Stir and top with lemon peel.`,
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-09_1600x.png'
    },
    {
        name: 'SPICY MIMOSA',
        text: `2 oz. of AVEC Jalapeño & Blood Orange (or, to taste)
        Jalapeño, optional
        Pour chilled prosecco into a glass. Top with cold AVEC Jalapeño & Blood Orange to your preferred level of spice. Garnish with a jalapeño slice.
        Note: for best results, chill your AVEC before using. `,
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-09_1600x.png'
    }
];

for (let i = 0; i < data2.length; i++) {
    let el = `<div class="card"> <img class="img" src="${data2[i].img}"> <div class="text">${data2[i].name}</div></div>`
    document.getElementById('container').innerHTML += el;
}