import { registerEnumType } from '@nestjs/graphql';

export enum StaffScalarFieldEnum {
    id = "id",
    displayName = "displayName",
    userId = "userId",
    eventId = "eventId",
    directorDayId = "directorDayId"
}


registerEnumType(StaffScalarFieldEnum, { name: 'StaffScalarFieldEnum', description: undefined })
