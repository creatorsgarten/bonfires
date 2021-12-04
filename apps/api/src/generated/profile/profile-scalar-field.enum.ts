import { registerEnumType } from '@nestjs/graphql';

export enum ProfileScalarFieldEnum {
    id = "id",
    userId = "userId",
    firstName = "firstName",
    lastName = "lastName",
    phone = "phone",
    homeAddress = "homeAddress",
    lineId = "lineId"
}


registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined })
