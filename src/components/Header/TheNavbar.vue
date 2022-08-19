<template>
  <section class="header__navbar">
    <nav class="navbar">
      <ul class="navbar__nav">
        <li class="nav__item" @mouseenter="showListCategory">Омега-3</li>
        <li class="nav__item">Витамины</li>
        <li class="nav__item">Добавки</li>
        <li class="nav__item delivery">Доставки</li>
        <li class="nav__item">О нас</li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  methods: {
    showListCategory() {
      console.log("Hello world");
    },
  },
};
</script>

<style scoped>
@media (max-width: 1000px) {
  .delivery {
    display: none;
  }
}

.navbar__nav {
  display: flex;
  list-style: none;
  justify-content: center;
}

.nav__item {
  margin-right: 40px;
  font-family: "Gilroy";
  font-weight: 400;
  font-size: 17px;
  cursor: pointer;
}
</style>
