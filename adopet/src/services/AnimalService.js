import axios from "axios"



export default class AnimalService {
    
        getAnimal(){
            return axios.get("http://localhost:8080/api/images/getAnimalWithImageUrl")
        }
        getAnimalByID(id){
            return axios.get("http://localhost:8080/api/images/getByImageId?imageId="+ id)
        }
       
    
}
