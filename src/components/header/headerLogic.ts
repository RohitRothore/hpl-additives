import { useState } from 'react';

import preventBodyScroll from '@/utils/preventBodyScrollHelper';

interface HeaderLogicReturn {
  handleSidebarToggle: () => void;
  navbarOpen: boolean;
  handleInnerMenu: () => void;
  handleSidebarClose: () => void;
  innerMenuOpen: boolean;
}

function useHeaderLogic(): HeaderLogicReturn {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [innerMenuOpen, setInnerMenuOpen] = useState<boolean>(true);

  const handleInnerMenu = () => {
    setInnerMenuOpen((prev) => !prev);
  };

  const handleSidebarToggle = () => {
    preventBodyScroll(!navbarOpen);
    setNavbarOpen(!navbarOpen);
    setInnerMenuOpen(false);
  };

  const handleSidebarClose = () => {
    setNavbarOpen(false);
    setInnerMenuOpen(true);
    preventBodyScroll(false);
  };

  return {
    handleSidebarToggle,
    handleSidebarClose,
    navbarOpen,
    innerMenuOpen,
    handleInnerMenu,
  };
}

export default useHeaderLogic;
