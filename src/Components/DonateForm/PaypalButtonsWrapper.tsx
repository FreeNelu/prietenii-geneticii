/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react'
import {
  PayPalButtons,
  usePayPalScriptReducer
} from '@paypal/react-paypal-js'

interface PayPalButtonsWrapperProps {
  currency: string
  amount: string
}

const PayPalButtonsWrapper = ({ currency, amount }: PayPalButtonsWrapperProps) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer()

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency
      }
    })
  }, [currency])

  return (<PayPalButtons
        style={{ layout: 'vertical', label: 'donate' }}
        createOrder={async (_data, actions) => {
          return await actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                    breakdown: {
                      item_total: {
                        currency_code: currency,
                        value: amount
                      }
                    }
                  },
                  items: [
                    {
                      name: 'donation-example',
                      quantity: '1',
                      unit_amount: {
                        currency_code: currency,
                        value: amount
                      },
                      category: 'DONATION'
                    }
                  ]
                }
              ]
            })
            .then((orderId) => {
              // after creating the donation
              return orderId
            })
        }}
        onApprove={async (data, actions) => {
          await actions?.order?.capture().then((details) => {
            const name = details?.payer?.name?.given_name
            alert(`Transaction completed by ${name ?? ''}`)
          })
        }}
    />
  )
}

export default PayPalButtonsWrapper