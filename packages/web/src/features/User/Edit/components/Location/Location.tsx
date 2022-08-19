import React, {
  ChangeEventHandler,
  FC,
  memo,
  useCallback,
  useMemo,
} from "react";
import Select from "../Select";
import provinces from "./provinces";
import { EditHandler } from "../../types";

interface iProps {
  city: number;
  province: number;
  handleEdit: EditHandler;
}

const Location: FC<iProps> = ({ city, province, handleEdit }) => {
  const cities = useMemo(() => {
    return provinces.find(({ id }) => id === province)?.cities || {};
  }, [province]);
  const handleProvinceChange: ChangeEventHandler<HTMLSelectElement> =
    useCallback(({ target }) => {
      handleEdit("province", Number(target.value));
    }, []);

  const handleCityChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    ({ target }) => {
      handleEdit("city", Number(target.value));
    },
    []
  );

  return (
    <div className={`grid gap-2 grid-cols-3`}>
      <Select value={province} onChange={handleProvinceChange}>
        {provinces.map(({ id, name }) => (
          <option value={id} key={id}>
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
