'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'

import { store as AppStore } from '.'



export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {


  return <Provider store={AppStore}>{children}</Provider>
}