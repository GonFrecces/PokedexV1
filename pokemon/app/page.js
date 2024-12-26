"use client";

import React, { useEffect, useState } from "react";
import { Snippet } from "@nextui-org/snippet";
import { Card, Skeleton, CardBody, CardFooter, Button } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { title } from "@/components/primitives";
import { getData, getCachedData } from "@/app/api/getPk";
import { PokemonCard } from "@/components/cardEffect";


const Home = () => {

    const [data, setData] = useState([]);

    const [cache, setCache] = useState(new Map());

    const [isLoaded, setIsloaded] = useState(false);

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

    const generations = [
        {'generation': 'Kanto', 'amount': 151, 'offset': 0 },
        {'generation': 'Johto', 'amount': 100, 'offset': 151 },
        {'generation': 'Hoenn', 'amount': 135, 'offset': 251 },
        {'generation': 'Sinnoh', 'amount': 107, 'offset': 386 },
        {'generation': 'Unova', 'amount': 156, 'offset': 493 },
        {'generation': 'Kalos', 'amount': 72, 'offset': 649 },
        {'generation': 'Alola', 'amount': 88, 'offset': 721 },
        {'generation': 'Galar', 'amount': 89, 'offset': 809 },
        {'generation': 'Paldea', 'amount': 120, 'offset': 905 },
    ]

    useEffect(() => {
        const fetchData = async () => {

            const result = await getData(151, 0, setIsloaded);

            const cachedResult = await getCachedData(151, 0, setIsloaded);

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

                <span className={title({ color: "violet" })}>Pokemon&nbsp;</span>

            </div>

            <div className="mt-8">
                {
                    generations.map((generation, index) => (
                        <Button key={index} className="m-1" onPress={async () => {
                            
                            const result = await getData(generation['amount'], generation['offset'], setIsloaded);
                            const cachedResult = await getCachedData(generation['amount'], generation['offset'], setIsloaded);
                            const { pokemonDetails } = result;
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
                            setCache(new Map(cache.set(`${generation['amount']}-${generation['offset']}`, cachedResult)));



                        }}>
                            <a className={buttonStyles({ color: "violet" })}>
                                {generation['generation'].charAt(0).toUpperCase() + generation['generation'].slice(1).toLowerCase()}
                            </a>
                        </Button>
                    ))
                }
            </div>

            <div className="grid gap-4  xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">


                {data.map((pokemon, index) => (

                    <Skeleton className="rounded-lg w-full" key={index} isLoaded={isLoaded} width={273} height={273}>

                        <Card className="transition-transform hover:scale-105 dark:bg-default-100" key={index}>
                            <CardBody className="p-2 cursor-pointer" >
                                <PokemonCard pokemon={pokemon} />
                            </CardBody>
                            <CardFooter className=" pt-2 px-2 flex-col items-start">
                                <h5 className=" text-default-600 font-bold">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}</h5>
                                <div className="flex gap-1 pt-1">
                                    {pokemon.types.map((type, index) => (
                                        <Snippet
                                            key={`type-${index}`}
                                            hideCopyButton
                                            hideSymbol
                                            variant="solid"
                                            style={{ backgroundColor: colors[type] }}
                                        >
                                            <small className="text-white">{type}</small>
                                        </Snippet>
                                    ))}

                                </div>


                            </CardFooter>
                        </Card>

                    </Skeleton>

                ))}


            </div>

        </section>
    );
}

export default Home;