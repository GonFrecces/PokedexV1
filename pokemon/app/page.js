"use client";

import React, { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import { getData, getCachedData } from "@/app/api/getPk";

import { PokemonCard } from "@/components/cardEffect";


export default function Home() {

    const [data, setData] = useState([]);

    const [cache, setCache] = useState(new Map());

    const colors = {
        'normal': '#A8A878',
        'fire': '#F08030',
        'water': '#6890F0',
        'electric': '#F8D030',
        'grass': '#78C850',
        'ice': '#98D8D8',
        'fighting': '#C03028',
        'poison': '#A040A0',
        'ground': '#E0C068',
        'flying': '#A890F0',
        'psychic': '#F85888',
        'bug': '#A8B820',
        'rock': '#B8A038',
        'ghost': '#705898',
        'dragon': '#7038F8',
        'dark': '#705848',
        'steel': '#B8B8D0',
        'fairy': '#EE99AC',
};

    useEffect(() => {
        const fetchData = async () => {

            const result = await getData(100, 0);

            const cachedResult = await getCachedData(100, 0);

            const { pokemonDetails } = result;

            console.log('pokemonDetails:', pokemonDetails);

            const data = pokemonDetails.map(pokemon => ({
                name: pokemon.name,
                image: pokemon.sprites.front_default ? pokemon.sprites.other.home.front_default : pokemon.sprites.front_default,
                types: pokemon.types.map(type => type.type.name),
                order: pokemon.order,
                id: pokemon.id,
                abilities: pokemon.abilities,
                base_experience: pokemon.base_experience,
                game_indices: pokemon.game_indices,
                height: pokemon.height,
                weight: pokemon.weight,
                moves: pokemon.moves,
                stats: pokemon.stats,
            }));

            setData(data);

            setCache(new Map(cache.set(`${100}-${0}`, cachedResult)));
        };

        fetchData();
    }, []);

    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-xl text-center justify-center">
                <span className={title()}>Make&nbsp;</span>
                <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
                <br />
                <span className={title()}>
                    websites regardless of your design experience.
                </span>
                <div className={subtitle({ class: "mt-4" })}>
                    Beautiful, fast and modern React UI library.
                </div>
            </div>

            <div className="flex gap-3">
                <Link
                    isExternal
                    className={buttonStyles({
                        color: "primary",
                        radius: "full",
                        variant: "shadow",
                    })}
                    href={siteConfig.links.docs}
                >
                    Documentation
                </Link>
                <Link
                    isExternal
                    className={buttonStyles({ variant: "bordered", radius: "full" })}
                    href={siteConfig.links.github}
                >
                    <GithubIcon size={20} />
                    GitHub
                </Link>
            </div>

            <div className="mt-8">
                <Snippet hideCopyButton hideSymbol variant="bordered">
                    <span>
                        Get started by editing <Code color="primary">app/page.tsx</Code>
                    </span>
                </Snippet>
            </div>
            <div className="grid gap-4 grid-flow-row-dense xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {data.map((pokemon, index) => (

                    <Card className="py-4 transition-transform hover:scale-105" key={index}>
                        <CardHeader className="pb-0 pt-2 px-4">
                            <div className="w-full flex justify-end items-center">
                                <div className="flex gap-2">
                                    {pokemon.types.map((type, index) => (
                                        <Snippet 
                                            key={`type-${index}`} 
                                            hideCopyButton 
                                            hideSymbol 
                                            variant="solid" 
                                            style={{backgroundColor: colors[type]}}
                                        >
                                            <small className="text-white">{type}</small>
                                        </Snippet>
                                    ))}
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2" style={{cursor: 'pointer'}}>
                            <PokemonCard pokemon={pokemon}/>
                        </CardBody>
                        <CardFooter className="gap-3">
                            <div className="flex gap-1">
                                <h5 className=" text-default-600 font-bold">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}</h5>
                            </div>
                            <div className="w-full flex justify-end items-center">
                                <Snippet hideCopyButton symbol="#" variant="bordered">
                                    <span className="text-tiny font-bold">{pokemon.order}</span>
                                </Snippet>
                            </div>
                        </CardFooter>
                    </Card>
                ))}

            </div>
        </section>
    );
}
