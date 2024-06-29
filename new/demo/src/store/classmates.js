import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useClassmatesStore = defineStore('classmates', () => {
  const list = ref([
    { userName: '大香蕉', id: '11', age: 88 },
    { userName: '大苹果', id: '22', age: 77 },
    { userName: '小葡萄', id: '33', age: 66 },
  ]);

  const addClassmate = (classmate) => {
    list.value.push(classmate);
  };

  const editClassmate = (index, updatedClassmate) => {
    list.value.splice(index, 1, updatedClassmate);
  };

  const deleteClassmate = (index) => {
    list.value.splice(index, 1);
  };

  return { list, addClassmate, editClassmate, deleteClassmate };
});
