import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ideas: {}
  },
  mutations: { //on commit des mutations
    CREATE_IDEAS(state, payload){
      const id = Date.now();
      state.ideas[id] = payload;
      state.ideas = { ...state.ideas }; 
    }
  },
  actions: { //on dispatch des actions
    createIdea({ commit }, payload){
      console.log("actions / createIdea");
      commit('CREATE_IDEAS', payload);
    }
  },
  getters: {
    allIdeas(state) {
      const allIdeas = Object.keys(state.ideas).map(key => state.ideas[key]); //récupérer toutes les clés de l'objet state.ideas"
      //console.log(allIdeas);
      return allIdeas;
    }
  },

  modules: {}
});
