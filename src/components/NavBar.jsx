import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db, auth } from '../Firebase/Config';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Close } from '@mui/icons-material'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {

  return (
    <>
      <ToastContainer />
    </>
  )
}

export default NavBar
