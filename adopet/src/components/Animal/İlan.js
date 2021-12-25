import React, { useState, useEffect } from 'react'
import pic from "./img_snowtops.jpg";
import { Link, Router } from "react-router-dom";
import İlanDetay from "./İlanDetay"
import {Table } from 'semantic-ui-react'
import './İlan.css';

import AnimalService from './ProductService';

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
                   <Table.Cell><Link to={`/animals/${an.animalId}`}>{an.animalName}</Link></Table.Cell>
                   <Table.Cell>{an.gender}</Table.Cell>
                   <Table.Cell>{an.animalType.typeName}</Table.Cell>
                 </Table.Row>
               </Table.Body>
           
              
             </Table>

))}
        </div>
        
       
    );
}
