import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationProduct = () => {

    /*
        Pensar logica para repartir en tres arrays y logar la paginacion
    */
  return (
    <Stack spacing={2}>
      <Pagination count={3} color="primary" />
    </Stack>
  );
}

export default PaginationProduct;