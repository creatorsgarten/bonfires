import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutEventInput } from './staff-create-without-event.input';
import { StaffCreateOrConnectWithoutEventInput } from './staff-create-or-connect-without-event.input';
import { StaffCreateManyEventInputEnvelope } from './staff-create-many-event-input-envelope.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';

@InputType()
export class StaffUncheckedCreateNestedManyWithoutEventInput {

    @Field(() => [StaffCreateWithoutEventInput], {nullable:true})
    create?: Array<StaffCreateWithoutEventInput>;

    @Field(() => [StaffCreateOrConnectWithoutEventInput], {nullable:true})
    connectOrCreate?: Array<StaffCreateOrConnectWithoutEventInput>;

    @Field(() => StaffCreateManyEventInputEnvelope, {nullable:true})
    createMany?: StaffCreateManyEventInputEnvelope;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    connect?: Array<StaffWhereUniqueInput>;
}
