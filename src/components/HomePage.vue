<script setup lang="ts">
</script>

<template>
    <nav>
        <div class="navTop">
            <div class="navItem">
                <img src="/src/assets/images/niek-logo.png" alt="">
            </div>
            <div class="navItem">
                <div class="search">
                    <input type="text" placeholder="Search..." class="searchInput">
                    <img src="/src/assets/images/search.png" alt="" class="searchIcon" width="20" height="20">
                </div>
            </div>
            <div class="navItem">
                <span class="limitedOffer">Limited Offer!</span>
            </div>
        </div>
        <div class="navBottom">
            <h3 class="menuItem">AIR FORCE</h3>
            <h3 class="menuItem">JORDAN</h3>
            <h3 class="menuItem">BLAZER</h3>
            <h3 class="menuItem">CRATER</h3>
            <h3 class="menuItem">HIPPIE</h3>
            <h3 class="menuItem">COURT</h3>
        </div>
    </nav>

    <div class="slider">
        <div class="sliderWrapper">
            <div class="sliderItem">
                <img src="/src/assets/images/air.png" alt="" class="sliderImage">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">AIR FORCE <br>NEW <br>SEASON</h1>
                <h2 class="sliderPrice">P 8,990</h2>
                <a href="#products">
                    <button class="buyButton">
                        BUY NOW!
                    </button>
                </a>
            </div>
            <div class="sliderItem">
                <img src="/src/assets/images/jordan.png" alt="" class="sliderImage">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">Airborne <br>Dreams</h1>
                <h2 class="sliderPrice">P 10,990</h2>
                <a href="#products">
                    <button class="buyButton">
                        BUY NOW!
                    </button>
                </a>
            </div>
            <div class="sliderItem">
                <img src="/src/assets/images/blazer.png" alt="" class="sliderImage">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">Elevate <br>your <br>look</h1>
                <h2 class="sliderPrice">P 9,990</h2>
                <a href="#products">
                    <button class="buyButton">
                        BUY NOW!
                    </button>
                </a>
            </div>
            <div class="sliderItem">
                <img src="/src/assets/images/crater.png" alt="" class="sliderImage">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">nike <br>crater <br>impact</h1>
                <h2 class="sliderPrice">P 6,800</h2>
                <a href="#products">
                    <button class="buyButton">
                        BUY NOW!
                    </button>
                </a>
            </div>
            <div class="sliderItem">
                <img src="/src/assets/images/hippie.png" alt="" class="sliderImage">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">peace <br>love and <br>comfort</h1>
                <h2 class="sliderPrice">P 7,990</h2>
                <a href="#products">
                    <button class="buyButton">
                        BUY NOW!
                    </button>
                </a>
            </div>
            <div class="sliderItem">
                <img src="/src/assets/images/court.png" alt="" class="sliderImage">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">Step up<br>your <br>game</h1>
                <h2 class="sliderPrice">P 5,990</h2>
                <a href="#products">
                    <button class="buyButton">
                        BUY NOW!
                    </button>
                </a>
            </div>
        </div>
    </div>
    <div class="features">
        <div class="feature">
            <img src="/src/assets/images/shipping.png" alt="" class="featureIcon">
            <span class="featureTitle">FREE SHIPPING</span>
            <span class="featureDesc">Free worldwide shipping around NCR.</span>
        </div>
        <div class="feature">
            <img src="/src/assets/images/return.png" alt="" class="featureIcon">
            <span class="featureTitle">30 DAYS MONEY BACK GUARANTEE</span>
            <span class="featureDesc">No question return and easy refund in 14 days.</span>
        </div>
        <div class="feature">
            <img src="/src/assets/images/gift.png" alt="" class="featureIcon">
            <span class="featureTitle">GIFT COUPONS</span>
            <span class="featureDesc">Buy gift cards and use coupon codes easily.</span>
        </div>
        <div class="feature">
            <img src="/src/assets/images/contact.png" alt="" class="featureIcon">
            <span class="featureTitle">CONTACT US</span>
            <span class="featureDesc">Keep in touch via shopee and email system.</span>
        </div>
    </div>
    <div id="products" class="product">
        <img src="/src/assets/images/air.png" alt="" class="productImg">
        <div class="productDetails">
            <h1 class="productTitle">AIR FORCE</h1>
            <h2 class="productPrice">P 8,990</h2>
            <p class="productDesc">
                The Air Force 1 boasts a clean, classic silhouette that effortlessly complements any outfit. Whether you’re dressing up or down, these sneakers add an instant touch of street-style cool.
            </p>
            <div class="colors">
                Available Colors:
                <div class="color"></div>
                <div class="color"></div>
            </div>
            <div class="sizes">
                <div class="size">42</div>
                <div class="size">43</div>
                <div class="size">44</div>
            </div>
            <button class="productButton">Buy Now!</button>
        </div>
    </div>
</template>