<template>
  <v-card id="horaires" class="text-center">
    <v-card-title class="custom-color-green white--text justify-center">
      <h2 class="text-h5 text-sm-h4">Horaires & où me trouver</h2>
    </v-card-title>
    <v-card-text class="custom-color-green--text">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="custom-color-light-grey mt-10">
            <v-card-title
              class="justify-center custom-color-green mx-5 mx-sm-15 white--text font-weight-bold card-header rounded py-2"
            >
              Du lundi au vendredi,<br class="hidden-md-and-down" />
              sur rendez-vous uniquement
            </v-card-title>

            <v-card-text class="custom-color-green--text justify-center">
              <p class="font-weight-bold">
                Pour un premier rendez-vous, svp téléphonez au 418-790-1294
              </p>
              <address>
                <p>2 Rue Beauregard, Clermont, QC G4A 0A2</p>
                <!-- <p>
                  <img
                    src="/img/Montreal_Metro.svg"
                    alt=""
                    class="metro-logo"
                  />&nbsp;Outremont (3 minutes à pied du métro)
                </p> -->
              </address>

              <!--
              <span class="font-weight-bold">Horaires :</span>
              <ul class="no-bullets">
                <li>À determiner</li>
              </ul>
              -->
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                text
                class="custom-color-grey black--text pa-sm-7 mb-2 font-weight-bold text-sm-h6 text-subtitle-2"
                href="tel:4187901294"
                target="Pour un premier rendez-vous, svp téléphonez au 418-790-1294"
              >
                Prendre rendez-vous
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" class="map">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCNsDQVC0fSNhGNPsppuAotr38HuU5Hgqk&q=Virginie Dang Massothérapeute, Kinésithérapeute, Orthothérapeute, 2 Rue Beauregard, Clermont, QC G4A 0A2, Canada"
            frameborder="0"
            scrolling="no"
            width="100%"
            height="300"
          >
          </iframe>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.no-bullets {
  padding: 0 !important;
}
.no-bullets li {
  list-style-type: none;
}

.metro-logo {
  max-width: 25px;
  vertical-align: middle;
}

address {
  font-style: normal;
}

.card-header {
  position: relative;
  top: -1.5rem;
}

@media only screen and (min-width: 600px) {
  .map {
    margin-top: 2.5rem;
  }
}
</style>
