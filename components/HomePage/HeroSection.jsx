import React from 'react'

function HeroSection() {
    return (
        <>
            <section className="hero-bg" style={{ top: window.scrollY }}>
                <div className="hero-section">
                    <div className="container">
                        <div className="left-info">
                            <h1>
                                Shopping with us for
                                better quality and the
                                best price
                            </h1>
                            <p>We have prepared special discounts for you on grocery products.
                                Don't miss these opportunities...
                            </p>

                            <a href="#" className="sd">Shop Now</a>
                            <h2>$21.67</h2>
                            <p>Don't miss this limited time offer.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection