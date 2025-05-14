import './ItemListContainer.css';

function ItemListContainer({ greetings }){

  return(
    <div className='itemlist-container'>
    <h2> {greetings} </h2>
    </div>
  )
}

export default ItemListContainer;