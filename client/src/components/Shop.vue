<template>
    <div class="container">
      <span v-for="product in products" :key="product.name">
        <product 
          :price="product.price" 
          :name="product.name" 
          :pic="product.image"
          :description="product.description"
          :category="product.category"/>
      </span>
      <div class="error-container" v-if="products.length === 0">
        <h1 class="no-products">NO HAY PRODUCTOS EN ESTA CATEGORIA</h1>
        <span class="face">:(</span>
      </div>
    </div>
</template>

<script>
import axios from "axios"
import product from "./Product"
export default {
  name: "Shop",
  data() {
    return {
     products: []
    }
  },
  components: {
    product
  },
  props: {
    activeCategory: {
      type: String,
      required: false,
      default: "all"
    },
    name: {
      type: String,
      required: false
    }
  },
  created() {
    axios.get("api/get-product-list").then(response => {
      this.products = response.data.products.map(x => x).filter(x => { return x.category.toLowerCase() === this.name.toLowerCase();})
    })
  }
};
</script>

<style scoped>
@media (max-width: 860px) {
    .container {
        display: block !important;
        width: 100vw !important;
    }
}

.container {
  display: flex;
}

.no-products {
    text-align: center;
    font-size: 30px;
    font-weight: 300;
}
.face {
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    display: block;
}

.error-container {
    padding: 100px;
    width: 100%;
}
</style>
 