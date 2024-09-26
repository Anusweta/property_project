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
                    <a href="index.html" rel="home">
                      <img
                        className="d-block"
                        id="logo-header"
                        src="images/logo/logo.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <nav className="main-menu">
                    <ul className="navigation">
                      <li className="has-children">
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
                      <a
                        href="dashboard-add-properties.html"
                        className="tf-button-default"
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
                  <li>
                    <span>Home</span>
                    <ul>
                      <li>
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
                  <li className="current">
                    <span>Property</span>
                    <ul>
                      <li className="current">
                        <span>List view</span>
                        <ul>
                          <li className="current">
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
                            <a href="index.html">Home</a>
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
                        <a href="#" className="tf-button-other wow fadeInUp">
                          <div className="icon" />
                          Other Features
                        </a>
                        <a href="#" className="tf-button-primary w-full wow fadeInUp">
                          Search Property
                          <i className="icon-arrow-right-add" />
                        </a>
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
                              <a href="#" className="tf-button-other wow fadeInUp">
                                <div className="icon" />
                                Other Features
                              </a>
                              <a
                                href="#"
                                className="tf-button-primary w-full wow fadeInUp"
                              >
                                Search Property
                                <i className="icon-arrow-right-add" />
                              </a>
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
                                  <a href="property-single-v1.html">Archer House</a>
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
                        <div className="col-xl-6">
                          <div className="box-dream has-border wow fadeInUp">
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
                        <div className="col-xl-6">
                          <div
                            className="box-dream has-border wow fadeInUp"
                            data-wow-delay="0.1s"
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
                                  <a href="property-single-v1.html">Relaxing Villa</a>
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
                                  <a href="property-single-v1.html">Archer House</a>
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
                        <div className="col-xl-6">
                          <div className="box-dream has-border wow fadeInUp">
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
                        <div className="col-xl-6">
                          <div
                            className="box-dream has-border wow fadeInUp"
                            data-wow-delay="0.1s"
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
                                  <a href="property-single-v1.html">Relaxing Villa</a>
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
                              <a href="#">
                                <i className="icon-keyboard_arrow_left" />
                              </a>
                            </li>
                            <li>
                              <a href="#">1</a>
                            </li>
                            <li className="active">
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                            <li>
                              <a href="#">4</a>
                            </li>
                            <li>
                              <a href="#">...</a>
                            </li>
                            <li>
                              <a href="#">20</a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icon-keyboard_arrow_right" />
                              </a>
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
        {/* Javascript */}
      </>
      
    );
}
 
export default PropertyList;
