<template>
  <v-card id="services" class="text-center">
    <v-card-title class="custom-color-green white--text justify-center pa-5">
      <h2 class="text-h5 text-sm-h4">Soins</h2>
    </v-card-title>
    <v-card-text class="custom-color-green--text pa-5">
      <v-row justify="center">
        <v-col cols="12">
          <v-card rounded>
            <v-card-text
              class="
                custom-color-green--text
                custom-color-pink
                text-h6 text-sm-h5 text-center
                font-weight-bold font-italic
                cursive
              "
            >
              Je vous concocte un soin sur-mesure, adapté à vos besoins.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card flat>
            <v-card-text class="custom-color-green--text">
              <v-img
                src="img/services/massage_anti-stress.jpg"
                alt=""
                class="d-flex rounded mx-lg-15"
                :aspect-ratio="1920 / 1280"
              ></v-img>

              <h3 class="mt-2">Massage anti-stress</h3>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card flat>
            <v-card-text class="custom-color-green--text">
              <v-img
                src="img/services/kinesitherapie_therapeutique.jpg"
                alt=""
                class="d-flex rounded mx-lg-15"
                :aspect-ratio="1920 / 1280"
              ></v-img>

              <h3 class="mt-2">Kinésithérapie / thérapeutique</h3>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card flat>
            <v-card-text class="custom-color-green--text">
              <v-img
                src="img/services/drainage_lymphatique.jpg"
                alt=""
                class="d-flex rounded mx-lg-15"
                :aspect-ratio="1920 / 1280"
              ></v-img>

              <h3 class="mt-2">Drainage lymphatique</h3>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card flat>
            <v-card-text class="custom-color-green--text">
              <v-img
                src="img/services/massage_femmes_enceintes.jpg"
                alt=""
                class="d-flex rounded mx-lg-15"
                :aspect-ratio="1920 / 1280"
              ></v-img>

              <h3 class="mt-2">Massage pour femmes enceintes</h3>
            </v-card-text>
          </v-card>
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
