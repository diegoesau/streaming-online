import useRoute from "../hooks/useRoute";
import NavigationBar from "../components/NavigationBar";
import Card from "../components/Card";
import SaveButton from "../components/SaveButton";
import { IoWallet, IoWalletOutline, IoTimer, IoTimerOutline } from "react-icons/io5";
import '../styles/Payment.css'

const Payment = () => {
    const [id, movieId, movie] = useRoute();
    
    return (
    <>
    <NavigationBar/>
    <main className="payment">
        <h2 className="payment__title"> Details </h2>
        <Card
          key={movieId}
          id={id}
          title={movie.Title}
          poster={movie.Poster}
          />
        <div className="payment__options">
            <div>
                <SaveButton movieId={id} IconTrue={IoWallet} IconFalse={IoWalletOutline} listName='Purchased'/>
                <p>Purchase</p>
            </div>
            <div>
                <SaveButton movieId={id} IconTrue={IoTimer} IconFalse={IoTimerOutline} listName='Rented'/>
                <p>Rent</p>
            </div>
        </div>
    </main>
    </>
  );
};

export default Payment;
