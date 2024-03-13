<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <RouterLink to="/">
        <img src="@/assets/logo.png" alt="SupInnovEducation Logo" class="logo"/>
      </RouterLink>
    </div>
    <div class="navbar-links">
      <RouterLink to="/ecole">École</RouterLink>
      <RouterLink to="/membre">Membre</RouterLink>
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
  :root {
  --green: #00E77F;
  --white: #fff;
  --light-white: #aaa;
  --light-gh: #4b4b4b;
}
  
  *{
    font-family: 'Rubik', sans-serif;
    margin: 0; padding: 0;
    box-sizing: border-box;
    outline: none; border: none;
    text-decoration: none;
    text-transform: capitalize;
  }
  
  *::selection{
    background-color: var(--green);
    color: #3d3d3d;
  }
  
  .navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #343a40;
  padding: 1px 30px 1px;
  }

  .navbar-brand .logo {
  height: 50px; 
  }

  .navbar a {
    text-decoration: none;
    color: #fff;
    padding: 10px 25px;
  }

  .navbar-links a:hover{
    background-color: #00E77F;
    color: #fff;
    border-radius: 15px;;
  }

  .navbar-login a {
    display: flex;
    align-items: center;
  }

  .navbar-login a:hover {
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
