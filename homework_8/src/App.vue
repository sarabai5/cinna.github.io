<template>
  <div id="app" :style="bodystyle">
    <Nav :outstyle="navstyle" />
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
import Footer from "@/components/footer.vue";


export default {
  name: "App",
  data() {
    return {
      bodystyle: "",
      navstyle: ""
    };
  },
  components: {
    Nav,
    Footer
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;400;600&family=Nunito:wght@200;400;600;700&display=swap&family=VT323&display=swap&family=Noto+Sans&family=Roboto:wght@700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition-duration: 4s;
}

body {
  margin: 0;
  font-family: "Nunito", sans-serif;
}

button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: none;
}

//projects button animation 
button:hover {
  animation: 200ms ease-in-out 0s normal forwards 1 running buttonHover;
}

@keyframes buttonHover {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
  }
}

.page {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

</style>
