<template>
  <el-row id="app">
    <el-col :span="10" :offset="7">
      <el-row class="wrapper">
        <el-row class="header-logo">
          <el-col :span="5" :offset="1">
            <div class="logo">
             
            </div>
          </el-col>
        </el-row>
        <el-row class="header-tv">
          <el-col :span=4 :offset="3">
            <el-image :src="logoUrl" :fit="contain">

            </el-image>
          </el-col>
          <el-col :span="4" :offset="8">
            <h1>看电视</h1>
            <h4>just for fun</h4>
          </el-col>
        </el-row>
        <br>
        <br>
        <el-row class="nav">
          <el-col>
            <router-link to="/">
              <el-link> 首页 </el-link>
            </router-link>
            |
            <router-link to="/about">
              <el-link>关于 </el-link>
            </router-link>
          </el-col>
        </el-row>

        <br>
        <router-view />
        <el-row class="footer">
          power by .net5.0
        </el-row>
      </el-row>
    </el-col>
  </el-row>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3%;
}

.nav a {
  text-decoration: none;
}

.wrapper {
  background-color: white;
  padding-top: 80px;
}

/* #nav {
  padding: 30px;
} */

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

<script>
export default {
  data(){
    return{
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      logoUrl:require('./assets/logo.jpg')
    }
  }
}
</script>