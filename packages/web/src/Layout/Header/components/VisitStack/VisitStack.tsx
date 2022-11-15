import React, { memo } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
import { useNavigate } from "react-router-dom";

const VisitStack = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className={
          "bg-black bg-opacity-5 w-6 h-6 rounded-full flex-center text-white z-10"
        }
      >
        <IconChevronLeft size={16} />
      </button>
      <button
        type="button"
        onClick={() => navigate(1)}
        className={
          "bg-black bg-opacity-5 w-6 h-6 rounded-full flex-center text-white z-10"
        }
      >
        <IconChevronRight size={16} />
      </button>
    </div>
  );
};

export default memo(VisitStack);
