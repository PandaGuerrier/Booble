import React, { useEffect } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu, NavbarMenuItem, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, Dropdown
} from '@nextui-org/react'
import api from '@/services/api'
import AuthModal from '@/app/components/auth/AuthModal'
// @ts-ignore
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [linkEnable, setLinkEnabled] = React.useState(10)

  const menuItems = [
    {
      name: "Définition",
      link: "/",
    },
    {
      name: "Notre projet",
      link: "/",
    },
    {
      name: "FAQ",
      link: "/",
    },
  ]

  return (
      <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className={"fixed"}>
        <NavbarContent>
          <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">BOOBLE</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Définition
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Notre projet
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              FAQ
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <AuthModal />
        </NavbarContent>
        <NavbarMenu className={"flex-row justify-center text-center w-full items-center"}>
          <div className={"items-center w-full space-y-5"}>
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link

                      className="w-full"
                      href={item.link}
                      onClick={() => {
                        setLinkEnabled(index)
                      }}
                  >
                    <Button color={
                      index === linkEnable ? "primary" : "default"
                    }
                                                  fullWidth>{item.name}</Button>
                  </Link>
                </NavbarMenuItem>
            ))}
          </div>

        </NavbarMenu>
      </Navbar>
  )
}

//                       item.link == router.pathname ? "primary" : "foreground"