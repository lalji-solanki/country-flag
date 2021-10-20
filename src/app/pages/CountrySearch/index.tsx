import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { CssBaseline } from '@material-ui/core'
import { Routes } from 'app/utils/enums/routes'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const CountrySearch: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const [countryNameInput, setCountryNameInput] = useState<string>('')
  const countrySearchRoute = `${Routes.Countries}/${countryNameInput}`
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault()
            history.push(countrySearchRoute)
          }}
        >
          <TextField
            value={countryNameInput}
            required
            fullWidth
            autoFocus
            label="Enter Country"
            variant="outlined"
            onChange={(e) => setCountryNameInput(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            disabled={!Boolean(countryNameInput)}
            type="submit"
            fullWidth
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default CountrySearch
