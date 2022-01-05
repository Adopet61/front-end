import React, { useState, useEffect } from 'react'


import AnimalService from '../../services/AnimalService'
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import { Button, Card, Image,Grid } from 'semantic-ui-react';


export default function İlanDetay() {
    let { id } = useParams();

    const [ana, setAnimal] = useState({});
    const [animg,setAnimg] = useState([]);



    useEffect(() => {
        let animalService = new AnimalService()
        animalService.getAnimalByID(id).then(result => setAnimal(result.data.data))
    }, [])
    useEffect(() => {
      let animalService = new AnimalService()
      animalService.getAnimalByimg(id).then(result => setAnimg(result.data.data))
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

                <Image floated='right' size='mini' src={animg.url} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{ana.animalName}</Card.Header>
                  <Card.Meta>
                   <p>{ana.description}</p>
                  </Card.Meta>
                  <Card.Description>
                   <b>Doğum Yılı:</b> {ana.yearOfBirth}
                  </Card.Description>

                  <Card.Description>
                  <b> Cinsiyeti: </b> {ana.gender}
                  </Card.Description>

                  <Card.Description>
                  <b> Aşı Durumu:</b> {ana.infertilityStatus}
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