import React, { Component } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import './home.css'

export default class Home extends Component {
 
  render() {
  
    return (
      <div>

       {/* <div class="w3-top">
          <div class="w3-bar w3-white w3-wide w3-padding w3-card">
            <a href="#home" class="w3-bar-item w3-button"><b>EK</b> EKart</a>
            <div class="w3-right w3-hide-small">
              <a href=" " class="w3-bar-item w3-button">Products</a>
              <a href=" " class="w3-bar-item w3-button">Notifications</a>
              <a href=" " class="w3-bar-item w3-button">Cart</a>
            </div>
          </div>
        </div>*/}

        <header class="w3-display-container w3-content w3-wide" style={{ maxWidth: 1500 }} id="home">
          <img class="w3-image" src="https://www.bajajfinserv.in/LED_TV_vs_LCD_TV_%E2%80%93_Which_One_Should_You_Buy_banner_large.jpg" alt="Architecture" width="1500" height="800" />

          <div class="hero-text">
            <strong><em><h1 style={{ fontSize: 40, color:"white" }}><b>Get the 30% Off</b></h1></em></strong>
            <strong><em><h3 style={{ fontSize: 40 , color: "white" }}><b>New Arrivals</b></h3></em></strong>
            <h3 style={{color: "white"}}>Shop Now!!</h3>
          </div>

          <div class="w3-display-middle w3-margin-top w3-center">
            <h1 class="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-min"><b>EK</b></span> <span class="w3-hide-small w3-text-light-grey">E Kart</span></h1>
          </div>
        </header>


        <div class="w3-content w3-padding" style={{ maxWidth: 1564 }}>

          <div class="w3-container w3-padding-32" id="projects">
            <b><h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Products</h3></b>
          </div>

          <div class="w3-row-padding">
            <div class="w3-col l3 m6 w3-margin-bottom">
              <div class="w3-display-container">
                <div class="w3-display-topleft w3-black w3-padding">Mobiles</div>
                <img src="https://cdn.mos.cms.futurecdn.net/TJDYpZN3r8B7onh2imuNah.jpg" alt="House" style={{ width: "100%" }} />
              </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
              <div class="w3-display-container">
                <div class="w3-display-topleft w3-black w3-padding">LCDs</div>
                <img src="https://img.diytrade.com/cdimg/1281714/15227881/0/1284778048/32_LCD_TV_Set.jpg" alt="House" style={{ width: "100%" }} />
              </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
              <div class="w3-display-container">
                <div class="w3-display-topleft w3-black w3-padding">Cameras</div>
                <img src="https://cdn.pocket-lint.com/r/s/970x/assets/images/149041-cameras-review-review-canon-eos-90d-review-image1-y948ezej2c-jpg.webp" alt="House" style={{ width: "100%" }} />
              </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
              <div class="w3-display-container">
                <div class="w3-display-topleft w3-black w3-padding">Laptops</div>
              <Link to="laptop"> <img src="https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb-1200-80.jpg" alt="House" style={{ width: "100%" }} /></Link> 
              </div>
            </div>
          </div>

          <div class="w3-row-padding">
            <div class="w3-col l3 m6 w3-margin-bottom">
              <div class="w3-display-container">
                <div class="w3-display-topleft w3-black w3-padding">Pen Drives</div>
                <img src="https://i0.wp.com/manipalblog.com/wp-content/uploads/2015/04/top-6-best-selling-pen-drive.jpg?resize=678%2C381&ssl=1" alt="House" style={{ width: "100%" }} />
              </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
              <div class="w3-display-container">
                <div class="w3-display-topleft w3-black w3-padding">Headphones</div>
                <img src="https://o.aolcdn.com/images/dims?crop=980%2C621%2C0%2C0&quality=85&format=jpg&resize=1600%2C1014&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-11%2F7df238b0-1091-11ea-b3ba-9109fa25667f&client=a1acac3e1b3290917d92&signature=2e60b4ef8e93d847809ad3f5024dc85e7d33be6b" alt="House" style={{ width: "100%" }} />
              </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
              <div class="w3-display-container">
                <div class="w3-display-topleft w3-black w3-padding">Home-Threatre</div>
                <img src="https://cdn.improb.com/wp-content/uploads/2019/08/Best-Entry-Level-Home-Theaters.jpg" alt="House" style={{ width: "100%" }} />
              </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
              <div class="w3-display-container">
                <div class="w3-display-topleft w3-black w3-padding">Smart Watches</div>
               <Link to="watch"><img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2020/02/04/10/cheap-smart-watches-0.jpg?w968" alt="House" style={{ width: "100%" }} /></Link>
              </div>
            </div>
          </div>









          <div class="w3-container w3-padding-32" id="projects">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">OUR TREDING PRODUCTS AND OFFERS</h3>
          </div>
          <div>
            <MDBContainer>
              <MDBCarousel
                activeItem={1}
                length={4}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://cdn.mos.cms.futurecdn.net/99B93aZbmkyWD6x52TXStd.jpg"

                        alt="First slide"
                        width="100%"
                        height="100%"
                      />
                      <div class="hero-text">
                        <h1 style={{ fontSize: 50 }}><b>Get the 30% Off</b></h1>
                        <h3 style={{ fontSize: 50 }}><b>New Arrivals</b></h3>
                        <h3>Shop Now!!</h3>
                      </div>

                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://i.ytimg.com/vi/xFe_ZYtfsZg/maxresdefault.jpg"
                        alt="Second slide"
                        width="100%"
                        height="100%"

                      />
                      <div class="hero-text">
                        <h1 style={{ fontSize: 50 }}><b>Get the 30% Off</b></h1>
                        <h3 style={{ fontSize: 50 }}><b>New Arrivals</b></h3>
                        <h3>Shop Now!!</h3>
                      </div>

                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb-1200-80.jpg"
                        alt="Third slide"
                        width="100%"
                        height="100%"
                      />

                    >
                  </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="4">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smart-watches-lead-1557415911.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
                        alt="Third slide"
                        width="100%"
                        height="100%"
                      />
                    >
                  </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
          </div>



          <div class="w3-container w3-padding-32" id="about">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
    </p>
          </div>

          <div class="w3-row-padding">
            <div class="w3-col l3 m6 w3-margin-bottom">
              <img src="https://hrreview.co.uk/wp-content/uploads/shutterstock_73535212.jpg" alt="Navreet" style={{ width: "85%" }} />
              <h3>Diksha Sharma</h3>
              <p class="w3-opacity">CEO and Founder</p>
              <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
              <img src="https://previews.123rf.com/images/jackf/jackf1611/jackf161101014/65880176-cheerful-professional-man-sitting-with-laptop-and-having-paper-document-in-hands-at-firm-office.jpg" alt="Jane" style={{ width: "90%" }} />
              <h3>Shubham Mehta</h3>
              <p class="w3-opacity">Co-Founder</p>
              <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
              <img src="https://cdn.cdnparenting.com/articles/2019/01/08144644/1211306812-H.jpg" alt="Ishita" style={{ width: "100%" }} />
              <h3>Ishita Gupta</h3>
              <p class="w3-opacity">Architect</p>
              <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
              <img src="https://cdn.wccftech.com/wp-content/uploads/2017/01/mcse.jpg" alt="Dan" style={{ width: "100%" }} />
              <h3>Dan Star</h3>
              <p class="w3-opacity">Architect</p>
              <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
          </div>







          <div class="w3-container w3-padding-32" id="contact">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
            <p>Lets get in touch and talk about your next project.</p>
            <form action="/action_page.php" target="_blank">
              <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
              <input class="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email" />
              <input class="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject" />
              <input class="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment" />
              <button class="w3-button w3-black w3-section" type="submit">
                <i class="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
            </form>
          </div>









        </div>




        <footer class="page-footer font-small mdb-color pt-4" style={{ backgroundColor: "grey" }}>
          <div class="container text-center text-md-left">
            <div class="row text-center text-md-left mt-3 pb-3">
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Company name</h6>
                <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur
        adipisicing elit.</p>
              </div>


              <hr class="w-100 clearfix d-md-none" />


              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a href="#!">MDBootstrap</a>
                </p>
                <p>
                  <a href="#!">MDWordPress</a>
                </p>
                <p>
                  <a href="#!">BrandFlow</a>
                </p>
                <p>
                  <a href="#!">Bootstrap Angular</a>
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                <p>
                  <a href="#!">Your Account</a>
                </p>
                <p>
                  <a href="#!">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!">Help</a>
                </p>
              </div>


              <hr class="w-100 clearfix d-md-none" />


              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p>
                  <i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p>
                  <i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p>
                  <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p>
                  <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>


            </div>


            <hr />


            <div class="row d-flex align-items-center">

              <div class="col-md-7 col-lg-8">

                <p class="text-center text-md-left">© 2020 Copyright:
        <a href="https://mdbootstrap.com/">
                    <strong> MDBootstrap.com</strong>
                  </a>
                </p>


                <div class="col-md-5 col-lg-4 ml-lg-0">

                  <div class="text-center text-md-right">
                    <ul class="list-unstyled list-inline">
                      <li class="list-inline-item">
                        <a class="btn-floating btn-sm rgba-white-slight mx-1">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a class="btn-floating btn-sm rgba-white-slight mx-1">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a class="btn-floating btn-sm rgba-white-slight mx-1">
                          <i class="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a class="btn-floating btn-sm rgba-white-slight mx-1">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>


              </div>


            </div></div>

        </footer>

        <footer class="w3-center w3-black w3-padding-16">
          <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">EKart</a></p>
        </footer>





       
      </div>
    );
  }
}