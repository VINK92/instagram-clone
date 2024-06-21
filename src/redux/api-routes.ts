export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const AUTHORIZATION_URL = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`;

export const API_ROUTES = {
  private: {
    TRANSACTIONS: '/transactions',
    TRANSACTION: '/transactions/:transactionId',
    WALLETS: '/wallets',
    WALLET: '/wallets/:walletId',
    WALLET_ASSETS: '/wallets/:walletId/assets',
    WALLET_TOKENS: '/wallets/:walletId/tokens',
    WALLET_TOKEN: '/wallets/:walletId/tokens/:tokenId',
    USERS_ME: '/users/me',
    USERS: '/users',
    USER_DETAILS: '/users/:userId',
    USER_ROLE_TEMPLATES: '/users/role-templates',
    PERSONAL_IDENTITIES: '/personal-identities',
    PERSONAL_IDENTITY: '/personal-identities/:identityId',
    PERSONAL_IDENTITY_DOCUMENTS: '/personal-identities/:identityId/documents',
    BUSINESS_IDENTITIES: '/business-identities',
    BUSINESS_IDENTITY: '/business-identities/:identityId',
    BUSINESS_IDENTITY_DOCUMENTS: '/business-identities/:identityId/documents',
    BUSINESS_IDENTITY_BENEFICIAL_OWNERS: '/business-identities/:identityId/beneficial-owners',
    CUSTODIAL_ACCOUNTS: '/custodial-accounts',
    CUSTODIAL_ACCOUNT: '/custodial-accounts/:custodialAccountId',
    CUSTODIAL_ACCOUNT_BALANCES: '/custodial-accounts/:custodialAccountId/balances',
    CUSTODIAL_ACCOUNT_CUSTOM_ASSET_BALANCES: '/custodial-accounts/:custodialAccountId/custom-asset-balances',
    CUSTODIAL_ACCOUNT_BENEFICIARIES: '/custodial-accounts/:custodialAccountId/beneficiaries',
    CUSTODIAL_ACCOUNT_JWT: '/custodial-accounts/:custodialAccountId/jwt/:elementType',
    INITIALIZED_PAYMENT: '/payments/:paymentId/initialized',
    APPROVE_PAYMENT: '/payments/:paymentId/approve',
    REJECT_PAYMENT: '/payments/:paymentId/reject',
    RESET_PASSWORD: '/users/:userId/reset-password',
    CLOSE_JWT: '/users/close-jwt',
  },
  public: {
    OAUTH_TOKEN: '/oauth/token',
  },
};

export const PRIVATE_ROUTES = Object.values(API_ROUTES.private);
