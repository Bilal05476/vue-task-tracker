<template>
  <form @submit="onSubmit">
    <div class="form-control">
      <label>Task Name</label>
      <input v-model="text" type="text" placeholder="Task Name" />
    </div>
    <div class="form-control">
      <label>Task Date</label>
      <input v-model="day" type="text" placeholder="Task date" />
    </div>
    <div class="form-control remainder">
      <label>Set Reminder</label>
      <input v-model="reminder" type="checkbox" />
    </div>
    <input value="Save" type="submit" class="formBtn" />
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
      }
      if (!this.day) {
        alert("Please add day/date");
      } else {
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

<style>
form {
  margin: 10px auto;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px 20px;
}
.form-control {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.form-control input {
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 10px;
  outline: none;
  border-radius: 5px;
}
.form-control.remainder {
  align-items: center;
  flex-direction: row;
}
.remainder input {
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}
.formBtn {
  display: block;
  margin: 10px auto;
  width: 100%;
  padding: 7px;
  background-color: #000;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
</style>
