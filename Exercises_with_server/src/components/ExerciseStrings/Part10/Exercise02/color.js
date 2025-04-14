import { defineStore } from 'pinia'

export const useColorStore = defineStore("colorStore2",{
  state(){
    return {
      red: 0,
      green: 0,
      blue: 0,
    }
  }
})
