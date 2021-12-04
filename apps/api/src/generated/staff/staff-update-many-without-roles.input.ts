import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutRolesInput } from './staff-create-without-roles.input';
import { StaffCreateOrConnectWithoutRolesInput } from './staff-create-or-connect-without-roles.input';
import { StaffUpsertWithWhereUniqueWithoutRolesInput } from './staff-upsert-with-where-unique-without-roles.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithWhereUniqueWithoutRolesInput } from './staff-update-with-where-unique-without-roles.input';
import { StaffUpdateManyWithWhereWithoutRolesInput } from './staff-update-many-with-where-without-roles.input';
import { StaffScalarWhereInput } from './staff-scalar-where.input';

@InputType()
export class StaffUpdateManyWithoutRolesInput {

    @Field(() => [StaffCreateWithoutRolesInput], {nullable:true})
    create?: Array<StaffCreateWithoutRolesInput>;

    @Field(() => [StaffCreateOrConnectWithoutRolesInput], {nullable:true})
    connectOrCreate?: Array<StaffCreateOrConnectWithoutRolesInput>;

    @Field(() => [StaffUpsertWithWhereUniqueWithoutRolesInput], {nullable:true})
    upsert?: Array<StaffUpsertWithWhereUniqueWithoutRolesInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    set?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    disconnect?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    delete?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    connect?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffUpdateWithWhereUniqueWithoutRolesInput], {nullable:true})
    update?: Array<StaffUpdateWithWhereUniqueWithoutRolesInput>;

    @Field(() => [StaffUpdateManyWithWhereWithoutRolesInput], {nullable:true})
    updateMany?: Array<StaffUpdateManyWithWhereWithoutRolesInput>;

    @Field(() => [StaffScalarWhereInput], {nullable:true})
    deleteMany?: Array<StaffScalarWhereInput>;
}
