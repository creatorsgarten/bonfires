import { registerEnumType } from '@nestjs/graphql';

export enum DutyScalarFieldEnum {
    id = "id",
    title = "title",
    dayId = "dayId",
    startSlot = "startSlot",
    endSlot = "endSlot",
    squadId = "squadId"
}


registerEnumType(DutyScalarFieldEnum, { name: 'DutyScalarFieldEnum', description: undefined })
