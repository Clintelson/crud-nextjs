import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import React from 'react'
import { Button } from "./ui/button";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    children: React.ReactNode;
    href: string;
    label: string;
}

const CardWrapper = ({ title, description, children, href, label }: CardProps) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle className="text-2xl text-center">{title}</CardTitle>
            <CardDescription className="text-center pb-2">{description}</CardDescription>
        </CardHeader>
        <CardContent>
            <p>{children}</p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="w-full font-extralight" asChild>   
            <Link href={href}>
                {label}
            </Link>
          </Button>
        </CardFooter>
    </Card>
  )
}

export { CardWrapper }
