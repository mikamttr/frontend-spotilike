<template>
  <div class="wrapper">
    <h1>Genres</h1>
    <div class="genre-cards-container">
      <GenreCard v-for="(genre, index) in genres" :key="genre.id" :genre="genre" :index="index" />
    </div>
  </div>
</template>

<script>
import GenreCard from '@/components/GenresCard.vue';

export default {
  name: 'GenreView',
  components: {
    GenreCard,
  },
  data() {
    return {
      genres: [
        { id: 1, title: "Rap", description: "Un genre musical caractérisé par des paroles rythmées et un style de chant appelé 'flow'. Le rap est souvent associé à des beats électroniques et des sonorités urbaines." },
        { id: 2, title: "R&B", description: "Le R&B (Rhythm and Blues) mélange des éléments de soul, de funk et de pop. Il est centré sur des mélodies douces et des paroles émotionnelles souvent axées sur l'amour et les relations." },
        { id: 3, title: "Pop", description: "La musique pop est un genre populaire et accessible, connu pour ses mélodies accrocheuses et ses structures de chanson simples, qui ont une large audience." },
        { id: 4, title: "Reggae", description: "Le reggae est un genre de musique jamaïcain influencé par le ska et le rocksteady. Il se caractérise par un rythme détendu, des paroles souvent axées sur des messages sociaux et politiques." },
        { id: 5, title: "Soul", description: "La soul music est un genre qui combine des éléments de gospel, de blues et de rhythm and blues. Elle se distingue par des voix puissantes et une forte émotion dans l'interprétation." },
        { id: 6, title: "Trap", description: "Le trap est un sous-genre du rap, caractérisé par des beats lourds et des rythmes saccadés. Il met l'accent sur des paroles qui traitent souvent de la rue, de la vie dure et de l'aspiration." },
        { id: 7, title: "Electronique", description: "La musique électronique utilise des instruments électroniques et des ordinateurs pour créer des sons, des rythmes et des textures. Ce genre englobe une large variété de styles, de la techno à la house." },
        { id: 8, title: "Jazz", description: "Le jazz est un genre musical né aux États-Unis, qui se caractérise par l'improvisation, la complexité harmonique et une grande liberté d'interprétation." },
        { id: 9, title: "Blues", description: "Le blues est un genre musical américain qui exprime des émotions profondes, souvent liées à la souffrance et aux difficultés de la vie, avec une structure harmonique simple mais poignante." },
        { id: 10, title: "Metal", description: "Le metal est un genre de rock qui se caractérise par des riffs de guitare puissants, des rythmes rapides et des thématiques souvent sombres ou rebelles." }
      ]
    };
  }
};
</script>

<style>
.genre-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
</style>
