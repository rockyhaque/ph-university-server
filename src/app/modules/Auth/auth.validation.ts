import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'Id is required.' }),
    password: z.string({ required_error: 'Password is requird' }),
  }),
});

const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({ required_error: 'Old Password is required.' }),
    newPassword: z.string({ required_error: 'New Password is requird' }),
  }),
});

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required'
    })
  })
})

const forgetPasswordValidationSchema = z.object({
  body: z.object({
    id: z.string({
      required_error: "user id is requied"
    })
  })
})

const resetPasswordValidationSchema = z.object({
  body: z.object({
    id: z.string({
      required_error: "User id is requied"
    }),
    newPassword: z.string({
      required_error: "New Password is requied"
    })
  })
})

export const AuthValidation = {
  loginValidationSchema,
  changePasswordValidationSchema,
  refreshTokenValidationSchema,
  forgetPasswordValidationSchema,
  resetPasswordValidationSchema
};
