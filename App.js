class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    constructor(params) {

    }
    addProducts(product) {
        const productList = document.getElementById('product_list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class = "card text-center mb-4">
            <div class="card-body">                
                <strong> Product Name </strong>: ${product.name} 
                <strong> Product Price </strong>: ${product.price}
                <strong> Product Year </strong>: ${product.year}
                <a name="delete" href="#" class="btn btn-danger">Delete</a>
            </div>
        </div>
        `;
        productList.appendChild(element);
    }
    resetForm() {
        document.getElementById('product_form').reset();
    }

    deleteProducts(element) {
        if (element.name === "delete") {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage("Product deleted", "danger");
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000)
    }


}

//DOM Document Object Model: Registra los eventos en la pagina


document.getElementById('product_form')
    .addEventListener('submit', function(e) {
        const name = (document.getElementById('name').value)
        const price = (document.getElementById('price').value)
        const year = (document.getElementById('year').value)

        console.log(name, price, year);


        const product = new Product(name, price, year);

        const ui = new UI();
        ui.addProducts(product);

        ui.resetForm();
        ui.showMessage('Product added', 'success')


        e.preventDefault();
    });

document.getElementById('product_list')
    .addEventListener('click', function(e) {
        const ui = new UI();
        ui.deleteProducts(e.target);
        console.log(e.target)
    });