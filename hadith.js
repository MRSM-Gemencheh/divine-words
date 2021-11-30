const hadith = {

    1: {
        "title":" لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        "content": "Allah does not burden a soul beyond that it can bear (2:286)",
        "category": "patience",   
    },

    2: {
        "title":" لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        "content": "The wings of wisdom are no match for the wings of war.",
        "category": "cleanliness",   
    },

    3: {
        "title":" لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        "content": "Knowledge is a flame in the darkness.",
        "category": "patience",   
    },

    4: {
        "title":" لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        "content": "Even in the darkest of times, there is always hope.",
        "category": "patience",   
    },

    5: {
        "title":" لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        "content": "Do not fight fire with fire.",
        "category": "cleanliness",   
    },

    6: {
        "title":" لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        "content": "Appear weak when you are strong, appear strong when you are weak.",
        "category": "patience",   
    },

    

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