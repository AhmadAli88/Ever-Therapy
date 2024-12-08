import { InputAdornment, TextField } from '@mui/material';
import { IMAGES } from '../assets/images';
import { MdOutlineMailOutline } from 'react-icons/md';

const ForgotPassword = () => {
  return (
    <div>
      <div className='grid grid-cols-12 gap-4'>
        <div className='lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 flex flex-col justify-center items-center h-screen gap-4'>
          <div>
            <img src={IMAGES.LOGO} alt='' />
          </div>
          <div>
            <div className='text-secondary-darkgray-dark_600 text-3xl font-bold'>
              Forgot Your Password?
            </div>
            <div className='mt-[10px]'>Confirm your email, reset password is sent to your email</div>
          </div>

          <div className='flex flex-col gap-4 lg:w-[500px] md:w-[400px] sm:w-[350px] w-[350px]'>
            <TextField
              type='text'
              id='email'
              label='Email'
              variant='outlined'
              className='parent_Field text-secondary-darkgray-light_400'
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position='start'>
                      <MdOutlineMailOutline size={20} />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </div>

          <div className='flex justify-center items-center gap-4 flex-col lg:w-[500px] md:w-[400px] sm:w-[350px] w-[350px]'>
            <button className='bg-primary-peach w-full rounded-full text-white_color p-1xs'>
              Send Email
            </button>
          </div>
        </div>
        <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12'>
          <div className='flex justify-end items-end w-100'>
            <img
              src={IMAGES.BANNNER}
              alt=''
              className='w-full h-[750px] lg:block sm:hidden hidden'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
