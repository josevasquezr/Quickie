<template>
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
        <img :src="`api/get-image-product/${pic}`" alt="imagen no disponible">

    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-2">{{name}}</p>
        <p class="subtitle is-4">$ {{price}}</p>
      </div>
    </div>

    <div class="content">
      <p>{{description}}</p>
      <a href="#">#{{category}}</a>
    </div>
    <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        <button class="button is-primary" @click="snackbar">Comprar</button>
      </span>
    </p>
  </footer>
  </div>
</div>
</template>

<script>
export default {
    name: "product",
    props: {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        pic: {
            type: String,
            required: true
        },
        description : {
            type: String,
            required: false
        },
        category: {
            type: String,
            required: false
        }
    },
    methods: {
         snackbar() {
                this.$snackbar.open(`Producto agregado correctamente`)
            },
    }
}
</script>

<style> 
@media (max-width: 860px) {
.card {
    margin: 10px auto 0 10% !important;
    width: 85%;

    }
}

.card {
    max-width: 300px;
    margin: 10px;
}
</style>
