import './App.css';
import Logo from "./components/Logo"
import Menu1 from "./components/MenuLink1"
import Menu2 from './components/MenuLink2';
import {Button} from "@chakra-ui/react"
function App() {
  return (
    <div className="App">
      <div>
        <Logo/>
      </div>
      <div className='menudiv'>
        <div className='menulink'>
          <Menu1/>
          <Menu2/>
          <Button backgroundColor="white" fontWeight="normal" _hover="none">Learn Design</Button>
          <Button backgroundColor="white" fontWeight="normal" _hover="none">Hire Designers</Button>
        </div>
        <div className='buttondiv'>
          <Button colorScheme='black' variant='link' fontWeight="light" fontSize="14px">
            Sign In
          </Button>
          <Button colorScheme='rgb(253, 207, 215)' variant='solid' backgroundColor="rgb(224, 109, 153)">
            Sign Up
          </Button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
