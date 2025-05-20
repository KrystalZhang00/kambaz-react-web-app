import {
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    FormSelect,
    FormCheck
  } from "react-bootstrap";

  
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

      </div>
    );
  }
  