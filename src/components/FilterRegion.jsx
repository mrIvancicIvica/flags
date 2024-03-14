import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import { useSelector, useDispatch } from 'react-redux';
import { filterRegion } from '../redux/SearchModeSlice'; 

export default function FilterRegion({ reg }) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const dispatch = useDispatch();

  return (
    <Dropdown
      className={`${
        darkMode ? 'dark' : 'light'
      } text-foreground bg-background mx-md-10`}
    >
      <DropdownTrigger>
        <Button className='max-md:mt-2' variant="flat">Filter by Region</Button>
      </DropdownTrigger>
      <DropdownMenu
        onAction={(key) => dispatch(filterRegion(key))}
        aria-label="Static Actions"
      >
        <DropdownItem key="africa">Africa</DropdownItem>
        <DropdownItem key="america">America</DropdownItem>
        <DropdownItem key="asia">Asia</DropdownItem>
        <DropdownItem key="europe">Europe</DropdownItem>
        <DropdownItem key="oceania">Oceania</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
