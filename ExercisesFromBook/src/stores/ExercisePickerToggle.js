
import { defineStore } from 'pinia'


export const ExercisePickerToggleStore = defineStore("ExercisePickerToggle", {
  state() {
    return {
    isOpen: false,
  }
  },
  actions: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    }
  }
})
