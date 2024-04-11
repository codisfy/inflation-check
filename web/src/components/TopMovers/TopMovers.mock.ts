// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  priceChanges: [
    {
      productId: 97,
      productName: 'CABBAGE GREEN',
      oldestPrice: 2.14,
      newestPrice: 1.08,
      oldestDate: '2021-03-07T00:00:00.000Z',
      newestDate: '2023-07-16T00:00:00.000Z',
      percentChange: -49.532710280373834,
    },
    {
      productId: 107,
      productName: 'LEMON',
      oldestPrice: 0.99,
      newestPrice: 0.5,
      oldestDate: '2023-02-18T00:00:00.000Z',
      newestDate: '2023-07-16T00:00:00.000Z',
      percentChange: -49.494949494949495,
    },
  ],
  title: 'Least Inflated',
})

export const increases = (/* vars, { ctx, req } */) => ({
  priceChanges: [
    {
      productId: 65,
      productName: 'MELONS HONEYDEW',
      oldestPrice: 2.15,
      newestPrice: 5.99,
      oldestDate: '2021-02-21T00:00:00.000Z',
      newestDate: '2023-05-12T00:00:00.000Z',
      percentChange: 178.60465116279073,
    },
    {
      productId: 136,
      productName: 'HONEYCRISP APPLE',
      oldestPrice: 2.97,
      newestPrice: 6.97,
      oldestDate: '2021-02-21T00:00:00.000Z',
      newestDate: '2021-03-07T00:00:00.000Z',
      percentChange: 134.68013468013467,
    },
    {
      productId: 95,
      productName: 'TOMATO ROMA',
      oldestPrice: 2.14,
      newestPrice: 4.39,
      oldestDate: '2021-03-07T00:00:00.000Z',
      newestDate: '2023-07-16T00:00:00.000Z',
      percentChange: 105.14018691588782,
    },
    {
      productId: 41,
      productName: 'EDDOES',
      oldestPrice: 3.68,
      newestPrice: 7.47,
      oldestDate: '2021-02-21T00:00:00.000Z',
      newestDate: '2023-05-27T00:00:00.000Z',
      percentChange: 102.9891304347826,
    },
    {
      productId: 83,
      productName: 'MASALA NOODLES',
      oldestPrice: 1.17,
      newestPrice: 2.29,
      oldestDate: '2021-03-07T00:00:00.000Z',
      newestDate: '2023-07-16T00:00:00.000Z',
      percentChange: 95.72649572649574,
    },
  ],
  title: 'Most Inflated',
})
