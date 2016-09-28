<template>
  <div class="page1">
    <h1>Page 1</h1>
    <p>You are in the first page</p>
    <nav>
      <router-link :to="{ name:'page1a' }">Page A</router-link>
      <router-link :to="{ name:'page1b' }">Page B</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
nav {
  text-align: center;
  margin: 12px 0;
  padding: 12px 0;
  border-top: solid 1px #40b883;
  border-bottom: solid 1px #40b883;
}
nav a {
  padding: 6px;
  border-radius: 3px;
}
nav a.v-link-active {
  background: #40b883;
  color: white;
}
</style>
