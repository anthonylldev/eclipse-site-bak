import type {ClubEventToList} from '../models';

const API_URL = import.meta.env.PUBLIC_API_URL;

export async function getUpcomingEvents(): Promise<ClubEventToList[]> {
  try {
    const res = await fetch(`${API_URL}/club-events/upcoming`);

    if (!res.ok) {
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch club events:", error);
    return [];
  }
}
