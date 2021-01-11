<template>
    <div>
        <form @submit.prevent="create"> <!-- Eviter le rechargement complet de la page avec ".prevent"-->
            <label for="idea-title">Idea's title</label><br>
            <input type="text" id="idea-title" v-model="title" /> <!-- v-model permet de récupérer la valeur saisie -->
            <button type="submit">Create</button>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: ""
            }
        },
        methods: {
            create() {
                const idea = {
                    createdAt: new Date(),
                    title: this.title
                };
                //this.$store.commit('CREATE_IDEAS', idea);
                this.$store.dispatch("createIdea", idea) //Je dispatch l'action createIdea
                this.title = "" //Après la soumission du formulaire, on reintialise le formulaire à un champ vide
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>