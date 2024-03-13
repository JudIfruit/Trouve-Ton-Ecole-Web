<template>
  <div class="register">
    <form @submit.prevent="register">
      <h2>Inscription</h2>
      <input type="text" v-model="pseudo" placeholder="Pseudonym" required>
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Mot de passe" required>
      <input type="password" v-model="confirmPassword" placeholder="Confirmez le mot de passe" required>
      <p class="connexion">Vous avez déjà un compte ? <RouterLink to="/login">Connectez-vous.</RouterLink></p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <button type="submit">S'inscrire</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      pseudo: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://localhost:3000/auth/inscription', {
          pseudonyme: this.pseudo,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        });
        // S'assurer que response et response.data existent
        if (response && response.data) {
          console.log(response.data.message);
          this.$router.push('/login');
        } else {
          // Gérer le cas où la réponse n'est pas ce qui est attendu
          console.error('Réponse inattendue du serveur');
        }
      } catch (error) {
        // Vérifier que error.response et error.response.data existent
        if (error.response && error.response.data) {
          // Gérer les erreurs, par ex. afficher un message d'erreur
          this.errorMessage = error.response.data.message || 'Une erreur s\'est produite.';
        } else {
          // Gérer le cas où il n'y a pas de données d'erreur détaillées
          this.errorMessage = 'Une erreur réseau ou serveur est survenue.';
        }
      }
    }
  }
};
</script>

<style scoped>
    @import '@fortawesome/fontawesome-free/css/all.css';
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    *{
        text-decoration: none;
    }

    .error {
        margin-top: 20px;
        color: red;
    }

    .register {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0eaea;
        font-family: 'Roboto', sans-serif;
        height: 100vh;
    }

    form{
        margin-top: 20px;
        background-color: #FFF;
        padding: 40px 60px;
        border-radius: 10px;
        min-width: 300px;
        
    }

    form h2{
        font-weight: 900;
        font-size: 35px;
        color: #eb7371;
        text-align: center;
        margin-bottom: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form input{
        padding: 15px;
        border-radius: 5px;
        border: none;
        background-color: #f2f2f2;
        margin-bottom: 15px;
        outline: none;
    }

    form p.connexion{
        font-size: 14px;
        margin-bottom: 20px;
        color: #878787;
    }

    form p.connexion span{
        color: #eb7371;
    }

    form p.connexion span:hover.underligne{
        text-decoration: underline;
    }

    form button{
        padding: 15px 25px;
        border: none;
        border-radius: 5px;
        font-size: 15px;
        color: #fff;
        background-color: #eb7371;
        outline: none;
        cursor: pointer;
    }
    
</style>