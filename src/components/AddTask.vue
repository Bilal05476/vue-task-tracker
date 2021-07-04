<template>
  <h2>Add Task Form</h2>
  <form action="">
    <input type="text" v-model="text" />
    <input type="text" v-model="day" />
    <input type="checkbox" v-model="reminder" />
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
};
</script>
