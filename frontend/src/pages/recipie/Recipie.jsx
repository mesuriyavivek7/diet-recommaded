import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import recipesCSV from "../../assets/CSV/Recipies.csv";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(recipesCSV);
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder("utf-8");
        const csv = decoder.decode(result.value);

        const { data } = Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          quoteChar: '"',
          delimiter: ",",
          transformHeader: (header) => header.trim(),
          transform: (value, header) => value.trim(),
        });

        const cleanedRecipes = data.map((recipe, index) => ({
          ...recipe,
          Images: cleanImageUrl(recipe.Images),
          id: index + 1, // Assuming each recipe has a unique identifier
        }));

        setRecipes(cleanedRecipes.slice(0, 9));
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  function cleanImageUrl(url) {
    if (url && typeof url === "string") {
      return url.replace(/["']/g, "").trim();
    }
    return ""; // Handle null or undefined case gracefully
  }

  function handleRecipeClick(recipe) {
    setSelectedRecipe(recipe);
  }

  function handleCloseDetails() {
    setSelectedRecipe(null);
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={recipe.Images}
              alt={recipe.Name}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => handleRecipeClick(recipe)}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{recipe.Name}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 max-w-md">
            <button
              className="absolute top-2 right-2 text-white hover:text-red-400"
              onClick={handleCloseDetails}
            >
              Close
            </button>
            <img
              src={selectedRecipe.Images}
              alt={selectedRecipe.Name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">{selectedRecipe.Name}</h3>
              <p className="text-gray-700 mb-4">
                {selectedRecipe.RecipeInstructions}
              </p>
              <p>
                <strong>Cooking Time:</strong> {selectedRecipe.CookTime}
              </p>
              <p>
                <strong>Total Time:</strong> {selectedRecipe.TotalTime}
              </p>
              <p>
                <strong>Recipe Category:</strong>{" "}
                {selectedRecipe.RecipeCategory}
              </p>
              <p>
                <strong>Keywords:</strong> {selectedRecipe.Keywords}
              </p>
              {/* Add more details as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer></Footer>
    </>
  );
}
