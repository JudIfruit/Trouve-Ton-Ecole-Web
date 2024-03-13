<template>
    <div class="login">
        <form @submit.prevent="login">
            <h2>Connexion</h2>
            <input type="email" v-model="email" placeholder="Email" required>
            <input type="password" v-model="password" placeholder="Mot de passe" required>
            <p class="inscription">Vous n'avez pas de compte ? <RouterLink to="/register">Inscrivez-vous.</RouterLink></p>
            <button type="submit">Se connecter</button>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/auth/connexion', {
          email: this.email,
          password: this.password
        });
        // Stocker le token JWT retourné pour les futures requêtes authentifiées
        localStorage.setItem('token', response.data.token);
        // Dans votre méthode login, après avoir reçu le token
        document.cookie = `userSession=${response.data.token}; path=/; max-age=3600; Secure`;

        // Rediriger l'utilisateur vers une page protégée ou afficher un succès
        this.$router.push('/');
      } catch (error) {
        // Gérer les erreurs de connexion, par ex. afficher un message d'erreur
        this.errorMessage = error.response.data.message || 'Une erreur s\'est produite lors de la connexion.';
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

    .login {
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

    form p.inscription{
        font-size: 14px;
        margin-bottom: 20px;
        color: #878787;
    }

    form p.inscription span{
        color: #eb7371;
    }

    form p.inscription span:hover.underligne{
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