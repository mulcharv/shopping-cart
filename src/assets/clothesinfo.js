
const clothesInfo = () => {
    let clothesarr = [
        {'jerseys': [
            {'anunobyJersey':{'price': 168.00, 'title': "OG Anunoby OVO 2020 Reversible Practice Jersey"}},
            {'barnesJersey':{'price': 319.99, 'title': "Scottie Barnes 2022 Authentic Icon Jersey"}},
            {'gtjJersey':{'price': 168.00, 'title': 'Gary Trent Jr OVO 2020 Reversible Practice Jersey'}},
            {'ovoJersey':{'price': 300.00, 'title': "OVO Mitchell & Ness Raptors Purple Jersey"}},
            {'siakamJersey':{'price': 319.99, 'title': "Pascal Siakam 2021-22 Authentic Icon Jersey"}},
            {'vanvleetJersey':{'price': 319.99, 'title': "Fred Vanvleet 2022 Authentic Icon Jersey"}}
            ]
        }, 
        {'shirts': [
            {'graduationShirt':{'price': 47.99, 'title': "Mitchell & Ness Graduation Tee"}},
            {'ovoShirt':{'price': 75.00, 'title': "OVO Mitchell & Ness Raptors T-Shirt"}},
            {'pinstripeShirt':{'price': 68.99, 'title': "New Era X Alpha Industries Pinstripe Tee"}},
            {'practiceShirt':{'price': 44.99, 'title': "Practice Graphic Tee"}},
            {'purpleShirt':{'price': 34.99, 'title': "2022 Essential Core Logo Tee"}},
            {'wethenorthShirt':{'price': 59.99, 'title': "Mitchell & Ness We The North Caribbean Tee"}}
            ]
        }, 
        {'longsleeve': [
            {'luckycatLongSleeve':{'price': 104.99, 'title': "Mitchell & Ness Lunar CNY Lucky Cat Crew Neck"}},
            {'neweraLongSleeve':{'price': 139.99, 'title': "New Era X Alpha Industries 1/4 Zip Hoodie"}},
            {'ovoLongSleeve':{'price': 158.00, 'title': "OVO X Raptors Pre-Game Hoodie"}},
            {'satinjacketLongSleeve':{'price': 174.88, 'title': "Mitchell & Ness HWC Heavyweight Satin Jacket"}},
            {'statementLongSleeve':{'price': 59.99, 'title': "Authentic Statement Courtside Max90 Wordmark Long Sleeve"}},
            {'varsityLongSleeve':{'price': 499.99, 'title': "Raptors Mitchell & Ness Varsity Jacket"}}
            ]
        }, 
        {'shorts': [
            {'classicShorts':{'price': 129.99, 'title': "Mitchell & Ness Swingman 1999-00 HWC Shorts"}},
            {'courtsideShorts':{'price': 79.99, 'title': "Raptors Nike Courtside Fleece Shorts"}},
            {'iconShorts':{'price': 79.99, 'title': "Raptors Nike Swingman 2020 Icon Shorts"}},
            {'ovoShorts':{'price': 240.00, 'title': "OVO Mitchell & Ness Raptors Shorts"}},
            {'statementShorts':{'price': 99.99, 'title': "Raptors Nike Swingman 2020 Jordan Statement Shorts"}},
            {'teamwrapShorts':{'price': 159.99, 'title': "Raptors Mitchell & Ness Swingman Teamwrap Shrots"}}
            ]
        }, 
        {'hats': [
            {'awakeHat':{'price': 68.9, 'title': "Raptors Awake White 9FIFTY Snapback Cap"}},
            {'classicHat':{'price': 47.99, 'title': "Raptors HWC Fitted Hat"}},
            {'golddribbleHat':{'price': 42.99, 'title': "Mitchell & Ness HWC Gold Dribble Cuffed Pom Toque"}},
            {'graduationHat':{'price': 44.99, 'title': "Raptors Mitchell & Ness Graduation Snapback"}},
            {'greyHat':{'price': 42.99, 'title': "Raptors HWC Team Heather Snapback"}},
            {'wtnHat':{'price': 47.99, 'title': "Raptors 5950 We The North Fitted Hat"}}
        ]
    }
    ];

    for (const catg of clothesarr) {
        let clothecatg = Object.keys(catg)[0];
        let catglist = Object.values(catg)[0];

        for (const item of catglist) {
            let nameitem = Object.keys(item)[0]
            item[nameitem]['images'] = [];
            item[nameitem]['images'].push(`${clothecatg}/${nameitem}1.jpeg`);
            item[nameitem]['images'].push(`${clothecatg}/${nameitem}2.jpeg`);
        }
    }

    return clothesarr;
    
}

export default clothesInfo;