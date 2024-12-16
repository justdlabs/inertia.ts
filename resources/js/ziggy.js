const Ziggy = {
  url: 'http:\/\/inertia.ts.test',
  port: null,
  defaults: {},
  routes: {
    'sanctum.csrf-cookie': { uri: 'sanctum\/csrf-cookie', methods: ['GET', 'HEAD'] },
    home: { uri: '\/', methods: ['GET', 'HEAD'] },
    about: { uri: 'about', methods: ['GET', 'HEAD'] },
    dashboard: { uri: 'dashboard', methods: ['GET', 'HEAD'] },
    'profile.edit': { uri: 'profile', methods: ['GET', 'HEAD'] },
    'profile.update': { uri: 'profile', methods: ['PATCH'] },
    'profile.destroy': { uri: 'profile', methods: ['DELETE'] },
    register: { uri: 'register', methods: ['GET', 'HEAD'] },
    login: { uri: 'login', methods: ['GET', 'HEAD'] },
    'password.request': { uri: 'forgot-password', methods: ['GET', 'HEAD'] },
    'password.email': { uri: 'forgot-password', methods: ['POST'] },
    'password.reset': { uri: 'reset-password\/{token}', methods: ['GET', 'HEAD'], parameters: ['token'] },
    'password.store': { uri: 'reset-password', methods: ['POST'] },
    'verification.notice': { uri: 'verify-email', methods: ['GET', 'HEAD'] },
    'verification.verify': { uri: 'verify-email\/{id}\/{hash}', methods: ['GET', 'HEAD'], parameters: ['id', 'hash'] },
    'verification.send': { uri: 'email\/verification-notification', methods: ['POST'] },
    'password.confirm': { uri: 'confirm-password', methods: ['GET', 'HEAD'] },
    'password.update': { uri: 'password', methods: ['PUT'] },
    logout: { uri: 'logout', methods: ['POST'] }
  }
};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
