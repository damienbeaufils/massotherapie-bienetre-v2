<template>
  <v-card id="mission" class="text-center">
    <v-card-title class="custom-color-green white--text justify-center">
      <h2 class="text-h5 text-sm-h4">Ma mission</h2>
    </v-card-title>
    <v-card-text>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="3">
          <v-img
            src="/img/virginie_dang_photo_profil.jpg"
            alt="Photo de profil de Virginie Dang"
            class="rounded mx-auto mt-10 mt-sm-0"
            :max-height="$vuetify.breakpoint.xsOnly ? '200px' : 'none'"
            :max-width="$vuetify.breakpoint.xsOnly ? '200px' : 'none'"
          >
          </v-img>
        </v-col>

        <v-col cols="12" sm="9">
          <v-card flat>
            <v-card-text class="custom-color-green--text">
              <p>
                Aller à la rencontre de l’autre pour l’aider a
                <b>toujours</b> fait parti de mes valeurs.
              </p>

              <p>
                Ayant travaillé pendant plusieurs années en relation clientèle
                dans le tourisme, je me suis rendue compte que je souhaitais
                apporter plus qu’un sourire :
                <b>je voulais me sentir utile auprès des autres</b>.
              </p>

              <p>
                C’est alors que je me suis tournée vers la massothérapie et que
                je me suis découverte une curiosité inébranlable sur la
                biomécanique : je suis passée de 400 heures à plus de
                <b>1 200 heures de formation en massothérapie spécialisée</b> et
                j'ai gradué en tant qu'<b
                  >orthothérapeute pour le travail des muscles profonds</b
                >.
              </p>

              <p>
                <u>Ma mission</u> :
                <b
                  >accompagner les personnes souffrant de maux causés par des
                  blessures physiques ou psychologiques vers leur plein
                  potentiel</b
                >.
              </p>

              <p>
                <u>Mes formations</u> : orthothérapie, kinésithérapie,
                viscérale, massage suédois, lomi-lomi, drainage lymphatique,
                soin anti-cellulite, vacuothérapie (ventouses), massage adapté
                pour femme enceinte, massage anti-stress, oncologie, massage des
                tissus profonds (Deep Tissue).
              </p>
              <p class="font-italic">
                Reçus disponibles en massothérapie, kinésithérapie et
                orthothérapie pour fins d’assurances
              </p>
              <p>
                <a
                  href="https://rmpq.ca/repertoire-des-membres/clermont/virginie-dang-778809/"
                  target="_blank"
                >
                  <v-img
                    src="/img/rmpq.jpg"
                    alt="Membre du Réseau des massothérapeutes professionnels du Québec (RMPQ)"
                    max-width="500"
                    class="mx-auto"
                  ></v-img>
                </a>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
