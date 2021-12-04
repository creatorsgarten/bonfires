import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutEventInput } from './staff-create-without-event.input';
import { StaffCreateOrConnectWithoutEventInput } from './staff-create-or-connect-without-event.input';
import { StaffUpsertWithWhereUniqueWithoutEventInput } from './staff-upsert-with-where-unique-without-event.input';
import { StaffCreateManyEventInputEnvelope } from './staff-create-many-event-input-envelope.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithWhereUniqueWithoutEventInput } from './staff-update-with-where-unique-without-event.input';
import { StaffUpdateManyWithWhereWithoutEventInput } from './staff-update-many-with-where-without-event.input';
import { StaffScalarWhereInput } from './staff-scalar-where.input';

@InputType()
export class StaffUncheckedUpdateManyWithoutEventInput {

    @Field(() => [StaffCreateWithoutEventInput], {nullable:true})
    create?: Array<StaffCreateWithoutEventInput>;

    @Field(() => [StaffCreateOrConnectWithoutEventInput], {nullable:true})
    connectOrCreate?: Array<StaffCreateOrConnectWithoutEventInput>;

    @Field(() => [StaffUpsertWithWhereUniqueWithoutEventInput], {nullable:true})
    upsert?: Array<StaffUpsertWithWhereUniqueWithoutEventInput>;

    @Field(() => StaffCreateManyEventInputEnvelope, {nullable:true})
    createMany?: StaffCreateManyEventInputEnvelope;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    set?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    disconnect?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    delete?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    connect?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffUpdateWithWhereUniqueWithoutEventInput], {nullable:true})
    update?: Array<StaffUpdateWithWhereUniqueWithoutEventInput>;

    @Field(() => [StaffUpdateManyWithWhereWithoutEventInput], {nullable:true})
    updateMany?: Array<StaffUpdateManyWithWhereWithoutEventInput>;

    @Field(() => [StaffScalarWhereInput], {nullable:true})
    deleteMany?: Array<StaffScalarWhereInput>;
}
