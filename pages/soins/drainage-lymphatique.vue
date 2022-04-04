<template>
  <v-card>
    <v-card-title
      class="custom-color-green white--text justify-center mt-5 text-center"
    >
      <h1 class="text-h5 text-sm-h4 font-weight-bold">
        Drainage lymphatique (méthode Dr. Leduc)
      </h1>
    </v-card-title>

    <v-card-text class="pa-5 black--text">
      <v-row justify="center">
        <v-col cols="12">
          <h2 class="custom-color-green--text mb-5">
            Qu’est ce que le drainage lymphatique ?
          </h2>
          <p>
            C’est une technique de massage <b>très douce</b> et <b>lente</b> qui
            stimule la circulation de la lymphe et aide à détoxiquer l’organisme
            tout en activant le système immunitaire.
          </p>
          <p>
            Par des gestes et <b>mouvements délicats</b>, le réseau de groupe
            ganglionnaire est stimulé et par la suite, la lymphe est chassée
            vers le trajet du flux lymphatique.
          </p>
          <p><b>La durée d'une séance varie de 60 à 90 minutes.</b></p>
          <p>
            Le thérapeute découvre la zone à traiter et exécute une série de
            mouvements lents et doux, <b>semblables à l'effet d'une vague</b>,
            qui créent un <b>effet de pompage</b>. Le but est de drainer les
            liquides excédentaires présents dans les tissus et d'améliorer la
            circulation.
          </p>
          <p>
            <b
              >Plusieurs séances peuvent être nécessaires avant d'obtenir des
              résultats apparents.</b
            >
          </p>
          <p>
            Il existe certaines contre-indications au drainage lymphatique.
            <b
              >Les contre-indications au drainage lymphatique sont les mêmes que
              pour la plupart des techniques</b
            >
            : fièvre, infection, plaies ou problèmes cutanés et antécédents de
            troubles cardiaques.
          </p>
          <p>
            Des précautions sont à prendre en considération dans le cas d’une
            personne atteinte d’un cancer, d’asthme, d’insuffisance rénale,
            d’hyperthyroïdie, d’hypotension artérielle, de phlébites, de grosses
            varices douloureuses, de chirurgie abdominale ou d’inflammation en
            phase aiguë.
          </p>
          <p><b>Si vous avez un doute, parlez-en à votre médecin !</b></p>
        </v-col>

        <v-col cols="12" sm="8">
          <v-img
            src="/img/services/drainage_lymphatique.jpg"
            alt=""
            :aspect-ratio="1920 / 1280"
          ></v-img>
        </v-col>

        <v-col cols="12">
          <h3 class="custom-color-green--text mb-5">Pour qui ?</h3>
          <ul>
            <li>
              <b>Femme enceinte, femme qui allaite ;</b>
              <ul>
                <li>Jambe lourde, oedème,</li>
                <li>Engorgement des seins .</li>
              </ul>
            </li>
            <li>Personne âgée, <b>personne insomniaque</b> ;</li>
            <li>
              Personne
              <b>devant subir une chirurgie ou ayant subi une chirurgie</b> ;
              <ul>
                <li>
                  Augmentation des anticorps pour contrer les risques
                  d’infection,
                </li>
                <li>Amélioration de la cicatrisation de la peau.</li>
              </ul>
            </li>
            <li>Les personnes souffrant d’<b>allergies</b> ;</li>
            <li>
              Personne souvent sujette à la <b>toux</b>, la <b>grippe</b> ;
            </li>
            <li>Personne en <b>cure d’amaigrissement</b> ;</li>
            <li>
              Personne ayant un/des <b>oedème(s)</b>, des
              <b>sensations de jambes lourdes</b> ;
            </li>
            <li>Personne souffrant de <b>fibromyalgie</b>, etc.</li>
          </ul>
        </v-col>

        <v-col cols="12">
          <h3 class="custom-color-green--text mb-5">Les bienfaits</h3>
          <ul>
            <li>Réduit les oedèmes ;</li>
            <li>Favorise la circulation lymphatique ;</li>
            <li>
              <b>Améliore l’élimination des toxines</b> en drainant les déchets
              et le surplus de liquide ;
            </li>
            <li><b>Renforce le système immunitaire</b> ;</li>
            <li>Aide à <b>prévenir les allergies saisonnières</b> ;</li>
            <li>Aide à prévenir et/ou soulager les <b>jambes lourdes</b> ;</li>
            <li>
              <b>Pré et post-chirurgie</b> pour aider le corps à la
              cicatrisation en augmentant la production de nouvelles cellules ;
            </li>
            <li>
              <b>Très relaxant</b>, c’est un
              <b>soin qui procure une grande détente</b>.
            </li>
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
        'Drainage lymphatique |  Virginie Dang | Masso-kinésithérapeute & Orthothérapeute',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Qu’est ce que le drainage lymphatique ? Pour qui ? Les bienfaits. Prise de rendez-vous pour un drainage lymphatique.',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.massotherapie-bienetre.com/soins/drainage-lymphatique/',
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

li li {
  margin-top: 0.25rem;
}

ul + p {
  margin-top: 1rem;
}
</style>
