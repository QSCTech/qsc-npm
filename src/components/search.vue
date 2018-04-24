<template>
<v-layout justify-center align-center>
    <v-container v-if="loaded && searchpackages.length" fluid grid-list-md>
        <v-layout row wrap>
        <v-flex
            v-bind="{ [`xs6`]: true }"
            v-for="npmpackage in searchpackages"
            :key="npmpackage.name"
        >
            <v-card >
            <v-card-title primary-title>
                <div>
                    <div class="headline">{{npmpackage.name}}<v-chip>V{{npmpackage.version}}</v-chip></div>
                    <span >{{npmpackage.description}}</span><br>
                    <span v-for="keyword in npmpackage.keywords" class="grey--text">{{keyword}}  </span>
                </div>
                </v-card-title>
                
                <v-card-actions>
                    
                
                <v-btn flat color="purple" @click="direct(npmpackage.name)">前往</v-btn>
                <v-spacer></v-spacer>
                <!-- <v-btn icon @click.native="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn> -->
                </v-card-actions>
                <!-- <v-slide-y-transition>
                <v-card-text v-show="show">
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
                </v-slide-y-transition> -->
            </v-card>
        </v-flex>
        </v-layout>
    </v-container>
    <v-progress-circular v-else-if="!loaded" indeterminate :size="70" :width="5" color="green"></v-progress-circular>
    <h1 v-else>没有找到这样的包哦~</h1>
</v-layout>
</template>

<script>
import api from '../axios'
export default {
    data() {
        return {
            searchpackages: [],
            loaded: false
        }
    },methods: {
        direct(target) {
            this.$router.push({name: 'view', params: {name: target}});
        }
    },
    watch: {
        $route(to, from) {
            // console.log(to.params.name);
            if(to.params.name) {
                this.loaded = false
                api.search(to.params.name).then(res => {
                    this.searchpackages = res.data;
                    this.loaded = true;
                    console.log(res.data);
                })
            } else {
                this.$router.push({name: 'list'});
                this.searchpackages = [];
            }
            
        }
    }
}
</script>