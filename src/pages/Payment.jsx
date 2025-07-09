import { useState, useEffect } from "react";
import useRoute from "../hooks/useRoute";
import NavigationBar from "../components/NavigationBar";
import Card from "../components/Card";
import SaveButton from "../components/SaveButton";
import { IoWallet, IoWalletOutline, IoTimer, IoTimerOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import '../styles/Payment.css'

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
    <NavigationBar/>
    <main className="payment">
        <div className="payment__card">
            <Card
            key={movieId}
            id={id}
            title={movie.Title}
            poster={movie.Poster}
            />
        </div>

        <section className="payment__options">
            <h2 className="payment__title"> Details </h2>

            <div className="payment__form">
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Enter Card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <input 
                    type="password"
                    placeholder="Enter Pin number"
                    value={pinNumber}
                    onChange={(e) => setPinNumber(e.target.value)}
                    />
                    <button type="submit">Pay</button>
                </form>
            </div>

            {showOptions && (
                <>
                <h2 className="payment__title"> Options </h2>
                <p className="payment__subtitle">Choose an option to proceed:</p>
                <div className="payment__button">
                    {!isRent && (
                        <>
                        <SaveButton movieId={id} IconTrue={IoWallet} IconFalse={IoWalletOutline} listName='Purchased' returnState={purchase}/>
                        <p>Purchase</p>
                        </>)}
                </div>

                <div className="payment__button">
                    {!isPurchase && (
                        <>
                        <SaveButton movieId={id} IconTrue={IoTimer} IconFalse={IoTimerOutline} listName='Rented'returnState={rent}/>
                        <p>Rent</p>
                        </>)}
                </div>

                <NavLink to="/home/my-list" end>
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
