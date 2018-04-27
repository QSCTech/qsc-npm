<template>
<v-app light>
    <v-toolbar class="deep-purple darken-1">
        <img src="static/img/qsc-logo.png" alt="Vuetify.js" height="50">
        <!-- <p>求是潮NPM私有云</p> -->
      <v-toolbar-title v-text="title" class="white--text"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax src="static/img/1.jpg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <!-- <img src="assets/qsc-logo.png" alt="Vuetify.js" height="200"> -->
            <h1 class="white--text mb-2 display-1 text-xs-center">快速开始</h1>
            <code style="font-family: Monaco, Consolas;background-color:rgba(0,0,0,0.6);" class="white--text mb-2 display-1 text-xs-center">npm set registry https://npm.zjuqsc.com</code>
            <div class="subheading mb-3 text-xs-center"><a class="white--text" href="https://github.com/QSCTech" target="_blank">@求是潮技术研发中心</a></div>
            <v-btn
              class="pink lighten-1 mt-5"
              dark
              large
              @click="inside()"
            >
              开始探索
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <!-- <h1 class="headline">快速开始</h1>
              <span class="subheading">
              	npm set registry http://10.100.71.134:4873<br>
              </span> -->
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">私有包管理仓库</div>
                    </v-card-title>
                    <v-card-text>
                      这意味着你只需要进行简单的注册，便可以随意地在求是潮npm私有源上发布你的模块，并且让他人能够随意地使用你发布的这些包。<br><br><br>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">自动模块缓存</div>
                    </v-card-title>
                    <v-card-text>
                      求是潮npm私有源会自动的对你install的模块进行缓存，以加快之后模块的安装速度。并且，当未在缓存中发现指定模块时，求是潮npm私有源会自动的像taobao源发起请求，并把得到的包转发给你，这也比使用npm默认源要快很多。
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">完全开源</div>
                    </v-card-title>
                    <v-card-text>
                      所有的代码完全开源在求是潮GitLab上，欢迎对其进行维护。<br><br><br><br>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <!-- <v-parallax> -->
          <v-layout column align-center justify-center>

            <div class="headline black--text mb-3 text-xs-center">如何使用</div>
            <p class="headline black--text mb-3 text-xs-center">通过求是潮npm源安装一个包</p>
            <pre v-highlightjs="sourcecode">
            <code class="bash">
   npm install koa --registry=https://npm.zjuqsc.com  
            </code>
            </pre>
            <p class="headline black--text mb-3 text-xs-center">在求是潮npm源上注册并发布包</p>
            <pre v-highlightjs="sourcecode">
            <code class="bash">
  npm adduser --registry=https://npm.zjuqsc.com  
  npm publish --registry=https://npm.zjuqsc.com  
            </code>
            </pre>
            <p class="headline black--text mb-3 text-xs-center">我们更推荐你使用nrm来灵活的切换到求是潮源</p>
            <pre v-highlightjs="sourcecode">
            <code class="bash">
  npm i nrm -g --registry=https://npm.zjuqsc.com  
  nrm add qsc https://npm.zjuqsc.com  
  nrm ls  
  nrm use qsc  
            </code>
            </pre>
           
          </v-layout>
        <!-- </v-parallax> -->
      </section>

      <br><br><br>
      <section>
        <!-- <v-parallax> -->
          <v-layout column align-center justify-center>
            <div class="headline black--text mb-3 text-xs-center">让潮人拥有自己的Node SDK</div>
            <em>欢迎对本项目发起PR</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="https://github.com/QSCTech/qsc-npm"
            >
              项目GitHub地址
            </v-btn>
          </v-layout>
        <!-- </v-parallax> -->
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">关于求是潮NPM私有源</div>
                </v-card-title>
                <v-card-text>
                  这是一个求是潮私有的包管理仓库，里面存有各种求是潮私有SDK以及缓存过的npm常用包。欢迎进行探索。 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">联系我们</div>
                </v-card-title>
                <v-card-text>
                  @求是潮技术研发中心
                </v-card-text>
                <v-list class="transparent">
                  
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>紫金港小剧场B217</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>tech@zjuqsc.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="white">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="black--text ml-3">

              基于Vue以及Verdaccio项目构建.
              Build by <a class="black--text" href="https://laphets.com" target="_blank">裸犇</a>.
              <a href="https://github.com/QSCTech" target="_blank">@求是潮技术研发中心</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>


<script>
export default {
    data() {
        return {
            title: '求是潮npm私有源'
        }
    },
    methods: {
      inside() {
        this.$router.push({name: 'list'});
      }
    }
};
</script>

<style>
.bash {
  color: aliceblue;
  font-family: Monaco, Consolas;
  background-color:rgba(0,0,0,0.6);
  font-size: 100%
}
a{text-decoration:none}
</style>
