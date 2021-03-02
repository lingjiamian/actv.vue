<template>
  <el-row class="home">
    <el-row class="tv-title">
      <el-col :span="5" :offset="1">
        <h2>{{ bangumi.title }}</h2>
      </el-col>
    </el-row>
    <el-row class="tv-info">
      <el-col :span="3" :offset="1"
        ><i class="el-icon-date"></i>{{ bangumi.createTime }}</el-col
      >
      <el-col :span="2"><i class="el-icon-chat-dot-round"></i>17</el-col>
      <el-col :span="2"
        ><i class="el-icon-view"></i>{{ bangumi.viewCount }}</el-col
      >
    </el-row>
    <br />

    <div id="dplayer1">
      <vue-baberrage
        :isShow="barrageIsShow"
        :barrageList="barrageList"
        :isLoop="barrageIsLoop"
      >
      </vue-baberrage>
    </div>

    <br />
    <!-- <el-row class="tv-comment">
      <comment-editor @submit="submitComment"></comment-editor>
    </el-row> -->
  </el-row>
</template>

<style>
.tv-info {
  font-size: 0.8em;
  color: #606266;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import DPlayer from "dplayer";
import Vue from "vue";
import CommentEditor from "comment-message-editor";
import { vueBaberrage } from "vue-baberrage";
import { MESSAGE_TYPE } from "vue-baberrage";

Vue.use(vueBaberrage);
Vue.component(CommentEditor.name, CommentEditor);

export default {
  name: "Home",
  components: {},
  data() {
    return {
      totalPage: 1,
      bangumiId: 1,
      bangumi: {},
      currentId: 0,
      msg: "今晚打老虎",
      barrageIsShow: true,
      barrageIsLoop: false,
      barrageList: [],
    };
  },
  mounted() {
    // this.getData();
    // var that = this;
    // console.log(that.bangumi.videoUrl);
    // const dp = new DPlayer({
    //   container: document.getElementById("dplayer1"),
    //   video: {
    //     url: require(this.bangumi),
    //   },
    // });
    // console.log(dp);
    // console.log(this);
  },

  created() {
    // this.getData();

    this.getData();
    this.addBarrageList();
    // var that = this;
    // console.log(that.bangumi.videoUrl);
  },

  methods: {
    submitComment(comment) {
      console.log(comment);
    },
    addBarrageList() {
      this.barrageList.push({
        id: this.currentId++,
        msg: this.msg,
        time: 5,
        type: MESSAGE_TYPE.NORMAL,
      });
      console.log(this.barrageList);
    },
    getData() {
      // console.log(this.bangumiId);
      this.$api.get("bangumi/" + this.bangumiId, null, (r) => {
        this.bangumi = r.response;
        console.log(this.bangumi);
        const that = this;
        console.log(that.bangumi.videoUrl);
        const dp = new DPlayer({
          container: document.getElementById("dplayer1"),
          lang:"zh-cn",
          video: {
            url: require(`../assets/${that.bangumi.videoUrl}`),
          },
          danmaku: {
            id: this.bangumiId,
            api: "http://localhost:9081/api/Danmaku/",
            maximum: 1000,
            user: "DIYgod",
            bottom: "15%",
            unlimited: true,
          },
        });
        // dp.danmaku.send(
        //   {
        //     text: "dplayer is amazing",
        //     color: '#ffffff'
        //   },
        //   function () {
        //     console.log("success");
        //   }
        // );
        console.log(dp);
      });
    },
  },
};
</script>

