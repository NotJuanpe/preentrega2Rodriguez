import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css"

const ButtonGroup = () => {
    const navigate = useNavigate();
    const page = (page,cat) => {
        navigate(`/category:${page}`,{state : cat})
    }
  return (
    <>
    <div className='container mb-5 top'>
        <div className='row'>
        <button type="button" class="btn btn-dark col" onClick={click => page("tech","tech")}>Tech</button>
        <button type="button" class="btn btn-dark col" onClick={click => page("home","home")}>Home</button>
        <button type="button" class="btn btn-dark col" onClick={click => page("outdoor","outdoor")}>Outdoor</button>
        <button type="button" class="btn btn-dark col" onClick={click => page("all","all")}>All</button>
        </div>
    </div>
    </>
  )
}

export default ButtonGroup