export const getChildrenWidth = (sidebar) => {
    return sidebar
      ? `lg:w-[calc(100vw-17.5rem)] lg:ml-auto`
      : `lg:w-[calc(100vw-4.8rem)] lg:ml-auto`;
  };