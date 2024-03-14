import { Blog } from "@/types/blog";
import blog01 from "@/public/images/blog/blog-01.jpeg";
import blog02 from "@/public/images/blog/blog-02.jpeg";
import blog03 from "@/public/images/blog/blog-03.jpeg";
import blog04 from "@/public/images/blog/blog-04.jpeg";
import blog05 from "@/public/images/blog/blog-05.jpeg";
import blog06 from "@/public/images/blog/blog-06.jpeg";


const BlogData: Blog[] = [
  {
    _id: 1,
    mainImage: blog01,
    title: "Contraste Sophistiqué",
    metadata:
      "Notre expertise en nuances et contrastes révèle toute sa splendeur dans cet espace d'escalier, grâce à une peinture murale en noir et blanc aux motifs délicats.",
  },
  {
    _id: 2,
    mainImage:blog02,
    title: "Vitalité en Escalie",
    metadata:
      "Des couleurs vives qui donnent vie à l'espace, égayant chaque marche.",
  },
  {
    _id: 2,
    mainImage: blog03,
    title: "Nuances Enfantines.",
    metadata:
      "Un équilibre charmant de gris, turquoise et blanc pour un cocon doux et chaleureux.",
  },
  {
    _id: 1,
    mainImage: blog04,
    title: "Harmonie Intérieure",
    metadata:
      "Un intérieur qui marie avec finesse le blanc et le noir, créant une ambiance moderne et accueillante.",
  },
  {
    _id: 2,
    mainImage:blog05,
    title: "Splendeur Extérieure",
    metadata:
      "Notre travail de peinture extérieure révèle toute la grandeur de cette vaste maison, en parfaite harmonie avec son environnement.",
  },
  {
    _id: 2,
    mainImage: blog06,
    title: "Engagement Personnel.",
    metadata:
      "Travail minutieux sur l'extérieur d'une maison, illustrant notre souci du détail et notre passion pour la peinture.",
  },
];

export default BlogData;
