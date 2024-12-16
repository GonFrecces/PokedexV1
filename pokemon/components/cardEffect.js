import React, { useEffect, useState } from 'react';
import { Image, useDisclosure } from "@nextui-org/react";

import { PokemonDetails } from "@/components/details";

const TYPE_COLORS = {
    normal: '#E0E0C3',  // Beige claro
    fire: '#FFB39B',    // Naranja melocotón
    water: '#B3D4FF',   // Azul cielo claro
    electric: '#FFE7A3', // Amarillo pastel
    grass: '#C1E6B5',   // Verde menta claro
    ice: '#D4F5F5',     // Azul hielo claro
    fighting: '#EFB3B3', // Rojo suave
    poison: '#E0B3E6',  // Púrpura lavanda
    ground: '#F5DEB3',  // Arena clara
    flying: '#E6E6FF',  // Lila claro
    psychic: '#FFB3D9', // Rosa suave
    bug: '#D9E6B3',     // Verde lima claro
    rock: '#E6D5B3',    // Marrón arena claro
    ghost: '#CCB3E6',   // Púrpura fantasma claro
    dragon: '#B3B3FF',  // Azul dragón claro
    dark: '#C2B3A3',    // Gris marrón claro
    steel: '#E6E6E6',   // Plateado claro
    fairy: '#FFE6F0'    // Rosa fairy claro
};

const PokemonCard = ({ pokemon }) => {

    
    const getBackgroundStyle = (types) => {
        if (!Array.isArray(types) || types.length === 0) return {};
        
        const type1 = types[0].toLowerCase();
        const type2 = types.length > 1 ? types[1].toLowerCase() : null;
        
        if (!type2) {
            // Single type: gradiente simple
            return {
                background: `linear-gradient(135deg, 
                    ${TYPE_COLORS[type1]} 0%, 
                    ${TYPE_COLORS[type1]}dd 70%)`  // Añadiendo algo de transparencia al final
            };
        }

        // Dual type: gradiente mezclado
        return {
            background: `linear-gradient(135deg, 
                ${TYPE_COLORS[type1]} 0%, 
                ${TYPE_COLORS[type1]}dd 30%, 
                ${TYPE_COLORS[type2]}dd 60%, 
                ${TYPE_COLORS[type2]} 100%)`
        };
    };

    const [selected, setSelected] = useState(0);
    const {isOpen, onOpen, onClose} = useDisclosure();


    return (
        <div className="overflow-visible py-2 relative" style={{ cursor: 'pointer' }} onClick={() => {setSelected(pokemon); onOpen();}}>
            <div 
                className="absolute inset-0 rounded-xl transition-all duration-300"
                style={getBackgroundStyle(pokemon.types)}
            />
            <div className="relative z-10">
                <Image
                    alt={`${pokemon.name} card`}
                    className="object-cover rounded-xl"
                    src={pokemon.image}
                    width={270}
                />
            </div>
            <PokemonDetails pokemon={selected} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
        </div>
        
    );
};

export { PokemonCard };