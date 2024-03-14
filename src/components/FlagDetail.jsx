import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react';
import { useGetDetailsQuery } from '../redux/FlagsApiSlice';
import { Link, useParams } from 'react-router-dom';
import { BackIcon } from '../assets/BackIcon';
const FlagDetail = () => {
  const { name } = useParams();
  const { data } = useGetDetailsQuery(name);

  return (
    <div className="container mx-auto">
      <div className='max-xl:ml-80 max-lg:ml-[190px] max-md:ml-32'>
        <Link to={'/'}>
          <Button radius="sm" className="px-9" startContent={<BackIcon />}>
            Back
          </Button>
        </Link>
      </div>
      {data?.map((flag, index) => (
        <div key={index} className="mt-20">
          <div className=" flex max-xl:flex-col">
            <div>
              <img
                className="h-96 w-3/7 max-xl:w-[400px] mx-auto mb-10"
                src={flag.flags.svg}
                alt={flag.name.common}
              />
            </div>

            <div className="mx-auto">
              <Card className="flex min-w-[400px] min-h-[385px]">
                <CardHeader>
                  <h1 className="text-3xl">{flag.name.common}</h1>
                </CardHeader>
                <Divider />
                <CardBody className='pl-6 mt-12'>
                  <p>Nativ name:{flag.name.official}</p>
                  <p>Populatiion: {flag.population}</p>
                  <p>Region: {flag.region}</p>
                  <p>Sub Region: {flag.subregion}</p>
                  <p>Capital: {flag.capital}</p>
                </CardBody>

                <CardFooter className='gap-5'>
                  <h1>Top Level Domain: {flag.tld}</h1>
                  <h1>Curencies: {flag.name.currencies} </h1>
                  <h1>Languages</h1>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FlagDetail;
