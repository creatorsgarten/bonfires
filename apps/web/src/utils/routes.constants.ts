export const routes = {
  login: '/login',
  register: '/register',
  duty: (eventId: string | null) => `/event/${eventId}/duty`,
  runner: (eventId: string | null) => `/event/${eventId}/runner`,
}
