<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <div class="taskText">
      <h3>{{ task.text }}</h3>
      <p>{{ task.day }}</p>
    </div>
    <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
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
.fas {
  color: crimson;
}
.task {
  background: #e6e5e5;
  margin: 5px;
  margin-left: 0;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.taskText {
  display: flex;
  flex-direction: column;
  line-height: 0.1rem;
}
.task.reminder {
  border-left: 5px solid green;
}
</style>
