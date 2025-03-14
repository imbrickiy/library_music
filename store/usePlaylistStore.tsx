import { create } from "zustand";
import { Station, Stations } from "@/interfaces/stations";
interface StationState {
  data: Stations
  loading: boolean
  error: string | null
  // getStations: () => Promise<void>
}
// Create the store
const usePlaylistStore = create<StationState>((set, get) => ({
  data: require("@/assets/data/stations.json"),
  loading: false,
  error: null
  // getStations: async () => {
  //   set({ loading: true })
  //   try {
  //     const response = await fetch(require("@/assets/data/stations.json"))
  //     const data = await response.json()
  //     set({stations: data.stations.stations, loading: false})
  //   } catch (error) {
  //     set({ error: 'Failed to fetch users', loading: false });
  //   }
  // }
  
}));

export default usePlaylistStore;
