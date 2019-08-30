import React, { createContext, useContext, useEffect } from "react";
import { Store } from "./Store";
import { IAction, IEpisode } from "./interfaces";

const App = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };

  const toggleButton = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode
    };
    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode
      };
    }
    return dispatch(dispatchObj);
  };
  console.log(state);
  console.log(state.favourites.length);

  //CREATE INTERFACE WITH ALL DATA
  return (
    <>
      <h1>Header</h1>
      <p>pick the favourite</p>
      <h2>{`number of favs selected ${state.favourites.length}`}</h2>
      <section>
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id}>
              <img src={episode.image.medium} alt={`Movies ${episode.name}`} />
              <div>{episode.name}</div>
              <section>
                <div>
                  Season: {episode.season} Number: {episode.number}
                  <button type="button" onClick={() => toggleButton(episode)}>
                    {state.favourites.includes(episode)
                      ? "Remove"
                      : "Favourite"}
                  </button>
                </div>
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default App;
