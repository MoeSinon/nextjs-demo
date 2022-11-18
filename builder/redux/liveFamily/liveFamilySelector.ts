import { RootState } from "@/store/store"

export const getOthersPresence = (state: RootState) => {
  return state.liveFamily.others
}
