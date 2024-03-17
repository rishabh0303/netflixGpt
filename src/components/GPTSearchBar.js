import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();
  const dispatch = useDispatch();

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholey, Shershah, Koi Mil Gaya, Don";
    // Make api call to gpt api and get movie result
    const getGPTResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // if(!getGPTResults.choices ? "No such movie found" : )
    // console.log(getGPTResults.choices?.[0]?.message?.content);
    const gptMovies = getGPTResults.choices?.[0]?.message?.content.split(",");

    const data = gptMovies.map((movie) => searchMovie(movie));

    const searchResults = await Promise.all(data);
    dispatch(
      addGPTMovieResult({ movieNames: gptMovies, movieResults: searchResults })
    );
  };

  return (
    <div className=" pt-[38%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-3 md:m-4 py-3 md:py-2 px-2 md:px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
