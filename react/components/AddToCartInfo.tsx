import React from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'


const AddToCartInfo = ({blockClass}: {blockClass: string}) => {
  const container = generateBlockClass(styles.container, blockClass)
  const productGroup = generateBlockClass(styles.productGroup, blockClass)
  const itemProduct = generateBlockClass(styles.itemProduct, blockClass)
  const itemImageContainer = generateBlockClass(styles.itemImageContainer, blockClass)
  const itemImage = generateBlockClass(styles.itemImage, blockClass)
  const ordenSummary = generateBlockClass(styles.ordenSummary, blockClass)
  const { orderForm: { items, totalizers} } = useOrderForm()
  return (
    <div className={container}>
      <div className={`${productGroup} flex `}>
        {items.map((item:any, index:number)=> {
          return (
            <div className={`${itemProduct} w-100`} key={index}>
              <div className={`${itemImageContainer} flex justify-center`}>
                <img className={`${itemImage}`} src={item.imageUrls.at1x} />
              </div>
              <div>
                <p className="tc white">{item.name}</p>
                <p className="tc white">{item.id}</p>
                <p className="tc white">${item.price / 100}</p>
                <p className="tc white">Cant: {item.quantity}</p>
              </div>
            </div>
          )
          })}
      </div>
      <div className={ordenSummary}>
        <p className="tc white">Tenemos {items.length} items en tu compra</p>
        <p className="tc white">Total: ${totalizers[0]? totalizers[0]?.value / 100 : "0"}</p>
      </div>
    </div>
  )
}

export default AddToCartInfo
