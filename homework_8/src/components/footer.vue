<template>
  <div class="footer fade-content">
    <div class="desc">
      If you’d like to work together or just talk about anything fun! 🥳
      <br />Connect with me:
    </div>

    <div class="finger">👇</div>

    <!-- open different urls of each added social media icons -->
    <div class="media">
      <div class="media-list">
        <img
          class="media-item"
          v-for="(item, i) in medias"
          :key="i"
          :src="item.icon"
          @click="openWeb(item.url)"
        />
      </div>
    </div>

    <div @click="clickGitHub()" class="right">
      © Designed by Sara | Developed by Sara<br />
      <p class="right-link">https://github.com/sarabai5</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "web-footer",
  data: () => {
    return {
      medias: [
        {
          name: "email",
          icon: "/assets/icons/media_email.png",
          url:
            "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jinfanb@andrew.cmu.edu"
        },
        {
          name: "linkedin",
          icon: "/assets/icons/media_linkedin.png",
          url: "https://www.linkedin.com/in/sara-jinfan-bai/"
        },
        {
          name: "ins",
          icon: "/assets/icons/media_ins.png",
          url: "https://www.instagram.com/sarainthesoda/"
        }
      ],
      active: 0
    };
  },
  methods: {
    openWeb(url) {
      window.open(url);
    },
    clickGitHub() {
      window.open("https://github.com/sarabai5");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  // margin: 221px 0 0 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  // padding: 325px 0 150px;
  padding: 150px 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .desc {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    color: #9281ec;
  }

  .finger {
    margin: 24px 0 29px 0;
    color: #101010;
    font-size: 36px;
    font-family: "AppleColorEmoji", serif;
    line-height: 36px;
    text-align: center;
  }

  .media {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &-title {
      margin: 0 0 0 -234px;
      width: 234px;
      color: #101010;
      font-size: 24px;
      font-family: "Nunito", sans-serif;
      font-weight: 700;
      line-height: 36px;
      text-align: left;
    }

    &-list {
      width: 190px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &-item {
      cursor: pointer;
      width: 40px;
      height: 40px;
    }
  }

  .right {
    margin: 90px 0 0 0;
    position: relative;
    color: #101010;
    font-size: 18px;
    font-family: "AndaleMono", monospace;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    cursor: pointer;

    &-link {
      text-decoration: underline;
    }
  }
}
</style>
