<template>
  <form @submit="onSubmit" action="">
    <input type="text" v-model="text" />
    <input type="text" v-model="day" />
    <input type="checkbox" v-model="reminder" />
    <button>Save Task</button>
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
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert("Please add task");
      } else if (this.text) {
        const newTask = {
          id: Math.floor(Math.random() * 100000),
          text: this.text,
          day: this.day,
          reminder: this.reminder,
        };
        this.$emit("add-task", newTask);
        this.text = "";
        this.day = "";
        this.reminder = false;
      }
    },
  },
};
</script>
