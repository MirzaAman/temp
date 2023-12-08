import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { collection, getDocs, addDoc, query, orderBy, where, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { auth, db } from '../Firebase/Config';
import { Dialog, DialogTitle, DialogContent, DialogActions, fabClasses } from '@mui/material';
import { Close, Try } from '@mui/icons-material'
import { ToastContainer, toast } from 'react-toastify'
import './style.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { Button } from '@mui/material';

function TeacherTimeTable() {
  return (
    <>
      <ToastContainer />
      <Footer />
    </>
  )
}

export default TeacherTimeTable
