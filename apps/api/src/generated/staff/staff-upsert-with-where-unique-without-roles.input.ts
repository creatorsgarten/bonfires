import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithoutRolesInput } from './staff-update-without-roles.input';
import { StaffCreateWithoutRolesInput } from './staff-create-without-roles.input';

@InputType()
export class StaffUpsertWithWhereUniqueWithoutRolesInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffUpdateWithoutRolesInput, {nullable:false})
    update!: StaffUpdateWithoutRolesInput;

    @Field(() => StaffCreateWithoutRolesInput, {nullable:false})
    create!: StaffCreateWithoutRolesInput;
}
