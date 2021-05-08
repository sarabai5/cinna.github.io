<template>
  <div
    class="turnpage"
    :style="{
      'justify-content':
        previous && next
          ? 'space-between'
          : previous
          ? 'flex-start'
          : 'flex-end'
    }"
  >
    <button v-if="previous" class="turnpage-item" @click="clickItem(previous)">
      <!-- Graphic -->
      <div class="arrow">
        <svg width="100%" height="100%" viewBox="0,0,15,28">
          <path
            d="M 14 1 L 1 13.5 L 14 27"
            fill="transparent"
            stroke="rgba(146,129,236,1)"
            stroke-miterlimit="10"
          ></path>
        </svg>
      </div>
      <div class="turnpage-title" style="margin: 0 0 0 10px ">
        Previous: {{ previous.title }}
      </div>
    </button>
    <button v-if="next" class="turnpage-item" @click="clickItem(next)">
      <!-- Graphic -->

      <div class="turnpage-title" style="margin: 0 10px 0 0">
        Next: {{ next.title }}
      </div>
      <div class="arrow">
        <svg width="100%" height="100%" viewBox="0,0,15,28">
          <path
            d="M 1 1 L 14 13.5 L 1 27"
            fill="transparent"
            stroke="rgba(146,129,236,1)"
            stroke-miterlimit="10"
          ></path>
        </svg>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "turnpage",
  props: {
    previous: {
      type: Object,
      default: null
    },
    next: {
      type: Object,
      default: null
    }
  },

  //go to next project
  methods: {
    clickItem(item) {
      if (item.link) {
        window.open(item.link);
      } else {
        this.$router.push({
          name: item.name
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.turnpage {
  margin: 100px 0 0 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0 90px;
  // padding: 325px 0 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &-item {
    height: 58px;
    box-sizing: border-box;
    padding: 0 20px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
    background-color: #ffffff;
    border-radius: 20px;
    border: 1px solid #826feb;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-title {
    color: #826feb;
    font-size: 18px;
    font-family: "AndaleMono", monospace;
    text-align: center;
    letter-spacing: -1px;
  }

  .arrow {
    position: relative;
    width: 15px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
