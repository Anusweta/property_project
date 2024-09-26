const HomePage = () => {

    return (
        <>
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
                  <a href="index.html" rel="home">
                    <img id="logo-header" src="images/logo/logo-white.svg" alt="" />
                    <img
                      id="logo-header-mobile"
                      src="images/logo/logo.svg"
                      alt=""
                    />
                  </a>
                </div>
                <nav className="main-menu style-white">
                  <ul className="navigation">
                    <li className="has-children current">
                      <a href="javascript:void(0);">Home</a>
                      <ul>
                        <li className="current">
                          <a href="home" className="current">
                            Home Page 01
                          </a>
                        </li>
                        
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="javascript:void(0);">Property</a>
                      <ul className="mega-menu">
                        <li>
                          <ul>
                            <li className="title">List view</li>
                            <li>
                              <a href="PropertyList">Property List 01</a>
                            </li>
                            
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="title">Grid view</li>
                            <li>
                              <a href="property-grid-v1.html">Property Grid 01</a>
                            </li>
                            <li>
                              <a href="property-grid-v2.html">Property Grid 02</a>
                            </li>
                            <li>
                              <a href="property-grid-v3.html">Property Grid 03</a>
                            </li>
                            <li>
                              <a href="property-grid-v4.html">Property Grid 04</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="title">Single view</li>
                            <li>
                              <a href="PropertySingle">
                                Property Single 01
                              </a>
                            </li>
                                                     </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="title">Map Style</li>
                            <li>
                              <a href="property-map-v1.html">Property Map 01</a>
                            </li>
                            <li>
                              <a href="property-map-v2.html">Property Map 02</a>
                            </li>
                            <li>
                              <a href="property-map-v3.html">Property Map 03</a>
                            </li>
                            <li>
                              <a href="property-map-v4.html">Property Map 04</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="javascript:void(0);">Realtor</a>
                      <ul>
                        <li>
                          <a href="agent-list.html">Agent List</a>
                        </li>
                        <li>
                          <a href="agent-single.html">Agent Single</a>
                        </li>
                        <li>
                          <a href="agency-list.html">Agency List</a>
                        </li>
                        <li>
                          <a href="agency-single.html">Agency Single</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="javascript:void(0);">Pages</a>
                      <ul>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="compare.html">Compare</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing Packages</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ Page</a>
                        </li>
                        <li>
                          <a href="404.html">404 Page</a>
                        </li>
                        <li>
                          <a href="ui-elements.html">UI Elements</a>
                        </li>
                        <li>
                          <a href="dashboard.html">Dashboard</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="javascript:void(0);">Shop</a>
                      <ul>
                        <li>
                          <a href="shop-list.html">Shop List</a>
                        </li>
                        <li>
                          <a href="shop-single.html">Shop Single</a>
                        </li>
                        <li>
                          <a href="shop-cart.html">Shop Cart</a>
                        </li>
                        <li>
                          <a href="shop-checkout.html">Shop Checkout</a>
                        </li>
                        <li>
                          <a href="shop-order.html">Shop Order</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="javascript:void(0);">Blog</a>
                      <ul>
                        <li>
                          <a href="blog-list-v1.html">Blog List 01</a>
                        </li>
                        <li>
                          <a href="blog-list-v2.html">Blog List 02</a>
                        </li>
                        <li>
                          <a href="blog-list-v3.html">Blog List 03</a>
                        </li>
                        <li>
                          <a href="blog-single.html">Blog Single</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
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
                    <a
                      href="dashboard-add-properties.html"
                      className="tf-button-default style-white"
                    >
                      Add Listing
                    </a>
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
                      <a href="index.html">Home Page 01</a>
                    </li>
                    <li>
                      <a href="home-02.html">Home Page 02</a>
                    </li>
                    <li>
                      <a href="home-03.html">Home Page 03</a>
                    </li>
                    <li>
                      <a href="home-04.html">Home Page 04</a>
                    </li>
                    <li>
                      <a href="home-05.html">Home Page 05</a>
                    </li>
                    <li>
                      <a href="home-06.html">Home Page 06</a>
                    </li>
                    <li>
                      <a href="home-07.html">Home Page 07</a>
                    </li>
                    <li>
                      <a href="home-08.html">Home Page 08</a>
                    </li>
                    <li>
                      <a href="home-09.html">Home Page 09</a>
                    </li>
                    <li>
                      <a href="home-10.html">Home Page 10</a>
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
                          <a href="property-list-v1.html">Property List 01</a>
                        </li>
                        <li>
                          <a href="property-list-v2.html">Property List 02</a>
                        </li>
                        <li>
                          <a href="property-list-v3.html">Property List 03</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>Grid view</span>
                      <ul>
                        <li>
                          <a href="property-grid-v1.html">Property Grid 01</a>
                        </li>
                        <li>
                          <a href="property-grid-v2.html">Property Grid 02</a>
                        </li>
                        <li>
                          <a href="property-grid-v3.html">Property Grid 03</a>
                        </li>
                        <li>
                          <a href="property-grid-v4.html">Property Grid 04</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>Single view</span>
                      <ul>
                        <li>
                          <a href="property-single-v1.html">Property Single 01</a>
                        </li>
                        <li>
                          <a href="property-single-v2.html">Property Single 02</a>
                        </li>
                        <li>
                          <a href="property-single-v3.html">Property Single 03</a>
                        </li>
                        <li>
                          <a href="property-single-v4.html">Property Single 04</a>
                        </li>
                        <li>
                          <a href="property-single-v5.html">Property Single 05</a>
                        </li>
                        <li>
                          <a href="property-single-v6.html">Property Single 06</a>
                        </li>
                        <li>
                          <a href="property-single-v7.html">Property Single 07</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>Map Style</span>
                      <ul>
                        <li>
                          <a href="property-map-v1.html">Property Map 01</a>
                        </li>
                        <li>
                          <a href="property-map-v2.html">Property Map 02</a>
                        </li>
                        <li>
                          <a href="property-map-v3.html">Property Map 03</a>
                        </li>
                        <li>
                          <a href="property-map-v4.html">Property Map 04</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Realtor</span>
                  <ul>
                    <li>
                      <a href="agent-list.html">Agent List</a>
                    </li>
                    <li>
                      <a href="agent-single.html">Agent Single</a>
                    </li>
                    <li>
                      <a href="agency-list.html">Agency List</a>
                    </li>
                    <li>
                      <a href="agency-single.html">Agency Single</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Pages</span>
                  <ul>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="compare.html">Compare</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing Packages</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ Page</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                    <li>
                      <a href="ui-elements.html">UI Elements</a>
                    </li>
                    <li>
                      <a href="dashboard.html">Dashboard</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Shop</span>
                  <ul>
                    <li>
                      <a href="shop-list.html">Shop List</a>
                    </li>
                    <li>
                      <a href="shop-single.html">Shop Single</a>
                    </li>
                    <li>
                      <a href="shop-cart.html">Shop Cart</a>
                    </li>
                    <li>
                      <a href="shop-checkout.html">Shop Checkout</a>
                    </li>
                    <li>
                      <a href="shop-order.html">Shop Order</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Blog</span>
                  <ul>
                    <li>
                      <a href="blog-list-v1.html">Blog List 01</a>
                    </li>
                    <li>
                      <a href="blog-list-v2.html">Blog List 02</a>
                    </li>
                    <li>
                      <a href="blog-list-v3.html">Blog List 03</a>
                    </li>
                    <li>
                      <a href="blog-single.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
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
                  <div className="col-12">
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
                                  <a href="#" className="tags-item for-sell">
                                    FOR RENT
                                  </a>
                                  <a href="#" className="tags-item featured">
                                    FEATURED
                                  </a>
                                </div>
                                <div className="button-heart">
                                  <i className="flaticon-heart-1" />
                                </div>
                                <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-1.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-2.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-3.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-4.jpg"
                                          alt=""
                                        />
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
                                    <a href="property-single-v1.html">
                                      Archer House
                                    </a>
                                  </div>
                                  <div className="price">$815,000</div>
                                </div>
                                <div className="location">
                                  <div className="icon">
                                    <i className="flaticon-location" />
                                  </div>
                                  <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                </div>
                                <div className="icon-box">
                                  <div className="item">
                                    <i className="flaticon-hotel" />
                                    <p>4 Beds</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-bath-tub" />
                                    <p>3 Baths</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-minus-front" />
                                    <p>2660 Sqft</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div
                              className="box-dream wow fadeInUp"
                              data-wow-delay="0.2s"
                            >
                              <div className="image">
                                <div className="list-tags">
                                  <a href="#" className="tags-item for-sell">
                                    FOR SELL
                                  </a>
                                </div>
                                <div className="button-heart">
                                  <i className="flaticon-heart-1" />
                                </div>
                                <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-2.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-1.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-3.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-4.jpg"
                                          alt=""
                                        />
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
                                    <a href="property-single-v1.html">
                                      Villa One Hyde Park
                                    </a>
                                  </div>
                                  <div className="price">$815,000</div>
                                </div>
                                <div className="location">
                                  <div className="icon">
                                    <i className="flaticon-location" />
                                  </div>
                                  <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                </div>
                                <div className="icon-box">
                                  <div className="item">
                                    <i className="flaticon-hotel" />
                                    <p>4 Beds</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-bath-tub" />
                                    <p>3 Baths</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-minus-front" />
                                    <p>2660 Sqft</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div
                              className="box-dream wow fadeInUp"
                              data-wow-delay="0.3s"
                            >
                              <div className="image">
                                <div className="list-tags">
                                  <a href="#" className="tags-item for-sell">
                                    FOR SELL
                                  </a>
                                </div>
                                <div className="button-heart">
                                  <i className="flaticon-heart-1" />
                                </div>
                                <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-3.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-2.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-1.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-4.jpg"
                                          alt=""
                                        />
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
                                    <a href="property-single-v1.html">
                                      Home Pitt Street
                                    </a>
                                  </div>
                                  <div className="price">$815,000</div>
                                </div>
                                <div className="location">
                                  <div className="icon">
                                    <i className="flaticon-location" />
                                  </div>
                                  <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                </div>
                                <div className="icon-box">
                                  <div className="item">
                                    <i className="flaticon-hotel" />
                                    <p>4 Beds</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-bath-tub" />
                                    <p>3 Baths</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-minus-front" />
                                    <p>2660 Sqft</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="box-dream">
                              <div className="image">
                                <div className="list-tags">
                                  <a href="#" className="tags-item for-sell">
                                    FOR SELL
                                  </a>
                                  <a href="#" className="tags-item featured">
                                    FEATURED
                                  </a>
                                </div>
                                <div className="button-heart">
                                  <i className="flaticon-heart-1" />
                                </div>
                                <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-1.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-2.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-3.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-4.jpg"
                                          alt=""
                                        />
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
                                    <a href="property-single-v1.html">
                                      Archer House
                                    </a>
                                  </div>
                                  <div className="price">$815,000</div>
                                </div>
                                <div className="location">
                                  <div className="icon">
                                    <i className="flaticon-location" />
                                  </div>
                                  <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                </div>
                                <div className="icon-box">
                                  <div className="item">
                                    <i className="flaticon-hotel" />
                                    <p>4 Beds</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-bath-tub" />
                                    <p>3 Baths</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-minus-front" />
                                    <p>2660 Sqft</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="box-dream">
                              <div className="image">
                                <div className="list-tags">
                                  <a href="#" className="tags-item for-sell">
                                    FOR SELL
                                  </a>
                                  <a href="#" className="tags-item featured">
                                    FEATURED
                                  </a>
                                </div>
                                <div className="button-heart">
                                  <i className="flaticon-heart-1" />
                                </div>
                                <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-2.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-1.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-3.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="w-full">
                                        <img
                                          className="w-full"
                                          src="images/house/home-4.jpg"
                                          alt=""
                                        />
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
                                    <a href="property-single-v1.html">
                                      Villa One Hyde Park
                                    </a>
                                  </div>
                                  <div className="price">$815,000</div>
                                </div>
                                <div className="location">
                                  <div className="icon">
                                    <i className="flaticon-location" />
                                  </div>
                                  <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                </div>
                                <div className="icon-box">
                                  <div className="item">
                                    <i className="flaticon-hotel" />
                                    <p>4 Beds</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-bath-tub" />
                                    <p>3 Baths</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-minus-front" />
                                    <p>2660 Sqft</p>
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
                        Find Properties in These Cities
                      </h2>
                      <div className="text wow fadeInUp" data-wow-delay="0.2s">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="inner">
                      <div
                        className="cities-item item-1 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <img src="images/image-box/cities-1.jpg" alt="" />
                        <div className="content">
                          <p>13 Properties</p>
                          <h4>New York</h4>
                        </div>
                        <a
                          href="property-map-v1.html"
                          className="button-arrow-right"
                        >
                          <i className="icon-arrow-right-add" />
                        </a>
                      </div>
                      <div
                        className="cities-item item-2 wow fadeInUp"
                        data-wow-delay="0.15s"
                      >
                        <img src="images/image-box/cities-2.jpg" alt="" />
                        <div className="content">
                          <p>55 Properties</p>
                          <h4>Chicago</h4>
                        </div>
                        <a
                          href="property-map-v1.html"
                          className="button-arrow-right"
                        >
                          <i className="icon-arrow-right-add" />
                        </a>
                      </div>
                      <div
                        className="cities-item item-3 wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <img src="images/image-box/cities-3.jpg" alt="" />
                        <div className="content">
                          <p>37 Properties</p>
                          <h4>Los Angeles</h4>
                        </div>
                        <a
                          href="property-map-v1.html"
                          className="button-arrow-right"
                        >
                          <i className="icon-arrow-right-add" />
                        </a>
                      </div>
                      <div
                        className="cities-item item-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <img src="images/image-box/cities-4.jpg" alt="" />
                        <div className="content">
                          <p>26 Properties</p>
                          <h4>San Francisco</h4>
                        </div>
                        <a
                          href="property-map-v1.html"
                          className="button-arrow-right"
                        >
                          <i className="icon-arrow-right-add" />
                        </a>
                      </div>
                      <div
                        className="cities-item item-5 wow fadeInUp"
                        data-wow-delay="0.15s"
                      >
                        <img src="images/image-box/cities-5.jpg" alt="" />
                        <div className="content">
                          <p>93 Properties</p>
                          <h4>Florida</h4>
                        </div>
                        <a
                          href="property-map-v1.html"
                          className="button-arrow-right"
                        >
                          <i className="icon-arrow-right-add" />
                        </a>
                      </div>
                      <div
                        className="cities-item item-6 wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <img src="images/image-box/cities-6.jpg" alt="" />
                        <div className="content">
                          <p>84 Properties</p>
                          <h4>Miami</h4>
                        </div>
                        <a
                          href="property-map-v1.html"
                          className="button-arrow-right"
                        >
                          <i className="icon-arrow-right-add" />
                        </a>
                      </div>
                    </div>
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
                        <a href="#" className="title">
                          Find your future home
                        </a>
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
                        <a href="#" className="title">
                          Experienced agents
                        </a>
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
                        <a href="#" className="title">
                          Buy or rent homes
                        </a>
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
                        <a href="#" className="title">
                          List your own property
                        </a>
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
                        <a
                          href="property-single-v1.html"
                          className="button-arrow-right"
                        >
                          <i className="icon-arrow-right-add" />
                        </a>
                      </div>
                      <div
                        className="video-wrap item-3 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <img src="images/image-box/video-1.jpg" alt="" />
                        <a
                          href="https://www.youtube.com/watch?v=MLpWrANjFbI"
                          className="popup-youtube"
                        >
                          <div className="icon">
                            <i className="flaticon-play" />
                          </div>
                        </a>
                      </div>
                      <div className="box-dream style-absolute type-no-bg-content style-properties item-4 wow fadeInUp">
                        <div className="image">
                          <div className="list-tags">
                            <a href="#" className="tags-item for-sell">
                              FOR RENT
                            </a>
                            <a href="#" className="tags-item featured">
                              FEATURED
                            </a>
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
                              <a href="property-single-v1.html">Luxury Condo</a>
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
                        <a
                          href="property-single-v1.html"
                          className="button-arrow-right"
                        >
                          <i className="icon-arrow-right-add" />
                        </a>
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
                      <a
                        href="#"
                        className="tf-button-primary wow fadeInUp"
                        data-wow-delay="0.15s"
                      >
                        Learn More <i className="icon-arrow-right-add" />
                      </a>
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
                <div className="cl-container">
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
                                    <a href="#">Cameron Williamson</a>
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
                                    <a href="#">Cameron Williamson</a>
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
              <div className="divider" />
              <div className="cl-container">
                <div className="row">
                  <div className="col-12">
                    <div className="heading-section text-center">
                      <div className="text">
                        Thousands of world’s leading companies trust Space
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="flat-brand">
                      <div className="swiper-container slider-brand">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="slogan-logo">
                              <a href="#">
                                <img
                                  src="images/image-box/brand-1.png"
                                  alt="images"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="slogan-logo">
                              <a href="#">
                                <img
                                  src="images/image-box/brand-2.png"
                                  alt="images"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="slogan-logo">
                              <a href="#">
                                <img
                                  src="images/image-box/brand-3.png"
                                  alt="images"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="slogan-logo">
                              <a href="#">
                                <img
                                  src="images/image-box/brand-4.png"
                                  alt="images"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="slogan-logo">
                              <a href="#">
                                <img
                                  src="images/image-box/brand-5.png"
                                  alt="images"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="slogan-logo">
                              <a href="#">
                                <img
                                  src="images/image-box/brand-6.png"
                                  alt="images"
                                />
                              </a>
                            </div>
                          </div>
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
                                <a href="blog-single.html">
                                  Chip and Joanna Gaines’ Latest Fixer-Upper Is Open
                                  for Visitors
                                </a>
                              </div>
                              <a href="#" className="tf-button-no-bg">
                                Read More
                                <i className="icon-arrow-right-add" />
                              </a>
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
                                <a href="blog-single.html">
                                  Homebuyers Will Be So Thankful To Hear These{" "}
                                </a>
                              </div>
                              <a href="#" className="tf-button-no-bg">
                                Read More
                                <i className="icon-arrow-right-add" />
                              </a>
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
                                <a href="blog-single.html">
                                  That’s Life! Frank Sinatra’s Former Los
                                  Angeles-Area{" "}
                                </a>
                              </div>
                              <a href="#" className="tf-button-no-bg">
                                Read More
                                <i className="icon-arrow-right-add" />
                              </a>
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
                                <a href="blog-single.html">
                                  Affordability crisis buyers and renters turn to
                                  tiny living
                                </a>
                              </div>
                              <a href="#" className="tf-button-no-bg">
                                Read More
                                <i className="icon-arrow-right-add" />
                              </a>
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
                                <a href="blog-single.html">
                                  That’s Life! Frank Sinatra’s Former Los
                                  Angeles-Area{" "}
                                </a>
                              </div>
                              <a href="#" className="tf-button-no-bg">
                                Read More
                                <i className="icon-arrow-right-add" />
                              </a>
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
                            <div className="item">
                              <a href="#">Real estate NSW</a>
                              <a href="#">Real estate VIC</a>
                              <a href="#">Real estate QLD</a>
                              <a href="#">Real estate WA</a>
                              <a href="#">Real estate SA</a>
                              <a href="#">Real estate TAS</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate ACT</a>
                              <a href="#">Real estate NT</a>
                              <a href="#">Real estate Sydney</a>
                              <a href="#">Real estate Melbourne</a>
                              <a href="#">Real estate Brisbane</a>
                              <a href="#">Real estate Perth</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate Adelaide</a>
                              <a href="#">Real estate Hobart</a>
                              <a href="#">Real estate Canberra</a>
                              <a href="#">Real estate Darwin</a>
                              <a href="#">Real estate ACT</a>
                              <a href="#">Real estate NT</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate NSW</a>
                              <a href="#">Real estate VIC</a>
                              <a href="#">Real estate QLD</a>
                              <a href="#">Real estate WA</a>
                              <a href="#">Real estate SA</a>
                              <a href="#">Real estate TAS</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate ACT</a>
                              <a href="#">Real estate NT</a>
                              <a href="#">Real estate Sydney</a>
                              <a href="#">Real estate Melbourne</a>
                              <a href="#">Real estate Brisbane</a>
                              <a href="#">Real estate Perth</a>
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-inner">
                          <div className="gird-tab-search">
                            <div className="item">
                              <a href="#">Real estate NSW</a>
                              <a href="#">Real estate VIC</a>
                              <a href="#">Real estate QLD</a>
                              <a href="#">Real estate WA</a>
                              <a href="#">Real estate SA</a>
                              <a href="#">Real estate TAS</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate ACT</a>
                              <a href="#">Real estate NT</a>
                              <a href="#">Real estate Sydney</a>
                              <a href="#">Real estate Melbourne</a>
                              <a href="#">Real estate Brisbane</a>
                              <a href="#">Real estate Perth</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate Adelaide</a>
                              <a href="#">Real estate Hobart</a>
                              <a href="#">Real estate Canberra</a>
                              <a href="#">Real estate Darwin</a>
                              <a href="#">Real estate ACT</a>
                              <a href="#">Real estate NT</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate NSW</a>
                              <a href="#">Real estate VIC</a>
                              <a href="#">Real estate QLD</a>
                              <a href="#">Real estate WA</a>
                              <a href="#">Real estate SA</a>
                              <a href="#">Real estate TAS</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate ACT</a>
                              <a href="#">Real estate NT</a>
                              <a href="#">Real estate Sydney</a>
                              <a href="#">Real estate Melbourne</a>
                              <a href="#">Real estate Brisbane</a>
                              <a href="#">Real estate Perth</a>
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-inner">
                          <div className="gird-tab-search">
                            <div className="item">
                              <a href="#">Real estate NSW</a>
                              <a href="#">Real estate VIC</a>
                              <a href="#">Real estate QLD</a>
                              <a href="#">Real estate WA</a>
                              <a href="#">Real estate SA</a>
                              <a href="#">Real estate TAS</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate ACT</a>
                              <a href="#">Real estate NT</a>
                              <a href="#">Real estate Sydney</a>
                              <a href="#">Real estate Melbourne</a>
                              <a href="#">Real estate Brisbane</a>
                              <a href="#">Real estate Perth</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate Adelaide</a>
                              <a href="#">Real estate Hobart</a>
                              <a href="#">Real estate Canberra</a>
                              <a href="#">Real estate Darwin</a>
                              <a href="#">Real estate ACT</a>
                              <a href="#">Real estate NT</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate NSW</a>
                              <a href="#">Real estate VIC</a>
                              <a href="#">Real estate QLD</a>
                              <a href="#">Real estate WA</a>
                              <a href="#">Real estate SA</a>
                              <a href="#">Real estate TAS</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate ACT</a>
                              <a href="#">Real estate NT</a>
                              <a href="#">Real estate Sydney</a>
                              <a href="#">Real estate Melbourne</a>
                              <a href="#">Real estate Brisbane</a>
                              <a href="#">Real estate Perth</a>
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-inner">
                          <div className="gird-tab-search">
                            <div className="item">
                              <a href="#">Real estate NSW</a>
                              <a href="#">Real estate VIC</a>
                              <a href="#">Real estate QLD</a>
                              <a href="#">Real estate WA</a>
                              <a href="#">Real estate SA</a>
                              <a href="#">Real estate TAS</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate ACT</a>
                              <a href="#">Real estate NT</a>
                              <a href="#">Real estate Sydney</a>
                              <a href="#">Real estate Melbourne</a>
                              <a href="#">Real estate Brisbane</a>
                              <a href="#">Real estate Perth</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate Adelaide</a>
                              <a href="#">Real estate Hobart</a>
                              <a href="#">Real estate Canberra</a>
                              <a href="#">Real estate Darwin</a>
                              <a href="#">Real estate ACT</a>
                              <a href="#">Real estate NT</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate NSW</a>
                              <a href="#">Real estate VIC</a>
                              <a href="#">Real estate QLD</a>
                              <a href="#">Real estate WA</a>
                              <a href="#">Real estate SA</a>
                              <a href="#">Real estate TAS</a>
                            </div>
                            <div className="item">
                              <a href="#">Real estate ACT</a>
                              <a href="#">Real estate NT</a>
                              <a href="#">Real estate Sydney</a>
                              <a href="#">Real estate Melbourne</a>
                              <a href="#">Real estate Brisbane</a>
                              <a href="#">Real estate Perth</a>
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
                      <a href="#" className="tf-button-primary wow fadeInRight">
                        Register Now
                        <i className="icon-arrow-right-add" />
                      </a>
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
            <a href="#" className="btn-hide-modal" data-bs-dismiss="modal">
              <i className="icon-close" />
            </a>
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
                  <a href="#" className="lost-password">
                    Lost your password?
                  </a>
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
                <a
                  href="#"
                  className="btn-show-register"
                  data-bs-dismiss="modal"
                  data-bs-toggle="modal"
                  data-bs-target="#modalregister"
                >
                  Register here
                </a>
              </div>
              <ul className="wg-social-1">
                <li>
                  <a href="#">
                    <i className="flaticon-google" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="flaticon-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="flaticon-facebook" />
                  </a>
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
            <a href="#" className="btn-hide-modal" data-bs-dismiss="modal">
              <i className="icon-close" />
            </a>
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
                <a
                  href="#"
                  className="btn-show-register"
                  data-bs-dismiss="modal"
                  data-bs-toggle="modal"
                  data-bs-target="#modallogin"
                >
                  Log in
                </a>
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
