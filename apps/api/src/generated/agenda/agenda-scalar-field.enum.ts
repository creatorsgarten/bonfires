import { registerEnumType } from '@nestjs/graphql';

export enum AgendaScalarFieldEnum {
    id = "id",
    title = "title",
    startSlot = "startSlot",
    endSlot = "endSlot",
    dayId = "dayId"
}


registerEnumType(AgendaScalarFieldEnum, { name: 'AgendaScalarFieldEnum', description: undefined })
