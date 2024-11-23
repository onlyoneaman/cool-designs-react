import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card.tsx";
import { Link } from "react-router-dom";
import {Button} from "@/components/ui/button.js";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const DesignCard: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <Link to={link}>
      <Card className="hover:shadow-lg transition border border-gray-200">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            variant='link'
          >
            View Page →
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default DesignCard;
