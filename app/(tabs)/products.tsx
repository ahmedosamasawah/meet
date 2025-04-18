import React from "react";

import FilterButton from "@/components/common/FilterButton";
import ScreenContainer from "@/components/layouts/ScreenContainer";
import { default as OurProducts } from "@/components/features/products/Products";

export default function Products() {
  return (
    <ScreenContainer title="منتجاتنا">
      <OurProducts />
      <FilterButton />
    </ScreenContainer>
  );
}
