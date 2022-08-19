<template>
  <aside class="sidebar">
    <div class="sidebar__container">
      <div class="close__btn">
        <button class="close" @click="closeBar">x</button>
      </div>
      <div class="sidebar__container">
        <div class="sidebar__up">
          <h2 class="sidebar__title">Все продукты</h2>

          <ul class="sidebar__products">
            <li class="sidebar__products-item" @click="showProductOld">
              Продукты для взрослых
            </li>
            <li class="sidebar__products-item" @click="showProductYoung">
              Продукты для детей
            </li>
          </ul>

          <hr />

          <ul class="sidebar__products">
            <li class="sidebar__products-item">О компании</li>
            <li class="sidebar__products-item">Сертификаты</li>
            <li class="sidebar__products-item">Вопрос-ответ</li>
            <li class="sidebar__products-item">Блог</li>
          </ul>
        </div>

        <div class="sidebar__down">
          <ul class="sidebar__connection">
            <li class="sidebar__connection-item">Доставка и оплата</li>
            <li class="sidebar__connection-item">Контакты</li>
            <li class="sidebar__connection-item">Вакансии</li>
          </ul>

          <div class="sidebar__number">
            <div class="number">
              <span class="number"
                ><font-awesome icon="phone" class="phone__icon"></font-awesome>
                0 800 300 039</span
              >
            </div>
            <div class="call-center">
              <span
                >Call-центр работает <br />
                с 7:00 до 23:00</span
              >
            </div>
          </div>

          <hr />

          <div class="sidebar__selects">
            <label for="" class="select__label">
              Доставка
              <select name="" id="" class="sidebar__select">
                <option value="">Украина</option>
              </select>
            </label>
            <label for="" class="select__label">
              Язык
              <select name="" id="" class="sidebar__select">
                <option value="">Русский</option>
              </select>
            </label>
            <label for="" class="select__label">
              Валюта
              <select name="" id="" class="sidebar__select">
                <option value="">Грн</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      currentComponent: "",
    };
  },
  methods: {
    closeBar() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.sidebar {
  background-color: #ffffff;
  padding: 20px;
  max-width: calc(400px - 20px);
  width: 100%;
  box-shadow: 100px 4px 8px 1400px rgba(34, 60, 80, 0.2);
}
.sidebar__selects {
  display: flex;
  justify-content: space-between;
}
.sidebar__connection {
  list-style: none;
  font-family: "Gilroy";
  padding: 0;
}

.sidebar__connection-item {
  margin: 10px 0;
}

.select__label {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: rgba(0, 40, 79, 0.3);
}

.sidebar__title {
  font-family: "Gilroy";
  font-weight: bold;
  font-size: 17px;
}

.sidebar__products {
  list-style: none;
  font-family: "Gilroy";
  padding: 0%;
}

.sidebar__products-item {
  margin: 10px 0px;
}
.sidebar__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

select {
  display: block;
}
.sidebar__number {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.number {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 27px;
}

.phone__icon {
  margin-right: 10px;
}

.call-center {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: rgba(0, 40, 79, 0.3);
}

.sidebar__select {
  border: none;
  font-size: 17px;
  font-family: "Gilroy";
  font-weight: 400;
  padding-right: 10px;
}

.close {
  padding: 10px;
  background: none;
  padding-left: 0;
  border: none;
  font-size: 25px;
}

.close__btn {
  text-align: end;
}
</style>
