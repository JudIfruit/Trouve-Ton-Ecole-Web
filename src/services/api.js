import axios from 'axios';

// Créez une instance Axios pour vos requêtes API
const api = axios.create({
  baseURL: 'http://localhost:3000/', // Remplacez par l'URL de votre API
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Ajoutez une fonction pour définir le token JWT dans l'en-tête "Authorization"
export function setAuthToken(token) {
  if (token) {
    // Si un token est fourni, ajoutez-le dans l'en-tête "Authorization" avec le préfixe "Bearer"
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Si le token est nul, supprimez l'en-tête "Authorization"
    delete api.defaults.headers.common['Authorization'];
  }
}

// Exportez l'instance Axios configurée pour l'API

export default api;
