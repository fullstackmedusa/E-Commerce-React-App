import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import EmailingList from "../components/EmailingList";
import Footer from "../components/Footer";

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const Filter = styled.div`

`;
const FilterText = styled.span`

`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`;
const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dog Treats</Title>
        <FilterContainer>
            <Filter>
                filter 
            </Filter>
            <Filter>
                filter 2
            </Filter>
        </FilterContainer>
        <Products/>
        <EmailingList/>
        <Footer/>
    </Container>
  )
}

export default ProductList