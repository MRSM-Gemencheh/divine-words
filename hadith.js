const hadith = {

    "first": {
        "title":" لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        "content": "Allah does not burden a soul beyond that it can bear (2:286)",
        "category": "patience",   
    },

    2: {
        "title":" لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        "content": "Allah does not burden a soul beyond that it can bear (2:286)",
        "category": "cleanliness",   
    },

    3: {
        "title":" لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        "content": "Allah does not burden a soul beyond that it can bear (2:286)",
        "category": "patience",   
    },

}



const app = Vue.createApp   ({

// Schema

/*
title:
content:
category:
*/



    data() {
        return {
            title: "Balance in all things",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "balance",
            gender: 'male',
        }
    },
    methods: {
        async getUser() {

            // remove this in future releases since we wont be using it anymore
            const res = await fetch('https://randomuser.me/api')

            

            const { results } = await res.json()
            
            console.log(results)


            // Fetch title from data in import statement
            this.title = hadith.first.title
            this.content = hadith.first.content
            this.category = hadith.first.category
            this.gender = results.gender
            // this.picture = results[0].picture.large
        },
    }
})

app.mount('#app')