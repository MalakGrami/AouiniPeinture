"use client";
import Image from "next/image";
import { useState } from "react";
import shape01 from "@/public/images/shape/shape-01.png";
import shape02 from "@/public/images/shape/shape-02.svg";
import shape03 from "@/public/images/shape/shape-03.svg";
import heroDark from "@/public/images/hero/hero-dark.png";


const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Aouini Peinture - L'art de transformer vos espaces"
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Excellence et savoir-faire en peinture bâtiment et revêtement mural {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                Aouini Peinture
                </span>
              </h1>
              <p>
              Bienvenue chez Aouini Peinture, le spécialiste de la peinture bâtiment intérieure et extérieure.
               Notre palette de services s'étend du revêtement mural innovant au ravalement de façade, 
               en passant par la réparation consciencieuse de dégâts des eaux et la pose méticuleuse de toile de verre.
                Notre engagement : sublimer vos murs et façades avec une finition irréprochable et durable.
                 Découvrez notre expertise et faites le choix de la qualité pour vos projets
              </p>

              
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
              <Image
              src={shape01} 
              alt="shape"
              width={46}
              height={246}
              className="absolute -left-11.5 top-0"
            />
            <Image
              src={shape02} 
              alt="shape"
              width={36.9}
              height={36.7}
              className="absolute bottom-0 right-0 z-10"
            />
            <Image
              src={shape03} 
              alt="shape"
              width={21.64}
              height={21.66}
              className="absolute -right-6.5 bottom-0 z-1"
            />
            <div className="relative aspect-[700/444] w-full">
              <Image
                src={heroDark} 
                alt="Hero"
                fill
              />
            </div>

                  
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
