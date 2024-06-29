import React from 'react';
const Cards = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {/* Card 1 */}
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/chia-pudding-280x280.jpg" alt="Mountain" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Chia Pudding Recipe (Easy & Healthy)</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#vegetarian</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#organic</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#plantbased</span>
        </div>

      </div>

      {/* Card 2 */}
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://www.vegrecipesofindia.com/wp-content/uploads/2016/08/avocado-garlic-bread-toast-280x280.jpg" alt="River" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Avocado Toast (Easy, Simple And Healthy)</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#healthy</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nutrition</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#balance</span>
        </div>

      </div>

      {/* Card 3 */}
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://www.vegrecipesofindia.com/wp-content/uploads/2016/08/eggless-banana-pancake-280x280.jpg" alt="Forest" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Eggless Banana Pancakes | Healthy Vegan Banana Pancakes</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#vegetarian</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#organic</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#plantbased</span>
        </div>

      </div>
    </div>
  );
};

export default Cards;