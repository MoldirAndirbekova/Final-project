import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
   
}));


let topSales = [
    {
        name: 'A LIGHTER TROPICAL PUNCH',
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos_1600x.png',
        text: '1.5 oz. of something 4 oz. of AVEC Spiced Mango and Passionfruit (or, half a can) Orange Half MoonFill a highball glass with ice. Add something. Top with AVEC. Garnish with an orange half moon.Note: for best results, chill your AVEC before using.',
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
        text: '1.5 oz. of something 4 oz. of AVEC Spiced Mango and Passionfruit (or, half a can) Orange Half MoonFill a highball glass with ice. Add something. Top with AVEC. Garnish with an orange half moon.Note: for best results, chill your AVEC before using.',
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
        text: ' 4 oz. of AVEC Grapefruit & Pomelo  (or, half a can) Almond Extract Lime Wedge Rimming Salt, optional Rim glass with salt. Add ice, add something. Add in 2-3 drops of almond extract, to taste. Top off with AVEC. Gently stir. Add a squeeze of lime. Garnish. Note: for best results, chill your AVEC before using.',
        logo: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/files/sigtag-grapefruit.png'
    }
];
let simple = [
    {
        name: 'AVEC MEXICAN MULE',
        text: `4 oz. of AVEC Ginger
        Lime Slice
        Pour something and AVEC over ice and garnish with a lime slice.`,
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
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-03_1600x.png'
    },
    {
        name: 'AVEC TOM COLLINS',
        text: `Squeeze of lemon juice (don’t be shy)
        4 oz. of AVEC Yuzu & Lime
        Maraschino Cherry 
        Stir gin & lemon juice over ice & strain. Top with AVEC. Add a maraschino cherry.`,
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-36_1600x.png'
    },
    {
        name: 'CAMPARI SPRITZ',
        text: `4 oz. of AVEC Grapefruit & Pomelo
        In a spritz glass, add ice. Pour Campari. Add prosecco. Top with AVEC. Add a slice of orange or grapefruit.
        Note: for best results, chill your AVEC before using. `,
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-07_1600x.png'
    },
    {
        name: 'YUZU MOJITO',
        text: `optional Fresh Mint Sprigs
        Muddle mint in highball glass. Add ice. Add white rum for a full-proof version. Top AVEC. Gently stir. Add a squeeze of lime.
        Note: for best results, chill your AVEC before using. `,
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-05_1600x.png'
    },
    {
        name: 'AVEC ITALIAN GREYHOUND',
        text: `4 oz. of AVEC Grapefruit & Pomelo
        Splash of Campari
        Rosemary Stir gin or something and Campari over ice, strain and top AVEC. Garnish with rosemary.`,
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-35_1600x.png'
    },
    {
        name: 'AVEC VERMOUTH MEZCAL',
        text: `.5 oz. bitters
        .5 oz. of Sweet Vermouth
        4 oz. of AVEC Jalapeño and Blood Orange
        Garnish with Lime or Orange
        Add ingredients to a highball glass over ice and stir, Garnish with a lime or orange slice. `,
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-10_1600x.png'
    },
    {
        name: 'SAINT AVEC',
        text: `4 oz. of AVEC Grapefruit & Pomelo
        Splash of Campari
        Rosemary Stir and Campari over ice. Strain and top with AVEC. Garnish with rosemary. `,
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/avecrecipephotos-21_1600x.png'
    },
    {
        name: 'GRAPEFRUIT & ROSEMARY',
        text: `1 can of AVEC Grapefruit & Pomelo
        Sprig of Rosemary
        Slice of Lemon
        Fill a highball glass with ice. Add AVEC and stir with rosemary. Garnish with a lemon slice. `,
        img: 'https://cdn.shopify.com/s/files/1/0266/2760/4565/articles/rosemary_1600x.png'
    }
];

app.get("/data", (req, res)=>{
    res.status(200).json(topSales);
});

app.get("/data2", (req, res) => {
    res.status(200).json(simple);
});


app.listen(process.env.PORT || 8080, () => {
    console.log('Server started!');
});