export const routerConfig = {
  dashboard: "/dashboard",
  dashboardapps: "/dashboard/apps",
  dashboardresources: "/dashboard/resources",
  login: "/user",
  userlogin: "/user/login",
  userregister: "/user/register",
  userforgotPassword: "/user/forgotPassword",
  Page403: (appId: string) => {
    // if (asPath) {
    //   return `/products/${encodeURIComponent(slug)}?type=${asPath}`;  
    // }
    return `/app/${encodeURIComponent(appId)}`;
  },
  setting: "/setting",
  account: "/account",
  settingaccount: "/setting/account",
  settingpassword: "/setting/password",
  settingothers: "/setting/others",
  deploy: (appId: string, versionId: string) => `/deploy/app/${encodeURIComponent(appId)}/version/${encodeURIComponent(versionId)}`,
  deploypageName: (appId: string, versionId: string, pageName: string) => `/deploy/app/${encodeURIComponent(appId)}/version/${encodeURIComponent(versionId)}/${encodeURIComponent(pageName)}`,
  deployviewPath: (appId: string, versionId: string, pageName: string, viewPath: string) => `/deploy/app/${encodeURIComponent(appId)}/version/${encodeURIComponent(versionId)}/${encodeURIComponent(pageName)}/${encodeURIComponent(viewPath)}`,
  page403: "/status/403",
  page500: "/status/500",
  page404: "/status/404"
}

