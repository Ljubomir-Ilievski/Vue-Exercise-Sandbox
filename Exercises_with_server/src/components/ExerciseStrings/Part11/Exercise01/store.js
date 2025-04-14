import { defineStore } from 'pinia'

export const userPreferencesStore = defineStore("userPreferencesStore",{
  state: () => ({
    dismissedSubscriberBanner: false,
    acceptedCookie: false
  }),
  getters: {
  },
  actions: {
    dismissSubscriberBanner() {
      this.dismissedSubscriberBanner = true;
    },
    acceptCookie() {
      this.acceptedCookie = true;
    }
  }
})
