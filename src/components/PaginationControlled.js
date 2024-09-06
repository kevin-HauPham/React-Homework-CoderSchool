import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import PaginationItem from "@mui/material/PaginationItem";

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.location.href = `?page=${value}`;
  };
  return (
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
  );
}
