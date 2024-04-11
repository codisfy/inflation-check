// To access your database
// Append api/* to import from api and web/* to import from web
import { db } from 'api/src/lib/db'

export default async ({ args }) => {
  // Your script here...
  console.log(':: Executing script with args ::')
  console.log(args)
}

import * as fs from 'fs'
import csvParser from 'csv-parser'

const csvFilePath = __dirname + '/../../cleaning/ALL.csv'

interface CsvRow {
  store: string
  date: string
  productName: string
  category: string
  quantity: string
  price: string
}

async function findOrCreateStore(storeName: string) {
  let store = await db.store.findFirst({
    where: { name: { contains: storeName, mode: 'insensitive' } },
  })
  if (!store) {
    store = await db.store.create({
      data: { name: storeName },
    })
  }
  return store
}

async function findOrCreateCategory(categoryName: string) {
  let category = await db.category.findFirst({
    where: { name: { contains: categoryName, mode: 'insensitive' } },
  })
  if (!category) {
    category = await db.category.create({
      data: { name: categoryName },
    })
  }
  return category
}

async function findOrCreateQuantityUnit(unitName: string) {
  let unit = await db.quantityUnit.findFirst({
    where: { unitName: { contains: unitName, mode: 'insensitive' } },
  })
  if (!unit) {
    unit = await db.quantityUnit.create({
      data: { unitName: unitName },
    })
  }
  return unit
}

async function findOrCreateProduct(
  row: CsvRow,
  categoryId: number,
  quantityUnitId: number
) {
  let product = await db.product.findFirst({
    where: { name: row.productName, categoryId: categoryId },
  })
  // throw an error if an product exists but the quantity unit is different
  if (product && product.baseUnitId !== quantityUnitId) {
    console.error(
      `Product ${row.productName} already exists with a different quantity unit`
    )
  }
  if (!product) {
    product = await db.product.create({
      data: {
        name: row.productName,
        categoryId,
        baseUnitId: quantityUnitId,
      },
    })
  }
  return product
}

async function processCsvRow(row: CsvRow) {
  const store = await findOrCreateStore(row.store)
  const category = await findOrCreateCategory(row.category)
  const quantityUnit = await findOrCreateQuantityUnit(row.quantity)
  const product = await findOrCreateProduct(row, category.id, quantityUnit.id)

  // Assuming your Prices table relates to products and stores, and uses product and store IDs.
  // Adjust this to your schema, especially the relations and data fields.
  await db.price.create({
    data: {
      productId: product.id,
      storeId: store.id,
      date: new Date(row.date),
      price: parseFloat(row.price), // Convert string to number
      currency: 'CAD',
      quantityId: quantityUnit.id,
    },
  })
}

async function main() {
  const results: CsvRow[] = []

  // print the current path to console
  console.log(__dirname)
  fs.createReadStream(csvFilePath)
    .pipe(csvParser())
    .on('data', (data: CsvRow) => results.push(data))
    .on('end', async () => {
      for (const row of results) {
        await processCsvRow(row)
      }
      await db.$disconnect()
    })
}

main().catch(async (e) => {
  console.error(e)
  await db.$disconnect()
  process.exit(1)
})
