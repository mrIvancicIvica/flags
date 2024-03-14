import { useEffect, useState } from 'react';
import FlagCard from './FlagCard';
import { useGetAllFlagsQuery, useGetRegionQuery } from '../redux/FlagsApiSlice';
import { Link } from 'react-router-dom';
import SearchCountry from './SearchCountry';
import FilterRegion from './FilterRegion';
import { useSelector } from 'react-redux';

const Flags = () => {
  const filter = useSelector((state) => state.filterRegion.searchMode);
  const searchTerm = useSelector((state) => state.filterRegion.searchTerm);

  const { data: flags } = useGetAllFlagsQuery();
  const { data: region } = useGetRegionQuery(filter);

  const [regionData, setRegionData] = useState(null);
  console.log('🚀 ~ Flags ~ regionData:', regionData);

  useEffect(() => {
    const filteredData = regionData?.filter((flag) =>
      flag.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRegionData(filteredData);
  }, [searchTerm]);

  useEffect(() => {
    if (filter) {
      setRegionData(region);
    } else {
      setRegionData(flags);
    }
  }, [filter, flags, region]);

  return (
    <div>
      <div className="flex items-center justify-between mx-24 mb-10 max-sm:flex-col max-md:items-start max-md:flex-col">
        <SearchCountry />
        <FilterRegion />
      </div>
      <div className="flex flex-wrap justify-center gap-20">
        {regionData?.map((flag, index) => (
          <Link to={`/name/${flag.name.common}`} key={index}>
            <FlagCard
              nameOfCountry={flag.name.common}
              flagImg={flag.flags.png}
              population={flag.population}
              region={flag.region}
              capital={flag.capital}
              key={index}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Flags;
