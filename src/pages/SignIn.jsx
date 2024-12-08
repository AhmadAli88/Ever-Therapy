import { TextField } from '@mui/material';
import { IMAGES } from '../assets/images';

const SignIn = () => {
  return (
    <div>
      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 flex flex-col justify-center items-center h-screen gap-4'>
            <div>
              <img src={IMAGES.LOGO} alt='' />
            </div>
            <TextField
              id='first-field'
              label='First Field'
              className='rounded-full'
              variant='outlined'
              fullWidth
            />
             <TextField
              id='first-field'
              label='First Field'
              variant='outlined'
              fullWidth
            />
             <TextField
              id='first-field'
              label='First Field'
              variant='outlined'
              fullWidth
            />
             <TextField
              id='first-field'
              label='First Field'
              variant='outlined'
              fullWidth
            />
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
