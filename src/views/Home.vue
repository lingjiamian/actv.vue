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
      <div id="my-comment-stage" class="container"></div>

    </div>

    <br />
    <el-row class="tv-comment">
      <comment-editor @submit="submitComment"></comment-editor>
    </el-row>
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

Vue.component(CommentEditor.name, CommentEditor);


export default {
  name: "Home",
  components: {},
  data() {
    return {
      textarea: "",
      input: "",
      totalPage: 1,
      bangumiId: 1,
      bangumi: {},
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
    // var that = this;
    // console.log(that.bangumi.videoUrl);
    
  },

  methods: {
    submitComment(comment) {
      console.log(comment);
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
          video: {
            url: require(`../assets/${that.bangumi.videoUrl}`),
          },
        });
        console.log(dp);
        
      });
    },
  },
};
</script>

