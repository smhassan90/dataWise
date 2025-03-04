export const getChildrenWidth = (sidebar) => {
    return sidebar
      ? `lg:w-[calc(100vw-17.5rem-12px)] lg:ml-auto`
      : `lg:w-[calc(100vw-4.8rem-12px)] lg:ml-auto`;
  };