import './SidebarItem.css';
import {useState} from "react";

const SidebarItem = ({label, handleOnClick}) => {
  const [state, setState] = useState('inactive');

  const toggleState = () => {
      setState(state === 'inactive' ? 'active' : 'inactive');
  };
  return(
    <li className={state} onClick={() => {handleOnClick(); toggleState();}}>{label}</li>
  )
}

export default SidebarItem;
