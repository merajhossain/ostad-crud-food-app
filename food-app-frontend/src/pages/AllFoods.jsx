import React from 'react'
import { Link } from 'react-router-dom'

const AllFoods = () => {
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
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="card food-card">
                      <img className="card-img-top img-fluid" src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg" alt="" />
                      <span className="price">Tk: 45.00</span>
                      <div className="card-body">
                        <h4 className="card-title">Crispy fried chicken on a plate with salad and carrot</h4>
                        <Link to="/single-food-item/123" className='card-link btn btn-custom-secondary'>Edit</Link>
                        <Link to="/" className='card-link btn btn-custom-danger'>Delete</Link>
                      </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="card food-card">
                      <img className="card-img-top img-fluid" src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg" alt="" />
                      <span className="price">Tk: 45.00</span>
                      <div className="card-body">
                        <h4 className="card-title">Crispy fried chicken on a plate with salad and carrot</h4>
                        <Link to="/single-food-item/123" className='card-link btn btn-custom-secondary'>Edit</Link>
                        <Link to="/" className='card-link btn btn-custom-danger'>Delete</Link>
                      </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="card food-card">
                      <img className="card-img-top img-fluid" src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg" alt="" />
                      <span className="price">Tk: 45.00</span>
                      <div className="card-body">
                        <h4 className="card-title">Crispy fried chicken on a plate with salad and carrot</h4>
                        <Link to="/single-food-item/123" className='card-link btn btn-custom-secondary'>Edit</Link>
                        <Link to="/" className='card-link btn btn-custom-danger'>Delete</Link>
                      </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="card food-card">
                      <img className="card-img-top img-fluid" src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg" alt="" />
                      <span className="price">Tk: 45.00</span>
                      <div className="card-body">
                        <h4 className="card-title">Crispy fried chicken on a plate with salad and carrot</h4>
                        <Link to="/single-food-item/123" className='card-link btn btn-custom-secondary'>Edit</Link>
                        <Link to="/" className='card-link btn btn-custom-danger'>Delete</Link>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AllFoods
