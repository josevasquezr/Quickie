<template>
  <div class="container">
    <Categories />
  </div>
</template>

<script>
import Categories from "./Categories";
export default {
  name: "Main",
  components: {
    Categories
  }
};
</script>

<style>
.container {
  padding-top: 20px;
}
</style>
