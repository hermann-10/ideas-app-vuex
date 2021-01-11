import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ideas: {}
  },
  //id,
  mutations: { //on commit des mutations
    CREATE_IDEAS(state, payload){
      const id = Date.now();
      state.ideas[id] = payload;
    }
  },
  actions: { //on dispatch des actions

  },
  modules: {}
});
