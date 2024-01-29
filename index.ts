import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main (){
    //create user
    // const user = await prisma.user.create({
    //     data:{
    //         name: "Vic Kim",
    //         email:"vic@gmail.com"
    //     }
    // })

    const users = await prisma.user.findMany({
        include:{
            articles: true
        }
    })
    console.log(users)

    //create article
    // const article = await prisma.article.create({
    //     data:{
    //         title: 'Vics first Article',
    //         body: 'This is Vic first article',
    //         author: {
    //             connect:{
    //                 id: 1
    //             }
    //         }
    //     }
    // })

    //associate article & user
    // const user = await prisma.user.create({
    //     data:{
    //         name:"hydrastic Kim",
    //         email:"hydrastic@gmail.com",
    //         articles:{
    //             create:{
    //                 title:"hydrastics article",
    //                 body:"This is hydrastic's first article"
    //             }
    //         }
    //     }
    // })


    // const articles = await prisma.article.findMany()
    // // console.log(user)
    // console.log(articles)
    // users.forEach((user)=> {
    //     console.log(`User: ${user.name}, Email: ${user.email}`)
    //     console.log(`Article:`)
    //     user.articles.forEach((article)=>{
    //         console.log(`-Title: ${article.title}, Body: ${article.body}`)
    //     })
    //     console.log('\n')
    // });

    //update
    const user = await prisma.user.update({
        where:{
            id:1
        },
        data:{
            name:"Hydra Vic"
        }
    })
}



main()
    .then(async ()=>{
        await prisma.$disconnect()
    })
    .catch(async(e)=>{
        console.log(e)
        await prisma.$disconnect
        process.exit(1)
    })