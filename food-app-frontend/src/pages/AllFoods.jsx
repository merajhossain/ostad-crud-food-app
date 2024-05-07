import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FoodService from '../utility/foodServices';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const AllFoods = () => {

  const [allFoods, setAllFoods] = useState(null);

  useEffect(() => {  
    FoodService.getAllFoods().then((res) => {
      setAllFoods(res.data);
    });  
  }, []);
  

  return (
    <>
      <div className="row">
            <div className="col-md-12">
                <div className="page-title">
                    <h1>All Food List</h1>
                </div>
            </div>
        </div>
        <div className="w-100 content-body">
            <div className="row g-4">
            <Skeleton count={5} />
              {allFoods && allFoods.map((item, index) => {
                let editUrl = `/single-food-item/${item._id}`
                return(
                  <div className="col-lg-3 col-md-3 col-sm-12" key={index}>
                    <div className="card food-card">
                      <img className="card-img-top img-fluid" src={item?.foodImageUrl} alt="" />
                      <span className="price">Tk: {item?.price}.00</span>
                      <div className="card-body">
                        <h4 className="card-title">{item?.foodName}</h4>
                        <Link to={editUrl} className='card-link btn btn-custom-secondary'>Edit</Link>
                        <Link to="/" className='card-link btn btn-custom-danger'>Delete</Link>
                      </div>
                    </div>
                  </div>
                )
                })}
            </div>
        </div>
    </>
  )
}

export default AllFoods
