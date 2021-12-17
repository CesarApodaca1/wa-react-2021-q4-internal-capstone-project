import './SidebarItem.css';
import {useState} from "react";

const SidebarItem = ({label, handleOnClick}) => {
  const [state, setState] = useState('inactive');
  
  const toggleState = () => {
      setState(state === 'inactive' ? 'active' : 'inactive');
  };
  
   function handleItemClick() {
      handleOnClick()
      toggleState()
  }
  return(
    <li className={state} onClick={handleItemClick}>{label}</li>
  )
}

export default SidebarItem;
