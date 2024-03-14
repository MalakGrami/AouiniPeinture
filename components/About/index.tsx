"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutLightImage from "@/public/images/about/about-light-01.png";



const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section id="about" className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src={aboutLightImage}
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src={aboutLightImage}
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              À propos d'Aouini 
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                Peinture
                </span>
              </h2>
              
              <p>
              Fondée sur la passion et l'expertise en matière de peinture et de revêtement, 
              Aouini Peinture est une entreprise qui met son savoir-faire au service de vos projets .
               Nos artisans peintres qualifiés transforment vos espaces intérieurs et extérieurs, 
               donnant vie à vos idées avec précision et attention au détail. Du ravalement de façade à la pose de toile de verre,
                en passant par la réhabilitation suite à des dégâts des eaux, nous assurons un travail soigné qui parle de lui-même.
                 Engagés pour l'excellence, nous utilisons des matériaux de qualité et les meilleures techniques pour garantir des finitions parfaites. 
                 Confiez-nous vos envies, Aouini Peinture s'occupe de les réaliser avec éclat.
              </p>
              

              
              
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

     
    </>
  );
};

export default About;
