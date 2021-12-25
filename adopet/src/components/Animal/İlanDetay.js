import React, { useState, useEffect } from 'react'
import pic1 from "./img_snowtops.jpg";
import "./ilanDetay.css"
import AnimalService from './ProductService';
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import { Button,Card, Image } from 'semantic-ui-react';


export default function İlanDetay() {
    let {id } = useParams();

    const [animalDetail, setAnimalDetail] = useState({});


    useEffect(() => {
        let animalService = new AnimalService()
        animalService.getAnimalByID(id).then(result => setAnimalDetail(result.data.data))
    }, [])


    return (
        <Card>
            {animalDetail.map((an) => (
                <div>
                <Image src={an.url} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{an.animalName}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{an.animalBreed.breedName}</span>
                  </Card.Meta>
                  <Card.Description>
                    {an.description}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button>Sahiplen</Button>
                </Card.Content>
                </div>
            ))}

        </Card>
    )
}
