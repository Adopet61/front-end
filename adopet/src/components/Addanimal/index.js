import React from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

function Addanimal() {
    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="petName">
                        Dostumuzun İsmi
                    </Label>
                    <Input
                        id="petName"
                        name="name"
                        type="name"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="petType">
                        Türü
                    </Label>
                    <Input
                        id="petType"
                        name="type"
                        type="select"
                    >
                        <option>
                            Kedi
                        </option>
                        <option>
                            Köpek
                        </option>

                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="petBreed">
                        Cinsi
                    </Label>
                    <Input
                        id="petBreed"
                        name="breed"
                        placeholder="örneğin:Tekir"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="petBarren">
                        Kısır Mı?
                    </Label>
                    <Input
                        id="petBarren"
                        name="barren"
                        type="select"
                    >
                        <option>
                            Kısır
                        </option>
                        <option>
                            Kısır Değil
                        </option>

                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="petGender">
                        Cinsiyeti
                    </Label>
                    <Input
                        id="petGender"
                        name="gender"
                        type="select"
                    >
                        <option>
                            Dişi
                        </option>
                        <option>
                            Erkek
                        </option>

                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="Hname">
                        İsim-Soyisim
                    </Label>
                    <Input
                        id="hName"
                        name="name"
                        type="name"
                    />
                </FormGroup>
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
                <FormGroup>
                    <Label for="text">
                        Açıklama
                    </Label>
                    <Input
                        id="text"
                        name="text"
                        type="textarea"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="file">
                        Dostumuzun Fotoğrafını Yükleyiniz
                    </Label>
                    <Input
                        id="file"
                        name="file"
                        type="file"
                    />
            
                </FormGroup>
                
                <Button>
                    GÖNDER
                </Button>
            </Form>
        </>
    )
}

export default Addanimal;
