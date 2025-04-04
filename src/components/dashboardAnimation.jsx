import { css } from "styled-jsx/css"

export const dashboardAnimations = css`
  /* Page load animation */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  /* Tab swipe animations - fixed to prevent scrollbar */
  @keyframes slideOutLeft {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(-10%); opacity: 0; }
  }
  
  @keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(10%); opacity: 0; }
  }
  
  @keyframes slideInLeft {
    from { transform: translateX(10%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideInRight {
    from { transform: translateX(-10%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-in-out forwards;
  }
  
  .animate-slideOutLeft {
    animation: slideOutLeft 0.3s ease-in-out forwards;
  }
  
  .animate-slideOutRight {
    animation: slideOutRight 0.3s ease-in-out forwards;
  }
  
  .animate-slideInLeft {
    animation: slideInLeft 0.3s ease-in-out forwards;
  }
  
  .animate-slideInRight {
    animation: slideInRight 0.3s ease-in-out forwards;
  }
  
  /* Fix for scrollbar issue */
  .tab-content-wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  
  /* Ensure body doesn't show scrollbar during animations */
  :global(body) {
    overflow-x: hidden;
  }
`