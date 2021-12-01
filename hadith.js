const hadith = {


    1: {
        "title": " لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        "content": "Allah does not burden a soul beyond that it can bear (2:286)",
        "category": "patience",
    },

    2: {
        "title": " وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ",
        "content": "Whoever puts his trust in Allah; He will be enough for Him (65:3)",
        "category": "cleanliness",
    },

    3: {
        "title": "لَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ",
        "content": "Do not lose hope, nor be sad. You will surely be victorious if you are true believers (3:139)",
        "category": "patience",
    },

    4: {
        "title": " مَاۤ اَصَابَ مِنۡ مُّصِيۡبَةٍ اِلَّا بِاِذۡنِ اللّٰهِ ؕ وَمَنۡ يُّؤۡمِنۡۢ بِاللّٰهِ يَهۡدِ قَلۡبَهٗ ؕ وَاللّٰهُ بِكُلِّ شَىۡءٍ عَلِيۡمٌ",
        "content": "No misfortune ever befalls except by permission of Allah. And whoever has faith in Allah - He will guide his heart. And Allah is Knowing of all things (64:11)",
        "category": "patience",
    },

    5: {
        "title": " يَا أَيُّهَا الَّذِينَ آمَنُواْ اسْتَعِينُواْ بِالصَّبْرِ وَالصَّلاَةِ إِنَّ اللّهَ مَعَ الصَّابِرِينَ",
        "content": "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient (2:153)",
        "category": "cleanliness",
    },

    6: {
        "title": " يَّهۡدِىۡ بِهِ اللّٰهُ مَنِ اتَّبَعَ رِضۡوَانَهٗ سُبُلَ السَّلٰمِ وَيُخۡرِجُهُمۡ مِّنَ الظُّلُمٰتِ اِلَى النُّوۡرِ بِاِذۡنِهٖ وَيَهۡدِيۡهِمۡ اِلٰى صِرَاطٍ مُّسۡتَقِيۡمٍ",
        "content": "Through which Allah shows to all who seek to please Him the paths leading to safety. He brings them out, by His leave, from darkness to light and directs them on to the straight way (5:16)",
        "category": "patience",
    },

    7: {
        "title": "وَاٰتٰٮكُمۡ مِّنۡ كُلِّ مَا سَاَلۡـتُمُوۡهُ  ؕ وَاِنۡ تَعُدُّوۡا نِعۡمَتَ اللّٰهِ لَا تُحۡصُوۡهَا ؕ اِنَّ الۡاِنۡسَانَ لَـظَلُوۡمٌ كَفَّارٌ",
        "content": "And Who gave you all that you asked Him for. Were you to count the favours of Allah you shall never be able to encompass them. Verily man is highly unjust, exceedingly ungrateful (14:34)",
        "category": "",
    },

    8: {
        "title": "فَاِنَّ مَعَ الۡعُسۡرِ يُسۡرًا اِنَّ مَعَ الۡعُسۡرِ يُسۡرًا",
        "content": "Indeed, there is ease with hardship (94:5) Most certainly, there is ease with hardship (94:6)",
        "category": "",
    },

    9: {
        "title": "قُلۡ يٰعِبَادِىَ الَّذِيۡنَ اَسۡرَفُوۡا عَلٰٓى اَنۡفُسِهِمۡ لَا تَقۡنَطُوۡا مِنۡ رَّحۡمَةِ اللّٰهِ  ؕ اِنَّ اللّٰهَ يَغۡفِرُ الذُّنُوۡبَ جَمِيۡعًا  ؕ اِنَّهٗ هُوَ الۡغَفُوۡرُ الرَّحِيۡم",
        "content": "Tell them, (O Prophet): “My servants who have committed excesses against themselves, do not despair of Allah's Mercy. Surely Allah forgives all sins. He is Most Forgiving, Most Merciful (39:53)",
        "category": "",
    },
       
    10: {
        "title": "اِنَّ هٰذَا كَانَ لَـكُمۡ جَزَآءً وَّكَانَ سَعۡيُكُمۡ مَّشۡكُوۡرًا",
        "content": "Behold, this is your recompense and your endeavour has been appreciated",
        "category": "",
    }

    

}

let counter = 1



const app = Vue.createApp   ({

    data() {
        return {
            "title":" لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
            "content": "Allah does not burden a soul beyond that it can bear (2:286)",
            "category": "patience",   
        }
    },

    

    methods: {
        async getHadith() {
            
            // Fetch from data in hadith const
            this.title = hadith[counter].title
            this.content = hadith[counter].content
            this.category = hadith[counter].category

            if (counter == 6) {
                counter = counter - 5
                console.log(counter)
            } else {
                counter = counter + 1
                console.log(counter)
            }
        },
    }
})

app.mount('#app')