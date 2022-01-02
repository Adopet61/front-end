


import {
  Form,
  FormGroup,
  Label,
  Input,

  Button,
  Alert,
  Row,
  Col,

} from "reactstrap";



function index() {

    return (
      <div>
        <Alert>

          <h4 className="alert">

          </h4>
          <p>
            Sahiplendirmek İçin Formu Doldurunuz.

          </p>
          <hr />

        </Alert>
        <Form>


          <FormGroup>
            <Col md={10}>
              <Label for="animalName">
                Sahipsiz Dostumuzun İsim
              </Label>
              <Input
                id="animalName"
                name="animalName"
                type="text"
             
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col md={10}>
              <Label for="animalType">
                Türü
              </Label>
              <Input
                id="animalType"
                name="animalType"
                type="select"
                
              >
                <option>
                  Kedi
                </option>
                <option>
                  Köpek
                </option>

              </Input>
            </Col>
          </FormGroup>

          <Row form>
            <Col md={5}>
              <FormGroup>
                <Label for="animalBreed">
                  Cinsi
                </Label>
                <Input
                  id="animalBreed"
                  name="animalBreed"
                  type="text"
                  
                />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label for="vaccine">
                  Olduğu Aşılar
                </Label>
                <Input
                  id="vaccine"
                  name="vaccine"
                  type="text"
                  
                />
              </FormGroup>
            </Col>
          </Row>




          <FormGroup>
            <Col md={10}>
              <Label for="yearOfBirth">
                Doğum Tarihi
              </Label>
              <Input
                id="yearOfBirth"
                name="yearOfBirth"
                
                type="date"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col md={10}>
              <Label for="animalSex">
                Cinsiyeti
              </Label>
              <Input
                id="animalSex"
                name="animalSex"
                type="select"
                
              >
                <option>
                  Dişi
                </option>
                <option>
                  Erkek
                </option>

              </Input>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col md={10}>
              <Label for="barren">
                Kısır Mı?
              </Label>
              <Input
                id="barren"
                name="barren"
                type="select"
          
              >
                <option>
                  Evet
                </option>
                <option>
                  Hayır
                </option>

              </Input>
            </Col>
          </FormGroup>
          <Row form>
            <Col md={5}>
              <FormGroup>
                <Label for="firstname">
                  İsim
                </Label>
                <Input
                  id="firstname"
                  name="firstname"
                  type="text"
                  
                />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label for="lastName">
                  Soyisim
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={5}>
              <FormGroup>
                <Label for="email">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  
                />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label for=" phoneNumber">
                  Telefon Numaranız
                </Label>
                <Input
                  id=" phoneNumber"
                  name=" phoneNumber"
                  type="text"
                  
                />
              </FormGroup>
            </Col>
          </Row>


          <FormGroup>
            <Col md={10}>
              <Label for="file">
                Dostumuzun Resmini Yükleyin
              </Label>
              <Input
                id="file"
                name="file"
                type="file"
                
              />
            </Col>
          </FormGroup>

          <Button
            name="submit"
            color="success"
            
          >

            GÖNDER
          </Button>
        </Form>
      </div>
    );
  
    }

    


export default index;