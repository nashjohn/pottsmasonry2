<template>
  <nav>
    <img class="logo" src="@/assets/pottslogosm.gif"/>
    <div class="alinks">
      <router-link to="/">Home</router-link> | 
      <router-link to="/services">Services</router-link>
      <router-link to="/gallery">Gallery</router-link> | 
      <router-link to="/contact">Contact</router-link> | 
      
    </div>
  </nav>
  <router-view/>
  <footer>
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
