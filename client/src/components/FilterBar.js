import { Select } from 'semantic-ui-react'

const options = [
    { key: "all", value: "all", text: "All" },
    { key: "completed", value: "completed", text: "Completed" },
    { key: "incomplete", value: "incomplete", text: "Incomplete" },
  ];
  
const FilterBar = ({ onSelect }) => {
  return (
    <div style={{padding: '5%'}}>
      <Select
        onChange={(e, {value}) => onSelect(value)}
        placeholder="Filter By"
        options={options}
      />
    </div>
  );
};

export default FilterBar;
