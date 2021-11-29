import React from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Registro = () => {

    return (
        <div className="container-card">
            <Card>
                <Card.Body>
                    <Card.Title >Registro</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su nombre"
                                name="nombre"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingrese su correo"
                                name="email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su contraseña"
                                name="pass1"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                            <Form.Label>Repita contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su contraseña"
                                name="pass2"
                            />
                        </Form.Group>
                        <div className="container-botom">
                            <Button variant="danger" type="submit">
                                Registrarse
                            </Button>
                            <hr />
                            <span>¿Ya tienes una cuenta? <Link to="/"> Inicia sesión</Link></span>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div >
    )
}