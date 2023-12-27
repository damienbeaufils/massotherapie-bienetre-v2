<template>
  <v-card id="horaires" class="text-center">
    <v-card-title class="custom-color-green white--text justify-center">
      <h2 class="text-h5 text-sm-h4">Horaires, tarifs & adresse</h2>
    </v-card-title>
    <v-card-text class="custom-color-green--text">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="custom-color-light-grey mt-10">
            <v-card-title
              class="justify-center custom-color-green mx-5 mx-sm-15 white--text font-weight-bold card-header rounded py-2"
            >
              Sur rendez-vous uniquement
            </v-card-title>

            <v-card-subtitle class="custom-color-green--text text-center">
              <div>
                <span class="font-weight-bold text-decoration-underline"
                  >Horaires :</span
                >
                <ul class="no-bullets">
                  <li class="font-weight-bold">
                    Du lundi au vendredi sur rendez-vous
                  </li>
                  <li>Pas de rendez-vous de dernière minute</li>
                </ul>
              </div>

              <div class="mt-3">
                <span class="font-weight-bold text-decoration-underline"
                  >Tarifs :</span
                >
                <ul class="no-bullets">
                  <li>60 minutes - 75 $</li>
                </ul>
              </div>
              <div class="mt-3">
                <span class="font-weight-bold text-decoration-underline"
                  >Modes de paiement :</span
                >

                <p>
                  Paiement par carte de débit, virement Interac ou argent
                  comptant sont préférables. Carte de crédit également acceptée.
                </p>
              </div>
            </v-card-subtitle>

            <v-card-text class="custom-color-green--text justify-center">
              <p class="font-weight-bold">
                Pour un premier rendez-vous, svp téléphonez au
                <a href="tel:4187901294">418-790-1294</a> ou
                <a href="mailto:virginiedang.massotherapeute@gmail.com"
                  >contactez-moi par courriel</a
                >
              </p>
              <address>
                <p>2 rue Beauregard, Clermont, QC G4A&nbsp;0A2</p>
              </address>
            </v-card-text>

            <v-card-actions class="justify-center">
              <v-btn
                text
                class="custom-color-grey black--text pa-sm-7 mb-2 font-weight-bold text-sm-h6 text-subtitle-2"
                href="https://www.gorendezvous.com/virginiedang"
                target="_blank"
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

a {
  text-decoration: none;
  color: unset;
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
