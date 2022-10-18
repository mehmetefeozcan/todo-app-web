<template>
  <div class="relative flex flex-row">
    <div
      class="flex flex-col bg-sky-50 text-black h-screen w-60 py-4 pt-20"
      :class="[$store.state.isMenuOpen ? 'show' : 'hidden']"
    >
      <div class="ml-6 text-lg">
        <p>Günüm</p>
      </div>
      <vs-divider class="bg-black h-[1px] w-44 mt-10 ml-3"> </vs-divider>
      <div class="ml-4 text-[24px] flex flex-row text-blue-500">
        +
        <div class="text-lg mt-[5px] ml-2">Yeni Liste</div>
      </div>
    </div>

    <div class="flex flex-col">
      <div class="flex flex-row h-16 w-screen relative p-2">
        <svg
          style="width: 34px; height: 34px"
          viewBox="0 0 24 24"
          @click="$store.dispatch('updateMenu')"
        >
          <path
            fill="currentColor"
            d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
          />
        </svg>
        <p class="mt-[5px] ml-3 text-lg font-bold">
          {{ $store.state.listName }}
        </p>
      </div>
      <div class="h-16 w-screen mb-5">
        <input
          v-model="$store.state.todoVal"
          type="text"
          placeholder="Görev Ekle"
          class="bg-gray-100 w-[94%] h-12 rounded-lg mx-4 placeholder:text-blue-400 placeholder:pl-2 placeholder:py-2 pl-2 py-2 hover:border-t-4 outline-none"
          :class="[$store.state.isMenuOpen ? 'w-[80%]' : 'w-[90%]']"
        />
        <button class="text-blue-400" @click="$store.dispatch('updateTodos')">
          Ekle
        </button>
      </div>

      <template v-for="(item, index) in $store.state.todos" :key="index">
        <card
          class="mx-4 bg-gray-100 h-10 p-2 w-[94%] mb-3"
          :class="[$store.state.isMenuOpen ? 'w-[80%]' : 'w-[90%]']"
        >
          <input type="radio" />
          {{ item }}</card
        >
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  props: {
    msg: String,
  },
  data: () => ({}),
};
</script>

<style></style>
