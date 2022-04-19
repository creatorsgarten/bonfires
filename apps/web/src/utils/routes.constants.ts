export const routes = {
  duty: (eventId: string | null) => `/event/${eventId}`,
  runner: (eventId: string | null) => `/event/${eventId}/runner`,
}
