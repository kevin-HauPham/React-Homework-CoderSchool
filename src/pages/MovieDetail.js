import React, { useEffect, useState } from "react";
import { getMovieDetails } from "../api/apiService";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MDetailCard from "../components/MDetailCard";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function MovieItemPage() {
  // let location = useLocation();
  let auth = useAuth();
  let { movieId } = useParams();
  const [loading, setLoading] = useState();
  const [movieDetail, setMovieDetail] = useState(null);
  const [movieDetailsState, setMovieDetailsState] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const movieDetails = await getMovieDetails(movieId);
        setMovieDetail(movieDetails);
        setLoading(false);
      } catch (e) {
        setMovieDetailsState(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {movieDetailsState ? (
        <>
          <Typography variant="h5" mb={2}>
            MOVIE INFO
          </Typography>
          <Divider />
          <MDetailCard movieDetail={movieDetail} loading={loading} />
        </>
      ) : (
        <Typography variant="h5" mb={2} color="red">
          MOVIE INFO IS UNDER UPDATING
        </Typography>
      )}
    </>
  );
}

export default MovieItemPage;
