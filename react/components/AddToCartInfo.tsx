import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'
/* import ProductGroup from './ProductGroup' */

const AddToCartInfo = ({blockClass}: {blockClass: string}) => {
  const containerClasses = generateBlockClass(styles.container, blockClass)
  const productInfo = useProduct()
  const { orderForm: { items, totalizers} } = useOrderForm()
  console.log(productInfo)
  console.log(items)
  return (
    <div className={containerClasses}>
      {items.map((item:any, index:number)=> {
        return (
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
        )
        })}
      <div>
        <p>Tenemos {items.length} items en tu compra</p>
        <p>Total: ${totalizers[0]? totalizers[0]?.value / 100 : "0"}</p>
      </div>
    </div>
  )
}

export default AddToCartInfo
