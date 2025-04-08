// landing routes
export const featuresRoute = '/features';
export const contactRoute = '/contact';

export const publicRoutes = ['/'];

export const authRoutes = ['/auth/login', '/auth/signup'];

export const apiAuthPrefix = '/api/auth';

export const adminPrefix = '/admin';

export const loginRoute = '/auth/login';
export const signupRoute = '/auth/signup';

export const redirectUnauthorizedUser = loginRoute;

export const geistRoute = '/geist/introduction';

// dashboard routes
export const dashboardRoute = '/dashboard';
export const DEFAULT_LOGIN_REDIRECT = dashboardRoute;

export const sessionsRoute = '/dashboard/account/sessions';
export const notificationsRoute = '/dashboard/account/notifications';
export const accountSettingsRoute = '/dashboard/account';
export const membershipRoute = '/dashboard/account/membership';
export const projectSettingsRoute = (slug: string) =>
  `/dashboard/projects/${slug}/settings`;
export const inviteMembersRoute = (slug: string) =>
  `/dashboard/projects/${slug}/invite`;
