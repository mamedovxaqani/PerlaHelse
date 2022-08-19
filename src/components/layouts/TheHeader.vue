<template>
  <header class="header">
    <the-main @showSideBar="showSideBar"></the-main>
    <the-navbar></the-navbar>
  </header>
</template>

<script>
import TheMain from "../Header/TheMain.vue";
import TheNavbar from "../Header/TheNavbar.vue";

export default {
  components: {
    TheMain,
    TheNavbar,
  },
  methods: {
    showSideBar() {
      this.$emit("show");
    },
  },
};
</script>

<style scoped>
.header {
  max-width: 1400px;
  width: 100%;
  /* border: 1px solid; */
  margin: 0 auto;
}
</style>
