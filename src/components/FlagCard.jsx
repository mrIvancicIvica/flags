import React from 'react';
import { Card, CardBody, Image, CardFooter } from '@nextui-org/react';

export default function FlagCard({ flagImg, population, region, capital,nameOfCountry }) {
  return (
    <Card radius="sm" isPressable className=" w-72 h-80">
      <CardBody className="overflow-visible p-0">
        <Image
        className='w-72 h-44'
          alt="flag"
          radius="sm"
          src={flagImg}
        />
      </CardBody>
      <CardFooter className="flex-col items-start">
        <h1 className='mb-8'>{nameOfCountry}</h1>
        <p className="text-tiny">Population: {population}</p>
        <p className="text-tiny">Region: {region}</p>
        <p className="text-tiny">Capital: {capital}</p>
      </CardFooter>
    </Card>
  );
}
