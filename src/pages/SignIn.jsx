/* eslint-disable no-debugger */
import { Checkbox, Divider, InputAdornment, TextField } from '@mui/material';
import { IMAGES } from '../assets/images';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoLockClosedOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { TOASTER_STYLING_VALUES } from '../config';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoaderCenter } from '../assets/genericComponents/Loader';
const SignIn = () => {
  const { handleSubmit, register, formState: { errors }, } = useForm();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [toasterLoader, setToasterLoader] = useState(false);
  function onSubmit(data) {
    debugger
    if (data.email === 'user@gmail.com') {
      const userData = { ...data, token: 'token', userType: 'user' };
      localStorage.setItem('dummy_user', JSON.stringify(userData));
      setToasterLoader(true);
      // Redirect to the dashboard using React Router
      window.location.href = '/dashboard';
    } else {
      toast.error('Invalid Email or Password', TOASTER_STYLING_VALUES);
      setToasterLoader(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-12 gap-4'>
        <div className='lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 flex flex-col justify-center items-center h-screen gap-4'>
          <div>
            <img src={IMAGES.LOGO} alt='' />
          </div>
          <div>
            <div className='text-3xl text-center text-secondary-darkgray-dark_600 font-bold'>
              SignIn
            </div>
            <div className='text-base text-secondary-darkgray'>
              or{' '}
              <span className='text-primary-peach'>
                {' '}
                <Link to='/sign-up'>create an account</Link>
              </span>{' '}
              if not registered yet
            </div>
          </div>
          {/* <TextField
              type='text'
              id='email'
              label='Email'
              className='parent_emailField'
              variant='outlined'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <MdOutlineMailOutline />
                  </InputAdornment>
                ),
              }}
            /> */}
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
              {...register('email', { required: 'Email is required' })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              type='password'
              id='password'
              label='Password'
              className='parent_Field'
              variant='outlined'
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position='start'>
                      <IoLockClosedOutline size={20} />
                    </InputAdornment>
                  ),
                },
              }}
              {...register('password', { required: 'Password is required' })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>

          <div className='flex items-center justify-between lg:w-[500px] md:w-[400px] sm:w-[350px] w-[350px]'>
            <div>
              <Checkbox {...label} className='checkbox_spacing' />
              <span className='text-secondary-darkgray-light_400 text-xs'>
                Remember me
              </span>
            </div>
            <Link to='/forgot-password'>
              <div className='text-[#3172F0] text-xs'>Forgot Password</div>
            </Link>
          </div>

          <div className='flex justify-center items-center gap-4 flex-col lg:w-[500px] md:w-[400px] sm:w-[350px] w-[350px]'>
            {!toasterLoader ? (
              <button className='bg-primary-peach w-full rounded-full text-white_color p-1xs'>
                Login
              </button>
            ) : (
              <LoaderCenter />
            )}

            <Divider
              variant='middle'
              textAlign='center'
              className='w-full'
              sx={{
                '&::before, &::after': {
                  borderColor: '#F2F2F2', // Custom line color
                  // borderWidth: '2px', // Custom line thickness
                },
                color: '#595959', // Text color
                fontSize: '14px',
                // fontWeight: 'bold', // Text weight
              }}
            >
              or Login with
            </Divider>

            <button className='bg-secondary-brightgray-light_50 w-full rounded-full text-secondary-darkgray p-1xs flex justify-center items-center gap-3'>
              <FcGoogle size={20} />
              <span>Continue with Google</span>
            </button>

            <button className='bg-secondary-brightgray-light_50 w-full rounded-full  text-secondary-darkgray p-1xs flex justify-center items-center gap-3'>
              <FaApple />
              <span> Continue with Apple</span>
            </button>
          </div>
        </div>
        <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12'>
          <div className='flex justify-end items-end w-100'>
            <img
              src={IMAGES.BANNNER}
              alt=''
              className='w-full h-screen lg:block sm:hidden hidden'
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
