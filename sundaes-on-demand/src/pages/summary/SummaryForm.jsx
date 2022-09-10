import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function SummaryForm() {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const termsAndConditionsLabel = (
    <span>
      I agree to the <a href="/">Terms and Conditions</a>
    </span>
  );
  return (
    <>
      <Form>
        <Form.Group controlId="terms-and-conditions">
          <Form.Check
            type="checkbox"
            onClick={() => setButtonDisabled((s) => !s)}
            label={termsAndConditionsLabel}
          ></Form.Check>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={buttonDisabled}>
          Confirm Order
        </Button>
      </Form>
    </>
  );
}

export default SummaryForm;
