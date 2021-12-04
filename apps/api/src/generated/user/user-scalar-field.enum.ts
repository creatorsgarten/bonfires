import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    username = "username",
    displayName = "displayName",
    photo = "photo",
    profileId = "profileId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
