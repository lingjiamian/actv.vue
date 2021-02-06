<template>
  <el-row class="home">
    <el-row class="tv-title">
      <el-col :span="5" :offset="1">
        <h2>鬼灭之刃21</h2>
      </el-col>
    </el-row>
    <br />
    <el-row class="tv-info">
      <el-col :span="3" :offset="1"
        ><i class="el-icon-date"></i>2021/1/15</el-col
      >
      <el-col :span="2"><i class="el-icon-chat-dot-round"></i>17</el-col>
      <el-col :span="2"><i class="el-icon-view"></i>123</el-col>
    </el-row>
    <br />
    <br />

    <div id="dplayer1"></div>

<br>
<br>
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
import Vue from 'vue'
import CommentEditor from 'comment-message-editor'

Vue.component(CommentEditor.name, CommentEditor)

export default {
  name: "Home",
  components: {},
  data(){
    return{
      textarea:"",
      input:"",
    }
  },
  mounted() {
    const dp = new DPlayer({
      container: document.getElementById("dplayer1"),
      
      video: {
        url: require("/12.mp4"),
        
      },
    });
    console.log(dp);
  },

  methods:{
    submitComment(comment){
      console.log(comment);
    }
  }
};
</script>

