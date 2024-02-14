import React from 'react'
import Filters from '../components/Filters'
import styled from 'styled-components'
import DisplayProducts from '../components/DisplayProducts'

const Products = () => {
  
  return (
    <StyledProducts>
      <main className="container">
        <Filters />
        <DisplayProducts />
      </main>
    </StyledProducts>
  );
}



let StyledProducts = styled.section`
  main {
    display: grid;
    margin-top:1rem;
  }

  @media (min-width: 768px) {
    main {
      display: grid;
      grid-template-columns: 3fr 9fr;
    }
  }
  @media (min-width: 1024px) {
    main {
      display: grid;
      grid-template-columns: 3fr 12fr;
    }
  }


`;

export default Products