import React, { useState, useEffect } from "react";

import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter} from "@nextui-org/react";

const PokemonDetails = ({ pokemon , isOpen, onOpen, onClose }) => {

    useEffect(() => {
        if (pokemon !== 0) {
            console.log('Detalles del Pokémon:', pokemon);
        }
    }, [pokemon]);


    return (
        <Modal isOpen={isOpen} size={'4xl'} onClose={onClose} backdrop={'blur'}>
            <ModalContent>
                <ModalHeader>{pokemon.name}</ModalHeader>
                <ModalBody>
                    <p>¡Aquí irán los detalles del Pokémon seleccionado!</p>
                </ModalBody>
                <ModalFooter>
                    <button onClick={() => setSelectedId(0)}>Cerrar</button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export { PokemonDetails };