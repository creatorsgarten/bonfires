import { registerEnumType } from '@nestjs/graphql';

export enum RoleType {
    MC = "MC",
    OD = "OD",
    HEAD = "HEAD",
    STAFF = "STAFF"
}


registerEnumType(RoleType, { name: 'RoleType', description: undefined })
