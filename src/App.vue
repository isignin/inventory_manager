<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      :width="250"
    >
      <div class="m-20">
        <div class="m-l-20"><img src="@/assets/logo.png" id="cslogo_sm" alt="Logo"></div>
        <hr>
        <div id="drawer_title">Inventory Manager</div>
      </div>
      <div v-for="item in items" :key="item.title">
        <v-list>
          <v-list-tile v-if="!item.group"
            :key="item.title"
            router
            :to="item.link"
            >
            <v-list-tile-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-group class="submenu" v-if="item.group"
            :key="item.title"

            router
            :to="item.link"
            >
            <v-list-tile slot="activator">
              <v-list-tile-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile v-if="!item.items==[]"
              v-for="subItem in item.items"
              :key="subItem.title"
              router
              :to="subItem.link"
            >
              <v-list-tile-content>
                <v-list-tile-title class='submenu'> {{subItem.title}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </div>
    </v-navigation-drawer>
    <v-toolbar
      dark
      app
      :clipped-left="clipped"
      class="blue"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon @click.stop="test">mdi-account-circle</v-icon>
      <v-menu bottom left
          transition="scale-transition"
         >
            <v-btn
              slot="activator"
              dark
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

            <v-list>
              <v-list-tile
                v-for="(item, i) in menuItems"
                :key="i"
                router
                :to = "item.link"
              >
                <v-list-tile-title><v-icon color='primary'>{{item.icon}}</v-icon> {{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
      <!-- <v-icon @click.stop="test">more_vert</v-icon> -->
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019 Stephen Loo</span><v-spacer></v-spacer>
      <span id="powered_by">Powered by VueJS</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'mdi-view-dashboard', title: 'Dashboard', link: '/', group: false, items: [] },
        { icon: 'mdi-desktop-classic', title: 'Hardware', link: '/hardware', group: false, items: [] },
        { icon: 'mdi-apps', title: 'Software', link: '/software', group: false, items: [] },
        {
          icon: 'mdi-file-chart',
          title: 'Reports',
          link: '',
          group: true,
          items: [
            { icon: 'mdi-view-dashboard', title: 'Full Equipment List', link: '/' },
            { icon: 'mdi-view-dashboard', title: 'Active Equipment', link: '/' },
            { icon: 'mdi-view-dashboard', title: 'Retired Equipment', link: '/' },
            { icon: 'mdi-view-dashboard', title: 'Software List', link: '/' },
            { icon: 'mdi-view-dashboard', title: 'Tablets List', link: '/' },
            { icon: 'mdi-view-dashboard', title: 'Warranty Expired', link: '/' }
          ]
        },
        { icon: 'mdi-file-export', title: 'Data Export', link: '/export', group: false, items: [] },
        {
          icon: 'mdi-settings',
          title: 'Admin',
          link: '/admin',
          group: true,
          items: [
            { icon: 'mdi-view-dashboard', title: 'System Settings', link: '/sys_settings' },
            { icon: 'mdi-view-dashboard', title: 'Users', link: '/users' },
            { icon: 'mdi-view-dashboard', title: 'Depts', link: '/depts' }
          ]
        }
      ],
      menuItems: [
        { icon: 'mdi-help', title: 'Help', link: '/help' },
        { icon: 'mdi-information', title: 'About', link: '/about' },
        { icon: 'mdi-key', title: 'Change Passwd', link: '/changepwd' },
        { icon: 'mdi-logout', title: 'Log Out', link: '/login' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Inventory Manager'
    }
  }
}
</script>
<style lang="stylus" scoped>
  .v-footer{
    padding: 0 10px;
    font-size: 9px;
    background: #d6d1d1;
    font-weight: 500;
  }
  .f-left {
    float: left;
  }
  .m-b-20 {
    margin-bottom: 30px;
  }
  .m-t-20 {
    margin-top: 30px;
  }
  .m-20 {
    margin: 20px;
  }
  #cslogo_sm {
    width: 170px;
    height: 32px;
    margin: 0px 10px 5px 10px;
    vertical-align: bottom;
  }
  #drawer_title {
    position: relative;
    font-size: 20px;
    margin-top: 5px;
    margin-left: 10px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 600;
  }
  .v-list {
    padding: 0;
  }
  .v-list__tile__title.submenu{
    white-space: normal;
    overflow:auto; */
    font-size: small;
    line-height: normal;
    height: auto;
  }
  .v-list__group__items {
    padding: 0 0 0 30px;
  }
  .v-toolbar__title {
    font-size: 16px;
  }
  .v-list__group.submenu .v-list__group__items > div{
    height: auto;
    padding-left: 20px;
  }
  main.v-content {
   background-color: #f4f3ef;
  }
</style>
