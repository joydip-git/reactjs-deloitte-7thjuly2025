import { useDispatch, useSelector } from "react-redux";
import { type AppStoreDispatchType, type AppStateType } from "./store";

export const useAppSelector = useSelector.withTypes<AppStateType>()
export const useAppDispatch = useDispatch.withTypes<AppStoreDispatchType>()