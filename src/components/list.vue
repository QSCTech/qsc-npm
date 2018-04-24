<template>
<v-layout justify-center align-center>
    <v-container v-if="loaded" fluid grid-list-md>
        <v-layout row wrap>
        <v-flex
            v-bind="{ [`xs12 md6`]: true }"
            v-for="npmpackage in npmpackages"
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
                    
                <v-btn color="purple lighten-1 white--text">Star</v-btn>
                
                <v-btn color="error white--text" @click="direct(npmpackage.name)">Explore</v-btn>
                <v-spacer></v-spacer>
                <b>{{npmpackage.author.name}}</b>
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
    <v-progress-circular v-else indeterminate :size="70" :width="5" color="green"></v-progress-circular>
    
</v-layout>


</template>

<script>
import api from '../axios'
export default {
    data() {
        return {
            npmpackages: [],
            show: false,
            loaded: false,
        }
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            api.get_package_list().then(res => {
                if(res.data.length)
                {
                    this.loaded = true;
                    this.snackbar = true;
                }
                    
                this.npmpackages = res.data;
            })
        },
        direct(target) {
            this.$router.push({name: 'view', params: {name: target}});
        }
    }
}
</script>
