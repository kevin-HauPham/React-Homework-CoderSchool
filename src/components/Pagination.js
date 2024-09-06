import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import PaginationItem from "@mui/material/PaginationItem";

export default function PaginationControlled() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={3}
        renderItem={(item) => (
          <PaginationItem component={Link} to={`page${item.page}`} {...item} />
        )}
      />
    </Stack>
  );
}
