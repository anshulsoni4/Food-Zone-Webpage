import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState(null);



  useEffect(() => {
    const fectchFoodData = async () =>{
      setLoading(true);
    
        try {
          const response = await fetch(BASE_URL);
    
          const json = await response.json();
          
          setData(json);
          setFilteredData(json);
          setLoading(false);
        } catch (error) {
          setError("Error hai bhai");
        }
       
      };
      fectchFoodData();
  }, []);

const searchFood = (e) => {
  const searchValue = e.target.value;
  if(searchValue == ""){

  
    setFilteredData(null);
  }


const filter = data?.filter((food) => 
food.name.toLowerCase().includes(searchValue.toLowerCase())

);
setFilteredData(filter);
};

const filterFood = (type) => {
  if (type === "all") {
    setFilteredData(data);
    setSelectedBtn("all");
    return;
  }

  const filter = data?.filter((food) =>
    food.type.toLowerCase().includes(type.toLowerCase())
  );
  setFilteredData(filter);
  setSelectedBtn(type);
};

const filterBtns = [
  {
    name: "All",
    type: "all",
  },
  {
    name: "Breakfast",
    type: "breakfast",
  },
  {
    name: "Lunch",
    type: "lunch",
  },
  {
    name: "Dinner",
    type: "dinner",
  },
];

if (error) return <div>{error}</div>;
if (loading) return <div>loading.....</div>;
  

  return (
    
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className="search">
          <input 
            onChange={searchFood}
            placeholder="Search Food...."
          />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button onClick={() => filterFood("all")}>All </Button>
        <Button onClick={() => filterFood("breakfast")}>Breakfast </Button>
        <Button onClick={() => filterFood("lunch")}>Lunch </Button>
        <Button onClick={() => filterFood("dinner")}>Dinner </Button>
      </FilterContainer>

      
      

      </Container>
      <SearchResult data={filteredData} />
      </>
  );
};

export default App;

const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
`;
const TopContainer = styled.section`
    min-height: 140px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    align-items: center;

    .search{
      input{
        background-color: transparent;
        border: 1px solid red;
        color: white;
        border-radius: 6px;
        height: 40px;
        font-size: 16px;
        padding: 0 10px;
      }
    }
`;
const FilterContainer = styled.section`
    display: flex;
    justify-content: center;
    gap: 14px;
    padding: 20px;
`;

export const Button = styled.button`
    background: #ff4343;
    border-radius: 6px;
    padding: 6px 12px;
    border: none;
    cursor: pointer;
    &:hover{
      background-color: black;
    }
    color: white;
`;

