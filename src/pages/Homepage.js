import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TrendingCardGroup from "../components/TrendingCardGroup";
import Category from "../components/Category";
import { getTrendingMovies } from "../api/apiService";

function HomePage() {
  const [loadingTrending, setLoadingTrending] = useState();
  const [trendingList, setTrendingList] = useState([]);
  const [cutInitial, setcutInitial] = useState();
  // const trendingMovieList = getTrendingMovies();
  // console.log("sssssss", trendingMovieList);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingTrending(true);
        const trendingMovieList = await getTrendingMovies();
        setTrendingList(trendingMovieList);
        setcutInitial([...trendingMovieList].splice(16, 4));
        setLoadingTrending(false);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent={{ md: "center", xs: "flex-end" }}
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid item direction="column" container>
          <TrendingCardGroup
            trendingList={trendingList}
            cutInitial={cutInitial}
            loadingTrending={loadingTrending}
          />
        </Grid>

        <Grid item direction="column" mt={5} container>
          <Category />
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
