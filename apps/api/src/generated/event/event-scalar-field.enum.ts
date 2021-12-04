import { registerEnumType } from '@nestjs/graphql';

export enum EventScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug",
    workspaceId = "workspaceId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EventScalarFieldEnum, { name: 'EventScalarFieldEnum', description: undefined })
