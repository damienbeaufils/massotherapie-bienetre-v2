<template>
  <v-row justify="center">
    <v-col v-for="n in 2" :key="n" cols="6" sm="4">
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="rounded"
      >
      </v-img>
    </v-col>

    <v-col cols="12">
      <v-card rounded>
        <v-card-text
          class="custom-color-pink--text custom-color-green text-h6 text-center"
        >
          <span class="font-italic"
            >«&nbsp;Prendre une pause, briser volontairement le rythme, c'est se
            donner le temps de vivre&nbsp;»</span
          >
          <span class="text-body-1">- Robert Brisebois</span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
