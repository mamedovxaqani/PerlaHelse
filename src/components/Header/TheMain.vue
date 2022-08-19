<template>
  <div class="navbar">
    <div class="navbar__item">
      <ul class="nav">
        <li class="nav__item">
          <font-awesome icon="bars" @click="showSideBar"></font-awesome>
        </li>
        <li class="nav__item">
          <font-awesome icon="magnifying-glass"></font-awesome>
        </li>
      </ul>
    </div>
    <div class="navbar__item">
      <a href="">
        <img :src="require('@/assets/Frame.svg')" alt="" />
      </a>
    </div>
    <div class="navbar__item">
      <ul class="nav">
        <li class="nav__item">
          <font-awesome :icon="['far', 'user']"></font-awesome>
        </li>
        <li class="nav__item">
          <font-awesome icon="cart-shopping"></font-awesome>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showSideBar() {
      this.$emit("showSideBar");
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  font-family: "Gilroy", sans-serif;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400px;
}

.nav {
  list-style: none;
}

.nav:first-child {
  padding: 0;
}

.nav__item {
  display: inline-block;
  margin-right: 30px;
}
</style>
