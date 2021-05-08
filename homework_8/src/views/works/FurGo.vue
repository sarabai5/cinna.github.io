<template>
  <div class="page">
    <div class="head">
      <div class="subtitle">Know What Your Pet’s Up To and No More Worries</div>
      <div class="title">
        <span class="title--orange">FurGO</span> PET TRACKER | MONITOR | APP
      </div>
      <div class="tip">App Interaction Design | IoT Design | User Research</div>
    </div>

    <Turnpage :next="next"></Turnpage>
  </div>
</template>

<script>
import Turnpage from "@/components/turnpage.vue";
export default {
  name: "MovingBoxes",
  components: {
    Turnpage
  },
  data: () => {
    return {
      previous: null,
      next: {
        title: "BAKERY SHOP WEBSITE",
        link: "https://sarabai5.github.io/cinna.github.io/homework_5/menu.html"
      },
      handler: null
    };
  }
};
</script>

<style lang="scss" scoped>
.page {
  text-align: left;
  background-color: #ffffff;
  padding: 0 0 100px 0;
}

.head {
  position: relative;
  width: 100%;
  height: auto;
  padding: 80px 0 52px 0;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: center;

  .subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #58595b;
  }

  .title {
    // margin: 20px 0 0 0;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #101010;

    &--orange {
      color: #f1896d;
    }
  }

  .tip {
    margin: 117px 0 0 0;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #58585b;
  }
}

</style>
