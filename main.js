
class ProductManager  {
    constructor(){
        this.products = []
        this.id = 1
    };

    addProduct ( title, description, price, thumbnail, stock ) {

        let product = {
            title:title,
            description:description,
            price:price,
            thumbnail:thumbnail,
            code: this.id,
            stock:stock,
        };

        if( this.products.some( (producto) => {product.code === producto.code} )){
            console.log("Este producto ya se encuentra registrado")
        } else {
            this.products.push(product);
            this.id++
        };

    };

    getProductById (id) {
        
        let productSearch = this.products.find( (product) => product.code === id );

        if(productSearch) {
            console.log("Producto encontrado: \n")
            console.log(productSearch);
        } else {
            console.log( `No se ha encontrado un producto con el id ${id} \n` );
        };
    };

    getProducts() {
        console.log( this.products );
    }

};

let productManager = new ProductManager();

console.log( `Product Manager ya inicializado: ${productManager}`);

console.log("\n **************************************************************** \n")

console.log( "Probamos el metodo addProduct agregando dos productos")

productManager.addProduct("Zapato","Esto es un zapato",2000,"www.urldelaimagen.cl/zapato",10);
productManager.addProduct("Camisa","Esto es un una camisa",500,"www.urldelaimagen.cl/camisa",40);

console.log(
    `
    Codigo:

        productManager.addProduct("Zapato","Esto es un zapato",2000,"www.urldelaimagen.cl/zapato",10);
        productManager.addProduct("Camisa","Esto es un una camisa",500,"www.urldelaimagen.cl/camisa",40);
    
    `)

console.log("\n **************************************************************** \n")

console.log("Para verificar que el producto haya sido creado de forma exitosa vamos a probar nuestro siguiente metodo \n getProducts, que devuelve el array completo con todos los productos \n");

productManager.getProducts();

console.log("\n **************************************************************** \n")

console.log("Ahora el metodo getProductById, que ponemos un id y nos muestra el producto coincidente, si no nos avisara que no se encontro el producto con ese id\n");

console.log(
    `
    Codigo:

    productManager.getProductById(1);    
    `);

console.log("\n **************************************************************** \n")


productManager.getProductById(1);

console.log("\n **************************************************************** \n")


console.log(
    `
    Codigo:

    productManager.getProductById(3);    
    `);

console.log("\n **************************************************************** \n")

productManager.getProductById(3);








