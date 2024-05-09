// import { Sidebar, Menu, MenuItem, SubMenu, menuClasses, MenuItemStyles } from '../src';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Appcontext } from '../Context/Appcontext';
export default function Sidemenu(){
    const [sidebar, togglesidebar]=useContext(Appcontext);
    const themes = {
        light: {
          sidebar: {
            backgroundColor: '#ffffff',
            color: '#607489',
          },
          menu: {
            menuContent: '#fbfcfd',
            icon: '#0098e5',
            hover: {
              backgroundColor: '#c5e4ff',
              color: '#44596e',
            },
            disabled: {
              color: '#9fb6cf',
            },
          },
        },
        dark: {
          sidebar: {
            backgroundColor: '#0b2948',
            color: '#8ba1b7',
          },
          menu: {
            menuContent: '#082440',
            icon: '#59d0ff',
            hover: {
              backgroundColor: '#00458b',
              color: '#b6c8d9',
            },
            disabled: {
              color: '#3e5e7e',
            },
          },
        },
      };
      
  return (

    <Sidebar
        collapsed={sidebar}
        onBackdropClick={() => togglesidebar(false)}
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        breakPoint="md"
        backgroundColor="red"
        rootStyles={{
          color: "blue",
        }}
      >
      hi
      </Sidebar>
  )
};
