import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../Firebase/Config';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Dialog, DialogTitle, DialogContent, MenuItem, Select, InputLabel, FormControl, Button, DialogActions } from '@mui/material';
import { Close, Try } from '@mui/icons-material'

function Chart() {
  return (
    <>
      <ToastContainer />
    </>
  );
}

export default Chart;
