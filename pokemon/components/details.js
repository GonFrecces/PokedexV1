"use client";
import React, { useState, useEffect } from "react";

import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter, Image, Button, Card, CardBody, CardHeader, CardFooter, Avatar } from "@nextui-org/react";

const PokemonDetails = ({ pokemon , isOpen, onOpen, onClose }) => {

    const [isFollowed, setIsFollowed] = useState(false);

    useEffect(() => {
        if (pokemon !== 0) {
            console.log('Detalles del Pokémon:', pokemon);
        }
    }, [pokemon]);


    return (
        <Modal isOpen={isOpen} size={'4xl'} onClose={onClose} backdrop={'blur'}>
            <ModalContent>
                <ModalHeader>{pokemon.name}</ModalHeader>
                <ModalBody className="overflow-visible py-2">
                    <div className="grid grid-cols-2 gap-2">
                        <Card className="col-span-1">
                            <CardBody className="relative z-10">
                                <Image
                                    alt={`${pokemon.name} image`}
                                    className="object-cover rounded-sm"
                                    src={pokemon.image}
                                    width={273}
                                />
                            </CardBody>
                            
                        </Card>
                        <Card className="col-span-1">
                            <CardHeader className="justify-between">
                                <div className="flex gap-5">
                                <Avatar
                                    isBordered
                                    radius="full"
                                    size="md"
                                    src="/assets/pokeball.png"
                                />
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                                    <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                                </div>
                                </div>
                                <Button
                                    className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                                    color="primary"
                                    radius="full"
                                    size="sm"
                                    variant={isFollowed ? "bordered" : "solid"}
                                    onPress={() => setIsFollowed(!isFollowed)}
                                >
                                {isFollowed ? "Unfollow" : "Follow"}
                                </Button>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-small text-default-400">
                                <p>Frontend developer and UI/UX enthusiast. Join me on this coding adventure!</p>
                                <span className="pt-2">#FrontendWithZoey
                                    <span aria-label="computer" className="py-2" role="img">💻</span>
                                </span>
                            </CardBody>
                            <CardFooter className="gap-3">
                                <div className="flex gap-1">
                                    <p className="font-semibold text-default-400 text-small">4</p>
                                    <p className=" text-default-400 text-small">Following</p>
                                </div>
                                <div className="flex gap-1">
                                    <p className="font-semibold text-default-400 text-small">97.1K</p>
                                    <p className="text-default-400 text-small">Followers</p>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onPress={() => setSelectedId(0)}>Cerrar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export { PokemonDetails };