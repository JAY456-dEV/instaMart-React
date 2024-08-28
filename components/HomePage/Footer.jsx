import React from 'react'

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-main">
                    <div className="container">
                        <div className="join-email-main">
                            <div className="join-detail">
                                <h4>Join our newsletter for £10 off</h4>
                                <p>Register now to get latest updates on promotions &
                                    coupons.Don’t worry, we not spam!
                                </p>
                            </div>

                            <div className="email-detail">
                                <i className="fa-regular fa-envelope"></i>
                                <input type="text" placeholder="Enter Your Email Address" /><a href="">Send</a>
                                <p>By subscribing you agree to our <span>Terms & Conditions and Privacy & Cookies Policy.</span>
                                </p>
                            </div>
                        </div>
                        <hr style={{ marginTop: '45px', marginBottom: '45px' }} />

                        <div className="main-about">
                            <div className="help-section">
                                <h5>Do You Need Help ?</h5>
                                <p>Autoseligen syr. Nek diarask fröbomba. Nör
                                    antipol kynoda Pressa fåmoska.
                                </p>
                                <div className="contect-detail">
                                    <i className="fa-solid fa-phone phone"></i>
                                    <div className="call-num">
                                        <p>Monday-Friday: 08am-9pm</p>
                                        <h5>0 800 300-353</h5>
                                    </div>
                                </div>

                                <div className="contect-email-detail contect-detail">
                                    <i className="fa-regular fa-envelope phone"></i>
                                    <div className="call-num">
                                        <p>Need help with your order?</p>
                                        <h5>info@example.com</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="make-us make-us-2">
                                <h5>Make Money With Us</h5>
                                <a href="">Sell on Grogin</a>
                                <a href="">Sell Your Services On Grogin</a>
                                <a href="">Sell on Grogin Business</a>
                                <a href="">Sell Your Apps on Grogin</a>
                                <a href="">Become an Affilate</a>
                                <a href="">Advertise Your Products</a>
                                <a href="">Sell-Publish with Us</a>
                                <a href="">Become an Blowwe Vendor</a>
                            </div>

                            <div className="make-us make-us-2">
                                <h5>Let Us Help You</h5>
                                <a href="">Accessibility Statement</a>
                                <a href="">Your Orders</a>
                                <a href="">Returns & Replacements</a>
                                <a href="">Shipping Rates & Policies</a>
                                <a href="">Refund and Returns Policy</a>
                                <a href="">Privacy Policy</a>
                                <a href="">Terms and Conditions</a>
                                <a href="">Cookie Settings</a>
                                <a href="">Help Center</a>
                            </div>

                            <div className="make-us make-us-2">
                                <h5>Get to Know Us</h5>
                                <a href="">Careers for Grogin</a>
                                <a href="">About Grogin</a>
                                <a href="">Inverstor Relations</a>
                                <a href="">Grogin Devices</a>
                                <a href="">Customer reviews</a>
                                <a href="">Social Responsibility</a>
                                <a href="">Store Locations</a>
                            </div>

                            <div className="make-us">
                                <h5>Download our app</h5>
                                <div className="play-store">
                                    <img src="./Img/playstore.png" alt="" />
                                    <p>Download App Get
                                        -10% Discount
                                    </p>
                                </div>
                                <div className="app-store">
                                    <img src="./Img/appstore.png" alt="" />
                                    <p>
                                        Download App Get
                                        -20% Discount
                                    </p>
                                </div>

                                <p className="social-para">Follow us on social media:</p>
                                <div className="social-media">
                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f social-comm"></i></a>
                                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram social-comm"></i></a>
                                    <a href="https://twitter.com/?lang=en"><i className="fa-brands fa-x-twitter social-comm"></i></a>
                                    <a href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in social-comm"></i></a>
                                </div>
                            </div>
                        </div>
                        <hr style={{ marginTop: '37px' }} />
                        <div className="payment">
                            <div className="payment-detail">
                                <p>Copyright 2024 © Grogin </p>
                                <div className="payment-img">
                                    <img src="./Img/visa.png" alt="" />
                                    <img className="master" src="./Img/mastercard.png" alt="" />
                                    <img className="paypal" src="./Img/paypal.png" alt="" />
                                    <img src="./Img/skrill.png" alt="" />
                                    <img className="klarna" src="./Img/klarna.png" alt="" />
                                </div>
                            </div>
                            <div className="terms">
                                <a href="">Terms and Conditions</a>
                                <a href="">Privacy Policy</a>
                                <a href="">Order Tracking</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer