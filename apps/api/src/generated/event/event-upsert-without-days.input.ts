import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutDaysInput } from './event-update-without-days.input';
import { EventCreateWithoutDaysInput } from './event-create-without-days.input';

@InputType()
export class EventUpsertWithoutDaysInput {

    @Field(() => EventUpdateWithoutDaysInput, {nullable:false})
    update!: EventUpdateWithoutDaysInput;

    @Field(() => EventCreateWithoutDaysInput, {nullable:false})
    create!: EventCreateWithoutDaysInput;
}
