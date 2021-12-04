import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutUserInput } from './staff-create-without-user.input';
import { StaffCreateOrConnectWithoutUserInput } from './staff-create-or-connect-without-user.input';
import { StaffUpsertWithWhereUniqueWithoutUserInput } from './staff-upsert-with-where-unique-without-user.input';
import { StaffCreateManyUserInputEnvelope } from './staff-create-many-user-input-envelope.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithWhereUniqueWithoutUserInput } from './staff-update-with-where-unique-without-user.input';
import { StaffUpdateManyWithWhereWithoutUserInput } from './staff-update-many-with-where-without-user.input';
import { StaffScalarWhereInput } from './staff-scalar-where.input';

@InputType()
export class StaffUncheckedUpdateManyWithoutUserInput {

    @Field(() => [StaffCreateWithoutUserInput], {nullable:true})
    create?: Array<StaffCreateWithoutUserInput>;

    @Field(() => [StaffCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<StaffCreateOrConnectWithoutUserInput>;

    @Field(() => [StaffUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<StaffUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => StaffCreateManyUserInputEnvelope, {nullable:true})
    createMany?: StaffCreateManyUserInputEnvelope;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    set?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    disconnect?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    delete?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    connect?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<StaffUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [StaffUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<StaffUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [StaffScalarWhereInput], {nullable:true})
    deleteMany?: Array<StaffScalarWhereInput>;
}
