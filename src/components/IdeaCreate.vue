<template>
  <div>
    <form @submit.prevent="create">
      <!-- Eviter le rechargement complet de la page avec ".prevent"-->
      <label for="idea-title">Idea's title</label><br />
      <input type="text" id="idea-title" placeholder="Entrez votre idée" v-model="idea.title" />
      <!-- v-model permet de récupérer la valeur saisie -->
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import db from '../shared/db';

export default {
  data() {
    return {
      //title: ''
      idea: {
        title: '',
        createdAt: new Date(), 
      },
    };
  },
  methods: {
    create() {
      db.create(this.idea)
      .then((data) => {
        console.log(data);
        this.resetForm();
      })
      .catch(error => {
        console.error(error);
      });

      /*const idea = {
        createdAt: new Date(),
        title: this.title
      };*/
      //this.$store.commit('CREATE_IDEAS', idea);
      //this.$store.dispatch("createIdea", idea); //Je dispatch l'action createIdea
      //this.title = ""; //Après la soumission du formulaire, on reintialise le formulaire à un champ vide
    },
    resetForm(){
    this.idea.title = '';
    }
  },
  
};
</script>

<style lang="scss" scoped></style>
