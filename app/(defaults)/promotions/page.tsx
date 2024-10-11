import { Metadata } from "next";
import React from "react";
import PromotionsView from "./_components/promotions-view";

export const metadata: Metadata = {
  title: "Promotions",
};

const Promotions = () => {
  return <PromotionsView />;
};

export default Promotions;
