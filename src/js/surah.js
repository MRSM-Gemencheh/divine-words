const surah = {

    1: {
        "title": "Surah Al-Asr ",
        "content": "This sura teaches that all human beings are in loss, except those who have iman (faith in Islam), do righteous deeds and remind others of the Haqq (truth, rights, reality) and remind others of Sabr (patience).[9][10]",
        "category": "patience",
    },

    2: {
        "title": " لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        "content": " in Surah al-Kahf, we find that Allah offers examples of various people who did follow guidance, and how it saved them from suffering the same fate as the disbelievers.        This serves as yet another proof of the Qur'an being the true guidance, as mentioned in the first ten verses of the surah. Following the guidance of the Qur'an will lead to salvation, just as Divine guidance of the past led the people mentioned in this surah to their salvation. Besides, in this surah, it demonstrates how the actions of believers lead to heavenly bliss, while the actions of those who are disbelieving and ungrateful to Allah only lead to disappointment and failure. ",
        "category": "patience",
    },


}

let counter = 1

const app = Vue.createApp({

    data() {
        return {
            "title": " ",
            "content": "Choose the surah you want below",
            "category": "patience",
        }
    },

    methods: {
        async getAlAsr() {
            this.title = surah[1].title
            this.title = surah[1].content
        },

        async getAlKahfi() {
            this.title = "Al Kahfi"
            this.title = surah[2].content
        }
    }
})

app.mount('#app')