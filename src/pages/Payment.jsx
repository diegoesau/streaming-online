import NavigationBar from "../components/NavigationBar";
import Card from "../components/Card";
import '../styles/Payment.css'

const Payment = ({ movie }) => {
  const handleSelect = (tipo) => {
    console.log(tipo); // tipo puede ser "renta" o "compra"
  };

  return (
    <div className="Payment">
        <NavigationBar></NavigationBar>
        <div className="Payment__overlay" /*onClick={onClose}*/></div>
        <div className="Payment__content">
            <h2 className="Payment__title">Adquirir: </h2>
            <Card></Card>
            <div className="Payment__options">
                    <button className="Payment__button" onClick={() => handleSelect("renta")}>
                        Rentar - $29 MXN
                    </button>
                    <button className="Payment__button" onClick={() => handleSelect("compra")}>
                        Comprar - $89 MXN
                    </button>
            </div>
            <button className="Payment__close" /*onClick={onClose}*/>✖</button>
        </div>
    </div>
  );
};

export default Payment;
