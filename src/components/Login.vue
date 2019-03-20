<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class='headline'><div><img src="@/assets/logo.png" id="cslogo_sm"></div><div id='ptitle'>{{ pageTitle }}</div></v-card-title>
        <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color='primary darken-1' flat @click.native='logout'>Sign in</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      pageTitle: 'Sign In',
      dialog: true
    }
  },
  methods: {
    logout () {
      this.dialog = false
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style scoped>
  #ptitle {
    margin: auto;
  }
</style>
