import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function SummaryForm() {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const overlay = <Tooltip>No ice cream will actually be delivered.</Tooltip>;

  const termsAndConditions = (
    <span>
      I agree to the
      <OverlayTrigger placement="bottom" overlay={overlay}>
        <span style={{ color: "blue" }}>Terms and Conditions.</span>
      </OverlayTrigger>
    </span>
  );
  return (
    <>
      <Form>
        <Form.Group controlId="terms-and-conditions">
          <Form.Check
            type="checkbox"
            onClick={() => setButtonDisabled((s) => !s)}
          ></Form.Check>
          <Form.Text>{termsAndConditions}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={buttonDisabled}>
          Confirm Order
        </Button>
      </Form>
    </>
  );
}

export default SummaryForm;
