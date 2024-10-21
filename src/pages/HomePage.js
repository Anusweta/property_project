import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true); // New state for loading
  const [imageProperties, setImageProperties] = useState([]);

  
  useEffect(() => {
    fetchProperties();
  }, []);
  
  const fetchProperties = () => {
    setLoading(true);
    fetch('https://bhubaneswarproperty.in/api/getProperties.php?limit=20&type=Apartment%20/%20Flat&mode=Sell&city=1&locality=5')
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data); // Log to confirm the response
        setProperties(Array.isArray(data.data) ? data.data : []); // Access the data field
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
        setLoading(false);
      });
  };


  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    setLoading(true);
    fetch('https://bhubaneswarproperty.in/api/getAdvertise.php')
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data); // Log to confirm the response
        setImageProperties(Array.isArray(data.data) ? data.data : []); // Ensure it's an array
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching imageproperties:', error);
        setLoading(false);
      });
  };



  
    return (
        <>
              <style>
        {`
          .property-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr); /* Creates 5 equal columns */
            gap: 16px; /* Space between grid items */
          }

          .property-grid a {
            font-size: 20px;
            line-height:28px;
            
            padding-right:55px;
          }
        `}
      </style>

        <div class="body counter-scroll">
      {/* preload */}
      {/* /preload */}
      {/* #wrapper */}
      <div id="wrapper">
        {/* #page */}
        <div id="page">
          {/* header */}
          <header
            id="header_main"
            className="header header-fixed type-home1 style-no-bg style-absolute"
          >
            <div className="header-inner">
              <div className="header-inner-wrap">
                <div id="site-logo">
                  <Link to="index.html" rel="home">
                    <img id="logo-header" src="images/logo/logo-white.svg" alt="" />
                    <img
                      id="logo-header-mobile"
                      src="images/logo/logo.svg"
                      alt=""
                    />
                  </Link>
                </div>
                <nav className="main-menu style-white">
                  <ul className="navigation">
                    <li className="has-children current">
                      <Link to="/">Home</Link>
                      
                    </li>
                    <li className="has-children">
                      <Link to="javascript:void(0);">Property</Link>
                      <ul className="mega-menu">
                        <li>
                          <ul>
                            <li className="title">List view</li>
                            <li>
                              <Link to="PropertyList">Property List 01</Link>
                            </li>
                            
                          </ul>
                        </li>
                        <li>
                         </li>
                        <li>
                          <ul>
                            <li className="title">Single view</li>
                            <li>
                              <Link to="PropertySingle">
                                Property Single 01
                              </Link>
                            </li>
                      </ul>
                        </li>
                        <li>
                         
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link to="javascript:void(0);">Pages</Link>
                      <ul>
                        <li>
                          <Link to="about.html">About Us</Link>
                        </li>
                        <li>
                          <Link to="pricing.html">Pricing Packages</Link>
                        </li>
                        <li>
                          <Link to="faq.html">FAQ Page</Link>
                        </li>
                        <li>
                          <Link to="404.html">404 Page</Link>
                        </li>
                        
                        <li>
                          <Link to="dashboard.html">Dashboard</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link to="javascript:void(0);">Shop</Link>
                      <ul>
                        <li>
                          <Link to="shop-list.html">Shop List</Link>
                        </li>
                        
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link to="javascript:void(0);">Blog</Link>
                      <ul>
                        <li>
                          <Link to="blog-list-v1.html">Blog List 01</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="contact.html">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="header-right">
                  <div className="header-call style-white">
                    <div className="icon">
                      <i className="flaticon-phone" />
                    </div>
                    <div className="number">800-555-6789</div>
                  </div>
                  <div
                    data-bs-toggle="modal"
                    data-bs-target="#modallogin"
                    className="header-user style-white"
                  >
                    <div className="icon">
                      <i className="flaticon-user" />
                    </div>
                  </div>
                  <div className="header-btn">
                    <Link
                      to="dashboard-add-properties.html"
                      className="tf-button-default style-white"
                    >
                      Add Listing
                    </Link>
                  </div>
                </div>
                <a className="mobile-nav-toggler mobile-button" href="#menu" />
              </div>
            </div>
            <nav id="menu">
              <a className="close" aria-label="Close menu" href="#mm-22">
                <i className="icon-close" />
              </a>
              <ul>
                <li className="current">
                  <span>Home</span>
                  <ul>
                    <li className="current">
                      <Link to="/">Home Page 01</Link>
                    </li>
                   
                  </ul>
                </li>
                <li>
                  <span>Property</span>
                  <ul>
                    <li>
                      <span>List view</span>
                      <ul>
                        <li>
                          <Link to="/PropertyList">Property List 01</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                     
                    </li>
                    <li>
                      <span>Single view</span>
                      <ul>
                        <li>
                          <Link to="/PropertySingle">Property Single 01</Link>
                        </li>
                       
                      </ul>
                    </li>
                    <li>
                      
                    </li>
                  </ul>
                </li>
                <li>
                
                  
                </li>
                <li>
                  <span>Pages</span>
                  <ul>
                    <li>
                      <Link to="about.html">About Us</Link>
                    </li>
                    <li>
                      <Link to="compare.html">Compare</Link>
                    </li>
                    <li>
                      <Link to="pricing.html">Pricing Packages</Link>
                    </li>
                    <li>
                      <Link to="faq.html">FAQ Page</Link>
                    </li>
                    <li>
                      <Link to="404.html">404 Page</Link>
                    </li>
                    <li>
                      <Link to="ui-elements.html">UI Elements</Link>
                    </li>
                    <li>
                      <Link to="dashboard.html">Dashboard</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Shop</span>
                  <ul>
                    <li>
                      <Link to="shop-list.html">Shop List</Link>
                    </li>
                    <li>
                      <Link to="shop-single.html">Shop Single</Link>
                    </li>
                    <li>
                      <Link to="shop-cart.html">Shop Cart</Link>
                    </li>
                    <li>
                      <Link to="shop-checkout.html">Shop Checkout</Link>
                    </li>
                    <li>
                      <Link to="shop-order.html">Shop Order</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Blog</span>
                  <ul>
                    <li>
                      <Link to="blog-list-v1.html">Blog List 01</Link>
                    </li>
                    <li>
                      <Link to="blog-list-v2.html">Blog List 02</Link>
                    </li>
                    <li>
                      <Link to="blog-list-v3.html">Blog List 03</Link>
                    </li>
                    <li>
                      <Link to="blog-single.html">Blog Single</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="contact.html">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
          {/* /header */}
          {/* main-content */}
          <div className="main-content spacing-20">
            {/* slider */}
            <section className="slider home1">
              <div className="wrap-slider">
                <div className="slider-item">
                  <div className="cl-container">
                    <div className="row">
                      <div className="col-12">
                        <div className="slider-content">
                          <div className="sub wow fadeInUp" data-wow-delay="0.1s">
                            LET US GUIDE YOUR HOME
                          </div>
                          <h1 className=" wow fadeInUp" data-wow-delay="0.2s">
                            Discover a place you'll love to live
                          </h1>
                          <div className="widget-tabs">
                            <ul
                              className="widget-menu-tab list-link wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <li className="item-title item active">Buy</li>
                              <li className="item-title item">Rent</li>
                            </ul>
                            <div className="widget-content-tab">
                              <div className="widget-content-inner active">
                                <form className="form-search-content flex-grow wow fadeInUp">
                                  <fieldset className="name">
                                    <input
                                      type="text"
                                      placeholder="Enter key word"
                                      className="show-search style-2"
                                      name="name"
                                      tabIndex={2}
                                      defaultValue=""
                                      aria-required="true"
                                      required=""
                                    />
                                  </fieldset>
                                  <div className="button-submit style-absolute-right">
                                    <button className="style-icon-bg" type="submit">
                                      <i className="flaticon-magnifiying-glass" />
                                    </button>
                                  </div>
                                  <div className="box-content-search">
                                    <ul>
                                      <li>
                                        <div className="heading">Recent Search</div>
                                      </li>
                                      <li>
                                        <div className="item">
                                          <i className="flaticon-time" />
                                          <p>New York</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="item">
                                          <i className="flaticon-time" />
                                          <p>Los Angeles</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="item1">
                                          <div>
                                            <div className="image">
                                              <img
                                                src="images/author/avatar-7.png"
                                                alt=""
                                              />
                                            </div>
                                            <p>Home Pitt Street</p>
                                          </div>
                                          <div className="text">For Rent</div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="item">
                                          <i className="flaticon-time" />
                                          <p>Manhattan</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="item">
                                          <i className="flaticon-time" />
                                          <p>Brooklyn</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </form>
                              </div>
                              <div className="widget-content-inner">
                                <form className="form-search-content flex-grow">
                                  <fieldset className="name">
                                    <input
                                      type="text"
                                      placeholder="Enter an address, neighborhood, city, or ZIP code"
                                      className="show-search style-2"
                                      name="name"
                                      tabIndex={2}
                                      defaultValue=""
                                      aria-required="true"
                                      required=""
                                    />
                                  </fieldset>
                                  <div className="button-submit style-absolute-right">
                                    <button className="style-icon-bg" type="submit">
                                      <i className="flaticon-magnifiying-glass" />
                                    </button>
                                  </div>
                                  <div className="box-content-search">
                                    <ul>
                                      <li>
                                        <div className="heading">Recent Search</div>
                                      </li>
                                      <li>
                                        <div className="item">
                                          <i className="flaticon-time" />
                                          <p>New York</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="item">
                                          <i className="flaticon-time" />
                                          <p>Los Angeles</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="item1">
                                          <div>
                                            <div className="image">
                                              <img
                                                src="images/author/avatar-7.png"
                                                alt=""
                                              />
                                            </div>
                                            <p>Home Pitt Street</p>
                                          </div>
                                          <div className="text">For Rent</div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="item">
                                          <i className="flaticon-time" />
                                          <p>Manhattan</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="item">
                                          <i className="flaticon-time" />
                                          <p>Brooklyn</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /slider */}
            <div className="space-20" />
            {/* flat-homes */}
            <section className="tf-section flat-homes">
              <div className="cl-container">
                <div className="row">
                  <div className="col-12">
                    <div className="heading-section text-center">
                      <h2 className=" wow fadeInUp" data-wow-delay="0.1s">
                        Homes For You
                      </h2>
                      <div className="text wow fadeInUp" data-wow-delay="0.2s">
                        Based on your view history
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className=" arrow-style-1 arrow-over">
                      <div className="swiper-container slider-homes">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div
                              className="box-dream wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <div className="image">
                                <div className="list-tags">
                                  <Link to="#" className="tags-item for-sell">
                                    FOR RENT
                                  </Link>
                                  <Link to="#" className="tags-item featured">
                                    FEATURED
                                  </Link>
                                </div>
                                <div className="button-heart">
                                  <i className="flaticon-heart-1" />
                                </div>
                                <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                     {imageProperties.length > 0 && (
  <div>
    <img
      className="w-full"
      src={`https://bhubaneswarproperty.in/assets/advt/plan2/${imageProperties[0].pro_image}`} // First image from the array
      alt="No image"
      style={{ height: '450px' }}
    />
  
  </div>
)}
                                      </div>
                                    </div>

                                  </div>
                                  <div className="swiper-pagination box-dream-pagination" />
                                  <div className="box-dream-next swiper-button-next" />
                                  <div className="box-dream-prev swiper-button-prev" />
                                </div>
                              </div>
                              <div className="content">
                                <div className="head">
                                  <div className="title">
                                    <Link to="property-single-v1.html">
                                    {loading ? (
  <p>Loading properties...</p>
) : properties.length > 0 ? (
  <Link to="#" key={properties[0].id}>
    {properties[0].property_name} {/* Display only the first property name */}
  </Link>
) : (
  <p>No properties available at the moment.</p>
)}
      

                                    </Link>
                                  </div>
                                  <div className="price">$815,000</div>
                                </div>
                                <div className="location">
                                  <div className="icon">
                                    <i className="flaticon-location" />
                                  </div>
                                  <p>{loading ? (
  <p>Loading properties...</p>
) : properties.length > 0 ? (
  <Link to="#" key={properties[0].id}>
    {properties[0].title} {/* Display only the first property name */}
  </Link>
) : (
  <p>No properties available at the moment.</p>
)}</p>
                                </div>
                                <div className="icon-box">
                                  <div className="item">
                                    <i className="flaticon-hotel" />
                                    <p>{loading ? (
  <p>Loading properties...</p>
) : properties.length > 0 ? (
  <Link to="#" key={properties[0].id}>
    {properties[0].bedrooms} {/* Display only the first property name */}
  </Link>
) : (
  <p>No properties available at the moment.</p>
)}</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-bath-tub" />
                                    <p>{loading ? (
  <p>Loading properties...</p>
) : properties.length > 0 ? (
  <Link to="#" key={properties[0].id}>
    {properties[0].bathrooms} {/* Display only the first property name */}
  </Link>
) : (
  <p>No properties available at the moment.</p>
)}</p>
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          </div>

                          </div>
                          </div>
                          </div>
                         
                        </div>
                          <div className="col-6">
                          <div className=" arrow-style-1 arrow-over">
                      <div className="swiper-container slider-homes">
                        <div className="swiper-wrapper">
                  
                          <div className="swiper-slide">
                            <div className="box-dream">
                              <div className="image">
                                <div className="list-tags">
                                  <Link to="#" className="tags-item for-sell">
                                    FOR SELL
                                  </Link>
                                 
                                </div>
                                <div className="button-heart">
                                  <i className="flaticon-heart-1" />
                                </div>
                                <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                
                                     {imageProperties.length > 1 && (
  
    <img
      className="w-full"
      src={`https://bhubaneswarproperty.in/assets/advt/plan2/${imageProperties[1].pro_image}`} // First image from the array
      alt="No image"
      style={{ height: '450px' }}
    />
  

)}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="swiper-pagination box-dream-pagination" />
                                  <div className="box-dream-next swiper-button-next" />
                                  <div className="box-dream-prev swiper-button-prev" />
                                </div>
                              </div>
                              <div className="content">
                                <div className="head">
                                  <div className="title">
                                    <Link to="property-single-v1.html">
                                    {loading ? (
  <p>Loading properties...</p>
) : properties.length > 0 ? (
  <Link to="#" key={properties[1].id}>
    {properties[1].property_name} {/* Display only the first property name */}
  </Link>
) : (
  <p>No properties available at the moment.</p>
)}
      
                                    </Link>
                                  </div>
                                  <div className="price">$815,000</div>
                                </div>
                                <div className="location">
                                  <div className="icon">
                                    <i className="flaticon-location" />
                                  </div>
                                  <p>{loading ? (
  <p>Loading properties...</p>
) : properties.length > 0 ? (
  <Link to="#" key={properties[1].id}>
    {properties[1].title} {/* Display only the first property name */}
  </Link>
) : (
  <p>No properties available at the moment.</p>
)}</p>
                                </div>
                                <div className="icon-box">
                                  <div className="item">
                                    <i className="flaticon-hotel" />
                                    <p>{loading ? (
  <p>Loading properties...</p>
) : properties.length > 0 ? (
  <Link to="#" key={properties[1].id}>
    {properties[1].bedrooms} {/* Display only the first property name */}
  </Link>
) : (
  <p>No properties available at the moment.</p>
)}</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-bath-tub" />
                                    <p>{loading ? (
  <p>Loading properties...</p>
) : properties.length > 0 ? (
  <Link to="#" key={properties[1].id}>
    {properties[1].bathrooms} {/* Display only the first property name */}
  </Link>
) : (
  <p>No properties available at the moment.</p>
)}</p>
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="homes-prev has-border swiper-button-prev" />
                      <div className="homes-next has-border swiper-button-next" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /flat-homes */}
            {/* flat-cities */}
            <section className="tf-section flat-cities">
              <div className="cl-container">
                <div className="row">
                  <div className="col-12">
                    <div className="heading-section text-center">
                      <h2 className=" wow fadeInUp" data-wow-delay="0.1s">
                      Your Next Home Awaits in These Amazing Cities
                      </h2>
                      <div className="text wow fadeInUp" data-wow-delay="0.2s">
                      Browse our curated listings and find the perfect match for your lifestyle
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
      <div className="col-12">
        {imageProperties.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {imageProperties.slice(0, 6).map((image, index) => {
              const property = properties[index]; // Get the corresponding property

              return (
                <div
                  key={index}
                  className={`cities-item item-${index + 1} wow fadeInUp`} // Dynamic class
                  style={{
                    width: index === 0 || index === 5 ? '46%' : '25%', // 46% for larger images, 25% for smaller ones
                    marginBottom: '10px',
                    position: 'relative', // Positioning context for absolute positioning
                  }}
                >
                  {/* Display zipcode and address above the image */}
                  {property ? (
                    <div className='content' style={{ padding: '10px', textAlign: 'center',  position: 'absolute', top: '10px', left: '10px', color: 'white' }}>
                      <Link to="#" key={property.id} style={{ color: 'white', textDecoration: 'none' }}>
                        <h4 style={{ margin: '0', fontSize: '1.8rem' }}>{property.zipcode}</h4>
                        <p style={{ margin: '0', fontSize: '1.8rem' }}>{property.address}</p>
                      </Link>
                    </div>
                  ) : (
                    <div style={{ padding: '10px', textAlign: 'center', color: 'white' }}>
                      <p>No address available</p>
                    </div>
                  )}
                  <img
                    className="w-full"
                    src={`https://bhubaneswarproperty.in/assets/advt/plan2/${image.pro_image}`} // Display the image
                    alt={`Image ${index + 1}`}
                    style={{ height: '450px', width: '100%', objectFit: 'cover' }} // Set height to 450px, full width, and cover the container
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
       </div> 
            </section>
            {/* /flat-cities */}
            {/* choose-us */}
            <section className="tf-section choose-us has-bg-vector">
              <div className="cl-container">
                <div className="row">
                  <div className="col-12">
                    <div className="heading-section text-center">
                      <h2 className=" wow fadeInUp" data-wow-delay="0.1s">
                        Why Choose Us
                      </h2>
                      <div className="text wow fadeInUp" data-wow-delay="0.2s">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-12">
                    <div className="box-icon wow fadeInUp" data-wow-delay="0.1s">
                      <div className="icon">
                        <i className="flaticon-house" />
                      </div>
                      <div className="content">
                        <Link to="#" className="title">
                          Find your future home
                        </Link>
                        <p>
                          We help you find a new home by offering a smart real
                          estate experience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-12">
                    <div className="box-icon wow fadeInUp" data-wow-delay="0.15s">
                      <div className="icon">
                        <i className="flaticon-seller" />
                      </div>
                      <div className="content">
                        <Link to="#" className="title">
                          Experienced agents
                        </Link>
                        <p>Find an experienced agent who knows your market best</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-12">
                    <div className="box-icon wow fadeInUp" data-wow-delay="0.2s">
                      <div className="icon">
                        <i className="flaticon-buy-home" />
                      </div>
                      <div className="content">
                        <Link to="#" className="title">
                          Buy or rent homes
                        </Link>
                        <p>
                          Millions of houses and apartments in your favourite cities
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-12">
                    <div className="box-icon wow fadeInUp" data-wow-delay="0.25s">
                      <div className="icon">
                        <i className="flaticon-computer" />
                      </div>
                      <div className="content">
                        <Link to="#" className="title">
                          List your own property
                        </Link>
                        <p>Sign up now and sell or rent your own properties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /choose-us */}
            {/* best-properties */}
            <section className="tf-section best-properties">
              <div className="cl-container">
                <div className="row">
                  <div className="col-12">
                    <div className="heading-section text-center">
                      <h2 className=" wow fadeInUp" data-wow-delay="0.1s">
                        Best Properties
                      </h2>
                      <div className="text wow fadeInUp" data-wow-delay="0.1s">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="inner">
                      <div className="properties-slider item-1 wow fadeInUp">
                        <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="w-full">
                                <img
                                  className="w-full"
                                  src="images/slider/slider-properties-1.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="w-full">
                                <img
                                  className="w-full"
                                  src="images/slider/slider-properties-2.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="box-dream-next has-background swiper-button-next" />
                          <div className="box-dream-prev has-background swiper-button-prev" />
                        </div>
                      </div>
                      <div className="properties-content-default item-2 wow fadeInUp">
                        <div className="number">
                          260<span>+</span>
                        </div>
                        <div className="text">Properties</div>
                        <p>
                          Explore our wide variety of properties to fid your dream
                          home today
                        </p>
                        <Link
                          to="property-single-v1.html"
                          className="button-arrow-right"
                        >
                          <i className="icon-arrow-right-add" />
                        </Link>
                      </div>
                      <div
                        className="video-wrap item-3 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <img src="images/image-box/video-1.jpg" alt="" />
                        <Link
                          to="https://www.youtube.com/watch?v=MLpWrANjFbI"
                          className="popup-youtube"
                        >
                          <div className="icon">
                            <i className="flaticon-play" />
                          </div>
                        </Link>
                      </div>
                      <div className="box-dream style-absolute type-no-bg-content style-properties item-4 wow fadeInUp">
                        <div className="image">
                          <div className="list-tags">
                            <Link to="#" className="tags-item for-sell">
                              FOR RENT
                            </Link>
                            <Link to="#" className="tags-item featured">
                              FEATURED
                            </Link>
                          </div>
                          <img
                            className="w-full"
                            src="images/house/best-properties-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <div className="head">
                            <div className="title">
                              <Link to="property-single-v1.html">Luxury Condo</Link>
                            </div>
                          </div>
                          <div className="location">
                            <div className="icon">
                              <i className="flaticon-location" />
                            </div>
                            <p>148-37 88th Ave, Jamaica, NY 11435</p>
                          </div>
                          <div className="flex flex-wrap justify-between items-center">
                            <div className="price">$815,000</div>
                            <div className="icon-box">
                              <div className="item">
                                <i className="flaticon-hotel" />
                                <p>4</p>
                              </div>
                              <div className="item">
                                <i className="flaticon-bath-tub" />
                                <p>3</p>
                              </div>
                              <div className="item">
                                <i className="flaticon-minus-front" />
                                <p>2660</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="property-single-v1.html"
                          className="button-arrow-right"
                        >
                          <i className="icon-arrow-right-add" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /best-properties */}
            {/* luxury-home */}
            <section className="tf-section luxury-home has-bg-vector-1">
              <div className="cl-container">
                <div className="row justify-between">
                  <div className="col-md-6">
                    <div className="image wow fadeInLeft">
                      <img src="images/section/luxury-home-1.jpg" alt="" />
                      <div className="box">
                        <div className="icon">
                          <i className="flaticon-customer" />
                        </div>
                        <div>
                          <p>Total Clients</p>
                          <h4>7,000 M</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-md-6">
                    <div className="content">
                      <h2 className="wow fadeInUp">
                        Local expertise for <br /> luxury homes
                      </h2>
                      <div
                        className="text-content wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        Pellentesque egestas elementum egestas faucibus sem. Velit
                        nunc egestas ut morbi. Leo diam diam nibh eget fermentum
                        massa pretium. Mi mauris nulla ac dictum ut mauris non.
                      </div>
                      <Link
                        to="#"
                        className="tf-button-primary wow fadeInUp"
                        data-wow-delay="0.15s"
                      >
                        Learn More <i className="icon-arrow-right-add" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="counter flex justify-between items-center">
                      <div className="number-counter">
                        <div className="text-center">
                          $
                          <span
                            className="number"
                            data-speed={2500}
                            data-to={16}
                            data-inviewport="yes"
                          >
                            16
                          </span>
                          .4M
                        </div>
                        <p>Owned from properties transactions</p>
                      </div>
                      <div className="number-counter">
                        <div className="text-center">
                          $
                          <span
                            className="number"
                            data-speed={2500}
                            data-to={26}
                            data-inviewport="yes"
                          >
                            26
                          </span>
                          K+
                        </div>
                        <p>Properties for Buy</p>
                      </div>
                      <div className="number-counter">
                        <div className="text-center">
                          $
                          <span
                            className="number"
                            data-speed={2500}
                            data-to={14}
                            data-inviewport="yes"
                          >
                            14
                          </span>
                          K+
                        </div>
                        <p>Properties for Sell</p>
                      </div>
                      <div className="number-counter">
                        <div className="text-center">
                          $
                          <span
                            className="number"
                            data-speed={2500}
                            data-to={890}
                            data-inviewport="yes"
                          >
                            890
                          </span>
                        </div>
                        <p>Daily completed transactions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /luxury-home */}
            {/* flat-testimonial */}
            <section className="tf-section flat-testimonial">
              <div className="testimonials">
                <div className="cl-container" >
                  <div className="row justify-between">
                    <div className="col-xl-4 col-md-6">
                      <div className="testimonials-inner">
                        <h2 className="wow fadeInUp">
                          What our customers are saying us?
                        </h2>
                        <div className="text wow fadeInUp">
                          Various versions have evolved over the years, sometimes by
                          accident, sometimes on purpose injected humour <br /> and
                          the like.
                        </div>
                        <div className="list wow fadeInUp">
                          <div className="item wow fadeInUp">
                            <h3>13m+</h3>
                            <p>Happy People</p>
                          </div>
                          <div className="item wow fadeInUp" data-wow-delay="0.1s">
                            <h3>4.88</h3>
                            <p>Overall rating</p>
                            <div className="ratings">
                              <i className="flaticon-star-1" />
                              <i className="flaticon-star-1" />
                              <i className="flaticon-star-1" />
                              <i className="flaticon-star-1" />
                              <i className="flaticon-star-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-md-6">
                      <div className="swiper-container padding-bottom-80 slider-testimonials arrow-style-1 pagination-style-number">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonials-item">
                              <div className="head">
                                <div className="image wow fadeInLeft">
                                  <img src="images/author/author-1.png" alt="" />
                                </div>
                                <div>
                                  <div className="title wow fadeInUp">
                                    <Link to="#">Cameron Williamson</Link>
                                  </div>
                                  <p className="wow fadeInUp">Designer</p>
                                </div>
                              </div>
                              <div className="description wow fadeInUp">
                                Searches for multiplexes, property comparisons, and
                                the loan estimator. Works great. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dores.
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={45}
                                height={44}
                                viewBox="0 0 45 44"
                                fill="none"
                              >
                                <g filter="url(#filter0_d_249_14836)">
                                  <path
                                    d="M9.67883 38C6.64234 38 4.27007 36.9524 2.56204 34.8571C0.854015 32.6667 0 29.4286 0 25.1429C0 20.6667 0.99635 16.381 2.98905 12.2857C5.07664 8.19048 8.01825 4.14286 11.8139 0.142864C11.9088 0.0476213 12.0511 0 12.2409 0C12.5255 0 12.7153 0.142858 12.8102 0.428574C13 0.619048 13.0474 0.857143 12.9526 1.14286C10.6752 4.19048 9.10949 7.14286 8.25548 10C7.49635 12.7619 7.11679 15.8571 7.11679 19.2857C7.11679 21.8571 7.44891 23.8571 8.11314 25.2857C8.77737 26.7143 9.67883 28 10.8175 29.1429L5.40876 30.1429C5.31387 28.5238 5.74088 27.2857 6.68978 26.4286C7.73358 25.5714 9.06205 25.1429 10.6752 25.1429C12.6679 25.1429 14.1861 25.7143 15.2299 26.8571C16.3686 28 16.938 29.5714 16.938 31.5714C16.938 33.6667 16.2737 35.2857 14.9453 36.4286C13.7117 37.4762 11.9562 38 9.67883 38ZM31.5985 38C28.562 38 26.1898 36.9524 24.4818 34.8571C22.8686 32.6667 22.062 29.4286 22.062 25.1429C22.062 20.5714 23.0584 16.2381 25.0511 12.1429C27.0438 8.04762 29.9854 4.04762 33.8759 0.142864C33.9708 0.0476213 34.1131 0 34.3029 0C34.5876 0 34.7774 0.142858 34.8723 0.428574C35.062 0.619048 35.1095 0.857143 35.0146 1.14286C32.7372 4.19048 31.1715 7.14286 30.3175 10C29.5584 12.7619 29.1788 15.8571 29.1788 19.2857C29.1788 21.8571 29.4635 23.9048 30.0328 25.4286C30.6971 26.8571 31.5985 28.0952 32.7372 29.1429L27.4708 30.1429C27.3759 28.5238 27.8029 27.2857 28.7518 26.4286C29.7007 25.5714 31.0292 25.1429 32.7372 25.1429C34.7299 25.1429 36.2482 25.7143 37.292 26.8571C38.4307 28 39 29.5714 39 31.5714C39 33.6667 38.3358 35.2857 37.0073 36.4286C35.7737 37.4762 33.9708 38 31.5985 38Z"
                                    fill="#1A1A1A"
                                  />
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_d_249_14836"
                                    x={0}
                                    y={0}
                                    width={45}
                                    height={44}
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                  >
                                    <feFlood
                                      floodOpacity={0}
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    />
                                    <feOffset dx={6} dy={6} />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_249_14836"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_249_14836"
                                      result="shape"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonials-item">
                              <div className="head">
                                <div className="image">
                                  <img src="images/author/author-1.png" alt="" />
                                </div>
                                <div>
                                  <div className="title">
                                    <Link to="#">Cameron Williamson</Link>
                                  </div>
                                  <p>Designer</p>
                                </div>
                              </div>
                              <div className="description">
                                Searches for multiplexes, property comparisons, and
                                the loan estimator. Works great. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dores.
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={45}
                                height={44}
                                viewBox="0 0 45 44"
                                fill="none"
                              >
                                <g filter="url(#filter0_d_249_14836)">
                                  <path
                                    d="M9.67883 38C6.64234 38 4.27007 36.9524 2.56204 34.8571C0.854015 32.6667 0 29.4286 0 25.1429C0 20.6667 0.99635 16.381 2.98905 12.2857C5.07664 8.19048 8.01825 4.14286 11.8139 0.142864C11.9088 0.0476213 12.0511 0 12.2409 0C12.5255 0 12.7153 0.142858 12.8102 0.428574C13 0.619048 13.0474 0.857143 12.9526 1.14286C10.6752 4.19048 9.10949 7.14286 8.25548 10C7.49635 12.7619 7.11679 15.8571 7.11679 19.2857C7.11679 21.8571 7.44891 23.8571 8.11314 25.2857C8.77737 26.7143 9.67883 28 10.8175 29.1429L5.40876 30.1429C5.31387 28.5238 5.74088 27.2857 6.68978 26.4286C7.73358 25.5714 9.06205 25.1429 10.6752 25.1429C12.6679 25.1429 14.1861 25.7143 15.2299 26.8571C16.3686 28 16.938 29.5714 16.938 31.5714C16.938 33.6667 16.2737 35.2857 14.9453 36.4286C13.7117 37.4762 11.9562 38 9.67883 38ZM31.5985 38C28.562 38 26.1898 36.9524 24.4818 34.8571C22.8686 32.6667 22.062 29.4286 22.062 25.1429C22.062 20.5714 23.0584 16.2381 25.0511 12.1429C27.0438 8.04762 29.9854 4.04762 33.8759 0.142864C33.9708 0.0476213 34.1131 0 34.3029 0C34.5876 0 34.7774 0.142858 34.8723 0.428574C35.062 0.619048 35.1095 0.857143 35.0146 1.14286C32.7372 4.19048 31.1715 7.14286 30.3175 10C29.5584 12.7619 29.1788 15.8571 29.1788 19.2857C29.1788 21.8571 29.4635 23.9048 30.0328 25.4286C30.6971 26.8571 31.5985 28.0952 32.7372 29.1429L27.4708 30.1429C27.3759 28.5238 27.8029 27.2857 28.7518 26.4286C29.7007 25.5714 31.0292 25.1429 32.7372 25.1429C34.7299 25.1429 36.2482 25.7143 37.292 26.8571C38.4307 28 39 29.5714 39 31.5714C39 33.6667 38.3358 35.2857 37.0073 36.4286C35.7737 37.4762 33.9708 38 31.5985 38Z"
                                    fill="#1A1A1A"
                                  />
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_d_249_14836"
                                    x={0}
                                    y={0}
                                    width={45}
                                    height={44}
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                  >
                                    <feFlood
                                      floodOpacity={0}
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    />
                                    <feOffset dx={6} dy={6} />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_249_14836"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_249_14836"
                                      result="shape"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="bottom-wrap">
                          <div className="testimonials-prev has-border swiper-button-prev" />
                          <div className="swiper-pagination testimonials-pagination" />
                          <div className="testimonials-next has-border swiper-button-next" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
                         </section>
            {/* /flat-testimonial */}
            {/* flat-news */}
            <section className="tf-section flat-news">
              <div className="cl-container">
                <div className="row">
                  <div className="col-12">
                    <div className="heading-section text-center">
                      <h2 className="wow fadeInUp">Recent Articles &amp; News</h2>
                      <div className="text wow fadeInUp">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="swiper-container slider-news slider-auto">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="wg-blog wow fadeInUp">
                            <div className="image">
                              <img src="images/blog/blog-grid-1.jpg" alt="" />
                            </div>
                            <div className="content">
                              <div className="sub-blog">
                                <div>Tips &amp; Tricks</div>
                                <div>April 26, 2024</div>
                              </div>
                              <div className="name">
                                <Link to="blog-single.html">
                                  Chip and Joanna Gaines’ Latest Fixer-Upper Is Open
                                  for Visitors
                                </Link>
                              </div>
                              <Link to="#" className="tf-button-no-bg">
                                Read More
                                <i className="icon-arrow-right-add" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div
                            className="wg-blog wow fadeInUp"
                            data-wow-delay="0.1s"
                          >
                            <div className="image">
                              <img src="images/blog/blog-grid-2.jpg" alt="" />
                            </div>
                            <div className="content">
                              <div className="sub-blog">
                                <div>Tips &amp; Tricks</div>
                                <div>April 26, 2024</div>
                              </div>
                              <div className="name">
                                <Link to="blog-single.html">
                                  Homebuyers Will Be So Thankful To Hear These{" "}
                                </Link>
                              </div>
                              <Link to="#" className="tf-button-no-bg">
                                Read More
                                <i className="icon-arrow-right-add" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div
                            className="wg-blog wow fadeInUp"
                            data-wow-delay="0.15s"
                          >
                            <div className="image">
                              <img src="images/blog/blog-grid-3.jpg" alt="" />
                            </div>
                            <div className="content">
                              <div className="sub-blog">
                                <div>Tips &amp; Tricks</div>
                                <div>April 26, 2024</div>
                              </div>
                              <div className="name">
                                <Link to="blog-single.html">
                                  That’s Life! Frank Sinatra’s Former Los
                                  Angeles-Area{" "}
                                </Link>
                              </div>
                              <Link to="#" className="tf-button-no-bg">
                                Read More
                                <i className="icon-arrow-right-add" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div
                            className="wg-blog wow fadeInUp"
                            data-wow-delay="0.2s"
                          >
                            <div className="image">
                              <img src="images/blog/blog-grid-4.jpg" alt="" />
                            </div>
                            <div className="content">
                              <div className="sub-blog">
                                <div>Tips &amp; Tricks</div>
                                <div>April 26, 2024</div>
                              </div>
                              <div className="name">
                                <Link to="blog-single.html">
                                  Affordability crisis buyers and renters turn to
                                  tiny living
                                </Link>
                              </div>
                              <Link to="#" className="tf-button-no-bg">
                                Read More
                                <i className="icon-arrow-right-add" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="wg-blog">
                            <div className="image">
                              <img src="images/blog/blog-grid-3.jpg" alt="" />
                            </div>
                            <div className="content">
                              <div className="sub-blog">
                                <div>Tips &amp; Tricks</div>
                                <div>April 26, 2024</div>
                              </div>
                              <div className="name">
                                <Link to="blog-single.html">
                                  That’s Life! Frank Sinatra’s Former Los
                                  Angeles-Area{" "}
                                </Link>
                              </div>
                              <Link to="#" className="tf-button-no-bg">
                                Read More
                                <i className="icon-arrow-right-add" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /flat-news */}
            {/* tab-search */}
            <section className="tf-section tab-search">
              <div className="cl-container">
                <div className="row">
                  <div className="col-12">
                    <div className="widget-tabs style-2">
                      <ul className="widget-menu-tab">
                        <li className="item-title active">
                          <span className="inner">Real Estate</span>
                        </li>
                        <li className="item-title">
                          <span className="inner">New Homes</span>
                        </li>
                        <li className="item-title">
                          <span className="inner">Popular Area</span>
                        </li>
                        <li className="item-title">
                          <span className="inner">Popular Searches</span>
                        </li>
                      </ul>
                      <div className="widget-content-tab">
                        <div className="widget-content-inner active">
                          <div className="gird-tab-search">
                          <div className="property-grid">
        {loading ? (
          <p>Loading properties...</p>
        ) : properties.length > 0 ? (
          properties.map(property => (
            <Link to="#" key={property.id}>
              {property.property_name}
            </Link>
          ))
        ) : (
          <p>No properties available at the moment.</p>
        )}
      </div>

                              </div>
                        </div>
                        <div className="widget-content-inner">
                          <div className="gird-tab-search">
                            <div className="item">
                              <Link to="#">Real estate NSW</Link>
                              <Link to="#">Real estate VIC</Link>
                              <Link to="#">Real estate QLD</Link>
                              <Link to="#">Real estate WA</Link>
                              <Link to="#">Real estate SA</Link>
                              <Link to="#">Real estate TAS</Link>
                            </div>
                            <div className="item">
                              <Link to="#">Real estate ACT</Link>
                              <Link to="#">Real estate NT</Link>
                              <Link to="#">Real estate Sydney</Link>
                              <Link to="#">Real estate Melbourne</Link>
                              <Link to="#">Real estate Brisbane</Link>
                              <Link to="#">Real estate Perth</Link>
                            </div>
                            <div className="item">
                              <Link to="#">Real estate Adelaide</Link>
                              <Link to="#">Real estate Hobart</Link>
                              <Link to="#">Real estate Canberra</Link>
                              <Link to="#">Real estate Darwin</Link>
                              <Link to="#">Real estate ACT</Link>
                              <Link to="#">Real estate NT</Link>
                            </div>
                            <div className="item">
                              <Link to="#">Real estate NSW</Link>
                              <Link to="#">Real estate VIC</Link>
                              <Link to="#">Real estate QLD</Link>
                              <Link to="#">Real estate WA</Link>
                              <Link to="#">Real estate SA</Link>
                              <Link to="#">Real estate TAS</Link>
                            </div>
                            <div className="item">
                              <Link to="#">Real estate ACT</Link>
                              <Link to="#">Real estate NT</Link>
                              <Link to="#">Real estate Sydney</Link>
                              <Link to="#">Real estate Melbourne</Link>
                              <Link to="#">Real estate Brisbane</Link>
                              <Link to="#">Real estate Perth</Link>
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-inner">
                          <div className="gird-tab-search">
                            <div className="item">
                              <Link to="#">Real estate NSW</Link>
                              <Link to="#">Real estate VIC</Link>
                              <Link to="#">Real estate QLD</Link>
                              <Link to="#">Real estate WA</Link>
                              <Link to="#">Real estate SA</Link>
                              <Link to="#">Real estate TAS</Link>
                            </div>
                            <div className="item">
                              <Link to="#">Real estate ACT</Link>
                              <Link to="#">Real estate NT</Link>
                              <Link to="#">Real estate Sydney</Link>
                              <Link to="#">Real estate Melbourne</Link>
                              <Link to="#">Real estate Brisbane</Link>
                              <Link to="#">Real estate Perth</Link>
                            </div>
                            <div className="item">
                              <Link to="#">Real estate Adelaide</Link>
                              <Link to="#">Real estate Hobart</Link>
                              <Link to="#">Real estate Canberra</Link>
                              <Link to="#">Real estate Darwin</Link>
                              <Link to="#">Real estate ACT</Link>
                              <Link to="#">Real estate NT</Link>
                            </div>
                            <div className="item">
                              <Link to="#">Real estate NSW</Link>
                              <Link to="#">Real estate VIC</Link>
                              <Link to="#">Real estate QLD</Link>
                              <Link to="#">Real estate WA</Link>
                              <Link to="#">Real estate SA</Link>
                              <Link to="#">Real estate TAS</Link>
                            </div>
                            <div className="item">
                              <Link to="#">Real estate ACT</Link>
                              <Link to="#">Real estate NT</Link>
                              <Link to="#">Real estate Sydney</Link>
                              <Link to="#">Real estate Melbourne</Link>
                              <Link to="#">Real estate Brisbane</Link>
                              <Link to="#">Real estate Perth</Link>
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-inner">
                          <div className="gird-tab-search">
                            <div className="item">
                              <Link to="#">Real estate NSW</Link>
                              <Link to="#">Real estate VIC</Link>
                              <Link to="#">Real estate QLD</Link>
                              <Link to="#">Real estate WA</Link>
                              <Link to="#">Real estate SA</Link>
                              <Link to="#">Real estate TAS</Link>
                            </div>
                            <div className="item">
                              <Link to="#">Real estate ACT</Link>
                              <Link to="#">Real estate NT</Link>
                              <Link to="#">Real estate Sydney</Link>
                              <Link to="#">Real estate Melbourne</Link>
                              <Link to="#">Real estate Brisbane</Link>
                              <Link to="#">Real estate Perth</Link>
                            </div>
                            <div className="item">
                              <Link to="#">Real estate Adelaide</Link>
                              <Link to="#">Real estate Hobart</Link>
                              <Link to="#">Real estate Canberra</Link>
                              <Link to="#">Real estate Darwin</Link>
                              <Link to="#">Real estate ACT</Link>
                              <Link to="#">Real estate NT</Link>
                            </div>
                            <div className="item">
                              <Link to="#">Real estate NSW</Link>
                              <Link to="#">Real estate VIC</Link>
                              <Link to="#">Real estate QLD</Link>
                              <Link to="#">Real estate WA</Link>
                              <Link to="#">Real estate SA</Link>
                              <Link to="#">Real estate TAS</Link>
                            </div>
                            <div className="item">
                              <Link to="#">Real estate ACT</Link>
                              <Link to="#">Real estate NT</Link>
                              <Link to="#">Real estate Sydney</Link>
                              <Link to="#">Real estate Melbourne</Link>
                              <Link to="#">Real estate Brisbane</Link>
                              <Link to="#">Real estate Perth</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /tab-search */}
            {/* account-bar */}
            <section className="account-bar">
              <div className="cl-container">
                <div className="row">
                  <div className="col-12">
                    <div className="flex justify-between items-center flex-wrap gap15">
                      <div>
                        <h3 className="wow fadeInUp">Become a Real Estate Agent</h3>
                        <div className="text wow fadeInUp" data-wow-delay="0.1s">
                          We only work with the best companies around the globe
                        </div>
                      </div>
                      <Link to="#" className="tf-button-primary wow fadeInRight">
                        Register Now
                        <i className="icon-arrow-right-add" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /account-bar */}
          </div>
          {/* /main-content */}
          
        </div>
        {/* /#page */}
      </div>
      {/* /#wrapper */}
      {/* go top button */}
      <div className="progress-wrap active-progress">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "286.138"
            }}
          />
        </svg>
      </div>
      {/* /go top button */}
      {/* login-popup */}
      <div className="modal fade modalCenter" id="modallogin">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content modal-sm">
            <Link to="#" className="btn-hide-modal" data-bs-dismiss="modal">
              <i className="icon-close" />
            </Link>
            <div className="image-left">
              <img src="images/section/login.jpg" alt="" />
              <h3>Welcome to Your Real Estate Website</h3>
            </div>
            <div className="content-right">
              <h4>Sign into your account</h4>
              <form className="form-login">
                <fieldset className="name">
                  <input
                    type="text"
                    placeholder="Username"
                    className=""
                    name="text"
                    tabIndex={2}
                    defaultValue="creative"
                    aria-required="true"
                    required=""
                  />
                </fieldset>
                <fieldset className="password">
                  <input
                    type="password"
                    placeholder="Password"
                    className=""
                    name="password"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required=""
                  />
                </fieldset>
                <div className="flex items-center justify-between w-full">
                  <div className="checkbox-item">
                    <label>
                      <p>Remember me</p>
                      <input type="checkbox" />
                      <span className="btn-checkbox" />
                    </label>
                  </div>
                  <Link to="#" className="lost-password">
                    Lost your password?
                  </Link>
                </div>
                <div className="button-submit w-full">
                  <button className="tf-button-primary w-full" type="submit">
                    Login
                    <i className="icon-arrow-right-add" />
                  </button>
                </div>
              </form>
              <div className="flex items-center justify-center">
                <p>Not a member?</p>
                <Link
                  to="#"
                  className="btn-show-register"
                  data-bs-dismiss="modal"
                  data-bs-toggle="modal"
                  data-bs-target="#modalregister"
                >
                  Register here
                </Link>
              </div>
              <ul className="wg-social-1">
                <li>
                  <Link to="#">
                    <i className="flaticon-google" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="flaticon-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="flaticon-facebook" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /login-popup */}
      {/* register-popup */}
      <div className="modal fade modalCenter" id="modalregister">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content modal-sm">
            <Link to="#" className="btn-hide-modal" data-bs-dismiss="modal">
              <i className="icon-close" />
            </Link>
            <div className="image-left">
              <img src="images/section/login.jpg" alt="" />
              <h3>Welcome to Your Real Estate Website</h3>
            </div>
            <div className="content-right">
              <h4>Create an account</h4>
              <form className="form-login">
                <fieldset className="name">
                  <input
                    type="text"
                    placeholder="Username"
                    className=""
                    name="text"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required=""
                  />
                </fieldset>
                <fieldset className="email">
                  <input
                    type="email"
                    placeholder="Email"
                    className=""
                    name="email"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required=""
                  />
                </fieldset>
                <fieldset className="password">
                  <input
                    type="password"
                    placeholder="Password"
                    className=""
                    name="password"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required=""
                  />
                </fieldset>
                <fieldset className="password">
                  <input
                    type="password"
                    placeholder="Retype Password"
                    className=""
                    name="password"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required=""
                  />
                </fieldset>
                <div className="flex items-center justify-between">
                  <div className="checkbox-item">
                    <label>
                      <p>I agree with terms &amp; conditions</p>
                      <input type="checkbox" />
                      <span className="btn-checkbox" />
                    </label>
                  </div>
                </div>
                <div className="button-submit">
                  <button className="tf-button-primary w-full" type="submit">
                    Register
                    <i className="icon-arrow-right-add" />
                  </button>
                </div>
              </form>
              <div className="flex items-center justify-center">
                <p>Have an account?</p>
                <Link
                  to="#"
                  className="btn-show-register"
                  data-bs-dismiss="modal"
                  data-bs-toggle="modal"
                  data-bs-target="#modallogin"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /register-popup */}
    </div>

   
       
    </>
  );
}

export default HomePage;
