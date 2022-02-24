import React, { FC, memo, useCallback, useEffect, useState } from "react";
import Select from "../Select";
import provinces from "./provinces";

interface iProps {
  city: number;
  province: number;
  handleEdit: (name: string, value: any) => void;
}

const Location: FC<iProps> = ({ city, province, handleEdit }) => {
  const [cities, setCities] = useState<{ [key: string]: string }>(() => {
    return provinces.find(({ id }) => id === province)?.cities || {};
  });
  const handleProvinceChange = useCallback(({ target }) => {
    const [selectedOption] = target.selectedOptions;
    handleEdit("province", Number(target.value));
    setCities(JSON.parse(selectedOption.dataset.cities));
  }, []);

  const handleCityChange = useCallback(({ target }) => {
    handleEdit("city", Number(target.value));
  }, []);

  return (
    <div className={`grid gap-2 grid-cols-3`}>
      <Select value={province} onChange={handleProvinceChange}>
        {provinces.map(({ id, name, cities }) => (
          <option value={id} key={id} data-cities={JSON.stringify(cities)}>
            {name}
          </option>
        ))}
      </Select>
      <Select value={city} onChange={handleCityChange}>
        {Object.entries(cities).map(([code, city]) => (
          <option value={code} key={code}>
            {city}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default memo(Location);
