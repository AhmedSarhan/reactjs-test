import { useEffect, useState } from 'react';
import './Smothies.css';
const Smoothies = (props) => {
  const [closedState, setClosedState] = useState(true);
  const [productsState, setProductsState] = useState([
    {
      category: 'Smoothies',
      catProducts: [
        {
          img:
            'https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png',
          name: 'hash brown cheeseburger with pickled jalapenos',
          price: '14.99',
        },
        {
          img:
            'https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png',
          name: 'hash brown cheeseburger with pickled jalapenos',
          price: '14.99',
        },
        {
          img:
            'https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png',
          name: 'hash brown cheeseburger with pickled jalapenos',
          price: '14.99',
        },
        {
          img:
            'https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png',
          name: 'hash brown cheeseburger with pickled jalapenos',
          price: '14.99',
        },
      ],
      opened: false,
    },
    {
      category: 'Burgers',
      catProducts: [],
      opened: false,
    },
    {
      category: 'Pizzas',
      catProducts: [],
      opened: false,
    },
  ]);
  const handleChevron = (theCategory, index) => {
    let dummyProducts = [...productsState];

    let clickedDummyCat = productsState.filter((cat) => {
      return cat.category === theCategory;
    });
    clickedDummyCat[0].opened = true;
    dummyProducts.splice(index, 1, clickedDummyCat[0]);
    setProductsState(dummyProducts);
  };
  return (
    <div className="products">
      {productsState.map((cat, index) => {
        return (
          <>
            <div className="category-container" key={index}>
              <div className="category-name">{cat.category}</div>
              <div className="chevron">
                {cat.opened ? (
                  <i
                    className="fas fa-chevron-down"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleChevron(cat.category, index)}
                  ></i>
                ) : (
                  <i
                    className="fas fa-chevron-up"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleChevron(cat.category, index)}
                  ></i>
                )}
              </div>
            </div>
            <div className="products-container">
              {cat.catProducts.map((product, index) => {
                return (
                  <div className="product-container" key={index}>
                    <div className="product-image">
                      <img
                        src={product.img}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">
                      <span>{product.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Smoothies;
