import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Close, Try } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, addDoc, query, orderBy, where } from 'firebase/firestore';
import { auth, db } from '../Firebase/Config';
import { getAuth } from 'firebase/auth';

function Confirm() {
    return (
        <>
            <ToastContainer />
        </>
    )
}

export default Confirm
