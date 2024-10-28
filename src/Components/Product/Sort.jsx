import React from 'react'
import Select from 'react-select';



const Sort = ({setOrder}) => {
    
  
    const options = [
        { value: 'title', label: 'Name' },
        { value: 'price', label: 'Price' },
        { value: 'rating', label: 'Stars' },
      ];
      
      // const changeOption = (info)=>{
      //   setSort(info.value)
      // }
      const handleChange = (info) => {
          setOrder( info.value);
      };
  
  return (
    <Select
        placeholder="Sort By:"
        onChange={handleChange}
        options={options}
      />
      
  )
}

export default Sort