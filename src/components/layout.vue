<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      clipped
      class="grey lighten-4"
      app
      v-model="drawer"
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            dark
            v-else-if="item.divider"
            class="my-3"
            :key="i"
          ></v-divider>
          <v-list-tile
            :key="i"
            v-else
            @click="redirect(item.text)"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="amber" fixed app clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">求是潮&nbsp;<span class="text">npm私有源</span></span>
      <v-text-field
        solo-inverted
        flat
        label="Search Package"
        prepend-icon="search"
        v-model="searchinput"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="grey lighten-4">
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer class="white" fixed>
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="black--text ml-3">
              Copyright &copy2018
              <a href="https://github.com/QSCTech">求是潮Tech</a>.
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      // { icon: 'lightbulb_outline', text: 'Notes' },
      // { icon: 'touch_app', text: 'Reminders' },
      // { divider: true },
      // { heading: 'Labels' },
      // { icon: 'add', text: 'Create new label' },
      // { divider: true },
      // { icon: 'archive', text: 'Archive' },
      // { icon: 'delete', text: 'Trash' },
      // { divider: true },
      { icon: "inbox", text: "包列表" },
      { divider: true },
      { icon: "settings", text: "设置" },
      { icon: "chat_bubble", text: "讨论" },
      { icon: "help", text: "帮助" }

      // { icon: 'phonelink', text: 'App downloads' },
      // { icon: 'keyboard', text: 'Keyboard shortcuts' }
    ],
    show: false,
    searchinput: ""
  }),
  props: {
    source: String
  },
  methods: {
    redirect(to) {
      if (to == "包列表") {
        this.$router.push({ name: "list" });
      }
    }
  },
  watch: {
    searchinput: function(val) {
      this.$router.replace({
        name: "search",
        params: { name: this.searchinput }
      });
    }
  }
};
</script>

<style>
#keep main .container {
  height: 660px;
}
.navigation-drawer__border {
  display: none;
}
.text {
  font-weight: 400;
}
a {
  text-decoration: none;
  color: black;
}
</style>