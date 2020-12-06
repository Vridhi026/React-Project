import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './cart.css'


function cart() {
 return( 
    <div className='Nmain-div'>
    <div className='Ncontainer'>
        
        <nav>
          <div className='Ndiv-header'>
             
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <NavLink to='/Home'><div className='Nnav-home'>
                      <span>Home</span></div> 
                  </NavLink>
                  
                  
                  <NavLink to='/Newcars'>
                      <div className='nav-newcars'>
                          <span>New Cars</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Oldcars'>
                      <div className='nav-oldcars'>
                          <span>Used Cars</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Accessories'>
                      <div className='nav-acc'>
                          <span>Accessories</span>
                      </div>
                    </NavLink>
                    <NavLink to='/login'>
                      <div className='nav-sign-in'>
                          <span>Sign Out</span>
                      </div>
                    </NavLink>
                    <NavLink to="/cart">
                      <div className='nav-Cart'>
                          <span>Cart</span>
                      </div>
                    </NavLink>

                  
                  
              </div>
          </div>
      </nav>
    <div class="cartcontainer">
        
        <h3>There are no items in your cart</h3>
        <button>
        <a href="/Accessories">Continue Shopping</a></button>
           
        
    </div>
       
       
    
      
    </div>
    </div>
  );
    
}

export default cart;