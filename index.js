const hadith = { 
    "title": "Prisma for TS ORMs"
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
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {

            const res = await fetch('https://randomuser.me/api')

            

            const { results } = await res.json()
            
            console.log(results)


            // Fetch title from data in import statement
            this.title = hadith.title
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    }
})

app.mount('#app')