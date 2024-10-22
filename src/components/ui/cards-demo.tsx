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
    },
    {
        category: "Reemplazo de persona",
        title: "Cambia a un esqueleto.",
        src: "aaualxblpcs1redbed3y",
    },
    {
        category: "Reemplazo de objeto",
        title: "Maquillaje de Halloween.",
        src: "ejttk1bfyhvgrhvderuv",
    },
    {
        category: "Reemplazo de fondo",
        title: "Agrega temática de Halloween.",
        src: "rgjmrs52q1hovfwozkds",
    },
    {
        category: "Reemplazo de objeto",
        title: "Agrega máscara de Jason.",
        src: "p9x2ljttbtypt4cvhvgq",
    },
];
