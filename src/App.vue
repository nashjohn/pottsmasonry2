<template>
  <div class="mobilemen" v-if="seen">
      <router-link v-on:click="seen = !seen" to="/">HOME</router-link>
      <router-link v-on:click="seen = !seen" to="/services">SERVICES</router-link>
      <router-link v-on:click="seen = !seen" to="/gallery">GALLERY</router-link>
      <router-link v-on:click="seen = !seen" to="/contact">CONTACT</router-link>
  </div>
  <nav>
    <img class="logo" src="@/assets/pottslogosm.gif"/>
    <div class="alinks">
      <router-link to="/">HOME</router-link>&nbsp;&nbsp;
      <router-link to="/services">SERVICES</router-link>&nbsp;&nbsp;
      <router-link to="/gallery">GALLERY</router-link>&nbsp;&nbsp;
      <router-link to="/contact">CONTACT</router-link>&nbsp;&nbsp;
    </div>
    <div class="menubars">
      <p v-on:click="seen = !seen">Menu</p>
      <font-awesome-icon icon="fa-solid fa-block-brick" />
    </div>
  </nav>
  <router-view/>
  <footer>
    <a class="insta" href="https://www.instagram.com/pottsmasonry/" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
    <div id="copyright">&#169; 2023</div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      seen: false
      }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0.5%;

  a {
    text-decoration: none;
    font-weight: 300;
    color: #004a8d;

    &.router-link-exact-active {
      color: #d31144;
    }
  }
  height: 56px;
  display: flex;
  align-items: center;
  width: 100%;
  align-content: center;
  box-shadow: 0px 0.5px 8px -2px #F0F0F0;
  top: 0px;
  left: 0px;

  div.alinks {
    align-content: center;
    display: flex;
    align-items: center;
    text-align: center;
    width: 100vw;
    justify-content: center;
    margin-left: -90px;
  }
}
html {
  padding: 0px;
}
body {
  margin: 0px;
}
footer {
  position: relative;
  bottom: 0px;
  width: 100vw;
  #copyright {
    font-size: 11px;
  }
  background-color:none;
  color:#d31144;
  a.insta {
    font-size: 25px;
    color:#2c3e50;
  }
  h3 {
    margin-bottom: 0;
  }
}
img.logo {
  float: left;
  margin: 10px;
}
@media only screen and (max-width: 600px) {
  nav div.alinks {
    display: none;
    margin-right: -10000;
  }
  div.menubars {
  float:right;
  position: absolute;
  right: 0;
  margin-right:15px;
  font-size: 15px;
  color:#004a8d;
  font-weight: 200;
}
  div.mobilemen {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: #f0f0f0;
    display:flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    gap: 45px;
    z-index: 100;
  } 
  .follow {
    display:none;
  }
}
@media only screen and (min-width: 600px) {
  div.menubars {
  float:right;
  position: absolute;
  right: 0;
  margin-right:15px;
  font-size: 25px;
  display: none;
}
}

</style>
