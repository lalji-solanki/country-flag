import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  toolbar: {
    margin: '0 auto',
  },
  h5: {
    color: 'white',
  },
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.h5}>
          Country and Weather Info
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
