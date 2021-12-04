import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';
import { StaffUpdateManyWithoutRolesInput } from '../staff/staff-update-many-without-roles.input';

@InputType()
export class RoleUpdateWithoutSquadInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => RoleType, {nullable:true})
    type?: keyof typeof RoleType;

    @Field(() => StaffUpdateManyWithoutRolesInput, {nullable:true})
    staffs?: StaffUpdateManyWithoutRolesInput;
}
