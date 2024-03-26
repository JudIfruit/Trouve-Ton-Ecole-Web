<template>
  <div class="home">

    <!-- Barre de Navigation -->
    <sidebar />

    <!-- Contenu Principal -->
    <section class="main">

      <div class="main-content">
        <h1>Bienvenue sur <a>SupInnov Education</a></h1>
        <h3>Trouvez la meilleure école informatique</h3>

        <div class="btn-box">
          <router-link to="">Questionnaire</router-link>
          <router-link to="">Les Ecoles</router-link>
        </div>
      </div>

    </section>



    <section class="mid-card">

      <div class="mid-container">
        <div class="mid-content">

          <div class="card">
            <div class="card-content">

              <div class="card-image">
                <img src="../assets/images/Ecoles/supdevinci.png" alt="">
              </div>

              <div class="description">
                <div class="name">Sup de Vinci</div>
                <div class="localisation">Bordeaux</div>
              </div>

              <div class="rating">
                <i class='bx bxs-star' ></i>
                <i class='bx bxs-star' ></i>
                <i class='bx bxs-star' ></i>
                <i class='bx bxs-star' ></i>
                <i class='bx bxs-star-half' ></i>
              </div>

              <div class="button">
                <router-link to=""><button>Site Web</button></router-link>
                <router-link to=""><button>Information</button></router-link>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>



    <section class="bot">



    </section>

  </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue';
import 'swiper/swiper-bundle.css';

export default {
  name: "Home",
  components: {Sidebar}
}
</script>

<style scoped>
@import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');
@import url('https://unpkg.com/swiper/swiper-bundle.min.css');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



/*===========================================  Main  ========================================================*/


.main {
  background-color: #f2f2f2;
  background-image: url("../assets/Fond site web droite transparent.png");
  height: 115vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
}

.main-content{
  margin-top: -115px;
  max-width: 700px;
}

.main-content a{
  color: #00E77F;
}

.main-content h1{
  margin-top: 20px;
  font-size: 56px;
  font-weight: 700;
  line-height: 1;
}

.main-content h3{
  margin-top: 30px;
  font-size: 25px;
  font-weight: 700;
  max-width: 550px;
  color: #343a40;
}

.main-content p{
  font-size: 16px;
  margin: 20px 0 40px;
}

.main-content .btn-box{
  display: flex;
  justify-content: space-between;
  width: 345px;
  height: 50px;
}

.btn-box a{
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 50px 15px 0 0;
  width: 250px;
  height: 100%;
  background: #00E77F;
  border: 2px solid #00E77F;
  border-radius: 8px;
  font-size: 19px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  z-index: 1;
  overflow: hidden;
  transition: .5s;
}

.btn-box a:hover{
  color: #00E77F;
}

.btn-box a:nth-child(2){
  background: transparent;
  color: #00E77F;
}

.btn-box a:nth-child(2):hover{
  color: #fff;
}

.btn-box a:nth-child(2)::before{
  background: #00E77F;
}

.btn-box a::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #fff;
  z-index: -1;
  transition: .5s;
}

.btn-box a:hover::before{
  width: 100%;
}

.main-sci{
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 40px;
  width: 200px;
}

.main-sci a{
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid #00E77F;
  border-radius: 50%;
  font-size: 20px;
  color: #00E77F;
  z-index: 1;
  overflow: hidden;
  transition: .5s;
}

.main-sci a::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #00E77F;
  z-index: -1;
  transition: .5s;
}

.main-sci a:hover{
  color: #fff;
}

.main-sci a:hover::before{
  width: 100%;
}




/*=========================================  MIDDLE  ==========================================================*/


.mid-card {
  background-color: #343a40;
  height: 115vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
}

/*===========  CARD ==============*/

.card-image{
  height: 140px;
  width: 140px;
  border-radius: 50%;
  padding: 3px;
  background: #00E77F;
}

.card-image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fff;
}

.card{
  position: relative;
  background: #fff;
  border-radius: 20px;
  margin: 20px 0;
  width: 280px;
}

.card::before{
  content: "";
  position: absolute;
  height: 40%;
  width: 100%;
  background: #00E77F;
  border-radius: 20px 20px 0 0;
}

.card-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  position: relative;
  z-index: 100;
}

.card .description{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  color: #343a40;
}

.card .description .name{
  font-size: 20px;
  font-weight: 600;
}

.card .description .localisation{
  font-size: 15px;
  font-weight: 500;
}

.card .rating{
  display: flex;
  align-items: center;
  margin-top: 18px;
}

.card .rating i{
  font-size: 18px;
  margin: 0 2px;
  color: #00E77F;
}

.card .button{
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.card .button button{
  background: #00E77F;
  outline: none;
  color: #fff;
  padding: 8px  22px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.button button:hover{
  background: #34ce57;
  color: #fff;
}

/*============================================  BOTTOM  =====================================================*/


.bot {
  background-color: #f2f2f2;
  height: 115vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
}


</style>