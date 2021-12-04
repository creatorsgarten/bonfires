import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutStaffsInput } from './role-create-without-staffs.input';
import { RoleCreateOrConnectWithoutStaffsInput } from './role-create-or-connect-without-staffs.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedManyWithoutStaffsInput {

    @Field(() => [RoleCreateWithoutStaffsInput], {nullable:true})
    create?: Array<RoleCreateWithoutStaffsInput>;

    @Field(() => [RoleCreateOrConnectWithoutStaffsInput], {nullable:true})
    connectOrCreate?: Array<RoleCreateOrConnectWithoutStaffsInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    connect?: Array<RoleWhereUniqueInput>;
}
