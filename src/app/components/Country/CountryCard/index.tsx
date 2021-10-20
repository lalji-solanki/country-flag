import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import { ICountry } from 'app/utils/interfaces/country'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 140,
  },
  centered: {
    justifyContent: 'center',
  },
  customCard: {
    display: 'flex',
    height: 184,
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

interface CountryCardProps {
  country: ICountry
  onClickWeatherCapitalButton: any
}

const CountryCard = ({
  country,
  onClickWeatherCapitalButton,
}: CountryCardProps) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={country.flag}
          title={country.name}
        />
        <Divider />
        <CardContent className={classes.customCard}>
          <Typography gutterBottom variant="h6">
            {country.name}
            <Typography variant="subtitle1" component="p" color="textSecondary">
              {country.capital}
            </Typography>
          </Typography>
          <Typography variant="body1" color="primary" component="p">
            Population :{' '}
            <Typography variant="body2" component="span" color="textSecondary">
              {country.population}
            </Typography>
          </Typography>
          <Typography variant="body1" color="primary" component="p">
            Latitude, Longitude :{' '}
            <Typography variant="body2" component="span" color="textSecondary">
              {country.latlng[0] + '°  ' + country.latlng[1] + '°'}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions className={classes.centered}>
        <Button
          onClick={onClickWeatherCapitalButton}
          variant="contained"
          color="primary"
          size="small"
        >
          Capital Weather
        </Button>
      </CardActions>
    </Card>
  )
}

export default CountryCard
