<template>
  <nav>
    <img class="logo" src="@/assets/pottslogosm.gif"/>
    <div class="alinks">
      <font-awesome-icon icon="fa-solid fa-house-user" />
      <router-link to="/">Home</router-link>
      <font-awesome-icon icon="fa-solid fa-trowel-bricks" />
      <router-link to="/services">Services</router-link>
      <font-awesome-icon icon="fa-solid fa-image" />
      <router-link to="/gallery">Gallery</router-link>
      <font-awesome-icon icon="fa-solid fa-address-book" />
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
  <router-view/>
  <footer>
    <a href="https://www.instagram.com/pottsmasonry/" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
    <div id="copyright">&#169; 2023</div>
  </footer>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0.5%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  height: 56px;
  display: flex;
  align-items: center;
  width: 99%;
  align-content: center;
  box-shadow: 0px 0.5px 8px -2px #F0F0F0;
  top: 0px;
  left: 0px;

  div.alinks {
    align-content: center;
    display: flex;
    align-items: center;
    text-align: center;
  }
}
html {
  padding: 0px;
}
body {
  margin: 0px;
}
footer {
  position: absolute;
  bottom: 0px;
  width: 100vw;
  #copyright {
    font-size: 11px;
  }
}
</style>
