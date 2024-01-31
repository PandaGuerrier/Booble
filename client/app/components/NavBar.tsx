import React from 'react'
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
import AuthModal from '@/app/components/auth/AuthModal'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [linkEnable, setLinkEnabled] = React.useState(10)

  const menuItems = [
    {
      name: "Définition",
      link: "#def",
    },
    {
      name: "Notre projet",
      link: "#pres",
    },
    {
      name: "FAQ",
      link: "#faq",
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
            <a href={"#"} className="font-bold text-inherit">BOOBLE</a>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                    className="w-full"
                    href={item.link}
                    onClick={() => {
                      setLinkEnabled(index)
                    }}
                    color={
                      index === linkEnable ? "primary" : "foreground"
                    }
                >
                          {item.name}
                </Link>
              </NavbarMenuItem>
          ))}
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