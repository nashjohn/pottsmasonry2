<template>
  <nav>
    <img class="logo" src="@/assets/pottslogo.jpg"/>
    <div class="alinks">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/gallery">Gallery</router-link> | 
      <router-link to="/contact">Contact</router-link> | 
      <router-link to="/services">Services</router-link> | 
      <router-link to="/press">Press</router-link> | 
      <router-link to="/cbovens">CB Ovens</router-link>
    </div>
  </nav>
  <router-view/>
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
  padding: 5px;

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
  width: 100%;
  align-content: center;

  div.alinks {
    align-content: center;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    text-align: center;
  }
}
</style>
