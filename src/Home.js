import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Fortune Oil: Amazon.in: Grocery & Gourmet Foods"
            price={1119.96}
            rating={5}
            image="https://m.media-amazon.com/images/S/aplus-media/vc/0239dace-a9bb-431f-a96e-7e5891feef26.__CR0,0,970,300_PT0_SX970_V1___.jpg"
          />
          <Product
            id="49538094"
            title=" We Care Eco Products Dry Ginger Raw | Whole Sunth Organic SOTH Ginder Dried | Pure Sabut Sukhi Sunth | (100)"
            price={239.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61qOQIEhbIL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="NavaFresh - United States Amazon Brand - Vedaka Raw Peanuts, Red, 1kg"
            price={1199.99}
            rating={3}
            image="https://cdn.shopify.com/s/files/1/0525/5272/8737/products/515eKnyBptL_1024x1024.jpg?v=1616468000"
          />
          <Product
            id="23445930"
            title="ELWORLD AGRO & ORGANIC FOOD PRODUCTS Raw Sugar 1 Kilogram (Pack of 3)"
            price={398.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61aibmiF2AL._SX522_.jpg"
          />
          <Product
            id="3254354345"
            title="Raw Essentials Whole Dried Cranberries, 500g [Antioxidant Rich, Immunity Building]"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61miilXQc4S._SX522_.jpg"
          />
        </div>


        <div className="home__row">
          <Product
            id="4903854"
            title="Fortune Soya Bean Oil, Refined 5L Can"
            price={699.99}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-bORtFExgslfnExsA_osI0W1w0fqUPqTqw&usqp=CAU"
          />
          <Product
            id="23445937"
            title="INDIGENOUS HONEY Raw Organic Honey Unprocessed Unfiltered Unpasteurized Pure Natural Original Honey "
            price={398.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81GspnoFVNS._SX522_.jpg"
          />
          <Product
            id="32543543125"
            title="Home of Spices Green Almonds (Raw Badam) 1KG"
            price={498.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61qLzwZBhCL._SX679_.jpg"
          />
        </div>




        <div className="home__row">
          <Product
            id="90829332"
            title=" Bragg Organic Raw Unfiltered Apple Cider Vinegar - 946 ml"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61Bo2cSqGMS._SL1500_.jpg"
          />
        </div>

        
        <div className="home__row">
          <Product
            id="4903859"
            title="Raw COCOA butter"
            price={1699.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71OVz7jGp2L._SY450_.jpg"
          />
          <Product
            id="23445939"
            title="My Village Amla Honey / Indian Gooseberry in Raw Honey "
            price={1398.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81-S8iMxONL._SX522_.jpg"
          />
         
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Bliss of Earth® Organic Ivory Shea Butter 1kg For Skin Raw & Unrefined African, Great For Face, Skin, Body, Lips"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71qV94V6toL._SY355_.jpg"
          />
        </div>



      </div>
    </div>
  );
}

export default Home;
