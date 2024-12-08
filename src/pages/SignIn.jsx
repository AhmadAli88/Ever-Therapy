import { Checkbox, TextField } from '@mui/material';
import { IMAGES } from '../assets/images';

const SignIn = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div>
      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 flex flex-col justify-center items-center h-screen gap-4'>
            <div>
              <img src={IMAGES.LOGO} alt='' />
            </div>
            <TextField
              type='text'
              id='email'
              label='Email'
              className='parent_emailField'
              variant='outlined'
              fullWidth
            />
            <TextField
              type='password'
              id='password'
              label='Password'
              className='parent_emailField'
              variant='outlined'
              fullWidth
            />
            <div className='flex items-center justify-between w-full'>
              <div>
                <Checkbox {...label} />
                <span>Remember me</span>
              </div>
              <div>Forgot Password</div>
            </div>
            
            <div className='flex justify-center items-center w-full'>
              <button className='bg-primary-peach w-full rounded-full text-white_color p-1xs'>Login</button>
            </div>
          </div>
          <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12'>
            <TextField
              id='second-field'
              label='Second Field'
              variant='outlined'
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
