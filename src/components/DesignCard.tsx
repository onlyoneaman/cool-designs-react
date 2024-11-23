import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card.tsx";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const DesignCard: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <Card className="hover:shadow-lg transition border border-gray-200">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link
          to={link}
          className="text-blue-500 hover:text-blue-700 text-sm font-medium"
        >
          View Page →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DesignCard;
