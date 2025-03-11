"use client";
import { useTransitionContext } from "@/context/TransitionalContext";
import useCustomRouter from "@/lib/hooks/useCustomRouter";
import React from "react";

interface IFilterData {
  name: string;
  data: { name: string }[];
}
interface IFilter {
  data: IFilterData[];
}

const Filter = ({ data }: IFilter) => {
  const { currentParams, pathname } = useCustomRouter();
  const { navTo } = useTransitionContext();
  const family = currentParams.getAll("family");

  const updateFilter = (
    e: React.ChangeEvent<HTMLInputElement>,
    filter: string
  ) => {
    if (!family.includes(filter) && e.target.checked) {
      currentParams.append("family", encodeURIComponent(filter.toLowerCase()));
    } else if (!e.target.checked) {
      currentParams.delete("family", encodeURIComponent(filter.toLowerCase()));
    }
    currentParams.set("page", "1");
    const path = `${pathname}?${currentParams.toString()}`;
    navTo(path);
  };

  return (
    <div className="col-span-1 shadow-xl rounded-md px-2 font-semibold">
      {data.map((filter, i) => (
        <div className="mb-2" key={i}>
          {filter && (
            <>
              <h1 className="text-lg font-semibold">{filter.name}</h1>
              {filter.data &&
                filter.data.map((filter) => (
                  <div
                    className="flex gap-2 hover:shadow-md hover:scale-110 duration-300"
                    key={filter.name}
                  >
                    <input
                      id={filter.name}
                      checked={
                        family.includes(encodeURI(filter.name.toLowerCase())) ||
                        false
                      }
                      type="checkbox"
                      onChange={(e) => updateFilter(e, filter.name)}
                      className="hover:cursor-pointer"
                    />
                    <label
                      htmlFor={filter.name}
                      className="py-2 hover:cursor-pointer font-normal"
                    >
                      {filter.name}
                    </label>
                  </div>
                ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
