import React from "react";
import Grid from "@mui/material/Grid";
import JobCart from "../components/JobCart";
import { JobList } from "../data/JobList";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PAGE_SIZE = 5;
export function JobPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const handleChange = (event, value) => {
    setSearchParams((params) => {
      params.set("page", value);
      return params;
    });
    setPage(value);
  };

  const getPageData = (pageNumber) => {
    const data = JobList.slice(
      (pageNumber - 1) * PAGE_SIZE,
      pageNumber * PAGE_SIZE
    );
    setPageData(data);
  };

  useEffect(() => {
    getPageData(page);
  }, [page]);

  useEffect(() => {
    const pageParam = new URLSearchParams(searchParams).get("page");
    if (pageParam) {
      setPage(Number(pageParam));
    }
  }, [searchParams]);
  return (
    <div>
      <Stack marginTop={2}>
        <Grid container spacing={2}>
          {pageData.map((job) => (
            <Grid item xs={12} md={6} lg={4} rowSpacing={10} key={job.id}>
              <JobCart Job={job} key={job.id} />
            </Grid>
          ))}
        </Grid>
        <Stack spacing={2} alignItems="center">
          <Pagination count={3} page={page} onChange={handleChange} />
        </Stack>
      </Stack>
    </div>
  );
}
