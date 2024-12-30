import { Form, Button } from 'react-bootstrap'; // Import Bootstrap form components

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    <Form>
      {/* Form Group for text area input */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label> {labelText} </Form.Label>
        {/* Textarea for review input, ref is used to access the input value */}
        <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
      </Form.Group>
      
      {/* Submit button that triggers the handleSubmit function */}
      <Button variant="outline-info" onClick={handleSubmit}> Submit </Button>
    </Form>
  )
}

export default ReviewForm;
