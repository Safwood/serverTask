import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: "Roboto",
  },
  header: {
    marginBottom: '5px',
  },
  title: {
    flexGrow: 1,
    color: "#fff",
    marginBottom: '0'
  },
  menuItem: {
    color: "#fff",
    marginBottom: '0',
    marginRight: '20px',

  },
  menuList: {
    display: 'flex',
    marginRight: "20px"
  }
}))