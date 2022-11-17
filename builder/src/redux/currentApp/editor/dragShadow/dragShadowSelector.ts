import { RootState } from "@/store/store"

export const getDragShadowMap = (state: RootState) => {
  return state.currentApp.editor.dragShadow
}
