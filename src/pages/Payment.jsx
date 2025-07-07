import useRoute from "../hooks/useRoute";
import NavigationBar from "../components/NavigationBar";
import Card from "../components/Card";
import SaveButton from "../components/SaveButton";
import { IoWallet, IoWalletOutline, IoTimer, IoTimerOutline } from "react-icons/io5";
import '../styles/Payment.css'

const Payment = () => {
    const [id, movieId, movie] = useRoute();

  return (
    <div className="Payment">
        <NavigationBar></NavigationBar>
        <div className="Payment__content">
            <h2 className="Payment__title">Adquirir: </h2>
            <Card
              key={movieId}
              id={id}
              title={movie.Title}
              poster={movie.Poster}
              />
            <div className="Payment__options">
                <div>
                    <SaveButton movieId={id} IconTrue={IoWallet} IconFalse={IoWalletOutline} listName='Purchased'/>
                    <p>Purchase</p>
                </div>
                <div>
                    <SaveButton movieId={id} IconTrue={IoTimer} IconFalse={IoTimerOutline} listName='Rented'/>
                    <p>Rent</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Payment;
