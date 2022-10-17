<template>
  <div class="relative flex">
    <div class="flex flex-col bg-gray-200 text-black h-screen w-48">
      <div>drawer</div>
    </div>

    <div class="flex flex-row text-black h-16 w-screen relative bg-gray-200">
      header
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      items: [{ title: "Dashboard" }, { title: "Account" }, { title: "Admin" }],
      drawer: false,
    };
  },
  methods: {
    drawerOpen() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style></style>
