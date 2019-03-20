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
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.siteNum }}</td>
          <td class="text-xs-left">{{ props.item.Country }}</td>
          <td class="text-xs-left">{{ props.item.Manager }}</td>
          <td class="text-xs-left">{{ props.item.Phone }}</td>
          <td class="text-xs-left">{{ props.item.Email }}</td>
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
  name: 'Depts',
  data () {
    return {
      pageTitle: 'Departments',
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
        { text: 'Dept Id', value: 'id', align: 'left', sortable: false },
        { text: 'Dept Name', value: 'name', align: 'left', sortable: false },
        { text: 'Dept#', value: 'siteNum', align: 'left', sortable: false },
        { text: 'Country', value: 'country', align: 'left', sortable: false },
        { text: 'Manager', value: 'manager', align: 'left', sortable: false },
        { text: 'Phone', value: 'phone', align: 'left', sortable: false },
        { text: 'Email', value: 'email', align: 'left', sortable: false },
        { text: ' ', value: '', sortable: false }

      ],
      rows: [
        { id: 1, name: 'Example Site 1', siteNum: '2', Country: 'DRC', Manager: 'Michel Kola', Phone: '', Email: 'michel@example.com' },
        { id: 2, name: 'Example Site 2', siteNum: '3', Country: 'Zambia', Manager: 'James Tanda', Phone: '', Email: 'james@example.com' },
        { id: 3, name: 'Example Site 3', siteNum: '6', Country: 'Mexico', Manager: 'Maynor Stamm', Phone: '', Email: 'maynor@example.com' },
        { id: 4, name: 'Example Site 4', siteNum: '8', Country: 'India', Manager: 'Gupta Manning', Phone: '', Email: 'gupta@example.com' },
        { id: 5, name: 'Example Site 5', siteNum: '9', Country: 'Pakistan', Manager: 'Raji Khan', Phone: '', Email: 'raji@example.com' },
        { id: 6, name: 'Example Site 6 ',siteNum: '11', Country: 'Bangladesh', Manager: 'Prakash Mannit', Phone: '', Email: 'prakash@example.com' },
        { id: 7, name: 'Example Site 7', siteNum: '12', Country: 'Kenya', Manager: 'Kevin Joe', Phone: '', Email: 'kevin@example.com' }
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
      // const str = "Disabled for demo!"
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
