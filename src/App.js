import {useState} from "react";

function App() {

  const dataList = [
  {
    "id": 1,
    "name": "waenatiroh",
    "year":1999,
    "color": "#a4a4fb",
    "pantone_value": "15-4020"
  },
  {
    "id": 2,
    "name": "fuchsia rose",
    "year":2001,
    "color": "#C74375",
    "pantone_value": "17-2031"
  },
  {
    "id": 3,
    "name": "true red",
    "year":2002,
    "color": "#BF1932",
    "pantone_value": "19-1994"
  },
  {
    "id": 4,
    "name": "liam",
    "year":1998,
    "color": "#ffe57e",
    "pantone_value": "20-2111"
  },
  {
    "id": 5,
    "name": "oliver",
    "year":2020,
    "color": "#74cbeb",
    "pantone_value": "22-2353"
  },
  {
    "id": 6,
    "name": "Amias",
    "year":2021,
    "color": "#359588",
    "pantone_value": "22-2353"
  }
];
  const [searchText, setSearchText] = useState('');
  const [data,setData] = useState(dataList);
  const excludeCloumns =['id'];

const handleChange = value => {
  setSearchText(value);
  filterData(value);
}

const filterData = value => {
  const lowerCaseValue = value.toLowerCase().trim();
  if(!lowerCaseValue) {
    setData(dataList);
  }
  else {
    const filteredData = dataList.filter(itme => {
      return Object.keys(itme).some(key => {
        return excludeCloumns.includes(key) ? false: itme[key].toString().toLowerCase().includes(lowerCaseValue);
      })
    });
    setData(filteredData);
  }
}

  return (
    <div className="App">
      Search: <input 
      type="text"
      placeholder="Type to search..."
      value={searchText}
      onChange={e => handleChange(e.target.value)}
      />

      <div className ="box-container">
        {data.map((d,i) => {
          return <div className="box" key={i} style={{backgroundColor: d.color}}>
            <b>Name: </b>{d.name} <br/>
            <b>Year: </b>{d.year} <br/>
            <b>Color: </b>{d.color} <br/>
            <b>Pantone Value: </b>{d.pantone_value} <br/>
            </div>
        })}
        <div className="clearboth"></div>
        {data.length === 0 && <span>No records found to display!!</span>}
      </div>
    </div>
  );
}

export default App;
