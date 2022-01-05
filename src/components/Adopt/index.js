
import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,

  Button,
  Alert,
} from "reactstrap";



 function index() {

  
  return (
    <div>
    <Alert>
      
    <h4 className="alert">
  
    </h4>
    <p>
    Kurallarımız:<ul>
  <li>Sahiplenecek kişinin 18 yaşını doldurmuş olması gerekir.</li>
  <li>Birimlerimize sahiplenme için uygun bir araçla gelmelisiniz.</li>
  <li>Sahiplenmeye gelirken yanınızda tasma veya taşıma kafesiniz olmalıdır.</li>
  <li>Sahiplenen evcil dostumuza bakamıyorsanız aldığınız birime geri bırakmanız zorunludur. Sokağa terk etmeyiniz!</li>
  <li>Köpek / kedi sahiplenecek kişinin T.C. kimlik fotokopisi,  beyanı ve sahiplenme tutanağı yeterlidir.</li>
   </ul>   
    </p>
    <hr />
  
  </Alert>
  <h4 >Dostumuzu Sahiplenmek İçin Lütfen Formu Doldurunuz</h4>
    <Form>
      
      <FormGroup>
        <Label for="name">
          İsim
        </Label>
        <Input
          id="name"
          name="name"
      
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="surname">
          Soyisim
        </Label>
        <Input
          id="phone"
          name="phone"
          
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          
          type="email"
        />
      </FormGroup>
      
    
    <FormGroup>
    <Label for="exampleSelect">
    Daha Önce Evcil Hayvanınız Oldu Mu?
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        EVET
      </option>
      <option>
        HAYIR
      </option>
      
    </Input>
  </FormGroup>
      <FormGroup>
        <Label for="exampleText">
          Neden Hayvan Sahiplenmek İstiyorsunuz?
        </Label>
        <Input
          id="exampleText"
          name="text"
          type="textarea"
        />
      </FormGroup>
      
       
      
      <Button 
      name = "submit"
       color="success">
        GÖNDER
      </Button>
    </Form>
</div>
  );

}
export default index;