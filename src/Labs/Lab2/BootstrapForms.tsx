import {
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    FormSelect,
    FormCheck,
    Row,
    Col,
    Button
  } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
  
  export default function BootstrapForms() {
    return (
      <div id="wd-css-bootstrap-forms">
        <h2>Forms</h2>
  
        {/* Email Field */}
        <FormGroup className="mb-3" controlId="wd-email">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" placeholder="name@example.com" />
        </FormGroup>
  
        {/* Textarea */}
        <FormGroup className="mb-3" controlId="wd-textarea">
          <FormLabel>Example textarea</FormLabel>
          <FormControl as="textarea" rows={3} />
        </FormGroup>
  
        {/* Dropdown */}
        <div id="wd-css-styling-dropdowns">
          <h3>Dropdowns</h3>
          <FormSelect defaultValue="">
            <option value="" disabled>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </FormSelect>
        </div>
  
        {/* Switches */}
        <div id="wd-css-styling-switches">
          <h3>Switches</h3>
          <FormCheck
            type="switch"
            checked={false}
            id="wd-switch-1"
            label="Unchecked switch checkbox input"
          />
          <FormCheck
            type="switch"
            checked={true}
            id="wd-switch-2"
            label="Checked switch checkbox input"
          />
          <FormCheck
            type="switch"
            checked={false}
            disabled
            id="wd-switch-disabled-1"
            label="Unchecked disabled switch checkbox input"
          />
          <FormCheck
            type="switch"
            checked={true}
            disabled
            id="wd-switch-disabled-2"
            label="Checked disabled switch checkbox input"
          />
        </div>
        <div id="wd-css-styling-range-and-sliders">
            <h3>Range</h3>
            <FormGroup controlId="wd-range1">
                <FormLabel>Example range</FormLabel>
                <Form.Range min="0" max="5" step="0.5" />
            </FormGroup>
        </div>

        {/* Addons */}
        <div id="wd-css-styling-addons">
        <h3>Addons</h3>
        <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
            <FormControl />
        </InputGroup>
        <InputGroup>
            <FormControl />
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
        </InputGroup>
        </div>

        {/* Responsive Form Example 1 */}
        <div id="wd-css-responsive-forms-1" className="mt-4">
        <h3>Responsive forms</h3>
        <Form.Group as={Row} className="mb-3" controlId="email1">
            <Form.Label column sm={2}>
            Email
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="email" value="email@example.com" />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="password1">
            <Form.Label column sm={2}>
            Password
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="password" />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="textarea2">
            <Form.Label column sm={2}>
            Bio
            </Form.Label>
            <Col sm={10}>
            <Form.Control as="textarea" style={{ height: "100px" }} />
            </Col>
        </Form.Group>
        </div>

        {/* Responsive Form Example 2 */}
        <div id="wd-css-responsive-forms-2" className="mt-4">
        <h3>Responsive forms</h3>
        <Form>
            <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>Email</Form.Label>
            <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>Password</Form.Label>
            <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
            </Col>
            </Form.Group>
            <fieldset>
            <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>Radios</Form.Label>
                <Col sm={10}>
                <Form.Check type="radio" label="first radio" checked name="formHorizontalRadios" />
                <Form.Check type="radio" label="second radio" name="formHorizontalRadios" />
                <Form.Check type="radio" label="third radio" name="formHorizontalRadios" />
                </Col>
            </Form.Group>
            </fieldset>
            <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Sign in</Button>
            </Col>
            </Form.Group>
        </Form>
        </div>



      </div>
    );
  }
  