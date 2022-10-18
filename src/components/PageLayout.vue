<template>
  <div class="relative flex">
    <div
      class="flex flex-col bg-amber-50 text-black h-screen w-56 py-2"
      :class="[$store.state.isMenuOpen ? 'w-60' : 'w-0']"
    ></div>

    <div class="flex flex-row text-black h-16 w-screen relative p-2">
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
      <p class="mt-[5px] ml-3 text-lg font-bold">{{ $store.state.listName }}</p>
    </div>
  </div>
</template>

<script>
import { mdiMenu } from "@mdi/js";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      mdiMenu,
    };
  },
  methods: {},
};
</script>

<style></style>
