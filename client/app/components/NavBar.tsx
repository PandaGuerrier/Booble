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
export default function NavBar({ user, setUser }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [linkEnable, setLinkEnabled] = React.useState(0)

  async function signOut() {
    await api.delete('/auth/logout')
    setUser({} as any)
  }

  return (
      <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="fixed dark:bg-slate-900">
        <NavbarContent>
          <NavbarBrand>
            <p className="font-bold text-inherit">BOOBLE</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          {user.isConnected ?
          <>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="primary"
                    size="sm"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="faded">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user.user.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">Paramètres</DropdownItem>
                <DropdownItem key="dashboard">Dashboard admin</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={signOut}>
                  Déconnexion
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </> :
          <>
            <AuthModal user={user} setUser={setUser} selectedStr="login" />
          </>
          }
        </NavbarContent>
      </Navbar>
  );
}

//                       item.link == router.pathname ? "primary" : "foreground"