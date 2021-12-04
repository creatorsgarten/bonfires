import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutDaysInput } from './event-create-without-days.input';
import { EventCreateOrConnectWithoutDaysInput } from './event-create-or-connect-without-days.input';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutDaysInput {

    @Field(() => EventCreateWithoutDaysInput, {nullable:true})
    create?: EventCreateWithoutDaysInput;

    @Field(() => EventCreateOrConnectWithoutDaysInput, {nullable:true})
    connectOrCreate?: EventCreateOrConnectWithoutDaysInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    connect?: EventWhereUniqueInput;
}
