import { useState, useEffect } from "react";
import useRoute from "../hooks/useRoute";
import NavigationBar from "../components/NavigationBar";
import Card from "../components/Card";
import SaveButton from "../components/SaveButton";
import { IoWallet, IoWalletOutline, IoTimer, IoTimerOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import '../styles/Payment.css'

/* Payment
 * 
 * Muestra el proceso de pago de una pelicula
 * 
 * @params
 * @returns
*/

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [pinNumber, setPinNumber] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [isPurchase, setIsPurchase] = useState(false);
    const [isRent, setIsRent] = useState(false);
    const [id, movieId, movie] = useRoute();

    const validPayment = {cardNumber: '1234123412341234', pinNumber: '1234'};

    useEffect(() => {
        setCardNumber('');
        setPinNumber('');
        setShowOptions(false);
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cardNumber && pinNumber 
            && cardNumber.length === 16 && pinNumber.length === 4
            && cardNumber === validPayment.cardNumber
            && pinNumber === validPayment.pinNumber) {
            setShowOptions(true);
        } else {
            alert("Please enter valid card and pin numbers.");
        }
    }

    const purchase = (state) => {
        setIsPurchase(state);
    }

    const rent = (state) => {
        setIsRent(state);
    }
    
    return (
    <>
    <NavigationBar />
    <main className="payment">
        <div className="payment__card">
          <Card
            key={movieId}
            id={id}
            title={movie.Title}
            poster={movie.Poster}
          />
        </div>
      
        <section className="payment__details">
            <h2 className="payment__heading">Details</h2>
        
            <div className="payment__form">
                <form onSubmit={handleSubmit} className="payment__form-container">
                    <input 
                    type="text" 
                    placeholder="Enter Card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="payment__input"
                    />
                    <input 
                      type="password"
                      placeholder="Enter Pin number"
                      value={pinNumber}
                      onChange={(e) => setPinNumber(e.target.value)}
                      className="payment__input"
                    />
                    <button type="submit" className="payment__submit">Pay</button>
                </form>
            </div>
        
            {showOptions && (
                <>
                <h2 className="payment__heading">Options</h2>
                <p className="payment__subtitle">Choose an option to proceed:</p>
        
                <div className="payment__actions">
                    {!isRent && (
                        <div className="payment__action">
                            <SaveButton 
                            movieId={id} 
                            IconTrue={IoWallet} 
                            IconFalse={IoWalletOutline} 
                            listName='Purchased' 
                            returnState={purchase} 
                            />
                          <p className="payment__label">Purchase</p>
                        </div>
                    )}
        
                    {!isPurchase && (
                        <div className="payment__action">
                            <SaveButton 
                            movieId={id} 
                            IconTrue={IoTimer} 
                            IconFalse={IoTimerOutline} 
                            listName='Rented' 
                            returnState={rent} 
                            />
                            <p className="payment__label">Rent</p>
                        </div>
                    )}
                </div>
        
                <NavLink to="/home/my-list" end className="payment__done">
                    <p>Done</p>
                </NavLink>
                </>
            )}
        </section>
    </main>
    </>
  );
};

export default Payment;
