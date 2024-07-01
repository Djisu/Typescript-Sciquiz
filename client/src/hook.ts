import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Define a type-safe version of useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Define a type-safe version of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;




// import { useDispatch, useSelector } from 'react-redux'
// import type { RootState, AppDispatch } from './store'

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppSelector = useSelector.withTypes<RootState>()


