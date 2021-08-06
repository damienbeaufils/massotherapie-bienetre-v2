<template>
  <v-card id="rates" class="text-center">
    <v-card-title
      class="custom-color-pink custom-color-green--text justify-center"
    >
      <h2 class="font-italic">Tarifs et horaires</h2>
    </v-card-title>
    <v-card-text class="custom-color-green--text">
      <v-card flat class="mb-5">
        <v-card-title class="custom-color-green--text justify-center mb-3">
          <h1>Massage de détente ou thérapeutique sur table</h1>
        </v-card-title>
        <v-card-subtitle class="custom-color-green--text text-center">
          <ul class="no-bullets">
            <li>60 minutes - 85 $ taxes incluses</li>
            <li>90 minutes - 127,50 $ taxes incluses</li>
          </ul>
        </v-card-subtitle>
        <v-card-text class="custom-color-green--text text-center">
          <p class="font-italic">Reçus disponibles pour fins d’assurances</p>
          <a
            href="https://rmpq.ca/repertoire-des-membres/montreal-rosemont-la-petite-patrie/virginie-dang-778809/"
            target="_blank"
          >
            <v-img
              src="img/rmpq.jpg"
              alt="Membre du Réseau des massothérapeutes professionnels du Québec (RMPQ)"
              max-width="500"
              class="mx-auto"
            ></v-img>
          </a>
        </v-card-text>
      </v-card>

      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="custom-color-pink">
            <v-card-title
              class="
                custom-color-green--text
                justify-center
                text-subtitle-2
                font-weight-bold
              "
            >
              Clinique des Médecines Alternatives de la Petite-Patrie
            </v-card-title>

            <v-card-text class="custom-color-green--text justify-center">
              <address>
                <p>6955 Ave Christophe-Colomb #104, Montréal, QC H2S 1H6</p>
                <p>
                  <img
                    src="img/Montreal_Metro.svg"
                    alt=""
                    class="metro-logo"
                  />&nbsp;Jean-Talon (7 minutes à pied du métro)
                </p>
              </address>

              <span class="font-weight-bold">Horaires :</span>
              <ul class="no-bullets">
                <li>Vendredi - 10:00 à 21:00</li>
                <li>Quelques dimanches - 10:00 à 18:00</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCNsDQVC0fSNhGNPsppuAotr38HuU5Hgqk&q=Clinique des Médecines Alternatives de la Petite-Patrie, 6955 Ave Christophe-Colomb #104, Montréal, QC H2S 1H6, Canada"
            frameborder="0"
            scrolling="no"
            width="100%"
            height="250"
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

h1 {
  font-size: 1.25rem;
  font-weight: 500;
}

address {
  font-style: normal;
}
</style>
