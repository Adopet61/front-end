import React, { useState, useEffect } from 'react'

import { Link } from "react-router-dom";

import {Table } from 'semantic-ui-react'


import AnimalService from '../../services/AnimalService';

export default function İlan() {

    const [animals, setAnimals] = useState([]);
    

    useEffect(()=>{
        let animalService = new AnimalService()
        animalService.getAnimal().then(result=>setAnimals(result.data.data))
      },[])
    
    return (
        
        <div>
          
               <Table celled>
               <Table.Header>
                 <Table.Row>
                   <Table.HeaderCell>Adı</Table.HeaderCell>
                   <Table.HeaderCell>Cinsiyeti</Table.HeaderCell>
                   <Table.HeaderCell>Türü</Table.HeaderCell>
                 </Table.Row>
               </Table.Header>

               <Table.Body>
               {animals.map((an) => (
                 <Table.Row>
                   <Table.Cell><Link to={`/Animal/${an.animalId}`}>{an.animalName}</Link></Table.Cell>
                   <Table.Cell>{an.gender}</Table.Cell>
                   <Table.Cell>{an.animalType.typeName}</Table.Cell>
                 </Table.Row>
                 ))}
               </Table.Body>
           
              
             </Table>


        </div>
        
       
    );
}