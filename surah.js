const surah = {

    1: {
        "title":"Surah Al-Asr ",
        "content": "This sura teaches that all human beings are in loss, except those who have iman (faith in Islam), do righteous deeds and remind others of the Haqq (truth, rights, reality) and remind others of Sabr (patience).[9][10]",


//         "The text of the Sura can be translated as the following:",
        
        
// "        1.|وَالْعَصْرِ‌",
        
//         "By time (it explain that God swears By time).",
        
        
//        " 2. إِنَّ الْإِنسَانَ لَفِي خُسْرٍ",‌
        
        
//         "Indeed man is in loss,",
        
        
//         // "3. إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا ,بِالصَّبْرِ"‌‌
        
        
//         "except those who have faith and do righteous deeds, and enjoin one another to [follow] the truth, and enjoin one another to patience.",
        
        
//         "What can we apply by this surah?" ,
        
        
//         "- we should not waste time by doing unuseful stuff.",
        "category": "patience",   
    },

    2: {
        "title":" لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        "content": " in Surah al-Kahf, we find that Allah offers examples of various people who did follow guidance, and how it saved them from suffering the same fate as the disbelievers.        This serves as yet another proof of the Qur’an being the true guidance, as mentioned in the first ten verses of the surah. Following the guidance of the Qur’an will lead to salvation, just as Divine guidance of the past led the people mentioned in this surah to their salvation.        Beside, in this surah, it demonstrates how the actions of believers lead to heavenly bliss, while the actions of those who are disbelieving and ungrateful to Allah only lead to disappointment and failure. ",
        
        // "As we arrive at the story of Musa and al-Khiḍr, we will learn how Divine guidance is upheld by a person with knowledge. In this section we learn that human beings cannot judge Allah’s decree based on what things appear to be at face value. Here we also learn that those people whom Allah has given resources and power must use these means to provide justice where it is needed and protect the innocent from oppressive people. ",
        
        "category": "patience",   
    },


}

let counter = 1



const app = Vue.createApp   ({

    data() {
        return {
            "title":" لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
            "content": "Choose the surah you want below",
            "category": "patience",   
        }
    },

    

    methods: {
        async getAlAsr() {
            
            // Fetch from data in hadith const
            // this.title = hadith[counter].title
            // this.content = hadith[counter].content
            // this.category = hadith[counter].category

            this.title = surah[1].title
            this.title = surah[1].content

            // if (counter == 6) {
            //     counter = counter - 5
            //     console.log(counter)
            // } else {
            //     counter = counter + 1
            //     console.log(counter)
            // }
        },

        async getAlKahfi() {

            this.title = "Al Kahfi"
            this.title = surah[2].content
        }
    }
})

app.mount('#app')