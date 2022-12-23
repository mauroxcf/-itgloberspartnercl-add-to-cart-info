import React from 'react'

const ProductGroup = (products: any) => {
  return (
    <div>
      {products?.map((item:any, index:number)=> {
        <div key={index}>
          <div>
            <img src={item.imageUrls.at1x} />
          </div>
          <div>
            <p>{item.name}</p>
            <p>{item.id}</p>
            <p>${item.price / 100}</p>
            <p>Cant: {item.quantity}</p>
          </div>
        </div>
      })
      }
    </div>
  )
}

export default ProductGroup