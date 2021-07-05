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
    //add task in server
    async addTask(task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          body: JSON.stringify(task),
        },
      });
      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },
    // end

    // addTask(task) {
    //   this.tasks = [...this.tasks, task];
    // },

    //delete task from server
    // end

    deleteTask(id) {
      if (confirm("Are you sure?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },

    //toggle task in server
    // end

    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },

    //fetch tasks from server
    async fetchTasks() {
      const res = await fetch("api/tasks");
      const data = await res.json();
      return data;
    },
    //fetch task from server
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
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
