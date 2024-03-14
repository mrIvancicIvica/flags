import { useForm } from 'react-hook-form';
import { setSearchTerm } from '../redux/SearchModeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@nextui-org/react';

const SearchCountry = () => {
  const { register, handleSubmit, watch } = useForm();

  const searchTerm = useSelector((state) => state.filterRegion.searchTerm);

  const dispatch = useDispatch();

  const onSubmitForm = (data) => {
    dispatch(setSearchTerm(data.country));
  };

  return (
    <form className="w-96" onSubmit={handleSubmit(onSubmitForm)}>
      <Input type="text" {...register('country')} />
    </form>
  );
};
export default SearchCountry;
