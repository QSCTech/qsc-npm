<template>
<v-layout justify-center align-center>
<div v-if="loaded" v-html="body">

</div>

<v-progress-circular v-else indeterminate :size="70" :width="5" color="red"></v-progress-circular>
<v-snackbar
      :timeout="6000"
      :color="'success'"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >
      加载成功啦~
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
</v-layout>
</template>

<script>
import api from "../axios";
export default {
    data() {
        return {
            body: '',
            loaded: false,
            snackbar: false            
        }
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            api.get_package_detail(this.$route.params.name).then(res => {
                if(res.data) {
                    this.loaded = true;
                    this.snackbar = true;
                    
                }
                this.body = res.data;
            })
        }
    }
}
</script>

<style>

h1,p,h2,h3,li,a {
    font-family: "Source Sans Pro", "Lucida Grande", sans-serif;
    
}
h1 {
    font-size: 36px;
    
}
h2 {
    font-size: 30px;
}
p,li {
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 16px;
}
code {

    font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.25;
  color: #bd4147;
    tab-size: 4;
background-color: #f6f8fa;
  font-size: 100%
}
pre > code {
    display: block;
    overflow-x: auto;
    padding: 16px;
    margin-bottom: 0;
        margin-top: 0;
        margin-right: 0px;
        margin-left: 0px;
        word-wrap: normal;
        word-break: normal;
            border-radius: 3px;

    font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.45;
  color: #ddd;
    tab-size: 4;
  background-color:#272822;
  font-size: 100%
}
a{text-decoration:none}
</style>
