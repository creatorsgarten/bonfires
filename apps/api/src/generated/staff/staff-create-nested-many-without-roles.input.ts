import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutRolesInput } from './staff-create-without-roles.input';
import { StaffCreateOrConnectWithoutRolesInput } from './staff-create-or-connect-without-roles.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';

@InputType()
export class StaffCreateNestedManyWithoutRolesInput {

    @Field(() => [StaffCreateWithoutRolesInput], {nullable:true})
    create?: Array<StaffCreateWithoutRolesInput>;

    @Field(() => [StaffCreateOrConnectWithoutRolesInput], {nullable:true})
    connectOrCreate?: Array<StaffCreateOrConnectWithoutRolesInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    connect?: Array<StaffWhereUniqueInput>;
}
