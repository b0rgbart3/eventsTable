import React from 'react';
import { Link } from "react-router-dom";


const HomePage = () => (
    <div className='home'>
    <div className='hero'>
        <img src={Hero} alt='livingroom'></img>
        <h2> Welcome to</h2>
        <h1>AIShoppr<span className='registered'>®</span></h1>
        <Link to='/search' className='pill heroPill'>
Get started</Link>
    </div>
    <div className='bodyText'>
   <h1> What is <span className='logotype'>AIShoppr</span><span className='registered'>®</span>?</h1>
   <p>
You know what you like when you see it. AIShoppr is your personal shopping assistant. Image Shoppr analyzes the image of your dream decor and then utilizes the power of Google AI Vision Technology, to find all the items in that image, and then gives you options of where to purchase those items.</p>
<h2>
Start with an Image</h2>
<p>

AIShoppr makes shopping fun again. You've found the look you want for your new living room. All you need to do is give ImageShopr the url of the image. Then Image Shoppr analyzes that image using the Google Vision Artificial Intelligence Vision API, and breaks it down into a shopping list.</p>

<h2>Get Purchase Options</h2>

<p>
Shoppr then takes that shopping list and goes shopping for you. It will give you a list of options for similar items and store locations of where to purchase them. You can choose weather you want to make the purchases online or in stores. If you choose in stores, AIShoppr will display a map showing the stores closest to you where you can purchase these items.</p>

<h2>Connect with friends</h2>

<p>
Networking is essential for accumulating good information. When it comes to products, reviews, deals, collaboration is a key role in finding out everything you need to know to make your best decisions. AIShoppr allows users to connect with eachother so they can see when their friends have purchased similar items. --Another way that AIShoppr makes shopping FUN again.</p>

<h1>Join <span className='logotype'>AIShoppr</span><span className='registered'>®</span>!</h1>
<div className='centerMe'>
<Link to='/join' className='pill'>
Join today</Link>
    </div>
    </div>
    </div>
)

export default HomePage;


