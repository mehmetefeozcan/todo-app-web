import { createStore } from "vuex";

export default createStore({
  state: {
    isMenuOpen: false,
    listName: "Günümüz",
  },
  getters: {},
  mutations: {
    update(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
  actions: {
    updateMenu(context) {
      context.commit("update");
    },
  },
  modules: {},
});
