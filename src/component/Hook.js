import React, { Fragment, useEffect, useState } from 'react';

const Hook=()=>{
const [user,setUser]=useState([]);

    const getData= async()=>{
   const response = await fetch('https://gist.githubusercontent.com/sudip-73/244f3725294dc7557a1537fb7c209edb/raw/6de50487b7561af29db05411803d2db11f2979a7/gistfile1.txt');
   setUser( await response.json());
  
    }

    useEffect(()=>{
        getData();
    },[])
    return (
        <Fragment>
            <h2 className='text-center'>List of Github Users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                  <div className="col-10 col-md-4 mt-5">
                   
       {
        user.map((data)=>{
            return(
                <div className="card p-2 text-dark bg-info mt-2 "  key={data.id}>
                <div className="d-flex align-items-center">
                <div className="image">
                  <img src={data.photo} className='rounded' alt="/" width="155"/>
                </div>
               
                 <div className="ml-3 w-100">
                <h5 className="card-name">{data.name}</h5>
                  <p className="card-mobile">{data.mobile}</p>
                  <p className="email">{data.email}</p>
                  <p className="company">{data.company}</p>
                  <p className="title">{data.title}</p>
               
                 </div>
               </div>
              </div>
            );
        })

       }
                  </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Hook;