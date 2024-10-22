"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/cards-carousel";

export function CardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className=" mx-auto text-xl md:text-5xl font-bold text-orange-300 dark:text-zinc-300 ">
                Ejemplos Espeluznantes
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const data = [
    {
        category: "Reemplazo de objeto",
        title: "Cambio de suéter por disfraz de Halloween",
        src: "rb3ouj1psrnwkle806j9",
        urlImagenOriginal: "https://res.cloudinary.com/dww0lexy3/image/upload/v1729567630/soq0otpxjcp78ivonbdp.avif",
        urlImagenTransformada: "https://res.cloudinary.com/dww0lexy3/image/upload/v1729568080/rb3ouj1psrnwkle806j9.avif"
    },
    {
        category: "Reemplazo de persona",
        title: "Cambia a un esqueleto.",
        src: "aaualxblpcs1redbed3y",
        urlImagenOriginal: "https://res.cloudinary.com/dww0lexy3/image/upload/v1729567630/soq0otpxjcp78ivonbdp.avif",
        urlImagenTransformada: "https://res.cloudinary.com/dww0lexy3/image/upload/v1729570124/aaualxblpcs1redbed3y.avif"
    },
    {
        category: "Reemplazo de objeto",
        title: "Maquillaje de Halloween.",
        src: "ejttk1bfyhvgrhvderuv",
        urlImagenOriginal: "https://res.cloudinary.com/dww0lexy3/image/upload/v1729565849/uioymqqx4x9pstybyxkw.webp",
        urlImagenTransformada: "https://res.cloudinary.com/dww0lexy3/image/upload/v1729572297/ejttk1bfyhvgrhvderuv.avif"
    },
    {
        category: "Reemplazo de fondo",
        title: "Agrega temática de Halloween.",
        src: "wfqs3urzevh3fxthwvie",
        urlImagenOriginal: "https://res.cloudinary.com/dww0lexy3/image/upload/v1729621391/isn0rsizmhzphaeerkxx.jpg",
        urlImagenTransformada: "https://res.cloudinary.com/dww0lexy3/image/upload/v1729621398/wfqs3urzevh3fxthwvie.avif"
    },
    {
        category: "Reemplazo de objeto",
        title: "Agrega máscara de Jason.",
        src: "p9x2ljttbtypt4cvhvgq",
        urlImagenOriginal: "https://res.cloudinary.com/dww0lexy3/image/upload/v1729567630/soq0otpxjcp78ivonbdp.avif",
        urlImagenTransformada: "https://res.cloudinary.com/dww0lexy3/image/upload/v1729572674/p9x2ljttbtypt4cvhvgq.avif"
    },
];
