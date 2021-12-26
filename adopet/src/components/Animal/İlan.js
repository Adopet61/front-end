import React, { useState, useEffect } from 'react'

import { Link } from "react-router-dom";

import {Table } from 'semantic-ui-react'


import AnimalService from '../../services/AnimalService';

export default function İlan() {

    const [animal, setAnimal] = useState([]);
    

    useEffect(()=>{
        let animalService = new AnimalService()
        animalService.getAnimal().then(result=>setAnimal(result.data.data))
      },[])
    
    return (
        
        <div>
           {animal.map((an) => (
               <Table celled>
               <Table.Header>
                 <Table.Row>
                   <Table.HeaderCell>Adı</Table.HeaderCell>
                   <Table.HeaderCell>Cinsiyeti</Table.HeaderCell>
                   <Table.HeaderCell>Türü</Table.HeaderCell>
                 </Table.Row>
               </Table.Header>
           
               <Table.Body>
                 <Table.Row>
                   <Table.Cell><Link to={`/Animal/${an.animalId}`}>{an.animalName}</Link></Table.Cell>
                   <Table.Cell>{an.gender}</Table.Cell>
                   <Table.Cell>{an.animalType.typeName}</Table.Cell>
                 </Table.Row>
               </Table.Body>
           
              
             </Table>

))}
        </div>
        
       
    );
}
