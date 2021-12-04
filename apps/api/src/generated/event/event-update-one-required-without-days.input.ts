import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutDaysInput } from './event-create-without-days.input';
import { EventCreateOrConnectWithoutDaysInput } from './event-create-or-connect-without-days.input';
import { EventUpsertWithoutDaysInput } from './event-upsert-without-days.input';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithoutDaysInput } from './event-update-without-days.input';

@InputType()
export class EventUpdateOneRequiredWithoutDaysInput {

    @Field(() => EventCreateWithoutDaysInput, {nullable:true})
    create?: EventCreateWithoutDaysInput;

    @Field(() => EventCreateOrConnectWithoutDaysInput, {nullable:true})
    connectOrCreate?: EventCreateOrConnectWithoutDaysInput;

    @Field(() => EventUpsertWithoutDaysInput, {nullable:true})
    upsert?: EventUpsertWithoutDaysInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    connect?: EventWhereUniqueInput;

    @Field(() => EventUpdateWithoutDaysInput, {nullable:true})
    update?: EventUpdateWithoutDaysInput;
}
