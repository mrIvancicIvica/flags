import { Button, Navbar, NavbarBrand, NavbarItem } from '@nextui-org/react';
import { MoonIcon } from '../assets/MoonIcon';
import { SunIcon } from '../assets/SunIcon';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../redux/DarkModeSlice';

const Appbar = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  return (
    <Navbar maxWidth="full" className="2xl:px-40 pt-5 pb-5 shadow-sm mb-10">
      <NavbarBrand>
        <h1 className="text-3xl font-bold">Where in the world?</h1>
      </NavbarBrand>
      <NavbarItem>
        <Button
          onClick={() => dispatch(toggleDarkMode())}
          variant="light"
          radius="sm"
          startContent={darkMode ? <SunIcon /> : <MoonIcon />}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </NavbarItem>
    </Navbar>
  );
};
export default Appbar;
