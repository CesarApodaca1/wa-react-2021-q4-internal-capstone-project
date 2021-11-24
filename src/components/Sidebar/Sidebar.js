import './Sidebar.css';
import SidebarItem from "../SidebarItem/SidebarItem";
import {results as categories} from "../../utils/mocks/en-us/product-categories.json"

const Sidebar = (props) => {
  return (
    <aside className='sidebar'>
      <h3>Categories</h3>
      <ul className='sidebar-items'>
        {
          categories.map(item => (
            <SidebarItem handleOnClick={() => props.handleOnClick(item.id)} key={item.id} label={item.data.name} />
          ))
        }
      </ul>
    </aside>
  );
}


export default Sidebar;
