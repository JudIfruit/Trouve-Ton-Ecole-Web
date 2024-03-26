<template>
  <nav class="navbar">
    <div class="navbar-brand">
        <img src="@/assets/logo.png" alt="SupInnovEducation Logo" class="logo"/>
    </div>
    <div class="navbar-links">
      <RouterLink to="/">Acceuil</RouterLink>
      <RouterLink to="/ecole">Écoles</RouterLink>
      <RouterLink to="/membre">Membres</RouterLink>
      <RouterLink to="/documentation">Documentation</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
    </div>
    <div class="navbar-login">
      <template v-if="isLoggedIn">
        <div class="user-info">
          <img :src="userIcon" alt="Profile" class="profile-image">
          <button @click="logout">Déconnexion</button>
        </div>
      </template>
      <template v-else>
        <RouterLink to="/login">
          <i class="fas fa-sign-in-alt"></i> Connexion
        </RouterLink>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      // Les valeurs ici devraient être dynamiquement mises à jour selon l'utilisateur connecté
      user: null,
      userIcon: ('@/assets/default-profile.png'), // Assurez-vous d'avoir cette image dans vos assets
    };
  },
  computed: {
    isLoggedIn() {
      // Utilisez un état global ou vérifiez le localStorage pour la présence du token
      return !!localStorage.getItem('token');
    }
  },
  methods: {
    logout() {
      // Logique de déconnexion
      localStorage.removeItem('token'); // Supprime le token du localStorage
      this.$router.push('/'); // Redirige vers la page de connexion
    }
  }
}
</script>

<style lang="scss" scoped>
  
  *{
    font-family: 'Rubik', sans-serif;
    margin: 0; padding: 0;
    box-sizing: border-box;
    outline: none; border: none;
    text-decoration: none;
    text-transform: capitalize;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #343a40;
    padding: 15px 30px 15px 30px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }



  .navbar-brand .logo {
  height: 50px;
  }

  .navbar a {
    align-items: center;
    text-decoration: none;
    color: #fff;
    margin-inline: 15px;
    padding: 10px 25px;
    font-weight: 600;

  }

  .navbar-links a:hover{
    background-color: #00E77F;
    color: #ffff;
    border-radius: 15px;
  }

  .router-link-active{
    background-color: #00E77F;
    color: #fff;
    border-radius: 15px;;
  }

  .navbar-login a {
    display: flex;
    align-items: center;
  }

  .navbar-login  {
    background-color: #00E77F;
    color: #fff;
    border-radius: 5px;
  }

  .fas {
    margin-right: 0.5rem;
  }

  .user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-image {
  width: 40px; 
  height: 40px;
  border-radius: 50%;
}
</style>
