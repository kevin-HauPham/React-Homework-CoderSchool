import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MCard from "./MCard";
import Typography from "@mui/material/Typography";
import PaginationItem from "@mui/material/PaginationItem";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/material";
import { PlaceSharp } from "@mui/icons-material";
function TrendingCardGroup({ trendingList, cutInitial, loadingTrending }) {
  const [cutList, setCutList] = useState();
  const [copiedList, setcopiedList] = useState([]);

  function handleList() {
    let cutMovieList;
    if (copiedList.length === 0) {
      setcopiedList([...trendingList]);
      cutMovieList = [...trendingList].slice(0, 4);
      copiedList.splice(0, 5);
    } else if (copiedList.length === 4) {
      setcopiedList([...trendingList]);
      cutMovieList = copiedList.splice(0, 4);
    } else {
      cutMovieList = copiedList.splice(0, 4);
    }
    return cutMovieList;
  }
  const placeholder = [0, 1, 2, 3, 4];
  const detailSkeleton = (
    <Stack spacing={2}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width="100%" height={300} />
    </Stack>
  );
  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" my={3}>
          TRENDING MOVIES
        </Typography>
      </Stack>
      <Divider />
      <Box sx={{ bgcolor: "" }}>
        <Grid container direction="row" spacing={5} mt={2}>
          {loadingTrending
            ? placeholder.map((item) => {
                return (
                  <Grid key={item} item xs={6} sm={4} md={3}>
                    {detailSkeleton}
                  </Grid>
                );
              })
            : cutList
              ? cutList.map((item) => (
                  <Grid key={item.id} item xs={6} sm={4} md={3}>
                    <MCard item={item} />
                  </Grid>
                ))
              : cutInitial?.map((item) => (
                  <Grid key={item.id} item xs={6} sm={4} md={3}>
                    <MCard item={item} />
                  </Grid>
                ))}
        </Grid>
      </Box>
      s
      <PaginationItem
        // onCick={() => setCutList(handleList())}
        type="next"
        size="large"
      />
    </>
  );
}

export default TrendingCardGroup;