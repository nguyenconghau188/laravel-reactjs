import React from 'react';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            ☰
          </button>
          <a href="index.html">Shopping App</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign in</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-btn" onClick={closeMenu}>X</button>
        <ul>
          <li>
            <a href="index.html">Smart Phone</a>
          </li>
          <li>
            <a href="index.html">Laptop</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src="/images/iphone-11-128gb-green-400x400.jpg" alt="Iphone 11 128GB green" />
                <div className="product-name">
                  <a href="product.html"> Iphone 11</a>
                </div>
                <div className="product-brand">Apple</div>
                <div className="product-price">$899</div>
                <div className="product-rating">4.5 stars (15 Reviews)</div>
              </div> 
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/iphone-11-128gb-green-400x400.jpg" alt="Iphone 11 128GB green" />
                <div className="product-name">
                  <a href="product.html"> Iphone 11</a>
                </div>
                <div className="product-brand">Apple</div>
                <div className="product-price">$899</div>
                <div className="product-rating">4.5 stars (15 Reviews)</div>
              </div> 
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/iphone-11-128gb-green-400x400.jpg" alt="Iphone 11 128GB green" />
                <div className="product-name">
                  <a href="product.html"> Iphone 11</a>
                </div>
                <div className="product-brand">Apple</div>
                <div className="product-price">$899</div>
                <div className="product-rating">4.5 stars (15 Reviews)</div>
              </div> 
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/iphone-11-128gb-green-400x400.jpg" alt="Iphone 11 128GB green" />
                <div className="product-name">
                  <a href="product.html"> Iphone 11</a>
                </div>
                <div className="product-brand">Apple</div>
                <div className="product-price">$899</div>
                <div className="product-rating">4.5 stars (15 Reviews)</div>
              </div> 
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/iphone-11-128gb-green-400x400.jpg" alt="Iphone 11 128GB green" />
                <div className="product-name">
                  <a href="product.html"> Iphone 11</a>
                </div>
                <div className="product-brand">Apple</div>
                <div className="product-price">$899</div>
                <div className="product-rating">4.5 stars (15 Reviews)</div>
              </div> 
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        All right reserved.
      </footer>
    </div>
  );
}

export default App;
