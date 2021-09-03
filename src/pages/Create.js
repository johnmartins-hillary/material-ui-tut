import React from "react";
import { Typography, Button, Container, TextField, Radio, RadioGroup } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { FormControl, FormLabel, FormControlLabel, makeStyles } from "@material-ui/core";
import {  useState } from "react";
import {useHistory} from "react-router-dom"

const useStyles = makeStyles({
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

function Create() {
  const history = useHistory()
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos')


  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false)
    setDetailsError(false)


    if(title ==''){
      setTitleError(true)
    }
    if(details ==''){
      setDetailsError(true)
    }


    if (Error && details) {
      fetch('http://localhost:8000/notes', {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({title, details, category})
      }).then(() => history.push('/'))
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        className={classes.title}
      >
        create a New Note
      </Typography>

      <form noValidate autoCapitalize="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl className={classes.field}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel value="money" control={<Radio />} label="money"/>
          <FormControlLabel value="todos" control={<Radio />} label="todos"/>
          <FormControlLabel value="reminder" control={<Radio />} label="reminder"/>
          <FormControlLabel value="work" control={<Radio />} label="work"/>
        </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Create;
