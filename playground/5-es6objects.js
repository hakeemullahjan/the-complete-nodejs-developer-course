//object property shorthand

const name = 'hakeemullah'
const userAge = 22

const user = {
    name,
    age: userAge,
    location: 'karachi'
}

// console.log(user)

//object destructuring
const product = {
    label: "Notebook",
    price: 200,
    stock: 122,
    salePrice: undefined,
    rating: 2.3
}

const { label: productLabel, stock, rating = 5 } = product

// console.log(productLabel, stock, rating)
// console.log(product)

const transaction = (type, { label, price }) => {
    console.log(type, label, price)
}

transaction('order', product)