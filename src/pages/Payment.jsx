import useRoute from "../hooks/useRoute";
import NavigationBar from "../components/NavigationBar";
import Card from "../components/Card";
import '../styles/Payment.css'

const Payment = () => {
  const [id, movieId, movie] = useRoute();

  const handleSelect = (tipo) => {
    console.log(tipo); // tipo puede ser "renta" o "compra"
  };

  return (
    <div className="Payment">
        <NavigationBar></NavigationBar>
        <div className="Payment__overlay" /*onClick={onClose}*/></div>
        <div className="Payment__content">
            <h2 className="Payment__title">Adquirir: </h2>
            <Card
              key={movieId}
              id={id}
              title={movie.Title}
              poster={movie.Poster}
              />
            <div className="Payment__options">
                    <button className="Payment__button" onClick={() => handleSelect("renta")}>
                        Rentar - $29 MXN
                    </button>
                    <button className="Payment__button" onClick={() => handleSelect("compra")}>
                        Comprar - $89 MXN
                    </button>
            </div>
        </div>
    </div>
  );
};

export default Payment;
