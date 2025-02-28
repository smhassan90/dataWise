export const getChildrenWidth = (sidebar) => {
    return sidebar
      ? `lg:w-[calc(100vw-22rem)] lg:ml-auto`
      : `lg:w-[calc(100vw-5rem)] lg:ml-auto`;
  };