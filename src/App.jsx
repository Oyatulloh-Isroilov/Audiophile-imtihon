import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Checkout from './routes/Checkout';
import ProductDetails from './components/ProductDetails';
import Error from './components/Error';
import { fetchCategories } from './slices/categoriesSlice';
import { setIsCartOpen, setIsPopupVisible } from './slices/cartSlice';
import { selectIsCartOpen, selectIsPopupVisible } from './selectors/cartSelector';

function App() {
  const isCartOpen = useSelector(selectIsCartOpen);
  const isPopupVisible = useSelector(selectIsPopupVisible);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isCartOpen) {
      dispatch(setIsCartOpen(!isCartOpen));
    }
    if (isPopupVisible && pathname === '/checkout') {
      dispatch(setIsPopupVisible(false));
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='headphones' element={<Shop categoryName='headphones' />} />
        <Route path='speakers' element={<Shop categoryName='speakers' />} />
        <Route path='earphones' element={<Shop categoryName='earphones' />} />
        <Route path='products/:productSlug' element={<ProductDetails />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
