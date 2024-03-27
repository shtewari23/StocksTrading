import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const StockTradingComponent = () => {
  const classes = useStyles();
  const [selectedStock, setSelectedStock] = useState('');
  const [quantity, setQuantity] = useState('');
  const [priceLimit, setPriceLimit] = useState('');
  const [action, setAction] = useState('');

  const handleStockChange = (event) => {
    setSelectedStock(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePriceLimitChange = (event) => {
    setPriceLimit(event.target.value);
  };

  const handleActionChange = (event) => {
    setAction(event.target.value);
  };

  const handleSubmit = () => {
    console.log(`Action: ${action}, Stock: ${selectedStock}, Quantity: ${quantity}, Price Limit: ${priceLimit}`);
    // Implement logic for buying/selling stocks
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Stock Trading
      </Typography>
      <FormControl className={classes.formControl}>
        <Select
          value={selectedStock}
          onChange={handleStockChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Select Stock' }}
        >
          <MenuItem value="" disabled>
            Select Stock
          </MenuItem>
          <MenuItem value="TCS">TCS</MenuItem>
          <MenuItem value="Reliance">Reliance</MenuItem>
          <MenuItem value="Infosys">Infosys</MenuItem>
          {/* Add more stock options as needed */}
        </Select>
      </FormControl>
      <TextField
        id="quantity"
        label="Quantity"
        variant="outlined"
        value={quantity}
        onChange={handleQuantityChange}
        className={classes.formControl}
      />
      <TextField
        id="priceLimit"
        label="Price Limit"
        variant="outlined"
        value={priceLimit}
        onChange={handlePriceLimitChange}
        className={classes.formControl}
      />
      <FormControl className={classes.formControl}>
        <Select
          value={action}
          onChange={handleActionChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Select Action' }}
        >
          <MenuItem value="" disabled>
            Select Action
          </MenuItem>
          <MenuItem value="buy">Buy</MenuItem>
          <MenuItem value="sell">Sell</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleSubmit}
        disabled={!selectedStock || !quantity || !priceLimit || !action}
      >
        Submit
      </Button>
    </div>
  );
};

export default StockTradingComponent;
