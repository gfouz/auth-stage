export type UserType = {
  email: string;
  message: string;
};

export type FormData = {
  email: string;
  password: string;
};

export type UserRegisterProps = {
  serverFn: (data: t_contact_data) => Promise<unknown>;
};
