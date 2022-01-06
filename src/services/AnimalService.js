import axios from "axios"



export default class AnimalService {

        getAnimal(){
            return axios.get("http://localhost:8080/api/animals/getall")
        }
        getAnimalByID(id){
            return axios.get("http://localhost:8080/api/animals/getbyid?animalId=" + id)
        }
        getAnimalByimg(id){
            return axios.get("http://localhost:8080/api/images/getByAnimalId?animalId=" + id )
        }
    }
