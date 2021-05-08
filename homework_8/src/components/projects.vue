<template>
  <div class="projects">
    <div
      class="project"
      v-for="(item, i) in projects"
      :key="i"
      :style="{ opacity: item.opacity || 1 }"
    >
      <div class="head">
        <div class="title">{{ item.title }}</div>
      </div>

      <div
        class="project-content"
        :style="{ background: item.background }"
        @mouseover="onHover(i)"
        @mouseout="onOut(i)"
      >
        <div
          v-show="hoverIndex == i"
          class="project-prefix"
          :style="{ background: item.color || item.background }"
        ></div>
        <div class="project-content-l">
          <div class="project-label">{{ item.label }}</div>
          <div class="project-name">{{ item.name }}</div>
          <div class="project-desc">{{ item.desc }}</div>
          <button
            v-if="item.button"
            class="project-button"
            @click="clickItem(item)"
          >
            {{ item.button }}
          </button>
        </div>

        <div class="project-content-r">
          <img
            v-if="item.img"
            class="project-img"
            :class="{ 'project-img--hover': item.gif && hoverIndex == i }"
            :src="item.img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects",
  data: () => {
    return {
      hoverIndex: -1,
      projects: [
        {
          title: "FURGO PET",
          label: "Know What Your Pet’s Up To",
          name: "PET  TRACKER | MONITOR | APP",
          desc: "App Design | IoT Design | User Research",
          button: "Discover",
          img: "/assets/works/covers/cover1.png",
          background: "#FEDCCC",
          path: "/works/FurGo",
          isHover: false
        },
        {
          title: "CINNAMON ROLL BAKERY",
          label: "Customize Rolls with Fun",
          name: "BAKERY SHOP WEBSITE",
          desc: "Web Design | User Testing | Usability Test | Front-End Coding",
          button: "Go Play",
          img: "/assets/works/covers/cover2.gif",
          link:
            "https://sarabai5.github.io/cinna.github.io/homework_6/menu.html",
          background: "#8393EC",
          isHover: false
        }
      ]
    };
  },
  methods: {
    clickItem(item) {
      if (item.path) this.$router.push(item.path);
      else window.open(item.link);
    },
    onHover(index) {
      this.hoverIndex = index;
    },
    onOut() {
      this.hoverIndex = -1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projects {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 0 117px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}

.project {
  position: relative;
  margin: 45px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &-prefix {
    z-index: -1;
    position: absolute;
    width: 117px;
    height: 100%;
    top: 0;
    left: -117px;
    animation: moveIn 0.5s ease-in-out 0s 1 normal forwards running;
  }

  @keyframes moveIn {
    0% {
      left: 0;
    }
    100% {
      left: -117px;
    }
  }

  @keyframes moveOut {
    100% {
      left: 0;
    }
  }

  .head {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .title {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 26px;
      line-height: 30px;
      letter-spacing: -0.02em;
      color: #101010;
    }
  }

  &-content {
    position: relative;
    margin: 12px 0 0 0;
    width: 1323px;
    height: 550px;
    box-sizing: border-box;
    padding: 0 0 0 67px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-l {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  &-label {
    max-width: 589px;
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    color: #ffffff;
  }

  &-name {
    margin: 10px 0 0 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.02em;
    color: #101010;
  }

  &-desc {
    margin: 20px 0 0 0;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #58585b;
  }

  &-button {
    margin: 48px 0 0 0;
    width: 160px;
    height: 62px;
    background-color: #ffffff;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 100px;
    font-family: Andale Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #826feb;
  }

  &-img {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: 100%;

    &--hover {
      opacity: 0;
    }
  }
}
</style>
