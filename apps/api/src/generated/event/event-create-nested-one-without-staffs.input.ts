import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutStaffsInput } from './event-create-without-staffs.input';
import { EventCreateOrConnectWithoutStaffsInput } from './event-create-or-connect-without-staffs.input';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutStaffsInput {

    @Field(() => EventCreateWithoutStaffsInput, {nullable:true})
    create?: EventCreateWithoutStaffsInput;

    @Field(() => EventCreateOrConnectWithoutStaffsInput, {nullable:true})
    connectOrCreate?: EventCreateOrConnectWithoutStaffsInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    connect?: EventWhereUniqueInput;
}
