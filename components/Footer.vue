<template>
  <v-footer app>
    <v-row justify="center">
      <v-btn
        text
        class="my-2 mx-sm-5 pa-0"
        href="https://www.facebook.com/virginiedang.massotherapeute"
        target="_blank"
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn
        text
        class="my-2 mx-sm-5 pa-0"
        href="https://www.gorendezvous.com/virginiedang-mapp"
        target="_blank"
      >
        <v-img
          src="img/LogoFull_GOrendezvous.png"
          height="30"
          width="100"
          alt="Prendre un rendez-vous"
        ></v-img>
      </v-btn>
      <v-btn
        text
        class="my-2 mx-sm-5 pa-0"
        href="mailto:virginiedang.massotherapeute@gmail.com"
      >
        <v-icon>mdi-email</v-icon>
        <small class="d-none d-sm-flex"
          >&nbsp;virginiedang.massotherapeute@gmail.com</small
        >
      </v-btn>
      <v-btn text class="my-2 mx-sm-5 pa-0" href="tel:5146041223">
        <v-icon>mdi-phone</v-icon>
        <small class="d-none d-sm-flex">&nbsp;514-604-1223</small>
      </v-btn>
      <v-btn text class="my-2 mx-sm-5 pa-0 d-none d-sm-flex" disabled>
        <small>&copy; {{ new Date().getFullYear() }} - Virginie Dang</small>
      </v-btn>
    </v-row>
  </v-footer>
</template>
