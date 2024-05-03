
import { Col, Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const FoodForm = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title">
                        <h1>Create Food Item</h1>
                    </div>
                </div>
            </div>
            <div className="w-100 content-body">
                <Form className="custom-form">
                    <Row className='g-5'>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Food Name</Form.Label>
                                <Form.Control type="text" name="foodName" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Food Code</Form.Label>
                                <Form.Control type="text" name="foodCode" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Food Image</Form.Label>
                                <Form.Control type="text" name="foodImage" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='g-5'>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Food Category</Form.Label>
                                <Form.Control type="text" name="foodCategory" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Qty</Form.Label>
                                <Form.Control type="text" name="qty" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" name="price" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Button variant="primary" className='custom-primary-button' type="submit" value="Submit" size="lg">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
}

export default FoodForm;