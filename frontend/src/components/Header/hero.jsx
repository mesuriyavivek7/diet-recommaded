import React from "react";
import heroImage from "../../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative bg-green-100 dark:bg-green-900 h-96 flex items-center justify-center">
      <div className="absolute top-24 left-24 max-w-xl text-left text-gray-900 dark:text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Nutri Guide</h1>
        <p className="text-lg">
          At Nutri Guide, we provide personalized diet plans tailored to your
          unique needs. Our expert recommendations will help you achieve your
          health goals and maintain a balanced, nutritious lifestyle. Start your
          journey to better health today!
        </p>
      </div>
      <img
        src={heroImage}
        alt="Healthy Food"
        className="absolute bottom-24 right-28 w-1/3 h-1/2 max-w-xs rounded-lg shadow-lg "
      />
    </section>
  );
}
