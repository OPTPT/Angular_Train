const tableData = [
    { brand: 'Apple', lastYearSale: '51', thisYearSale: '40', lastYearProfit: '54,406.00', thisYearProfit: '43,342' },
    { brand: 'Apple', lastYearSale: '83', thisYearSale: '96', lastYearProfit: '423,132', thisYearProfit: '312,122' },
    { brand: 'Apple', lastYearSale: '38', thisYearSale: '5', lastYearProfit: '12,321', thisYearProfit: '8,500' },
    { brand: 'Philips', lastYearSale: '49', thisYearSale: '22', lastYearProfit: '745,232', thisYearProfit: '650,323,' },
    { brand: 'Philips', lastYearSale: '17', thisYearSale: '79', lastYearProfit: '643,242', thisYearProfit: '500,332' },
    { brand: 'Philips', lastYearSale: '52', thisYearSale: '65', lastYearProfit: '421,132', thisYearProfit: '150,005' },
    { brand: 'Sharp', lastYearSale: '82', thisYearSale: '12', lastYearProfit: '131,211', thisYearProfit: '100,214' },
    { brand: 'Sharp', lastYearSale: '44', thisYearSale: '45', lastYearProfit: '66,442', thisYearProfit: '53,322' },
    { brand: 'Sharp', lastYearSale: '90', thisYearSale: '56', lastYearProfit: '765,442', thisYearProfit: '296,232' },
    { brand: 'Sharp', lastYearSale: '75', thisYearSale: '54', lastYearProfit: '21,212', thisYearProfit: '12,533' }
]



let headData = data => Object.keys(data[0]);
let bodyData = data => data.map(row => {
    return Object.values(row);
})


export { tableData, headData, bodyData };