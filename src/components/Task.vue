<template>
  <div class="task">
    <div class="taskText">
      <h3>{{ task.text }}</h3>
      <p>{{ task.day }}</p>
    </div>
    <i class="fas fa-times"></i>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>

<style scope>
.task {
  background: #f8f8f8;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.task.reminder {
  border-left: 5px solid green;
}
</style>
