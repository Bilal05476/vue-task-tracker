<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      title="Task Trackrer"
      :showAddTask="showAddTask"
    />

    <router-view :showAddTask="showAddTask"> </router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>

<style>
.container {
  font-family: sans-serif;
  border: 1px solid #000;
  padding: 20px 40px;
  margin: 10px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  outline: none !important;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>
