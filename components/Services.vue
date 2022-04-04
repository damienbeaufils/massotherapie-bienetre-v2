<template>
  <v-card id="soins" class="text-center">
    <v-card-title class="custom-color-green white--text justify-center pa-5">
      <h1 class="text-h5 text-sm-h4">Soins</h1>
    </v-card-title>
    <v-card-text class="custom-color-green--text pa-5">
      <v-row justify="center">
        <v-col cols="12">
          <v-card rounded>
            <v-card-text
              class="custom-color-green--text custom-color-pink text-h6 text-sm-h5 text-center font-weight-bold font-italic cursive"
            >
              Je vous concocte un soin sur-mesure, adapté à vos besoins.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12">
          👇 Cliquez sur un élément pour avoir plus d'informations 👇
        </v-col>

        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }">
            <v-card
              flat
              nuxt
              to="/soins/massage-anti-stress/"
              :elevation="hover ? 12 : 0"
            >
              <v-card-text class="custom-color-green--text">
                <v-img
                  src="/img/services/massage_anti-stress.jpg"
                  alt=""
                  class="d-flex rounded"
                  :aspect-ratio="1920 / 1280"
                ></v-img>

                <h3 class="mt-2">Massage anti-stress</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }">
            <v-card
              flat
              nuxt
              to="/soins/orthotherapie-kinesitherapie-soin-therapeutique/"
              :elevation="hover ? 12 : 0"
            >
              <v-card-text class="custom-color-green--text">
                <v-img
                  src="/img/services/kinesitherapie_therapeutique.jpg"
                  alt=""
                  class="d-flex rounded"
                  :aspect-ratio="1920 / 1280"
                ></v-img>

                <h3 class="mt-2">
                  Orthothérapie - Kinésithérapie / Soin thérapeutique
                </h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }">
            <v-card
              flat
              nuxt
              to="/soins/drainage-lymphatique/"
              :elevation="hover ? 12 : 0"
            >
              <v-card-text class="custom-color-green--text">
                <v-img
                  src="/img/services/drainage_lymphatique.jpg"
                  alt=""
                  class="d-flex rounded"
                  :aspect-ratio="1920 / 1280"
                ></v-img>

                <h3 class="mt-2">Drainage lymphatique</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }">
            <v-card
              flat
              nuxt
              to="/soins/massage-femme-enceinte/"
              :elevation="hover ? 12 : 0"
            >
              <v-card-text class="custom-color-green--text">
                <v-img
                  src="/img/services/massage_femme_enceinte.jpg"
                  alt=""
                  class="d-flex rounded"
                  :aspect-ratio="1920 / 1280"
                ></v-img>

                <h3 class="mt-2">Massage pour femme enceinte</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }">
            <v-card flat :elevation="hover ? 12 : 0">
              <v-card-text class="custom-color-green--text">
                <v-img
                  src="/img/services/reflexologie_plantaire.jpg"
                  alt=""
                  class="d-flex rounded"
                  :aspect-ratio="1920 / 1280"
                ></v-img>

                <h3 class="mt-2">Réflexologie plantaire</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }">
            <v-card flat :elevation="hover ? 12 : 0">
              <v-card-text class="custom-color-green--text">
                <v-img
                  src="/img/services/soin_anti_cellulite.jpg"
                  alt=""
                  class="d-flex rounded"
                  :aspect-ratio="1920 / 1280"
                ></v-img>

                <h3 class="mt-2">Soin anti-cellulite</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.cursive {
  font-family: 'Sofia', cursive !important;
}
</style>
