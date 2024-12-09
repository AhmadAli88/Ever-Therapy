import { Divider, InputAdornment, TextField } from '@mui/material';
import { IMAGES } from '../assets/images';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoLockClosedOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
const SignUp = () => {


  return (
    <div>
      <div className='grid grid-cols-12 gap-4'>
        <div className='lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 flex flex-col justify-center items-center h-screen gap-4'>
          <div>
            <img src={IMAGES.LOGO} alt='' />
          </div>
          <div>
            <div className='text-3xl text-center text-secondary-darkgray-dark_600 font-bold'>
              Sign Up
            </div>
            <div className='text-base text-secondary-darkgray'>
            Already a memeber ? <span className='text-primary-peach'>Login</span>   
           
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
          <div className='grid grid-cols-12 gap-4'>
            <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-6'>
              <TextField
                type='text'
                id='firstname'
                label='FirstName'
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
            <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-6'>
              <TextField
                type='text'
                id='lastname'
                label='LastName'
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
              />
            </div>
            <div className='lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12'>
              <TextField
                type='text'
                id='email'
                label='Email'
                variant='outlined'
                fullWidth
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

            <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-6'>
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
              />
            </div>
            <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-6'>
              <TextField
                type='password'
                id='confirm_password'
                label='Confirm Password'
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
              />
            </div>
          </div>

          <div className='flex justify-center items-center gap-4 flex-col lg:w-[500px] md:w-[400px] sm:w-[350px] w-[350px]'>
            <button className='bg-primary-peach w-full rounded-full text-white_color p-1xs'>
              Sign Up
            </button>

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
              or Sign Up with
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
    </div>
  );
};

export default SignUp;
