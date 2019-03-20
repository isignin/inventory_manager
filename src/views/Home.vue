<template>
  <v-container grid-list-md text-xs-center fluid>
    <v-layout row xs12 wrap >
      <v-flex xs12 sm6 md4 fluid>
        <v-card>
          <v-layout row>
            <v-card-title class="px-0"><v-icon large color=warning>mdi-desktop-classic</v-icon><h3> Hardware</h3></v-card-title>
          </v-layout>
          <hr>
          <v-layout row>
            <v-card-text class="px-0">Statistics here</v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 fluid>
        <v-card>
          <v-layout row>
            <v-card-title class="px-0"><v-icon large color=primary>mdi-apps</v-icon> <h3> Software</h3></v-card-title>
          </v-layout>
          <hr>
          <v-layout row>
            <v-card-text class="px-0">Statistics here</v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 fluid>
        <v-card>
          <v-layout row>
            <v-card-title class="px-0"><v-icon large color=accent>mdi-tablet-android</v-icon><h3> Tablets</h3></v-card-title>
          </v-layout>
          <hr>
          <v-layout row>
            <v-card-text class="px-0">Statistics here</v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <div class='homelogo'>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5" width='255' height='48'>
          <blockquote>
            &#8220;First, solve the problem. Then, write the code.&#8221;
            <footer>
              <small>
                <em>&mdash;John Johnson</em>
              </small>
            </footer>
          </blockquote>
        </v-layout>
      </v-slide-y-transition>
    </div>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.homelogo {
  display: block;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  /* bring your own prefixes
  transform: translate(-50%, -50%);*/
}

.centered {
  position: relative;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  }
  #logo {
    display: block;
    margin: auto auto;
  }
  .v-card {
    padding: 15px;
    border-radius: 6px;
    box-shadow: 0 2px 2px hsla(38, 16%, 76%, .5);
  }
  .v-icon {
    padding: 0 10px;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
  }
</style>
