import React, { useEffect, useState } from 'react';
import { auth, db } from '../Firebase/Config';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import { getAuth } from 'firebase/auth'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';

function Login() {
    return (
        <>
            <ToastContainer />
        </>
    );
}

export default Login;
