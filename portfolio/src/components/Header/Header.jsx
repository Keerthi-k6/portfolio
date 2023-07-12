
import React, { useState } from 'react'
import'./Header.css'
import {BiMenuAltRight} from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';
const Header = () => {
  const [open,setopen]=useState(false);
  const getMenuStyles =(open)=> 
  {
    if(document.documentElement.clientWidth <= 768) {
      return {
        right:!open && '-100%'
      }
    
  }
}
  return (
    <section className='h-wrapper'>
        <div className='h-container flexCenter innerWidth' style={{justifyContent: 'space-between' ,padding:'1.5rem'}}>
            <div id="logo">Keerthi Sree</div>
            <OutsideClickHandler onOutsideClick={()=>setopen(false)}>
            <div className='flexCenter h-menu' style={getMenuStyles(open)}>
               <a href=''>About</a>
               <a href=''>Projects</a>   
               <a href=''> Contact</a>
                <button className='button'>
                    <a href=''>Social Links</a>
                </button>
            </div>
            </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setopen(prev=>!prev)}>
          <BiMenuAltRight size={30} />
        </div>
        </div>
    </section>
  )
}

export default Header
