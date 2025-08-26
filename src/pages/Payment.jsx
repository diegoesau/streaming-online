import { useState, useEffect } from "react";
import useMovie from "../api/useMovie";
import NavigationBar from "../components/NavigationBar";
import NewCard from "../components/NewCard";
import { IoWallet, IoWalletOutline, IoTimer, IoTimerOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import '../styles/Payment.css'

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [pinNumber, setPinNumber] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [isPurchaseSelected, setIsPurchaseSelected] = useState(false);
    const [isRentSelected, setIsRentSelected] = useState(false);

    const { movie, loading } = useMovie();
    const userID = 'DiegoEsau';
    const validPayment = { cardNumber: '1234123412341234', pinNumber: '1234' };

    useEffect(() => {
        if (movie) {
            setCardNumber('');
            setPinNumber('');
            setShowOptions(false);
            setIsPurchaseSelected(false);
            setIsRentSelected(false);
        }
    }, [movie]);

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

const updateState = async (newState) => {
  try {
    let res;
    if (newState === null) {
      res = await fetch(`http://localhost:8762/movie-service/movies/mylist/${userID}/${movie.imdbID}`, {
        method: 'DELETE'
      });
    } else {
      res = await fetch(`http://localhost:8762/movie-service/movies/mylist/${userID}/${movie.imdbID}/${newState}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
      });
    }
    const text = await res.text(); 
    console.log("Response:", res.status, text);
    if (!res.ok) throw new Error('Failed to update');
  } catch (err) {
    console.error("updateState error:", err);
    alert('Error updating movie state');
  }
}

    const handlePurchaseClick = async () => {
        const newState = isPurchaseSelected ? null : 'PURCHASED';
        await updateState(newState);
        setIsPurchaseSelected(!isPurchaseSelected);
        if (isRentSelected && newState) setIsRentSelected(false); 
    };

    const handleRentClick = async () => {
        const newState = isRentSelected ? null : 'RENTED';
        await updateState(newState);
        setIsRentSelected(!isRentSelected);
        if (isPurchaseSelected && newState) setIsPurchaseSelected(false); 
    };

    if (loading) return <div>Loading...</div>;
    if (!movie) return <div>Movie not found</div>;

    return (
        <>
        <NavigationBar />
        <main className="payment">
            <div className="payment__card">
                <NewCard movies={[movie]} />
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
                            <div className="payment__action">
                                <span 
                                    className="state__button" 
                                    onClick={handlePurchaseClick}
                                >
                                    {isPurchaseSelected ? <IoWallet /> : <IoWalletOutline />}
                                </span>
                                <p className="payment__label">Purchase</p>
                            </div>

                            <div className="payment__action">
                                <span 
                                    className="state__button" 
                                    onClick={handleRentClick}
                                >
                                    {isRentSelected ? <IoTimer /> : <IoTimerOutline />}
                                </span>
                                <p className="payment__label">Rent</p>
                            </div>
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
