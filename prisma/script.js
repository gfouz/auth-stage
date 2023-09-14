import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const product = await prisma.product.create({
    data: {
      url: 'https://product.com',
      name: 'laptop',
      image: '/images/laptop.jpg',
      price: 750,
      description: 'DELL Laptop corporation'
    },
  })
  console.log(product)
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

  //npx ts-node script.ts