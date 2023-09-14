import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	const admin = await prisma.user.upsert({
		where: { email: 'admin@codersteps.com' },
		update: {},
		create: {
			role: 'Admin',
			name: 'AdminName',
			email: 'admin@codersteps.com',
			password: '123456'
		},
	})
	const laptop = await prisma.product.upsert({
        where: { name: 'dellInspiron' },
		update: {},		
        create: {
          url: 'https://dell-inspiron.com',
          name: 'dellInspiron',
          image: '/images/dell-inspiron.jpg',
          price: 750,
          description: 'DELL portable computer'
    },
  })

	console.log('Admin name and laptop trade mark', admin.name + laptop.name)
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



	//npx prisma db push
	//npx prisma db seed
	////npx prisma migrate dev --name init