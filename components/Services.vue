<template>
  <v-card id="services" class="text-center">
    <v-card-title
      class="custom-color-pink custom-color-green--text justify-center pa-5"
    >
      <h2 class="font-italic">Services & RDV</h2>
    </v-card-title>
    <v-card-text class="custom-color-green--text pa-5">
      <v-row>
        <v-col cols="12">
          <p>
            Je pratique principalement des techniques de
            <span class="font-weight-bold">massage suédois</span> mais j’aime
            aussi intégrer des techniques un peu plus englobantes comme le
            <span class="font-weight-bold">biocorporel</span> ou avec plus de
            pression en utilisant les
            <span class="font-weight-bold">avant-bras</span>.
          </p>
          <p>
            Je vous concocterai un
            <span class="font-weight-bold">massage sur-mesure</span> qui alliera
            les différentes techniques en fonction de vos besoins !
          </p>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card outlined>
            <v-card-title
              class="
                custom-color-green--text
                justify-center
                font-italic font-weight-bold
              "
            >
              <h3>Massage professionnel de détente</h3>
            </v-card-title>
            <v-card-text class="custom-color-green--text">
              <p>
                Vous n’avez pas de douleurs ou d’inconforts spécifiques mais
                vous êtes
                <span class="font-weight-bold">assez stressé.e ?</span>
              </p>
              <p>
                Ou bien vous souhaitez tout simplement
                <span class="font-weight-bold">prendre soin de vous</span>
                le temps de 60 ou 90 minutes ? Ce massage de détente sur table
                est donc pour vous !
              </p>

              <v-img
                src="img/virginie_dang_massage_detente.jpg"
                alt=""
                class="mx-auto d-none d-sm-flex rounded"
                max-width="50%"
              ></v-img>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card outlined>
            <v-card-title
              class="
                custom-color-green--text
                justify-center
                font-italic font-weight-bold
              "
            >
              <h3>Massage professionnel thérapeutique</h3>
            </v-card-title>
            <v-card-text class="custom-color-green--text">
              <p>
                Vous ressentez des
                <span class="font-weight-bold"
                  >douleurs musculaires et/ou articulaires</span
                >
                ou un <span class="font-weight-bold">inconfort</span>, ce
                massage thérapeutique sur table est pour vous !
              </p>
              <p>
                Une attention particulière sera portée sur le
                <span class="font-weight-bold">segment douloureux</span>, grâce
                à des
                <span class="font-weight-bold"
                  >techniques thérapeutiques plus profondes</span
                >.
              </p>
              <v-img
                src="img/virginie_dang_massage_therapeutique.jpg"
                alt=""
                class="mx-auto d-none d-sm-flex rounded"
                max-width="50%"
              ></v-img>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card outlined>
            <v-card-title
              class="
                custom-color-green--text
                justify-center
                font-italic font-weight-bold
              "
            >
              <h3>Massage professionnel pour femmes enceintes</h3>
            </v-card-title>
            <v-card-text class="custom-color-green--text">
              <p>À venir</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card outlined>
            <v-card-title
              class="
                custom-color-green--text
                justify-center
                font-italic font-weight-bold
              "
            >
              <h3>Drainage lymphatique</h3>
            </v-card-title>
            <v-card-text class="custom-color-green--text">
              <p>À venir</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions class="custom-color-green justify-center pa-sm-5">
      <v-btn
        text
        class="
          custom-color-pink
          custom-color-green--text
          pa-sm-7
          font-weight-bold
          text-sm-h6 text-subtitle-2
        "
        href="https://www.gorendezvous.com/virginiedang-mapp"
        target="_blank"
      >
        Prendre rendez-vous en ligne
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
