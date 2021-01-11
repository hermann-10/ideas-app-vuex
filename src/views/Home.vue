<template>
  <div class="home">
    <h1>Welcome to Ideas.io</h1>
    <IdeaCreate />
    <Ideas />
  </div>
</template>

<script>
import IdeaCreate from "../components/IdeaCreate.vue";
import Ideas from "@/components/Ideas";

export default {
  name: "Home",
  components: {
    Ideas,
    IdeaCreate
  }
};
</script>
