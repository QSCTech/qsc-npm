import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import layout from '@/components/layout';
import list from '@/components/list'
import view from '@/components/view'
import search from "@/components/search";

Vue.use(Router)



export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/qscpack',
      name: 'layout',
      component: layout,
      children: [
        {
          path: '/',
          name: 'list',
          component: list
        },
        {
          path: ':name',
          name: 'view',
          component: view
        },
        {
          path: 'search/:name',
          name: 'search',
          component: search
        }
      ]
    }
  ]
});