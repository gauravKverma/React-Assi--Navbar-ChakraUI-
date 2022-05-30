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

const Menu2 = () => {
    const {isOpen,onOpen,onClose} =useDisclosure();
  return (
    <Menu isOpen={isOpen}>
        <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose} marginLeft="20px">Find Work</MenuButton>
        <Portal>
            <MenuList style={{marginTop:"-10px"}} onMouseEnter={onOpen} onMouseLeave={onClose} padding="20px">
            <MenuItem _hover={{backgroundColor:"rgb(246, 228, 234)"}}>Job Board <br />Find your dream Design Job</MenuItem>
            <MenuItem _hover={{backgroundColor:"rgb(246, 228, 234)"}}>Freelance Projects <br />An exclusive list for contract work</MenuItem>
            </MenuList>
        </Portal>
    </Menu>
  )
}

export default Menu2