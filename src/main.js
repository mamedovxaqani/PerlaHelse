import { createApp } from "vue";
import App from "./App.vue";

import ProductsOld from "./components/SideBar/ProductsOld.vue";
import ProductsYoung from "./components/SideBar/ProductsYoung.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faMagnifyingGlass,
  faCartShopping,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUser,
  faBars,
  faMagnifyingGlass,
  faPhone,
  faCartShopping,
  faPhone
);

const app = createApp(App);

app.component("font-awesome", FontAwesomeIcon);

app.component("productOld", ProductsOld);
app.component("productYoung", ProductsYoung);

app.mount("#app");
