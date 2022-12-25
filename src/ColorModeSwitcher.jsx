import React from 'react'
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ColorModeSwitcher = (props) => {
const { toggleColorMode } = useColorMode('dark', 'light');
const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton variant={'ghost'} color={'current'} pos="fixed" top={'4'} right={'4'} zIndex={'overlay'} onClick={toggleColorMode} icon={SwitchIcon} {...props} />
  )
}

export default ColorModeSwitcher