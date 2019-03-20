<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <h2 class="page_title">{{pageTitle}}</h2> &nbsp; <v-icon color=primary @click='addItem'>mdi-plus-circle</v-icon>
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
          <td class="text-xs-left">{{ props.item.vendor }}</td>
          <td class="text-xs-left">{{ props.item.serial }}</td>
          <td class="text-xs-left">{{ props.item.os }}</td>
          <td class="text-xs-left">{{ props.item.status }}</td>
          <td class="text-xs-left">{{ props.item.purchased }}</td>
          <td class="text-xs-left">{{ props.item.assigned }}</td>
          <td class="text-xs-left">{{ props.item.comments }}</td>
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
  name: 'Hardware',
  data () {
    return {
      pageTitle: 'Software',
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
        { text: 'Id', value: 'id', align: 'left', sortable: false },
        { text: 'Name', value: 'name', align: 'left', sortable: false },
        { text: 'Vendor', value: 'vendor', align: 'left', sortable: false },
        { text: 'Serial', value: 'serial', align: 'left', sortable: false },
        { text: 'OS', value: 'os', align: 'left', sortable: false },
        { text: 'Status', value: 'status', align: 'left', sortable: false },
        { text: 'Purchased Date', value: 'purchased', align: 'left', sortable: false },
        { text: 'Assigned To', value: 'assigned', align: 'left', sortable: false },
        { text: 'Comments', value: 'comments', align: 'left', sortable: false },
        { text: ' ', value: '', sortable: false }

      ],
      rows: [
        {
          id: 1,
          name: 'Microsoft windows 8.1',
          vendor: 'Abhirath Computers',
          serial: '325FG2SA23',
          os: 'MS Windows OS',
          status: 'IN USE',
          purchased: '',
          assigned: '',
          comments: ''
        },
        {
          id: 2,
          name: 'Microsoft windows 10',
          vendor: 'Abhirath Computers',
          serial: '325FG2S',
          os: 'WINDOWS 10 PROFESSIONAL',
          status: 'IN USE',
          purchased: '',
          assigned: '',
          comments: ''
        },
        {
          id: 3,
          name: 'Microsoft Windows Server 2003',
          vendor: 'Axis Computers',
          serial: '325FG2S',
          os: 'WINDOWS Server 2003 L',
          status: 'IN USE',
          purchased: '',
          assigned: '',
          comments: ''
        },
        {
          id: 4,
          name: 'Microsoft Windows 7 Pro',
          vendor: 'Dell',
          serial: '325FG2S',
          os: 'WINDOWS 7 PROFESSIONAL',
          status: 'IN USE',
          purchased: '',
          assigned: '',
          comments: ''
        }
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
