import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AddNewTour from './pages/AddNewTour/AddNewTour';
import MyBookings from './pages/MyBookings/MyBookings';
import AllBookings from './pages/AllBookings/AllBookings';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/placeOrder/:tourId">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/addNewTour">
            <AddNewTour></AddNewTour>
          </PrivateRoute>
          <PrivateRoute path="/myBookings">
            <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute path="/allBookings">
            <AllBookings></AllBookings>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
