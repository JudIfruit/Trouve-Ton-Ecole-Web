<template>
  <div class="home">

    <!-- Barre de Navigation -->
    <sidebar />

    <!-- Contenu Principal -->
    <div class="content">
      <h1>Bienvenue sur Notre Site</h1>
      <p>Ceci est la page d'accueil de notre application. Naviguez à travers les liens pour découvrir plus.</p>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue';

export default {
    name: "Home",
    components: {Sidebar}
}
</script>

<style scoped>

.content {
  text-align: center;
  margin-top: 2rem;
}

</style>