import { registerEnumType } from '@nestjs/graphql';

export enum RoleScalarFieldEnum {
    id = "id",
    title = "title",
    type = "type",
    squadId = "squadId"
}


registerEnumType(RoleScalarFieldEnum, { name: 'RoleScalarFieldEnum', description: undefined })
