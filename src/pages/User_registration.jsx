
import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';


function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  
  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Button variant="soft">Change mode</Button>;
  }

  return (
    <Select
      variant="soft"
      value={mode}
      onChange={(event, newMode) => {
        setMode(newMode);
      }}
      sx={{ width: 'max-content' }}
    >
      <Option value="system">System</Option>
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


export default function User_registration(props) {
    const [user,setdata]=React.useState({
        name:'',
        email:'',
        mobile:'',
    })
      const {name,email,mobile}=user
    const dispatch=useDispatch()
    const data=useSelector((state)=>state)
    const handleform=()=>{
        console.log('register')
        dispatch({type:'INSERT',user_records:{Name:name,Email:email,Mobile:mobile}})
    }
    console.log('data :',data)

    const [profile,setprofile]=React.useState(null)

  

    const changing=(e)=>{
        setdata({...user,[e.target.name]:[e.target.value]})
    }
  
    const [status,setstatus]=React.useState(false)

   
   

   

  return (
    <main>
      <CssVarsProvider {...props}>
        <ModeToggle />
        <CssBaseline />
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>
          <FormControl >
             <FormLabel>Full Name</FormLabel>
            <Input
              // html input attribute
              name="name"
              onChange={changing}
              type="text"
              placeholder="Enter Your Fullname"
            />

            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              onChange={changing}
              type="email"
              placeholder="johndoe@email.com"
            />
            <FormLabel>Mobile</FormLabel>
            <Input
              // html input attribute
              name="mobile"
              type="tel"
              onChange={changing}
              placeholder="password"
            />
             
            <Button onClick={handleform}  sx={{ mt: 1 /* margin top */ }}>Register</Button>
          </FormControl>
          
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            sx={{ fontSize: 'sm', alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </CssVarsProvider>
     
      
    </main>
  );
}
