'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'

import { store as AppStore } from '.'



export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<typeof AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = AppStore
  }
  
  return <Provider store={storeRef.current}>{children}</Provider>
}