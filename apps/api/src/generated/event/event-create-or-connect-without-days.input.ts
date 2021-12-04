import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventCreateWithoutDaysInput } from './event-create-without-days.input';

@InputType()
export class EventCreateOrConnectWithoutDaysInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    where!: EventWhereUniqueInput;

    @Field(() => EventCreateWithoutDaysInput, {nullable:false})
    create!: EventCreateWithoutDaysInput;
}
