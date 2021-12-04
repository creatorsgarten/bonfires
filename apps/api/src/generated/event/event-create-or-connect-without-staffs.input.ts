import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventCreateWithoutStaffsInput } from './event-create-without-staffs.input';

@InputType()
export class EventCreateOrConnectWithoutStaffsInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    where!: EventWhereUniqueInput;

    @Field(() => EventCreateWithoutStaffsInput, {nullable:false})
    create!: EventCreateWithoutStaffsInput;
}
