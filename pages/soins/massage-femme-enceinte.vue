<template>
  <v-card>
    <v-card-title
      class="custom-color-green white--text justify-center mt-5 text-center"
    >
      <h1 class="text-h5 text-sm-h4 font-weight-bold">
        Massage pour femme enceinte
      </h1>
    </v-card-title>

    <v-card-text class="pa-5 black--text">
      <v-row justify="center">
        <v-col cols="12">
          <h2 class="custom-color-green--text mb-5">
            Qu’est ce que le massage pour femmes enceintes ?
          </h2>
          <p>
            C’est un massage adapté aux femmes enceintes avec une installation
            particulière pour le <b>confort de la future maman</b>, et c’est un
            point très important !
          </p>

          <p>
            Tant que la femme enceinte est confortable, elle peut se mettre sur
            le ventre. Autrement, il est possible de la masser en étant couchée
            sur le côté ou bien avec une installation spéciale femme enceinte.
          </p>

          <p>
            Aussi, si elle le souhaite, il est également
            <b>possible de masser le ventre, tout en douceur bien évidemment</b
            >.
          </p>

          <p>
            Que ce soit pour un
            <b>massage détente aidant à réduire le stress</b> de la future maman
            ou pour <b>un soin thérapeutique pour dénouer des tensions</b>, la
            femme enceinte peut bénéficier des soins en massothérapie !
          </p>

          <p>
            <b
              >Je prends en compte les besoins et les attentes de la future
              maman afin de lui concocter le soin dont elle a besoin.</b
            >
          </p>
          <p>
            C’est un soin <b>totalement personnalisable</b> : il est possible de
            combiner un massage du dos et un drainage lymphatique des jambes par
            exemple !
          </p>
        </v-col>

        <v-col cols="12" sm="8">
          <v-img
            src="/img/services/massage_femme_enceinte.jpg"
            alt=""
            :aspect-ratio="1920 / 1280"
          ></v-img>
        </v-col>

        <v-col cols="12">
          <h3 class="custom-color-green--text mb-5">
            Est-il possible de se faire masser durant le premier trimestre ?
          </h3>
          <p>Absolument !</p>

          <p>
            Par contre, il existe quelques contre-indications au massage selon
            l’état de santé de la femme enceinte : antécédent de fausse couche,
            grossesse à risque, diabète, hypertension, prééclampsie.
          </p>

          <p>
            <b>En cas de doute, l’avis du médecin est fortement conseillé !</b>
          </p>
        </v-col>

        <v-col cols="12">
          <h3 class="custom-color-green--text mb-5">Les bienfaits</h3>
          <ul>
            <li>
              Aide à soulager les inconforts et douleurs que ce soit au niveau
              du dos, des épaules, des pieds ou ailleurs ;
            </li>
            <li>
              Favorise une meilleure circulation sanguine, ce qui aide aux
              échanges entre la mère et le bébé ;
            </li>
            <li>
              Favorise la circulation lymphatique et réduit les sensations de
              jambes lourdes par un drainage lymphatique ;
            </li>
            <li>Aide à avoir une respiration plus profonde ;</li>
            <li>Aide à soulager le stress ;</li>
            <li>Reprendre contact avec son propre corps.</li>
          </ul>
        </v-col>

        <v-col cols="12" class="text-center">
          <v-btn
            href="https://www.gorendezvous.com/virginiedang"
            target="_blank"
            class="custom-color-pink custom-color-green--text my-3 pa-7 px-sm-15 font-weight-bold text-sm-h6 text-subtitle-1"
          >
            Prendre rendez-vous
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  head() {
    return {
      title:
        'Massage pour femme enceinte |  Virginie Dang | Masso-kinésithérapeute & Orthothérapeute',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Qu’est ce que le massage pour femmes enceintes ? Est-il possible de se faire masser durant le premier trimestre ? Les bienfaits. Prise de rendez-vous.',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://kine-serenite.ca/soins/massage-femme-enceinte/',
        },
      ],
    }
  },
}
</script>

<style scoped>
li {
  margin-bottom: 0.5rem;
}

ul + p {
  margin-top: 1rem;
}
</style>
