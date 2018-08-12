<template>
  <div id="app">
    <top/>
    <keep-alive include="Home">
        <router-view></router-view>   
    </keep-alive>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import Top from "./components/Top";
import NavBar from "./components/Nav";
export default {
  name: 'App',
  components: {
    Top,NavBar
  }
}
</script>

<style>

</style>
