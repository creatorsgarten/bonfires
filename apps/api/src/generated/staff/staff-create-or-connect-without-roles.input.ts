import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffCreateWithoutRolesInput } from './staff-create-without-roles.input';

@InputType()
export class StaffCreateOrConnectWithoutRolesInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffCreateWithoutRolesInput, {nullable:false})
    create!: StaffCreateWithoutRolesInput;
}
