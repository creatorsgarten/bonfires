import { registerEnumType } from '@nestjs/graphql';

export enum WorkspaceScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug"
}


registerEnumType(WorkspaceScalarFieldEnum, { name: 'WorkspaceScalarFieldEnum', description: undefined })
