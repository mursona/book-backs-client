import React from 'react';
import { Chip } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

const BookSummaryCard = ({book}) => {

    const {condition, description, location, mobile_no, name, original_price, picture, post_time, resale_price, seller_name, year_of_purchase, year_of_use} = book
    return (
        <Card className="w-75">
        <CardHeader color="blue" className="relative h-56">
          <img
            src={picture}
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {name}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">${resale_price}</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            {location}
          </Typography>
          <Chip color="pink" value="Book now" />
        </CardFooter>
      </Card>
    );
};

export default BookSummaryCard;