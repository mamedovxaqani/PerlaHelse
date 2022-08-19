<template>
  <section class="main">
    <div class="popular__search">
      <h4 class="popular__search-title">Most popular search</h4>
      <ul class="popular__search-list">
        <li class="list-item">Коллаген</li>
        <li class="list-item">Омега-3</li>
        <li class="list-item">Витамин ДЗ</li>
        <li class="list-item">Скволен</li>
        <li class="list-item">Витамин</li>
      </ul>
    </div>
    <div class="products">
      <h4 class="products__popular">Популярное в этой категории</h4>
      <div class="products__lists">
        <div class="products__item">
          <div class="product__img">
            <img :src="require('@/assets/Collagen.png')" alt="" />
          </div>
          <div class="product__information">
            <h3 class="product__title">Коллаген</h3>
            <p class="product__from">Пепиды 1-типа из Франции</p>
            <p class="product__quentity">30 порций в стиках</p>
          </div>
        </div>
        <div class="products__item">
          <div class="product__img">
            <img :src="require('@/assets/vitamin_d3.png')" alt="" />
          </div>
          <div class="product__information">
            <h3 class="product__title">Коллаген</h3>
            <p class="product__from">Пепиды 1-типа из Франции</p>
            <p class="product__quentity">30 порций в стиках</p>
          </div>
        </div>
        <div class="products__item">
          <div class="product__img">
            <img :src="require('@/assets/treska.png')" alt="" />
          </div>
          <div class="product__information">
            <h3 class="product__title">Коллаген</h3>
            <p class="product__from">Пепиды 1-типа из Франции</p>
            <p class="product__quentity">30 порций в стиках</p>
          </div>
        </div>
        <div class="products__item">
          <div class="product__img">
            <img :src="require('@/assets/perla__tuna.png')" alt="" />
          </div>
          <div class="product__information">
            <h3 class="product__title">Коллаген</h3>
            <p class="product__from">Пепиды 1-типа из Франции</p>
            <p class="product__quentity">30 порций в стиках</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@font-face {
  font-family: "Gilroy";
  src: url("@/assets/fonts/Gilroy-Regular.ttf");
}

.main {
  max-width: 1400px;
  width: 100%;
  /* border: 1px solid; */
  margin: 0 auto;
  display: flex;
}

.popular__search-title,
.products__popular {
  font-size: 15px;
  color: #00284f;
  font-weight: 400;
  opacity: 40%;
  font-family: sans-serif;
}

.popular__search {
  width: 300px;
  /* border: 1px solid; */
}

.popular__search-list {
  list-style: none;
  padding: 0;
}

.product__title,
.product__from,
.product__quentity {
  font-family: "Gilroy";
  font-weight: 600;
}

.product__title {
  font-size: 17px;
}

.product__from {
  font-size: 15px;
}

.products {
  width: 100%;
}

.product__quentity {
  font-size: 15px;
  color: rgba(0, 40, 79, 0.4);
}

.products__item {
  /* border: 1px solid; */
  width: 230px;
  height: 230px;
}

.products__lists {
  display: flex;
  justify-content: space-between;
}

.product__img > img {
  width: 100%;
  background-color: #d9d9d9;
}

.list-item {
  margin: 20px 0;
  font-family: Arial, Helvetica, sans-serif;
}

@media (max-width: 1055px) {
  .popular__search {
    display: none;
  }
}
</style>
