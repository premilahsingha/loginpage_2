import React from 'react'

// import App from '../App'
import { Grid,Paper,Avatar, TextField,Button, Typography,Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
  const Login=()=>{
      const paperStyle={padding :20,height:'70vh',width:280,margin:"20px auto"}
      const avatarStyle={backgroundColor:"purple"}
      const btnStyle={margin:'8px 0'}

      return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/> </Avatar>
                     <h1>Sign in</h1>
                </Grid>
            <TextField label='Username' placeholder='Enter Username' required />  
            <TextField label='Password' placeholder='Enter Password' type='password' required />  
            <FormControlLabel
        control={
          <Checkbox
           
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me "
      />

      <Button type='submit' color='primary' variant="contained" align='center' fullWidth style={btnStyle}>Sign In</Button>
   <Typography>
          <Link href="#" >
             Forgot Password?
         </Link>
   </Typography>
   <Typography>   Do you have an account?
          <Link href="#" >
               Sign up here
         </Link>
   </Typography>

            </Paper>
        </Grid>
      )
  }

  export default Login