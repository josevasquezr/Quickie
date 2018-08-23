<template>
  <div id="app">
    <Toolbar />
    <router-view/>
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar";
export default {
  name: "App",
  components: {
    Toolbar
  }
};
</script>

<style>
#app {
  width: 100vw;
  overflow: hidden;
}
</style>
