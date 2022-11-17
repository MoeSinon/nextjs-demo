import { RootState } from "@/store/store"

export const getDottedLineSquareMap = (state: RootState) => {
  return state.currentApp.editor.dottedLineSquare
}
