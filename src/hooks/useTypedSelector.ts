import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/reduсers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector