"use client";

import React from "react";
import Link from "next/link";
import { Button, Card } from "@heroui/react";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background p-4">
      <Card className="max-w-md w-full text-center p-6 shadow-md border border-default-100">
        <Card.Content className="flex flex-col items-center gap-4">
          {/* Header */}
          <h1 className="text-8xl font-black text-primary tracking-wider">
            404
          </h1>

          {/* Content Section */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              Page Doesn&apos;t Exist!
            </h2>
            <p className="text-default-500 text-sm">
              Apni je page-ti khujchhen seta hoyto muche phela hoyeche athoba
              URL-ti bhul chilo.
            </p>
          </div>

          {/* Home Link with Button */}
          <Link href="/">
            <Button
              
              className="mt-4 font-semibold"
            >
              Back to Home
            </Button>
          </Link>
        </Card.Content>
      </Card>
    </div>
  );
};

export default NotFound;
