import { SymbolQQ, SymbolWB, SymbolWX, SymbolWY } from "@/components/Symbol";
import React, { memo } from "react";

export default memo(() => (
  <div className="threes flex justify-between">
    <button type="button" className="three">
      <SymbolWX hover />
    </button>
    <button type="button" className="three">
      <SymbolQQ hover />
    </button>
    <button type="button" className="three">
      <SymbolWB hover />
    </button>
    <button type="button" className="three">
      <SymbolWY hover />
    </button>
  </div>
));
