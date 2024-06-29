<template>
  <div class="app">
    <h1>同学管理系统</h1>
    <ClassmateForm @add-classmate="addClassmate" />
    <ClassmateList
      :classmates="classmates"
      @edit-classmate="editClassmate"
      @delete-classmate="deleteClassmate"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import ClassmateList from '../components/ClassmateList.vue';

export default {
  name: 'App',
  components: {
    ClassmateList,
  },
  setup() {
    const classmates = ref([
      { xuhao: 1, name: '大香蕉', studentId: '1', age: 88 },
      { xuhao: 2, name: '大苹果', studentId: '2', age: 77 },
      { xuhao: 3, name: '小葡萄', studentId: '3', age: 66 },
    ]);

    const addClassmate = (classmate) => {
      classmates.value.unshift(classmate);
    };

    const editClassmate = (index, updatedClassmate) => {
      classmates.value.splice(index, 1); 
      classmates.value.unshift(updatedClassmate); 
    };

    const deleteClassmate = (index) => {
      classmates.value.splice(index, 1);
    };

    return { classmates, addClassmate, editClassmate, deleteClassmate };
  },
};
</script>

<style>
.app {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s, transform 0.3s;
}

button:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

button:active {
  background-color: #3e8e41;
  transform: scale(1);
}
</style>
