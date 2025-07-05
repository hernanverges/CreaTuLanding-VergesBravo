import { useState } from 'react';
import { useAppContext } from '../../context/context';
import { db } from '../../firebaseConfig.jsx';
import { addDoc, collection} from 'firebase/firestore';
import { useNavigate} from 'react-router';
import './ConfirmPurchase.css';

export default function ConfirmPurchase() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [error, setError] = useState('');
  const { cart, cleanCart } = useAppContext();
  const navigate = useNavigate();
  const ordersCollection = collection(db, 'orders');

  //cargador de ordenes//
      const createOrder = (name, lastname, phone, mail) => {
        const newOrder ={
        total:cart.reduce((acc, value) => acc += (value.quantity * value.price), 0),
        products:cart,
        name:name,
        lastname:lastname,
        phone:phone,
        mail:mail,
        }
    
        addDoc(ordersCollection,newOrder).then(response=>{
        console.log('Se creo la orden correctamente con el ID' + response.id);
        cleanCart();
        navigate('/');
        })
        .catch(err => console.error(err));
      }
    
      //fin cargador de ordenes//

  //logica del form//
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !lastname || !phone || !mail) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (!mail.includes('@') || !mail.includes('.')) {
      setError('Email inválido');
      return;
    }

    setError('');
    console.log({ name, lastname, phone, mail });

    createOrder(name, lastname, phone, mail);
    
  };
  //fin logica del form//


  return (
    <form onSubmit={handleSubmit} className='purchase-form'>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Apellido" value={lastname} onChange={(e) => setLastname(e.target.value)} />
      <input placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
};
