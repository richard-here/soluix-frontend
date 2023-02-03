import { useEffect, useState, React } from 'react';
import {
  Box, Toolbar, Typography, useTheme,
  TableContainer, Table, TableHead, TableRow, TableBody,
  TableCell, Stack, Button, Pagination, Paper,
  CircularProgress, IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { formatCurrency, mapStatus } from '../utils';
import getProductList from '../data/api';

function NotFoundPage() {
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handlePaginationChange = (_, value) => {
    setPage(value);
    setIsLoading(true);
  };

  useEffect(() => {
    getProductList({ page, limit: 10 }).then((data) => {
      setTotalPages(data.data.data.total_pages);
      setIsLoading(false);
      setProducts(data.data.data.rows);
    });
  }, [page]);

  if (isLoading) {
    return (
      <Stack justifyContent="center" alignItems="center" flexGrow={1}>
        <CircularProgress />
      </Stack>
    );
  }

  if (products.length === 0 && !isLoading) {
    return <Typography sx={{ textAlign: 'center' }}>Error loading, please reload page</Typography>;
  }

  return (
    <Box sx={{ flexGrow: 1, background: '#f2f7ff', p: 4 }}>
      <Toolbar />
      <Typography variant="h2" sx={{ fontSize: '1.5em', pb: 4, fontWeight: 'bold' }}>Product</Typography>
      <Paper sx={{ p: 2 }}>
        <Typography sx={{ pb: 3 }}>Product List</Typography>
        <Stack sx={{ pb: 3 }} direction="row" justifyContent="space-between">
          <Button variant="outlined">Advanced Search</Button>
          <Button variant="contained">Create New Product</Button>
        </Stack>
        <TableContainer sx={{ border: '1px solid rgba(224, 224, 224, 1)', borderRadius: '5px' }}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: '#F7F7F7',
                }}
              >
                <TableCell sx={{ fontWeight: 'bold' }}>PRODUCT CODE</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>PRODUCT NAME</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>SUB CATEGORY</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">BRAND</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">RETAIL PRICE</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">STATUS</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.code}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    '&:nth-of-type(even)': { bgcolor: '#F7F7F7' },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {product.code}
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.subcategory}</TableCell>
                  <TableCell align="center">{product.brand}</TableCell>
                  <TableCell align="right">{formatCurrency(product.retail_price)}</TableCell>
                  <TableCell align="center">{mapStatus(product.status)}</TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          sx={{
            pt: 5,
            justifyContent: 'flex-end',
            display: 'flex',
            '& li .Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              border: 'none',
              color: theme.palette.primary.contrastText,
            },
          }}
          page={page}
          onChange={handlePaginationChange}
          color="primary"
          count={totalPages}
          siblingCount={1}
          shape="rounded"
          variant="outlined"
        />
      </Paper>
    </Box>
  );
}

export default NotFoundPage;
