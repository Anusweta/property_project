import { Link } from 'react-router-dom';


const PropertyList = () => {

    return (
        
        <>
        {/* #wrapper */}
        <div id="wrapper">
          {/* #page */}
          <div id="page" className="">
            {/* header */}
            <header id="header_main" className="header header-fixed">
              <div className="header-inner">
                <div className="header-inner-wrap">
                  <div id="site-logo">
                    <Link to="index.html" rel="home">
                      <img
                        className="d-block"
                        id="logo-header"
                        src="images/logo/logo.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <nav className="main-menu">
                    <ul className="navigation">
                      <li className="has-children">
                        <Link to="/">Home</Link>
                        <ul>
                        
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link to="javascript:void(0);">Property</Link>
                      <ul className="mega-menu">
                        <li>
                          <ul>
                            <li className="title">List view</li>
                            <li>
                              <Link to="/PropertyList">Property List 01</Link>
                            </li>
                            
                          </ul>
                        </li>
                        <li>
                              </li>
                        <li>
                          <ul>
                            <li className="title">Single view</li>
                            <li>
                              <Link to="/PropertySingle">
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
                      <li className="has-children">
                        <Link to="javascript:void(0);">Shop</Link>
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
                      <li className="has-children">
                        <Link to="javascript:void(0);">Blog</Link>
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
                  <div className="header-right">
                    <div className="header-call">
                      <div className="icon">
                        <i className="flaticon-phone" />
                      </div>
                      <div className="number">800-555-6789</div>
                    </div>
                    <div
                      data-bs-toggle="modal"
                      data-bs-target="#modallogin"
                      className="header-user"
                    >
                      <div className="icon">
                        <i className="flaticon-user" />
                      </div>
                    </div>
                    <div className="header-btn">
                      <Link
                        to="dashboard-add-properties.html"
                        className="tf-button-default"
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
                  <li>
                    <span>Home</span>
                    <ul>
                      <li>
                        <Link to="index.html">Home Page 01</Link>
                      </li>
                      <li>
                        <Link to="home-02.html">Home Page 02</Link>
                      </li>
                      <li>
                        <Link to="home-03.html">Home Page 03</Link>
                      </li>
                      <li>
                        <Link to="home-04.html">Home Page 04</Link>
                      </li>
                      <li>
                        <Link to="home-05.html">Home Page 05</Link>
                      </li>
                      <li>
                        <Link to="home-06.html">Home Page 06</Link>
                      </li>
                      <li>
                        <Link to="home-07.html">Home Page 07</Link>
                      </li>
                      <li>
                        <Link to="home-08.html">Home Page 08</Link>
                      </li>
                      <li>
                        <Link to="home-09.html">Home Page 09</Link>
                      </li>
                      <li>
                        <Link to="home-10.html">Home Page 10</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="current">
                    <span>Property</span>
                    <ul>
                      <li className="current">
                        <span>List view</span>
                        <ul>
                          <li className="current">
                            <Link to="property-list-v1.html">Property List 01</Link>
                          </li>
                          <li>
                            <Link to="property-list-v2.html">Property List 02</Link>
                          </li>
                          <li>
                            <Link to="property-list-v3.html">Property List 03</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Grid view</span>
                        <ul>
                          <li>
                            <Link to="property-grid-v1.html">Property Grid 01</Link>
                          </li>
                          <li>
                            <Link to="property-grid-v2.html">Property Grid 02</Link>
                          </li>
                          <li>
                            <Link to="property-grid-v3.html">Property Grid 03</Link>
                          </li>
                          <li>
                            <Link to="property-grid-v4.html">Property Grid 04</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Single view</span>
                        <ul>
                          <li>
                            <Link to="property-single-v1.html">Property Single 01</Link>
                          </li>
                          <li>
                            <Link to="property-single-v2.html">Property Single 02</Link>
                          </li>
                          <li>
                            <Link to="property-single-v3.html">Property Single 03</Link>
                          </li>
                          <li>
                            <Link to="property-single-v4.html">Property Single 04</Link>
                          </li>
                          <li>
                            <Link to="property-single-v5.html">Property Single 05</Link>
                          </li>
                          <li>
                            <Link to="property-single-v6.html">Property Single 06</Link>
                          </li>
                          <li>
                            <Link to="property-single-v7.html">Property Single 07</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Map Style</span>
                        <ul>
                          <li>
                            <Link to="property-map-v1.html">Property Map 01</Link>
                          </li>
                          <li>
                            <Link to="property-map-v2.html">Property Map 02</Link>
                          </li>
                          <li>
                            <Link to="property-map-v3.html">Property Map 03</Link>
                          </li>
                          <li>
                            <Link to="property-map-v4.html">Property Map 04</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Realtor</span>
                    <ul>
                      <li>
                        <Link to="agent-list.html">Agent List</Link>
                      </li>
                      <li>
                        <Link to="agent-single.html">Agent Single</Link>
                      </li>
                      <li>
                        <Link to="agency-list.html">Agency List</Link>
                      </li>
                      <li>
                        <Link to="agency-single.html">Agency Single</Link>
                      </li>
                    </ul>
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
            <div className="main-content">
              {/* flat-title */}
              <div className="flat-title">
                <div className="cl-container full">
                  <div className="row">
                    <div className="col-12">
                      <div className="content">
                        <h2>Real Estate &amp; Homes For Sale</h2>
                        <ul className="breadcrumbs">
                          <li>
                            <Link to="index.html">Home</Link>
                          </li>
                          <li>/</li>
                          <li>Property List</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /flat-title */}
              {/* property-list-wrap */}
              <div className="property-list-wrap v1">
                <div className="cl-container">
                  <div className="row">
                    <div className="col-lg-4">
                      <form className="form-sidebar-left">
                        <div className="input-search relative wow fadeInUp">
                          <fieldset className="name">
                            <input
                              type="text"
                              placeholder="New York NY homes"
                              className=""
                              name="name"
                              tabIndex={2}
                              defaultValue=""
                              aria-required="true"
                              required=""
                            />
                          </fieldset>
                          <div className="button-submit style-absolute-right-center">
                            <button className="style-icon-default" type="submit">
                              <i className="flaticon-magnifiying-glass" />
                            </button>
                          </div>
                        </div>
                        <div className="nice-select wow fadeInUp" tabIndex={0}>
                          <span className="current">All Status</span>
                          <ul className="list style-radio">
                            <li data-value="" className="option selected">
                              For Sale
                            </li>
                            <li data-value="For Ren" className="option">
                              For Ren
                            </li>
                            <li data-value="Sold" className="option">
                              Sold
                            </li>
                          </ul>
                        </div>
                        <div className="nice-select wow fadeInUp" tabIndex={0}>
                          <span className="current">Home Type</span>
                          <ul className="list">
                            <li data-value="" className="option selected">
                              Apartments
                            </li>
                            <li data-value="For Ren" className="option">
                              Office
                            </li>
                            <li data-value="Sold" className="option">
                              Villa
                            </li>
                          </ul>
                        </div>
                        <div className="nice-select wow fadeInUp" tabIndex={0}>
                          <span className="current">Location</span>
                          <ul className="list">
                            <li data-value="" className="option selected">
                              USA
                            </li>
                            <li data-value="For Ren" className="option">
                              China
                            </li>
                            <li data-value="Sold" className="option">
                              Viet Nam
                            </li>
                          </ul>
                        </div>
                        <div className="nice-select wow fadeInUp" tabIndex={0}>
                          <span className="current">Beds</span>
                          <ul className="list">
                            <li data-value="" className="option selected">
                              2
                            </li>
                            <li data-value="For Ren" className="option">
                              3
                            </li>
                            <li data-value="Sold" className="option">
                              4
                            </li>
                          </ul>
                        </div>
                        <div className="nice-select wow fadeInUp" tabIndex={0}>
                          <span className="current">Baths</span>
                          <ul className="list">
                            <li data-value="" className="option selected">
                              2
                            </li>
                            <li data-value="For Ren" className="option">
                              3
                            </li>
                            <li data-value="Sold" className="option">
                              4
                            </li>
                          </ul>
                        </div>
                        <div className="nice-select wow fadeInUp" tabIndex={0}>
                          <span className="current">Garages</span>
                          <ul className="list">
                            <li data-value="" className="option selected">
                              2
                            </li>
                            <li data-value="For Ren" className="option">
                              3
                            </li>
                            <li data-value="Sold" className="option">
                              4
                            </li>
                          </ul>
                        </div>
                        <div className="grid-2-cols">
                          <fieldset className="name">
                            <input
                              type="text"
                              placeholder="Min. Area"
                              className=""
                              name="name"
                              tabIndex={2}
                              defaultValue=""
                              aria-required="true"
                              required=""
                            />
                          </fieldset>
                          <fieldset className="name">
                            <input
                              type="text"
                              placeholder="Max. Area"
                              className=""
                              name="name"
                              tabIndex={2}
                              defaultValue=""
                              aria-required="true"
                              required=""
                            />
                          </fieldset>
                          <div className="nice-select wow fadeInUp" tabIndex={0}>
                            <span className="current">Min. Price</span>
                            <ul className="list">
                              <li data-value="" className="option">
                                Min. Price
                              </li>
                              <li data-value="100 $" className="option">
                                100 $
                              </li>
                              <li data-value="150 $" className="option">
                                150 $
                              </li>
                            </ul>
                          </div>
                          <div
                            className="nice-select wow fadeInUp"
                            data-wow-delay="0.1s"
                            tabIndex={0}
                          >
                            <span className="current">Max. Price</span>
                            <ul className="list">
                              <li data-value="" className="option">
                                Max. Price
                              </li>
                              <li data-value="1000 $" className="option">
                                1000 $
                              </li>
                              <li data-value="1500 $" className="option">
                                1500 $
                              </li>
                            </ul>
                          </div>
                        </div>
                        <Link to="#" className="tf-button-other wow fadeInUp">
                          <div className="icon" />
                          Other Features
                        </Link>
                        <Link to="#" className="tf-button-primary w-full wow fadeInUp">
                          Search Property
                          <i className="icon-arrow-right-add" />
                        </Link>
                      </form>
                    </div>
                    <div className="col-lg-8">
                      <div className="top">
                        <form className="">
                          <div className="wg-filter">
                            <div className="tf-button-filter btn-filter">
                              <i className="flaticon-filter" />
                              Filter
                            </div>
                            <div className="open-filter filter-no-content" id="a1">
                              <div className="input-search relative wow fadeInUp">
                                <fieldset className="name">
                                  <input
                                    type="text"
                                    placeholder="New York NY homes"
                                    className=""
                                    name="name"
                                    tabIndex={2}
                                    defaultValue=""
                                    aria-required="true"
                                    required=""
                                  />
                                </fieldset>
                                <div className="button-submit style-absolute-right-center">
                                  <button
                                    className="style-icon-default"
                                    type="submit"
                                  >
                                    <i className="flaticon-magnifiying-glass" />
                                  </button>
                                </div>
                              </div>
                              <div className="nice-select wow fadeInUp" tabIndex={0}>
                                <span className="current">All Status</span>
                                <ul className="list style-radio">
                                  <li data-value="" className="option selected">
                                    For Sale
                                  </li>
                                  <li data-value="For Ren" className="option">
                                    For Ren
                                  </li>
                                  <li data-value="Sold" className="option">
                                    Sold
                                  </li>
                                </ul>
                              </div>
                              <div className="nice-select wow fadeInUp" tabIndex={0}>
                                <span className="current">Home Type</span>
                                <ul className="list">
                                  <li data-value="" className="option selected">
                                    Apartments
                                  </li>
                                  <li data-value="For Ren" className="option">
                                    Office
                                  </li>
                                  <li data-value="Sold" className="option">
                                    Villa
                                  </li>
                                </ul>
                              </div>
                              <div className="nice-select wow fadeInUp" tabIndex={0}>
                                <span className="current">Location</span>
                                <ul className="list">
                                  <li data-value="" className="option selected">
                                    USA
                                  </li>
                                  <li data-value="For Ren" className="option">
                                    China
                                  </li>
                                  <li data-value="Sold" className="option">
                                    Viet Nam
                                  </li>
                                </ul>
                              </div>
                              <div className="nice-select wow fadeInUp" tabIndex={0}>
                                <span className="current">Beds</span>
                                <ul className="list">
                                  <li data-value="" className="option selected">
                                    2
                                  </li>
                                  <li data-value="For Ren" className="option">
                                    3
                                  </li>
                                  <li data-value="Sold" className="option">
                                    4
                                  </li>
                                </ul>
                              </div>
                              <div className="nice-select wow fadeInUp" tabIndex={0}>
                                <span className="current">Baths</span>
                                <ul className="list">
                                  <li data-value="" className="option selected">
                                    2
                                  </li>
                                  <li data-value="For Ren" className="option">
                                    3
                                  </li>
                                  <li data-value="Sold" className="option">
                                    4
                                  </li>
                                </ul>
                              </div>
                              <div className="nice-select wow fadeInUp" tabIndex={0}>
                                <span className="current">Garages</span>
                                <ul className="list">
                                  <li data-value="" className="option selected">
                                    2
                                  </li>
                                  <li data-value="For Ren" className="option">
                                    3
                                  </li>
                                  <li data-value="Sold" className="option">
                                    4
                                  </li>
                                </ul>
                              </div>
                              <div className="grid-2-cols">
                                <fieldset className="name">
                                  <input
                                    type="text"
                                    placeholder="Min. Area"
                                    className=""
                                    name="name"
                                    tabIndex={2}
                                    defaultValue=""
                                    aria-required="true"
                                    required=""
                                  />
                                </fieldset>
                                <fieldset className="name">
                                  <input
                                    type="text"
                                    placeholder="Max. Area"
                                    className=""
                                    name="name"
                                    tabIndex={2}
                                    defaultValue=""
                                    aria-required="true"
                                    required=""
                                  />
                                </fieldset>
                                <div
                                  className="nice-select wow fadeInUp"
                                  tabIndex={0}
                                >
                                  <span className="current">Min. Price</span>
                                  <ul className="list">
                                    <li data-value="" className="option">
                                      Min. Price
                                    </li>
                                    <li data-value="100 $" className="option">
                                      100 $
                                    </li>
                                    <li data-value="150 $" className="option">
                                      150 $
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="nice-select wow fadeInUp"
                                  data-wow-delay="0.1s"
                                  tabIndex={0}
                                >
                                  <span className="current">Max. Price</span>
                                  <ul className="list">
                                    <li data-value="" className="option">
                                      Max. Price
                                    </li>
                                    <li data-value="1000 $" className="option">
                                      1000 $
                                    </li>
                                    <li data-value="1500 $" className="option">
                                      1500 $
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <Link to="#" className="tf-button-other wow fadeInUp">
                                <div className="icon" />
                                Other Features
                              </Link>
                              <Link
                                to="#"
                                className="tf-button-primary w-full wow fadeInUp"
                              >
                                Search Property
                                <i className="icon-arrow-right-add" />
                              </Link>
                            </div>
                          </div>
                        </form>
                        <div className="sub">
                          <p>9,998 results</p>
                          <div className="sort-wrap">
                            <p className="wow fadeInUp">Sort by</p>
                            <div
                              className="nice-select default wow fadeInUp"
                              tabIndex={0}
                            >
                              <span className="current">Newest listings</span>
                              <ul className="list">
                                <li data-value="" className="option selected">
                                  Newest
                                </li>
                                <li data-value="For Ren" className="option">
                                  Oldest
                                </li>
                                <li data-value="Sold" className="option">
                                  3 days
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="box-dream has-border wow fadeInUp">
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
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-1.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-4.jpg"
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
                                  <Link to="property-single-v1.html">Archer House</Link>
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
                        <div className="col-xl-6">
                          <div
                            className="box-dream has-border wow fadeInUp"
                            data-wow-delay="0.1s"
                          >
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
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-4.jpg"
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
                                  <Link to="property-single-v1.html">
                                    Villa One Hyde Park
                                  </Link>
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
                        <div className="col-xl-6">
                          <div className="box-dream has-border wow fadeInUp">
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
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-4.jpg"
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
                                  <Link to="property-single-v1.html">
                                    Home Pitt Street
                                  </Link>
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
                        <div className="col-xl-6">
                          <div
                            className="box-dream has-border wow fadeInUp"
                            data-wow-delay="0.1s"
                          >
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
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-4.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-4.jpg"
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
                                  <Link to="property-single-v1.html">Relaxing Villa</Link>
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
                        <div className="col-xl-6">
                          <div className="box-dream has-border wow fadeInUp">
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
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-1.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-4.jpg"
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
                                  <Link to="property-single-v1.html">Archer House</Link>
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
                        <div className="col-xl-6">
                          <div
                            className="box-dream has-border wow fadeInUp"
                            data-wow-delay="0.1s"
                          >
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
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-4.jpg"
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
                                  <Link to="property-single-v1.html">
                                    Villa One Hyde Park
                                  </Link>
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
                        <div className="col-xl-6">
                          <div className="box-dream has-border wow fadeInUp">
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
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-4.jpg"
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
                                  <Link to="property-single-v1.html">
                                    Home Pitt Street
                                  </Link>
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
                        <div className="col-xl-6">
                          <div
                            className="box-dream has-border wow fadeInUp"
                            data-wow-delay="0.1s"
                          >
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
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-4.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="">
                                      <img
                                        className=""
                                        src="images/house/property-listing-4.jpg"
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
                                  <Link to="property-single-v1.html">Relaxing Villa</Link>
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
                      <div className="row">
                        <div className="col-12">
                          <ul className="wg-pagination justify-center wow fadeInUp">
                            <li>
                              <Link to="#">
                                <i className="icon-keyboard_arrow_left" />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">1</Link>
                            </li>
                            <li className="active">
                              <Link to="#">2</Link>
                            </li>
                            <li>
                              <Link to="#">3</Link>
                            </li>
                            <li>
                              <Link to="#">4</Link>
                            </li>
                            <li>
                              <Link to="#">...</Link>
                            </li>
                            <li>
                              <Link to="#">20</Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="icon-keyboard_arrow_right" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /property-list-wrap */}
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
        {/* Javascript */}
      </>
      
    );
}
 
export default PropertyList;
