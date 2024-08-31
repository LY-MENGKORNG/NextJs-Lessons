'use client'
import AddToCartBtn from '@/components/client/AddToCartBtn'
import ProductList from '@/components/server/ProductList'
import React from 'react'

const ProductPage = () => {
  return (
    <div>
      <ProductList />
      <AddToCartBtn />
    </div>
  )
}

export default ProductPage