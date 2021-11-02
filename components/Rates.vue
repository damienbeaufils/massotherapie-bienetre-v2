<template>
  <v-card id="rates" class="text-center">
    <v-card-title class="custom-color-green white--text justify-center">
      <h2 class="text-h5 text-sm-h4">Horaires & où me trouver</h2>
    </v-card-title>
    <v-card-text class="custom-color-green--text">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="custom-color-light-grey mt-10">
            <v-card-title
              class="
                justify-center
                custom-color-green
                mx-5 mx-sm-15
                white--text
                font-weight-bold
                card-header
                rounded
                py-2
              "
            >
              Lundi
            </v-card-title>

            <v-card-text class="custom-color-green--text justify-center">
              <p class="font-weight-bold">Bureau 200 A</p>
              <address>
                <p>810 Av Champagneur, Montréal, QC H2V 1K5</p>
                <p>
                  <img
                    src="/img/Montreal_Metro.svg"
                    alt=""
                    class="metro-logo"
                  />&nbsp;Outremont (3 minutes à pied du métro)
                </p>
              </address>

              <span class="font-weight-bold">Horaires :</span>
              <ul class="no-bullets">
                <li>Lundi - 10:00 à 19:30</li>
              </ul>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                text
                class="
                  custom-color-grey
                  black--text
                  pa-sm-7
                  mb-2
                  font-weight-bold
                  text-sm-h6 text-subtitle-2
                "
                href="https://www.gorendezvous.com/virginiedang-mapp"
                target="_blank"
              >
                Prendre rendez-vous
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" class="map">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCNsDQVC0fSNhGNPsppuAotr38HuU5Hgqk&q=Bureau 200 A, 810 Av Champagneur, Montréal, QC H2V 1K5, Canada"
            frameborder="0"
            scrolling="no"
            width="100%"
            height="300"
          >
          </iframe>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="custom-color-light-grey mt-10">
            <v-card-title
              class="
                justify-center
                custom-color-green
                mx-5 mx-sm-15
                white--text
                font-weight-bold
                card-header
                rounded
                py-2
              "
            >
              Mardi, Mercredi, Jeudi
            </v-card-title>

            <v-card-text class="custom-color-green--text justify-center">
              <p class="font-weight-bold">
                Clinique Physio Théra Plus - Villeray
              </p>
              <address>
                <p>8290 R. Saint-Denis #2, Montréal, QC H2P 2G6</p>
                <p>
                  <img
                    src="/img/Montreal_Metro.svg"
                    alt=""
                    class="metro-logo"
                  />&nbsp;Jarry (5 minutes à pied du métro)
                </p>
              </address>

              <span class="font-weight-bold">Horaires :</span>
              <ul class="no-bullets">
                <li>Mardi - 14:00 à 20:00</li>
                <li>Un mercredi sur deux - 10:00 à 18:00</li>
                <li>Jeudi - 11:00 à 19:00</li>
              </ul>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                text
                class="
                  custom-color-grey
                  black--text
                  pa-sm-7
                  mb-2
                  font-weight-bold
                  text-sm-h6 text-subtitle-2
                "
                href="https://physiotheraplus.com/contact-villeray/"
                target="_blank"
              >
                Prendre rendez-vous
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" class="map">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCNsDQVC0fSNhGNPsppuAotr38HuU5Hgqk&q=Clinique Physio Théra Plus - Villeray, 8290 R. Saint-Denis #2, Montréal, QC H2P 2G6, Canada"
            frameborder="0"
            scrolling="no"
            width="100%"
            height="300"
          >
          </iframe>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="custom-color-light-grey mt-10">
            <v-card-title
              class="
                justify-center
                custom-color-green
                mx-5 mx-sm-15
                white--text
                font-weight-bold
                card-header
                rounded
                py-2
              "
            >
              Samedi
            </v-card-title>

            <v-card-text class="custom-color-green--text justify-center">
              <p class="font-weight-bold">
                Clinique des Médecines Alternatives de la Petite-Patrie
              </p>
              <address>
                <p>6955 Ave Christophe-Colomb #104, Montréal, QC H2S 1H6</p>
                <p>
                  <img
                    src="/img/Montreal_Metro.svg"
                    alt=""
                    class="metro-logo"
                  />&nbsp;Jean-Talon (7 minutes à pied du métro)
                </p>
              </address>

              <span class="font-weight-bold">Horaires :</span>
              <ul class="no-bullets">
                <li>Samedi - 10:00 à 18:00</li>
              </ul>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                text
                class="
                  custom-color-grey
                  black--text
                  pa-sm-7
                  mb-2
                  font-weight-bold
                  text-sm-h6 text-subtitle-2
                "
                href="https://www.gorendezvous.com/virginiedang-mapp"
                target="_blank"
              >
                Prendre rendez-vous
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" class="map">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCNsDQVC0fSNhGNPsppuAotr38HuU5Hgqk&q=Clinique des Médecines Alternatives de la Petite-Patrie, 6955 Ave Christophe-Colomb #104, Montréal, QC H2S 1H6, Canada"
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
