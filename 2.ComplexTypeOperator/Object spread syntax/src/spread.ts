const productID: Array<string> = ['123', '456', '789']
const body = {
    uid: '6666',
    ...(productID && { product: productID }),
}

console.log(body)

const attr = { title: 'Тестовый заголовок' }
const result = { ...attr, ...body }
console.log(result)