import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'giovani fouz',
      email: 'gfouz75@gmail.com',
      password: 'gfouz123'
    },
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })



  /*
  Highly motivated, disciplined and professional with great passion
   for working with and getting accustomed to technology as it advances. 
   Works well both as an individual and with a team. I believe my skills 
   would help with the expansion the world is undergoing in the technological 
   aspect and I want to be part of the growth.


   tracyjacobs775@gmail.com


   */