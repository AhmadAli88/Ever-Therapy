import { useState } from 'react';
import { IconButton, Menu, MenuItem, Typography, Box } from '@mui/material'; // Added Box import
import VisibilityIcon from '@mui/icons-material/Visibility';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { extractDateTimeComponents } from '../assets/genericAction';
import moment from 'moment';
import MyTable from '../components/Table';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import MuiTextField from '../components/TextField';
import { MdOutlineHome, MdOutlineMailOutline } from 'react-icons/md';
import MuiBreadcrumbs from '../components/Breadcrumbs';
import { Link } from 'react-router';
import { PaginationComponent } from '../components/Pagination';
import PaginationEntries from '../components/PaginationEntries';

const Dashboard = () => {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(0); // Add currentPage state
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [rowData, setRowData] = useState('');
  const [anchorElUser, setAnchorElUser] = useState(null);
  const breadcrumbs = [
    // <Link
    //   key='1'
    //   underline='hover'
    //   color='inherit'
    //   href='/'
    //   className='link_custom_layout'
    // >
    //   <MdOutlineHome size={20} style={{ marginRight: 4 }} />
    //   Home
    // </Link>,
    <Link
      key='2'
      underline='hover'
      color='inherit'
      href='/patients'
      className='font-xl'
    >
      Patient
    </Link>,
    <Typography key='3' color='text.primary' className='font-xl'>
      Patients List
    </Typography>,
  ];
  // Sample data array
  const data = [
    {
      id: 1,
      patient: 'John Doe',
      doctor: 'Dr. Sarah Smith',
      startDateTime: '2024-12-09T09:30:00',
      amount: '150',
      donationAmount: '10',
      status: 'Upcoming',
    },
    {
      id: 2,
      patient: 'Jane Smith',
      doctor: 'Dr. Michael Johnson',
      startDateTime: '2024-12-09T11:00:00',
      amount: '200',
      donationAmount: '0',
      status: 'Completed',
    },
    {
      id: 3,
      patient: 'Robert Brown',
      doctor: 'Dr. Emily Wilson',
      startDateTime: '2024-12-09T14:15:00',
      amount: '175',
      donationAmount: '5',
      status: 'Missed',
    },
    {
      id: 4,
      patient: 'Maria Garcia',
      doctor: 'Dr. James Anderson',
      startDateTime: '2024-12-09T16:45:00',
      amount: '125',
      donationAmount: '15',
      status: 'Booked',
    },
  ];

  const paginatedData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page - 1); // ReactPaginate is 0-based; adjust for 1-based display
  };
  const handleOpenUserMenu = (event) => {
    event.stopPropagation();
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Updated columns configuration
  const columns = [
    {
      id: 'patients', // Added id property as required by PropTypes
      header: 'Patients',
      accessorKey: 'patient', // Changed to match data structure
      Cell: ({ cell }) => (
        <Box display='flex' alignItems='center'>
          <Typography variant='body2' component='span' sx={{ mx: '10px' }}>
            {cell.row.original.patient}
          </Typography>
        </Box>
      ),
    },
    {
      id: 'doctors',
      header: 'Doctors',
      accessorKey: 'doctor',
    },
    {
      id: 'aptDate',
      header: 'Appt Date',
      accessorKey: 'startDateTime',
      Cell: ({ cell }) => {
        const { date } = extractDateTimeComponents(
          cell.row.original.startDateTime
        );
        return <div>{moment(date).format('MM/DD/YY')}</div>;
      },
    },
    {
      id: 'aptTime',
      header: 'Appt Time',
      accessorKey: 'startDateTime',
      Cell: ({ cell }) => {
        const { time } = extractDateTimeComponents(
          cell.row.original.startDateTime
        );
        return <div>{time}</div>;
      },
    },
    {
      id: 'amount',
      header: 'Appt Fee',
      accessorKey: 'amount',
      Cell: ({ cell }) => {
        const total =
          Number(cell.row.original.amount) +
          Number(cell.row.original.donationAmount);
        return <div>$ {total}</div>;
      },
    },
    {
      id: 'status',
      header: 'Status',
      accessorKey: 'status',
      Cell: ({ cell }) => {
        let color;
        switch (cell.row.original.status) {
          case 'Completed':
            color = '#E02828';
            break;
          case 'Missed':
            color = '#FFA500';
            break;
          case 'Upcoming':
            color = '#007bff';
            break;
          case 'Booked':
            color = '#6c757d';
            break;
          default:
            color = '#000000';
        }

        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FiberManualRecordIcon
              sx={{ color: color, marginRight: '5px', fontSize: '12px' }}
            />
            <p>{cell.row.original.status}</p>
          </div>
        );
      },
    },
  ];
  const handleBreadcrumbClick = (item, index) => {
    console.log(`Breadcrumb clicked: ${item} at index ${index}`);
  };
  return (
    <div className='mt-[4rem]'>
      <>
        <div className='flex justify-between items-center gap-4'>
          <MuiBreadcrumbs
            separator='>'
            fontSize='small'
            items={breadcrumbs}
            onClick={handleBreadcrumbClick}
            activeLast={true}
          />
          <div className='flex gap-2'>
            <MuiTextField
              height='15px'
              width='150px'
              type='email'
              label='Email'
              variant='outlined'
              icon={<MdOutlineMailOutline size={20} />}
              adornmentPosition='start'
            />

            <Button
              display='flex'
              justifyContent='center'
              alignItems='center'
              backgroundColor='#FBBE84'
              width='130px'
              borderRadius='50px'
              height='43px'
              fontSize='14px'
            >
              Add Patient
            </Button>
          </div>
        </div>
        <div>
          <MyTable
            columns={columns}
            data={paginatedData}
            enableRowSelection={false}
            renderRowActions={({ row }) => (
              <IconButton
                disableRipple={true}
                size='large'
                aria-label='account of current user'
                aria-haspopup='true'
                onClick={(event) => {
                  setRowData(row?.original);
                  handleOpenUserMenu(event);
                }}
                role='button'
                tabIndex='0'
                onKeyDown={(e) => {
                  e.stopPropagation();
                }}
                color='inherit'
              >
                <MoreVertIcon />
              </IconButton>
            )}
            muiTableBodyRowProps={({ row }) => ({
              onClick: () => {
                setRowData(row?.original);
                // setDetailsOpen(true);
              },
              sx: {
                cursor: 'pointer',
              },
            })}
          />
          <div className='flex justify-between paginationEntries'>
            <PaginationEntries
              currentPage={currentPage}
              totalNumber={Math.ceil(data.length / itemsPerPage)}
            />
            <PaginationComponent
              page={currentPage} // Pass current page
              totalNumber={Math.ceil(data.length / itemsPerPage)} // Calculate total pages
              pageChange={handlePageChange} // Handle page change
            />
          </div>
        </div>

        <StyledMenu
          id='menu-appbar'
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem
            onClick={() => {
              setDetailsOpen(true);
              setAnchorElUser(null);
            }}
          >
            <VisibilityIcon sx={{ fontSize: '20px' }} />
            <Typography
              variant='subtitle1'
              fontWeight='400'
              component='span'
              ml={0.5}
            >
              View
            </Typography>
          </MenuItem>
        </StyledMenu>
      </>
    </div>
  );
};

const StyledMenu = styled(Menu)`
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.16);

  && {
    .MuiPaper-elevation {
      min-width: 216px;
      border-radius: 12px;
    }
    .MuiMenu-list li:hover {
      background: #fce9e9;
      color: #e02828;
    }
  }
`;
Dashboard.propTypes = {
  cell: PropTypes.shape({
    row: PropTypes.shape({
      original: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Dashboard;
