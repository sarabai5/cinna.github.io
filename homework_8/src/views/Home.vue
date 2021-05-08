<template>
  <div class="home">
    <div class="head">
      <!-- <div class="desc">and her fun facts</div> -->
      <div class="name">{{ name }}</div>
      <div class="slogan">
        I’m a passionate UX/product designer with
        <span class="purpli">work experience</span>, currently studying
        <a class="link" href="https://www.cmu.edu/iii/degrees/miips/index.html"
          ><span class="purpli">Product Design Innovation</span>
        </a>
        at
        <a class="link" href="https://www.cmu.edu/iii/degrees/miips/index.html">
          <span class="purpli">Carnegie Mellon University</span></a
        >. Recently I’ve been designing dashboard
        <span class="purpli">interface UI</span>
        and
        <span class="purpli">user flows</span>
        for drug users at a start-up. Feel free to explore my projects 👇 and
        reach out.
      </div>
      <div class="desc">
        #empathetic #value-driven #change-maker #no-stereotype
      </div>
      <div class="buttons">
        <button class="buttons-btn buttons--l" @click="clickMore()">
          More About Me.
        </button>
        <button class="buttons-btn buttons--r" @click="clickEmail()">
          Email Me
        </button>
      </div>
    </div>
    <Projects />
  </div>
</template>

<script>
import Projects from "@/components/projects.vue";

export default {
  name: "Home",
  data: () => {
    return {
      name: "",
      wordsHandler: null,
      typeHandler: null
    };
  },
  components: {
    Projects
  },
  created() {
  },
  mounted() {
    this.typewriter("Hi, I’m Sara Bai :)");

    this.showWords()
  },
  methods: {
    //home page showing purple words one by one
    showWords() {
      let words = document.getElementsByClassName("purpli");
      let index = 0;
      this.wordsHandler = setInterval(() => {
        if (index >= words.length) {
          this.clearWordsHandler();
          return;
        }

        document
            .getElementsByClassName("purpli")
            [index].setAttribute("class", "purpli purpli-show");
          index++;
        }, 500);
    },
    clearWordsHandler() {
      if (this.wordsHandler) {
        clearInterval(this.wordsHandler);
        this.wordsHandler = null;
      }
    },

    // typing out the welcoming sentence "Hi, I'm Sara Bai"
    typewriter(text) {
      this.clearTypeHandler();

      let i = 1;
      this.typeHandler = setInterval(() => {
        if (i > text.length) {
          this.clearTypeHandler();
          return;
        }

        this.name = text.substring(0, i);

        i++;
      }, 100);
    },
    clearTypeHandler() {
      if (this.typeHandler) {
        clearInterval(this.typeHandler);
        this.typeHandler = null;
      }
    },
    clickMore() {
      this.$router.push("/Resume");
    },
    clickEmail() {
      window.open(
        "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jinfanb@andrew.cmu.edu"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.head {
  // margin: 0 0 8px 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 40px 117px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;


  .name {
    margin: 60px 0 0 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 70px;
    line-height: 82px;
    color: #826feb;
  }

  .slogan {
    margin: 37px 0 0 0;
    width: 1213px;
    height: 248px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 62px;
    color: #101010;
    text-align: left;
  }

  .purpli {
    white-space: pre;
    color: #826feb;
    opacity: 0;
  }

  .purpli-show {
    animation: 500ms ease-in-out 0s normal forwards 1 running purpliAnimation;
  }

  @keyframes purpliAnimation {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .link {
    text-decoration: none;
  }

  .desc {
    margin: 54px 0 0 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 62px;
    color: #58595b;
  }

  .buttons {
    margin: 30px 0 0 0;
    height: 58px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &-btn {
      box-sizing: border-box;
      height: 100%;
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
      background-color: #ffffff;
      border-radius: 20px;
      border: 1px solid #826feb;
      color: #826feb;
      font-size: 18px;
      font-family: "AndaleMono", monospace;
      text-align: center;
    }

    &--l {
      width: 206px;
    }

    &--r {
      margin: 0 0 0 40px;
      width: 155px;
    }
  }
}
</style>
