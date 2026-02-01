const loadBtn = document.querySelector('.load__btn')
const spinner = document.querySelector('.spinner')
const productList = document.querySelector('.list__products')
const errorMessage = document.querySelector('.error')



async function getProduct() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = ['Компьютер', 'Планшет', 'Телефон']

            if (products.length === 0) {
                reject('Список товаров пуст!')
            } else {
                resolve(products)
            }
        }, 2000)
    })
}

function showLoader() {
    spinner.classList.add('show')
}
function hideLoader() {
    spinner.classList.remove('show')
}

async function loadProducts() {
    productList.innerHTML = ''
    errorMessage.textContent = ''
    showLoader()

    try {
        const products = await getProduct()
        products.forEach((product) => {
            const li = document.createElement('li')
            li.textContent = product
            productList.appendChild(li)
        })
    } catch(error) {
        errorMessage.classList.add('open')
        errorMessage.textContent = error
        console.error(error);
    } finally {
        hideLoader()
        console.log('Конец отрисовки товаров!')
    }
}

loadBtn.addEventListener('click', () => {
loadProducts()
})
