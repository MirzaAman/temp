import React, { useEffect, useState } from 'react';
import { auth, db, storage } from '../Firebase/Config';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const ProfilePage = () => {
    return (
        <>
            <ToastContainer />
        </>
    );
};

export default ProfilePage;
