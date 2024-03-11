import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    await db.user.upsert({
      where: { id: 1 },
      create: {
        id: 1,
        name: 'John Doe',
        email: 'admin@admin.com',
        hashedPassword:
          'ad9563042fe9f154419361eeeb775d8a12f3975a3722953fd8e326dd108d5645',
        salt: '1c99de412b219e9abf4665293211adce',
      },
      update: {},
    })

    console.info('')
    console.info('  Seeded admin user:')
    console.info('')
    console.info('    Email: admin@admin.com')
    console.info('    Password: admin')
    console.info('')
    console.info(`  (Please don't use this login in a production environment)`)
    console.info('')


    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/auth-dbauth-api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (const user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
