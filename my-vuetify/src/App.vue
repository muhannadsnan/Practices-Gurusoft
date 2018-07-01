<template>
  <v-app>
    <nav>
      <v-navigation-drawer fixed :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" app>
          <v-list>
              <v-list-tile value="true" v-for="(item, i) in items" :key="i">
              <v-list-tile-action>
                  <v-icon v-html="item.icon"></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                  <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
              </v-list-tile>
          </v-list>
      </v-navigation-drawer>
        
      <v-toolbar fixed app :clipped-left="clipped">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-btn icon @click.stop="miniVariant = !miniVariant">
              <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
          </v-btn>
          <v-btn icon @click.stop="clipped = !clipped">
              <v-icon>web</v-icon>
          </v-btn>
          <v-btn icon @click.stop="fixed = !fixed">
              <v-icon>remove</v-icon>
          </v-btn>
          <v-toolbar-title v-text="myTitle"></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="rightDrawer = !rightDrawer; $emit('changedRightDrawer', !rightDrawer)">
              <v-icon>menu</v-icon>
          </v-btn>
      </v-toolbar>
    </nav>

    <v-content> <!--------------- CONTENT -->
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <img src="/public/v.png" alt="Vuetify.js" class="mb-5" />
          </v-layout>
        </v-slide-y-transition>

        <app-meetup></app-meetup>

      </v-container>
    </v-content> 

    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed>
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import MeetupComp from './components/meetup/meetup'
import Nav from './components/nav'
import Footer from './components/footer'

  export default {
    components: {
      'app-nav': Nav,
      'app-footer': Footer,
      'app-meetup': MeetupComp
    },
    data () {
      return {
        myTitle: 'Vuetify.js',
        right: true,
        rightDrawer: false,  
        clipped: false,
        drawer: true,
        items: [
            { icon: 'bubble_chart', title: 'Home' },
            { icon: 'star', title: 'Products' },
            { icon: 'favorite', title: 'Services' },
        ],
        miniVariant: false,      
      }
    },
    methods: {
      onChangedRightDrawer(newDrawer){ 
        this.rightDrawer = newDrawer
      }
    }
  }
</script>