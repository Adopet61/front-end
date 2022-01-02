import React, { useState, useEffect } from 'react'


import AnimalService from '../../services/AnimalService'
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import { Button, Card, Image,Grid } from 'semantic-ui-react';


export default function İlanDetay() {
    let { id } = useParams();

    const [an, setAnimal] = useState({});
   


    useEffect(() => {
        let animalService = new AnimalService()
        animalService.getAnimalByID(id).then(result => setAnimal(result.data.data))
    }, [])


    return (
        <div>

<Grid>
  <Grid.Row>
  <Grid.Column width={4}>
  </Grid.Column>
  <Grid.Column width={12}>

        <Card.Group>
        <Card >
            
                <Image floated='right' size='mini' src={an.url} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{an.animal.animalName}</Card.Header>
                  <Card.Meta>
                   <p>{an.animalBreed.breedName}</p>
                  </Card.Meta>
                  <Card.Description>
                    {an.animal.description}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button><Link to="../Adopt">Sahiplen</Link></Button>
                </Card.Content>
        </Card>
        </Card.Group>
        


        </Grid.Column>
        </Grid.Row>
</Grid>
</div>
    )
}




<<<<<<< HEAD
=======

    
     
>>>>>>> abd063fb0025115c7fed7d44cfa7f1bb7e434c0b
