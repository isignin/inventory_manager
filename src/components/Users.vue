<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <h1 class="page_title">{{pageTitle}}</h1> &nbsp; <v-icon color=primary @click='addItem'>mdi-plus-circle</v-icon>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="rows"
        :pagination.sync="pagination"
        :rows-per-page-items="rppi"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.id }}</td>
          <td class="text-xs-left">{{ props.item.siteId }}</td>
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.username }}</td>
          <td class="text-xs-left">{{ props.item.password }}</td>
          <td class="text-xs-right">
            <!-- <router-link :to="{name: 'editUser',
              params: { user: props.item } }"
              tag="span"> -->
              <span class="group">
                <v-icon color=primary @click='editItem'>mdi-pencil</v-icon>
            <!-- </router-link> -->
                <v-icon color=warning @click='deleteItem'>mdi-delete</v-icon>
              </span>
          </td>
        </template>
      </v-data-table>
 <!--       <div class="text-xs-center pt-2">
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>
-->
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'Users',
  data () {
    return {
      pageTitle: 'Users',
      delete: false,
      pagination: {},
      rppi: [
        '20',
        {
          text: 'All',
          value: -1
        }
      ],
      headers: [
        { text: 'UserId', value: 'id', align: 'left', sortable: false },
        { text: 'SiteId', value: 'siteId', align: 'left', sortable: false },
        { text: 'Full Name#', value: 'name', align: 'left', sortable: false },
        { text: 'UserName', value: 'username', align: 'left', sortable: false },
        { text: 'Password', value: 'password', align: 'left', sortable: false },
        { text: ' ', value: '', sortable: false }

      ],
      rows: [
        { id: 1, siteId: '1', name: 'John Doe', username: 'jdoe@example.com', password: '********' },
        { id: 2, siteId: '2', name: 'Jane Doe', username: 'jdoe@example.com', password: '********' },
        { id: 3, siteId: '3', name: 'Maynor Stamm', username: 'maynor@example.com', password: '********' }
      ]
    }
  },
  computed: {
    users () {
      return this.$store.state.loadedUsers
    }
  },
  methods: {
    addItem () {
    },
    deleteItem () {
      // const str = "You can delete users from the Firebase Console!"
      // const str = 'Disabled for demo!'
      // this.$dialog.confirm(str).then(() => "")
    },
    editItem () {
    }
  }
}
</script>
<style lang="stylus">
  table.v-table thead th {
      font-weight: 900;
      font-size: 14px;
  }

  .group
    display: flex
    flex: 1
    justify-content: space-around
</style>
