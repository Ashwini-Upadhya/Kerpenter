import React, { useState, useEffect } from "react";

export default function Menu() {
  const menuItems = ['Advantages', 'Functions', 'Prices', 'Demo', 'Contact Us', 'Partners'];
  const [visibleItems, setVisibleItems] = useState(menuItems);
  const [collapsedItems, setCollapsedItems] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set to true if the window width is less than 600px, you can adjust this value
      if (window.innerWidth < 600) {
        setIsMobileView(true);
        collapseMenuItems();
      } else {
        setIsMobileView(false);
        resetMenuItems();
      }
    };

    // Listen for window resize
    window.addEventListener("resize", handleResize);
    
    // Trigger resize on component mount
    handleResize();

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Collapse all items except the first 3 (adjust this number as per your needs)
  const collapseMenuItems = () => {
    setVisibleItems(menuItems.slice(0, 3));
    setCollapsedItems(menuItems.slice(3));
  };

  // Reset the menu to show all items
  const resetMenuItems = () => {
    setVisibleItems(menuItems);
    setCollapsedItems([]);
  };

  return (
    <div>
      <span className="menu">
        {visibleItems.map((item) => (
          <p key={item}>{item}</p>
        ))}

        {/* Show "More" option only if some items are collapsed */}
        {collapsedItems.length > 0 && (
          <div className="more-menu">
            <p>More</p>
            <ul className="more-dropdown">
              {collapsedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        <button className="getStarted">Get Started</button>
      </span>
    </div>
  );
}
