import React, { memo } from "react";

export default memo(({ children }) => (
  <button type="submit" className="submit">
    {children}
  </button>
));
