<template>
  <v-card id="about" class="text-center">
    <v-card-title
      class="custom-color-pink custom-color-green--text justify-center"
    >
      <h2 class="font-italic">À propos</h2>
    </v-card-title>
    <v-card-text>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="4">
          <v-avatar size="200" class="mt-5 mt-sm-0">
            <img
              src="img/virginie_dang.jpg"
              alt="Photo de profil de Virginie Dang"
            />
          </v-avatar>
        </v-col>

        <v-col cols="12" sm="8">
          <v-card flat>
            <v-card-text class="custom-color-green--text">
              <p>
                Mon parcours a fait quelques détours avant de m’amener à la
                massothérapie.
              </p>

              <p>
                J’ai eu la chance de pouvoir travailler dans le tourisme pendant
                plusieurs années. La joie que m’apportait le contact avec les
                gens se confirmait mais dans mon grand fort intérieur, j’ai
                toujours souhaité apporter plus qu’un sourire, plus qu’un unique
                service à la clientèle.
              </p>

              <p>
                Une très grande remise en question s’est imposée et la
                massothérapie m’a paru évidente.
              </p>

              <p class="font-weight-bold">
                Être à votre écoute et vous accompagner vers votre mieux-être
                est devenue une conviction.
              </p>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                text
                class="
                  custom-color-pink--text
                  custom-color-green
                  py-7
                  px-sm-7
                  font-weight-bold
                "
                href="mailto:virginiedang.massotherapeute@gmail.com"
              >
                Des questions ?<br />N’hésitez pas à m’écrire !
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
