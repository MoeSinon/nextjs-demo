import { RootState } from "@/store/store"

export const getDashboardApps = (state: RootState) => {
  return state.dashboard.dashboardApps.list
}
