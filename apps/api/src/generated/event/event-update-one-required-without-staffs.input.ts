import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutStaffsInput } from './event-create-without-staffs.input';
import { EventCreateOrConnectWithoutStaffsInput } from './event-create-or-connect-without-staffs.input';
import { EventUpsertWithoutStaffsInput } from './event-upsert-without-staffs.input';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithoutStaffsInput } from './event-update-without-staffs.input';

@InputType()
export class EventUpdateOneRequiredWithoutStaffsInput {

    @Field(() => EventCreateWithoutStaffsInput, {nullable:true})
    create?: EventCreateWithoutStaffsInput;

    @Field(() => EventCreateOrConnectWithoutStaffsInput, {nullable:true})
    connectOrCreate?: EventCreateOrConnectWithoutStaffsInput;

    @Field(() => EventUpsertWithoutStaffsInput, {nullable:true})
    upsert?: EventUpsertWithoutStaffsInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    connect?: EventWhereUniqueInput;

    @Field(() => EventUpdateWithoutStaffsInput, {nullable:true})
    update?: EventUpdateWithoutStaffsInput;
}
