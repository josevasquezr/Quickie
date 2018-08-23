<template>
    <div class="container">
    <h2>Hola<strong>!</strong></h2>
    <h3>Estas categorias prodrian gustarte</h3>
     <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
            <div class="tile">
            <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-primary">
                  <router-link to="/cat?name=home">
                    <p class="title">Hogar</p>
                    <p class="subtitle">Lo mejor para tu hogar</p>
                  </router-link>
                </article>
                <article class="tile is-child notification is-warning">
                <router-link to="/cat?name=sports">
                  <p class="title">Deportes</p>
                  <p class="subtitle">Implementos deportivos</p>
                </router-link>
                </article>
            </div>
        <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <router-link to="/cat?name=technology">
                <p class="title">Tecnologia</p>
                <p class="subtitle">Computadoras, tablets, celulares</p>
                <figure class="image is-4by3">
                    <img src="https://hasznaltalma.hu/upload/aimg/51/51165/1519029298_71_apple-ipad-pro-10.5-64-256-512gb-wifi-s-es-4g-s-is-tobb-szinben_medium.png">
                </figure>
              </router-link>
            </article>
        </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
         <router-link to="/cat?name=toys">
          <p class="title">Juguetes</p>
          <p class="subtitle">Lo mejor para los reyes del hogar</p>
         </router-link>
        <div class="content">
          <!-- Content -->
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
         <router-link to="/cat?name=discount">
          <p class="title">Productos en Descuento</p>
          <p class="subtitle">Cambio de temporada</p>
         </router-link>
        <div class="content">
          <!-- Content -->
        </div>
      </div>
    </article>
  </div>
</div>
</div>
</template>

<script>
export default {};
</script>

<style>
article:hover {
  cursor: pointer;
}

a {
  text-decoration: none !important;
}
</style>
