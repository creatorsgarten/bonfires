import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutStaffsInput } from './event-update-without-staffs.input';
import { EventCreateWithoutStaffsInput } from './event-create-without-staffs.input';

@InputType()
export class EventUpsertWithoutStaffsInput {

    @Field(() => EventUpdateWithoutStaffsInput, {nullable:false})
    update!: EventUpdateWithoutStaffsInput;

    @Field(() => EventCreateWithoutStaffsInput, {nullable:false})
    create!: EventCreateWithoutStaffsInput;
}
