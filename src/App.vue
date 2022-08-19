<template>
  <div class="wrapper">
    <the-header @show="showSideBar"></the-header>
    <div class="list__category">
      <list-category></list-category>
    </div>
    <div class="sidebar__block">
      <side-bar class="sidebar" v-if="showBar" @close="closeSideBar"></side-bar>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/layouts/SideBar.vue";
import ListCategory from "./components/layouts/ListCategory.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
export default {
  data() {
    return {
      showBar: false,
    };
  },
  components: {
    TheHeader,
    ListCategory,
    SideBar,
  },
  methods: {
    showSideBar() {
      this.showBar = true;
    },
    closeSideBar() {
      this.showBar = false;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Gilroy";
  src: url("@/assets/fonts/Gilroy-Regular.ttf") format("ttf");
}

.wrapper {
  position: relative;
}

.sidebar {
  position: fixed;
  top: 0;
  height: 95%;
}
</style>
