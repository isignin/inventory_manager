<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <h2 class="page_title">{{pageTitle}}</h2> &nbsp; <v-icon color=accent @click='addItem'>mdi-plus-circle</v-icon>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="rows"
        :pagination.sync="pagination"
        :rows-per-page-items="rppi"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left"><v-btn icon><v-icon @click='displayItem'>mdi-dots-vertical</v-icon></v-btn></td>
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.type }}</td>
          <td class="text-xs-left">{{ props.item.manufacturer }}</td>
          <td class="text-xs-left">{{ props.item.model }}</td>
          <td class="text-xs-left">{{ props.item.serial }}</td>
          <td class="text-xs-left">{{ props.item.serviceTag }}</td>
          <td class="text-xs-left">{{ props.item.resolution }}</td>
          <td class="text-xs-left">{{ props.item.os }}</td>
          <td class="text-xs-left">{{ props.item.voltage }}</td>
          <td class="text-xs-left">{{ props.item.vendor }}</td>
          <td class="text-xs-left">{{ props.item.status }}</td>
          <td class="text-xs-left">{{ props.item.warranty }}</td>
          <td class="text-xs-left">{{ props.item.warrantyType }}</td>
          <td class="text-xs-left">{{ props.item.expire }}</td>
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
      pageTitle: 'Hardware',
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
        { text: '', value: '', sortable: false, width: '1%' },
        { text: 'Name', value: 'name', align: 'left', sortable: false },
        { text: 'Type', value: 'type', align: 'left', sortable: false },
        { text: 'Manufacturer', value: 'manufacturer', align: 'left', sortable: false },
        { text: 'Model', value: 'model', align: 'left', sortable: false },
        { text: 'Serial', value: 'serial', align: 'left', sortable: false },
        { text: 'Service Tag', value: 'serviceTag', align: 'left', sortable: false },
        { text: 'Screen Resolution', value: 'resolution', align: 'left', sortable: false },
        { text: 'OS', value: 'os', align: 'left', sortable: false },
        { text: 'Voltage', value: 'voltage', align: 'left', sortable: false },
        { text: 'Vendor', value: 'vendor', align: 'left', sortable: false },
        { text: 'Status', value: 'status', align: 'left', sortable: false },
        { text: 'Warranty', value: 'warranty', align: 'left', sortable: false },
        { text: 'Warranty Type', value: 'warrantyType', align: 'left', sortable: false },
        { text: 'Warranty Expire', value: 'expire', align: 'left', sortable: false },
        { text: 'Assigned To', value: 'assigned', align: 'left', sortable: false },
        { text: 'Comments', value: 'comments', align: 'left', sortable: false },
        { text: ' ', value: '', sortable: false }
      ],
      rows: [
        {
          id: 1,
          name: 'PC 01',
          type: 'Desktop PC',
          manufacturer: 'Dell',
          model: 'Optiplex 3010',
          serial: '325FG2S',
          serviceTag: '',
          resolution: '',
          os: 'WINDOWS 7 PROFESSIONAL',
          voltage: '110-220',
          vendor: '',
          status: 'IN USE',
          warranty: '',
          warrantyType: '',
          expire: '',
          assigned: '',
          comments: ''
        },
        {
          id: 2,
          name: 'PC 02',
          type: 'Desktop PC',
          manufacturer: 'Dell',
          model: 'Optiplex 3010',
          serial: '515FG2S',
          serviceTag: '',
          resolution: '',
          os: 'WINDOWS 7 PROFESSIONAL',
          voltage: '110-220',
          vendor: '',
          status: 'IN USE',
          warranty: '',
          warrantyType: '',
          expire: '',
          assigned: '',
          comments: ''
        },
        {
          id: 3,
          name: 'PC 03',
          type: 'Desktop PC',
          manufacturer: 'Dell',
          model: 'Optiplex 3010',
          serial: '3Z4FG2S',
          serviceTag: '',
          resolution: '',
          os: 'WINDOWS 7 PROFESSIONAL',
          voltage: '110-220',
          vendor: '',
          status: 'IN USE',
          warranty: '',
          warrantyType: '',
          expire: '',
          assigned: '',
          comments: ''
        },
        {
          id: 4,
          name: 'PC 01',
          type: 'Desktop PC',
          manufacturer: 'Dell',
          model: 'Optiplex 3010',
          serial: '7740DY1',
          serviceTag: '',
          resolution: '',
          os: 'WINDOWS 7 PROFESSIONAL',
          voltage: '110-220',
          vendor: '',
          status: 'Not in use, but working',
          warranty: '',
          warrantyType: '',
          expire: '',
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
    displayItem () {
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
