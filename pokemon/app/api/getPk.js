import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';
const BATCH_SIZE = 50; // Número de solicitudes simultáneas

/**
 * Obtiene datos de Pokémon de forma optimizada
 * @param {number} limit - Número de Pokémon a obtener
 * @param {number} offset - Punto de inicio para la paginación
 * @returns {Promise<{data: any, pokemonDetails: any[]}>}
 */
const getData = async (limit = 100, offset = 0) => {
    try {
        // 1. Obtener la lista inicial de Pokémon
        const response = await axios.get(`${BASE_URL}/pokemon/`, {
            params: {
                limit,
                offset
            }
        });

        // 2. Procesar los resultados en lotes para evitar sobrecarga
        const pokemonDetails = [];
        const names = response.data.results;

        for (let i = 0; i < names.length; i += BATCH_SIZE) {
            const batch = names.slice(i, i + BATCH_SIZE);
            
            // Crear promesas para el lote actual
            const batchPromises = batch.map(pokemon => 
                axios.get(pokemon.url)
                    .then(res => res.data)
                    .catch(error => {
                        console.error(`Error fetching ${pokemon.name}:`, error.message);
                        return null;
                    })
            );

            // Esperar a que se completen todas las promesas del lote
            const batchResults = await Promise.allSettled(batchPromises);
            
            // Filtrar y agregar solo los resultados exitosos
            const successfulResults = batchResults
                .filter(result => result.status === 'fulfilled' && result.value)
                .map(result => result.value);
            
            pokemonDetails.push(...successfulResults);
        }

        return {
            data: response.data,
            pokemonDetails
        };
    } catch (error) {
        console.error('Error en getData:', error.message);
        throw new Error('Error al obtener datos de Pokémon');
    }
};

/**
 * Caché simple para almacenar resultados
 */
const cache = new Map();

/**
 * Versión con caché de getData
 */
const getCachedData = async (limit = 100, offset = 0) => {
    const cacheKey = `${limit}-${offset}`;
    
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }

    const result = await getData(limit, offset);
    cache.set(cacheKey, result);
    return result;
};

export { getData, getCachedData };