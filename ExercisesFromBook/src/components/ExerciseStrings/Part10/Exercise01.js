import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<script setup>\n" +
"import Products from './Products.vue'\n" +
"import Cart from './Cart.vue'\n" +
"import Checkout from './Checkout.vue'\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"  <Products></Products>\n" +
"  <Cart></Cart>\n" +
"  <Checkout></Checkout>\n" +
"</template>\n" +
"\n" +
"<style>\n" +
"</style>\n"


const cart = "import { defineStore } from 'pinia'\n" +
"\n" +
"export const useCartStore = defineStore(\"cartStore1\",{\n" +
"\n" +
"  state(){\n" +
"    return {\n" +
"      products: [\n" +
"        { name: \"Widgets\", price: 10 },\n" +
"        { name: \"Doodads\", price: 8 },\n" +
"        { name: \"Roundtuits\", price: 12 },\n" +
"        { name: \"Fluff\", price: 4 },\n" +
"        { name: \"Goobers\", price: 7 }\n" +
"      ],\n" +
"      cart: [\n" +
"      ]\n" +
"    }\n" +
"  },\n" +
"  getters: {\n" +
"\n" +
"    cartTotal: (state) =>\n" +
"      state.cart.reduce((total, item) => {\n" +
"        let product = state.products.find(p => p.name === item.name);\n" +
"        return total + (product.price * item.quantity);\n" +
"      }, 0)\n" +
"\n" +
"  },\n" +
"  actions: {\n" +
"    addToCart(product) {\n" +
"      let index = this.cart.findIndex(p => p.name === product.name);\n" +
"      if(index !== -1) {\n" +
"        this.cart[index].quantity++;\n" +
"      } else {\n" +
"        this.cart.push({ name: product.name, quantity: 1});\n" +
"      }\n" +
"    },\n" +
"    removeFromCart(product) {\n" +
"      let index = this.cart.findIndex(p => p.name === product.name);\n" +
"      if(index !== -1) {\n" +
"        this.cart[index].quantity--;\n" +
"        if(this.cart[index].quantity === 0) this.cart.splice(index, 1);\n" +
"      }\n" +
"    }\n" +
"\n" +
"\n" +
"\n" +
"  }\n" +
"})\n"


const Cart = "<script setup>\n" +
"import { useCartStore } from './cart';\n" +
"const store = useCartStore()\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"<h2>Cart</h2>\n" +
"<table>\n" +
"	<thead>\n" +
"	<tr>\n" +
"		<th>Name</th>\n" +
"		<th>Quantity</th>\n" +
"	</tr>\n" +
"	</thead>\n" +
"	<tbody>\n" +
"	<tr v-for=\"(product, idx) in store.cart\" :key=\"idx\">\n" +
"		<td>{{ product.name }}</td>\n" +
"		<td>{{ product.quantity  }}</td>\n" +
"	</tr>\n" +
"	</tbody>\n" +
"</table>\n" +
"</template>\n" +
"\n" +
"<style scoped>\n" +
"table {\n" +
"  width: 400px;\n" +
"  border-collapse: collapse;\n" +
"  border: 1px solid;\n" +
"}\n" +
"\n" +
"td {\n" +
"  border: 1px solid;\n" +
"  padding: 5px;\n" +
"}\n" +
"</style>\n"


const Checkout = "<script setup>\n" +
"import { useCartStore } from './cart';\n" +
"const store = useCartStore()\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"<h2>Checkout</h2>\n" +
"Your total is ${{ store.cartTotal }}.\n" +
"<button v-show=\"store.cartTotal > 0\" @click=\"checkout\">Checkout</button>\n" +
"</template>\n" +
"\n" +
"<script>\n" +
"\n" +
"export default {\n" +
"  name: 'Cart',\n" +
"  methods: {\n" +
"	checkout() {\n" +
"		alert('Checkout process!');\n" +
"	}\n" +
"  }\n" +
"}\n" +
"</script>\n" +
"\n"


const Products = "<script setup>\n" +
"import { useCartStore } from './cart';\n" +
"const store = useCartStore()\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"<h2>Products</h2>\n" +
"<table>\n" +
"	<thead>\n" +
"	<tr>\n" +
"		<th>Name</th>\n" +
"		<th>Price</th>\n" +
"		<th>&nbsp;</th>\n" +
"	</tr>\n" +
"	</thead>\n" +
"	<tbody>\n" +
"	<tr v-for=\"(product, idx) in store.products\" :key=\"idx\">\n" +
"		<td>{{ product.name }}</td>\n" +
"		<td>{{ product.price  }}</td>\n" +
"		<td>\n" +
"		<button @click=\"store.addToCart(product)\">Add to Cart</button> \n" +
"		<button @click=\"store.removeFromCart(product)\">Remove from Cart</button>\n" +
"		</td>\n" +
"	</tr>\n" +
"	</tbody>\n" +
"</table>\n" +
"</template>\n" +
"\n" +
"<style scoped>\n" +
"table {\n" +
"  width: 400px;\n" +
"  border-collapse: collapse;\n" +
"  border: 1px solid;\n" +
"}\n" +
"\n" +
"td {\n" +
"  border: 1px solid;\n" +
"  padding: 5px;\n" +
"}\n" +
"</style>\n"


const Exercise01 = {

        name: "Exercise01",
        // AppComponent: App,

        components: {

            "App.vue": {
            name: "App.vue",
            path: "Part10/Exercise01/App.vue",
            resetCode: App
            },

            "cart.js": {
            name: "cart.js",
            path: "Part10/Exercise01/cart.js",
            resetCode: cart
            },

            "Cart.vue": {
            name: "Cart.vue",
            path: "Part10/Exercise01/Cart.vue",
            resetCode: Cart
            },

            "Checkout.vue": {
            name: "Checkout.vue",
            path: "Part10/Exercise01/Checkout.vue",
            resetCode: Checkout
            },

            "Products.vue": {
            name: "Products.vue",
            path: "Part10/Exercise01/Products.vue",
            resetCode: Products
            },

        }

    }

    export default Exercise01
