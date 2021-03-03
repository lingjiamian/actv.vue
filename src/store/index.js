import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formData:null,
    token:null,
    userName:null
  },
  mutations: {
    getFormData(state, data){
      state.formData = data;
    },

    saveToken(state, data){
      state.token = data;
      window.localStorage.setItem("token", data);
    },
    
    saveUserName(state, data){
      state.userName = data;
      window.localStorage.setItem("userName", data);
    },

    removeUserName(){
      return window.localStorage.removeItem("userName");
    }
  },
  actions: {
  },
  modules: {
  }
})
