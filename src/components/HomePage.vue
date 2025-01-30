<script setup lang="ts">
</script>

<template>
    <nav id="nav">
        <div class="navTop">
            <div class="navItem">
                <img src="/public/images/vue.png" alt="" class="logoTitle">
                <img src="/public/images/niek-logo.png" alt="">
            </div>
            <div class="navItem">
                <div class="search">
                    <input type="text" placeholder="Search..." class="searchInput">
                    <img src="/public/images/search.png" alt="" class="searchIcon" width="20" height="20">
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
                <img src="/public/images/air.png" alt="" class="sliderImage">
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
                <img src="/public/images/jordan.png" alt="" class="sliderImage">
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
                <img src="/public/images/blazer.png" alt="" class="sliderImage">
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
                <img src="/public/images/crater.png" alt="" class="sliderImage">
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
                <img src="/public/images/hippie.png" alt="" class="sliderImage">
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
                <img src="/public/images/court.png" alt="" class="sliderImage">
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
            <img src="/public/images/shipping.png" alt="" class="featureIcon">
            <span class="featureTitle">FREE SHIPPING</span>
            <span class="featureDesc">Free worldwide shipping around NCR.</span>
        </div>
        <div class="feature">
            <img src="/public/images/return.png" alt="" class="featureIcon">
            <span class="featureTitle">30 DAYS MONEY BACK GUARANTEE</span>
            <span class="featureDesc">No question return and easy refund in 14 days.</span>
        </div>
        <div class="feature">
            <img src="/public/images/gift.png" alt="" class="featureIcon">
            <span class="featureTitle">GIFT COUPONS</span>
            <span class="featureDesc">Buy gift cards and use coupon codes easily.</span>
        </div>
        <div class="feature">
            <img src="/public/images/contact.png" alt="" class="featureIcon">
            <span class="featureTitle">CONTACT US</span>
            <span class="featureDesc">Keep in touch via shopee and email system.</span>
        </div>
    </div>
    <div id="products" class="product">
        <img src="/public/images/air.png" alt="" class="productImg">
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
        <div class="payment">
            <h1 class="payTitle">Personal Infromation</h1>
            <label for="">Name and Surname</label>
            <input type="text" placeholder="John Doe" class="payInput">
            <label for="">Phone number</label>
            <input type="text" placeholder="+63912345678" class="payInput">
            <label for="">Address</label>
            <input type="text" placeholder="Makati" class="payInput">
            <h1 class="payTitle">Card Information</h1>
            <div class="cardIcons">
                <img src="/public/images/visa.png" width="40" alt="" class="cardIcon">
                <img src="/public/images/master.png" width="40" alt="" class="cardIcon">
            </div>
            <input type="password" class="payInput" placeholder="Card Number">
            <div class="cardInfo">
                <input type="text" class="payInput sm" placeholder="mm">
                <input type="text" class="payInput sm" placeholder="yyyy">
                <input type="text" class="payInput sm" placeholder="cvv">
            </div>
            <button class="payButton">Checkout</button>
            <span class="close">X</span>
        </div>
    </div>
    <div class="gallery">
        <div class="galleryItem">
            <h1 class="galleryTitle">Step into greatness!</h1>
            <img src="https://i.pinimg.com/originals/05/67/98/0567986f7aea439bfa0706ff4b3e2f2a.jpg" class="galleryImg">
        </div>
        <div class="galleryItem">
            <img src="https://i.pinimg.com/originals/68/aa/1e/68aa1eb3ce38fee2aadd05568e343b1d.png" class="galleryImg">
            <h1 class="galleryTitle">Be Yourself!</h1>
        </div>
        <div class="galleryItem">
            <h1 class="galleryTitle">Comfort and style!</h1>
            <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/dca799ba-673e-4ede-bebf-c14021a7e547/air-max-flyknit-racer-shoes-tTv54H.png" class="galleryImg">
        </div>
    </div>
    <div class="newSeason">
        <div class="nsItem">
            <img src="https://sneakernews.com/wp-content/uploads/2019/10/nike-gear-up-1.jpg" alt="" class="nsImg">
        </div>
        <div class="nsItem">
            <h3 class="nsTitleSm">Winter New Arrivals</h3>
            <h1 class="nsTitle">New Season</h1>
            <h1 class="nsTitle">New Collection</h1>
            <a href="#nav">
                <button class="nsButton">CHOOSE YOUR STYLE</button>
            </a>
        </div>
        <div class="nsItem">
            <img src="https://images.squarespace-cdn.com/content/v1/55665947e4b091320576d67c/1486418043130-7JF20J9EHK9FCRH5X9B5/image-asset.jpeg" alt="" class="nsImg">
        </div>
    </div>
    <footer>
        <div class="footerLeft">
            <div class="footerMenu">
                <h1 class="fMenuTitle">About Us</h1>
                <ul class="fList">
                    <li class="fListItem">Company</li>
                    <li class="fListItem">Contact</li>
                    <li class="fListItem">Careers</li>
                    <li class="fListItem">Affiliates</li>
                    <li class="fListItem">Stores</li>
                </ul>
            </div>
            <div class="footerMenu">
                <h1 class="fMenuTitle">Useful Links</h1>
                <ul class="fList">
                    <li class="fListItem">Support</li>
                    <li class="fListItem">Refund</li>
                    <li class="fListItem">FAQ</li>
                    <li class="fListItem">Feedback</li>
                    <li class="fListItem">Stories</li>
                </ul>
            </div>
            <div class="footerMenu">
                <h1 class="fMenuTitle">Products</h1>
                <ul class="fList">
                    <li class="fListItem">Air Max</li>
                    <li class="fListItem">Air Jordan</li>
                    <li class="fListItem">Blazer</li>
                    <li class="fListItem">Crater</li>
                    <li class="fListItem">Hippie</li>
                </ul>
            </div>
        </div>
        <div class="footerRight">
            <div class="footerRightMenu">
                <h1 class="fMenuTitle">Subscribe to our Newsletter</h1>
                <div class="fMail">
                    <input type="text" placeholder="your@email.com" class="fInput">
                    <button class="fButton">Join!</button>
                </div>
            </div>
            <div class="footerRightMenu">
                <h1 class="fMenuTitle">Follow Us</h1>
                <div class="fIcons">
                    <img src="/public/images/facebook.png" alt="" class="fIcon">
                    <img src="/public/images/twitter.png" alt="" class="fIcon">
                    <img src="/public/images/instagram.png" alt="" class="fIcon">
                    <img src="/public/images/whatsapp.png" alt="" class="fIcon">
                </div>
            </div>
            <div class="footerRightMenu">
                <span class="copyright">@arvincris97. All rights reserved. 2024</span>
            </div>
        </div>
    </footer>
</template>