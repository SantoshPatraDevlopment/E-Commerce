import React, { useEffect, useState } from 'react'
import GetAllCategoryCallAPI from '../Utility/GetAllCategoryCallAPI'
import { capitalizeFirstLetter } from '../Utility/CommonLetterLowerToUpper'
import { useDispatch, useSelector } from 'react-redux';
import categorySlice, { fetchCategory } from '../feature/category/categorySlice';

export function Category() {

    const categoryState=useSelector((state)=> state.category );
    const dispatch=useDispatch(); 
    useEffect(()=>{
       dispatch(fetchCategory());
    },[]);
   
    function Category_Click(e) {
      
       dispatch(categorySlice.actions.changeCategory(e.target.innerText));

    }
    if (categoryState.loading) {
        <>
            (<h1>Data Loding.....</h1>)
        </>
    }
    else {
        return (
            <>
                <div className="col-lg-3 d-none d-lg-block">
                    <a
                        className="btn d-flex align-items-center justify-content-between bg-primary w-100"
                        data-toggle="collapse"
                        href="#navbar-vertical"
                        style={{ height: 65, padding: "0 30px" }}
                    >
                        <h6 className="text-dark m-0">
                            <i className="fa fa-bars mr-2" />
                            {categoryState. selectedCategory}
                        </h6>
                        <i className="fa fa-angle-down text-dark" />
                    </a>
                    <nav
                        className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                        id="navbar-vertical"
                        style={{ width: "calc(100% - 30px)", zIndex: 999 }}
                    >
                        <div className="navbar-nav w-100">
                            <div className="nav-item dropdown dropright">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    Dresses <i className="fa fa-angle-right float-right mt-1" />
                                </a>
                                <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                    <a href="" className="dropdown-item">
                                        Men's Dresses
                                    </a>
                                    <a href="" className="dropdown-item">
                                        Women's Dresses
                                    </a>
                                    <a href="" className="dropdown-item">
                                        Baby's Dresses
                                    </a>
                                </div>
                            </div>
                        {categoryState.arrCategory.map((e,index) => (<div  data-toggle="collapse"
                        href="#navbar-vertical" onClick={Category_Click} key={index} className="nav-item nav-link">
                                {capitalizeFirstLetter (e)}
                            </div>))}
                            
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}

export default Category
