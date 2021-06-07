<template>
  <v-row justify="center">
    <v-col v-for="n in 3" :key="n" cols="4" sm="3">
      <v-img
        :src="`/img/virginie_dang_massage_${n}.jpg`"
        alt=""
        class="rounded"
      >
      </v-img>
    </v-col>

    <v-col cols="12" sm="6">
      <v-card rounded>
        <v-card-text
          class="custom-color-pink--text custom-color-green text-h5 text-center"
        >
          <span class="font-weight-bold">Votre mieux-être, ma priorité.</span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
