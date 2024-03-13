import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import image3 from "@/public/images/user/user-03.png"; // Assurez-vous que ces images existent
import image4 from "@/public/images/user/user-04.png";
import image5 from "@/public/images/user/user-05.png";
import image6 from "@/public/images/user/user-06.png";
import image7 from "@/public/images/user/user-07.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Martine Lavoie",
    designation: "Directrice générale",
    image: image1,
    content:
      "L'équipe d'Aouini Peinture a transformé notre espace de bureau avec un professionnalisme et une attention aux détails remarquables. Je recommande vivement leurs services.",
  },
  {
    id: 2,
    name: "Lucas Bonnet",
    designation: "Propriétaire de maison",
    image: image2,
    content:
      "Grâce au ravalement de façade réalisé par Aouini Peinture, notre maison semble désormais comme neuve. Leur travail est exceptionnel et l'équipe est très professionnelle.",
  },
  {
    id: 3,
    name: "Sophie Durand",
    designation: "Gérante de commerce",
    image: image5,
    content:
      "Aouini Peinture nous a conseillé les meilleures options pour rafraîchir notre intérieur. Le résultat est absolument magnifique, créant un espace accueillant pour nos clients.",
  },
  {
    id: 4,
    name: "Émile Petit",
    designation: "Architecte",
    image: image6,
    content:
      "Collaborer avec Aouini Peinture est toujours un plaisir. Leur expertise et leur finition impeccable contribuent grandement à la réussite de nos projets architecturaux.",
  },
  {
    id: 5,
    name: "Julie Verne",
    designation: "Designer d'intérieur",
    image: image7,
    content:
      "La capacité d'Aouini Peinture à travailler avec précision sur des projets complexes est impressionnante. Leur sens du détail et leur approche créative ont ajouté une valeur inestimable à nos designs.",
  },
  {
    id: 6,
    name: "Alex Joubert",
    designation: "Entrepreneur",
    image: image4,
    content:
      "Le professionnalisme d'Aouini Peinture a transformé notre lieu de travail. Leur attention au détail et leur engagement envers la qualité sont sans égal.",
  },
  {
    id: 7,
    name: "Isabelle Morin",
    designation: "Propriétaire d'appartement",
    image: image5,
    content:
      "Les services de peinture d'Aouini Peinture ont revitalisé mon appartement. L'équipe est fiable, professionnelle, et le résultat est tout simplement époustouflant.",
  },
  {
    id: 8,
    name: "Thomas Lefevre",
    designation: "Directeur de projet",
    image: image3,
    content:
      "Aouini Peinture est notre partenaire privilégié pour tous nos besoins en peinture. Leur expertise et leur efficacité permettent à chaque projet d'atteindre un niveau supérieur de qualité.",
  },
];
