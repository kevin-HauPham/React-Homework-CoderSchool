import React from "react";
import Grid from "@mui/material/Grid";
import JobCart from "../components/JobCart";
import { JobList } from "../data/JobList";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PAGE_SIZE = 5;
export function JobPage1() {
  const location = useLocation();

  const [page, setPage] = React.useState(1);
  const [pageData, setPageData] = React.useState([]);
  const handleChange = (event, value) => {
    // const params = new URLSearchParams({ page: value });
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

  // useEffect(() => {
  //   const productId = new URLSearchParams(myParam).get("page");
  //   console.log("productId", productId);
  //   if (!productId) {
  //     setPage(1);
  //   } else {
  //     setPage(productId);
  //   }
  // });

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
        <Stack spacing={2}>
          <Pagination
            page={page}
            onChange={handleChange}
            count={3}
            // renderItem={(item) => (
            //   <PaginationItem
            //     component={Link}
            //     to={item.page === 1 ? "/" : `page${item.page}`}
            //     {...item}
            //   />
            // )}
          />
        </Stack>
      </Stack>
    </div>
  );
}
