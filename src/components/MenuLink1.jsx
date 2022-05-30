import React from 'react'
import {Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Portal,
    // isOpen,
    // onClose,
    // onOpen,
    useDisclosure
} from "@chakra-ui/react"

const Menu1 = () => {
    const {isOpen,onOpen,onClose} =useDisclosure();
  return (
    <Menu isOpen={isOpen}>
        <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>Inspiration</MenuButton>
        <Portal>
            <MenuList style={{marginTop:"-10px"}} onMouseEnter={onOpen} onMouseLeave={onClose} padding="20px" >
            <MenuItem _hover={{backgroundColor:"rgb(246, 228, 234)"}}>Explore Design Work <br />Trending Design to inspire you</MenuItem>
            <MenuItem _hover={{backgroundColor:"rgb(246, 228, 234)"}}>{"New & Note Worthy"} <br />Up-and-coming Designers</MenuItem>
            </MenuList>
        </Portal>
    </Menu>
  )
}

export default Menu1