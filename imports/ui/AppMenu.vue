<template>
  <div class="app-menu">
    <router-link :to="{ name:'home' }" exact>Home</router-link>
    <router-link :to="{ name:'page1' }">Page 1</router-link>
    <router-link :to="{ name:'page2' }">Page 2</router-link>
  </div>
</template>

<style scoped>
.app-menu {
  margin: 32px 0;
  text-align: center;
}
.app-menu a {
  display: inline-block;
  padding: 6px;
  margin: 0 6px;
  border-radius: 3px;
}
.app-menu a.v-link-active {
  background: #40b883;
  color: white;
}
</style>
