import { createStore } from "vuex";

export default createStore({
  state: {
    todoVal: "",
    isMenuOpen: true,
    listName: "Günüm",
    todos: [],
  },
  getters: {},
  mutations: {
    update(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    add(state) {
      state.todos.push(state.todoVal);
      state.todoVal = "";
    },
  },
  actions: {
    updateMenu(context) {
      context.commit("update");
    },
    updateTodos(context) {
      context.commit("add");
    },
  },
  modules: {},
});
