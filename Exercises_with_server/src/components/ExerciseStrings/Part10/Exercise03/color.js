import { defineStore } from 'pinia'

export const useColorStore = defineStore("colorStore3",{
  state(){
    return{
      red: 0,
      green: 0,
      blue: 0,
    }
  },
  getters: {
    hex: (state) => {
      return  "#" + Number(state.red).toString(16).padStart(2, '0') + 
      Number(state.green).toString(16).padStart(2, '0') + 
      Number(state.blue).toString(16).padStart(2, '0');
    }
  }
})
