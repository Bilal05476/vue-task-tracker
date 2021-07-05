<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      title="Task Trackrer"
      :showAddTask="showAddTask"
    />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>

    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";
export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    deleteTask(id) {
      if (confirm("Are you sure?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctor Appointment",
        day: "March 1st at 2:30pm",
        reminder: false,
      },
      {
        id: 2,
        text: "Train Station",
        day: "March 3st at 10:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Client appointment",
        day: "March 2st at 8:30am",
        reminder: true,
      },
    ];
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
