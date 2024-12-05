export const ROUTES = {
  home: { path: "/", name: "Home" },
  register: { path: "/register", name: "register" },
  login: { path: "/login", name: "login" },
  logout: { path: "/logout", name: "logout" },
  protected: { path: "/protected", name: "protected" },
  unauthorized: { path: "/unauthorized", name: "unauthorized" },
};

export const API_URL = "https://ayga-api-test-1-app.azurewebsites.net/api";

export const AUTHROUTES = [ROUTES.home, ROUTES.logout, ROUTES.protected];

export const GUESTROUTES = [ROUTES.home, ROUTES.register, ROUTES.login];
