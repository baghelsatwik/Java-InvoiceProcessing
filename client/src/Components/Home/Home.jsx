import React, { useState } from "react";
import Header from "../Header/Header";
import { Box, Typography, Button } from '@mui/material';
import AddInvoice from "../AddInvoice/AddInvoice";

const Home = () => {
  const [addInvoice, setAddInvoice] = useState(false);
  const toggleInvoice = () => {
    setAddInvoice(true);
  }
  return (
    <>
      <Header />
      <Box style={{ margin: 20, padding: 10 }}>
        <Typography variant="h4">Pending Invoice</Typography>
        {
          !addInvoice &&
          <Button
            variant="contained"
            style={{ marginTop: 10, marginLeft: 20, padding: 10 }}
            onClick={() => toggleInvoice()}
          >Add Invoice</Button>
        }
        {addInvoice && <AddInvoice />}
      </Box>
    </>
  )
}

export default Home;