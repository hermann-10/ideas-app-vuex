<template>
  <div>
    <h1>Ideas</h1>
    <ul>
      <draggable>
        <Idea v-for="idea in allIdeas" :key="idea.id" :item="idea" />
      </draggable>
    </ul>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Idea from "@/components/Idea";
export default {
  components: {
    draggable,
    Idea
  },

  computed: {
    allIdeas() {
      return this.$store.getters.allIdeas;
    }
  }
};
//Possibilité d'éxécuter en ligne de commande : "npm run lint --fix", pour que les certaines erreures soient corrigé automatiquement.
</script>

<style lang="scss" scoped></style>
