import { registerEnumType } from '@nestjs/graphql';

export enum DayScalarFieldEnum {
    id = "id",
    title = "title",
    startsAt = "startsAt",
    eventId = "eventId"
}


registerEnumType(DayScalarFieldEnum, { name: 'DayScalarFieldEnum', description: undefined })
