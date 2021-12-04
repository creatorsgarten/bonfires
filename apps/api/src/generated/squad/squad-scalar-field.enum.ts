import { registerEnumType } from '@nestjs/graphql';

export enum SquadScalarFieldEnum {
    id = "id",
    title = "title"
}


registerEnumType(SquadScalarFieldEnum, { name: 'SquadScalarFieldEnum', description: undefined })
