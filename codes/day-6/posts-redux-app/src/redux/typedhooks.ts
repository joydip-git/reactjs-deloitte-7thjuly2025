import { useDispatch, useSelector } from "react-redux";
import { type AppDispatchType, type AppStateType } from "./store";

//Creates a "pre-typed" version of useSelector where the state type is predefined.
export const useAppStateSelector = useSelector.withTypes<AppStateType>()
export const useAppStoreDispatch = useDispatch.withTypes<AppDispatchType>()