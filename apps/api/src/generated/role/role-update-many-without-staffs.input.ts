import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutStaffsInput } from './role-create-without-staffs.input';
import { RoleCreateOrConnectWithoutStaffsInput } from './role-create-or-connect-without-staffs.input';
import { RoleUpsertWithWhereUniqueWithoutStaffsInput } from './role-upsert-with-where-unique-without-staffs.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithWhereUniqueWithoutStaffsInput } from './role-update-with-where-unique-without-staffs.input';
import { RoleUpdateManyWithWhereWithoutStaffsInput } from './role-update-many-with-where-without-staffs.input';
import { RoleScalarWhereInput } from './role-scalar-where.input';

@InputType()
export class RoleUpdateManyWithoutStaffsInput {

    @Field(() => [RoleCreateWithoutStaffsInput], {nullable:true})
    create?: Array<RoleCreateWithoutStaffsInput>;

    @Field(() => [RoleCreateOrConnectWithoutStaffsInput], {nullable:true})
    connectOrCreate?: Array<RoleCreateOrConnectWithoutStaffsInput>;

    @Field(() => [RoleUpsertWithWhereUniqueWithoutStaffsInput], {nullable:true})
    upsert?: Array<RoleUpsertWithWhereUniqueWithoutStaffsInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    set?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    disconnect?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    delete?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    connect?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleUpdateWithWhereUniqueWithoutStaffsInput], {nullable:true})
    update?: Array<RoleUpdateWithWhereUniqueWithoutStaffsInput>;

    @Field(() => [RoleUpdateManyWithWhereWithoutStaffsInput], {nullable:true})
    updateMany?: Array<RoleUpdateManyWithWhereWithoutStaffsInput>;

    @Field(() => [RoleScalarWhereInput], {nullable:true})
    deleteMany?: Array<RoleScalarWhereInput>;
}
