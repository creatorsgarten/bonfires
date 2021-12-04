import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithoutRolesInput } from './staff-update-without-roles.input';

@InputType()
export class StaffUpdateWithWhereUniqueWithoutRolesInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffUpdateWithoutRolesInput, {nullable:false})
    data!: StaffUpdateWithoutRolesInput;
}
